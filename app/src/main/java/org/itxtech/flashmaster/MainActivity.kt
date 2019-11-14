package org.itxtech.flashmaster

import android.app.AlertDialog
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

/*
 *
 * FlashMasterAndroid
 *
 * Copyright (C) 2019 iTX Technologies
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
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val webView = findViewById<WebView>(R.id.webview)
        val settings = webView.settings
        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        settings.setAppCacheEnabled(true)
        settings.allowFileAccess = true
        settings.databaseEnabled = true
        settings.setAppCachePath(application.cacheDir.absolutePath)
        settings.loadsImagesAutomatically = true
        settings.allowUniversalAccessFromFileURLs = true
        webView.webViewClient = object : WebViewClient() {
            override fun doUpdateVisitedHistory(view: WebView?, url: String?, isReload: Boolean) {
                if (url!!.startsWith("file:///android_asset/index.html#/about")) {
                    AlertDialog.Builder(this@MainActivity)
                        .setTitle(R.string.about_title)
                        .setMessage(
                            getString(R.string.about)
                                .replace("ver", BuildConfig.VERSION_NAME + " (" + BuildConfig.VERSION_CODE + ")")
                                .replace("rev", BuildConfig.GIT_COMMIT)
                        )
                        .setNegativeButton("GitHub") { _, _ ->
                            startActivity(
                                Intent(
                                    Intent.ACTION_VIEW,
                                    Uri.parse("https://github.com/iTXTech/FlashMasterAndroid")
                                )
                            )
                        }
                        .setPositiveButton(android.R.string.cancel) { _, _ -> "" }
                        .show()
                }
                super.doUpdateVisitedHistory(view, url, isReload)
            }
        }
        webView.loadUrl("file:///android_asset/index.html")
    }
}
