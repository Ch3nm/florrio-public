// ==UserScript==
// @name         Florrio - Autolang
// @namespace    http://tampermonkey.net/
// @version      2026-04-30
// @description  import florrio custom language automatically
// @author       Ch3nm
// @match        https://florr.io/
// @grant        none
// @run-at       document-start
// ==/UserScript==

(async () => {
    const res = await fetch('https://raw.githubusercontent.com/Ch3nm/florrio-public/main/florrio_custom_langMODIFIED');
    if (res.ok) localStorage.setItem('florrio_custom_lang', await res.text());
})();
