package org.itxtech.flashmaster

import android.Manifest
import android.annotation.SuppressLint
import android.app.AlertDialog
import android.content.ContentValues
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.Environment
import android.os.Handler
import android.provider.MediaStore
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.google.android.material.snackbar.Snackbar
import org.xwalk.core.XWalkDownloadListener
import org.xwalk.core.XWalkResourceClient
import org.xwalk.core.XWalkView
import java.io.File
import java.io.FileOutputStream
import java.io.OutputStream

/*
 *
 * FlashMasterAndroid
 *
 * Copyright (C) 2019-2020 iTX Technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author PeratX
 *
 */
class MainActivity : AppCompatActivity() {
    private val patchJs: String = "javascript:document.getElementsByClassName(\"mdi-book-information-variant\")[0]" +
            ".setAttribute(\"class\", document.getElementsByClassName(\"mdi-book-information-variant\")[0]" +
            ".getAttribute(\"class\").replace(\"mdi-book-information-variant\", \"mdi-information\"));"

    private var webView: XWalkView? = null
    private var file: String? = null

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        webView = findViewById(R.id.webview)
        webView!!.setResourceClient(object : XWalkResourceClient(webView) {
            override fun doUpdateVisitedHistory(view: XWalkView?, url: String?, isReload: Boolean) {
                if (url!!.startsWith("file:///android_asset/index.html#/decode")) {
                    view!!.load(patchJs, "")
                }
                if (url.startsWith("file:///android_asset/index.html#/about")) {
                    AlertDialog.Builder(this@MainActivity)
                        .setTitle(R.string.about_title)
                        .setMessage(
                            getString(R.string.about)
                                .replace("ver", BuildConfig.VERSION_NAME + " (" + BuildConfig.VERSION_CODE + ")")
                                .replace("rev", BuildConfig.GIT_COMMIT)
                        )
                        .setNegativeButton("GitHub") { _, _ -> openUri("https://github.com/iTXTech/FlashMasterAndroid") }
                        .setPositiveButton(android.R.string.cancel) { _, _ -> "" }
                        .show()
                }
                super.doUpdateVisitedHistory(view, url, isReload)
            }

            override fun shouldOverrideUrlLoading(view: XWalkView?, url: String?): Boolean {
                if (!url!!.startsWith("file://")) {
                    openUri(url)
                    return true
                }
                return false
            }

            override fun onLoadFinished(view: XWalkView?, url: String?) {
                Handler().postDelayed({
                    view!!.visibility = View.VISIBLE
                }, 200)
                super.onLoadFinished(view, url)
            }
        })
        webView!!.setDownloadListener(object : XWalkDownloadListener(this) {
            override fun onDownloadStart(
                url: String?,
                userAgent: String?,
                contentDisposition: String?,
                mimetype: String?,
                contentLength: Long
            ) {
                save(url!!)
            }
        })

        webView!!.load("file:///android_asset/index.html", "")
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

    private fun write() {
        val stream = assets.open(file!!)
        val fileName = file!!.substringAfter("/")
        val os: OutputStream?
        os = if (Build.VERSION.SDK_INT < Build.VERSION_CODES.Q) {
            val f = File(
                Environment.getExternalStoragePublicDirectory(
                    Environment.DIRECTORY_PICTURES
                ).absolutePath + "/" + fileName
            )
            FileOutputStream(f)
        } else {
            val contentValues = ContentValues().apply {
                put(MediaStore.MediaColumns.DISPLAY_NAME, fileName)
                put(MediaStore.MediaColumns.MIME_TYPE, "image/jpeg")
                put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_PICTURES)
            }
            val uri = contentResolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues)
            contentResolver.openOutputStream(uri!!)
        }
        Thread {
            while (stream.available() > 0) {
                os!!.write(stream.read())
            }
            os!!.close()
            runOnUiThread {
                Snackbar.make(findViewById(R.id.view), R.string.fileStored, Snackbar.LENGTH_LONG).show()
            }
        }.start()
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String?>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == 1) {
            for (result in grantResults) {
                if (result != PackageManager.PERMISSION_GRANTED) {
                    file = null
                    Snackbar.make(findViewById(R.id.view), R.string.permDenied, Snackbar.LENGTH_LONG).show()
                    return
                }
            }
            write()
        }
    }

    private fun openUri(uri: String) {
        startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(uri)))
    }
}
