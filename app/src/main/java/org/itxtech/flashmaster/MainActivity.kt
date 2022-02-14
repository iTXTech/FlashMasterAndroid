/*
 *
 * FlashMasterAndroid
 *
 * Copyright (C) 2019-2022 iTX Technologies
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * @author PeratX
 *
 */

package org.itxtech.flashmaster

import android.Manifest
import android.annotation.SuppressLint
import android.app.AlertDialog
import android.content.ContentValues
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.*
import android.provider.MediaStore
import android.view.View
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.google.android.material.snackbar.Snackbar
import org.itxtech.flashmaster.databinding.ActivityMainBinding
import java.io.File
import java.io.FileOutputStream
import kotlin.concurrent.thread

class MainActivity : AppCompatActivity() {
    private lateinit var file: String
    private lateinit var binding: ActivityMainBinding

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        with(binding.webview) {
            settings.apply {
                setAppCacheEnabled(true)
                setAppCachePath(application.cacheDir.absolutePath)
                javaScriptEnabled = true
                domStorageEnabled = true
                allowFileAccess = true
                databaseEnabled = true
                loadsImagesAutomatically = true
                allowUniversalAccessFromFileURLs = true
                allowFileAccessFromFileURLs = true
                userAgentString = "FlashMasterAndroid/" + BuildConfig.VERSION_NAME
            }
            webViewClient = object : WebViewClient() {
                override fun doUpdateVisitedHistory(view: WebView?, url: String?, isReload: Boolean) {
                    if (url!!.startsWith("file:///android_asset/index.html#/about")) {
                        AlertDialog.Builder(this@MainActivity)
                            .setTitle(R.string.about_title)
                            .setMessage(
                                getString(R.string.about)
                                    .replace("ver", BuildConfig.VERSION_NAME + " (" + BuildConfig.VERSION_CODE + ")")
                                    .replace("rev", BuildConfig.GIT_COMMIT)
                            )
                            .setNegativeButton("GitHub") { _, _ -> openUri("https://github.com/iTXTech/FlashMasterAndroid") }
                            .setPositiveButton(android.R.string.cancel, null)
                            .show()
                    }
                    super.doUpdateVisitedHistory(view, url, isReload)
                }

                override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
                    if (!url!!.startsWith("file://")) {
                        openUri(url)
                        return true
                    }
                    return false
                }

                override fun onPageFinished(view: WebView?, url: String?) {
                    Handler(Looper.getMainLooper()).postDelayed({
                        view?.visibility = View.VISIBLE
                    }, 200)
                    super.onPageFinished(view, url)
                }
            }
            setDownloadListener { url, _, _, _, _ ->
                save(url)
            }
            loadUrl("file:///android_asset/index.html")
        }
    }

    private fun save(url: String) {
        file = url.substring(22)
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE) !=
            PackageManager.PERMISSION_GRANTED
        ) {
            ActivityCompat.requestPermissions(
                this@MainActivity,
                arrayOf(Manifest.permission.WRITE_EXTERNAL_STORAGE), 1
            )
        } else {
            write()
        }
    }

    @Suppress("DEPRECATION")
    private fun write() {
        val stream = assets.open(file)
        val fileName = file.substringAfter("/")
        val os = if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q) {
            FileOutputStream(
                File(
                    Environment.getExternalStoragePublicDirectory(
                        Environment.DIRECTORY_PICTURES
                    ).absolutePath + "/" + fileName
                )
            )
        } else {
            val contentValues = ContentValues().apply {
                put(MediaStore.MediaColumns.DISPLAY_NAME, fileName)
                put(MediaStore.MediaColumns.MIME_TYPE, "image/jpeg")
                put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_PICTURES)
            }
            val uri = contentResolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues)
            contentResolver.openOutputStream(uri!!)
        }
        thread {
            os?.use {
                stream.copyTo(it)
            }
            runOnUiThread {
                Snackbar.make(binding.view, R.string.fileStored, Snackbar.LENGTH_LONG).show()
            }
        }
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String?>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == 1) {
            for (result in grantResults) {
                if (result != PackageManager.PERMISSION_GRANTED) {
                    Snackbar.make(binding.view, R.string.permDenied, Snackbar.LENGTH_LONG).show()
                    return
                }
            }
            write()
        }
    }

    private fun openUri(uri: String) =
        startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(uri)))

    override fun onBackPressed() {
        if (binding.webview.canGoBack()) {
            binding.webview.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
