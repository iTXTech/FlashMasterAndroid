package org.itxtech.flashmaster

import android.os.Bundle
import android.webkit.WebView
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
        settings.setAppCacheMaxSize(1024 * 1024 * 8)
        settings.databaseEnabled = true
        settings.setAppCachePath(application.cacheDir.absolutePath)
        settings.loadsImagesAutomatically = true
        settings.allowUniversalAccessFromFileURLs = true
        webView.loadUrl("file:///android_asset/index.html")
    }
}
