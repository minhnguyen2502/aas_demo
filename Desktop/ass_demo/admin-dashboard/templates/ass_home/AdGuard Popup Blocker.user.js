(function anonymous(a) {
    with(a.sandbox) {
        (function(userscript) {
            'use strict';
            userscript.call(a.sandbox, a.m(a.getValue), a.m(a.setValue), a.m(a.deleteValue), a.m(a.listValues), a.m(a.getResourceURL), a.settings.scriptInfo, a.unsafeWindow, a.A, a.B, a.w, a.settings, a.settings, a.v, a.C, a.u, a.o, a.G, a.m(a.F), a.D);
        })(function(GM_getValue, GM_setValue, GM_deleteValue, GM_listValues, GM_getResourceURL, GM_info, unsafeWindow, createObjectIn, exportFunction, cloneInto, adguardSettings, AdguardSettings, ADG_addRule, ADG_removeRule, ADG_isFiltered, ADG_changeFilteringState, ADG_temporaryDontBlock, ADG_sendComplaint, ADG_sendAbuse, a) { // ==UserScript==
            // @name AdGuard Popup Blocker
            // @name:ar مانع النوافذ المنبثقة AdGuard
            // @name:be Блакавальнік усплывальнай рэкламы ад AdGuard
            // @name:cs AdGuard blokátor vyskakovacích oken
            // @name:da AdGuard Popup Blocker
            // @name:de AdGuard Pop-up-Blocker
            // @name:el Αποκλεισμός αναδυόμενων παραθύρων AdGuard
            // @name:es AdGuard Popup Blocker
            // @name:fa مسدودساز پاپ-آپ AdGuard
            // @name:fi AdGuard Ponnahdusesto
            // @name:fr Bloqueur de fenêtres pop-up de AdGuard
            // @name:he חוסם חלונות קופצים של AdGuard
            // @name:hr AdGuard Bloker skočnih prozora
            // @name:hu AdGuard Popup Blocker
            // @name:id Pemblokir Popup AdGuard
            // @name:it AdGuard Popup Blocker
            // @name:ja AdGuard ポップアップブロッカー
            // @name:ko AdGuard 팝업 차단기
            // @name:lt AdGuard iššokančiųjų langų blokatorius
            // @name:ms AdGuard Penyekat Pop Timbul
            // @name:no AdGuards popup-blokkerer
            // @name:pl Bloker wyskakujących okienek przez AdGuard
            // @name:nl AdGuard Pop-up Blocker
            // @name:pt AdGuard Bloqueador de Pop-ups
            // @name:pt-PT Bloqueador de Popup AdGuard
            // @name:ro Blocant Pop-up AdGuard
            // @name:ru Блокировщик всплывающей рекламы от AdGuard
            // @name:sk AdGuard blokovač vyskakovacích okien
            // @name:sl AdGuard Zaviralec pojavnih oken
            // @name:sr-CS AdGuard blokator iskačućih prozora
            // @name:ta AdGuard பாப்அப் தடுப்பான்
            // @name:th AdGuard Popup Blocker
            // @name:tr AdGuard Açılır Pencere Engelleyici
            // @name:uk Блокувальник спливних вікон AdGuard
            // @name:vi AdGuard Popup Blocker
            // @name:zh AdGuard 弹窗拦截器
            // @name:zh-HK AdGuard 彈出式視窗封鎖器
            // @name:zh-TW AdGuard 彈出式視窗封鎖器
            // @namespace adguard
            // @description Blocks pop-up ads on web pages
            // @description:ar لحظر الإعلانات المنبثقة على صفحات الويب
            // @description:be Блакуе ўсплывальную рэкламу на старонках
            // @description:cs Blokuje vyskakovací reklamy na webových stránkách
            // @description:da Blokerer pop-op annoncer på websider
            // @description:de Blockiert Anzeige-Pop-ups auf Websites
            // @description:el Αποκλείει αναδυόμενες διαφημίσεις σε ιστοσελίδες
            // @description:es Bloquea anuncios emergentes en sitios web
            // @description:fa مسدودسازی تبلیغات پاپ آپ در صفحات وب.
            // @description:fi Estää verkkosivujen ponnahdusmainokset.
            // @description:fr Bloque les fenêtres pop-up avec publicités intrusives sur les pages web
            // @description:he חוסם פרסומות קופצות בדפי רשת
            // @description:hr Blokira skočne prozore na web stranicama
            // @description:hu Blokkolja a felugró ablakban megjelenő reklámokat a webhelyeken
            // @description:id Blokir iklan popup di halaman web
            // @description:it Blocca gli annunci pop-up sulle pagine web
            // @description:ja Webページでポップアップ広告をブロックします。
            // @description:ko 웹 페이지에서 팝업 광고를 차단
            // @description:lt Blokuoja iššokančius skelbimus tinklalapiuose
            // @description:ms Sekat pop timbul pada laman web
            // @description:no Blokker popup-annonser på nettsider
            // @description:pl Blokuje wyskakujące okienka na stronach internetowych
            // @description:nl Blokkeert pop-upadvertenties op webpagina's
            // @description:pt Bloqueia anúncios pop-ups dentro dos sites
            // @description:pt-PT Bloqueia anúncios popup em páginas da web.
            // @description:ro Blochează reclame pop-up pe pagini web
            // @description:ru Блокирует всплывающую рекламу на страницах
            // @description:sk Blokuje vyskakovacie reklamy na webových stránkach
            // @description:sl Blokira pojavne oglase na spletnih straneh
            // @description:sr-CS Blokira iskačuće reklame na veb stranicama
            // @description:ta வலைப்பக்கங்களில் பாப்அப் விளம்பரங்களைத் தடுக்கிறது
            // @description:th ปิดกั้นโฆษณาป๊อปอัพในหน้าเว็บ
            // @description:tr Web sayfalarında açılır pencere reklamlarını engeller
            // @description:uk Блокує спливну рекламу на вебсторінках
            // @description:vi Chặn quảng cáo bật lên trên các trang web
            // @description:zh 拦截网页弹窗广告
            // @description:zh-HK 封鎖網頁上的彈出式視窗廣告
            // @description:zh-TW 封鎖於網頁上之彈出式視窗廣告
            // @version 2.5.94
            // @license LGPL-3.0; https://github.com/AdguardTeam/PopupBlocker/blob/master/LICENSE
            // @downloadUrl https://userscripts.adtidy.org/release/popup-blocker/2.5/popupblocker.user.js
            // @updateUrl https://userscripts.adtidy.org/release/popup-blocker/2.5/popupblocker.meta.js
            // @supportURL https://github.com/AdguardTeam/PopupBlocker/issues
            // @homepageURL https://popupblocker.adguard.com/release/v1
            // @match http://*/*
            // @match https://*/*
            // @grant GM_getValue
            // @grant GM_setValue
            // @grant GM_deleteValue
            // @grant GM_listValues
            // @grant GM_getResourceURL
            // @grant unsafeWindow
            // @icon https://userscripts.adtidy.org/release/popup-blocker/2.5/assets/128.png
            // @resource ./assets/fonts/bold/OpenSans-Bold.woff https://userscripts.adtidy.org/release/popup-blocker/2.5/assets/fonts/bold/OpenSans-Bold.woff
            // @resource ./assets/fonts/bold/OpenSans-Bold.woff2 https://userscripts.adtidy.org/release/popup-blocker/2.5/assets/fonts/bold/OpenSans-Bold.woff2
            // @resource ./assets/fonts/regular/OpenSans-Regular.woff https://userscripts.adtidy.org/release/popup-blocker/2.5/assets/fonts/regular/OpenSans-Regular.woff
            // @resource ./assets/fonts/regular/OpenSans-Regular.woff2 https://userscripts.adtidy.org/release/popup-blocker/2.5/assets/fonts/regular/OpenSans-Regular.woff2
            // @resource ./assets/fonts/semibold/OpenSans-Semibold.woff https://userscripts.adtidy.org/release/popup-blocker/2.5/assets/fonts/semibold/OpenSans-Semibold.woff
            // @resource ./assets/fonts/semibold/OpenSans-Semibold.woff2 https://userscripts.adtidy.org/release/popup-blocker/2.5/assets/fonts/semibold/OpenSans-Semibold.woff2
            // @run-at document-start
            // @exclude https://www.linkedin.com/*
            // @exclude https://*.facebook.com/*
            // @exclude https://*.google.com/*
            // @exclude https://*.google.ad/*
            // @exclude https://*.google.ae/*
            // @exclude https://*.google.com.af/*
            // @exclude https://*.google.com.ag/*
            // @exclude https://*.google.com.ai/*
            // @exclude https://*.google.al/*
            // @exclude https://*.google.am/*
            // @exclude https://*.google.co.ao/*
            // @exclude https://*.google.com.ar/*
            // @exclude https://*.google.as/*
            // @exclude https://*.google.at/*
            // @exclude https://*.google.com.au/*
            // @exclude https://*.google.az/*
            // @exclude https://*.google.ba/*
            // @exclude https://*.google.com.bd/*
            // @exclude https://*.google.be/*
            // @exclude https://*.google.bf/*
            // @exclude https://*.google.bg/*
            // @exclude https://*.google.com.bh/*
            // @exclude https://*.google.bi/*
            // @exclude https://*.google.bj/*
            // @exclude https://*.google.com.bn/*
            // @exclude https://*.google.com.bo/*
            // @exclude https://*.google.com.br/*
            // @exclude https://*.google.bs/*
            // @exclude https://*.google.bt/*
            // @exclude https://*.google.co.bw/*
            // @exclude https://*.google.by/*
            // @exclude https://*.google.com.bz/*
            // @exclude https://*.google.ca/*
            // @exclude https://*.google.cd/*
            // @exclude https://*.google.cf/*
            // @exclude https://*.google.cg/*
            // @exclude https://*.google.ch/*
            // @exclude https://*.google.ci/*
            // @exclude https://*.google.co.ck/*
            // @exclude https://*.google.cl/*
            // @exclude https://*.google.cm/*
            // @exclude https://*.google.cn/*
            // @exclude https://*.google.com.co/*
            // @exclude https://*.google.co.cr/*
            // @exclude https://*.google.com.cu/*
            // @exclude https://*.google.cv/*
            // @exclude https://*.google.com.cy/*
            // @exclude https://*.google.cz/*
            // @exclude https://*.google.de/*
            // @exclude https://*.google.dj/*
            // @exclude https://*.google.dk/*
            // @exclude https://*.google.dm/*
            // @exclude https://*.google.com.do/*
            // @exclude https://*.google.dz/*
            // @exclude https://*.google.com.ec/*
            // @exclude https://*.google.ee/*
            // @exclude https://*.google.com.eg/*
            // @exclude https://*.google.es/*
            // @exclude https://*.google.com.et/*
            // @exclude https://*.google.fi/*
            // @exclude https://*.google.com.fj/*
            // @exclude https://*.google.fm/*
            // @exclude https://*.google.fr/*
            // @exclude https://*.google.ga/*
            // @exclude https://*.google.ge/*
            // @exclude https://*.google.gg/*
            // @exclude https://*.google.com.gh/*
            // @exclude https://*.google.com.gi/*
            // @exclude https://*.google.gl/*
            // @exclude https://*.google.gm/*
            // @exclude https://*.google.gp/*
            // @exclude https://*.google.gr/*
            // @exclude https://*.google.com.gt/*
            // @exclude https://*.google.gy/*
            // @exclude https://*.google.com.hk/*
            // @exclude https://*.google.hn/*
            // @exclude https://*.google.hr/*
            // @exclude https://*.google.ht/*
            // @exclude https://*.google.hu/*
            // @exclude https://*.google.co.id/*
            // @exclude https://*.google.ie/*
            // @exclude https://*.google.co.il/*
            // @exclude https://*.google.im/*
            // @exclude https://*.google.co.in/*
            // @exclude https://*.google.iq/*
            // @exclude https://*.google.is/*
            // @exclude https://*.google.it/*
            // @exclude https://*.google.je/*
            // @exclude https://*.google.com.jm/*
            // @exclude https://*.google.jo/*
            // @exclude https://*.google.co.jp/*
            // @exclude https://*.google.co.ke/*
            // @exclude https://*.google.com.kh/*
            // @exclude https://*.google.ki/*
            // @exclude https://*.google.kg/*
            // @exclude https://*.google.co.kr/*
            // @exclude https://*.google.com.kw/*
            // @exclude https://*.google.kz/*
            // @exclude https://*.google.la/*
            // @exclude https://*.google.com.lb/*
            // @exclude https://*.google.li/*
            // @exclude https://*.google.lk/*
            // @exclude https://*.google.co.ls/*
            // @exclude https://*.google.lt/*
            // @exclude https://*.google.lu/*
            // @exclude https://*.google.lv/*
            // @exclude https://*.google.com.ly/*
            // @exclude https://*.google.co.ma/*
            // @exclude https://*.google.md/*
            // @exclude https://*.google.me/*
            // @exclude https://*.google.mg/*
            // @exclude https://*.google.mk/*
            // @exclude https://*.google.ml/*
            // @exclude https://*.google.com.mm/*
            // @exclude https://*.google.mn/*
            // @exclude https://*.google.ms/*
            // @exclude https://*.google.com.mt/*
            // @exclude https://*.google.mu/*
            // @exclude https://*.google.mv/*
            // @exclude https://*.google.mw/*
            // @exclude https://*.google.com.mx/*
            // @exclude https://*.google.com.my/*
            // @exclude https://*.google.co.mz/*
            // @exclude https://*.google.com.na/*
            // @exclude https://*.google.com.nf/*
            // @exclude https://*.google.com.ng/*
            // @exclude https://*.google.com.ni/*
            // @exclude https://*.google.ne/*
            // @exclude https://*.google.nl/*
            // @exclude https://*.google.no/*
            // @exclude https://*.google.com.np/*
            // @exclude https://*.google.nr/*
            // @exclude https://*.google.nu/*
            // @exclude https://*.google.co.nz/*
            // @exclude https://*.google.com.om/*
            // @exclude https://*.google.com.pa/*
            // @exclude https://*.google.com.pe/*
            // @exclude https://*.google.com.pg/*
            // @exclude https://*.google.com.ph/*
            // @exclude https://*.google.com.pk/*
            // @exclude https://*.google.pl/*
            // @exclude https://*.google.pn/*
            // @exclude https://*.google.com.pr/*
            // @exclude https://*.google.ps/*
            // @exclude https://*.google.pt/*
            // @exclude https://*.google.com.py/*
            // @exclude https://*.google.com.qa/*
            // @exclude https://*.google.ro/*
            // @exclude https://*.google.ru/*
            // @exclude https://*.google.rw/*
            // @exclude https://*.google.com.sa/*
            // @exclude https://*.google.com.sb/*
            // @exclude https://*.google.sc/*
            // @exclude https://*.google.se/*
            // @exclude https://*.google.com.sg/*
            // @exclude https://*.google.sh/*
            // @exclude https://*.google.si/*
            // @exclude https://*.google.sk/*
            // @exclude https://*.google.com.sl/*
            // @exclude https://*.google.sn/*
            // @exclude https://*.google.so/*
            // @exclude https://*.google.sm/*
            // @exclude https://*.google.sr/*
            // @exclude https://*.google.st/*
            // @exclude https://*.google.com.sv/*
            // @exclude https://*.google.td/*
            // @exclude https://*.google.tg/*
            // @exclude https://*.google.co.th/*
            // @exclude https://*.google.com.tj/*
            // @exclude https://*.google.tk/*
            // @exclude https://*.google.tl/*
            // @exclude https://*.google.tm/*
            // @exclude https://*.google.tn/*
            // @exclude https://*.google.to/*
            // @exclude https://*.google.com.tr/*
            // @exclude https://*.google.tt/*
            // @exclude https://*.google.com.tw/*
            // @exclude https://*.google.co.tz/*
            // @exclude https://*.google.com.ua/*
            // @exclude https://*.google.co.ug/*
            // @exclude https://*.google.co.uk/*
            // @exclude https://*.google.com.uy/*
            // @exclude https://*.google.co.uz/*
            // @exclude https://*.google.com.vc/*
            // @exclude https://*.google.co.ve/*
            // @exclude https://*.google.vg/*
            // @exclude https://*.google.co.vi/*
            // @exclude https://*.google.com.vn/*
            // @exclude https://*.google.vu/*
            // @exclude https://*.google.ws/*
            // @exclude https://*.google.rs/*
            // @exclude https://*.google.co.za/*
            // @exclude https://*.google.co.zm/*
            // @exclude https://*.google.co.zw/*
            // @exclude https://*.google.cat/*
            // @exclude https://*.youtube.com/*
            // @exclude *://disqus.com/embed/*
            // @exclude https://vk.com/*
            // @exclude https://*.vk.com/*
            // @exclude https://vimeo.com/*
            // @exclude https://*.vimeo.com/*
            // @exclude *://*.coub.com/*
            // @exclude *://coub.com/*
            // @exclude *://*.googlesyndication.com/*
            // @exclude *://*.naver.com/*
            // @exclude https://gstatic.com/*
            // @exclude https://*.gstatic.com/*
            // @exclude https://yandex.ru/*
            // @exclude https://*.yandex.ru/*
            // @exclude https://yandex.ua/*
            // @exclude https://*.yandex.ua/*
            // @exclude https://yandex.by/*
            // @exclude https://*.yandex.by/*
            // @exclude https://yandex.com/*
            // @exclude https://*.yandex.com/*
            // @exclude https://yandex.com.tr/*
            // @exclude https://*.yandex.com.tr/*
            // @exclude https://yandex.kz/*
            // @exclude https://*.yandex.kz/*
            // @exclude https://yandex.fr/*
            // @exclude https://*.yandex.fr/*
            // @exclude https://*.twitch.tv/*
            // @exclude https://tinder.com/*
            // @exclude *://*.yahoo.com/*
            // @exclude *://chatovod.ru/*
            // @exclude *://*.chatovod.ru/*
            // @exclude *://vc.ru/*
            // @exclude *://tjournal.ru/*
            // @exclude *://amanice.ru/*
            // @exclude *://ka-union.ru/*
            // @exclude *://gameforge.com/*
            // @exclude *://*.gameforge.com/*
            // @exclude *://*.ssgdfm.com/*
            // @exclude *://*.brainpop.com/*
            // @exclude *://*.taobao.com/*
            // @exclude *://*.ksl.com/*
            // @exclude *://*.t-online.de/*
            // @exclude *://boards.4channel.org/*
            // @exclude *://*.washingtonpost.com/*
            // @exclude *://*.kakao.com/*
            // @exclude *://*.discounttire.com/*
            // @exclude *://mail.ukr.net/*
            // @exclude *://*.mail.ukr.net/*
            // @exclude *://*.sahadan.com/*
            // @exclude *://*.groupon.*/*
            // @exclude *://*.amoma.com/*
            // @exclude *://*.jccsmart.com/*
            // @exclude *://wp.pl/*
            // @exclude *://*.wp.pl/*
            // @exclude *://money.pl/*
            // @exclude *://*.money.pl/*
            // @exclude *://o2.pl/*
            // @exclude *://*.o2.pl/*
            // @exclude *://pudelek.pl/*
            // @exclude *://*.pudelek.pl/*
            // @exclude *://komorkomania.pl/*
            // @exclude *://*.komorkomania.pl/*
            // @exclude *://gadzetomania.pl/*
            // @exclude *://*.gadzetomania.pl/*
            // @exclude *://fotoblogia.pl/*
            // @exclude *://*.fotoblogia.pl/*
            // @exclude *://autokult.pl/*
            // @exclude *://*.autokult.pl/*
            // @exclude *://abczdrowie.pl/*
            // @exclude *://*.abczdrowie.pl/*
            // @exclude *://parenting.pl/*
            // @exclude *://*.parenting.pl/*
            // @exclude *://dobreprogramy.pl/*
            // @exclude *://*.dobreprogramy.pl/*
            // @exclude *://polygamia.pl/*
            // @exclude *://*.polygamia.pl/*
            // @exclude *://*.mosreg.ru/*
            // @exclude *://vietjetair.com/*
            // @exclude *://*.vietjetair.com/*
            // @exclude https://web.skype.com/*
            // @exclude *://karelia.press/*
            // @exclude *://*.karelia.press/*
            // @exclude *://microsoft.com/*
            // @exclude *://*.microsoft.com/*
            // @exclude *://bancoctt.pt/*
            // @exclude *://*.bancoctt.pt/*
            // @exclude *://print24.com/*
            // @exclude *://*.print24.com/*
            // @exclude *://shellfcu.org/*
            // @exclude *://*.shellfcu.org/*
            // @exclude *://yesfile.com/*
            // @exclude *://*.yesfile.com/*
            // @exclude *://sunrise.ch/*
            // @exclude *://*.sunrise.ch/*
            // @exclude *://cetesdirecto.com/*
            // @exclude *://*.cetesdirecto.com/*
            // @exclude *://ubi.com/*
            // @exclude *://*.ubi.com/*
            // @exclude *://*.sistic.com.sg/*
            // @exclude *://*.ilfattoquotidiano.it/*
            // @exclude *://*.vanis.io/*
            // @exclude *://*.senpa.io/*
            // @exclude *://wielkopolskiebilety.pl/*
            // @exclude *://*.wielkopolskiebilety.pl/*
            // @exclude *://*.astrogo.astro.com.my/*
            // @exclude *://*.chaturbate.com/*
            // @exclude *://play.pl/*
            // @exclude *://*.play.pl/*
            // @exclude *://web.de/*
            // @exclude *://*.web.de/*
            // @exclude *://gmx.net/*
            // @exclude *://*.gmx.net/*
            // @exclude *://clashofclans.com/*
            // @exclude *://*.clashofclans.com/*
            // @exclude *://online.bfgruppe.de/*
            // @exclude *://*.online.bfgruppe.de/*
            // @exclude *://portalpasazera.pl/*
            // @exclude *://*.portalpasazera.pl/*
            // @exclude *://jeanne-laffitte.com/*
            // @exclude *://*.jeanne-laffitte.com/*
            // @exclude *://epicgames.com/*
            // @exclude *://*.epicgames.com/*
            // @exclude *://freizeithugl.de/*
            // @exclude *://*.freizeithugl.de/*
            // @exclude *://koleje-wielkopolskie.com.pl/*
            // @exclude *://*.koleje-wielkopolskie.com.pl/*
            // @exclude *://ygosu.com/*
            // @exclude *://*.ygosu.com/*
            // @exclude *://ppss.kr/*
            // @exclude *://*.ppss.kr/*
            // @exclude *://nordea.com/*
            // @exclude *://*.nordea.com/*
            // @exclude *://*.gov/*
            // @exclude *://austintestingandtherapy.com/*
            // @exclude *://*.austintestingandtherapy.com/*
            // @exclude *://learn-anything.xyz/*
            // @exclude *://*.learn-anything.xyz/*
            // @exclude *://egybest.*/*
            // @exclude *://*.egybest.*/*
            // @exclude *://ancestry.com/*
            // @exclude *://*.ancestry.com/*
            // @exclude *://login.mts.ru/*
            // @exclude *://*.login.mts.ru/*
            // @exclude *://ebay.com/*
            // @exclude *://*.ebay.com/*
            // @exclude *://outlook.live.*/*
            // @exclude *://*.outlook.live.*/*
            // @exclude *://joom.com.*/*
            // @exclude *://*.joom.com.*/*
            // @exclude *://unrealengine.com/*
            // @exclude *://*.unrealengine.com/*
            // @exclude freelancer.com
            // @exclude ov-chipkaart.nl
            // @exclude tezgoal.com
            // @exclude joom.com
            // @exclude *://id.gov.ua/*
            // @exclude *://github.com/*
            // ==/UserScript==
            ! function() {
                "use strict";
                const e = window.crypto || window.msCrypto,
                    s = e ? () => {
                        const s = new Uint8Array(24);
                        return e.getRandomValues(s), window.btoa(String.fromCharCode.apply(null, s))
                    } : (() => {
                        let e = Date.now() % 1e9;
                        return () => `${Math.floor(1e9*Math.random())}${e++}`
                    })();
                const t = new class {
                    constructor() {
                        this.listenersCount = 0, this.valueListeners = {}
                    }
                    notifyListeners(e, s, t) {
                        const a = this.valueListeners[e];
                        Array.isArray(a) && a.forEach((a => a.listener(e, s, t, !1)))
                    }
                    getValue(e, s) {
                        return GM_getValue(e, s)
                    }
                    deleteValue(e) {
                        GM_deleteValue(e)
                    }
                    setValue(e, s) {
                        const t = this.getValue(e);
                        GM_setValue(e, s), t !== s && this.notifyListeners(e, t, s)
                    }
                    addValueChangeListener(e, s) {
                        if ("function" != typeof s) throw new Error("Invalid listener");
                        const t = this.valueListeners[e],
                            a = {
                                id: this.listenersCount += 1,
                                listener: s
                            };
                        return Array.isArray(t) ? t.push(a) : this.valueListeners[e] = [a], a.id
                    }
                    listValues() {
                        return GM_listValues()
                    }
                    setStorage(e) {
                        this.listValues().forEach(this.deleteValue), Object.entries(e).forEach((e => {
                            const [s, t] = e;
                            this.setValue(s, t)
                        }))
                    }
                    iterateStorage(e) {
                        this.listValues().forEach((s => {
                            const t = this.getValue(s, "");
                            e(s, t)
                        }))
                    }
                };
                class a {
                    constructor(e) {
                        this.updateList = () => {
                            const e = t.getValue(this.name, "");
                            this.list = e ? e.split(",") : []
                        }, this.pushSelfToStorage = () => t.setValue(this.name, this.list.join(",")), this.getList = () => this.list, this.isMember = e => this.list.includes(e), this.addItem = e => {
                            this.isMember(e) || (this.list.push(e), this.pushSelfToStorage())
                        }, this.removeItem = e => {
                            this.isMember(e) && (this.list = this.list.filter((s => s !== e)), this.pushSelfToStorage())
                        }, this.name = e, this.updateList(), t.addValueChangeListener(this.name, this.updateList)
                    }
                }
                const n = {
                        allowed: new a("allowed"),
                        silenced: new a("silenced")
                    },
                    i = "ver",
                    o = "#id",
                    r = "allowed",
                    p = "silenced";
                const l = new class {
                    constructor() {
                        this.ALLOWED_DOMAINS_STORAGE_KEY_V2 = "whitelist", this.OPTION_VALUES_DELIMITER = ","
                    }
                    migrateFromV1toV2() {
                        const e = {},
                            s = [];
                        t.iterateStorage(((t, a) => {
                            if ("" !== a) {
                                if ("string" == typeof a) {
                                    if (t === o) return void(e[t] = a);
                                    if (t === this.ALLOWED_DOMAINS_STORAGE_KEY_V2) return void s.push(a.split(this.OPTION_VALUES_DELIMITER))
                                }(e => "object" == typeof e && null !== e && "whitelisted" in e)(a) && -1 === s.indexOf(t) && s.push(t)
                            }
                        })), e[this.ALLOWED_DOMAINS_STORAGE_KEY_V2] = s.join(this.OPTION_VALUES_DELIMITER), e.ver = "2", t.setStorage(e)
                    }
                    migrateFromV2toV3() {
                        const e = {},
                            s = [],
                            a = [];
                        t.iterateStorage(((t, n) => {
                            "string" == typeof n && t !== i && (t !== o ? t !== this.ALLOWED_DOMAINS_STORAGE_KEY_V2 ? "1" === n && a.push(t) : s.push(n.split(this.OPTION_VALUES_DELIMITER)) : e[t] = n)
                        })), e[r] = s.join(this.OPTION_VALUES_DELIMITER), e[p] = a.join(this.OPTION_VALUES_DELIMITER), e.ver = "3", t.setStorage(e)
                    }
                    migrateDataIfNeeded() {
                        let e = parseFloat(t.getValue(i, "1"));
                        e < 2 && (this.migrateFromV1toV2(), e = 2), 2 === e && this.migrateFromV2toV3()
                    }
                };
                const m = new class {
                    constructor() {
                        this.allowed = n.allowed, this.silenced = n.silenced, this.isMemberOf = (e, s) => this[e].isMember(s)
                    }
                    migrateDataIfNeeded() {
                        l.migrateDataIfNeeded()
                    }
                    setListItem(e, s, t) {
                        this[e].addItem(s), this.flushPageCache(), "function" == typeof t && t()
                    }
                    getInstanceID() {
                        let e = t.getValue(o);
                        return void 0 === e && (e = s(), t.setValue(o, e), this.flushPageCache()), e
                    }
                    flushPageCache() {
                        const e = new window.XMLHttpRequest;
                        e.open("GET", window.location.href, !0), e.setRequestHeader("Pragma", "no-cache"), e.setRequestHeader("Expires", "-1"), e.setRequestHeader("Cache-Control", "no-cache"), e.send()
                    }
                };
                var u, d, g, c, _, h, k, f = {},
                    b = [],
                    v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

                function w(e, s) {
                    for (var t in s) e[t] = s[t];
                    return e
                }

                function y(e) {
                    var s = e.parentNode;
                    s && s.removeChild(e)
                }

                function x(e, s, t) {
                    var a, n, i, o = {};
                    for (i in s) "key" == i ? a = s[i] : "ref" == i ? n = s[i] : o[i] = s[i];
                    if (arguments.length > 2 && (o.children = arguments.length > 3 ? u.call(arguments, 2) : t), "function" == typeof e && null != e.defaultProps)
                        for (i in e.defaultProps) void 0 === o[i] && (o[i] = e.defaultProps[i]);
                    return A(e, o, a, n, null)
                }

                function A(e, s, t, a, n) {
                    var i = {
                        type: e,
                        props: s,
                        key: t,
                        ref: a,
                        __k: null,
                        __: null,
                        __b: 0,
                        __e: null,
                        __d: void 0,
                        __c: null,
                        __h: null,
                        constructor: void 0,
                        __v: null == n ? ++g : n
                    };
                    return null == n && null != d.vnode && d.vnode(i), i
                }

                function j(e) {
                    return e.children
                }

                function P(e, s) {
                    this.props = e, this.context = s
                }

                function z(e, s) {
                    if (null == s) return e.__ ? z(e.__, e.__.__k.indexOf(e) + 1) : null;
                    for (var t; s < e.__k.length; s++)
                        if (null != (t = e.__k[s]) && null != t.__e) return t.__e;
                    return "function" == typeof e.type ? z(e) : null
                }

                function O(e) {
                    var s, t;
                    if (null != (e = e.__) && null != e.__c) {
                        for (e.__e = e.__c.base = null, s = 0; s < e.__k.length; s++)
                            if (null != (t = e.__k[s]) && null != t.__e) {
                                e.__e = e.__c.base = t.__e;
                                break
                            }
                        return O(e)
                    }
                }

                function T(e) {
                    (!e.__d && (e.__d = !0) && c.push(e) && !D.__r++ || _ !== d.debounceRendering) && ((_ = d.debounceRendering) || h)(D)
                }

                function D() {
                    var e, s, t, a, n, i, o, r;
                    for (c.sort(k); e = c.shift();) e.__d && (s = c.length, a = void 0, n = void 0, o = (i = (t = e).__v).__e, (r = t.__P) && (a = [], (n = w({}, i)).__v = i.__v + 1, L(r, i, n, t.__n, void 0 !== r.ownerSVGElement, null != i.__h ? [o] : null, a, null == o ? z(i) : o, i.__h), N(a, i), i.__e != o && O(i)), c.length > s && c.sort(k));
                    D.__r = 0
                }

                function E(e, s, t, a, n, i, o, r, p, l) {
                    var m, u, d, g, c, _, h, k = a && a.__k || b,
                        v = k.length;
                    for (t.__k = [], m = 0; m < s.length; m++)
                        if (null != (g = t.__k[m] = null == (g = s[m]) || "boolean" == typeof g || "function" == typeof g ? null : "string" == typeof g || "number" == typeof g || "bigint" == typeof g ? A(null, g, null, null, g) : Array.isArray(g) ? A(j, {
                                children: g
                            }, null, null, null) : g.__b > 0 ? A(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g)) {
                            if (g.__ = t, g.__b = t.__b + 1, null === (d = k[m]) || d && g.key == d.key && g.type === d.type) k[m] = void 0;
                            else
                                for (u = 0; u < v; u++) {
                                    if ((d = k[u]) && g.key == d.key && g.type === d.type) {
                                        k[u] = void 0;
                                        break
                                    }
                                    d = null
                                }
                            L(e, g, d = d || f, n, i, o, r, p, l), c = g.__e, (u = g.ref) && d.ref != u && (h || (h = []), d.ref && h.push(d.ref, null, g), h.push(u, g.__c || c, g)), null != c ? (null == _ && (_ = c), "function" == typeof g.type && g.__k === d.__k ? g.__d = p = B(g, p, e) : p = G(e, g, d, k, c, p), "function" == typeof t.type && (t.__d = p)) : p && d.__e == p && p.parentNode != e && (p = z(d))
                        }
                    for (t.__e = _, m = v; m--;) null != k[m] && ("function" == typeof t.type && null != k[m].__e && k[m].__e == t.__d && (t.__d = I(a).nextSibling), W(k[m], k[m]));
                    if (h)
                        for (m = 0; m < h.length; m++) F(h[m], h[++m], h[++m])
                }

                function B(e, s, t) {
                    for (var a, n = e.__k, i = 0; n && i < n.length; i++)(a = n[i]) && (a.__ = e, s = "function" == typeof a.type ? B(a, s, t) : G(t, a, a, n, a.__e, s));
                    return s
                }

                function G(e, s, t, a, n, i) {
                    var o, r, p;
                    if (void 0 !== s.__d) o = s.__d, s.__d = void 0;
                    else if (null == t || n != i || null == n.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(n), o = null;
                        else {
                            for (r = i, p = 0;
                                (r = r.nextSibling) && p < a.length; p += 1)
                                if (r == n) break e;
                            e.insertBefore(n, i), o = i
                        }
                    return void 0 !== o ? o : n.nextSibling
                }

                function I(e) {
                    var s, t, a;
                    if (null == e.type || "string" == typeof e.type) return e.__e;
                    if (e.__k)
                        for (s = e.__k.length - 1; s >= 0; s--)
                            if ((t = e.__k[s]) && (a = I(t))) return a;
                    return null
                }

                function $(e, s, t) {
                    "-" === s[0] ? e.setProperty(s, null == t ? "" : t) : e[s] = null == t ? "" : "number" != typeof t || v.test(s) ? t : t + "px"
                }

                function S(e, s, t, a, n) {
                    var i;
                    e: if ("style" === s)
                        if ("string" == typeof t) e.style.cssText = t;
                        else {
                            if ("string" == typeof a && (e.style.cssText = a = ""), a)
                                for (s in a) t && s in t || $(e.style, s, "");
                            if (t)
                                for (s in t) a && t[s] === a[s] || $(e.style, s, t[s])
                        }
                    else if ("o" === s[0] && "n" === s[1]) i = s !== (s = s.replace(/Capture$/, "")), s = s.toLowerCase() in e ? s.toLowerCase().slice(2) : s.slice(2), e.l || (e.l = {}), e.l[s + i] = t, t ? a || e.addEventListener(s, i ? C : M, i) : e.removeEventListener(s, i ? C : M, i);
                    else if ("dangerouslySetInnerHTML" !== s) {
                        if (n) s = s.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                        else if ("width" !== s && "height" !== s && "href" !== s && "list" !== s && "form" !== s && "tabIndex" !== s && "download" !== s && s in e) try {
                            e[s] = null == t ? "" : t;
                            break e
                        } catch (e) {}
                        "function" == typeof t || (null == t || !1 === t && -1 == s.indexOf("-") ? e.removeAttribute(s) : e.setAttribute(s, t))
                    }
                }

                function M(e) {
                    return this.l[e.type + !1](d.event ? d.event(e) : e)
                }

                function C(e) {
                    return this.l[e.type + !0](d.event ? d.event(e) : e)
                }

                function L(e, s, t, a, n, i, o, r, p) {
                    var l, m, u, g, c, _, h, k, f, b, v, y, x, A, z, O = s.type;
                    if (void 0 !== s.constructor) return null;
                    null != t.__h && (p = t.__h, r = s.__e = t.__e, s.__h = null, i = [r]), (l = d.__b) && l(s);
                    try {
                        e: if ("function" == typeof O) {
                            if (k = s.props, f = (l = O.contextType) && a[l.__c], b = l ? f ? f.props.value : l.__ : a, t.__c ? h = (m = s.__c = t.__c).__ = m.__E : ("prototype" in O && O.prototype.render ? s.__c = m = new O(k, b) : (s.__c = m = new P(k, b), m.constructor = O, m.render = R), f && f.sub(m), m.props = k, m.state || (m.state = {}), m.context = b, m.__n = a, u = m.__d = !0, m.__h = [], m._sb = []), null == m.__s && (m.__s = m.state), null != O.getDerivedStateFromProps && (m.__s == m.state && (m.__s = w({}, m.__s)), w(m.__s, O.getDerivedStateFromProps(k, m.__s))), g = m.props, c = m.state, m.__v = s, u) null == O.getDerivedStateFromProps && null != m.componentWillMount && m.componentWillMount(), null != m.componentDidMount && m.__h.push(m.componentDidMount);
                            else {
                                if (null == O.getDerivedStateFromProps && k !== g && null != m.componentWillReceiveProps && m.componentWillReceiveProps(k, b), !m.__e && null != m.shouldComponentUpdate && !1 === m.shouldComponentUpdate(k, m.__s, b) || s.__v === t.__v) {
                                    for (s.__v !== t.__v && (m.props = k, m.state = m.__s, m.__d = !1), m.__e = !1, s.__e = t.__e, s.__k = t.__k, s.__k.forEach((function(e) {
                                            e && (e.__ = s)
                                        })), v = 0; v < m._sb.length; v++) m.__h.push(m._sb[v]);
                                    m._sb = [], m.__h.length && o.push(m);
                                    break e
                                }
                                null != m.componentWillUpdate && m.componentWillUpdate(k, m.__s, b), null != m.componentDidUpdate && m.__h.push((function() {
                                    m.componentDidUpdate(g, c, _)
                                }))
                            }
                            if (m.context = b, m.props = k, m.__P = e, y = d.__r, x = 0, "prototype" in O && O.prototype.render) {
                                for (m.state = m.__s, m.__d = !1, y && y(s), l = m.render(m.props, m.state, m.context), A = 0; A < m._sb.length; A++) m.__h.push(m._sb[A]);
                                m._sb = []
                            } else
                                do {
                                    m.__d = !1, y && y(s), l = m.render(m.props, m.state, m.context), m.state = m.__s
                                } while (m.__d && ++x < 25);
                            m.state = m.__s, null != m.getChildContext && (a = w(w({}, a), m.getChildContext())), u || null == m.getSnapshotBeforeUpdate || (_ = m.getSnapshotBeforeUpdate(g, c)), z = null != l && l.type === j && null == l.key ? l.props.children : l, E(e, Array.isArray(z) ? z : [z], s, t, a, n, i, o, r, p), m.base = s.__e, s.__h = null, m.__h.length && o.push(m), h && (m.__E = m.__ = null), m.__e = !1
                        } else null == i && s.__v === t.__v ? (s.__k = t.__k, s.__e = t.__e) : s.__e = U(t.__e, s, t, a, n, i, o, p);
                        (l = d.diffed) && l(s)
                    }
                    catch (e) {
                        s.__v = null, (p || null != i) && (s.__e = r, s.__h = !!p, i[i.indexOf(r)] = null), d.__e(e, s, t)
                    }
                }

                function N(e, s) {
                    d.__c && d.__c(s, e), e.some((function(s) {
                        try {
                            e = s.__h, s.__h = [], e.some((function(e) {
                                e.call(s)
                            }))
                        } catch (e) {
                            d.__e(e, s.__v)
                        }
                    }))
                }

                function U(e, s, t, a, n, i, o, r) {
                    var p, l, m, d = t.props,
                        g = s.props,
                        c = s.type,
                        _ = 0;
                    if ("svg" === c && (n = !0), null != i)
                        for (; _ < i.length; _++)
                            if ((p = i[_]) && "setAttribute" in p == !!c && (c ? p.localName === c : 3 === p.nodeType)) {
                                e = p, i[_] = null;
                                break
                            }
                    if (null == e) {
                        if (null === c) return document.createTextNode(g);
                        e = n ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c, g.is && g), i = null, r = !1
                    }
                    if (null === c) d === g || r && e.data === g || (e.data = g);
                    else {
                        if (i = i && u.call(e.childNodes), l = (d = t.props || f).dangerouslySetInnerHTML, m = g.dangerouslySetInnerHTML, !r) {
                            if (null != i)
                                for (d = {}, _ = 0; _ < e.attributes.length; _++) d[e.attributes[_].name] = e.attributes[_].value;
                            (m || l) && (m && (l && m.__html == l.__html || m.__html === e.innerHTML) || (e.innerHTML = m && m.__html || ""))
                        }
                        if (function(e, s, t, a, n) {
                                var i;
                                for (i in t) "children" === i || "key" === i || i in s || S(e, i, null, t[i], a);
                                for (i in s) n && "function" != typeof s[i] || "children" === i || "key" === i || "value" === i || "checked" === i || t[i] === s[i] || S(e, i, s[i], t[i], a)
                            }(e, g, d, n, r), m) s.__k = [];
                        else if (_ = s.props.children, E(e, Array.isArray(_) ? _ : [_], s, t, a, n && "foreignObject" !== c, i, o, i ? i[0] : t.__k && z(t, 0), r), null != i)
                            for (_ = i.length; _--;) null != i[_] && y(i[_]);
                        r || ("value" in g && void 0 !== (_ = g.value) && (_ !== e.value || "progress" === c && !_ || "option" === c && _ !== d.value) && S(e, "value", _, d.value, !1), "checked" in g && void 0 !== (_ = g.checked) && _ !== e.checked && S(e, "checked", _, d.checked, !1))
                    }
                    return e
                }

                function F(e, s, t) {
                    try {
                        "function" == typeof e ? e(s) : e.current = s
                    } catch (e) {
                        d.__e(e, t)
                    }
                }

                function W(e, s, t) {
                    var a, n;
                    if (d.unmount && d.unmount(e), (a = e.ref) && (a.current && a.current !== e.__e || F(a, null, s)), null != (a = e.__c)) {
                        if (a.componentWillUnmount) try {
                            a.componentWillUnmount()
                        } catch (e) {
                            d.__e(e, s)
                        }
                        a.base = a.__P = null, e.__c = void 0
                    }
                    if (a = e.__k)
                        for (n = 0; n < a.length; n++) a[n] && W(a[n], s, t || "function" != typeof e.type);
                    t || null == e.__e || y(e.__e), e.__ = e.__e = e.__d = void 0
                }

                function R(e, s, t) {
                    return this.constructor(e, t)
                }

                function q(e, s, t) {
                    var a, n, i;
                    d.__ && d.__(e, s), n = (a = "function" == typeof t) ? null : t && t.__k || s.__k, i = [], L(s, e = (!a && t || s).__k = x(j, null, [e]), n || f, f, void 0 !== s.ownerSVGElement, !a && t ? [t] : n ? null : s.firstChild ? u.call(s.childNodes) : null, i, !a && t ? t : n ? n.__e : s.firstChild, a), N(i, e)
                }
                u = b.slice, d = {
                    __e: function(e, s, t, a) {
                        for (var n, i, o; s = s.__;)
                            if ((n = s.__c) && !n.__) try {
                                if ((i = n.constructor) && null != i.getDerivedStateFromError && (n.setState(i.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e, a || {}), o = n.__d), o) return n.__E = n
                            } catch (s) {
                                e = s
                            }
                        throw e
                    }
                }, g = 0, P.prototype.setState = function(e, s) {
                    var t;
                    t = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof e && (e = e(w({}, t), this.props)), e && w(t, e), null != e && this.__v && (s && this._sb.push(s), T(this))
                }, P.prototype.forceUpdate = function(e) {
                    this.__v && (this.__e = !0, e && this.__h.push(e), T(this))
                }, P.prototype.render = j, c = [], h = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, k = function(e, s) {
                    return e.__v.__b - s.__v.__b
                }, D.__r = 0;
                var V = 0;

                function H(e, s, t, a, n, i) {
                    var o, r, p = {};
                    for (r in s) "ref" == r ? o = s[r] : p[r] = s[r];
                    var l = {
                        type: e,
                        props: p,
                        key: t,
                        ref: o,
                        __k: null,
                        __: null,
                        __b: 0,
                        __e: null,
                        __d: void 0,
                        __c: null,
                        __h: null,
                        constructor: void 0,
                        __v: --V,
                        __source: n,
                        __self: i
                    };
                    if ("function" == typeof e && (o = e.defaultProps))
                        for (r in o) void 0 === p[r] && (p[r] = o[r]);
                    return d.vnode && d.vnode(l), l
                }
                "now" in performance || Date.now;
                const K = (() => {
                    let e = "",
                        s = window;
                    for (; s.parent !== s;) s = s.parent, e += "-- ";
                    window.location.href;
                    const t = () => {};
                    return {
                        call: t,
                        callEnd: t,
                        closeAllGroup: t,
                        print: t,
                        connect: e => e,
                        throwMessage: function(e, s) {
                            throw s
                        }
                    }
                })();
                var Z = {
                    en: {
                        show_popup: {
                            message: "Show %destUrl%"
                        },
                        continue_blocking: {
                            message: "Continue blocking"
                        },
                        allow_from: {
                            message: "Allow popups for %origDomain%"
                        },
                        manage_pref: {
                            message: "Manage preferences..."
                        },
                        popup_text: {
                            message: "AdGuard prevented this website from opening %numPopup% pop-up windows"
                        },
                        options: {
                            message: "Options"
                        },
                        silence_noti: {
                            message: "Don't show this message on %origDomain%"
                        },
                        site_input_ph: {
                            message: "Enter site name"
                        },
                        add_site: {
                            message: "Add a site"
                        },
                        add: {
                            message: "Add"
                        },
                        allowed_empty: {
                            message: "List of allowed sites is empty"
                        },
                        allowed: {
                            message: "Allowed"
                        },
                        silenced_empty: {
                            message: "List of silenced sites is empty"
                        },
                        silenced: {
                            message: "Silenced"
                        },
                        allowed_tooltip: {
                            message: "Popups will be allowed for domains listed here."
                        },
                        silenced_tooltip: {
                            message: "Notifications for blocked popups will not be shown for domains listed here."
                        },
                        installFrom: {
                            message: "Install from <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Step 3: Refresh this page to get to the userscript settings"
                        },
                        noinst_ignore_if_ag: {
                            message: "If you installed AdGuard for Windows, you can ignore this step as the Popup Blocker userscript comes pre-installed."
                        },
                        noinst_rec: {
                            message: "(Recommended)"
                        },
                        please_wait: {
                            message: "Please wait, detecting the Popup Blocker"
                        },
                        noinst_special_prog: {
                            message: "To use a userscript, you first need a special program or extension that runs userscript."
                        },
                        noinst_subtitle: {
                            message: "AdGuard Popup Blocker userscript is not installed. Please see the instruction below."
                        },
                        homepage: {
                            message: "Homepage"
                        },
                        noinst_step_1: {
                            message: "Step 1: Install a userscript manager"
                        },
                        noinst_step_2: {
                            message: "Step 2: Userscript"
                        },
                        extension_name: {
                            message: "Popup Blocker by AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Popup Blocker",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blocks pop-up ads on web pages"
                        },
                        on_navigation_by_popunder: {
                            message: "This transition to the new page is likely to be caused by a pop-under. Do you wish to continue?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Popup Blocker aborted a script execution to prevent background redirect",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Popup Blocker is on duty"
                        },
                        ext_disabled: {
                            message: "Popup Blocker is disabled for $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Popup Blocker is disabled for this domain"
                        },
                        settings_saved: {
                            message: "Settings saved"
                        }
                    },
                    ar: {
                        show_popup: {
                            message: "%destUrl%اظهار"
                        },
                        continue_blocking: {
                            message: "متابعة الحظر"
                        },
                        allow_from: {
                            message: "%origDomain%السماح بالنوافذ المنبثقة على"
                        },
                        manage_pref: {
                            message: "...أداره التفضيلات"
                        },
                        popup_text: {
                            message: "النوافذالمنبثقة%numPopup% منع ادجارد موقع الويب هذا من فتح"
                        },
                        options: {
                            message: "الخيارات"
                        },
                        silence_noti: {
                            message: "%origDomain%عدم إظهار هذه الرسالة على"
                        },
                        site_input_ph: {
                            message: "ادخل اسم الموقع"
                        },
                        add_site: {
                            message: "إضافة موقع"
                        },
                        add: {
                            message: "إضافة"
                        },
                        allowed_empty: {
                            message: "قائمه الاستثناءات فارعة"
                        },
                        allowed: {
                            message: "الاستثناءات "
                        },
                        silenced_empty: {
                            message: "قائمة المواقع التي تحتوي على إشعارات صامتة فارغة"
                        },
                        silenced: {
                            message: "صامت"
                        },
                        allowed_tooltip: {
                            message: "سيتم السماح بالنوافذ المنبثقة على المواقع المدرجة هنا"
                        },
                        silenced_tooltip: {
                            message: "لن يتم عرض إشعارات النوافذ المنبثقة الممنوعة على مواقع الويب المدرجة هنا"
                        },
                        installFrom: {
                            message: "<a>%name%</a>التثبيت من"
                        },
                        noinst_step_3: {
                            message: "الخطوة 3: قم بتحديث هذه الصفحة للوصول إلى إعدادات userscript"
                        },
                        noinst_ignore_if_ag: {
                            message: "إذا كان لديك برنامج ادجوارد مثبتًا على الويندوز ، فيمكنك تجاهل هذه الخطوة حيث يأتي مانع النوافذ المنبثقة مثبتة مسبقًا"
                        },
                        noinst_rec: {
                            message: "(موصى به)"
                        },
                        please_wait: {
                            message: "يرجى الانتظار للكشف عن مانع ظهور النوافذ المنبثقة"
                        },
                        noinst_special_prog: {
                            message: "أولاً وقبل كل شيء, لاستخدام userscript تحتاج إلى برنامج خاص أو ملحق الذي يستطيع تشغيل userscript."
                        },
                        noinst_subtitle: {
                            message: "لم يتم تثبيت يوزر سكربت ادجوارد مانع النوافذ المنبثقة  يرجى الاطلاع على التعليمات أدناه"
                        },
                        homepage: {
                            message: "الصفحه الرئيسيه"
                        },
                        noinst_step_1: {
                            message: "الخطوة 1: تثبيت مديريوزر سكربت"
                        },
                        noinst_step_2: {
                            message: "الخطوة 2: يوزر سكربت"
                        },
                        extension_name: {
                            message: "AdGuardمانع النوافذ المنبثقة من قبل"
                        },
                        userscript_name: {
                            message: "مانع النوافذ المنبثقة AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "لحظر الإعلانات المنبثقة على صفحات الويب"
                        },
                        on_navigation_by_popunder: {
                            message: "من المحتمل ان يكون هذا الانتقال إلى الصفحة الجديدة ناتجا عن الإطار المنبثق. هل ترغب في المتابعة ؟",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "مانع النوافذ المنبثقة احبط تنفيذ script لمنع أعاده توجيه الخلفية",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "مانع النوافذ المنبثقة يعمل في الخدمة"
                        },
                        ext_disabled: {
                            message: "$ DOMAIN $تم تعطيل مانع النوافذ المنبثقة بـ",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "لا يمكن تشغيل مانع النوافذ المنبثقة على هذا النطاق"
                        },
                        settings_saved: {
                            message: "الإعدادات المحفوظة"
                        }
                    },
                    be: {
                        show_popup: {
                            message: "Паказаць %destUrl%"
                        },
                        continue_blocking: {
                            message: "Працягнуць блакаванне"
                        },
                        allow_from: {
                            message: "Дазволіць усплывальныя вокны на %origDomain%"
                        },
                        manage_pref: {
                            message: "Кіраваць наладамі..."
                        },
                        popup_text: {
                            message: "AdGuard запабег паказ %numPopup% усплывальных вокнаў на гэтым сайце"
                        },
                        options: {
                            message: "Опцыі"
                        },
                        silence_noti: {
                            message: "Не паказваць гэта паведамленне на %origDomain%"
                        },
                        site_input_ph: {
                            message: "Увядзіце імя сайта"
                        },
                        add_site: {
                            message: "Дадаць сайт"
                        },
                        add: {
                            message: "Дадаць"
                        },
                        allowed_empty: {
                            message: "Спіс выняткаў пусты"
                        },
                        allowed: {
                            message: "Выняткі"
                        },
                        silenced_empty: {
                            message: "Спіс сайтаў з адключанымі апавяшчэннямі пусты"
                        },
                        silenced: {
                            message: "Без апавяшчэнняў"
                        },
                        allowed_tooltip: {
                            message: "Усплывальныя вокны будуць дазволены на сайтах, пералічаных тут."
                        },
                        silenced_tooltip: {
                            message: "Апавяшчэнні пра заблакаваныя ўсплывальныя вокны не будуць адлюстроўвацца на сайтах, пералічаных тут."
                        },
                        installFrom: {
                            message: "Усталяваць з <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Крок 3: Абнавіце гэту старонку, каб перайсці да налад карыстацкага скрыпту"
                        },
                        noinst_ignore_if_ag: {
                            message: "Калі вы ўсталявалі AdGuard для Windows, вы можаце праігнараваць гэты крок, бо Блакавальнік усплывальнай рэкламы ўжо ўсталяваны."
                        },
                        noinst_rec: {
                            message: "(Рэкамендуецца)"
                        },
                        please_wait: {
                            message: "Калі ласка, пачакайце, спроба выявіць Блакавальнік усплывальнай рэкламы"
                        },
                        noinst_special_prog: {
                            message: "Для выкарыстання скрыпту вам, перадусім, патрэбна адмысловая праграма (ці пашырэнне), якая можа працаваць з карыстацкімі скрыптамі."
                        },
                        noinst_subtitle: {
                            message: "Блакавальнік усплывальнай рэкламы AdGuard не пастаўлены. Калі ласка, звярніцеся да інструкцыі ніжэй."
                        },
                        homepage: {
                            message: "Хатняя старонка"
                        },
                        noinst_step_1: {
                            message: "Крок 1: усталюйце праграму для кіравання карыстацкімі скрыптамі"
                        },
                        noinst_step_2: {
                            message: "Крок 2: карыстацкі скрыпт"
                        },
                        extension_name: {
                            message: "Блакавальнік усплывальнай рэкламы ад AdGuard"
                        },
                        userscript_name: {
                            message: "Блакавальнік усплывальнай рэкламы ад AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Блакуе ўсплывальную рэкламу на старонках"
                        },
                        on_navigation_by_popunder: {
                            message: "Гэты пераход на новую старонку найхутчэй выкліканы поп-андэрам. Усё адно працягнуць?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Блакавальнік усплывальнай рэкламы перапыніў выкананне скрыпту, каб перадухіліць фонавае пераадрасаванне",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Блакавальнік усплывальнай рэкламы гатоў да працы"
                        },
                        ext_disabled: {
                            message: "Блакавальнік усплывальнай рэкламы адключаны для $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Блакавальнік усплывальнай рэкламы не працуе на гэтым дамене"
                        },
                        settings_saved: {
                            message: "Налады захаваны"
                        }
                    },
                    cs: {
                        show_popup: {
                            message: "Zobrazit %destUrl%"
                        },
                        continue_blocking: {
                            message: "Pokračovat v blokování"
                        },
                        allow_from: {
                            message: "Povolit vyskakovací okna pro %origDomain%"
                        },
                        manage_pref: {
                            message: "Spravovat předvolby"
                        },
                        popup_text: {
                            message: "AdGuard zabránil tomu, aby tato webová stránka otevřela vyskakovací okna: %numPopup%"
                        },
                        options: {
                            message: "Možnosti"
                        },
                        silence_noti: {
                            message: "Tuto zprávu nezobrazovat na %origDomain%"
                        },
                        site_input_ph: {
                            message: "Zadejte název stránky"
                        },
                        add_site: {
                            message: "Přidat stránku"
                        },
                        add: {
                            message: "Přidat"
                        },
                        allowed_empty: {
                            message: "Seznam výjimek je prázdný"
                        },
                        allowed: {
                            message: "Výjimky"
                        },
                        silenced_empty: {
                            message: "Seznam webových stránek s tichými oznámeními je prázdný"
                        },
                        silenced: {
                            message: "Umlčeno"
                        },
                        allowed_tooltip: {
                            message: "Vyskakovací okna jsou povolena na webových stránkách uvedených zde."
                        },
                        silenced_tooltip: {
                            message: "Oznámení o blokovaných vyskakovacích oknech se nezobrazí na zde uvedených webových stránkách."
                        },
                        installFrom: {
                            message: "Instalovat z <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Krok 3: Obnovte tuto stránku, abyste se dostali k nastavení uživatelských skriptů"
                        },
                        noinst_ignore_if_ag: {
                            message: "Pokud máte nainstalovanou službu AdGuard for Windows, můžete tento krok ignorovat. Uživatelský skript blokování vyskakovacích oken přichází předem nainstalovaný."
                        },
                        noinst_rec: {
                            message: "(Doporučeno)"
                        },
                        please_wait: {
                            message: "Čekejte prosím, zjišťuji Blokátor vyskakovacích oken"
                        },
                        noinst_special_prog: {
                            message: "Chcete-li používat uživatelský skript, potřebujete nejprve speciální program nebo rozšíření, které spustí uživatelský skript."
                        },
                        noinst_subtitle: {
                            message: "Uživatelský skript pro blokování vyskakovacích oken AdGuard není nainstalován. Pokyny naleznete níže."
                        },
                        homepage: {
                            message: "Domovská stránka"
                        },
                        noinst_step_1: {
                            message: "Krok 1: Nainstalujte správce uživatelských skriptů"
                        },
                        noinst_step_2: {
                            message: "Krok 2: Uživatelský skript"
                        },
                        extension_name: {
                            message: "AdGuard blokátor vyskakovacích oken"
                        },
                        userscript_name: {
                            message: "AdGuard blokátor vyskakovacích oken",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokuje vyskakovací reklamy na webových stránkách"
                        },
                        on_navigation_by_popunder: {
                            message: "Tento přechod na novou stránku bude pravděpodobně způsoben pop-under. Chcete pokračovat?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Blokátor vyskakovacích oken zrušil spuštění skriptu, aby zabránil přesměrování na pozadí",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Blokování vyskakovacích oken je v provozu"
                        },
                        ext_disabled: {
                            message: "Blokování vyskakovacích oken je zakázáno pro $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Blokování vyskakovacích oken nemůže běžet na této doméně"
                        },
                        settings_saved: {
                            message: "Nastavení uložena"
                        }
                    },
                    da: {
                        show_popup: {
                            message: "Vis %destUrl%"
                        },
                        continue_blocking: {
                            message: "Fortsæt blokering"
                        },
                        allow_from: {
                            message: "Tillad pop-op'er for %origDomain%"
                        },
                        manage_pref: {
                            message: "Håndtere præferencer..."
                        },
                        popup_text: {
                            message: "AdGuard forhindrede dette websted i at åbne %numPopup% pop op-vinduer"
                        },
                        options: {
                            message: "Valgmuligheder"
                        },
                        silence_noti: {
                            message: "Vis ikke denne meddelelse på %origDomain%"
                        },
                        site_input_ph: {
                            message: "Angiv webstedsnavn"
                        },
                        add_site: {
                            message: "Tilføj et websted"
                        },
                        add: {
                            message: "Tilføj"
                        },
                        allowed_empty: {
                            message: "Hvidliste over websteder er tom"
                        },
                        allowed: {
                            message: "Hvidlistet"
                        },
                        silenced_empty: {
                            message: "Listen over websteder med tavse notifikationer er tom"
                        },
                        silenced: {
                            message: "Gjort tavse"
                        },
                        allowed_tooltip: {
                            message: "Pop-ups vil være tilladt på de websteder, som er angivet her."
                        },
                        silenced_tooltip: {
                            message: "Notifikationer om blokerede pop-ups vises ikke på de websteder, som er angivet her."
                        },
                        installFrom: {
                            message: "Installér fra <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Trin 3: Opfrisk siden for at kunne tilgå userscript-indstillingerne"
                        },
                        noinst_ignore_if_ag: {
                            message: "Har du AdGuard til Windows installeret, kan du ignorere dette trin, da Popup Blocker-userscriptet er forudinstalleret."
                        },
                        noinst_rec: {
                            message: "(Anbefalet)"
                        },
                        please_wait: {
                            message: "Afvent venligst, detekterer Popup Blocker"
                        },
                        noinst_special_prog: {
                            message: "For brug af et userscript kræves først og fremmest et særligt program/udvidelse, der kan afvikle userscripts."
                        },
                        noinst_subtitle: {
                            message: "AdGuard Popup Blocker-userscriptet er ikke installeret. Tjek nedenstående vejledning."
                        },
                        homepage: {
                            message: "Hjemmeside"
                        },
                        noinst_step_1: {
                            message: "Trin 1: Installér en userscript-håndtering"
                        },
                        noinst_step_2: {
                            message: "Trin 2: Userscript"
                        },
                        extension_name: {
                            message: "Popup Blocker fra AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Popup Blocker",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokerer pop-op annoncer på websider"
                        },
                        on_navigation_by_popunder: {
                            message: "Denne overgang til den nye side skyldes sandsynligvis en pop-under. Fortsæt?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Popup Blocker afbrød en scripteksekvering for at forhindre baggrundsomdirigering",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Popup Blocker er på vagt"
                        },
                        ext_disabled: {
                            message: "Popup Blocker er deaktiveret for $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Popup Blocker er deaktiveret på dette domæne"
                        },
                        settings_saved: {
                            message: "Indstillinger gemt"
                        }
                    },
                    de: {
                        show_popup: {
                            message: "%destUrl% anzeigen"
                        },
                        continue_blocking: {
                            message: "Weiterhin sperren"
                        },
                        allow_from: {
                            message: "Pop-ups auf %origDomain% zulassen"
                        },
                        manage_pref: {
                            message: "Einstellungen verwalten …"
                        },
                        popup_text: {
                            message: "AdGuard hat auf dieser Website %numPopup% Pop-up-Fenster verhindert"
                        },
                        options: {
                            message: "Optionen"
                        },
                        silence_noti: {
                            message: "Diese Nachricht auf %origDomain% nicht anzeigen"
                        },
                        site_input_ph: {
                            message: "Seitenname eingeben"
                        },
                        add_site: {
                            message: "Eine Seite hinzufügen"
                        },
                        add: {
                            message: "Hinzufügen"
                        },
                        allowed_empty: {
                            message: "Liste der Ausnahmen ist leer"
                        },
                        allowed: {
                            message: "Ausnahmen"
                        },
                        silenced_empty: {
                            message: "Liste der Websites ohne Benachrichtigungen ist leer"
                        },
                        silenced: {
                            message: "Ausgeschaltet"
                        },
                        allowed_tooltip: {
                            message: "Pop-ups werden für die hier aufgeführten Domains zugelassen."
                        },
                        silenced_tooltip: {
                            message: "Benachrichtigungen für gesperrte Pop-ups werden auf den hier aufgeführten Websites nicht angezeigt."
                        },
                        installFrom: {
                            message: "Von <a>%name%</a> installieren"
                        },
                        noinst_step_3: {
                            message: "Schritt 3: Aktualisieren Sie diese Seite, um zu den Benutzerskript-Einstellungen zu übergehen"
                        },
                        noinst_ignore_if_ag: {
                            message: "Wenn Sie AdGuard für Windows installiert haben, können Sie diesen Schritt ignorieren, da das Benutzerskript für den Pop-up-Blocker bereits vorinstalliert ist."
                        },
                        noinst_rec: {
                            message: "(Empfohlen)"
                        },
                        please_wait: {
                            message: "Bitte warten Sie, der Pop-up-Blocker wird erkannt"
                        },
                        noinst_special_prog: {
                            message: "Um ein Benutzerskript verwendende können, benötigen Sie ein spezielles Programm, das Benutzerskripte ausführt."
                        },
                        noinst_subtitle: {
                            message: "AdGuard Pop-up-Blocker Benutzerskript ist nicht installiert. Bitte beachten Sie die folgende Anleitung."
                        },
                        homepage: {
                            message: "Startseite"
                        },
                        noinst_step_1: {
                            message: "Schritt 1: Installieren Sie einen Benutzerskript-Manager"
                        },
                        noinst_step_2: {
                            message: "Schritt 2: Benutzerskript"
                        },
                        extension_name: {
                            message: "Pop-up-Blocker von AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Pop-up-Blocker",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blockiert Anzeige-Pop-ups auf Websites"
                        },
                        on_navigation_by_popunder: {
                            message: "Diese Seiten-Navigation wird wahrscheinlich durch ein Pop-under verursacht. Möchten Sie fortfahren?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Pop-up-Blocker hat eine Skript-Ausführung abgebrochen, um eine Hintergrundumleitung zu verhindern",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Pop-up-Blocker verrichtet seinen Dienst"
                        },
                        ext_disabled: {
                            message: "Der Pop-up-Blocker ist für $DOMAIN$ deaktiviert",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Pop-up-Blocker funktioniert auf dieser Domain nicht"
                        },
                        settings_saved: {
                            message: "Einstellungen gespeichert"
                        }
                    },
                    el: {
                        show_popup: {
                            message: "Εμφάνιση %destUrl%"
                        },
                        continue_blocking: {
                            message: "Συνέχεια αποκλεισμού"
                        },
                        allow_from: {
                            message: "Να επιτρέπονται τα αναδυόμενα παράθυρα για το %origDomain%"
                        },
                        manage_pref: {
                            message: "Διαχείριση προτιμήσεων..."
                        },
                        popup_text: {
                            message: "Το AdGuard εμπόδισε αυτόν τον ιστότοπο να ανοίξει %numPopup% αναδυόμενα παράθυρα"
                        },
                        options: {
                            message: "Επιλογές"
                        },
                        silence_noti: {
                            message: "Να μην εμφανίζεται αυτό το μήνυμα στο %origDomain%"
                        },
                        site_input_ph: {
                            message: "Εισαγάγετε όνομα ιστότοπου"
                        },
                        add_site: {
                            message: "Προσθήκη ιστοσελίδας"
                        },
                        add: {
                            message: "Προσθήκη"
                        },
                        allowed_empty: {
                            message: "Η λίστα των επιτρεπόμενων ιστότοπων είναι κενή"
                        },
                        allowed: {
                            message: "Επιτρέπεται"
                        },
                        silenced_empty: {
                            message: "Η λίστα των ιστότοπων σε σίγαση είναι κενή"
                        },
                        silenced: {
                            message: "Σίγαση"
                        },
                        allowed_tooltip: {
                            message: "Τα αναδυόμενα παράθυρα θα επιτρέπονται στους τομείς που αναφέρονται εδώ."
                        },
                        silenced_tooltip: {
                            message: "Οι ειδοποιήσεις για αποκλεισμένα αναδυόμενα παράθυρα δεν θα εμφανίζονται για τομείς που αναφέρονται εδώ."
                        },
                        installFrom: {
                            message: "Εγκατάσταση από {$startLink}{$name}{$endLink}"
                        },
                        noinst_step_3: {
                            message: "Βήμα 3: Ανανεώστε αυτήν τη σελίδα για να μεταβείτε στις ρυθμίσεις του userscript"
                        },
                        noinst_ignore_if_ag: {
                            message: "Εάν εγκαταστήσατε το AdGuard για Windows, μπορείτε να αγνοήσετε αυτό το βήμα καθώς το userscript για αποκλεισμό αναδυόμενων παραθύρων είναι προεγκατεστημένο."
                        },
                        noinst_rec: {
                            message: "(Συνιστάται)"
                        },
                        please_wait: {
                            message: "Παρακαλώ περιμένετε, ανίχνευση για Αποκλεισμό αναδυόμενων παραθύρων"
                        },
                        noinst_special_prog: {
                            message: "Πρώτα απ'όλα, για να χρησιμοποιήσετε ένα userscript χρειάζεστε ένα ειδικό πρόγραμμα ή επέκταση που εκτελεί userscripts."
                        },
                        noinst_subtitle: {
                            message: "Το userscript αποκλεισμός αναδυόμενων παραθύρων AdGuard δεν είναι εγκατεστημένο. Ανατρέξτε στις παρακάτω οδηγίες."
                        },
                        homepage: {
                            message: "Αρχική σελίδα"
                        },
                        noinst_step_1: {
                            message: "Βήμα 1: Εγκαταστήστε έναν διαχειριστή userscript"
                        },
                        noinst_step_2: {
                            message: "Βήμα 2: Userscript"
                        },
                        extension_name: {
                            message: "Αποκλεισμός αναδυόμενων παραθύρων από το AdGuard"
                        },
                        userscript_name: {
                            message: "Αποκλεισμός αναδυόμενων παραθύρων AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Αποκλείει αναδυόμενες διαφημίσεις σε ιστοσελίδες"
                        },
                        on_navigation_by_popunder: {
                            message: "Αυτή η μετάβαση σε νέα σελίδα είναι πιθανό να προκαλείται από ένα αναδυόμενο παράθυρο. Θέλετε να συνεχίσετε;",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Το Αποκλεισμός αναδυόμενων παραθύρων ακύρωσε μια εκτέλεση σεναρίου για να αποτρέψει την ανακατεύθυνση του φόντου",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Το Αποκλεισμός αναδυόμενων παραθύρων είναι σε λειτουργία"
                        },
                        ext_disabled: {
                            message: "Ο Αποκλεισμός αναδυόμενων παραθύρων είναι απενεργοποιημένος για το $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Ο Αποκλεισμός αναδυόμενων παραθύρων είναι απενεργοποιημένος για αυτόν τον τομέα"
                        },
                        settings_saved: {
                            message: "Οι ρυθμίσεις αποθηκεύτηκαν"
                        }
                    },
                    es: {
                        show_popup: {
                            message: "Mostrar %destUrl%"
                        },
                        continue_blocking: {
                            message: "Continuar bloqueando"
                        },
                        allow_from: {
                            message: "Permitir ventanas emergentes en %origDomain%"
                        },
                        manage_pref: {
                            message: "Administrar preferencias..."
                        },
                        popup_text: {
                            message: "AdGuard impidió que este sitio web abriera %numPopup% ventanas emergentes"
                        },
                        options: {
                            message: "Opciones"
                        },
                        silence_noti: {
                            message: "No mostrar este mensaje en %origDomain%"
                        },
                        site_input_ph: {
                            message: "Ingrese el nombre del sitio"
                        },
                        add_site: {
                            message: "Añadir un sitio"
                        },
                        add: {
                            message: "Añadir"
                        },
                        allowed_empty: {
                            message: "La lista de permitido está vacía"
                        },
                        allowed: {
                            message: "Permitido"
                        },
                        silenced_empty: {
                            message: "La lista de sitios con notificaciones silenciadas está vacía"
                        },
                        silenced: {
                            message: "Silenciado"
                        },
                        allowed_tooltip: {
                            message: "Las ventanas emergentes estarán permitidas en los sitios web enumerados aquí."
                        },
                        silenced_tooltip: {
                            message: "Las notificaciones de ventanas emergentes bloqueadas no se mostrarán en los sitios web enumerados aquí."
                        },
                        installFrom: {
                            message: "Instalar desde <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Paso 3: Actualice esta página para acceder a la configuración del userscript"
                        },
                        noinst_ignore_if_ag: {
                            message: "Si tienes instalado AdGuard para Windows, puedes ignorar este paso ya que el userscript Popup Blocker viene preinstalado."
                        },
                        noinst_rec: {
                            message: "(recomendado)"
                        },
                        please_wait: {
                            message: "Espere por favor, detectando Popup Blocker"
                        },
                        noinst_special_prog: {
                            message: "En primer lugar, para usar un userscript necesitas un programa especial que ejecute el userscript."
                        },
                        noinst_subtitle: {
                            message: "AdGuard Popup Blocker no es instalado. Por favor, vea el manual abajo."
                        },
                        homepage: {
                            message: "Página de inicio"
                        },
                        noinst_step_1: {
                            message: "Paso 1: Instale el gestor de userscript"
                        },
                        noinst_step_2: {
                            message: "Paso 2: Userscript"
                        },
                        extension_name: {
                            message: "Popup Blocker por AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Popup Blocker",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Bloquea anuncios emergentes en sitios web"
                        },
                        on_navigation_by_popunder: {
                            message: "Es probable que esta transición a la nueva página sea causada por un elemento emergente. ¿Deseas continuar?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Popup Blocker canceló la ejecución de un script para evitar la redirección en segundo plano",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Popup Blocker está en servicio"
                        },
                        ext_disabled: {
                            message: "Popup Blocker está deshabilitado para $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Popup Blocker está deshabilitado para este dominio"
                        },
                        settings_saved: {
                            message: "Ajustes guardados"
                        }
                    },
                    fa: {
                        show_popup: {
                            message: "نمایش %destUrl%"
                        },
                        continue_blocking: {
                            message: "ادامه مسدودسازی"
                        },
                        allow_from: {
                            message: "اجازه پاپ آپ ها در %origDomain%"
                        },
                        manage_pref: {
                            message: "مدیریت اولویت ها..."
                        },
                        popup_text: {
                            message: "AdGuard این وبسایت را از بازکردن %numPopup% پنجره پاپ آپ جلوگیری کرد"
                        },
                        options: {
                            message: "گزینه ها"
                        },
                        silence_noti: {
                            message: "این پیام را نشان نده در %origDomain%"
                        },
                        site_input_ph: {
                            message: "نام سایت را وارد کنید"
                        },
                        add_site: {
                            message: "افزودن یک سایت"
                        },
                        add: {
                            message: "افزودن"
                        },
                        allowed_empty: {
                            message: "لیست استثناها خالی است"
                        },
                        allowed: {
                            message: "استثناها"
                        },
                        silenced_empty: {
                            message: "لیست وبسایت ها با اطلاع رسانی خاموش شده،خالی است"
                        },
                        silenced: {
                            message: "خاموش شده"
                        },
                        allowed_tooltip: {
                            message: "پاپ آپ برای وبسایت هایی که در اینجا لیست شده،اجازه داده می شود."
                        },
                        silenced_tooltip: {
                            message: "اطلاع رسانی پاپ آپ مسدود شده برای وبسایت های لیست شده در اینجا نمایش داده نمیشود."
                        },
                        installFrom: {
                            message: "نصب از <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "گام 3:برای دریافت تنظیمات یوزراسکریپت این صفحه را تازه سازی کنید"
                        },
                        noinst_ignore_if_ag: {
                            message: "اگر شما AdGuard for Windows را نصب کرده اید، شما میتوانید این گام را چشمپوشی کنید چون یوزراسکریپت مسدودساز پاپ آپ از پیش نصب شده است."
                        },
                        noinst_rec: {
                            message: "(توصیه شده)"
                        },
                        please_wait: {
                            message: "منتظر بمانید،درحال تشخیص مسدودساز پاپ آپ"
                        },
                        noinst_special_prog: {
                            message: "اول از همه برای استفاده از یوزر اسکریپت نیاز به برنامه ویژه یا افزونه ای است که بتواند آن را اِجرا کند است."
                        },
                        noinst_subtitle: {
                            message: "یوزراسکریپت مسدودساز پاپ آپ AdGuard نصب نشده است. لطفا دستور العمل را در زیر مشاهده کنید."
                        },
                        homepage: {
                            message: "صفحه خانگی"
                        },
                        noinst_step_1: {
                            message: "گام 1:نصب مدیر یوزر اسکریپت"
                        },
                        noinst_step_2: {
                            message: "گام 2: یوزر اسکریپت"
                        },
                        extension_name: {
                            message: "مسدودساز پاپ-آپ AdGuard"
                        },
                        userscript_name: {
                            message: "مسدودساز پاپ-آپ AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "مسدودسازی تبلیغات پاپ آپ در صفحات وب."
                        },
                        on_navigation_by_popunder: {
                            message: "انتقال به این صفحه جدید احتمالا بخاطر یه پاپ-آندر انجام شده است. میخواهید ادامه دهید؟",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "مسدودساز پاپ-آپ اجرای کد را لغو کرده تا از ریدایرکت جبلوگیری شود",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "مسدودساز پاپ آپ در حال انجام وظیفه است"
                        },
                        ext_disabled: {
                            message: "مسدودساز پاپ آپ برای $DOMAIN$ غیر فعال شده است",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "مسدودساز پاپ آپ نمیتواند در این دامنه اجرا شود"
                        },
                        settings_saved: {
                            message: "تنظيمات ذخیره شد"
                        }
                    },
                    fi: {
                        show_popup: {
                            message: "Avaa %destUrl%"
                        },
                        continue_blocking: {
                            message: "Jatka estoa"
                        },
                        allow_from: {
                            message: "Salli ponnahdukset verkkotunnukselta %origDomain%"
                        },
                        manage_pref: {
                            message: "Hallinnoi asetuksia..."
                        },
                        popup_text: {
                            message: "AdGuard esti tätä verkkosivustoa avaamasta %numPopup% ponnahdusta"
                        },
                        options: {
                            message: "Valinnat"
                        },
                        silence_noti: {
                            message: "Älä näytä tätä viestiä sivustolla %origDomain%"
                        },
                        site_input_ph: {
                            message: "Syötä sivuston nimi"
                        },
                        add_site: {
                            message: "Lisää sivusto"
                        },
                        add: {
                            message: "Lisää"
                        },
                        allowed_empty: {
                            message: "Lista on tyhjä"
                        },
                        allowed: {
                            message: "Sallitut"
                        },
                        silenced_empty: {
                            message: "Lista on tyjä"
                        },
                        silenced: {
                            message: "Mykistetty"
                        },
                        allowed_tooltip: {
                            message: "Tässä listattujen verkkotunnusten ponnahdukset sallitaan."
                        },
                        silenced_tooltip: {
                            message: "Tämän listan verkkotunnuksissa estetyistä ponnahduksista ei näytetä estoilmoituksia."
                        },
                        installFrom: {
                            message: "Asenna kohteesta <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Vaihe 3: Päivitä tämä sivu saadaksesi käyttäjäskriptin asetukset"
                        },
                        noinst_ignore_if_ag: {
                            message: "Jos asensit AdGuardin Windowsille, voit ohittaa tämän vaiheen, koska Ponnahdusesto-käyttäjäskripti sisältyy siihen."
                        },
                        noinst_rec: {
                            message: "(suositeltu)"
                        },
                        please_wait: {
                            message: "Odota hetki, Ponnahdusestoa havaitaan"
                        },
                        noinst_special_prog: {
                            message: "Käyttääksesi userscript-laajennuksia, tarvitset erityisesti niiden suorittamiseen tarkoitetun ohjelmiston tai laajennuksen."
                        },
                        noinst_subtitle: {
                            message: "AdGuard Ponnahdusesto -käyttäjäskriptiä ei ole asennettu. Katso ohjeet alta."
                        },
                        homepage: {
                            message: "Verkkosivusto"
                        },
                        noinst_step_1: {
                            message: "Vaihe 1: Asenna käyttäjäskriptien hallintamanageri"
                        },
                        noinst_step_2: {
                            message: "Vaihe 2: Käyttäjäskripti"
                        },
                        extension_name: {
                            message: "Ponnahdusesto AdGuardilta"
                        },
                        userscript_name: {
                            message: "AdGuard Ponnahdusesto",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Estää verkkosivujen ponnahdusmainokset."
                        },
                        on_navigation_by_popunder: {
                            message: "Siirtyminen toiselle sivulle johtui todennäköisesti taustalle piilottuneesta ponnahduksesta. Haluatko jatkaa?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Ponnahdusesto keskeytti komentosarjan estääkseen taustalla tapahtuvan uudelleenohjauksen",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Ponnahdusesto on käytössä"
                        },
                        ext_disabled: {
                            message: "Ponnahdusesto on poistettu käytöstä verkkotunnusessa $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Ponnahdusesto on poistettu käytöstä tässä verkkotunnuksessa"
                        },
                        settings_saved: {
                            message: "Asetukset tallennettiin"
                        }
                    },
                    fr: {
                        show_popup: {
                            message: "Afficher %destUrl%"
                        },
                        continue_blocking: {
                            message: "Continuer le blocage"
                        },
                        allow_from: {
                            message: "Autoriser fenêtres pop-up pour %origDomain%"
                        },
                        manage_pref: {
                            message: "Administrer les préférences..."
                        },
                        popup_text: {
                            message: "AdGuard a empêché ce site web d'afficher %numPopup% fenêtres pop-up"
                        },
                        options: {
                            message: "Options"
                        },
                        silence_noti: {
                            message: "Ne pas afficher ce message sur %origDomain%"
                        },
                        site_input_ph: {
                            message: "Saisir le nom du site Web"
                        },
                        add_site: {
                            message: "Ajouter un site Web"
                        },
                        add: {
                            message: "Ajouter"
                        },
                        allowed_empty: {
                            message: "La liste des exceptions est vide"
                        },
                        allowed: {
                            message: "Autorisé"
                        },
                        silenced_empty: {
                            message: "La liste des sites web aux notifications silencieuses est vide"
                        },
                        silenced: {
                            message: "Silence imposé"
                        },
                        allowed_tooltip: {
                            message: "Fenêtres pop-up pour les sites web sur la liste vont être autorisés."
                        },
                        silenced_tooltip: {
                            message: "Les notifications pour les fenêtres pop-up bloquées depuis les sites web listés ci-dessous ne seront pas affichées."
                        },
                        installFrom: {
                            message: "Installer de <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Étape 3: actualisez cette page page pour accéder aux paramètres du script utilisateur"
                        },
                        noinst_ignore_if_ag: {
                            message: "Si vous avez installé AdGuard pour Windows auparavant, vous pouvez passer cette étape car le script utilisateur Bloqueur de fenêtres pop-up y est déjà pré-installé."
                        },
                        noinst_rec: {
                            message: "(Recommandé)"
                        },
                        please_wait: {
                            message: "Veuillez patienter, recherche de bloqueur des fenêtres pop-up en cours"
                        },
                        noinst_special_prog: {
                            message: "Tout d'abord, pour utiliser un script utilisateur vous avez besoin d'un programme spécial ou d'une extension qui gère les scripts utilisateur."
                        },
                        noinst_subtitle: {
                            message: "Le script utilisateur bloqueur de fenêtres pop-up n'est pas installé. Veuillez consulter le manuel ci-dessous."
                        },
                        homepage: {
                            message: "Page d'accueil"
                        },
                        noinst_step_1: {
                            message: "Étape 1: installer un logiciel géstionnaire de scripts utilisateurs"
                        },
                        noinst_step_2: {
                            message: "Étape 2: script utilisateur"
                        },
                        extension_name: {
                            message: "Bloqueur de fenêtres pop-up de AdGuard"
                        },
                        userscript_name: {
                            message: "Bloqueur de fenêtres pop-up de AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Bloque les fenêtres pop-up avec publicités intrusives sur les pages web"
                        },
                        on_navigation_by_popunder: {
                            message: "Cette transition vers la nouvelle page est susceptible d'être causée par un pop-under. Désirez-vous continuer?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Le bloqueur de pop-ups a interrompu l'exécution d'un script pour empêcher une redirection en arrière-plan",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Le bloqueur des fenêtres pop-up est en marche"
                        },
                        ext_disabled: {
                            message: "Le bloqueur de fenêtres pop-up est désactivé pour $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Le bloqueur de fenêtres pop-up ne marche pas sur ce domaine"
                        },
                        settings_saved: {
                            message: "Paramètres sauvegardés"
                        }
                    },
                    he: {
                        show_popup: {
                            message: "הראה את %destUrl%"
                        },
                        continue_blocking: {
                            message: "המשך לחסום"
                        },
                        allow_from: {
                            message: "התר חלונות קופצים עבור %origDomain%"
                        },
                        manage_pref: {
                            message: "נהל העדפות…"
                        },
                        popup_text: {
                            message: "AdGuard מנע מאתר זה לפתוח %numPopup% חלונות קופצים"
                        },
                        options: {
                            message: "אפשרויות"
                        },
                        silence_noti: {
                            message: "אל תראה הודעה זו בתחום %origDomain%"
                        },
                        site_input_ph: {
                            message: "הכנס שם אתר"
                        },
                        add_site: {
                            message: "הוסף אתר"
                        },
                        add: {
                            message: "הוסף"
                        },
                        allowed_empty: {
                            message: "הרשימה של אתרים מותרים ריקה"
                        },
                        allowed: {
                            message: "מותרים"
                        },
                        silenced_empty: {
                            message: "הרשימה של אתרים מושתקים ריקה"
                        },
                        silenced: {
                            message: "מושתקים"
                        },
                        allowed_tooltip: {
                            message: "חלונות קופצים יותרו עבור תחומים שכתובים ברשימה כאן."
                        },
                        silenced_tooltip: {
                            message: "התראות עבור חלונות קופצים חסומים לא ייראו עבור תחומים שכתובים ברשימה כאן."
                        },
                        installFrom: {
                            message: "התקן מן <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "צעד 3: רענן דף זה כדי לעבור אל הגדרות תסריט המשתמש"
                        },
                        noinst_ignore_if_ag: {
                            message: "במקרה שהתקנת את AdGuard עבור Windows, אתה יכול להתעלם מצעד זה הואיל ותסריט המשתמש של חוסם החלונות הקופצים מגיע מותקן מראש."
                        },
                        noinst_rec: {
                            message: "(מומלץ)"
                        },
                        please_wait: {
                            message: "אנא המתן בעת גילוי חוסם החלונות הקופצים"
                        },
                        noinst_special_prog: {
                            message: "קודם כל, כדי להשתמש בתסריט משתמש אתה צריך תוכנה או הרחבה מיוחדות אשר מריצות תסריטי משתמש."
                        },
                        noinst_subtitle: {
                            message: "תסריט משתמש של חוסם חלונות קופצים של AdGuard אינו מותקן. אנא ראה את ההוראות למטה."
                        },
                        homepage: {
                            message: "דף הבית"
                        },
                        noinst_step_1: {
                            message: "צעד 1: התקן מנהל תסריטי משתמש"
                        },
                        noinst_step_2: {
                            message: "צעד 2: תסריט משתמש"
                        },
                        extension_name: {
                            message: "חוסם חלונות קופצים מאת AdGuard"
                        },
                        userscript_name: {
                            message: "חוסם חלונות קופצים של AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "חוסם פרסומות קופצות בדפי רשת"
                        },
                        on_navigation_by_popunder: {
                            message: "מעבר זה אל הדף החדש כנראה נגרם ע״י חלון קופץ מתחת. האם אתה רוצה להמשיך?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "חוסם החלונות הקופצים ביטל ביצוע תסריט כדי למנוע הכוונה ברקע",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "חוסם החלונות הקופצים פעיל"
                        },
                        ext_disabled: {
                            message: "חוסם החלונות הקופצים מושבת עבור $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "חוסם החלונות הקופצים מושבת עבור תחום זה"
                        },
                        settings_saved: {
                            message: "הגדרות נשמרו"
                        }
                    },
                    hr: {
                        show_popup: {
                            message: "Prikaži %destUrl%"
                        },
                        continue_blocking: {
                            message: "Nastavi blokirati"
                        },
                        allow_from: {
                            message: "Dopusti skočne prozore za %origDomain%"
                        },
                        manage_pref: {
                            message: "Upravljanje postavkama..."
                        },
                        popup_text: {
                            message: "AdGuard je spriječio ovu web stranicu da otvori %numPopup% skočna prozora"
                        },
                        options: {
                            message: "Opcije"
                        },
                        silence_noti: {
                            message: "Ne pokazuj ovu poruku za %origDomain%"
                        },
                        site_input_ph: {
                            message: "Unesite naziv web stranice"
                        },
                        add_site: {
                            message: "Dodaj stranicu"
                        },
                        add: {
                            message: "Dodaj"
                        },
                        allowed_empty: {
                            message: "Lista dopuštenih stranica je prazna"
                        },
                        allowed: {
                            message: "Dopušteno"
                        },
                        silenced_empty: {
                            message: "Lista utišanih stranica je prazna"
                        },
                        silenced: {
                            message: "Utišano"
                        },
                        allowed_tooltip: {
                            message: "Popis domena na kojima su dopušteni skočni prozori."
                        },
                        silenced_tooltip: {
                            message: "Obavijesti za blokirane skočne prozore neće biti prikazane za navedene domene."
                        },
                        installFrom: {
                            message: "Instaliraj s {$startLink}{$name}{$endLink}"
                        },
                        noinst_step_3: {
                            message: "Korak 3: Osvježite ovu stranicu kako biste dobili userscript postavke"
                        },
                        noinst_ignore_if_ag: {
                            message: "Ako ste instalirali AdGuard za Windows, možete zanemariti ovaj korak jer je userscripta blokatora skočnih prozora, unaprijed instaliran."
                        },
                        noinst_rec: {
                            message: "(Preporučeno)"
                        },
                        please_wait: {
                            message: "Molimo pričekajte, otkrivamo bloker skočnih prozora"
                        },
                        noinst_special_prog: {
                            message: "Prije svega, za upotrebu userscripta potreban vam je poseban program ili proširenje koje pokreće userscripte."
                        },
                        noinst_subtitle: {
                            message: "Userscript od AdGuard Blokera skočnih prozora, nije uspješno instaliranja. Molimo pratite upute ispod."
                        },
                        homepage: {
                            message: "Početna stranica"
                        },
                        noinst_step_1: {
                            message: "Korak 1: Instalirajte userscript upravitelj"
                        },
                        noinst_step_2: {
                            message: "Korak 2: Userscript"
                        },
                        extension_name: {
                            message: "AdGuard Bloker skočnih prozora"
                        },
                        userscript_name: {
                            message: "AdGuard Bloker skočnih prozora",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokira skočne prozore na web stranicama"
                        },
                        on_navigation_by_popunder: {
                            message: "Prijelaz na novu stranicu je najvjerojatnije uzrokovan skrivenim skočnim prozorom. Želite li nastaviti?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Bloker skočnih prozora prekinuo je izvršavanje skripte kako bi spriječio preusmjeravanje u pozadini",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Bloker skočnih prozora je aktivan"
                        },
                        ext_disabled: {
                            message: "Bloker skočnih prozora je onemogućen za $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Bloker skočnih prozora je onemogućen za ovu domenu"
                        },
                        settings_saved: {
                            message: "Postavke su spremljene"
                        }
                    },
                    hu: {
                        show_popup: {
                            message: "Mutasd %destUrl%"
                        },
                        continue_blocking: {
                            message: "Blokkolás folytatása"
                        },
                        allow_from: {
                            message: "Felugró ablakok engedélyezése itt: %origDomain%"
                        },
                        manage_pref: {
                            message: "Beállítások kezelése..."
                        },
                        popup_text: {
                            message: "Az AdGuard %numPopup% felugró ablak megjelenését akadályozta meg"
                        },
                        options: {
                            message: "Beállítások"
                        },
                        silence_noti: {
                            message: "Ne mutassa ezt az üzenetet itt: %origDomain%"
                        },
                        site_input_ph: {
                            message: "Írja be a webhely nevét"
                        },
                        add_site: {
                            message: "Webhely hozzáadása"
                        },
                        add: {
                            message: "Hozzáadás"
                        },
                        allowed_empty: {
                            message: "Az engedélyezett oldalak listája üres"
                        },
                        allowed: {
                            message: "Engedélyezett"
                        },
                        silenced_empty: {
                            message: "Az némított oldalak listája üres"
                        },
                        silenced: {
                            message: "Némított"
                        },
                        allowed_tooltip: {
                            message: "A felsorolt oldalakon engedélyezve lesznek a popup-ok."
                        },
                        silenced_tooltip: {
                            message: "A blokkolt felugró ablakok értesitései nem fognak megjelenni a követketző oldalakon."
                        },
                        installFrom: {
                            message: "Telepítés innen: <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "3. lépés: Töltse újra ezt az oldalt, hogy hozzáférjen a felhasználói szűrők beállitásaihoz"
                        },
                        noinst_ignore_if_ag: {
                            message: "Ha telepítette az AdGuard for Windowst, hagyja ki ezt a lépést, mivel a Popup Blocker userscript abban előre van telepítve."
                        },
                        noinst_rec: {
                            message: "(Ajánlott)"
                        },
                        please_wait: {
                            message: "Kérjük várjon, Popup Blocker detektálása"
                        },
                        noinst_special_prog: {
                            message: "Mindenekelőtt, szüksége van egy olyan speciális programra vagy kiegészítőre, ami képes userscripteket futtatni."
                        },
                        noinst_subtitle: {
                            message: "Az AdGuard Popup Blocker userscript nincs telepítve. Kérem tekintse meg a lépéseket alább."
                        },
                        homepage: {
                            message: "Kezdőlap"
                        },
                        noinst_step_1: {
                            message: "1. lépés: Userscript kezelő telepítése"
                        },
                        noinst_step_2: {
                            message: "2. lépés: Userscript"
                        },
                        extension_name: {
                            message: "Popup Blocker by AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Popup Blocker",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokkolja a felugró ablakban megjelenő reklámokat a webhelyeken"
                        },
                        on_navigation_by_popunder: {
                            message: "Az új oldalra való áttérést valószínűleg egy előugró ablak okozza. Kívánja folytatni?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "A Popup Blocker megszakította a szkript végrehajtását a háttérben történő átirányítás megakadályozása érdekében",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "A Popup Blocker működik"
                        },
                        ext_disabled: {
                            message: "A Popup Blocker ki van kapcsolva itt: $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "A Popup Blocker ki van kapcsolva ezen a domainen"
                        },
                        settings_saved: {
                            message: "Beállítások mentve"
                        }
                    },
                    id: {
                        show_popup: {
                            message: "Tampilkan %destUrl%"
                        },
                        continue_blocking: {
                            message: "Lanjutkan pemblokiran"
                        },
                        allow_from: {
                            message: "Izinkan popup di %origDomain%"
                        },
                        manage_pref: {
                            message: "Kelola pengaturan..."
                        },
                        popup_text: {
                            message: "AdGuard mencegah situs web ini membuka %numPopup% jendela popup"
                        },
                        options: {
                            message: "Opsi"
                        },
                        silence_noti: {
                            message: "Jangan tampilkan pesan ini di %origDomain%"
                        },
                        site_input_ph: {
                            message: "Masukkan nama situs"
                        },
                        add_site: {
                            message: "Tambah situs"
                        },
                        add: {
                            message: "Tambah"
                        },
                        allowed_empty: {
                            message: "Daftar pengecualian masih kosong"
                        },
                        allowed: {
                            message: "Pengecualian"
                        },
                        silenced_empty: {
                            message: "Daftar situs web dengan pemberitahuan yang diheningkan masih kosong"
                        },
                        silenced: {
                            message: "Diheningkan"
                        },
                        allowed_tooltip: {
                            message: "Popup akan diizinkan di situs web yang tercantum di sini."
                        },
                        silenced_tooltip: {
                            message: "Notifikasi popup yang diblokir tidak akan ditampilkan di situs web yang tercantum di sini."
                        },
                        installFrom: {
                            message: "Pasang dari <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Tahap 3: Muat ulang halamana ini untuk masuk ke pengaturan userscript"
                        },
                        noinst_ignore_if_ag: {
                            message: "Jika Anda telah memasang AdGuard untuk Windows, Anda dapat mengabaikan langkah ini karena Pemblokir Popup sudah terpasang."
                        },
                        noinst_rec: {
                            message: "(Dianjurkan)"
                        },
                        please_wait: {
                            message: "Mohon tunggu, mendeteksi Pemblokir Popup"
                        },
                        noinst_special_prog: {
                            message: "Pertama-tama, untuk menggunakan userscript Anda memerlukan program atau ekstensi khusus yang dapat menjalankan userscript."
                        },
                        noinst_subtitle: {
                            message: "Userscript Pemblokir Popup AdGuard belum terpasang. Silakan lihat instruksi di bawah ini."
                        },
                        homepage: {
                            message: "Situs"
                        },
                        noinst_step_1: {
                            message: "Langkah 1: Pasang pengelola userscript"
                        },
                        noinst_step_2: {
                            message: "Langkah 2: Userscript"
                        },
                        extension_name: {
                            message: "Pemblokir Popup oleh AdGuard"
                        },
                        userscript_name: {
                            message: "Pemblokir Popup AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokir iklan popup di halaman web"
                        },
                        on_navigation_by_popunder: {
                            message: "Transisi ke laman baru ini kemungkinan disebabkan oleh sebuah pop-up. Apakah Anda ingin melanjutkan?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Popup Blocker menghentikan eksekusi skrip untuk mencegah perubahan laman di latar belakang",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Pemblokir Popup sedang bekerja"
                        },
                        ext_disabled: {
                            message: "Pemblokir Popup dinonaktifkan untuk $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Pemblokir Popup tidak dapat bekerja di domain ini"
                        },
                        settings_saved: {
                            message: "Pengaturan disimpan"
                        }
                    },
                    it: {
                        show_popup: {
                            message: "Visualizza %destUrl%"
                        },
                        continue_blocking: {
                            message: "Continua a bloccare"
                        },
                        allow_from: {
                            message: "Consenti pop-up per %origDomain%"
                        },
                        manage_pref: {
                            message: "Gestisci preferenze..."
                        },
                        popup_text: {
                            message: "AdGuard ha impedito a questo sito web di aprire {$numPopup} finestre pop-up"
                        },
                        options: {
                            message: "Opzioni"
                        },
                        silence_noti: {
                            message: "Non mostrare questo messaggio su %origDomain%"
                        },
                        site_input_ph: {
                            message: "Inserisci il nome del sito"
                        },
                        add_site: {
                            message: "Aggiungi un sito"
                        },
                        add: {
                            message: "Aggiungi"
                        },
                        allowed_empty: {
                            message: "La lista dei siti consentiti è vuota"
                        },
                        allowed: {
                            message: "Consentito"
                        },
                        silenced_empty: {
                            message: "La lista dei siti silenziati è vuota"
                        },
                        silenced: {
                            message: "Silenziato"
                        },
                        allowed_tooltip: {
                            message: "I pop-up verranno consentiti per i domini qui elencati."
                        },
                        silenced_tooltip: {
                            message: "Le notifiche dei pop-up bloccati non verranno mostrate nei domini qui indicati."
                        },
                        installFrom: {
                            message: "Installa da <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Passo 3: Ricarica questa pagina per ottenere le impostazioni dello script utente"
                        },
                        noinst_ignore_if_ag: {
                            message: "Se hai installato AdGuard per Windows, puoi ignorare questo passaggio poiché lo script utente Popup Blocker è preinstallato."
                        },
                        noinst_rec: {
                            message: "(Consigliato)"
                        },
                        please_wait: {
                            message: "Si prega di attendere, rilevamento di Popup Blocker in corso"
                        },
                        noinst_special_prog: {
                            message: "Prima di tutto, per utilizzare uno script utente è necessario un programma o un'estensione speciali per l'esecuzione di tali script."
                        },
                        noinst_subtitle: {
                            message: "Lo script utente AdGuard Popup Blocker non è installato. Ti invitiamo a consultare le istruzioni di seguito."
                        },
                        homepage: {
                            message: "Pagina principale"
                        },
                        noinst_step_1: {
                            message: "Passo 1: Installa un gestore di script utente"
                        },
                        noinst_step_2: {
                            message: "Passo 2: Script utente"
                        },
                        extension_name: {
                            message: "Blocca-popup di AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Popup Blocker",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blocca gli annunci pop-up sulle pagine web"
                        },
                        on_navigation_by_popunder: {
                            message: "È probabile che questa transizione alla nuova pagina sia causata da un pop-under. Desideri proseguire?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Popup Blocker ha interrotto l'esecuzione di uno script per impedire il reindirizzamento in secondo piano",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Popup Blocker è in servizio"
                        },
                        ext_disabled: {
                            message: "Popup Blocker è disattivato per $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Popup Blocker è disattivato su questo dominio"
                        },
                        settings_saved: {
                            message: "Impostazioni salvate"
                        }
                    },
                    ja: {
                        show_popup: {
                            message: "%destUrl%を表示する"
                        },
                        continue_blocking: {
                            message: "ブロッキングを続ける"
                        },
                        allow_from: {
                            message: "%origDomain%のポップアップを許可する"
                        },
                        manage_pref: {
                            message: "設定を管理…"
                        },
                        popup_text: {
                            message: "AdGuardはこのウェブサイトが%numPopup%のポップアップウィンドウを開くのを防ぎました"
                        },
                        options: {
                            message: "オプション"
                        },
                        silence_noti: {
                            message: "%origDomain%にこのメッセージを表示しない"
                        },
                        site_input_ph: {
                            message: "サイト名を入力"
                        },
                        add_site: {
                            message: "サイトを追加する"
                        },
                        add: {
                            message: "追加"
                        },
                        allowed_empty: {
                            message: "許可済みサイトのリストは空です"
                        },
                        allowed: {
                            message: "例外"
                        },
                        silenced_empty: {
                            message: "消音済みサイトのリストは空です"
                        },
                        silenced: {
                            message: "消音済み"
                        },
                        allowed_tooltip: {
                            message: "ポップアップはここに記載されているドメインにとって許可されます。"
                        },
                        silenced_tooltip: {
                            message: "ブロックされたポップアップの通知は、ここにリストアップされているドメインでは表示されません。"
                        },
                        installFrom: {
                            message: "<a>%name%</a>からインストールする"
                        },
                        noinst_step_3: {
                            message: "ステップ3：このページを更新して、ユーザースクリプト設定を取得する"
                        },
                        noinst_ignore_if_ag: {
                            message: "AdGuard for Windows をインストールした場合は、ポップアップブロッカーのユーザスクリプトがあらかじめインストールされているので、このステップを無視して結構です。"
                        },
                        noinst_rec: {
                            message: "（推奨）"
                        },
                        please_wait: {
                            message: "ポップアップブロッカーを検出するまでお待ちください"
                        },
                        noinst_special_prog: {
                            message: "まず、ユーザスクリプトを使用するには、ユーザスクリプトを実行する特別なプログラムが必要です。"
                        },
                        noinst_subtitle: {
                            message: "AdGuardポップアップブロッカー・ユーザスクリプトがインストールされていません。 下記の指示をご覧ください。"
                        },
                        homepage: {
                            message: "ホームページ"
                        },
                        noinst_step_1: {
                            message: "ステップ1：ユーザースクリプト・マネージャをインストールする"
                        },
                        noinst_step_2: {
                            message: "ステップ２：ユーザスクリプト"
                        },
                        extension_name: {
                            message: "ポップアップブロッカー by AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard ポップアップブロッカー",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Webページでポップアップ広告をブロックします。"
                        },
                        on_navigation_by_popunder: {
                            message: "新しいページへの移動はポップアンダーによって生じた可能性があります。続行しますか？",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "ポップアップブロッカーはバックグラウンドリダイレクトを防ぐためにスクリプトの実行を中止しました",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "ポップアップブロッカー作動中"
                        },
                        ext_disabled: {
                            message: "$DOMAIN$に対してポップアップブロッカーは無効になっています",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "このドメインではポップアップブロッカーは動作できません"
                        },
                        settings_saved: {
                            message: "設定保存完了"
                        }
                    },
                    ko: {
                        show_popup: {
                            message: "%destUrl% 표시"
                        },
                        continue_blocking: {
                            message: "계속 차단하기"
                        },
                        allow_from: {
                            message: "%origDomain%의 팝업 허용하기"
                        },
                        manage_pref: {
                            message: "환경 설정 관리..."
                        },
                        popup_text: {
                            message: "AdGuard가 이 웹사이트에서 %numPopup%개의 팝업 창을 차단하였습니다"
                        },
                        options: {
                            message: "옵션"
                        },
                        silence_noti: {
                            message: "%origDomain%에서 이 메세지 표시하지 않기"
                        },
                        site_input_ph: {
                            message: "웹 사이트 명을 입력하세요"
                        },
                        add_site: {
                            message: "웹 사이트 추가"
                        },
                        add: {
                            message: "추가"
                        },
                        allowed_empty: {
                            message: "허용된 웹 사이트 목록이 비어 있습니다"
                        },
                        allowed: {
                            message: "허용됨"
                        },
                        silenced_empty: {
                            message: "침묵된 사이트 목록이 비어 있습니다"
                        },
                        silenced: {
                            message: "침묵됨"
                        },
                        allowed_tooltip: {
                            message: "이 목록에 있는 주소의 팝업들은 허용됩니다."
                        },
                        silenced_tooltip: {
                            message: "이 목록에 있는 주소는 차단된 팝업 알림이 표시되지 않습니다."
                        },
                        installFrom: {
                            message: "<a>%name%</a> 에서 설치"
                        },
                        noinst_step_3: {
                            message: "3단계: 사용자 스크립트 설정을 받으려면 페이지를 새로고침하세요"
                        },
                        noinst_ignore_if_ag: {
                            message: "이미 Windows용 AdGuard를 설치했다면, 팝업 차단기 사용자 스크립트도 같이 설치되기 때문에 이 단계를 건너뛰실 수 있습니다."
                        },
                        noinst_rec: {
                            message: "(추천)"
                        },
                        please_wait: {
                            message: "잠시만 기다려주세요, 팝업 차단기를 찾는 중입니다"
                        },
                        noinst_special_prog: {
                            message: "제일 먼저, 유저스크립트를 사용하려면 유저스크립트를 실행하기 위한 특별한 프로그램 혹은 확장 프로그램이 필요합니다."
                        },
                        noinst_subtitle: {
                            message: "AdGuard 팝업 차단기 사용자 스크립트가 설치되어 있지 않습니다. 아래의 설명을 봐 주세요."
                        },
                        homepage: {
                            message: "홈페이지"
                        },
                        noinst_step_1: {
                            message: "1 단계: 사용자 스크립트 관리자를 설치하기"
                        },
                        noinst_step_2: {
                            message: "2 단계: 사용자 스크립트"
                        },
                        extension_name: {
                            message: "팝업 차단기 by AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard 팝업 차단기",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "웹 페이지에서 팝업 광고를 차단"
                        },
                        on_navigation_by_popunder: {
                            message: "이 새 페이지로의 이동은 팝언더 광고에 의한 것일 수 있습니다. 계속 하시겠습니까?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "팝업 차단기가 백그라운드 리디렉션을 방지하기 위해 스크립트 실행을 중단하였습니다",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "팝업 차단기는 임무를 수행 중 입니다"
                        },
                        ext_disabled: {
                            message: "팝업 차단기의 $DOMAIN$에서의 동작이 비활성화 되었습니다",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "팝업 차단기의 이 도메인에서의 동작이 비활성화 되었습니다"
                        },
                        settings_saved: {
                            message: "설정 저장됨"
                        }
                    },
                    lt: {
                        show_popup: {
                            message: "Rodyti %destUrl%"
                        },
                        continue_blocking: {
                            message: "Tęsti blokavimą"
                        },
                        allow_from: {
                            message: "Leisti iššokančius langus %origDomain%"
                        },
                        manage_pref: {
                            message: "Tvarkyti nuostatas..."
                        },
                        popup_text: {
                            message: "„AdGuard“ neleido šiai svetainei atidaryti %numPopup% iššokančius langus"
                        },
                        options: {
                            message: "Parinktys"
                        },
                        silence_noti: {
                            message: "Nerodyti šio pranešimo %origDomain%"
                        },
                        site_input_ph: {
                            message: "Įveskite svetainės pavadinimą"
                        },
                        add_site: {
                            message: "Pridėti svetainę"
                        },
                        add: {
                            message: "Pridėti"
                        },
                        allowed_empty: {
                            message: "Leidžiamų svetainių sąrašas tuščias"
                        },
                        allowed: {
                            message: "Išimtys"
                        },
                        silenced_empty: {
                            message: "Svetainių su atjungtais pranešimais sąrašas tuščias"
                        },
                        silenced: {
                            message: "Be pranešimų"
                        },
                        allowed_tooltip: {
                            message: "Iššokantys langai bus leidžiami domenuose, kurie išvardyti čia."
                        },
                        silenced_tooltip: {
                            message: "Pranešimai apie užblokuotus iškylančiuosius langus nebus rodomi domenams, išvardytiems čia."
                        },
                        installFrom: {
                            message: "Įdiegti iš {$startLink}{$name}{$endLink}"
                        },
                        noinst_step_3: {
                            message: "3 žingsnis: Atnaujinkite šį puslapį, kad pasiektumėte naudotojo skripto nustatymus"
                        },
                        noinst_ignore_if_ag: {
                            message: "Jei įdiegėte AdGuard, skirtą Windows, galite praleisti šį žingsnį, nes iškylančių langų blokavimo programa jau bus įdiegta."
                        },
                        noinst_rec: {
                            message: "(Rekomenduojama)"
                        },
                        please_wait: {
                            message: "Prašome palaukti, bandoma aptikti iškylančių langų blokatorių"
                        },
                        noinst_special_prog: {
                            message: "Norint naudoti skriptus, jums reikia specialios programos arba plėtinio, kuris paleidžia skriptus."
                        },
                        noinst_subtitle: {
                            message: "AdGuard iškylančių langų blokatorius neįdiegtas. Prašome perskaityti žemiau pateiktą instrukciją."
                        },
                        homepage: {
                            message: "Pagrindinis puslapis"
                        },
                        noinst_step_1: {
                            message: "1 žingnis: įdiekite naudotojo skriptų tvarkyklę"
                        },
                        noinst_step_2: {
                            message: "2 žingsnis: naudotojo skriptas"
                        },
                        extension_name: {
                            message: "AdGuard iššokančių langų blokatorius"
                        },
                        userscript_name: {
                            message: "AdGuard iššokančiųjų langų blokatorius",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokuoja iššokančius skelbimus tinklalapiuose"
                        },
                        on_navigation_by_popunder: {
                            message: "Šis perėjimas į naują puslapį greičiausiai buvo įtakotas pop-under. Ar norite tęsti?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Iškylančių langų blokatorius nutraukė skripto vykdymą, kad būtų išvengta foninio peradresavimo",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Iškylančių langų blokatorius yra paruoštas"
                        },
                        ext_disabled: {
                            message: "Iškylančių langų blokatorius yra išjungtas domenui $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Iškylančių langų blokatorius yra išjungtas šiam domenui"
                        },
                        settings_saved: {
                            message: "Nustatymai išsaugoti"
                        }
                    },
                    ms: {
                        show_popup: {
                            message: "Tunjukkan %destUrl%"
                        },
                        continue_blocking: {
                            message: "Terus menyekat"
                        },
                        allow_from: {
                            message: "Benarkan pop-timbul untuk %origDomain%"
                        },
                        manage_pref: {
                            message: "Urus keutamaan..."
                        },
                        popup_text: {
                            message: "AdGuard menghalang laman web ini daripada membuka %numPopup% tetingkap pop-timbul"
                        },
                        options: {
                            message: "Pilihan"
                        },
                        silence_noti: {
                            message: "Jangan tunjuk mesej ini pada %origDomain%"
                        },
                        site_input_ph: {
                            message: "Masukkan nama laman"
                        },
                        add_site: {
                            message: "Tambah laman"
                        },
                        add: {
                            message: "Tambah"
                        },
                        allowed_empty: {
                            message: "Senarai laman dibenarkan adalah kosong"
                        },
                        allowed: {
                            message: "Dibenarkan"
                        },
                        silenced_empty: {
                            message: "Senarai laman disenyapkan adalah kosong"
                        },
                        silenced: {
                            message: "Disenyapkan"
                        },
                        allowed_tooltip: {
                            message: "Poptimbul akan dibenarkan untuk domain disenarai di sini."
                        },
                        silenced_tooltip: {
                            message: "Pemberitahuan untuk poptimbul disekat tidak akan ditunjukkan untuk domain disenarai di sini."
                        },
                        installFrom: {
                            message: "Pasang dari <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Langkah 3: Segar semula laman ini untuk mendapat tetapan skrip pengguna"
                        },
                        noinst_ignore_if_ag: {
                            message: "Jika anda telah memasang AdGuard untuk Windows, anda bole mengabaikan langkah ini kerana skrip pengguna Penyekat Pop Timbul diprapasangkan."
                        },
                        noinst_rec: {
                            message: "(Disyorkan)"
                        },
                        please_wait: {
                            message: "Sila tunggu, mengesan Penyekat Pop Timbul"
                        },
                        noinst_special_prog: {
                            message: "Pertama sekali, untuk mengguna skrip pengguna anda perlu aturcara istimewa atau sambungan yang menjalankan skrip pengguna."
                        },
                        noinst_subtitle: {
                            message: "Skrip pengguna Penyekat Pop Timbul AdGuard tidak dipasang. Sila lihat arahan di bawah."
                        },
                        homepage: {
                            message: "Laman rumah"
                        },
                        noinst_step_1: {
                            message: "Langkah 1: Pasang pengurus skrip pengguna"
                        },
                        noinst_step_2: {
                            message: "Langkah 2: Skrip pengguna"
                        },
                        extension_name: {
                            message: "Penyekat Pop Timbul oleh AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Penyekat Pop Timbul",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Sekat pop timbul pada laman web"
                        },
                        on_navigation_by_popunder: {
                            message: "Peralihan ke laman baru ini kemungkinan disebabkan oleh pop-bawah. Anda ingin meneruskan?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Penyekat Pop Timbul menggugurkan pelaksanaan skrip bagi mengelakkan arah semula latar belakang",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Penyekat Pop Timbul sedang bertugas"
                        },
                        ext_disabled: {
                            message: "Penyekat Pop Timbul dinyahdayakan untuk $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Penyekat Pop Timbul dinyahdayakan untuk domain ini"
                        },
                        settings_saved: {
                            message: "Tetapan disimpan"
                        }
                    },
                    no: {
                        show_popup: {
                            message: "Vis %destUrl%"
                        },
                        continue_blocking: {
                            message: "Fortsett blokkering"
                        },
                        allow_from: {
                            message: "Tillat popup-vinduer for %origDomain%"
                        },
                        manage_pref: {
                            message: "Administrer preferanser…"
                        },
                        popup_text: {
                            message: "AdGuard forhindret denne nettsiden i å åpne popup-vinduer for %numPopup%"
                        },
                        options: {
                            message: "Alternativer"
                        },
                        silence_noti: {
                            message: "Ikke vis denne meldingen for %origDomain%"
                        },
                        site_input_ph: {
                            message: "Oppgi sidenavn"
                        },
                        add_site: {
                            message: "Legg til en side"
                        },
                        add: {
                            message: "Legg til"
                        },
                        allowed_empty: {
                            message: "Lisen over unntak er tom"
                        },
                        allowed: {
                            message: "Unntak"
                        },
                        silenced_empty: {
                            message: "Liste over nettsider med dempede varsler er tom"
                        },
                        silenced: {
                            message: "Dempet"
                        },
                        allowed_tooltip: {
                            message: "Popup-vinduer vil bli tillatt for nettsider som er oppført her."
                        },
                        silenced_tooltip: {
                            message: "Blokkerte popup-vinduer vil ikke vises for nettsider som er oppført her."
                        },
                        installFrom: {
                            message: "Installer fra <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Trinn 3: Oppdater denne siden for å komme til brukerskript-innstillingene"
                        },
                        noinst_ignore_if_ag: {
                            message: "Hvis du har installert AdGuard for Windows, kan du ignorere dette trinnet, da brukerskript for popup-blokkering  kommer forhåndsinstallert."
                        },
                        noinst_rec: {
                            message: "(Anbefalt)"
                        },
                        please_wait: {
                            message: "Vennligst vent, oppdager popup-blokkereren"
                        },
                        noinst_special_prog: {
                            message: "Først av alt, for å bruke et brukerskript trenger du et spesielt program eller en utvidelse som kan kjøre brukerskript."
                        },
                        noinst_subtitle: {
                            message: "Brukerskript for AdGuards popup-blokkerer er ikke installert. Vennligst se instruksjonene nedenfor."
                        },
                        homepage: {
                            message: "Hjemmeside"
                        },
                        noinst_step_1: {
                            message: "Trinn 1: Installer en brukerskript-administerere"
                        },
                        noinst_step_2: {
                            message: "Stinn 2: Brukerskript"
                        },
                        extension_name: {
                            message: "Popup-blokkerer fra AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuards popup-blokkerer",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokker popup-annonser på nettsider"
                        },
                        on_navigation_by_popunder: {
                            message: "Omdirigeringen til den nye nettsiden er sannsynligvis forårsaket av en pop-under. Ønsker du å fortsette?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Popup Blocker avbrøt en skrift fra å kjøre for å hindre bakgrunnsomdirigering",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Popup-blokkereren er på vakt"
                        },
                        ext_disabled: {
                            message: "Popup-blokkereren er deaktivert for $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Popup-blokkereren kan ikke kjøre på dette domenet"
                        },
                        settings_saved: {
                            message: "Innstillinger lagret"
                        }
                    },
                    pl: {
                        show_popup: {
                            message: "Pokaż %destUrl%"
                        },
                        continue_blocking: {
                            message: "Kontynuuj blokowanie"
                        },
                        allow_from: {
                            message: "Zezwalaj na wyskakujące okienka dla %origDomain%"
                        },
                        manage_pref: {
                            message: "Zarządzaj preferencjami..."
                        },
                        popup_text: {
                            message: "AdGuard zapobiegł na tej stronie otwarcie  %numPopup% wyskakujacego okienka."
                        },
                        options: {
                            message: "Opcje"
                        },
                        silence_noti: {
                            message: "Nie pokazuj tej wiadomości w %origDomain%"
                        },
                        site_input_ph: {
                            message: "Wprowadź nazwę witryny"
                        },
                        add_site: {
                            message: "Dodaj stronę"
                        },
                        add: {
                            message: "Dodaj"
                        },
                        allowed_empty: {
                            message: "Lista dozwolonych stron jest pusta"
                        },
                        allowed: {
                            message: "Dozwolona"
                        },
                        silenced_empty: {
                            message: "Lista uciszonych stron jest pusta"
                        },
                        silenced: {
                            message: "Uciszona"
                        },
                        allowed_tooltip: {
                            message: "Dla wymienionych tutaj stron dozwolone będą wyskakujące okienka."
                        },
                        silenced_tooltip: {
                            message: "Powiadomienia o zablokowanych wyskakujących okienkach nie będą wyświetlane dla stron tutaj wymienionych."
                        },
                        installFrom: {
                            message: "Instaluj z <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Krok 3: Odśwież tę stronę, aby przejść do ustawień skryptu użytkownika"
                        },
                        noinst_ignore_if_ag: {
                            message: "Jeśli zainstalowałeś AdGuard dla systemu Windows, możesz zignorować ten krok, gdy instalator funkcji Bloker wyskakujących okienek zostanie zainstalowany fabrycznie."
                        },
                        noinst_rec: {
                            message: "(Zalecane)"
                        },
                        please_wait: {
                            message: "Proszę czekać, wykrywam, uruchamiam bloker wyskakujących okienek"
                        },
                        noinst_special_prog: {
                            message: "Przede wszystkim, aby użyć skryptu użytkownika, potrzebujesz specjalnego programu, który uruchamia takie skrypty."
                        },
                        noinst_subtitle: {
                            message: "Bloker wyskakujących okienek AdGuard skrypt użytkownika nie jest zainstalowany. Zobacz instrukcję poniżej."
                        },
                        homepage: {
                            message: "Strona domowa"
                        },
                        noinst_step_1: {
                            message: "Krok 1: Zainstaluj menedżera skryptów użytkownika"
                        },
                        noinst_step_2: {
                            message: "Krok 2: Skrypty użytkownika"
                        },
                        extension_name: {
                            message: "Bloker wyskakujących okienek przez AdGuard"
                        },
                        userscript_name: {
                            message: "Bloker wyskakujących okienek przez AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokuje wyskakujące okienka na stronach internetowych"
                        },
                        on_navigation_by_popunder: {
                            message: "To przejście na nową stronę może być spowodowane przez pop-under. Czy chcesz kontynuować?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Bloker wyskakujących okienek przerwał wykonywanie skryptu, aby zapobiec przekierowaniu w tle",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Bloker wyskakujących okienek jest na służbie"
                        },
                        ext_disabled: {
                            message: "Bloker wyskakujących okienek jest wyłączony dla $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Bloker wyskakujących okienek nie może działać na tej domenie"
                        },
                        settings_saved: {
                            message: "Ustawienia zapisane"
                        }
                    },
                    nl: {
                        show_popup: {
                            message: "Toon %destUrl%"
                        },
                        continue_blocking: {
                            message: "Doorgaan"
                        },
                        allow_from: {
                            message: "Pop-ups toestaan voor %origDomain%"
                        },
                        manage_pref: {
                            message: "Voorkeuren beheren..."
                        },
                        popup_text: {
                            message: "AdGuard heeft voorkomen dat deze website pop-upvensters van %numPopup% opende"
                        },
                        options: {
                            message: "Opties"
                        },
                        silence_noti: {
                            message: "Dit bericht niet weergeven voor %origDomain%"
                        },
                        site_input_ph: {
                            message: "Voer site naam in"
                        },
                        add_site: {
                            message: "Een site toevoegen"
                        },
                        add: {
                            message: "Toevoegen"
                        },
                        allowed_empty: {
                            message: "Lijst met toegestane sites is leeg"
                        },
                        allowed: {
                            message: "Toegestaan"
                        },
                        silenced_empty: {
                            message: "Lijst met sites waarvan de notificaties uit zijn gezet is leeg"
                        },
                        silenced: {
                            message: "Zonder notificaties"
                        },
                        allowed_tooltip: {
                            message: "Pop-ups worden toegestaan voor de domeinen in deze lijst."
                        },
                        silenced_tooltip: {
                            message: "Meldingen voor geblokkeerde pop-ups worden niet weergegeven voor domeinen in deze lijst."
                        },
                        installFrom: {
                            message: "Installeren vanaf <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Stap 3: Deze pagina vernieuwen om naar instellingen voor gebruikerscripts te gaan"
                        },
                        noinst_ignore_if_ag: {
                            message: "Als u AdGuard voor Windows heeft geïnstalleerd, kunt u deze stap negeren omdat het gebruikersscript voor pop-up blokkering vooraf is geïnstalleerd."
                        },
                        noinst_rec: {
                            message: "(Aanbevolen)"
                        },
                        please_wait: {
                            message: "Even geduld, detectie van de pop-up blokkering"
                        },
                        noinst_special_prog: {
                            message: "Om een gebruikersscript te gebruiken, heb je eerst een speciaal programma of extensie nodig die gebruikersscript uitvoert."
                        },
                        noinst_subtitle: {
                            message: "De AdGuard Popup Blocker-gebruikerscript is niet geïnstalleerd. Zie de onderstaande instructie."
                        },
                        homepage: {
                            message: "Startpagina"
                        },
                        noinst_step_1: {
                            message: "Stap 1: Een gebruikersscript beheerder installeren"
                        },
                        noinst_step_2: {
                            message: "Stap 2: Gebruikersscript"
                        },
                        extension_name: {
                            message: "Popup Blocker van AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Pop-up Blocker",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokkeert pop-upadvertenties op webpagina's"
                        },
                        on_navigation_by_popunder: {
                            message: "Deze overgang naar de nieuwe pagina wordt waarschijnlijk veroorzaakt door een onderliggend venster. Wil je doorgaan?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Pop-up Blocker heeft de uitvoering van een script afgebroken om een redirect in de achtergrond te voorkomen",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Pop-up Blocker is actief"
                        },
                        ext_disabled: {
                            message: "Pop-upblokkering is uitgeschakeld voor $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Pop-upblokkering is uitgeschakeld voor dit domein"
                        },
                        settings_saved: {
                            message: "Instellingen opgeslagen"
                        }
                    },
                    pt: {
                        show_popup: {
                            message: "Mostrar %destUrl%"
                        },
                        continue_blocking: {
                            message: "Continuar bloqueando"
                        },
                        allow_from: {
                            message: "Permitir pop-ups em %origDomain%"
                        },
                        manage_pref: {
                            message: "Gerenciar preferências..."
                        },
                        popup_text: {
                            message: "O AdGuard impediu este site de abrir %numPopup% pop-ups"
                        },
                        options: {
                            message: "Opções"
                        },
                        silence_noti: {
                            message: "Não mostrar essa mensagem no %origDomain%"
                        },
                        site_input_ph: {
                            message: "Digite o nome do site"
                        },
                        add_site: {
                            message: "Adicionar um site"
                        },
                        add: {
                            message: "Adicionar"
                        },
                        allowed_empty: {
                            message: "A lista de sites permitidos está vazia"
                        },
                        allowed: {
                            message: "Exceções"
                        },
                        silenced_empty: {
                            message: "Lista de sites com notificações silenciadas está vazia"
                        },
                        silenced: {
                            message: "Silenciado"
                        },
                        allowed_tooltip: {
                            message: "Os pop-ups serão permitidos para sites listados aqui."
                        },
                        silenced_tooltip: {
                            message: "As notificações para pop-ups bloqueados não serão mostrados para sites listados aqui."
                        },
                        installFrom: {
                            message: "Instale da <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Passo 3: Atualize esta página para obter as configurações de script de usuário"
                        },
                        noinst_ignore_if_ag: {
                            message: "Se você instalou o AdGuard para Windows, você pode ignorar esta etapa, porque o script de usuário do Bloqueador de Pop-ups já vem pré-instalado."
                        },
                        noinst_rec: {
                            message: "(Recomendado)"
                        },
                        please_wait: {
                            message: "Por favor, aguarde enquanto detectamos o Bloqueador de Pop-ups"
                        },
                        noinst_special_prog: {
                            message: "Primeiro de tudo, para usar um script de usuário você precisa de um programa ou uma extensão especial para executar scripts de usuário."
                        },
                        noinst_subtitle: {
                            message: "O script de usuário do Bloqueador de Pop-ups do AdGuard não está instalado. Por favor, siga as instruções abaixo."
                        },
                        homepage: {
                            message: "Página Inicial"
                        },
                        noinst_step_1: {
                            message: "Etapa 1: Instale um gerenciador de script de usuário"
                        },
                        noinst_step_2: {
                            message: "Etapa 2: Script de Usuário"
                        },
                        extension_name: {
                            message: "Bloqueador de Pop-ups por AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Bloqueador de Pop-ups",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Bloqueia anúncios pop-ups dentro dos sites"
                        },
                        on_navigation_by_popunder: {
                            message: "Essa transição para a nova página provavelmente será causada por um pop-under. Você deseja continuar?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "O bloqueador de pop-ups interrompeu uma execução de script para evitar um redirecionamento em segundo plano",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Bloqueador de Pop-ups está de plantão"
                        },
                        ext_disabled: {
                            message: "Bloqueador de Pop-ups está desativado para $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "O bloqueador de pop-ups não pode ser executado neste domínio."
                        },
                        settings_saved: {
                            message: "Configurações salvas"
                        }
                    },
                    "pt-PT": {
                        show_popup: {
                            message: "Mostrar %destUrl%"
                        },
                        continue_blocking: {
                            message: "Continuar a bloquear"
                        },
                        allow_from: {
                            message: "Permitir popups em %origDomain%"
                        },
                        manage_pref: {
                            message: "Gerir preferências..."
                        },
                        popup_text: {
                            message: "O AdGuard impediu que este sítio abrisse janelas popup de %numPopup%"
                        },
                        options: {
                            message: "Opções"
                        },
                        silence_noti: {
                            message: "Não mostrar esta mensagem em %origDomain%"
                        },
                        site_input_ph: {
                            message: "Insira o nome do sítio"
                        },
                        add_site: {
                            message: "Adicionar um sítio"
                        },
                        add: {
                            message: "Adicionar"
                        },
                        allowed_empty: {
                            message: "A lista de sítios permitidos está vazia"
                        },
                        allowed: {
                            message: "Excepções"
                        },
                        silenced_empty: {
                            message: "A lista de sítios com notificações silenciadas está vazia"
                        },
                        silenced: {
                            message: "Silenciado"
                        },
                        allowed_tooltip: {
                            message: "Popups serão permitidos nos sítios listados aqui."
                        },
                        silenced_tooltip: {
                            message: "As notificações de popups bloqueados não serão exibidas nos sítios listados aqui."
                        },
                        installFrom: {
                            message: "Instalar a partir de <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Passo 3: Atualize esta página para obter as configurações de script de utilizador"
                        },
                        noinst_ignore_if_ag: {
                            message: "Se tiver instalado o AdGuard para Windows, ignore essa etapa, pois o userscript do Popup Blocker vem pré-instalado."
                        },
                        noinst_rec: {
                            message: "(Recomendado)"
                        },
                        please_wait: {
                            message: "Por favor, aguarde, a detectar o Bloqueador de Popups"
                        },
                        noinst_special_prog: {
                            message: "Antes de tudo, para usar um userscript precisa de um programa ou extensão especial que possa executar scripts de utilizadores."
                        },
                        noinst_subtitle: {
                            message: "O userscript do AdGuard Popup Blocker não está instalado. Por favor, veja as instruções abaixo."
                        },
                        homepage: {
                            message: "Página Principal"
                        },
                        noinst_step_1: {
                            message: "Etapa 1: Instalar um gestor de userscript"
                        },
                        noinst_step_2: {
                            message: "Etapa 2: Script de utilizador"
                        },
                        extension_name: {
                            message: "Bloqueador de Popup por AdGuard"
                        },
                        userscript_name: {
                            message: "Bloqueador de Popup AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Bloqueia anúncios popup em páginas da web."
                        },
                        on_navigation_by_popunder: {
                            message: "Esta transição para a nova página  será  provavelmente causada por um popunder. Deseja continuar?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "PopupBlocker abortou uma execução de script para evitar o redireccionamento em segundo plano",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "O bloqueador de popups está em serviço"
                        },
                        ext_disabled: {
                            message: "O bloqueador de popups está desativado para $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "O Bloqueador de popups não pode ser executado neste domínio"
                        },
                        settings_saved: {
                            message: "As definições foram guardadas"
                        }
                    },
                    ro: {
                        show_popup: {
                            message: "Arată %destUrl%"
                        },
                        continue_blocking: {
                            message: "Continuați blocarea"
                        },
                        allow_from: {
                            message: "Permiteți pop-up pentru %origDomain%"
                        },
                        manage_pref: {
                            message: "Gestiune preferințe..."
                        },
                        popup_text: {
                            message: "AdGuard a împiedicat acestui site să deschidă %numPopup% ferestre pop-up"
                        },
                        options: {
                            message: "Opțiuni"
                        },
                        silence_noti: {
                            message: "Nu afișați acest mesaj pe %origDomain%"
                        },
                        site_input_ph: {
                            message: "Introduceți numele de site"
                        },
                        add_site: {
                            message: "Adăugă site"
                        },
                        add: {
                            message: "Adaugă"
                        },
                        allowed_empty: {
                            message: "Lista de site-uri permise este goală"
                        },
                        allowed: {
                            message: "Permis"
                        },
                        silenced_empty: {
                            message: "Lista site-uri cu notificări amuțite este goală"
                        },
                        silenced: {
                            message: "Amuțit"
                        },
                        allowed_tooltip: {
                            message: "Popup-urile vor fi permise domeniilor enumerate aici."
                        },
                        silenced_tooltip: {
                            message: "Notificările pentru pop-up-uri blocate nu vor fi afișate domeniilor enumerate aici."
                        },
                        installFrom: {
                            message: "Instalați din <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Pasul 3: Actualizați pagina pentru a ajunge la setări userscript"
                        },
                        noinst_ignore_if_ag: {
                            message: "Dacă ați instalat AdGuard pentru Windows, ignorați acest pas, deoarece userscript-ul Blocant Pop-up vine preinstalat."
                        },
                        noinst_rec: {
                            message: "(Recomandat)"
                        },
                        please_wait: {
                            message: "Vă rugăm să așteptați, se detectează Blocantul Pop-up"
                        },
                        noinst_special_prog: {
                            message: "Mai întâi, folosirea unui userscript cere un program sau o extensie specială care rulează userscript-uri."
                        },
                        noinst_subtitle: {
                            message: "Blocantul Pop-up AdGuard nu este instalat. Vă rugăm să consultați instrucțiunea de mai jos."
                        },
                        homepage: {
                            message: "Homepage"
                        },
                        noinst_step_1: {
                            message: "Pasul 1: Instalați un manager userscript"
                        },
                        noinst_step_2: {
                            message: "Pasul 2: Userscript"
                        },
                        extension_name: {
                            message: "Blocant Pop-up de AdGuard"
                        },
                        userscript_name: {
                            message: "Blocant Pop-up AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blochează reclame pop-up pe pagini web"
                        },
                        on_navigation_by_popunder: {
                            message: "Tranziția la această noua pagină este probabil cauzată de un pop-under. Vrei să continui?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Blocantul Pop-up a oprit o execuție de script ca să prevină redirecționare în fundal",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Blocantul Pop-up lucrează"
                        },
                        ext_disabled: {
                            message: "Blocantul Pop-up e dezactivat pentru $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Blocantul Pop-up e dezactivat pentru acest domeniu"
                        },
                        settings_saved: {
                            message: "Setări salvate"
                        }
                    },
                    ru: {
                        show_popup: {
                            message: "Показать %destUrl%"
                        },
                        continue_blocking: {
                            message: "Продолжить блокировку"
                        },
                        allow_from: {
                            message: "Разрешить всплывающие окна на %origDomain%"
                        },
                        manage_pref: {
                            message: "Управлять настройками..."
                        },
                        popup_text: {
                            message: "AdGuard предотвратил показ %numPopup% всплывающих окон на этом сайте"
                        },
                        options: {
                            message: "Опции"
                        },
                        silence_noti: {
                            message: "Не показывать это сообщение на %origDomain%"
                        },
                        site_input_ph: {
                            message: "Введите имя сайта"
                        },
                        add_site: {
                            message: "Добавить сайт"
                        },
                        add: {
                            message: "Добавить"
                        },
                        allowed_empty: {
                            message: "Список исключений пуст"
                        },
                        allowed: {
                            message: "Исключения"
                        },
                        silenced_empty: {
                            message: "Список сайтов с отключенными уведомлениями пуст"
                        },
                        silenced: {
                            message: "Без уведомлений"
                        },
                        allowed_tooltip: {
                            message: "Всплывающие окна будут разрешены на сайтах, перечисленных здесь."
                        },
                        silenced_tooltip: {
                            message: "Уведомления о заблокированных всплывающих окнах не будут отображаться на сайтах, перечисленных здесь."
                        },
                        installFrom: {
                            message: "Установить из <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Шаг 3: Обновите эту страницу, чтобы перейти к настройкам пользовательского скрипта"
                        },
                        noinst_ignore_if_ag: {
                            message: "Если вы установили AdGuard для Windows, вы можете проигнорировать этот шаг, так как Блокировщик всплывающей рекламы уже установлен."
                        },
                        noinst_rec: {
                            message: "Рекомендуется"
                        },
                        please_wait: {
                            message: "Пожалуйста, подождите, попытка обнаружить Блокировщик всплывающей рекламы"
                        },
                        noinst_special_prog: {
                            message: "Для использования скрипта вам, прежде всего, необходима специальная программа (или расширение), которая может работать с пользовательскими скриптами."
                        },
                        noinst_subtitle: {
                            message: "Блокировщик всплывающей рекламы AdGuard не установлен. Пожалуйста, обратитесь к инструкции ниже."
                        },
                        homepage: {
                            message: "Домашняя страница"
                        },
                        noinst_step_1: {
                            message: "Шаг 1: установите программу для управления пользовательскими скриптами"
                        },
                        noinst_step_2: {
                            message: "Шаг 2: пользовательский скрипт"
                        },
                        extension_name: {
                            message: "Блокировщик всплывающей рекламы от AdGuard"
                        },
                        userscript_name: {
                            message: "Блокировщик всплывающей рекламы от AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Блокирует всплывающую рекламу на страницах"
                        },
                        on_navigation_by_popunder: {
                            message: "Этот переход на новую страницу скорее всего вызван поп-андером. Всё равно продолжить?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Блокировщик всплывающей рекламы прервал исполнение скрипта, чтобы предотвратить фоновую переадресацию",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Блокировщик всплывающей рекламы готов к работе"
                        },
                        ext_disabled: {
                            message: "Блокировщик всплывающей рекламы отключен для $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Блокировщик всплывающей рекламы не работает на этом домене."
                        },
                        settings_saved: {
                            message: "Настройки сохранены"
                        }
                    },
                    sk: {
                        show_popup: {
                            message: "Zobraziť %destUrl%"
                        },
                        continue_blocking: {
                            message: "Pokračovať v blokovaní"
                        },
                        allow_from: {
                            message: "Povoliť vyskakovacie okná pre %origDomain%"
                        },
                        manage_pref: {
                            message: "Spravovať preferencie..."
                        },
                        popup_text: {
                            message: "AdGuard zabránil tejto stránke otvoriť %numPopup% vyskakovacích okien"
                        },
                        options: {
                            message: "Voľby"
                        },
                        silence_noti: {
                            message: "Neukazovať túto správu na %origDomain%"
                        },
                        site_input_ph: {
                            message: "Zadajte meno stránky"
                        },
                        add_site: {
                            message: "Pridať stránku"
                        },
                        add: {
                            message: "Pridať"
                        },
                        allowed_empty: {
                            message: "Zoznam povolených stránok je prázdny"
                        },
                        allowed: {
                            message: "Povolené"
                        },
                        silenced_empty: {
                            message: "Zoznam stíšených stránok je prázdny"
                        },
                        silenced: {
                            message: "Stíšené"
                        },
                        allowed_tooltip: {
                            message: "Vyskakovacie okná budú povolené pre domény tu uvedené."
                        },
                        silenced_tooltip: {
                            message: "Upozornenia na blokované vyskakovacie okná sa nebudú zobrazovať pre domény tu uvedené."
                        },
                        installFrom: {
                            message: "Inštalovať z <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Krok 3: Obnovte túto stránku, aby ste sa dostali k nastaveniam používateľského skriptu"
                        },
                        noinst_ignore_if_ag: {
                            message: "Ak ste nainštalovali AdGuard pre Windows, môžete tento krok ignorovať, pretože používateľský skript Popup Blocker je už predinštalovaný."
                        },
                        noinst_rec: {
                            message: "(Odporúčané)"
                        },
                        please_wait: {
                            message: "Počkajte, kým sa nezistí blokovanie vyskakovacích okien"
                        },
                        noinst_special_prog: {
                            message: "V prvom rade je na používanie používateľského skriptu potrebný špeciálny program alebo rozšírenie, ktoré spúšťa používateľské skripty."
                        },
                        noinst_subtitle: {
                            message: "Nie je nainštalovaný používateľský skript blokovania vyskakovacích okien AdGuard. Prečítajte si pokyny uvedené nižšie."
                        },
                        homepage: {
                            message: "Domovská stránka"
                        },
                        noinst_step_1: {
                            message: "Krok 1: Inštalovať manažéra používateľských skriptov"
                        },
                        noinst_step_2: {
                            message: "Krok2: Používateľský skript"
                        },
                        extension_name: {
                            message: "Blokovač vyskakovacích okien od AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard blokovač vyskakovacích okien",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokuje vyskakovacie reklamy na webových stránkach"
                        },
                        on_navigation_by_popunder: {
                            message: "Tento prechod na novú stránku bude pravdepodobne spôsobený kontextovým oknom. Prajete si pokračovať?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Blokovanie vyskakovacích okien prerušilo vykonávanie skriptu, aby sa zabránilo presmerovaniu na pozadí",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Blokovanie vyskakovacích okien je v činnosti"
                        },
                        ext_disabled: {
                            message: "Blokovanie vyskakovacích okien je pre $DOMAIN$ vypnuté",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Blokovanie vyskakovacích okien je pre túto doménu vypnuté"
                        },
                        settings_saved: {
                            message: "Nastavenia boli uložené"
                        }
                    },
                    sl: {
                        show_popup: {
                            message: " Prikaži %destUrl%"
                        },
                        continue_blocking: {
                            message: "Nadaljuj z zaviranjem"
                        },
                        allow_from: {
                            message: "Dovoli pojavna okna na %origDomain%"
                        },
                        manage_pref: {
                            message: "Upravljaj nastavitve..."
                        },
                        popup_text: {
                            message: "AdGuard je tej spletni strani preprečil odpiranje %numPopup% pojavnih oken"
                        },
                        options: {
                            message: "Možnosti"
                        },
                        silence_noti: {
                            message: "Ne prikazuj tega sporočila na %origDomain%"
                        },
                        site_input_ph: {
                            message: "Vnesite ime strani"
                        },
                        add_site: {
                            message: "Dodaj stran"
                        },
                        add: {
                            message: "Dodaj"
                        },
                        allowed_empty: {
                            message: "Seznam dovoljenih strani je prazen"
                        },
                        allowed: {
                            message: "Izjeme"
                        },
                        silenced_empty: {
                            message: "Seznam utišanih strani je prazen"
                        },
                        silenced: {
                            message: "Utišane strani"
                        },
                        allowed_tooltip: {
                            message: "Za tukaj navedene domene bodo dovoljena pojavna okna."
                        },
                        silenced_tooltip: {
                            message: "Obvestila o onemogočenih pojavnih oknih ne bodo prikazana za tukaj navedene domene."
                        },
                        installFrom: {
                            message: "Namesti z <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "3. korak: Osvežite to stran, da pridete do nastavitev uporabniškega skripta"
                        },
                        noinst_ignore_if_ag: {
                            message: "Če ste namestili AdGuard za Windows, lahko ta korak prezrete, saj je uporabniški skript za zaviranje pojavnih oken vnaprej nameščen."
                        },
                        noinst_rec: {
                            message: "(Priporočeno)"
                        },
                        please_wait: {
                            message: "Počakajte, zaznavanje Zaviralca pojavnih oken"
                        },
                        noinst_special_prog: {
                            message: "Najprej, za uporabo uporabniškega skripta potrebujete poseben program ali razširitev, ki lahko zažene uporabniške skripte."
                        },
                        noinst_subtitle: {
                            message: "AdGuard uporabniški skript Popup Blocker ni nameščen. Oglejte si spodnja navodila."
                        },
                        homepage: {
                            message: "Domača stran"
                        },
                        noinst_step_1: {
                            message: "1. korak: Namestite upravitelja uporabniških skriptov"
                        },
                        noinst_step_2: {
                            message: "2. korak: Uporabniški skript"
                        },
                        extension_name: {
                            message: "Zaviralec pojavnih oken z AdGuardom"
                        },
                        userscript_name: {
                            message: "AdGuard Zaviralec pojavnih oken",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokira pojavne oglase na spletnih straneh"
                        },
                        on_navigation_by_popunder: {
                            message: "Ta prehod na novo stran je verjetno posledica pojavnega okna. Ali želite nadaljevati?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Zaviralec pojavnih oken je prekinil izvajanje skripta, da bi preprečil preusmerjanje v ozadju",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Zaviralec pojavnih oken je na dolžnosti"
                        },
                        ext_disabled: {
                            message: "Zaviralec pojavnih oken je onemogočen za $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Zaviralec pojavnih oken je onemogočen za to domeno"
                        },
                        settings_saved: {
                            message: "Nastavitve so shranjene"
                        }
                    },
                    "sr-CS": {
                        show_popup: {
                            message: "Prikaži %destUrl%"
                        },
                        continue_blocking: {
                            message: "Nastavi sa blokiranjem"
                        },
                        allow_from: {
                            message: "Dozvoli iskačuće prozore za %origDomain%"
                        },
                        manage_pref: {
                            message: "Upravljaj postavkama..."
                        },
                        popup_text: {
                            message: "AdGuard je sprečio ovaj sajt da otvori %numPopup% iskačućih prozora"
                        },
                        options: {
                            message: "Opcije"
                        },
                        silence_noti: {
                            message: "Ne prikazuj ovu poruku na %origDomain%"
                        },
                        site_input_ph: {
                            message: "Unesite ime sajta"
                        },
                        add_site: {
                            message: "Dodaj sajt"
                        },
                        add: {
                            message: "Dodaj"
                        },
                        allowed_empty: {
                            message: "Lista dozvoljenih sajtova je prazna"
                        },
                        allowed: {
                            message: "Dozvoljeno"
                        },
                        silenced_empty: {
                            message: "Lista utišanih sajtova je prazna"
                        },
                        silenced: {
                            message: "Utišano"
                        },
                        allowed_tooltip: {
                            message: "Iskačući prozori će biti dozvoljeni za ovde prikazane domene."
                        },
                        silenced_tooltip: {
                            message: "Obaveštenja o blokiranim iskačućim prozorima neće biti prikazivana za ovde prikazane domene."
                        },
                        installFrom: {
                            message: "Instaliraj sa <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Korak 3: Osvežite ovu stranicu da dođete do userscript postavki"
                        },
                        noinst_ignore_if_ag: {
                            message: "Ako ste instalirali AdGuard za Windows, ovaj korak možete zanemariti jer je userscript za blokiranje iskačućih prozora preinstaliran."
                        },
                        noinst_rec: {
                            message: "(preporučuje se)"
                        },
                        please_wait: {
                            message: "Molim sačekajte, otkrivam blokatora iskačućih prozora"
                        },
                        noinst_special_prog: {
                            message: "Pre svega, za kkorišćenje userscript vam je potreban poseban program ili proširenje koje pokreće userscripts."
                        },
                        noinst_subtitle: {
                            message: "AdGuard userscript blokator iskačućih prozora nije instaliran. Pogledajte uputstva ispod."
                        },
                        homepage: {
                            message: "Početna stranica"
                        },
                        noinst_step_1: {
                            message: "Korak 1: Instalirajte usrscript upravljača"
                        },
                        noinst_step_2: {
                            message: "Korak 2: Userscript"
                        },
                        extension_name: {
                            message: "Blokator iskačućih prozora od AdGuard-a"
                        },
                        userscript_name: {
                            message: "AdGuard blokator iskačućih prozora",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Blokira iskačuće reklame na veb stranicama"
                        },
                        on_navigation_by_popunder: {
                            message: "Ovo preusmerenje na novu stranicu je verovatno uzrokovano iskačućim prozorom. Želite li da nastavite?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Blokator iskačućih prozora je odbacio izvršenje skripte kako bi sprečio pozadinsko preusmerenje",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Blokator iskačućih prozora je na dužnosti"
                        },
                        ext_disabled: {
                            message: "Blokator iskačućih prozora je isključen za $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Blokator iskačućih prozora je isključen za ovaj domen"
                        },
                        settings_saved: {
                            message: "Postavke sačuvane"
                        }
                    },
                    ta: {
                        show_popup: {
                            message: "%destUrl% ஐக் காட்டு"
                        },
                        continue_blocking: {
                            message: "தடுப்பதைத் தொடரவும்"
                        },
                        allow_from: {
                            message: "%origDomain% க்கு பாப்-அப்களை அனுமதிக்கவும்"
                        },
                        manage_pref: {
                            message: "விருப்பங்களை நிர்வகிக்கவும்..."
                        },
                        popup_text: {
                            message: "AdGuard இந்த வலைத்தளத்தை %numPopup% பாப்-அப் திறப்பதைத் தடுத்தது"
                        },
                        options: {
                            message: "விருப்பங்கள்"
                        },
                        silence_noti: {
                            message: "இந்த செய்தியை %origDomain% இல் காட்ட வேண்டாம்"
                        },
                        site_input_ph: {
                            message: "தளத்தின் பெயரை உள்ளிடவும்"
                        },
                        add_site: {
                            message: "தளத்தைச் சேர்க்கவும்"
                        },
                        add: {
                            message: "சேர்க்கவும்"
                        },
                        allowed_empty: {
                            message: "அனுமதிக்கப்பட்ட தளங்களின் பட்டியல் காலியாக உள்ளது"
                        },
                        allowed: {
                            message: "அனுமதிக்கப்பட்டது"
                        },
                        silenced_empty: {
                            message: "அமைதியான தளங்களின் பட்டியல் காலியாக உள்ளது"
                        },
                        silenced: {
                            message: "அமைதியான அறிவிப்புகள்"
                        },
                        allowed_tooltip: {
                            message: "இங்கே பட்டியலிடப்பட்ட களங்களுக்கு பாப்அப்கள் அனுமதிக்கப்படும்."
                        },
                        silenced_tooltip: {
                            message: "இங்கே பட்டியலிடப்பட்ட களங்களுக்கு தடுக்கப்பட்ட பாப்அப்களுக்கான அறிவிப்புகள் காண்பிக்கப்படாது."
                        },
                        installFrom: {
                            message: "<a>%name%</a> இலிருந்து நிறுவவும்"
                        },
                        noinst_step_3: {
                            message: "படி 3: பயனர் ஸ்கிரிப்ட் அமைப்புகளைப் பெற இந்தப் பக்கத்தைப் புதுப்பிக்கவும்"
                        },
                        noinst_ignore_if_ag: {
                            message: "நீங்கள் விண்டோஸுக்கான AdGuard ஐ நிறுவியிருந்தால், பாப்அப் தடுப்பான் பயனர் ஸ்கிரிப்ட் முன்பே நிறுவப்பட்டிருப்பதால் இந்த படிநிலையை நீங்கள் புறக்கணிக்கலாம்."
                        },
                        noinst_rec: {
                            message: "(பரிந்துரைக்கப்படுகிறது)"
                        },
                        please_wait: {
                            message: "தயவுசெய்து காத்திருங்கள், பாப்அப் தடுப்பைக் கண்டறிகிறது"
                        },
                        noinst_special_prog: {
                            message: "முதலாவதாக, ஒரு பயனர் ஸ்கிரிப்டைப் பயன்படுத்த உங்களுக்கு ஒரு சிறப்பு நிரல் அல்லது பயனர் ஸ்கிரிப்ட்களை இயக்கும் நீட்டிப்பு தேவை."
                        },
                        noinst_subtitle: {
                            message: "AdGuard பாப்அப் தடுப்பான் பயனர் ஸ்கிரிப்ட் நிறுவப்படவில்லை. கீழே உள்ள வழிமுறைகளைப் பார்க்கவும்."
                        },
                        homepage: {
                            message: "முகப்புப்பக்கம்"
                        },
                        noinst_step_1: {
                            message: "படி 1: பயனர் ஸ்கிரிப்ட் மேலாளரை நிறுவவும்"
                        },
                        noinst_step_2: {
                            message: "படி 2: பயனர் ஸ்கிரிப்ட்"
                        },
                        extension_name: {
                            message: "AdGuard இன் பாப்அப் தடுப்பான்"
                        },
                        userscript_name: {
                            message: "AdGuard பாப்அப் தடுப்பான்",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "வலைப்பக்கங்களில் பாப்அப் விளம்பரங்களைத் தடுக்கிறது"
                        },
                        on_navigation_by_popunder: {
                            message: "புதிய பக்கத்திற்கான இந்த மாற்றம் ஒரு பாப்-அண்டர் காரணமாக ஏற்படக்கூடும். தொடர விரும்புகிறீர்களா?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "பின்னணி திருப்பிவிடப்படுவதைத் தடுக்க பாப்அப் தடுப்பான் ஸ்கிரிப்ட் செயல்பாட்டை நிறுத்தியது",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "பாப்அப் தடுப்பான் செயலில் உள்ளது"
                        },
                        ext_disabled: {
                            message: "$DOMAIN$ க்கு பாப்அப் தடுப்பான் முடக்கப்பட்டுள்ளது",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "இந்த களத்திற்கு பாப்அப் தடுப்பான் முடக்கப்பட்டுள்ளது"
                        },
                        settings_saved: {
                            message: "அமைப்புகள் சேமிக்கப்பட்டன"
                        }
                    },
                    th: {
                        show_popup: {
                            message: "แสดง %destUrl%"
                        },
                        continue_blocking: {
                            message: "ปิดกั้นต่อไป"
                        },
                        allow_from: {
                            message: "อนุญาตป๊อปอัปสำหรับ %origDomain%"
                        },
                        manage_pref: {
                            message: "จัดการค่ากำหนด..."
                        },
                        popup_text: {
                            message: "AdGuard ป้องกันไม่ให้เว็บไซต์นี้เปิดหน้าต่างป๊อปอัพ %numPopup%"
                        },
                        options: {
                            message: "ตัวเลือก"
                        },
                        silence_noti: {
                            message: "อย่าแสดงข้อความนี้ใน %origDomain%"
                        },
                        site_input_ph: {
                            message: "ใส่ชื่อเว็บไซต์"
                        },
                        add_site: {
                            message: "เพิ่มเว็บไซต์"
                        },
                        add: {
                            message: "เพิ่ม"
                        },
                        allowed_empty: {
                            message: "รายการไซต์ที่อนุญาตว่างเปล่า"
                        },
                        allowed: {
                            message: "อนุญาต"
                        },
                        silenced_empty: {
                            message: "รายการไซต์ที่ถูกปิดกั้นว่างเปล่า"
                        },
                        silenced: {
                            message: "ปิดกั้น"
                        },
                        allowed_tooltip: {
                            message: "ป๊อปอัปจะได้รับอนุญาตสำหรับโดเมนที่แสดงที่นี่"
                        },
                        silenced_tooltip: {
                            message: "การแจ้งเตือนสำหรับป๊อปอัปที่ถูกปิดกั้นจะไม่แสดงสำหรับโดเมนที่แสดงที่นี่"
                        },
                        installFrom: {
                            message: "ติดตั้งจาก <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "ขั้นตอนที่ 3: รีเฟรชหน้านี้เพื่อไปที่การตั้งค่า userscript"
                        },
                        noinst_ignore_if_ag: {
                            message: "หากคุณติดตั้ง AdGuard สำหรับ Windows คุณสามารถข้ามขั้นตอนนี้ได้เนื่องจากผู้ใช้ Popup Blocker มาติดตั้งล่วงหน้า"
                        },
                        noinst_rec: {
                            message: "(แนะนำ)"
                        },
                        please_wait: {
                            message: "โปรดรอสักครู่ กำลังตรวจหา Popup Blocker"
                        },
                        noinst_special_prog: {
                            message: "ก่อนอื่น เพื่อใช้ userscript คุณต้องมีโปรแกรมหรือส่วนเสริมพิเศษที่รัน userscripts"
                        },
                        noinst_subtitle: {
                            message: "Userscript ของ AdGuard Popup Blocker ไม่ได้รับการติดตั้ง โปรดดูคำแนะนำด้านล่าง"
                        },
                        homepage: {
                            message: "หน้าหลัก"
                        },
                        noinst_step_1: {
                            message: "ขั้นตอนที่ 1: ติดตั้งตัวจัดการ usrscript"
                        },
                        noinst_step_2: {
                            message: "ขั้นตอนที่ 2: Userscript"
                        },
                        extension_name: {
                            message: "Popup Blocker โดย AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Popup Blocker",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "ปิดกั้นโฆษณาป๊อปอัพในหน้าเว็บ"
                        },
                        on_navigation_by_popunder: {
                            message: "การเปลี่ยนไปใช้หน้าใหม่นี้น่าจะเกิดจากป๊อปอันเดอร์ คุณต้องการทำต่อไปหรือไม่?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Popup Blocker ยกเลิกการทำงานของสคริปต์เพื่อป้องกันการเปลี่ยนพื้นหลัง",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Popup Blocker ทำหน้าที่"
                        },
                        ext_disabled: {
                            message: "Popup Blocker ถูกปิดใช้งานสำหรับ $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Popup Blocker ถูกปิดการใช้งานสำหรับโดเมนนี้"
                        },
                        settings_saved: {
                            message: "การตั้งค่าที่บันทึกไว้"
                        }
                    },
                    tr: {
                        show_popup: {
                            message: "%destUrl% sitesini göster"
                        },
                        continue_blocking: {
                            message: "Engellemeye devam et"
                        },
                        allow_from: {
                            message: "%origDomain% için açılır pencerelere izin ver"
                        },
                        manage_pref: {
                            message: "Tercihleri yönet..."
                        },
                        popup_text: {
                            message: "AdGuard bu sitenin %numPopup% açılır pencere açmasını önledi"
                        },
                        options: {
                            message: "Ayarlar"
                        },
                        silence_noti: {
                            message: "Bu mesajı %origDomain% üzerinde gösterme"
                        },
                        site_input_ph: {
                            message: "Site adını girin"
                        },
                        add_site: {
                            message: "Site ekle"
                        },
                        add: {
                            message: "Ekle"
                        },
                        allowed_empty: {
                            message: "İzin verilen sitelerin listesi boş"
                        },
                        allowed: {
                            message: "İzin verilen"
                        },
                        silenced_empty: {
                            message: "Sessize alınmış olan sitelerin listesi boş"
                        },
                        silenced: {
                            message: "Sessize alınmış"
                        },
                        allowed_tooltip: {
                            message: "Burada listelenen alan adları için açılır pencerelere izin verilecektir."
                        },
                        silenced_tooltip: {
                            message: "Engellenen açılır pencerelere ilişkin bildirimler, burada listelenen alan adları için gösterilmeyecektir."
                        },
                        installFrom: {
                            message: "<a>%name%</a>'dan yükle"
                        },
                        noinst_step_3: {
                            message: "Adım 3: Kullanıcı betikleri ayarlarını almak için bu sayfayı yenile"
                        },
                        noinst_ignore_if_ag: {
                            message: "Windows için AdGuard yüklediyseniz, Açılır Pencere Engelleyici betiği önceden yüklü olarak geldiği için bu adımı görmezden gelebilirsiniz."
                        },
                        noinst_rec: {
                            message: "(Tavsiye edilen)"
                        },
                        please_wait: {
                            message: "Lütfen bekleyin, Açılır Pencere Engelleyici tespit ediliyor"
                        },
                        noinst_special_prog: {
                            message: "Bir kullanıcı betiği kullanmak için öncelikle kullanıcı betiği çalıştıran özel bir programa veya uzantıya ihtiyacınız var."
                        },
                        noinst_subtitle: {
                            message: "AdGuard Açılır Pencere Engelleyicisi kullanıcı betiği yüklü değil. Lütfen aşağıdaki talimata bakın."
                        },
                        homepage: {
                            message: "Ana sayfa"
                        },
                        noinst_step_1: {
                            message: "1. Adım: Bir kullanıcı betiği yöneticisi yükle"
                        },
                        noinst_step_2: {
                            message: "2. Adım: Kullanıcı betiği"
                        },
                        extension_name: {
                            message: "AdGuard ile Açılır Pencere Engelleyici"
                        },
                        userscript_name: {
                            message: "AdGuard Açılır Pencere Engelleyici",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Web sayfalarında açılır pencere reklamlarını engeller"
                        },
                        on_navigation_by_popunder: {
                            message: "Yeni sayfaya geçiş, bir gizli pencere nedeniyle meydana gelmiş olabilir. Devam etmek istiyor musunuz?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Açılır Pencere Engelleyici arka plan yönlendirmesini önlemek için bir komut dosyasının çalışmasını durdurdu",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Açılır Pencere Engelleyici görevinin başında"
                        },
                        ext_disabled: {
                            message: "Açılır Pencere Engelleyici $DOMAIN$ için devre dışı bırakıldı",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Açılır Pencere Engelleyici bu alan adı için devre dışı bırakıldı"
                        },
                        settings_saved: {
                            message: "Ayarlar kaydedildi"
                        }
                    },
                    uk: {
                        show_popup: {
                            message: "Показати %destUrl%"
                        },
                        continue_blocking: {
                            message: "Продовжити блокування"
                        },
                        allow_from: {
                            message: "Дозволити спливні вікна для %origDomain%"
                        },
                        manage_pref: {
                            message: "Керувати налаштуваннями..."
                        },
                        popup_text: {
                            message: "AdGuard запобіг показу спливних вікон %numPopup% на цьому сайті"
                        },
                        options: {
                            message: "Параметри"
                        },
                        silence_noti: {
                            message: "Не показувати це повідомлення на %origDomain%"
                        },
                        site_input_ph: {
                            message: "Введіть назву сайту"
                        },
                        add_site: {
                            message: "Додати сайт"
                        },
                        add: {
                            message: "Додати"
                        },
                        allowed_empty: {
                            message: "Список винятків порожній"
                        },
                        allowed: {
                            message: "Винятки"
                        },
                        silenced_empty: {
                            message: "Список сайтів з вимкненими сповіщеннями порожній"
                        },
                        silenced: {
                            message: "Без повідомлень"
                        },
                        allowed_tooltip: {
                            message: "Спливні вікна будуть дозволені на сайтах з цього списку."
                        },
                        silenced_tooltip: {
                            message: "Повідомлення про заблоковані спливні вікна не відображатимуться на сайтах з цього списку."
                        },
                        installFrom: {
                            message: "Встановити з <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Крок 3: оновіть цю сторінку, щоб перейти до налаштувань розширення"
                        },
                        noinst_ignore_if_ag: {
                            message: "Якщо ви встановили AdGuard для Windows, можете пропустити цей крок, оскільки розширення «Блокувальник спливних вікон» уже встановлено. Ймовірно, його необхідно увімкнути в налаштуваннях AdGuard."
                        },
                        noinst_rec: {
                            message: "(Рекомендовано)"
                        },
                        please_wait: {
                            message: "Будь ласка, зачекайте, спроба виявити Блокувальник спливних вікон"
                        },
                        noinst_special_prog: {
                            message: "Щоб використовувати скрипт, потрібна спеціальна програма або браузерне розширення, що може працювати з користувацькими скриптами."
                        },
                        noinst_subtitle: {
                            message: "Розширення «Блокувальник спливних вікон AdGuard» не встановлено. Будь ласка, виконайте наступні кроки."
                        },
                        homepage: {
                            message: "Домашня сторінка"
                        },
                        noinst_step_1: {
                            message: "Крок 1: встановіть програму для керування користувацькими скриптами"
                        },
                        noinst_step_2: {
                            message: "Крок 2: користувацький скрипт"
                        },
                        extension_name: {
                            message: "Блокувальник спливних вікон AdGuard"
                        },
                        userscript_name: {
                            message: "Блокувальник спливних вікон AdGuard",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Блокує спливну рекламу на вебсторінках"
                        },
                        on_navigation_by_popunder: {
                            message: "Цей перехід на нову сторінку, ймовірно, міг бути викликаний «поп-андером». Бажаєте продовжити?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Блокувальник спливних вікон перервав виконання скрипта, щоб запобігти фоновому перенаправленню",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Блокувальник спливних вікон готовий до роботи"
                        },
                        ext_disabled: {
                            message: "Блокувальник спливних вікон вимкнено для $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Блокувальник спливних вікон вимкнено для цього домена"
                        },
                        settings_saved: {
                            message: "Налаштування збережено"
                        }
                    },
                    vi: {
                        show_popup: {
                            message: "Hiện %destUrl%"
                        },
                        continue_blocking: {
                            message: "Tiếp tục chặn"
                        },
                        allow_from: {
                            message: "Cho phép cửa sổ bật lên cho %origDomain%"
                        },
                        manage_pref: {
                            message: "Quản lý tùy chọn..."
                        },
                        popup_text: {
                            message: "AdGuard đã ngăn trang web này mở %numPopup% cửa sổ bật lên"
                        },
                        options: {
                            message: "Tuỳ chọn"
                        },
                        silence_noti: {
                            message: "Đừng hiển thị thông báo này trên %origDomain%"
                        },
                        site_input_ph: {
                            message: "Nhập tên trang web"
                        },
                        add_site: {
                            message: "Thêm một trang web"
                        },
                        add: {
                            message: "Thêm"
                        },
                        allowed_empty: {
                            message: "Danh sách các trang web được phép trống"
                        },
                        allowed: {
                            message: "Được phép"
                        },
                        silenced_empty: {
                            message: "Danh sách các trang im lặng trống"
                        },
                        silenced: {
                            message: "Im lặng"
                        },
                        allowed_tooltip: {
                            message: "Cửa sổ bật lên sẽ được phép cho các tên miền được liệt kê ở đây."
                        },
                        silenced_tooltip: {
                            message: "Thông báo cho cửa sổ bật lên bị chặn sẽ không được hiển thị cho các tên miền được liệt kê ở đây."
                        },
                        installFrom: {
                            message: "Cài đặt từ <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "Bước 3: Làm mới trang này để có được cài đặt usercript"
                        },
                        noinst_ignore_if_ag: {
                            message: "Nếu bạn đã cài đặt AdGuard cho Windows, bạn có thể bỏ qua bước này vì bản mô tả người dùng Popup Blocker được cài đặt sẵn."
                        },
                        noinst_rec: {
                            message: "(Khuyến nghị)"
                        },
                        please_wait: {
                            message: "Xin vui lòng chờ, phát hiện Trình chặn Popup"
                        },
                        noinst_special_prog: {
                            message: "Trước hết, để sử dụng một userscript bạn cần một chương trình đặc biệt hoặc tiện ích mở rộng chạy userscripts."
                        },
                        noinst_subtitle: {
                            message: "Bản tin người dùng AdGuard Popup Blocker chưa được cài đặt. Xin vui lòng xem hướng dẫn dưới đây."
                        },
                        homepage: {
                            message: "Trang chủ"
                        },
                        noinst_step_1: {
                            message: "Bước 1: Cài đặt trình quản lý usrscript"
                        },
                        noinst_step_2: {
                            message: "Bước 2: Userscript"
                        },
                        extension_name: {
                            message: "Trình chặn Popup của AdGuard"
                        },
                        userscript_name: {
                            message: "AdGuard Popup Blocker",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "Chặn quảng cáo bật lên trên các trang web"
                        },
                        on_navigation_by_popunder: {
                            message: "Việc chuyển đổi sang trang mới này có thể được gây ra bởi một cửa sổ bật xuống. Bạn có muốn tiếp tục?",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "Trình chặn Popup đã hủy bỏ việc thực thi tập lệnh để ngăn chuyển hướng nền",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "Trình chặn Popup đang làm nhiệm vụ"
                        },
                        ext_disabled: {
                            message: "Trình chặn Popup bị vô hiệu hóa cho $DOMAIN$",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "Trình chặn Popup bị vô hiệu hóa cho miền này"
                        },
                        settings_saved: {
                            message: "Đã lưu cài đặt"
                        }
                    },
                    zh: {
                        show_popup: {
                            message: "显示 %destUrl%"
                        },
                        continue_blocking: {
                            message: "继续拦截"
                        },
                        allow_from: {
                            message: "允许 %origDomain% 弹窗"
                        },
                        manage_pref: {
                            message: "管理首选项..."
                        },
                        popup_text: {
                            message: "AdGuard 已防止此网站打开的 %numPopup%个弹窗"
                        },
                        options: {
                            message: "选项"
                        },
                        silence_noti: {
                            message: "在 %origDomain% 上不再显示此讯息"
                        },
                        site_input_ph: {
                            message: "输入网站名称"
                        },
                        add_site: {
                            message: "添加网站"
                        },
                        add: {
                            message: "添加"
                        },
                        allowed_empty: {
                            message: "允许的网站列表为空"
                        },
                        allowed: {
                            message: "允许"
                        },
                        silenced_empty: {
                            message: "禁止的网站列表"
                        },
                        silenced: {
                            message: "禁止"
                        },
                        allowed_tooltip: {
                            message: "此处列出的是允许弹窗的域。"
                        },
                        silenced_tooltip: {
                            message: "此处列出的是禁止弹出的域。"
                        },
                        installFrom: {
                            message: "安装从 <a>%name%</a>"
                        },
                        noinst_step_3: {
                            message: "步骤3：刷新此页已获取用户脚本设置"
                        },
                        noinst_ignore_if_ag: {
                            message: "如您已安装 AdGuard for Windows，则您可忽略此步骤，因为其已预安装弹窗拦截器用户脚本。"
                        },
                        noinst_rec: {
                            message: "（推荐）"
                        },
                        please_wait: {
                            message: "请稍后，正在检测弹窗拦截器"
                        },
                        noinst_special_prog: {
                            message: "首先，要使用用户脚本，您需要特殊的程序的以运行用户脚本。"
                        },
                        noinst_subtitle: {
                            message: "AdGuard Popup Blocker 用户脚本未安装。请查看以下指示说明。"
                        },
                        homepage: {
                            message: "主页"
                        },
                        noinst_step_1: {
                            message: "步骤 1：安装用户脚本管理器"
                        },
                        noinst_step_2: {
                            message: "步骤 2：用户脚本"
                        },
                        extension_name: {
                            message: "AdGuard 弹窗拦截器"
                        },
                        userscript_name: {
                            message: "AdGuard 弹窗拦截器",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "拦截网页弹窗广告"
                        },
                        on_navigation_by_popunder: {
                            message: "此网页导航可能导致弹窗。您要继续？",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "PopupBlocker 已中止脚本执行以防止后台重新定向",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "弹窗拦截器工作中"
                        },
                        ext_disabled: {
                            message: "已在 $DOMAIN$ 上禁用弹窗拦截器",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "弹窗拦截器无法运行于此域之上"
                        },
                        settings_saved: {
                            message: "设置已保存"
                        }
                    },
                    "zh-HK": {
                        show_popup: {
                            message: "顯示 %destUrl%"
                        },
                        continue_blocking: {
                            message: "繼續封鎖"
                        },
                        allow_from: {
                            message: "允許 %origDomain% 的彈出式視窗"
                        },
                        manage_pref: {
                            message: "管理偏好設定"
                        },
                        popup_text: {
                            message: "AdGuard 已阻止此網站開啟 %numPopup% 個彈出式視窗"
                        },
                        options: {
                            message: "選項"
                        },
                        silence_noti: {
                            message: "不再 %origDomain% 上提示"
                        },
                        site_input_ph: {
                            message: "輸入網站名稱"
                        },
                        add_site: {
                            message: "新增網站"
                        },
                        add: {
                            message: "新增"
                        },
                        allowed_empty: {
                            message: "允許清單為空的"
                        },
                        allowed: {
                            message: "已允許"
                        },
                        silenced_empty: {
                            message: "已靜音清單為空的"
                        },
                        silenced: {
                            message: "已靜音"
                        },
                        allowed_tooltip: {
                            message: "允許彈出式視窗網域清單"
                        },
                        silenced_tooltip: {
                            message: "已設定靜音不通知的網域清單"
                        },
                        installFrom: {
                            message: "從 {$startLink}{$name}{$endLink} 安裝"
                        },
                        noinst_step_3: {
                            message: "步驟 3：重新整理網頁來設定使用者腳本"
                        },
                        noinst_ignore_if_ag: {
                            message: "如果您已安裝 AdGuard for Windows，您可以不必安裝這個使用者腳本，此功能已內建於 AdGuard for Windows 。"
                        },
                        noinst_rec: {
                            message: "（推薦）"
                        },
                        please_wait: {
                            message: "正在偵測彈出式視窗封鎖器，請稍候"
                        },
                        noinst_special_prog: {
                            message: "首先，要使用一個使用者腳本您需要特殊的程式或瀏覽器的擴充套件。"
                        },
                        noinst_subtitle: {
                            message: "彈出式視窗封鎖器腳本尚未安裝。請閱讀以下使用說明。"
                        },
                        homepage: {
                            message: "首頁"
                        },
                        noinst_step_1: {
                            message: "步驟 1：安裝使用者腳本管理器"
                        },
                        noinst_step_2: {
                            message: "步驟 2：準備好使用者腳本"
                        },
                        extension_name: {
                            message: "由 AdGuard 提供的彈出式視窗封鎖器"
                        },
                        userscript_name: {
                            message: "AdGuard 彈出式視窗封鎖器",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "封鎖網頁上的彈出式視窗廣告"
                        },
                        on_navigation_by_popunder: {
                            message: "頁面轉跳可能是由彈出式視窗進行的，您要繼續嗎？",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "彈出式視窗封鎖器已阻止網頁內的腳本運作避免網頁被重新導向",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "彈出式視窗封鎖器正在運作"
                        },
                        ext_disabled: {
                            message: "彈出式視窗封鎖器已在 $DOMAIN$ 上停用",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "彈出式視窗封鎖器已在此網域上停用"
                        },
                        settings_saved: {
                            message: "已儲存設定"
                        }
                    },
                    "zh-TW": {
                        show_popup: {
                            message: "顯示 %destUrl%"
                        },
                        continue_blocking: {
                            message: "繼續封鎖"
                        },
                        allow_from: {
                            message: "允許在 %origDomain% 的彈出式視窗"
                        },
                        manage_pref: {
                            message: "管理偏好設定…"
                        },
                        popup_text: {
                            message: "AdGuard 已防止此網站開啟 %numPopup% 個彈出式視窗"
                        },
                        options: {
                            message: "選項"
                        },
                        silence_noti: {
                            message: "不要於 %origDomain% 上顯示該訊息"
                        },
                        site_input_ph: {
                            message: "輸入站名"
                        },
                        add_site: {
                            message: "新增一個網站"
                        },
                        add: {
                            message: "新增"
                        },
                        allowed_empty: {
                            message: "已允許的網站之清單為空"
                        },
                        allowed: {
                            message: "已允許的"
                        },
                        silenced_empty: {
                            message: "已靜默的網站之清單為空"
                        },
                        silenced: {
                            message: "已靜默的"
                        },
                        allowed_tooltip: {
                            message: "在這裡被列出的網域，彈出式視窗將被允許。"
                        },
                        silenced_tooltip: {
                            message: "在這裡被列出的網域，關於已封鎖的彈出式視窗之通知將不被顯示。"
                        },
                        installFrom: {
                            message: "從 <a>%name%</a> 安裝"
                        },
                        noinst_step_3: {
                            message: "步驟 3：重新整理此頁面以到達使用者腳本設定"
                        },
                        noinst_ignore_if_ag: {
                            message: "如果您已安裝 AdGuard for Windows，您可忽略該步驟，因為彈出式視窗封鎖器使用者腳本變為已預安裝的。"
                        },
                        noinst_rec: {
                            message: "（被建議的）"
                        },
                        please_wait: {
                            message: "請稍候，正在檢測彈出式視窗封鎖器"
                        },
                        noinst_special_prog: {
                            message: "首先，為使用一個使用者腳本，您需要執行使用者腳本之專門的程式或擴充功能。"
                        },
                        noinst_subtitle: {
                            message: "AdGuard 彈出式視窗封鎖器使用者腳本未被安裝。請查看下面的用法說明。"
                        },
                        homepage: {
                            message: "首頁"
                        },
                        noinst_step_1: {
                            message: "步驟 1：安裝使用者腳本管理器"
                        },
                        noinst_step_2: {
                            message: "步驟 2：使用者腳本"
                        },
                        extension_name: {
                            message: "由 AdGuard 提供之彈出式視窗封鎖器"
                        },
                        userscript_name: {
                            message: "AdGuard 彈出式視窗封鎖器",
                            platform: ["userscript", "userscript_settings"]
                        },
                        extension_description: {
                            message: "封鎖於網頁上之彈出式視窗廣告"
                        },
                        on_navigation_by_popunder: {
                            message: "此至新的頁面之轉換很可能是由一個背彈式視窗引起。您想要繼續嗎？",
                            platform: ["userscript"]
                        },
                        aborted_popunder_execution: {
                            message: "彈出式視窗封鎖器已中止腳本執行以防止背景重新導向",
                            platform: ["userscript"]
                        },
                        ext_enabled: {
                            message: "彈出式視窗封鎖器執勤中"
                        },
                        ext_disabled: {
                            message: "在 $DOMAIN$，彈出式視窗封鎖器被禁用",
                            placeholders: {
                                domain: {
                                    content: "$1"
                                }
                            }
                        },
                        ext_disabled_default: {
                            message: "在此網域，彈出式視窗封鎖器被禁用"
                        },
                        settings_saved: {
                            message: "設定被儲存"
                        }
                    }
                };
                const X = () => "en",
                    J = () => {
                        let e;
                        e = window.navigator.languages ? window.navigator.languages[0] : window.navigator.language;
                        const s = (e => {
                            if (e in Z) return e;
                            const s = e.replace("_", "-");
                            if (s in Z) return s;
                            const t = e.toLowerCase();
                            if (t in Z) return t;
                            const a = s.toLowerCase();
                            if (a in Z) return a;
                            const n = a.split("-")[0];
                            return n in Z ? n : null
                        })(e);
                        return s || "en"
                    },
                    Q = {
                        getMessage: e => {
                            const s = J(),
                                t = Z[s];
                            let a;
                            return a = t && e in t ? t[e].message : (e => {
                                const s = Z.en;
                                let t;
                                return s && e in s ? t = s[e].message : (console.error(`[AdGuard PopUp Blocker] Couldn't find message by key "${e}" in base locale. Please report support`), t = e), t
                            })(e), a
                        },
                        getUILanguage: J,
                        getBaseMessage: e => e,
                        getBaseUILanguage: X
                    };

                function Y(e, s, t) {
                    return s in e ? Object.defineProperty(e, s, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[s] = t, e
                }

                function ee(e, s) {
                    for (var t = 0; t < s.length; t++) {
                        var a = s[t];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }

                function se(e, s) {
                    (null == s || s > e.length) && (s = e.length);
                    for (var t = 0, a = new Array(s); t < s; t++) a[t] = e[t];
                    return a
                }

                function te(e) {
                    return function(e) {
                        if (Array.isArray(e)) return se(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(e) || function(e, s) {
                        if (e) {
                            if ("string" == typeof e) return se(e, s);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? se(e, s) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }
                var ae;
                ! function(e) {
                    e.PLACEHOLDER = "placeholder", e.TEXT = "text", e.TAG = "tag", e.VOID_TAG = "void_tag"
                }(ae || (ae = {}));
                var ne, ie = function(e) {
                        return e.type === ae.TAG
                    },
                    oe = function(e) {
                        return e.type === ae.PLACEHOLDER
                    },
                    re = function(e) {
                        return e.type === ae.VOID_TAG
                    },
                    pe = function(e) {
                        return {
                            type: ae.TEXT,
                            value: e
                        }
                    },
                    le = function(e, s) {
                        var t = e.trim();
                        return {
                            type: ae.TAG,
                            value: t,
                            children: s
                        }
                    };
                ! function(e) {
                    e.TEXT = "text", e.TAG = "tag", e.PLACEHOLDER = "placeholder"
                }(ne || (ne = {}));
                var me = "<",
                    ue = ">",
                    de = "/",
                    ge = "%",
                    ce = function(e) {
                        var s = e.text;
                        if (s.length > 0) {
                            var t = pe(s);
                            e.stack.length > 0 ? e.stack.push(t) : e.result.push(t)
                        }
                        e.text = ""
                    },
                    _e = function(e) {
                        return e.split(" ").length > 1
                    },
                    he = function(e) {
                        var s = e.currChar,
                            t = e.currIdx;
                        return s === me ? (e.lastTextStateChangeIdx = t, ne.TAG) : s === ge ? (e.lastTextStateChangeIdx = t, ne.PLACEHOLDER) : (e.text += s, ne.TEXT)
                    },
                    ke = function(e) {
                        var s, t = e.currChar,
                            a = e.currIdx,
                            n = e.lastTextStateChangeIdx,
                            i = e.placeholder,
                            o = e.stack,
                            r = e.result,
                            p = e.str;
                        if (t === ge) {
                            if (a - n == 1) return e.text += p.substring(n, a), ne.TEXT;
                            ce(e);
                            var l = (s = i, {
                                type: ae.PLACEHOLDER,
                                value: s
                            });
                            return o.length > 0 ? o.push(l) : r.push(l), e.placeholder = "", ne.TEXT
                        }
                        return e.placeholder += t, ne.PLACEHOLDER
                    },
                    fe = function(e) {
                        var s, t, a = e.currChar,
                            n = e.text,
                            i = e.stack,
                            o = e.result,
                            r = e.lastTextStateChangeIdx,
                            p = e.currIdx,
                            l = e.str,
                            m = e.tag;
                        if (a === ue) {
                            if (0 === m.indexOf(de)) {
                                m = m.substring(1);
                                var u = [];
                                n.length > 0 && (u.push(pe(n)), e.text = "");
                                for (var d = !1; !d && i.length > 0;) {
                                    var g = i.pop();
                                    if (g === m) {
                                        var c = le(m, u);
                                        i.length > 0 ? i.push(c) : o.push(c), u = [], d = !0
                                    } else {
                                        if ("string" == typeof(t = g) || !t.type) throw "string" == typeof g && _e(g) ? new Error("Tags in string should not have attributes: ".concat(l)) : new Error("String has unbalanced tags: ".concat(l));
                                        u.unshift(g)
                                    }
                                    if (0 === i.length && u.length > 0) throw new Error("String has unbalanced tags: ".concat(l))
                                }
                                return e.tag = "", ne.TEXT
                            }
                            if (m.lastIndexOf(de) === m.length - 1) {
                                m = m.substring(0, m.length - 1), ce(e);
                                var _ = (s = m.trim(), {
                                    type: ae.VOID_TAG,
                                    value: s
                                });
                                return i.length > 0 ? i.push(_) : o.push(_), e.tag = "", ne.TEXT
                            }
                            return ce(e), i.push(m), e.tag = "", ne.TEXT
                        }
                        return a === me ? (e.text += l.substring(r, p), e.lastTextStateChangeIdx = p, e.tag = "", ne.TAG) : (e.tag += a, ne.TAG)
                    };

                function be(e, s) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        s && (a = a.filter((function(s) {
                            return Object.getOwnPropertyDescriptor(e, s).enumerable
                        }))), t.push.apply(t, a)
                    }
                    return t
                }

                function ve(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var t = null != arguments[s] ? arguments[s] : {};
                        s % 2 ? be(Object(t), !0).forEach((function(s) {
                            Y(e, s, t[s])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : be(Object(t)).forEach((function(s) {
                            Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                        }))
                    }
                    return e
                }
                var we, ye, xe = function(e, s) {
                        return s ? "<".concat(e, ">").concat(s, "</").concat(e, ">") : "<".concat(e, "/>")
                    },
                    Ae = function e() {
                        for (var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = [], n = ve(ve({}, {
                                p: function(e) {
                                    return xe("p", e)
                                },
                                b: function(e) {
                                    return xe("b", e)
                                },
                                strong: function(e) {
                                    return xe("strong", e)
                                },
                                tt: function(e) {
                                    return xe("tt", e)
                                },
                                s: function(e) {
                                    return xe("s", e)
                                },
                                i: function(e) {
                                    return xe("i", e)
                                }
                            }), t), i = 0; i < s.length;) {
                            var o = s[i];
                            if (o.type === ae.TEXT) a.push(o.value);
                            else if (ie(o)) {
                                var r = te(e(o.children, n)),
                                    p = n[o.value];
                                if (!p) throw new Error("Value ".concat(o.value, " wasn't provided"));
                                "function" == typeof p ? a.push(p(r.join(""))) : a.push(p)
                            } else if (re(o)) {
                                var l = n[o.value];
                                if (!l || "string" != typeof l) throw new Error("Value ".concat(o.value, " wasn't provided"));
                                a.push(l)
                            } else if (oe(o)) {
                                var m = n[o.value];
                                if (!m || "string" != typeof m) throw new Error("Value ".concat(o.value, " wasn't provided"));
                                a.push(m)
                            }
                            i += 1
                        }
                        return a
                    },
                    je = function(e, s) {
                        var t = function() {
                                for (var e, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = {
                                        stack: [],
                                        result: [],
                                        currIdx: 0,
                                        lastTextStateChangeIdx: 0,
                                        tag: "",
                                        text: "",
                                        placeholder: "",
                                        str: s
                                    }, a = (Y(e = {}, ne.TEXT, he), Y(e, ne.PLACEHOLDER, ke), Y(e, ne.TAG, fe), e), n = ne.TEXT; t.currIdx < s.length;) t.currChar = s[t.currIdx], n = (0, a[n])(t), t.currIdx += 1;
                                var i = t.result,
                                    o = t.text,
                                    r = t.stack,
                                    p = t.lastTextStateChangeIdx;
                                if (n !== ne.TEXT) {
                                    var l = s.substring(p);
                                    (l + o).length > 0 && i.push(pe(o + l))
                                } else o.length > 0 && i.push(pe(o));
                                if (r.length > 0) throw new Error("String has unbalanced tags: ".concat(t.str));
                                return i
                            }(e),
                            a = {};
                        return s && Object.keys(s).forEach((function(e) {
                            var t = s[e];
                            a[e] = "function" == typeof t ? t : String(t)
                        })), Ae(t, a)
                    };
                ! function(e) {
                    e.az = "az", e.bo = "bo", e.dz = "dz", e.id = "id", e.ja = "ja", e.jv = "jv", e.ka = "ka", e.km = "km", e.kn = "kn", e.ko = "ko", e.ms = "ms", e.th = "th", e.tr = "tr", e.vi = "vi", e.zh = "zh", e.zh_cn = "zh_cn", e.zh_tw = "zh_tw", e.af = "af", e.bn = "bn", e.bg = "bg", e.ca = "ca", e.da = "da", e.de = "de", e.el = "el", e.en = "en", e.eo = "eo", e.es = "es", e.et = "et", e.eu = "eu", e.fa = "fa", e.fi = "fi", e.fo = "fo", e.fur = "fur", e.fy = "fy", e.gl = "gl", e.gu = "gu", e.ha = "ha", e.he = "he", e.hu = "hu", e.is = "is", e.it = "it", e.ku = "ku", e.lb = "lb", e.ml = "ml", e.mn = "mn", e.mr = "mr", e.nah = "nah", e.nb = "nb", e.ne = "ne", e.nl = "nl", e.nn = "nn", e.no = "no", e.oc = "oc", e.om = "om", e.or = "or", e.pa = "pa", e.pap = "pap", e.ps = "ps", e.pt = "pt", e.pt_pt = "pt_pt", e.pt_br = "pt_br", e.so = "so", e.sq = "sq", e.sv = "sv", e.sw = "sw", e.ta = "ta", e.te = "te", e.tk = "tk", e.ur = "ur", e.zu = "zu", e.am = "am", e.bh = "bh", e.fil = "fil", e.fr = "fr", e.gun = "gun", e.hi = "hi", e.hy = "hy", e.ln = "ln", e.mg = "mg", e.nso = "nso", e.xbr = "xbr", e.ti = "ti", e.wa = "wa", e.be = "be", e.bs = "bs", e.hr = "hr", e.ru = "ru", e.sr = "sr", e.uk = "uk", e.cs = "cs", e.sk = "sk", e.ga = "ga", e.lt = "lt", e.sl = "sl", e.mk = "mk", e.mt = "mt", e.lv = "lv", e.pl = "pl", e.cy = "cy", e.ro = "ro", e.ar = "ar"
                }(ye || (ye = {}));
                var Pe = (Y(we = {}, ye.az, 2), Y(we, ye.bo, 2), Y(we, ye.dz, 2), Y(we, ye.id, 2), Y(we, ye.ja, 2), Y(we, ye.jv, 2), Y(we, ye.ka, 2), Y(we, ye.km, 2), Y(we, ye.kn, 2), Y(we, ye.ko, 2), Y(we, ye.ms, 2), Y(we, ye.th, 2), Y(we, ye.tr, 2), Y(we, ye.vi, 2), Y(we, ye.zh, 2), Y(we, ye.zh_cn, 2), Y(we, ye.zh_tw, 2), Y(we, ye.af, 3), Y(we, ye.bn, 3), Y(we, ye.bg, 3), Y(we, ye.ca, 3), Y(we, ye.da, 3), Y(we, ye.de, 3), Y(we, ye.el, 3), Y(we, ye.en, 3), Y(we, ye.eo, 3), Y(we, ye.es, 3), Y(we, ye.et, 3), Y(we, ye.eu, 3), Y(we, ye.fa, 3), Y(we, ye.fi, 3), Y(we, ye.fo, 3), Y(we, ye.fur, 3), Y(we, ye.fy, 3), Y(we, ye.gl, 3), Y(we, ye.gu, 3), Y(we, ye.ha, 3), Y(we, ye.he, 3), Y(we, ye.hu, 3), Y(we, ye.is, 3), Y(we, ye.it, 3), Y(we, ye.ku, 3), Y(we, ye.lb, 3), Y(we, ye.ml, 3), Y(we, ye.mn, 3), Y(we, ye.mr, 3), Y(we, ye.nah, 3), Y(we, ye.nb, 3), Y(we, ye.ne, 3), Y(we, ye.nl, 3), Y(we, ye.nn, 3), Y(we, ye.no, 3), Y(we, ye.oc, 3), Y(we, ye.om, 3), Y(we, ye.or, 3), Y(we, ye.pa, 3), Y(we, ye.pap, 3), Y(we, ye.ps, 3), Y(we, ye.pt, 3), Y(we, ye.pt_pt, 3), Y(we, ye.pt_br, 3), Y(we, ye.so, 3), Y(we, ye.sq, 3), Y(we, ye.sv, 3), Y(we, ye.sw, 3), Y(we, ye.ta, 3), Y(we, ye.te, 3), Y(we, ye.tk, 3), Y(we, ye.ur, 3), Y(we, ye.zu, 3), Y(we, ye.am, 2), Y(we, ye.bh, 2), Y(we, ye.fil, 2), Y(we, ye.fr, 3), Y(we, ye.gun, 2), Y(we, ye.hi, 2), Y(we, ye.hy, 2), Y(we, ye.ln, 2), Y(we, ye.mg, 2), Y(we, ye.nso, 2), Y(we, ye.xbr, 2), Y(we, ye.ti, 2), Y(we, ye.wa, 2), Y(we, ye.be, 4), Y(we, ye.bs, 4), Y(we, ye.hr, 4), Y(we, ye.ru, 4), Y(we, ye.sr, 4), Y(we, ye.uk, 4), Y(we, ye.cs, 4), Y(we, ye.sk, 4), Y(we, ye.ga, 4), Y(we, ye.lt, 4), Y(we, ye.sl, 5), Y(we, ye.mk, 3), Y(we, ye.mt, 5), Y(we, ye.lv, 3), Y(we, ye.pl, 4), Y(we, ye.cy, 4), Y(we, ye.ro, 4), Y(we, ye.ar, 6), we),
                    ze = function(e, s, t, a) {
                        ! function(e, s, t) {
                            var a = e.split("|");
                            if (a.length !== Pe[s]) throw new Error('Invalid plural string "'.concat(t, '" for locale ').concat(s, ": ").concat(a.length, " given; need: ").concat(Pe[s]))
                        }(e, t, a);
                        var n = e.split("|"),
                            i = function(e, s) {
                                var t;
                                if (0 === s) return 0;
                                var a = s % 10 == 1 && s % 100 != 11 ? 1 : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? 2 : 3;
                                return (Y(t = {}, ye.az, 1), Y(t, ye.bo, 1), Y(t, ye.dz, 1), Y(t, ye.id, 1), Y(t, ye.ja, 1), Y(t, ye.jv, 1), Y(t, ye.ka, 1), Y(t, ye.km, 1), Y(t, ye.kn, 1), Y(t, ye.ko, 1), Y(t, ye.ms, 1), Y(t, ye.th, 1), Y(t, ye.tr, 1), Y(t, ye.vi, 1), Y(t, ye.zh, 1), Y(t, ye.zh_tw, 1), Y(t, ye.zh_cn, 1), Y(t, ye.af, 1 === s ? 1 : 2), Y(t, ye.bn, 1 === s ? 1 : 2), Y(t, ye.bg, 1 === s ? 1 : 2), Y(t, ye.ca, 1 === s ? 1 : 2), Y(t, ye.da, 1 === s ? 1 : 2), Y(t, ye.de, 1 === s ? 1 : 2), Y(t, ye.el, 1 === s ? 1 : 2), Y(t, ye.en, 1 === s ? 1 : 2), Y(t, ye.eo, 1 === s ? 1 : 2), Y(t, ye.es, 1 === s ? 1 : 2), Y(t, ye.et, 1 === s ? 1 : 2), Y(t, ye.eu, 1 === s ? 1 : 2), Y(t, ye.fa, 1 === s ? 1 : 2), Y(t, ye.fi, 1 === s ? 1 : 2), Y(t, ye.fo, 1 === s ? 1 : 2), Y(t, ye.fur, 1 === s ? 1 : 2), Y(t, ye.fy, 1 === s ? 1 : 2), Y(t, ye.gl, 1 === s ? 1 : 2), Y(t, ye.gu, 1 === s ? 1 : 2), Y(t, ye.ha, 1 === s ? 1 : 2), Y(t, ye.he, 1 === s ? 1 : 2), Y(t, ye.hu, 1 === s ? 1 : 2), Y(t, ye.is, 1 === s ? 1 : 2), Y(t, ye.it, 1 === s ? 1 : 2), Y(t, ye.ku, 1 === s ? 1 : 2), Y(t, ye.lb, 1 === s ? 1 : 2), Y(t, ye.ml, 1 === s ? 1 : 2), Y(t, ye.mn, 1 === s ? 1 : 2), Y(t, ye.mr, 1 === s ? 1 : 2), Y(t, ye.nah, 1 === s ? 1 : 2), Y(t, ye.nb, 1 === s ? 1 : 2), Y(t, ye.ne, 1 === s ? 1 : 2), Y(t, ye.nl, 1 === s ? 1 : 2), Y(t, ye.nn, 1 === s ? 1 : 2), Y(t, ye.no, 1 === s ? 1 : 2), Y(t, ye.oc, 1 === s ? 1 : 2), Y(t, ye.om, 1 === s ? 1 : 2), Y(t, ye.or, 1 === s ? 1 : 2), Y(t, ye.pa, 1 === s ? 1 : 2), Y(t, ye.pap, 1 === s ? 1 : 2), Y(t, ye.ps, 1 === s ? 1 : 2), Y(t, ye.pt, 1 === s ? 1 : 2), Y(t, ye.pt_pt, 1 === s ? 1 : 2), Y(t, ye.pt_br, 1 === s ? 1 : 2), Y(t, ye.so, 1 === s ? 1 : 2), Y(t, ye.sq, 1 === s ? 1 : 2), Y(t, ye.sv, 1 === s ? 1 : 2), Y(t, ye.sw, 1 === s ? 1 : 2), Y(t, ye.ta, 1 === s ? 1 : 2), Y(t, ye.te, 1 === s ? 1 : 2), Y(t, ye.tk, 1 === s ? 1 : 2), Y(t, ye.ur, 1 === s ? 1 : 2), Y(t, ye.zu, 1 === s ? 1 : 2), Y(t, ye.am, 0 === s || 1 === s ? 0 : 1), Y(t, ye.bh, 0 === s || 1 === s ? 0 : 1), Y(t, ye.fil, 0 === s || 1 === s ? 0 : 1), Y(t, ye.fr, 0 === s || s >= 2 ? 2 : 1), Y(t, ye.gun, 0 === s || 1 === s ? 0 : 1), Y(t, ye.hi, 0 === s || 1 === s ? 0 : 1), Y(t, ye.hy, 0 === s || 1 === s ? 0 : 1), Y(t, ye.ln, 0 === s || 1 === s ? 0 : 1), Y(t, ye.mg, 0 === s || 1 === s ? 0 : 1), Y(t, ye.nso, 0 === s || 1 === s ? 0 : 1), Y(t, ye.xbr, 0 === s || 1 === s ? 0 : 1), Y(t, ye.ti, 0 === s || 1 === s ? 0 : 1), Y(t, ye.wa, 0 === s || 1 === s ? 0 : 1), Y(t, ye.be, a), Y(t, ye.bs, a), Y(t, ye.hr, a), Y(t, ye.ru, a), Y(t, ye.sr, a), Y(t, ye.uk, a), Y(t, ye.cs, 1 === s ? 1 : s >= 2 && s <= 4 ? 2 : 3), Y(t, ye.sk, 1 === s ? 1 : s >= 2 && s <= 4 ? 2 : 3), Y(t, ye.ga, 1 === s ? 1 : 2 === s ? 2 : 3), Y(t, ye.lt, s % 10 == 1 && s % 100 != 11 ? 1 : s % 10 >= 2 && (s % 100 < 10 || s % 100 >= 20) ? 2 : 3), Y(t, ye.sl, s % 100 == 1 ? 1 : s % 100 == 2 ? 2 : s % 100 == 3 || s % 100 == 4 ? 3 : 4), Y(t, ye.mk, s % 10 == 1 ? 1 : 2), Y(t, ye.mt, 1 === s ? 1 : 0 === s || s % 100 > 1 && s % 100 < 11 ? 2 : s % 100 > 10 && s % 100 < 20 ? 3 : 4), Y(t, ye.lv, 0 === s ? 0 : s % 10 == 1 && s % 100 != 11 ? 1 : 2), Y(t, ye.pl, 1 === s ? 1 : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 12 || s % 100 > 14) ? 2 : 3), Y(t, ye.cy, 1 === s ? 0 : 2 === s ? 1 : 8 === s || 11 === s ? 2 : 3), Y(t, ye.ro, 1 === s ? 1 : 1 === s || s % 100 > 0 && s % 100 < 20 ? 2 : 3), Y(t, ye.ar, 0 === s ? 0 : 1 === s ? 1 : 2 === s ? 2 : s % 100 >= 3 && s % 100 <= 10 ? 3 : s % 100 >= 11 && s % 100 <= 99 ? 4 : 5), t)[e]
                            }(t, s);
                        return n[i].trim()
                    };

                function Oe(e, s) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        s && (a = a.filter((function(s) {
                            return Object.getOwnPropertyDescriptor(e, s).enumerable
                        }))), t.push.apply(t, a)
                    }
                    return t
                }

                function Te(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var t = null != arguments[s] ? arguments[s] : {};
                        s % 2 ? Oe(Object(t), !0).forEach((function(s) {
                            Y(e, s, t[s])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Oe(Object(t)).forEach((function(s) {
                            Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                        }))
                    }
                    return e
                }
                var De = function(e) {
                        return e.join("")
                    },
                    Ee = function() {
                        function e(s, t, a) {
                            ! function(e, s) {
                                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.i18n = s, this.messageConstructor = t || De, this.values = a || {}
                        }
                        var s, t, a;
                        return s = e, t = [{
                            key: "getMessage",
                            value: function(e) {
                                var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    t = this.i18n.getMessage(e);
                                if (!t && !(t = this.i18n.getBaseMessage(e))) throw new Error('Was unable to find message for key: "'.concat(e, '"'));
                                var a = je(t, Te(Te({}, this.values), s));
                                return this.messageConstructor(a)
                            }
                        }, {
                            key: "getPlural",
                            value: function(e, s) {
                                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    a = this.i18n.getMessage(e),
                                    n = this.i18n.getUILanguage();
                                if (!a) {
                                    if (!(a = this.i18n.getBaseMessage(e))) throw new Error('Was unable to find message for key: "'.concat(e, '"'));
                                    n = this.i18n.getBaseUILanguage()
                                }
                                var i = ze(a, s, n, e),
                                    o = je(i, Te(Te(Te({}, this.values), t), {}, {
                                        count: s
                                    }));
                                return this.messageConstructor(o)
                            }
                        }], t && ee(s.prototype, t), a && ee(s, a), e
                    }();

                function Be(e, s) {
                    return s = s || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
                        Be(e, s)
                    })) : s.push(e)), s
                }

                function Ge(e, s) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        s && (a = a.filter((function(s) {
                            return Object.getOwnPropertyDescriptor(e, s).enumerable
                        }))), t.push.apply(t, a)
                    }
                    return t
                }
                "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
                var Ie = function(e, s, t) {
                        return new Ee(e, s, t)
                    },
                    $e = function(e, s, t) {
                        var a, n = function(e, t) {
                                return t ? s.createElement(e, null, Be(t)) : s.createElement(e, null)
                            },
                            i = (a = {}, t && t.tags.forEach((function(e) {
                                a[e.key] = function(s) {
                                    return n(e.createdTag, s)
                                }
                            })), null != t && t.override ? a : function(e) {
                                for (var s = 1; s < arguments.length; s++) {
                                    var t = null != arguments[s] ? arguments[s] : {};
                                    s % 2 ? Ge(Object(t), !0).forEach((function(s) {
                                        Y(e, s, t[s])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ge(Object(t)).forEach((function(s) {
                                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                                    }))
                                }
                                return e
                            }({
                                p: function(e) {
                                    return n("p", e)
                                },
                                b: function(e) {
                                    return n("b", e)
                                },
                                strong: function(e) {
                                    return n("strong", e)
                                },
                                tt: function(e) {
                                    return n("tt", e)
                                },
                                s: function(e) {
                                    return n("s", e)
                                },
                                i: function(e) {
                                    return n("i", e)
                                }
                            }, a));
                        return new Ee(e, (function(e) {
                            var s = Be(e);
                            return s.every((function(e) {
                                return "string" == typeof e
                            })) ? s.join("") : s
                        }), i)
                    };
                const Se = $e(Q, {
                        createElement: x
                    }),
                    Me = Ie(Q);
                (Object.getOwnPropertyDescriptor(window, "frameElement") || Object.getOwnPropertyDescriptor(Window.prototype, "frameElement")).get;
                const Ce = "attachShadow" in Element.prototype;

                function Le(e) {
                    return void 0 === e
                }

                function Ne(e) {
                    return "number" == typeof e
                }
                const Ue = Object.getOwnPropertyDescriptor,
                    Fe = Object.create,
                    We = Function.prototype.bind,
                    Re = window.setTimeout.bind(window);
                Ue(HTMLIFrameElement.prototype, "contentWindow").get, Ue(HTMLIFrameElement.prototype, "contentDocument").get, Ue(MessageEvent.prototype, "source").get;
                class qe {
                    emit() {
                        const {
                            listeners: e
                        } = this;
                        for (let s = 0, t = e.length; s < t; s += 1) {
                            const t = e[s];
                            try {
                                t()
                            } catch (e) {}
                        }
                    }
                    addListener(e) {
                        this.listeners.push(e)
                    }
                    removeListener(e) {
                        const s = this.listeners.indexOf(e); - 1 !== s && this.listeners.splice(s, 1)
                    }
                    handleEvent(e) {
                        e.isTrusted && this.emit()
                    }
                    constructor(e) {
                        this.eventName = e, this.listeners = []
                    }
                    $install(e) {
                        e.addEventListener(this.eventName, this)
                    }
                    $uninstall(e) {
                        e.removeEventListener(this.eventName, this)
                    }
                }
                "function" == typeof WeakMap && function() {
                    if ("function" != typeof DOMPoint) return !1;
                    const e = new DOMPoint,
                        s = new WeakMap;
                    try {
                        return s.set(e, void 0), !1
                    } catch (e) {
                        return K.print("Buggy WeakMap support"), !0
                    }
                }();
                const Ve = "optionsApi",
                    He = "https://popupblocker.adguard.com/release/v1/options.html",
                    Ke = "https://adguardteam.github.io/PopupBlocker/release/v1/options.html";

                function Ze(e, s) {
                    return t => {
                        t && !t.isTrusted || (e.call(s, t), t && t.preventDefault())
                    }
                }

                function Xe(e, s) {
                    let t = "";
                    for (let a = 0, n = e.length; a < n; a += 1) t += `${e[a]}:${e[++a]}`, s && (t += "!important"), t += ";";
                    return t
                }
                let Je;

                function Qe() {
                    return Le(Je) && (Je = document.implementation.createHTMLDocument("")), Je
                }
                class Ye extends qe {
                    static isIE10OrLower() {
                        const {
                            documentMode: e
                        } = document;
                        return e < 11
                    }
                    static getShadowRoot() {
                        let {
                            shadowRoot: e
                        } = Ye;
                        if (Le(e)) {
                            const s = Qe().createElement("div");
                            e = Ye.shadowRoot = s.attachShadow({
                                mode: "closed"
                            });
                            const t = Qe().createElement("style");
                            t.textContent = `:host{${Xe(Ye.shadowHostStyle,!0)}}`, e.appendChild(t), document.documentElement.appendChild(s)
                        }
                        return e
                    }
                    static detach(e) {
                        const s = e.parentNode;
                        s && s.removeChild(e)
                    }
                    constructor() {
                        super("load"), this.loadedOnce = !1;
                        const e = this.iframe = Qe().createElement("iframe");
                        e.setAttribute("allowTransparency", "true"), Ye.isIE10OrLower() && (e.src = `javascript:document.write('<script>document.domain="${document.domain}";<\/script>');document.close();`), this.$install(e), Ye.instances.push(this)
                    }
                    handleEvent(e) {
                        if (this.loadedOnce) return;
                        if (!e.isTrusted) return;
                        this.loadedOnce = !0;
                        const {
                            listeners: s
                        } = this;
                        for (let e = 0, t = s.length; e < t; e += 1) {
                            (0, s[e])()
                        }
                    }
                    inject() {
                        Ce ? Ye.getShadowRoot().appendChild(this.iframe) : document.documentElement.appendChild(this.iframe)
                    }
                    getFrameElement() {
                        return this.iframe
                    }
                    $destroy() {
                        const e = Ye.instances.indexOf(this);
                        if (-1 === e) return;
                        Ye.instances.splice(e, 1);
                        const {
                            iframe: s
                        } = this;
                        if (Ye.detach(s), s.removeEventListener("load", this), this.iframe = void 0, Ce && 0 === Ye.instances.length) {
                            const {
                                host: e
                            } = Ye.shadowRoot;
                            Ye.detach(e), Ye.shadowRoot = void 0
                        }
                    }
                }
                Ye.shadowHostStyle = ["display", "block", "position", "relative", "width", String(0), "height", String(0), "margin", String(0), "padding", String(0), "overflow", "hidden", "z-index", String(2147483647)], Ye.instances = [];
                class es extends qe {
                    constructor(e) {
                        super("scroll"), this.root = e, this.createDetectorElement()
                    }
                    static getTestText() {
                        const e = [];
                        for (let s = 33; s <= 122; s += 1) e.push(s);
                        return String.fromCharCode.apply(null, e)
                    }
                    createDetectorElement() {
                        const e = this.root.ownerDocument,
                            s = this.wrapper = e.createElement("div"),
                            t = e.createElement("div"),
                            a = this.innerWrapper = e.createElement("div"),
                            n = e.createElement("div");
                        s.style.cssText = "left:9999px;positiion:absolute;overflow:hidden", t.style.cssText = "position:relative;white-space:nowrap;font-family:serif", a.style.cssText = "position:absolute;width:100%;height:100%;overflow:hidden";
                        const i = e.createTextNode(es.getTestText());
                        t.appendChild(i), s.appendChild(t).appendChild(a).appendChild(n), this.root.appendChild(s);
                        const {
                            offsetWidth: o,
                            offsetHeight: r
                        } = t, p = s.style, l = n.style;
                        p.width = l.width = o - 1 + "px", p.height = l.height = r - 1 + "px", es.scrollElementToBottomRightCorner(s), es.scrollElementToBottomRightCorner(n), this.$install(s), this.$install(a)
                    }
                    static scrollElementToBottomRightCorner(e) {
                        const {
                            scrollWidth: s,
                            clientWidth: t,
                            scrollHeight: a,
                            clientHeight: n
                        } = e;
                        e.scrollLeft = s - t, e.scrollTop = a - n
                    }
                    $destroy() {
                        this.$uninstall(this.wrapper), this.$uninstall(this.innerWrapper)
                    }
                }
                const ss = "./assets/fonts",
                    ts = {
                        RegularWoff: `${ss}/regular/OpenSans-Regular.woff`,
                        RegularWoff2: `${ss}/regular/OpenSans-Regular.woff2`,
                        BoldWoff: `${ss}/bold/OpenSans-Bold.woff`,
                        BoldWoff2: `${ss}/bold/OpenSans-Bold.woff2`
                    },
                    as = `\n@font-face {\n    font-family: "Open Sans";\n    src:\n        url("${GM_getResourceURL(ts.RegularWoff2)}") format("woff2"),\n        url("${GM_getResourceURL(ts.RegularWoff)}") format("woff");\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: "Open Sans";\n    src:\n        url("${GM_getResourceURL(ts.BoldWoff2)}") format("woff2"),\n        url("${GM_getResourceURL(ts.BoldWoff)}") format("woff");\n    font-weight: 700;\n    font-style: normal;\n}\n`,
                    ns = () => H(j, {
                        children: [H("meta", {
                            charSet: "UTF-8"
                        }), H("meta", {
                            name: "viewport",
                            content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                        }), H("meta", {
                            "http-equiv": "X-UA-Compatible",
                            content: "ie=edge"
                        }), H("style", {
                            children: as
                        })]
                    });
                window.alertStyles = ":root {\n    --white-color: #ffffff;\n    --t3: 0.3s ease;\n    --greenc1: #bde5c1;\n    --green5B: #66B574;\n    --green72: #68bc72;\n    --green74: #66B574;\n    --green02: rgba(104, 188, 113, 0.2);\n    --gray-base: #282828;\n    --gray66: #666666;\n    --graycc: #cccccc;\n    --grayf1: #f1f1f1;\n    --grayc5: rgba(197, 197, 197, 0.47);\n    --grey-shadow: 0 0 10px 3px rgba(162, 161, 161, 0.3);\n    --grey92: #929292;\n    --grey151: rgba(155, 155, 155, 0.22);\n}\n* {\n    box-sizing: border-box;\n}\nhtml {\n    font-size: 10px;\n    height: 100%;\n}\nbody {\n    height: 100%;\n    margin: 0;\n    font-size: 1.3rem;\n    line-height: 1.428571429;\n    color: #282828;\n    color: var(--gray-base);\n    font-family: \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", Arial, sans-serif;\n    font-weight: 400;\n}\nbody.body--overflow {\n        overflow: hidden;\n    }\nul {\n    list-style: none;\n}\ninput {\n    outline: none;\n}\nbutton {\n    font-size: inherit;\n    color: inherit;\n    border: 0;\n    outline: none;\n    background-color: transparent;\n}\nselect::-ms-expand {\n    display: none;\n}\n.radio {\n    display: none;\n}\n.radio-label {\n        padding-left: 30px;\n        position: relative;\n    }\n.radio-label:after {\n            content: '';\n            cursor: pointer;\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 18px;\n            height: 18px;\n            border-radius: 100%;\n            box-shadow: 0 0 0 1px #cccccc;\n            box-shadow: 0 0 0 1px var(--graycc);\n            transition: 0.3s ease box-shadow;\n            transition: var(--t3) box-shadow;\n        }\n.radio-label:hover:after {\n                box-shadow: 0 0 0 1px #66B574;\n                box-shadow: 0 0 0 1px var(--green74);\n            }\n.radio:checked + .radio-label:before {\n            content: '';\n            position: absolute;\n            top: 4px;\n            left: 4px;\n            width: 10px;\n            height: 10px;\n            border-radius: 100%;\n            background-color: #66B574;\n            background-color: var(--green74);\n        }\n.radio:disabled + .radio-label:after {\n                background-color: #f1f1f1;\n                background-color: var(--grayf1);\n                cursor: default;\n            }\n.radio:disabled + .radio-label:hover:after {\n                    box-shadow: 0 0 0 1px #cccccc;\n                    box-shadow: 0 0 0 1px var(--graycc);\n                }\n.checkbox {\n    display: none;\n}\n.checkbox-label {\n        padding-left: 30px;\n        position: relative;\n    }\n.checkbox-label:after {\n            content: '';\n            cursor: pointer;\n            position: absolute;\n            left: 0;\n            top: -1px;\n            width: 19px;\n            height: 19px;\n            border-radius: 3px;\n            box-shadow: 0 0 0 1px #cccccc;\n            box-shadow: 0 0 0 1px var(--graycc);\n            transition: 0.3s ease box-shadow, 0.3s ease background-color;\n            transition: var(--t3) box-shadow, var(--t3) background-color;\n        }\n.checkbox-label:hover:after {\n                box-shadow: 0 0 0 1px #66B574;\n                box-shadow: 0 0 0 1px var(--green74);\n            }\n.checkbox:checked + .checkbox-label:after {\n                background-color: #66B574;\n                background-color: var(--green74);\n                box-shadow: 0 0 0 1px #66B574;\n                box-shadow: 0 0 0 1px var(--green74);\n            }\n.checkbox:checked + .checkbox-label:before {\n                content: '';\n                cursor: pointer;\n                position: absolute;\n                z-index: 1;\n                top: 5px;\n                left: 4px;\n                width: 11px;\n                height: 9px;\n                background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.91 4.059 3.41 3.408L9.684.597' stroke='%23FFF' stroke-width='1.2' fill='none' fill-rule='evenodd' stroke-linecap='round'/%3E%3C/svg%3E\");\n            }\n.checkbox:checked + .checkbox-label:hover:after {\n                    background-color: #66B574;\n                    background-color: var(--green5B);\n                }\n.checkbox:disabled + .checkbox-label:after {\n                background-color: #f1f1f1;\n                background-color: var(--grayf1);\n                cursor: default;\n            }\n.checkbox:disabled + .checkbox-label:hover:after {\n                    box-shadow: 0 0 0 1px #cccccc;\n                    box-shadow: 0 0 0 1px var(--graycc);\n                }\n.userscript-options-page {\n    background-color: #e6e6e6;\n}\n.userscript-options-page .settings {\n        justify-content: center;\n    }\n.alert {\n    display: none;\n    position: fixed;\n    top: 8px;\n    right: 48px;\n    width: 390px;\n    background-color: #ffffff;\n    background-color: var(--white-color);\n    padding: 45px 20px 20px;\n    box-shadow: 0 0 10px 3px rgba(162, 161, 161, 0.3);\n    box-shadow: var(--grey-shadow);\n}\n.alert:after {\n        content: \"▲\";\n        position: absolute;\n        right: -9px;\n        top: 7px;\n        transform: rotate(90deg) scaleY(0.7);\n        color: #ffffff;\n        color: var(--white-color);\n    }\n.alert--show {\n        display: block;\n    }\n.alert__close {\n        display: block;\n        position: absolute;\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23979797' stroke-width='1.5' fill='none' fill-rule='evenodd' opacity='.661' stroke-linecap='square'%3E%3Cpath d='m1.473 1.273 13 13M1.473 14.273l13-13'/%3E%3C/g%3E%3C/svg%3E\");\n        cursor: pointer;\n        top: 20px;\n        right: 20px;\n        width: 15px;\n        height: 15px;\n    }\n.alert__in {\n        display: flex;\n        align-items: center;\n        margin-bottom: 35px;\n    }\n.alert__ico {\n        margin-right: 20px;\n    }\n.alert__ico--windows {\n            /* window.svg */\n            background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 49 41' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M2.374.715h44.4a1.8 1.8 0 0 1 1.8 1.8v36.4a1.8 1.8 0 0 1-1.8 1.8h-44.4a1.8 1.8 0 0 1-1.8-1.8v-36.4a1.8 1.8 0 0 1 1.8-1.8Z' fill='%23F5A623'/%3E%3Cpath d='M5.204 10.117h38.74a1.8 1.8 0 0 1 1.8 1.8v23.596a1.8 1.8 0 0 1-1.8 1.8H5.204a1.8 1.8 0 0 1-1.8-1.8V11.917a1.8 1.8 0 0 1 1.8-1.8Z' fill='%23FFF' opacity='.149'/%3E%3Cg stroke='%23FFF' stroke-linecap='round' stroke-width='1.5'%3E%3Cpath d='M19.149 19.004 29.816 29.67M19.149 29.671l10.667-10.667'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n            width: 49px;\n            height: 41px;\n            margin-right: 20px;\n        }\n.alert__ico--touch {\n            width: 31px;\n            height: 40px;\n            /* touch.svg */\n            background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 31 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2366B574' fill-rule='nonzero'%3E%3Cpath d='M21.115 25.65c-.491 1.018-1.06 2-1.701 2.94a11.367 11.367 0 0 0 2.726 4.356 11.393 11.393 0 0 0 3.726 2.49 14.968 14.968 0 0 0 1.579-1.86c-3.449-1.101-6.013-4.198-6.33-7.926Z'/%3E%3Cpath d='M25.65 24.87v-9.137c0-5.668-4.612-10.279-10.28-10.279-5.667 0-10.278 4.611-10.278 10.279A4.573 4.573 0 0 1 .524 20.3v2.284a6.86 6.86 0 0 0 6.852-6.852c0-4.408 3.587-7.995 7.995-7.995 4.408 0 7.994 3.587 7.994 7.995v9.136c0 3.246 2.268 5.971 5.302 6.676.345-.691.637-1.412.872-2.158a4.575 4.575 0 0 1-3.89-4.518ZM20.525 34.562a13.785 13.785 0 0 1-2-2.532l-.76-1.238-1.087 1.095a22.72 22.72 0 0 1-9.214 5.619 14.804 14.804 0 0 0 2.828 1.391 25.004 25.004 0 0 0 7.072-4.51 16.126 16.126 0 0 0 4.303 4.002c.8-.376 1.561-.821 2.275-1.328a13.727 13.727 0 0 1-3.417-2.5Z'/%3E%3Cpath d='M15.37.886C7.185.886.525 7.546.525 15.733v2.284a2.287 2.287 0 0 0 2.284-2.284c0-6.927 5.636-12.563 12.563-12.563 6.927 0 12.562 5.636 12.562 12.563v9.136c0 1.205.938 2.194 2.121 2.278.107-.719.163-1.454.163-2.202v-9.212c0-8.187-6.66-14.847-14.846-14.847Z'/%3E%3Cpath d='M15.37 10.022a5.717 5.717 0 0 0-5.71 5.71c0 5.039-4.098 9.137-9.136 9.137v.076c0 .75.056 1.486.164 2.206a11.343 11.343 0 0 0 7.913-3.34 11.347 11.347 0 0 0 3.343-8.078 3.43 3.43 0 0 1 3.427-3.426 3.43 3.43 0 0 1 3.426 3.426c0 9.083-6.662 16.638-15.357 18.039.53.713 1.12 1.377 1.766 1.985a20.41 20.41 0 0 0 9.857-5.485 20.425 20.425 0 0 0 6.018-14.54 5.717 5.717 0 0 0-5.71-5.71ZM17.295 37.792l-.207-.21a27.22 27.22 0 0 1-3.26 2.13 14.952 14.952 0 0 0 5.216-.38 18.558 18.558 0 0 1-1.75-1.54Z'/%3E%3Cpath d='M15.37 14.59c-.63 0-1.141.512-1.141 1.143 0 7.325-5.778 13.327-13.015 13.687.243.77.548 1.513.909 2.223a15.866 15.866 0 0 0 9.71-4.602 15.886 15.886 0 0 0 4.68-11.308c0-.631-.512-1.142-1.142-1.142Z'/%3E%3C/g%3E%3C/svg%3E\");\n        }\n.alert__text {\n        width: 258px;\n    }\n.alert__btns {\n        display: flex;\n        justify-content: space-between;\n    }\n.alert__select {\n        width: 170px;\n        /* arrow.svg */\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 11 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%231D1D1D' stroke-width='1.5' d='M9.63.914 5.147 5.945.665.914' fill='none' fill-rule='evenodd' opacity='.337'/%3E%3C/svg%3E\");\n        background-size: 10px 8px;\n        background-position: 153px 17px;\n        background-repeat: no-repeat;\n        -moz-text-align-last:center;\n             text-align-last:center;\n        border-radius: 0;\n        -webkit-appearance:none;\n           -moz-appearance:none;\n                appearance:none;\n        outline: none;\n        font-size: inherit;\n        border: 0;\n\n        cursor: pointer;\n\n        text-align: center;\n\n        box-shadow: 0 0 0 1px rgba(197, 197, 197, 0.47);\n\n        box-shadow: 0 0 0 1px var(--grayc5);\n\n        padding: 0 20px;\n\n        height: 40px;\n\n        line-height: 40px;\n\n        background-color: #ffffff;\n\n        background-color: var(--white-color);\n\n        transition: 0.3s ease background-color;\n\n        transition: var(--t3) background-color;\n\n        font-family: \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", Arial, sans-serif;\n\n        font-weight: 700;\n    }\n.alert__select:hover {\n        background-color: rgba(104, 188, 113, 0.2);\n        background-color: var(--green02);\n    }\n.alert__btn {\n        display: block;\n        width: 170px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n\n        cursor: pointer;\n\n        text-align: center;\n\n        box-shadow: 0 0 0 1px rgba(197, 197, 197, 0.47);\n\n        box-shadow: 0 0 0 1px var(--grayc5);\n\n        padding: 0 20px;\n\n        height: 40px;\n\n        line-height: 40px;\n\n        background-color: #ffffff;\n\n        background-color: var(--white-color);\n\n        transition: 0.3s ease background-color;\n\n        transition: var(--t3) background-color;\n\n        font-family: \"Open Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Ubuntu, \"Helvetica Neue\", Arial, sans-serif;\n\n        font-weight: 700;\n    }\n.alert__btn:hover {\n        background-color: rgba(104, 188, 113, 0.2);\n        background-color: var(--green02);\n    }\n.alert__btn:active {\n            background-color: #66B574;\n            background-color: var(--green5B);\n            color: #ffffff;\n            color: var(--white-color);\n        }\n.pin {\n    display: none;\n    width: 30px;\n    height: 30px;\n    position: fixed;\n    right: 8px;\n    cursor: pointer;\n    border-radius: 100%;\n    box-shadow: 0 0 10px 3px rgba(162, 161, 161, 0.3);\n    box-shadow: var(--grey-shadow);\n    background-color: #ffffff;\n    background-color: var(--white-color);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    transition: 0.3s ease background-color;\n    transition: var(--t3) background-color;\n    padding: 0;\n}\n.pin:hover {\n        background-color: rgba(104, 188, 113, 0.2);\n        background-color: var(--green02);\n    }\n.pin--show {\n        display: block;\n    }\n.pin--shield {\n        width: 60px;\n        height: 60px;\n        background-size: 30px;\n        background-position: 50% 17px;\n        /* shield.svg */\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25.3 25.9'%3E%3Cpath fill='%2368bc71' d='M12.7 0C8.7 0 3.9.9 0 3c0 4.4-.1 15.4 12.7 23C25.4 18.4 25.3 7.4 25.3 3 21.4.9 16.6 0 12.7 0z'/%3E%3Cpath fill='%2367b279' d='M12.6 25.9C-.1 18.4 0 7.4 0 3c3.9-2 8.7-3 12.6-3v25.9z'/%3E%3Cpath fill='%23fff' d='M12.2 17.3 19.8 7a.99.99 0 0 0-1.3.1l-6.4 6.6-2.4-2.9c-1.1-1.3-2.7-.3-3.1 0l5.6 6.5'/%3E%3C/svg%3E\");\n    }\n.pin--win-hidden {\n        background-size: 16px 13px;\n        /* window.svg */\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 49 41' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M2.374.715h44.4a1.8 1.8 0 0 1 1.8 1.8v36.4a1.8 1.8 0 0 1-1.8 1.8h-44.4a1.8 1.8 0 0 1-1.8-1.8v-36.4a1.8 1.8 0 0 1 1.8-1.8Z' fill='%23F5A623'/%3E%3Cpath d='M5.204 10.117h38.74a1.8 1.8 0 0 1 1.8 1.8v23.596a1.8 1.8 0 0 1-1.8 1.8H5.204a1.8 1.8 0 0 1-1.8-1.8V11.917a1.8 1.8 0 0 1 1.8-1.8Z' fill='%23FFF' opacity='.149'/%3E%3Cg stroke='%23FFF' stroke-linecap='round' stroke-width='1.5'%3E%3Cpath d='M19.149 19.004 29.816 29.67M19.149 29.671l10.667-10.667'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n    }\n.pin--touch {\n        background-size: 13px 16px;\n        /* touch.svg */\n        background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 31 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2366B574' fill-rule='nonzero'%3E%3Cpath d='M21.115 25.65c-.491 1.018-1.06 2-1.701 2.94a11.367 11.367 0 0 0 2.726 4.356 11.393 11.393 0 0 0 3.726 2.49 14.968 14.968 0 0 0 1.579-1.86c-3.449-1.101-6.013-4.198-6.33-7.926Z'/%3E%3Cpath d='M25.65 24.87v-9.137c0-5.668-4.612-10.279-10.28-10.279-5.667 0-10.278 4.611-10.278 10.279A4.573 4.573 0 0 1 .524 20.3v2.284a6.86 6.86 0 0 0 6.852-6.852c0-4.408 3.587-7.995 7.995-7.995 4.408 0 7.994 3.587 7.994 7.995v9.136c0 3.246 2.268 5.971 5.302 6.676.345-.691.637-1.412.872-2.158a4.575 4.575 0 0 1-3.89-4.518ZM20.525 34.562a13.785 13.785 0 0 1-2-2.532l-.76-1.238-1.087 1.095a22.72 22.72 0 0 1-9.214 5.619 14.804 14.804 0 0 0 2.828 1.391 25.004 25.004 0 0 0 7.072-4.51 16.126 16.126 0 0 0 4.303 4.002c.8-.376 1.561-.821 2.275-1.328a13.727 13.727 0 0 1-3.417-2.5Z'/%3E%3Cpath d='M15.37.886C7.185.886.525 7.546.525 15.733v2.284a2.287 2.287 0 0 0 2.284-2.284c0-6.927 5.636-12.563 12.563-12.563 6.927 0 12.562 5.636 12.562 12.563v9.136c0 1.205.938 2.194 2.121 2.278.107-.719.163-1.454.163-2.202v-9.212c0-8.187-6.66-14.847-14.846-14.847Z'/%3E%3Cpath d='M15.37 10.022a5.717 5.717 0 0 0-5.71 5.71c0 5.039-4.098 9.137-9.136 9.137v.076c0 .75.056 1.486.164 2.206a11.343 11.343 0 0 0 7.913-3.34 11.347 11.347 0 0 0 3.343-8.078 3.43 3.43 0 0 1 3.427-3.426 3.43 3.43 0 0 1 3.426 3.426c0 9.083-6.662 16.638-15.357 18.039.53.713 1.12 1.377 1.766 1.985a20.41 20.41 0 0 0 9.857-5.485 20.425 20.425 0 0 0 6.018-14.54 5.717 5.717 0 0 0-5.71-5.71ZM17.295 37.792l-.207-.21a27.22 27.22 0 0 1-3.26 2.13 14.952 14.952 0 0 0 5.216-.38 18.558 18.558 0 0 1-1.75-1.54Z'/%3E%3Cpath d='M15.37 14.59c-.63 0-1.141.512-1.141 1.143 0 7.325-5.778 13.327-13.015 13.687.243.77.548 1.513.909 2.223a15.866 15.866 0 0 0 9.71-4.602 15.886 15.886 0 0 0 4.68-11.308c0-.631-.512-1.142-1.142-1.142Z'/%3E%3C/g%3E%3C/svg%3E\");\n    }\n";
                const is = ({
                    numPopup: e,
                    origDomain: s,
                    destUrl: t
                }) => H(j, {
                    children: [H("div", Object.assign({
                        class: "alert"
                    }, {
                        children: [H("button", {
                            class: "alert__close"
                        }), H("div", Object.assign({
                            class: "alert__in"
                        }, {
                            children: [H("div", {
                                class: "alert__ico alert__ico--windows"
                            }), H("div", Object.assign({
                                class: "alert__text"
                            }, {
                                children: Se.getMessage("popup_text", {
                                    numPopup: e
                                })
                            }))]
                        })), H("div", Object.assign({
                            class: "alert__btns"
                        }, {
                            children: [H("select", Object.assign({
                                class: "alert__select",
                                name: "options"
                            }, {
                                children: [H("option", Object.assign({
                                    value: "0",
                                    disabled: !0,
                                    selected: !0
                                }, {
                                    children: Se.getMessage("options")
                                })), H("option", Object.assign({
                                    value: "1"
                                }, {
                                    children: Se.getMessage("allow_from", {
                                        origDomain: s
                                    })
                                })), H("option", Object.assign({
                                    value: "2"
                                }, {
                                    children: Se.getMessage("silence_noti", {
                                        origDomain: s
                                    })
                                })), H("option", Object.assign({
                                    value: "3"
                                }, {
                                    children: Se.getMessage("manage_pref")
                                })), H("option", Object.assign({
                                    value: "4"
                                }, {
                                    children: Se.getMessage("show_popup", {
                                        destUrl: t
                                    })
                                }))]
                            })), H("button", Object.assign({
                                class: "alert__btn"
                            }, {
                                children: Se.getMessage("continue_blocking")
                            }))]
                        }))]
                    })), H("button", {
                        class: "pin pin--win-hidden pin--show"
                    }), H("style", {
                        children: window.alertStyles
                    })]
                });
                window.toastStyles = '.toast {\n    width: 100%;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    /* padding-bottom: 15px; */\n    bottom: 0;\n    left: 0;\n    opacity: 0;\n    visibility: hidden;\n    transition: 0.3s ease opacity, 0.3s ease visibility;\n    font-size: 14px;\n    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, sans-serif;\n    font-weight: 400;\n}\n\n    .toast--active {\n        opacity: 1;\n        visibility: visible;\n    }\n\n    .toast__in {\n        padding: 15px 30px;\n        max-width: 190px;\n        color: #ffffff;\n        border-radius: 5px;\n        text-align: center;\n        white-space: nowrap;\n        background-color: rgba(0, 0, 0, 0.7);\n    }\n';
                const os = ({
                        message: e
                    }) => H("div", Object.assign({
                        class: "toast"
                    }, {
                        children: [H("div", Object.assign({
                            class: "toast__in"
                        }, {
                            children: e
                        })), H("style", {
                            children: window.toastStyles
                        })]
                    })),
                    rs = "px";
                class ps {
                    constructor(e) {
                        this.defaultDuration = e, this.$state = 0, this.updateIframePosition = We.call(this.updateIframePosition, this), this.updateIframePositionOnLoad = We.call(this.updateIframePositionOnLoad, this)
                    }
                    showNotification(e) {
                        this.currentDuration = this.defaultDuration;
                        const s = this.$state;
                        this.dismissCurrentNotification();
                        const t = this.frameInjector = new Ye;
                        t.getFrameElement().style.cssText = Xe(ps.TOAST_FRAME_STYLE, !1), t.addListener((() => {
                            if (Le(this.frameInjector)) return;
                            const s = this.frameInjector.getFrameElement().contentDocument,
                                t = null == s ? void 0 : s.documentElement.querySelector("head");
                            t && s && (q(H(ns, {}), t), q(H(os, {
                                message: e
                            }), null == s ? void 0 : s.body)), this.toastEl = null == s ? void 0 : s.querySelector(".toast")
                        })), t.addListener(this.updateIframePositionOnLoad), t.addListener((() => {
                            this.setState(2 === s || 3 === s ? 2 : 1)
                        })), t.inject()
                    }
                    updateIframePositionOnLoad() {
                        if (this.toastEl) {
                            this.updateIframePosition();
                            (this.textSizeWatcher = new es(this.toastEl)).addListener(this.updateIframePosition)
                        }
                    }
                    updateIframePosition() {
                        var e, s;
                        const t = null === (e = this.toastEl) || void 0 === e ? void 0 : e.firstElementChild;
                        if (t) {
                            const {
                                offsetWidth: e,
                                offsetHeight: a
                            } = t, n = null === (s = this.frameInjector) || void 0 === s ? void 0 : s.getFrameElement().style;
                            n && (n.left = `calc(50% - ${e/2}px)`, n.width = e + rs, n.height = a + rs)
                        }
                    }
                    dismissCurrentNotification() {
                        const {
                            frameInjector: e
                        } = this;
                        if (Le(e)) return;
                        e.$destroy(), clearTimeout(this.stateTransitionTimer);
                        const {
                            textSizeWatcher: s
                        } = this;
                        Le(s) || (s.$destroy(), this.frameInjector = this.toastEl = this.stateTransitionTimer = this.textSizeWatcher = void 0)
                    }
                    setState(e) {
                        var s, t;
                        switch (clearTimeout(this.stateTransitionTimer), e) {
                            case 1:
                                requestAnimationFrame((() => {
                                    var e;
                                    null === (e = this.toastEl) || void 0 === e || e.classList.add("toast--active")
                                })), this.stateTransitionTimer = setTimeout((() => {
                                    this.setState(2)
                                }), ps.TRANSITION_DURATION);
                                break;
                            case 2:
                                null === (s = this.toastEl) || void 0 === s || s.classList.add("toast--active"), this.stateTransitionTimer = setTimeout((() => {
                                    this.setState(3)
                                }), this.currentDuration);
                                break;
                            case 3:
                                null === (t = this.toastEl) || void 0 === t || t.classList.remove("toast--active"), this.stateTransitionTimer = setTimeout((() => {
                                    this.setState(0)
                                }), ps.TRANSITION_DURATION);
                                break;
                            case 0:
                                this.dismissCurrentNotification(), this.stateTransitionTimer = void 0
                        }
                        this.$state = e
                    }
                }
                ps.TOAST_FRAME_STYLE = ["position", "fixed", "bottom", 15 + rs, "width", 0 + rs, "height", 0 + rs, "border", "none", "z-index", String(2147483647)], ps.TRANSITION_DURATION = 300;
                const ls = "px";
                class ms {
                    constructor(e) {
                        this.controller = e, this.onClose = Ze(this.controller.onClose, this.controller), this.onPinClick = Ze(this.controller.onPinClick, this.controller), this.onContinueBlocking = Ze(this.controller.onContinueBlocking, this.controller), this.onOptionChange = Ze(this.controller.onOptionChange, this.controller), this.onMouseEnter = Ze(this.controller.onMouseEnter, this.controller), this.onMouseLeave = Ze(this.controller.onMouseLeave, this.controller), this.onUserInteraction = Ze(this.controller.onUserInteraction, this.controller), this.renderHead = We.call(this.renderHead, this), this.appendIframe()
                    }
                    appendIframe() {
                        const e = this.frameInjector = new Ye;
                        e.addListener(this.renderHead);
                        const s = e.getFrameElement();
                        s.style.cssText = Xe(ms.initialAlertFrameStyle, !1), this.iframeWidth = this.iframeHeight = 0, s.style.width = s.style.height = 0 + ls, e.inject()
                    }
                    render(e, s, t, a) {
                        var n;
                        this.frameDoc && "complete" === this.frameDoc.readyState ? (this.renderBodyOnLoad(e, s, t), a()) : null === (n = this.frameInjector) || void 0 === n || n.addListener((() => {
                            this.renderBodyOnLoad(e, s, t), a(), requestAnimationFrame((() => {
                                this.updateIframePosition()
                            }))
                        }))
                    }
                    renderHead() {
                        var e;
                        const s = this.frameDoc = null === (e = this.frameInjector) || void 0 === e ? void 0 : e.getFrameElement().contentDocument,
                            t = null == s ? void 0 : s.documentElement.querySelector("head");
                        t && s && (q(H(ns, {}), t), s.addEventListener("click", this.onUserInteraction, !0), s.addEventListener("touchstart", this.onUserInteraction, !0))
                    }
                    renderBodyOnLoad(e, s, t) {
                        const a = this.frameDoc;
                        if (!a) return;
                        q(H(is, {
                            numPopup: e,
                            origDomain: s,
                            destUrl: t
                        }), a.body), this.alertRoot = a.getElementsByClassName("alert")[0], this.pinRoot = a.getElementsByClassName("pin")[0];
                        const n = a.getElementsByClassName("alert__close")[0],
                            i = this.pinRoot,
                            o = a.getElementsByClassName("alert__btn")[0],
                            r = a.getElementsByClassName("alert__select")[0];
                        n.addEventListener("click", this.onClose), i.addEventListener("click", this.onPinClick), o.addEventListener("click", this.onContinueBlocking), r.addEventListener("change", this.onOptionChange), this.alertRoot.addEventListener("mouseenter", this.onMouseEnter), this.alertRoot.addEventListener("mouseleave", this.onMouseLeave), i.addEventListener("mouseenter", this.onMouseEnter), i.addEventListener("mouseleave", this.onMouseLeave), this.collapsed || this.alertRoot.classList.add("alert--show"), this.updatePosition()
                    }
                    $expand() {
                        this.alertRoot.classList.add("alert--show"), this.collapsed = !1, this.updatePosition()
                    }
                    $collapse() {
                        this.alertRoot.classList.remove("alert--show"), this.collapsed = !0, this.updatePosition()
                    }
                    updatePosition() {
                        this.updatePinRootHeight(), this.updateIframePosition()
                    }
                    updatePinRootHeight() {
                        const e = (this.collapsed, 8);
                        this.pinRoot.style.top = e + ls
                    }
                    updateIframePosition() {
                        var e;
                        const s = null === (e = this.frameInjector) || void 0 === e ? void 0 : e.getFrameElement().style;
                        if (s) {
                            const {
                                offsetLeft: e,
                                offsetTop: t,
                                offsetHeight: a
                            } = this.collapsed ? this.pinRoot : this.alertRoot;
                            s.width = (this.iframeWidth -= e - 8) + ls, s.height = (this.iframeHeight = t + a + 8) + ls, s.right = -3 + ls, s.top = (this.collapsed, -3 + ls)
                        }
                    }
                    $destroy() {
                        var e;
                        null === (e = this.frameInjector) || void 0 === e || e.$destroy(), this.frameInjector = null
                    }
                }
                ms.initialAlertFrameStyle = ["position", "fixed", "right", 0 + ls, "top", 0 + ls, "border", "none", "z-index", String(2147483647)];
                class us {
                    constructor(e, s) {
                        this.settingsDao = e, this.$openOptionsPage = s, this.domainToPopupCount = Fe(null), this.$state = 0, this.$expand = We.call(this.$expand, this), this.$collapse = We.call(this.$collapse, this), this.$destroy = We.call(this.$destroy, this), this.notifyAboutSavedSettings = We.call(this.notifyAboutSavedSettings, this), this.toastController = new ps(us.TOAST_DURATION)
                    }
                    scheduleTransition(e, s) {
                        clearTimeout(this.stateTransitionTimer), e ? (this.stateTransitionTimer = Re(e, s), this.timerStart = Date.now(), this.remainingTimeout = s) : this.stateTransitionTimer = this.timerStart = this.remainingTimeout = null
                    }
                    $expand() {
                        this.alertView.$expand(), this.$state = 1, this.scheduleTransition(this.$collapse, us.STATE_TRANSITION_TIMEOUT), this.remainingAfterMouseLeave = null
                    }
                    $collapse() {
                        this.alertView.$collapse(), this.$state = 2, this.scheduleTransition(this.$destroy, us.STATE_TRANSITION_TIMEOUT), this.remainingAfterMouseLeave = null
                    }
                    $destroy() {
                        this.alertView && (this.alertView.$destroy(), this.alertView = null), this.$state = 0, this.scheduleTransition(), this.remainingAfterMouseLeave = null
                    }
                    createAlert(e, s) {
                        const {
                            domainToPopupCount: t
                        } = this, a = Le(t[e]) ? t[e] = 1 : ++t[e];
                        this.alertView || (this.alertView = new ms(this));
                        const n = {
                            origDomain: e,
                            destUrl: s
                        };
                        switch (this.currentAlertData = n, this.alertView.render(a, e, s, (() => {
                            this.renderedAlertData = n
                        })), this.$state) {
                            case 0:
                                this.$state = 1, this.scheduleTransition(this.$collapse, us.STATE_TRANSITION_TIMEOUT);
                                break;
                            case 1:
                                this.scheduleTransition(this.$collapse, us.STATE_TRANSITION_TIMEOUT)
                        }
                    }
                    onMouseEnter() {
                        Ne(this.stateTransitionTimer) && (this.remainingAfterMouseLeave = this.remainingTimeout - (Date.now() - this.timerStart), this.scheduleTransition())
                    }
                    onMouseLeave() {
                        Ne(this.remainingAfterMouseLeave) && (this.scheduleTransition(1 === this.$state ? this.$collapse : this.$destroy, Math.max(this.remainingAfterMouseLeave, us.HOVER_TIMEOUT_INCR)), this.remainingAfterMouseLeave = null)
                    }
                    onClose() {
                        this.$collapse()
                    }
                    onPinClick() {
                        switch (this.$state) {
                            case 2:
                                this.$expand();
                                break;
                            case 1:
                                this.$collapse()
                        }
                    }
                    onContinueBlocking() {
                        this.$destroy()
                    }
                    onOptionChange(e) {
                        switch (e.target.value) {
                            case "1":
                                this.settingsDao.setListItem("allowed", this.renderedAlertData.origDomain, this.notifyAboutSavedSettings);
                                break;
                            case "2":
                                this.settingsDao.setListItem("silenced", this.renderedAlertData.origDomain, this.notifyAboutSavedSettings);
                                break;
                            case "3":
                                this.$openOptionsPage(), this.onOptionChangeOperationCompletion();
                                break;
                            case "4":
                                window.open(this.renderedAlertData.destUrl, "_blank"), this.onOptionChangeOperationCompletion()
                        }
                        e.preventDefault()
                    }
                    onUserInteraction() {
                        this.scheduleTransition()
                    }
                    onOptionChangeOperationCompletion() {
                        this.$destroy()
                    }
                    notifyAboutSavedSettings() {
                        const {
                            toastController: e
                        } = this;
                        e && e.showNotification(Me.getMessage("settings_saved")), this.onOptionChangeOperationCompletion()
                    }
                }
                us.STATE_TRANSITION_TIMEOUT = 1e4, us.HOVER_TIMEOUT_INCR = 2e3, us.TOAST_DURATION = 2e3;
                const ds = new us(m, (() => {
                        window.open(He, "__popupBlocker_options_page__")
                    })),
                    gs = new class {
                        constructor(e, s) {
                            this.settingsDao = e, this.alertController = s, this.domain = window.location.hostname, this.envIsFirefoxBrowserExt = "undefined" != typeof InstallTrigger && document.currentScript
                        }
                        originIsAllowed(e = this.domain) {
                            return this.settingsDao.isMemberOf("allowed", e)
                        }
                        originIsSilenced() {
                            return this.settingsDao.isMemberOf("silenced", this.domain)
                        }
                        showAlert(e, s) {
                            setTimeout((() => {
                                this.alertController.createAlert(e, s)
                            }))
                        }
                        getInstanceID() {
                            return this.settingsDao.getInstanceID()
                        }
                        expose() {
                            const e = `__PB${Math.floor(1e9*Math.random())}__`;
                            return this.envIsFirefoxBrowserExt ? (this.originIsAllowed = this.originIsAllowed.bind(this), this.originIsSilenced = this.originIsSilenced.bind(this), this.showAlert = this.showAlert.bind(this), unsafeWindow[e] = cloneInto(this, unsafeWindow, {
                                cloneFunctions: !0
                            })) : unsafeWindow[e] = this, e
                        }
                    }(m, ds),
                    cs = gs.expose();
                m.migrateDataIfNeeded();

                function _s(e, s) {
                    const t = !1,
                        {
                            call: a,
                            apply: n,
                            toString: i
                        } = window.Function.prototype,
                        o = e => i.call(e).includes("[native code]"),
                        r = {};
                    class p {
                        constructor(e) {
                            this.original = e
                        }
                    }
                    const l = "now" in performance ? () => performance.timing.navigationStart + performance.now() : Date.now,
                        m = (() => {
                            let e = window;
                            for (; e.parent !== e;) e = e.parent;
                            const s = () => {};
                            return {
                                call: s,
                                callEnd: s,
                                closeAllGroup: s,
                                print: s,
                                connect: e => e,
                                throwMessage: function(e, s) {
                                    throw s
                                }
                            }
                        })();
                    var u = {
                        en: {
                            show_popup: {
                                message: "Show %destUrl%"
                            },
                            continue_blocking: {
                                message: "Continue blocking"
                            },
                            allow_from: {
                                message: "Allow popups for %origDomain%"
                            },
                            manage_pref: {
                                message: "Manage preferences..."
                            },
                            popup_text: {
                                message: "AdGuard prevented this website from opening %numPopup% pop-up windows"
                            },
                            options: {
                                message: "Options"
                            },
                            silence_noti: {
                                message: "Don't show this message on %origDomain%"
                            },
                            site_input_ph: {
                                message: "Enter site name"
                            },
                            add_site: {
                                message: "Add a site"
                            },
                            add: {
                                message: "Add"
                            },
                            allowed_empty: {
                                message: "List of allowed sites is empty"
                            },
                            allowed: {
                                message: "Allowed"
                            },
                            silenced_empty: {
                                message: "List of silenced sites is empty"
                            },
                            silenced: {
                                message: "Silenced"
                            },
                            allowed_tooltip: {
                                message: "Popups will be allowed for domains listed here."
                            },
                            silenced_tooltip: {
                                message: "Notifications for blocked popups will not be shown for domains listed here."
                            },
                            installFrom: {
                                message: "Install from <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Step 3: Refresh this page to get to the userscript settings"
                            },
                            noinst_ignore_if_ag: {
                                message: "If you installed AdGuard for Windows, you can ignore this step as the Popup Blocker userscript comes pre-installed."
                            },
                            noinst_rec: {
                                message: "(Recommended)"
                            },
                            please_wait: {
                                message: "Please wait, detecting the Popup Blocker"
                            },
                            noinst_special_prog: {
                                message: "To use a userscript, you first need a special program or extension that runs userscript."
                            },
                            noinst_subtitle: {
                                message: "AdGuard Popup Blocker userscript is not installed. Please see the instruction below."
                            },
                            homepage: {
                                message: "Homepage"
                            },
                            noinst_step_1: {
                                message: "Step 1: Install a userscript manager"
                            },
                            noinst_step_2: {
                                message: "Step 2: Userscript"
                            },
                            extension_name: {
                                message: "Popup Blocker by AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Popup Blocker",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blocks pop-up ads on web pages"
                            },
                            on_navigation_by_popunder: {
                                message: "This transition to the new page is likely to be caused by a pop-under. Do you wish to continue?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Popup Blocker aborted a script execution to prevent background redirect",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Popup Blocker is on duty"
                            },
                            ext_disabled: {
                                message: "Popup Blocker is disabled for $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Popup Blocker is disabled for this domain"
                            },
                            settings_saved: {
                                message: "Settings saved"
                            }
                        },
                        ar: {
                            show_popup: {
                                message: "%destUrl%اظهار"
                            },
                            continue_blocking: {
                                message: "متابعة الحظر"
                            },
                            allow_from: {
                                message: "%origDomain%السماح بالنوافذ المنبثقة على"
                            },
                            manage_pref: {
                                message: "...أداره التفضيلات"
                            },
                            popup_text: {
                                message: "النوافذالمنبثقة%numPopup% منع ادجارد موقع الويب هذا من فتح"
                            },
                            options: {
                                message: "الخيارات"
                            },
                            silence_noti: {
                                message: "%origDomain%عدم إظهار هذه الرسالة على"
                            },
                            site_input_ph: {
                                message: "ادخل اسم الموقع"
                            },
                            add_site: {
                                message: "إضافة موقع"
                            },
                            add: {
                                message: "إضافة"
                            },
                            allowed_empty: {
                                message: "قائمه الاستثناءات فارعة"
                            },
                            allowed: {
                                message: "الاستثناءات "
                            },
                            silenced_empty: {
                                message: "قائمة المواقع التي تحتوي على إشعارات صامتة فارغة"
                            },
                            silenced: {
                                message: "صامت"
                            },
                            allowed_tooltip: {
                                message: "سيتم السماح بالنوافذ المنبثقة على المواقع المدرجة هنا"
                            },
                            silenced_tooltip: {
                                message: "لن يتم عرض إشعارات النوافذ المنبثقة الممنوعة على مواقع الويب المدرجة هنا"
                            },
                            installFrom: {
                                message: "<a>%name%</a>التثبيت من"
                            },
                            noinst_step_3: {
                                message: "الخطوة 3: قم بتحديث هذه الصفحة للوصول إلى إعدادات userscript"
                            },
                            noinst_ignore_if_ag: {
                                message: "إذا كان لديك برنامج ادجوارد مثبتًا على الويندوز ، فيمكنك تجاهل هذه الخطوة حيث يأتي مانع النوافذ المنبثقة مثبتة مسبقًا"
                            },
                            noinst_rec: {
                                message: "(موصى به)"
                            },
                            please_wait: {
                                message: "يرجى الانتظار للكشف عن مانع ظهور النوافذ المنبثقة"
                            },
                            noinst_special_prog: {
                                message: "أولاً وقبل كل شيء, لاستخدام userscript تحتاج إلى برنامج خاص أو ملحق الذي يستطيع تشغيل userscript."
                            },
                            noinst_subtitle: {
                                message: "لم يتم تثبيت يوزر سكربت ادجوارد مانع النوافذ المنبثقة  يرجى الاطلاع على التعليمات أدناه"
                            },
                            homepage: {
                                message: "الصفحه الرئيسيه"
                            },
                            noinst_step_1: {
                                message: "الخطوة 1: تثبيت مديريوزر سكربت"
                            },
                            noinst_step_2: {
                                message: "الخطوة 2: يوزر سكربت"
                            },
                            extension_name: {
                                message: "AdGuardمانع النوافذ المنبثقة من قبل"
                            },
                            userscript_name: {
                                message: "مانع النوافذ المنبثقة AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "لحظر الإعلانات المنبثقة على صفحات الويب"
                            },
                            on_navigation_by_popunder: {
                                message: "من المحتمل ان يكون هذا الانتقال إلى الصفحة الجديدة ناتجا عن الإطار المنبثق. هل ترغب في المتابعة ؟",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "مانع النوافذ المنبثقة احبط تنفيذ script لمنع أعاده توجيه الخلفية",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "مانع النوافذ المنبثقة يعمل في الخدمة"
                            },
                            ext_disabled: {
                                message: "$ DOMAIN $تم تعطيل مانع النوافذ المنبثقة بـ",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "لا يمكن تشغيل مانع النوافذ المنبثقة على هذا النطاق"
                            },
                            settings_saved: {
                                message: "الإعدادات المحفوظة"
                            }
                        },
                        be: {
                            show_popup: {
                                message: "Паказаць %destUrl%"
                            },
                            continue_blocking: {
                                message: "Працягнуць блакаванне"
                            },
                            allow_from: {
                                message: "Дазволіць усплывальныя вокны на %origDomain%"
                            },
                            manage_pref: {
                                message: "Кіраваць наладамі..."
                            },
                            popup_text: {
                                message: "AdGuard запабег паказ %numPopup% усплывальных вокнаў на гэтым сайце"
                            },
                            options: {
                                message: "Опцыі"
                            },
                            silence_noti: {
                                message: "Не паказваць гэта паведамленне на %origDomain%"
                            },
                            site_input_ph: {
                                message: "Увядзіце імя сайта"
                            },
                            add_site: {
                                message: "Дадаць сайт"
                            },
                            add: {
                                message: "Дадаць"
                            },
                            allowed_empty: {
                                message: "Спіс выняткаў пусты"
                            },
                            allowed: {
                                message: "Выняткі"
                            },
                            silenced_empty: {
                                message: "Спіс сайтаў з адключанымі апавяшчэннямі пусты"
                            },
                            silenced: {
                                message: "Без апавяшчэнняў"
                            },
                            allowed_tooltip: {
                                message: "Усплывальныя вокны будуць дазволены на сайтах, пералічаных тут."
                            },
                            silenced_tooltip: {
                                message: "Апавяшчэнні пра заблакаваныя ўсплывальныя вокны не будуць адлюстроўвацца на сайтах, пералічаных тут."
                            },
                            installFrom: {
                                message: "Усталяваць з <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Крок 3: Абнавіце гэту старонку, каб перайсці да налад карыстацкага скрыпту"
                            },
                            noinst_ignore_if_ag: {
                                message: "Калі вы ўсталявалі AdGuard для Windows, вы можаце праігнараваць гэты крок, бо Блакавальнік усплывальнай рэкламы ўжо ўсталяваны."
                            },
                            noinst_rec: {
                                message: "(Рэкамендуецца)"
                            },
                            please_wait: {
                                message: "Калі ласка, пачакайце, спроба выявіць Блакавальнік усплывальнай рэкламы"
                            },
                            noinst_special_prog: {
                                message: "Для выкарыстання скрыпту вам, перадусім, патрэбна адмысловая праграма (ці пашырэнне), якая можа працаваць з карыстацкімі скрыптамі."
                            },
                            noinst_subtitle: {
                                message: "Блакавальнік усплывальнай рэкламы AdGuard не пастаўлены. Калі ласка, звярніцеся да інструкцыі ніжэй."
                            },
                            homepage: {
                                message: "Хатняя старонка"
                            },
                            noinst_step_1: {
                                message: "Крок 1: усталюйце праграму для кіравання карыстацкімі скрыптамі"
                            },
                            noinst_step_2: {
                                message: "Крок 2: карыстацкі скрыпт"
                            },
                            extension_name: {
                                message: "Блакавальнік усплывальнай рэкламы ад AdGuard"
                            },
                            userscript_name: {
                                message: "Блакавальнік усплывальнай рэкламы ад AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Блакуе ўсплывальную рэкламу на старонках"
                            },
                            on_navigation_by_popunder: {
                                message: "Гэты пераход на новую старонку найхутчэй выкліканы поп-андэрам. Усё адно працягнуць?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Блакавальнік усплывальнай рэкламы перапыніў выкананне скрыпту, каб перадухіліць фонавае пераадрасаванне",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Блакавальнік усплывальнай рэкламы гатоў да працы"
                            },
                            ext_disabled: {
                                message: "Блакавальнік усплывальнай рэкламы адключаны для $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Блакавальнік усплывальнай рэкламы не працуе на гэтым дамене"
                            },
                            settings_saved: {
                                message: "Налады захаваны"
                            }
                        },
                        cs: {
                            show_popup: {
                                message: "Zobrazit %destUrl%"
                            },
                            continue_blocking: {
                                message: "Pokračovat v blokování"
                            },
                            allow_from: {
                                message: "Povolit vyskakovací okna pro %origDomain%"
                            },
                            manage_pref: {
                                message: "Spravovat předvolby"
                            },
                            popup_text: {
                                message: "AdGuard zabránil tomu, aby tato webová stránka otevřela vyskakovací okna: %numPopup%"
                            },
                            options: {
                                message: "Možnosti"
                            },
                            silence_noti: {
                                message: "Tuto zprávu nezobrazovat na %origDomain%"
                            },
                            site_input_ph: {
                                message: "Zadejte název stránky"
                            },
                            add_site: {
                                message: "Přidat stránku"
                            },
                            add: {
                                message: "Přidat"
                            },
                            allowed_empty: {
                                message: "Seznam výjimek je prázdný"
                            },
                            allowed: {
                                message: "Výjimky"
                            },
                            silenced_empty: {
                                message: "Seznam webových stránek s tichými oznámeními je prázdný"
                            },
                            silenced: {
                                message: "Umlčeno"
                            },
                            allowed_tooltip: {
                                message: "Vyskakovací okna jsou povolena na webových stránkách uvedených zde."
                            },
                            silenced_tooltip: {
                                message: "Oznámení o blokovaných vyskakovacích oknech se nezobrazí na zde uvedených webových stránkách."
                            },
                            installFrom: {
                                message: "Instalovat z <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Krok 3: Obnovte tuto stránku, abyste se dostali k nastavení uživatelských skriptů"
                            },
                            noinst_ignore_if_ag: {
                                message: "Pokud máte nainstalovanou službu AdGuard for Windows, můžete tento krok ignorovat. Uživatelský skript blokování vyskakovacích oken přichází předem nainstalovaný."
                            },
                            noinst_rec: {
                                message: "(Doporučeno)"
                            },
                            please_wait: {
                                message: "Čekejte prosím, zjišťuji Blokátor vyskakovacích oken"
                            },
                            noinst_special_prog: {
                                message: "Chcete-li používat uživatelský skript, potřebujete nejprve speciální program nebo rozšíření, které spustí uživatelský skript."
                            },
                            noinst_subtitle: {
                                message: "Uživatelský skript pro blokování vyskakovacích oken AdGuard není nainstalován. Pokyny naleznete níže."
                            },
                            homepage: {
                                message: "Domovská stránka"
                            },
                            noinst_step_1: {
                                message: "Krok 1: Nainstalujte správce uživatelských skriptů"
                            },
                            noinst_step_2: {
                                message: "Krok 2: Uživatelský skript"
                            },
                            extension_name: {
                                message: "AdGuard blokátor vyskakovacích oken"
                            },
                            userscript_name: {
                                message: "AdGuard blokátor vyskakovacích oken",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokuje vyskakovací reklamy na webových stránkách"
                            },
                            on_navigation_by_popunder: {
                                message: "Tento přechod na novou stránku bude pravděpodobně způsoben pop-under. Chcete pokračovat?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Blokátor vyskakovacích oken zrušil spuštění skriptu, aby zabránil přesměrování na pozadí",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Blokování vyskakovacích oken je v provozu"
                            },
                            ext_disabled: {
                                message: "Blokování vyskakovacích oken je zakázáno pro $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Blokování vyskakovacích oken nemůže běžet na této doméně"
                            },
                            settings_saved: {
                                message: "Nastavení uložena"
                            }
                        },
                        da: {
                            show_popup: {
                                message: "Vis %destUrl%"
                            },
                            continue_blocking: {
                                message: "Fortsæt blokering"
                            },
                            allow_from: {
                                message: "Tillad pop-op'er for %origDomain%"
                            },
                            manage_pref: {
                                message: "Håndtere præferencer..."
                            },
                            popup_text: {
                                message: "AdGuard forhindrede dette websted i at åbne %numPopup% pop op-vinduer"
                            },
                            options: {
                                message: "Valgmuligheder"
                            },
                            silence_noti: {
                                message: "Vis ikke denne meddelelse på %origDomain%"
                            },
                            site_input_ph: {
                                message: "Angiv webstedsnavn"
                            },
                            add_site: {
                                message: "Tilføj et websted"
                            },
                            add: {
                                message: "Tilføj"
                            },
                            allowed_empty: {
                                message: "Hvidliste over websteder er tom"
                            },
                            allowed: {
                                message: "Hvidlistet"
                            },
                            silenced_empty: {
                                message: "Listen over websteder med tavse notifikationer er tom"
                            },
                            silenced: {
                                message: "Gjort tavse"
                            },
                            allowed_tooltip: {
                                message: "Pop-ups vil være tilladt på de websteder, som er angivet her."
                            },
                            silenced_tooltip: {
                                message: "Notifikationer om blokerede pop-ups vises ikke på de websteder, som er angivet her."
                            },
                            installFrom: {
                                message: "Installér fra <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Trin 3: Opfrisk siden for at kunne tilgå userscript-indstillingerne"
                            },
                            noinst_ignore_if_ag: {
                                message: "Har du AdGuard til Windows installeret, kan du ignorere dette trin, da Popup Blocker-userscriptet er forudinstalleret."
                            },
                            noinst_rec: {
                                message: "(Anbefalet)"
                            },
                            please_wait: {
                                message: "Afvent venligst, detekterer Popup Blocker"
                            },
                            noinst_special_prog: {
                                message: "For brug af et userscript kræves først og fremmest et særligt program/udvidelse, der kan afvikle userscripts."
                            },
                            noinst_subtitle: {
                                message: "AdGuard Popup Blocker-userscriptet er ikke installeret. Tjek nedenstående vejledning."
                            },
                            homepage: {
                                message: "Hjemmeside"
                            },
                            noinst_step_1: {
                                message: "Trin 1: Installér en userscript-håndtering"
                            },
                            noinst_step_2: {
                                message: "Trin 2: Userscript"
                            },
                            extension_name: {
                                message: "Popup Blocker fra AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Popup Blocker",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokerer pop-op annoncer på websider"
                            },
                            on_navigation_by_popunder: {
                                message: "Denne overgang til den nye side skyldes sandsynligvis en pop-under. Fortsæt?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Popup Blocker afbrød en scripteksekvering for at forhindre baggrundsomdirigering",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Popup Blocker er på vagt"
                            },
                            ext_disabled: {
                                message: "Popup Blocker er deaktiveret for $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Popup Blocker er deaktiveret på dette domæne"
                            },
                            settings_saved: {
                                message: "Indstillinger gemt"
                            }
                        },
                        de: {
                            show_popup: {
                                message: "%destUrl% anzeigen"
                            },
                            continue_blocking: {
                                message: "Weiterhin sperren"
                            },
                            allow_from: {
                                message: "Pop-ups auf %origDomain% zulassen"
                            },
                            manage_pref: {
                                message: "Einstellungen verwalten …"
                            },
                            popup_text: {
                                message: "AdGuard hat auf dieser Website %numPopup% Pop-up-Fenster verhindert"
                            },
                            options: {
                                message: "Optionen"
                            },
                            silence_noti: {
                                message: "Diese Nachricht auf %origDomain% nicht anzeigen"
                            },
                            site_input_ph: {
                                message: "Seitenname eingeben"
                            },
                            add_site: {
                                message: "Eine Seite hinzufügen"
                            },
                            add: {
                                message: "Hinzufügen"
                            },
                            allowed_empty: {
                                message: "Liste der Ausnahmen ist leer"
                            },
                            allowed: {
                                message: "Ausnahmen"
                            },
                            silenced_empty: {
                                message: "Liste der Websites ohne Benachrichtigungen ist leer"
                            },
                            silenced: {
                                message: "Ausgeschaltet"
                            },
                            allowed_tooltip: {
                                message: "Pop-ups werden für die hier aufgeführten Domains zugelassen."
                            },
                            silenced_tooltip: {
                                message: "Benachrichtigungen für gesperrte Pop-ups werden auf den hier aufgeführten Websites nicht angezeigt."
                            },
                            installFrom: {
                                message: "Von <a>%name%</a> installieren"
                            },
                            noinst_step_3: {
                                message: "Schritt 3: Aktualisieren Sie diese Seite, um zu den Benutzerskript-Einstellungen zu übergehen"
                            },
                            noinst_ignore_if_ag: {
                                message: "Wenn Sie AdGuard für Windows installiert haben, können Sie diesen Schritt ignorieren, da das Benutzerskript für den Pop-up-Blocker bereits vorinstalliert ist."
                            },
                            noinst_rec: {
                                message: "(Empfohlen)"
                            },
                            please_wait: {
                                message: "Bitte warten Sie, der Pop-up-Blocker wird erkannt"
                            },
                            noinst_special_prog: {
                                message: "Um ein Benutzerskript verwendende können, benötigen Sie ein spezielles Programm, das Benutzerskripte ausführt."
                            },
                            noinst_subtitle: {
                                message: "AdGuard Pop-up-Blocker Benutzerskript ist nicht installiert. Bitte beachten Sie die folgende Anleitung."
                            },
                            homepage: {
                                message: "Startseite"
                            },
                            noinst_step_1: {
                                message: "Schritt 1: Installieren Sie einen Benutzerskript-Manager"
                            },
                            noinst_step_2: {
                                message: "Schritt 2: Benutzerskript"
                            },
                            extension_name: {
                                message: "Pop-up-Blocker von AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Pop-up-Blocker",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blockiert Anzeige-Pop-ups auf Websites"
                            },
                            on_navigation_by_popunder: {
                                message: "Diese Seiten-Navigation wird wahrscheinlich durch ein Pop-under verursacht. Möchten Sie fortfahren?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Pop-up-Blocker hat eine Skript-Ausführung abgebrochen, um eine Hintergrundumleitung zu verhindern",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Pop-up-Blocker verrichtet seinen Dienst"
                            },
                            ext_disabled: {
                                message: "Der Pop-up-Blocker ist für $DOMAIN$ deaktiviert",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Pop-up-Blocker funktioniert auf dieser Domain nicht"
                            },
                            settings_saved: {
                                message: "Einstellungen gespeichert"
                            }
                        },
                        el: {
                            show_popup: {
                                message: "Εμφάνιση %destUrl%"
                            },
                            continue_blocking: {
                                message: "Συνέχεια αποκλεισμού"
                            },
                            allow_from: {
                                message: "Να επιτρέπονται τα αναδυόμενα παράθυρα για το %origDomain%"
                            },
                            manage_pref: {
                                message: "Διαχείριση προτιμήσεων..."
                            },
                            popup_text: {
                                message: "Το AdGuard εμπόδισε αυτόν τον ιστότοπο να ανοίξει %numPopup% αναδυόμενα παράθυρα"
                            },
                            options: {
                                message: "Επιλογές"
                            },
                            silence_noti: {
                                message: "Να μην εμφανίζεται αυτό το μήνυμα στο %origDomain%"
                            },
                            site_input_ph: {
                                message: "Εισαγάγετε όνομα ιστότοπου"
                            },
                            add_site: {
                                message: "Προσθήκη ιστοσελίδας"
                            },
                            add: {
                                message: "Προσθήκη"
                            },
                            allowed_empty: {
                                message: "Η λίστα των επιτρεπόμενων ιστότοπων είναι κενή"
                            },
                            allowed: {
                                message: "Επιτρέπεται"
                            },
                            silenced_empty: {
                                message: "Η λίστα των ιστότοπων σε σίγαση είναι κενή"
                            },
                            silenced: {
                                message: "Σίγαση"
                            },
                            allowed_tooltip: {
                                message: "Τα αναδυόμενα παράθυρα θα επιτρέπονται στους τομείς που αναφέρονται εδώ."
                            },
                            silenced_tooltip: {
                                message: "Οι ειδοποιήσεις για αποκλεισμένα αναδυόμενα παράθυρα δεν θα εμφανίζονται για τομείς που αναφέρονται εδώ."
                            },
                            installFrom: {
                                message: "Εγκατάσταση από {$startLink}{$name}{$endLink}"
                            },
                            noinst_step_3: {
                                message: "Βήμα 3: Ανανεώστε αυτήν τη σελίδα για να μεταβείτε στις ρυθμίσεις του userscript"
                            },
                            noinst_ignore_if_ag: {
                                message: "Εάν εγκαταστήσατε το AdGuard για Windows, μπορείτε να αγνοήσετε αυτό το βήμα καθώς το userscript για αποκλεισμό αναδυόμενων παραθύρων είναι προεγκατεστημένο."
                            },
                            noinst_rec: {
                                message: "(Συνιστάται)"
                            },
                            please_wait: {
                                message: "Παρακαλώ περιμένετε, ανίχνευση για Αποκλεισμό αναδυόμενων παραθύρων"
                            },
                            noinst_special_prog: {
                                message: "Πρώτα απ'όλα, για να χρησιμοποιήσετε ένα userscript χρειάζεστε ένα ειδικό πρόγραμμα ή επέκταση που εκτελεί userscripts."
                            },
                            noinst_subtitle: {
                                message: "Το userscript αποκλεισμός αναδυόμενων παραθύρων AdGuard δεν είναι εγκατεστημένο. Ανατρέξτε στις παρακάτω οδηγίες."
                            },
                            homepage: {
                                message: "Αρχική σελίδα"
                            },
                            noinst_step_1: {
                                message: "Βήμα 1: Εγκαταστήστε έναν διαχειριστή userscript"
                            },
                            noinst_step_2: {
                                message: "Βήμα 2: Userscript"
                            },
                            extension_name: {
                                message: "Αποκλεισμός αναδυόμενων παραθύρων από το AdGuard"
                            },
                            userscript_name: {
                                message: "Αποκλεισμός αναδυόμενων παραθύρων AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Αποκλείει αναδυόμενες διαφημίσεις σε ιστοσελίδες"
                            },
                            on_navigation_by_popunder: {
                                message: "Αυτή η μετάβαση σε νέα σελίδα είναι πιθανό να προκαλείται από ένα αναδυόμενο παράθυρο. Θέλετε να συνεχίσετε;",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Το Αποκλεισμός αναδυόμενων παραθύρων ακύρωσε μια εκτέλεση σεναρίου για να αποτρέψει την ανακατεύθυνση του φόντου",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Το Αποκλεισμός αναδυόμενων παραθύρων είναι σε λειτουργία"
                            },
                            ext_disabled: {
                                message: "Ο Αποκλεισμός αναδυόμενων παραθύρων είναι απενεργοποιημένος για το $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Ο Αποκλεισμός αναδυόμενων παραθύρων είναι απενεργοποιημένος για αυτόν τον τομέα"
                            },
                            settings_saved: {
                                message: "Οι ρυθμίσεις αποθηκεύτηκαν"
                            }
                        },
                        es: {
                            show_popup: {
                                message: "Mostrar %destUrl%"
                            },
                            continue_blocking: {
                                message: "Continuar bloqueando"
                            },
                            allow_from: {
                                message: "Permitir ventanas emergentes en %origDomain%"
                            },
                            manage_pref: {
                                message: "Administrar preferencias..."
                            },
                            popup_text: {
                                message: "AdGuard impidió que este sitio web abriera %numPopup% ventanas emergentes"
                            },
                            options: {
                                message: "Opciones"
                            },
                            silence_noti: {
                                message: "No mostrar este mensaje en %origDomain%"
                            },
                            site_input_ph: {
                                message: "Ingrese el nombre del sitio"
                            },
                            add_site: {
                                message: "Añadir un sitio"
                            },
                            add: {
                                message: "Añadir"
                            },
                            allowed_empty: {
                                message: "La lista de permitido está vacía"
                            },
                            allowed: {
                                message: "Permitido"
                            },
                            silenced_empty: {
                                message: "La lista de sitios con notificaciones silenciadas está vacía"
                            },
                            silenced: {
                                message: "Silenciado"
                            },
                            allowed_tooltip: {
                                message: "Las ventanas emergentes estarán permitidas en los sitios web enumerados aquí."
                            },
                            silenced_tooltip: {
                                message: "Las notificaciones de ventanas emergentes bloqueadas no se mostrarán en los sitios web enumerados aquí."
                            },
                            installFrom: {
                                message: "Instalar desde <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Paso 3: Actualice esta página para acceder a la configuración del userscript"
                            },
                            noinst_ignore_if_ag: {
                                message: "Si tienes instalado AdGuard para Windows, puedes ignorar este paso ya que el userscript Popup Blocker viene preinstalado."
                            },
                            noinst_rec: {
                                message: "(recomendado)"
                            },
                            please_wait: {
                                message: "Espere por favor, detectando Popup Blocker"
                            },
                            noinst_special_prog: {
                                message: "En primer lugar, para usar un userscript necesitas un programa especial que ejecute el userscript."
                            },
                            noinst_subtitle: {
                                message: "AdGuard Popup Blocker no es instalado. Por favor, vea el manual abajo."
                            },
                            homepage: {
                                message: "Página de inicio"
                            },
                            noinst_step_1: {
                                message: "Paso 1: Instale el gestor de userscript"
                            },
                            noinst_step_2: {
                                message: "Paso 2: Userscript"
                            },
                            extension_name: {
                                message: "Popup Blocker por AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Popup Blocker",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Bloquea anuncios emergentes en sitios web"
                            },
                            on_navigation_by_popunder: {
                                message: "Es probable que esta transición a la nueva página sea causada por un elemento emergente. ¿Deseas continuar?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Popup Blocker canceló la ejecución de un script para evitar la redirección en segundo plano",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Popup Blocker está en servicio"
                            },
                            ext_disabled: {
                                message: "Popup Blocker está deshabilitado para $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Popup Blocker está deshabilitado para este dominio"
                            },
                            settings_saved: {
                                message: "Ajustes guardados"
                            }
                        },
                        fa: {
                            show_popup: {
                                message: "نمایش %destUrl%"
                            },
                            continue_blocking: {
                                message: "ادامه مسدودسازی"
                            },
                            allow_from: {
                                message: "اجازه پاپ آپ ها در %origDomain%"
                            },
                            manage_pref: {
                                message: "مدیریت اولویت ها..."
                            },
                            popup_text: {
                                message: "AdGuard این وبسایت را از بازکردن %numPopup% پنجره پاپ آپ جلوگیری کرد"
                            },
                            options: {
                                message: "گزینه ها"
                            },
                            silence_noti: {
                                message: "این پیام را نشان نده در %origDomain%"
                            },
                            site_input_ph: {
                                message: "نام سایت را وارد کنید"
                            },
                            add_site: {
                                message: "افزودن یک سایت"
                            },
                            add: {
                                message: "افزودن"
                            },
                            allowed_empty: {
                                message: "لیست استثناها خالی است"
                            },
                            allowed: {
                                message: "استثناها"
                            },
                            silenced_empty: {
                                message: "لیست وبسایت ها با اطلاع رسانی خاموش شده،خالی است"
                            },
                            silenced: {
                                message: "خاموش شده"
                            },
                            allowed_tooltip: {
                                message: "پاپ آپ برای وبسایت هایی که در اینجا لیست شده،اجازه داده می شود."
                            },
                            silenced_tooltip: {
                                message: "اطلاع رسانی پاپ آپ مسدود شده برای وبسایت های لیست شده در اینجا نمایش داده نمیشود."
                            },
                            installFrom: {
                                message: "نصب از <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "گام 3:برای دریافت تنظیمات یوزراسکریپت این صفحه را تازه سازی کنید"
                            },
                            noinst_ignore_if_ag: {
                                message: "اگر شما AdGuard for Windows را نصب کرده اید، شما میتوانید این گام را چشمپوشی کنید چون یوزراسکریپت مسدودساز پاپ آپ از پیش نصب شده است."
                            },
                            noinst_rec: {
                                message: "(توصیه شده)"
                            },
                            please_wait: {
                                message: "منتظر بمانید،درحال تشخیص مسدودساز پاپ آپ"
                            },
                            noinst_special_prog: {
                                message: "اول از همه برای استفاده از یوزر اسکریپت نیاز به برنامه ویژه یا افزونه ای است که بتواند آن را اِجرا کند است."
                            },
                            noinst_subtitle: {
                                message: "یوزراسکریپت مسدودساز پاپ آپ AdGuard نصب نشده است. لطفا دستور العمل را در زیر مشاهده کنید."
                            },
                            homepage: {
                                message: "صفحه خانگی"
                            },
                            noinst_step_1: {
                                message: "گام 1:نصب مدیر یوزر اسکریپت"
                            },
                            noinst_step_2: {
                                message: "گام 2: یوزر اسکریپت"
                            },
                            extension_name: {
                                message: "مسدودساز پاپ-آپ AdGuard"
                            },
                            userscript_name: {
                                message: "مسدودساز پاپ-آپ AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "مسدودسازی تبلیغات پاپ آپ در صفحات وب."
                            },
                            on_navigation_by_popunder: {
                                message: "انتقال به این صفحه جدید احتمالا بخاطر یه پاپ-آندر انجام شده است. میخواهید ادامه دهید؟",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "مسدودساز پاپ-آپ اجرای کد را لغو کرده تا از ریدایرکت جبلوگیری شود",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "مسدودساز پاپ آپ در حال انجام وظیفه است"
                            },
                            ext_disabled: {
                                message: "مسدودساز پاپ آپ برای $DOMAIN$ غیر فعال شده است",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "مسدودساز پاپ آپ نمیتواند در این دامنه اجرا شود"
                            },
                            settings_saved: {
                                message: "تنظيمات ذخیره شد"
                            }
                        },
                        fi: {
                            show_popup: {
                                message: "Avaa %destUrl%"
                            },
                            continue_blocking: {
                                message: "Jatka estoa"
                            },
                            allow_from: {
                                message: "Salli ponnahdukset verkkotunnukselta %origDomain%"
                            },
                            manage_pref: {
                                message: "Hallinnoi asetuksia..."
                            },
                            popup_text: {
                                message: "AdGuard esti tätä verkkosivustoa avaamasta %numPopup% ponnahdusta"
                            },
                            options: {
                                message: "Valinnat"
                            },
                            silence_noti: {
                                message: "Älä näytä tätä viestiä sivustolla %origDomain%"
                            },
                            site_input_ph: {
                                message: "Syötä sivuston nimi"
                            },
                            add_site: {
                                message: "Lisää sivusto"
                            },
                            add: {
                                message: "Lisää"
                            },
                            allowed_empty: {
                                message: "Lista on tyhjä"
                            },
                            allowed: {
                                message: "Sallitut"
                            },
                            silenced_empty: {
                                message: "Lista on tyjä"
                            },
                            silenced: {
                                message: "Mykistetty"
                            },
                            allowed_tooltip: {
                                message: "Tässä listattujen verkkotunnusten ponnahdukset sallitaan."
                            },
                            silenced_tooltip: {
                                message: "Tämän listan verkkotunnuksissa estetyistä ponnahduksista ei näytetä estoilmoituksia."
                            },
                            installFrom: {
                                message: "Asenna kohteesta <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Vaihe 3: Päivitä tämä sivu saadaksesi käyttäjäskriptin asetukset"
                            },
                            noinst_ignore_if_ag: {
                                message: "Jos asensit AdGuardin Windowsille, voit ohittaa tämän vaiheen, koska Ponnahdusesto-käyttäjäskripti sisältyy siihen."
                            },
                            noinst_rec: {
                                message: "(suositeltu)"
                            },
                            please_wait: {
                                message: "Odota hetki, Ponnahdusestoa havaitaan"
                            },
                            noinst_special_prog: {
                                message: "Käyttääksesi userscript-laajennuksia, tarvitset erityisesti niiden suorittamiseen tarkoitetun ohjelmiston tai laajennuksen."
                            },
                            noinst_subtitle: {
                                message: "AdGuard Ponnahdusesto -käyttäjäskriptiä ei ole asennettu. Katso ohjeet alta."
                            },
                            homepage: {
                                message: "Verkkosivusto"
                            },
                            noinst_step_1: {
                                message: "Vaihe 1: Asenna käyttäjäskriptien hallintamanageri"
                            },
                            noinst_step_2: {
                                message: "Vaihe 2: Käyttäjäskripti"
                            },
                            extension_name: {
                                message: "Ponnahdusesto AdGuardilta"
                            },
                            userscript_name: {
                                message: "AdGuard Ponnahdusesto",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Estää verkkosivujen ponnahdusmainokset."
                            },
                            on_navigation_by_popunder: {
                                message: "Siirtyminen toiselle sivulle johtui todennäköisesti taustalle piilottuneesta ponnahduksesta. Haluatko jatkaa?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Ponnahdusesto keskeytti komentosarjan estääkseen taustalla tapahtuvan uudelleenohjauksen",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Ponnahdusesto on käytössä"
                            },
                            ext_disabled: {
                                message: "Ponnahdusesto on poistettu käytöstä verkkotunnusessa $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Ponnahdusesto on poistettu käytöstä tässä verkkotunnuksessa"
                            },
                            settings_saved: {
                                message: "Asetukset tallennettiin"
                            }
                        },
                        fr: {
                            show_popup: {
                                message: "Afficher %destUrl%"
                            },
                            continue_blocking: {
                                message: "Continuer le blocage"
                            },
                            allow_from: {
                                message: "Autoriser fenêtres pop-up pour %origDomain%"
                            },
                            manage_pref: {
                                message: "Administrer les préférences..."
                            },
                            popup_text: {
                                message: "AdGuard a empêché ce site web d'afficher %numPopup% fenêtres pop-up"
                            },
                            options: {
                                message: "Options"
                            },
                            silence_noti: {
                                message: "Ne pas afficher ce message sur %origDomain%"
                            },
                            site_input_ph: {
                                message: "Saisir le nom du site Web"
                            },
                            add_site: {
                                message: "Ajouter un site Web"
                            },
                            add: {
                                message: "Ajouter"
                            },
                            allowed_empty: {
                                message: "La liste des exceptions est vide"
                            },
                            allowed: {
                                message: "Autorisé"
                            },
                            silenced_empty: {
                                message: "La liste des sites web aux notifications silencieuses est vide"
                            },
                            silenced: {
                                message: "Silence imposé"
                            },
                            allowed_tooltip: {
                                message: "Fenêtres pop-up pour les sites web sur la liste vont être autorisés."
                            },
                            silenced_tooltip: {
                                message: "Les notifications pour les fenêtres pop-up bloquées depuis les sites web listés ci-dessous ne seront pas affichées."
                            },
                            installFrom: {
                                message: "Installer de <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Étape 3: actualisez cette page page pour accéder aux paramètres du script utilisateur"
                            },
                            noinst_ignore_if_ag: {
                                message: "Si vous avez installé AdGuard pour Windows auparavant, vous pouvez passer cette étape car le script utilisateur Bloqueur de fenêtres pop-up y est déjà pré-installé."
                            },
                            noinst_rec: {
                                message: "(Recommandé)"
                            },
                            please_wait: {
                                message: "Veuillez patienter, recherche de bloqueur des fenêtres pop-up en cours"
                            },
                            noinst_special_prog: {
                                message: "Tout d'abord, pour utiliser un script utilisateur vous avez besoin d'un programme spécial ou d'une extension qui gère les scripts utilisateur."
                            },
                            noinst_subtitle: {
                                message: "Le script utilisateur bloqueur de fenêtres pop-up n'est pas installé. Veuillez consulter le manuel ci-dessous."
                            },
                            homepage: {
                                message: "Page d'accueil"
                            },
                            noinst_step_1: {
                                message: "Étape 1: installer un logiciel géstionnaire de scripts utilisateurs"
                            },
                            noinst_step_2: {
                                message: "Étape 2: script utilisateur"
                            },
                            extension_name: {
                                message: "Bloqueur de fenêtres pop-up de AdGuard"
                            },
                            userscript_name: {
                                message: "Bloqueur de fenêtres pop-up de AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Bloque les fenêtres pop-up avec publicités intrusives sur les pages web"
                            },
                            on_navigation_by_popunder: {
                                message: "Cette transition vers la nouvelle page est susceptible d'être causée par un pop-under. Désirez-vous continuer?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Le bloqueur de pop-ups a interrompu l'exécution d'un script pour empêcher une redirection en arrière-plan",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Le bloqueur des fenêtres pop-up est en marche"
                            },
                            ext_disabled: {
                                message: "Le bloqueur de fenêtres pop-up est désactivé pour $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Le bloqueur de fenêtres pop-up ne marche pas sur ce domaine"
                            },
                            settings_saved: {
                                message: "Paramètres sauvegardés"
                            }
                        },
                        he: {
                            show_popup: {
                                message: "הראה את %destUrl%"
                            },
                            continue_blocking: {
                                message: "המשך לחסום"
                            },
                            allow_from: {
                                message: "התר חלונות קופצים עבור %origDomain%"
                            },
                            manage_pref: {
                                message: "נהל העדפות…"
                            },
                            popup_text: {
                                message: "AdGuard מנע מאתר זה לפתוח %numPopup% חלונות קופצים"
                            },
                            options: {
                                message: "אפשרויות"
                            },
                            silence_noti: {
                                message: "אל תראה הודעה זו בתחום %origDomain%"
                            },
                            site_input_ph: {
                                message: "הכנס שם אתר"
                            },
                            add_site: {
                                message: "הוסף אתר"
                            },
                            add: {
                                message: "הוסף"
                            },
                            allowed_empty: {
                                message: "הרשימה של אתרים מותרים ריקה"
                            },
                            allowed: {
                                message: "מותרים"
                            },
                            silenced_empty: {
                                message: "הרשימה של אתרים מושתקים ריקה"
                            },
                            silenced: {
                                message: "מושתקים"
                            },
                            allowed_tooltip: {
                                message: "חלונות קופצים יותרו עבור תחומים שכתובים ברשימה כאן."
                            },
                            silenced_tooltip: {
                                message: "התראות עבור חלונות קופצים חסומים לא ייראו עבור תחומים שכתובים ברשימה כאן."
                            },
                            installFrom: {
                                message: "התקן מן <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "צעד 3: רענן דף זה כדי לעבור אל הגדרות תסריט המשתמש"
                            },
                            noinst_ignore_if_ag: {
                                message: "במקרה שהתקנת את AdGuard עבור Windows, אתה יכול להתעלם מצעד זה הואיל ותסריט המשתמש של חוסם החלונות הקופצים מגיע מותקן מראש."
                            },
                            noinst_rec: {
                                message: "(מומלץ)"
                            },
                            please_wait: {
                                message: "אנא המתן בעת גילוי חוסם החלונות הקופצים"
                            },
                            noinst_special_prog: {
                                message: "קודם כל, כדי להשתמש בתסריט משתמש אתה צריך תוכנה או הרחבה מיוחדות אשר מריצות תסריטי משתמש."
                            },
                            noinst_subtitle: {
                                message: "תסריט משתמש של חוסם חלונות קופצים של AdGuard אינו מותקן. אנא ראה את ההוראות למטה."
                            },
                            homepage: {
                                message: "דף הבית"
                            },
                            noinst_step_1: {
                                message: "צעד 1: התקן מנהל תסריטי משתמש"
                            },
                            noinst_step_2: {
                                message: "צעד 2: תסריט משתמש"
                            },
                            extension_name: {
                                message: "חוסם חלונות קופצים מאת AdGuard"
                            },
                            userscript_name: {
                                message: "חוסם חלונות קופצים של AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "חוסם פרסומות קופצות בדפי רשת"
                            },
                            on_navigation_by_popunder: {
                                message: "מעבר זה אל הדף החדש כנראה נגרם ע״י חלון קופץ מתחת. האם אתה רוצה להמשיך?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "חוסם החלונות הקופצים ביטל ביצוע תסריט כדי למנוע הכוונה ברקע",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "חוסם החלונות הקופצים פעיל"
                            },
                            ext_disabled: {
                                message: "חוסם החלונות הקופצים מושבת עבור $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "חוסם החלונות הקופצים מושבת עבור תחום זה"
                            },
                            settings_saved: {
                                message: "הגדרות נשמרו"
                            }
                        },
                        hr: {
                            show_popup: {
                                message: "Prikaži %destUrl%"
                            },
                            continue_blocking: {
                                message: "Nastavi blokirati"
                            },
                            allow_from: {
                                message: "Dopusti skočne prozore za %origDomain%"
                            },
                            manage_pref: {
                                message: "Upravljanje postavkama..."
                            },
                            popup_text: {
                                message: "AdGuard je spriječio ovu web stranicu da otvori %numPopup% skočna prozora"
                            },
                            options: {
                                message: "Opcije"
                            },
                            silence_noti: {
                                message: "Ne pokazuj ovu poruku za %origDomain%"
                            },
                            site_input_ph: {
                                message: "Unesite naziv web stranice"
                            },
                            add_site: {
                                message: "Dodaj stranicu"
                            },
                            add: {
                                message: "Dodaj"
                            },
                            allowed_empty: {
                                message: "Lista dopuštenih stranica je prazna"
                            },
                            allowed: {
                                message: "Dopušteno"
                            },
                            silenced_empty: {
                                message: "Lista utišanih stranica je prazna"
                            },
                            silenced: {
                                message: "Utišano"
                            },
                            allowed_tooltip: {
                                message: "Popis domena na kojima su dopušteni skočni prozori."
                            },
                            silenced_tooltip: {
                                message: "Obavijesti za blokirane skočne prozore neće biti prikazane za navedene domene."
                            },
                            installFrom: {
                                message: "Instaliraj s {$startLink}{$name}{$endLink}"
                            },
                            noinst_step_3: {
                                message: "Korak 3: Osvježite ovu stranicu kako biste dobili userscript postavke"
                            },
                            noinst_ignore_if_ag: {
                                message: "Ako ste instalirali AdGuard za Windows, možete zanemariti ovaj korak jer je userscripta blokatora skočnih prozora, unaprijed instaliran."
                            },
                            noinst_rec: {
                                message: "(Preporučeno)"
                            },
                            please_wait: {
                                message: "Molimo pričekajte, otkrivamo bloker skočnih prozora"
                            },
                            noinst_special_prog: {
                                message: "Prije svega, za upotrebu userscripta potreban vam je poseban program ili proširenje koje pokreće userscripte."
                            },
                            noinst_subtitle: {
                                message: "Userscript od AdGuard Blokera skočnih prozora, nije uspješno instaliranja. Molimo pratite upute ispod."
                            },
                            homepage: {
                                message: "Početna stranica"
                            },
                            noinst_step_1: {
                                message: "Korak 1: Instalirajte userscript upravitelj"
                            },
                            noinst_step_2: {
                                message: "Korak 2: Userscript"
                            },
                            extension_name: {
                                message: "AdGuard Bloker skočnih prozora"
                            },
                            userscript_name: {
                                message: "AdGuard Bloker skočnih prozora",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokira skočne prozore na web stranicama"
                            },
                            on_navigation_by_popunder: {
                                message: "Prijelaz na novu stranicu je najvjerojatnije uzrokovan skrivenim skočnim prozorom. Želite li nastaviti?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Bloker skočnih prozora prekinuo je izvršavanje skripte kako bi spriječio preusmjeravanje u pozadini",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Bloker skočnih prozora je aktivan"
                            },
                            ext_disabled: {
                                message: "Bloker skočnih prozora je onemogućen za $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Bloker skočnih prozora je onemogućen za ovu domenu"
                            },
                            settings_saved: {
                                message: "Postavke su spremljene"
                            }
                        },
                        hu: {
                            show_popup: {
                                message: "Mutasd %destUrl%"
                            },
                            continue_blocking: {
                                message: "Blokkolás folytatása"
                            },
                            allow_from: {
                                message: "Felugró ablakok engedélyezése itt: %origDomain%"
                            },
                            manage_pref: {
                                message: "Beállítások kezelése..."
                            },
                            popup_text: {
                                message: "Az AdGuard %numPopup% felugró ablak megjelenését akadályozta meg"
                            },
                            options: {
                                message: "Beállítások"
                            },
                            silence_noti: {
                                message: "Ne mutassa ezt az üzenetet itt: %origDomain%"
                            },
                            site_input_ph: {
                                message: "Írja be a webhely nevét"
                            },
                            add_site: {
                                message: "Webhely hozzáadása"
                            },
                            add: {
                                message: "Hozzáadás"
                            },
                            allowed_empty: {
                                message: "Az engedélyezett oldalak listája üres"
                            },
                            allowed: {
                                message: "Engedélyezett"
                            },
                            silenced_empty: {
                                message: "Az némított oldalak listája üres"
                            },
                            silenced: {
                                message: "Némított"
                            },
                            allowed_tooltip: {
                                message: "A felsorolt oldalakon engedélyezve lesznek a popup-ok."
                            },
                            silenced_tooltip: {
                                message: "A blokkolt felugró ablakok értesitései nem fognak megjelenni a követketző oldalakon."
                            },
                            installFrom: {
                                message: "Telepítés innen: <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "3. lépés: Töltse újra ezt az oldalt, hogy hozzáférjen a felhasználói szűrők beállitásaihoz"
                            },
                            noinst_ignore_if_ag: {
                                message: "Ha telepítette az AdGuard for Windowst, hagyja ki ezt a lépést, mivel a Popup Blocker userscript abban előre van telepítve."
                            },
                            noinst_rec: {
                                message: "(Ajánlott)"
                            },
                            please_wait: {
                                message: "Kérjük várjon, Popup Blocker detektálása"
                            },
                            noinst_special_prog: {
                                message: "Mindenekelőtt, szüksége van egy olyan speciális programra vagy kiegészítőre, ami képes userscripteket futtatni."
                            },
                            noinst_subtitle: {
                                message: "Az AdGuard Popup Blocker userscript nincs telepítve. Kérem tekintse meg a lépéseket alább."
                            },
                            homepage: {
                                message: "Kezdőlap"
                            },
                            noinst_step_1: {
                                message: "1. lépés: Userscript kezelő telepítése"
                            },
                            noinst_step_2: {
                                message: "2. lépés: Userscript"
                            },
                            extension_name: {
                                message: "Popup Blocker by AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Popup Blocker",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokkolja a felugró ablakban megjelenő reklámokat a webhelyeken"
                            },
                            on_navigation_by_popunder: {
                                message: "Az új oldalra való áttérést valószínűleg egy előugró ablak okozza. Kívánja folytatni?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "A Popup Blocker megszakította a szkript végrehajtását a háttérben történő átirányítás megakadályozása érdekében",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "A Popup Blocker működik"
                            },
                            ext_disabled: {
                                message: "A Popup Blocker ki van kapcsolva itt: $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "A Popup Blocker ki van kapcsolva ezen a domainen"
                            },
                            settings_saved: {
                                message: "Beállítások mentve"
                            }
                        },
                        id: {
                            show_popup: {
                                message: "Tampilkan %destUrl%"
                            },
                            continue_blocking: {
                                message: "Lanjutkan pemblokiran"
                            },
                            allow_from: {
                                message: "Izinkan popup di %origDomain%"
                            },
                            manage_pref: {
                                message: "Kelola pengaturan..."
                            },
                            popup_text: {
                                message: "AdGuard mencegah situs web ini membuka %numPopup% jendela popup"
                            },
                            options: {
                                message: "Opsi"
                            },
                            silence_noti: {
                                message: "Jangan tampilkan pesan ini di %origDomain%"
                            },
                            site_input_ph: {
                                message: "Masukkan nama situs"
                            },
                            add_site: {
                                message: "Tambah situs"
                            },
                            add: {
                                message: "Tambah"
                            },
                            allowed_empty: {
                                message: "Daftar pengecualian masih kosong"
                            },
                            allowed: {
                                message: "Pengecualian"
                            },
                            silenced_empty: {
                                message: "Daftar situs web dengan pemberitahuan yang diheningkan masih kosong"
                            },
                            silenced: {
                                message: "Diheningkan"
                            },
                            allowed_tooltip: {
                                message: "Popup akan diizinkan di situs web yang tercantum di sini."
                            },
                            silenced_tooltip: {
                                message: "Notifikasi popup yang diblokir tidak akan ditampilkan di situs web yang tercantum di sini."
                            },
                            installFrom: {
                                message: "Pasang dari <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Tahap 3: Muat ulang halamana ini untuk masuk ke pengaturan userscript"
                            },
                            noinst_ignore_if_ag: {
                                message: "Jika Anda telah memasang AdGuard untuk Windows, Anda dapat mengabaikan langkah ini karena Pemblokir Popup sudah terpasang."
                            },
                            noinst_rec: {
                                message: "(Dianjurkan)"
                            },
                            please_wait: {
                                message: "Mohon tunggu, mendeteksi Pemblokir Popup"
                            },
                            noinst_special_prog: {
                                message: "Pertama-tama, untuk menggunakan userscript Anda memerlukan program atau ekstensi khusus yang dapat menjalankan userscript."
                            },
                            noinst_subtitle: {
                                message: "Userscript Pemblokir Popup AdGuard belum terpasang. Silakan lihat instruksi di bawah ini."
                            },
                            homepage: {
                                message: "Situs"
                            },
                            noinst_step_1: {
                                message: "Langkah 1: Pasang pengelola userscript"
                            },
                            noinst_step_2: {
                                message: "Langkah 2: Userscript"
                            },
                            extension_name: {
                                message: "Pemblokir Popup oleh AdGuard"
                            },
                            userscript_name: {
                                message: "Pemblokir Popup AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokir iklan popup di halaman web"
                            },
                            on_navigation_by_popunder: {
                                message: "Transisi ke laman baru ini kemungkinan disebabkan oleh sebuah pop-up. Apakah Anda ingin melanjutkan?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Popup Blocker menghentikan eksekusi skrip untuk mencegah perubahan laman di latar belakang",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Pemblokir Popup sedang bekerja"
                            },
                            ext_disabled: {
                                message: "Pemblokir Popup dinonaktifkan untuk $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Pemblokir Popup tidak dapat bekerja di domain ini"
                            },
                            settings_saved: {
                                message: "Pengaturan disimpan"
                            }
                        },
                        it: {
                            show_popup: {
                                message: "Visualizza %destUrl%"
                            },
                            continue_blocking: {
                                message: "Continua a bloccare"
                            },
                            allow_from: {
                                message: "Consenti pop-up per %origDomain%"
                            },
                            manage_pref: {
                                message: "Gestisci preferenze..."
                            },
                            popup_text: {
                                message: "AdGuard ha impedito a questo sito web di aprire {$numPopup} finestre pop-up"
                            },
                            options: {
                                message: "Opzioni"
                            },
                            silence_noti: {
                                message: "Non mostrare questo messaggio su %origDomain%"
                            },
                            site_input_ph: {
                                message: "Inserisci il nome del sito"
                            },
                            add_site: {
                                message: "Aggiungi un sito"
                            },
                            add: {
                                message: "Aggiungi"
                            },
                            allowed_empty: {
                                message: "La lista dei siti consentiti è vuota"
                            },
                            allowed: {
                                message: "Consentito"
                            },
                            silenced_empty: {
                                message: "La lista dei siti silenziati è vuota"
                            },
                            silenced: {
                                message: "Silenziato"
                            },
                            allowed_tooltip: {
                                message: "I pop-up verranno consentiti per i domini qui elencati."
                            },
                            silenced_tooltip: {
                                message: "Le notifiche dei pop-up bloccati non verranno mostrate nei domini qui indicati."
                            },
                            installFrom: {
                                message: "Installa da <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Passo 3: Ricarica questa pagina per ottenere le impostazioni dello script utente"
                            },
                            noinst_ignore_if_ag: {
                                message: "Se hai installato AdGuard per Windows, puoi ignorare questo passaggio poiché lo script utente Popup Blocker è preinstallato."
                            },
                            noinst_rec: {
                                message: "(Consigliato)"
                            },
                            please_wait: {
                                message: "Si prega di attendere, rilevamento di Popup Blocker in corso"
                            },
                            noinst_special_prog: {
                                message: "Prima di tutto, per utilizzare uno script utente è necessario un programma o un'estensione speciali per l'esecuzione di tali script."
                            },
                            noinst_subtitle: {
                                message: "Lo script utente AdGuard Popup Blocker non è installato. Ti invitiamo a consultare le istruzioni di seguito."
                            },
                            homepage: {
                                message: "Pagina principale"
                            },
                            noinst_step_1: {
                                message: "Passo 1: Installa un gestore di script utente"
                            },
                            noinst_step_2: {
                                message: "Passo 2: Script utente"
                            },
                            extension_name: {
                                message: "Blocca-popup di AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Popup Blocker",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blocca gli annunci pop-up sulle pagine web"
                            },
                            on_navigation_by_popunder: {
                                message: "È probabile che questa transizione alla nuova pagina sia causata da un pop-under. Desideri proseguire?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Popup Blocker ha interrotto l'esecuzione di uno script per impedire il reindirizzamento in secondo piano",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Popup Blocker è in servizio"
                            },
                            ext_disabled: {
                                message: "Popup Blocker è disattivato per $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Popup Blocker è disattivato su questo dominio"
                            },
                            settings_saved: {
                                message: "Impostazioni salvate"
                            }
                        },
                        ja: {
                            show_popup: {
                                message: "%destUrl%を表示する"
                            },
                            continue_blocking: {
                                message: "ブロッキングを続ける"
                            },
                            allow_from: {
                                message: "%origDomain%のポップアップを許可する"
                            },
                            manage_pref: {
                                message: "設定を管理…"
                            },
                            popup_text: {
                                message: "AdGuardはこのウェブサイトが%numPopup%のポップアップウィンドウを開くのを防ぎました"
                            },
                            options: {
                                message: "オプション"
                            },
                            silence_noti: {
                                message: "%origDomain%にこのメッセージを表示しない"
                            },
                            site_input_ph: {
                                message: "サイト名を入力"
                            },
                            add_site: {
                                message: "サイトを追加する"
                            },
                            add: {
                                message: "追加"
                            },
                            allowed_empty: {
                                message: "許可済みサイトのリストは空です"
                            },
                            allowed: {
                                message: "例外"
                            },
                            silenced_empty: {
                                message: "消音済みサイトのリストは空です"
                            },
                            silenced: {
                                message: "消音済み"
                            },
                            allowed_tooltip: {
                                message: "ポップアップはここに記載されているドメインにとって許可されます。"
                            },
                            silenced_tooltip: {
                                message: "ブロックされたポップアップの通知は、ここにリストアップされているドメインでは表示されません。"
                            },
                            installFrom: {
                                message: "<a>%name%</a>からインストールする"
                            },
                            noinst_step_3: {
                                message: "ステップ3：このページを更新して、ユーザースクリプト設定を取得する"
                            },
                            noinst_ignore_if_ag: {
                                message: "AdGuard for Windows をインストールした場合は、ポップアップブロッカーのユーザスクリプトがあらかじめインストールされているので、このステップを無視して結構です。"
                            },
                            noinst_rec: {
                                message: "（推奨）"
                            },
                            please_wait: {
                                message: "ポップアップブロッカーを検出するまでお待ちください"
                            },
                            noinst_special_prog: {
                                message: "まず、ユーザスクリプトを使用するには、ユーザスクリプトを実行する特別なプログラムが必要です。"
                            },
                            noinst_subtitle: {
                                message: "AdGuardポップアップブロッカー・ユーザスクリプトがインストールされていません。 下記の指示をご覧ください。"
                            },
                            homepage: {
                                message: "ホームページ"
                            },
                            noinst_step_1: {
                                message: "ステップ1：ユーザースクリプト・マネージャをインストールする"
                            },
                            noinst_step_2: {
                                message: "ステップ２：ユーザスクリプト"
                            },
                            extension_name: {
                                message: "ポップアップブロッカー by AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard ポップアップブロッカー",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Webページでポップアップ広告をブロックします。"
                            },
                            on_navigation_by_popunder: {
                                message: "新しいページへの移動はポップアンダーによって生じた可能性があります。続行しますか？",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "ポップアップブロッカーはバックグラウンドリダイレクトを防ぐためにスクリプトの実行を中止しました",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "ポップアップブロッカー作動中"
                            },
                            ext_disabled: {
                                message: "$DOMAIN$に対してポップアップブロッカーは無効になっています",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "このドメインではポップアップブロッカーは動作できません"
                            },
                            settings_saved: {
                                message: "設定保存完了"
                            }
                        },
                        ko: {
                            show_popup: {
                                message: "%destUrl% 표시"
                            },
                            continue_blocking: {
                                message: "계속 차단하기"
                            },
                            allow_from: {
                                message: "%origDomain%의 팝업 허용하기"
                            },
                            manage_pref: {
                                message: "환경 설정 관리..."
                            },
                            popup_text: {
                                message: "AdGuard가 이 웹사이트에서 %numPopup%개의 팝업 창을 차단하였습니다"
                            },
                            options: {
                                message: "옵션"
                            },
                            silence_noti: {
                                message: "%origDomain%에서 이 메세지 표시하지 않기"
                            },
                            site_input_ph: {
                                message: "웹 사이트 명을 입력하세요"
                            },
                            add_site: {
                                message: "웹 사이트 추가"
                            },
                            add: {
                                message: "추가"
                            },
                            allowed_empty: {
                                message: "허용된 웹 사이트 목록이 비어 있습니다"
                            },
                            allowed: {
                                message: "허용됨"
                            },
                            silenced_empty: {
                                message: "침묵된 사이트 목록이 비어 있습니다"
                            },
                            silenced: {
                                message: "침묵됨"
                            },
                            allowed_tooltip: {
                                message: "이 목록에 있는 주소의 팝업들은 허용됩니다."
                            },
                            silenced_tooltip: {
                                message: "이 목록에 있는 주소는 차단된 팝업 알림이 표시되지 않습니다."
                            },
                            installFrom: {
                                message: "<a>%name%</a> 에서 설치"
                            },
                            noinst_step_3: {
                                message: "3단계: 사용자 스크립트 설정을 받으려면 페이지를 새로고침하세요"
                            },
                            noinst_ignore_if_ag: {
                                message: "이미 Windows용 AdGuard를 설치했다면, 팝업 차단기 사용자 스크립트도 같이 설치되기 때문에 이 단계를 건너뛰실 수 있습니다."
                            },
                            noinst_rec: {
                                message: "(추천)"
                            },
                            please_wait: {
                                message: "잠시만 기다려주세요, 팝업 차단기를 찾는 중입니다"
                            },
                            noinst_special_prog: {
                                message: "제일 먼저, 유저스크립트를 사용하려면 유저스크립트를 실행하기 위한 특별한 프로그램 혹은 확장 프로그램이 필요합니다."
                            },
                            noinst_subtitle: {
                                message: "AdGuard 팝업 차단기 사용자 스크립트가 설치되어 있지 않습니다. 아래의 설명을 봐 주세요."
                            },
                            homepage: {
                                message: "홈페이지"
                            },
                            noinst_step_1: {
                                message: "1 단계: 사용자 스크립트 관리자를 설치하기"
                            },
                            noinst_step_2: {
                                message: "2 단계: 사용자 스크립트"
                            },
                            extension_name: {
                                message: "팝업 차단기 by AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard 팝업 차단기",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "웹 페이지에서 팝업 광고를 차단"
                            },
                            on_navigation_by_popunder: {
                                message: "이 새 페이지로의 이동은 팝언더 광고에 의한 것일 수 있습니다. 계속 하시겠습니까?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "팝업 차단기가 백그라운드 리디렉션을 방지하기 위해 스크립트 실행을 중단하였습니다",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "팝업 차단기는 임무를 수행 중 입니다"
                            },
                            ext_disabled: {
                                message: "팝업 차단기의 $DOMAIN$에서의 동작이 비활성화 되었습니다",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "팝업 차단기의 이 도메인에서의 동작이 비활성화 되었습니다"
                            },
                            settings_saved: {
                                message: "설정 저장됨"
                            }
                        },
                        lt: {
                            show_popup: {
                                message: "Rodyti %destUrl%"
                            },
                            continue_blocking: {
                                message: "Tęsti blokavimą"
                            },
                            allow_from: {
                                message: "Leisti iššokančius langus %origDomain%"
                            },
                            manage_pref: {
                                message: "Tvarkyti nuostatas..."
                            },
                            popup_text: {
                                message: "„AdGuard“ neleido šiai svetainei atidaryti %numPopup% iššokančius langus"
                            },
                            options: {
                                message: "Parinktys"
                            },
                            silence_noti: {
                                message: "Nerodyti šio pranešimo %origDomain%"
                            },
                            site_input_ph: {
                                message: "Įveskite svetainės pavadinimą"
                            },
                            add_site: {
                                message: "Pridėti svetainę"
                            },
                            add: {
                                message: "Pridėti"
                            },
                            allowed_empty: {
                                message: "Leidžiamų svetainių sąrašas tuščias"
                            },
                            allowed: {
                                message: "Išimtys"
                            },
                            silenced_empty: {
                                message: "Svetainių su atjungtais pranešimais sąrašas tuščias"
                            },
                            silenced: {
                                message: "Be pranešimų"
                            },
                            allowed_tooltip: {
                                message: "Iššokantys langai bus leidžiami domenuose, kurie išvardyti čia."
                            },
                            silenced_tooltip: {
                                message: "Pranešimai apie užblokuotus iškylančiuosius langus nebus rodomi domenams, išvardytiems čia."
                            },
                            installFrom: {
                                message: "Įdiegti iš {$startLink}{$name}{$endLink}"
                            },
                            noinst_step_3: {
                                message: "3 žingsnis: Atnaujinkite šį puslapį, kad pasiektumėte naudotojo skripto nustatymus"
                            },
                            noinst_ignore_if_ag: {
                                message: "Jei įdiegėte AdGuard, skirtą Windows, galite praleisti šį žingsnį, nes iškylančių langų blokavimo programa jau bus įdiegta."
                            },
                            noinst_rec: {
                                message: "(Rekomenduojama)"
                            },
                            please_wait: {
                                message: "Prašome palaukti, bandoma aptikti iškylančių langų blokatorių"
                            },
                            noinst_special_prog: {
                                message: "Norint naudoti skriptus, jums reikia specialios programos arba plėtinio, kuris paleidžia skriptus."
                            },
                            noinst_subtitle: {
                                message: "AdGuard iškylančių langų blokatorius neįdiegtas. Prašome perskaityti žemiau pateiktą instrukciją."
                            },
                            homepage: {
                                message: "Pagrindinis puslapis"
                            },
                            noinst_step_1: {
                                message: "1 žingnis: įdiekite naudotojo skriptų tvarkyklę"
                            },
                            noinst_step_2: {
                                message: "2 žingsnis: naudotojo skriptas"
                            },
                            extension_name: {
                                message: "AdGuard iššokančių langų blokatorius"
                            },
                            userscript_name: {
                                message: "AdGuard iššokančiųjų langų blokatorius",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokuoja iššokančius skelbimus tinklalapiuose"
                            },
                            on_navigation_by_popunder: {
                                message: "Šis perėjimas į naują puslapį greičiausiai buvo įtakotas pop-under. Ar norite tęsti?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Iškylančių langų blokatorius nutraukė skripto vykdymą, kad būtų išvengta foninio peradresavimo",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Iškylančių langų blokatorius yra paruoštas"
                            },
                            ext_disabled: {
                                message: "Iškylančių langų blokatorius yra išjungtas domenui $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Iškylančių langų blokatorius yra išjungtas šiam domenui"
                            },
                            settings_saved: {
                                message: "Nustatymai išsaugoti"
                            }
                        },
                        ms: {
                            show_popup: {
                                message: "Tunjukkan %destUrl%"
                            },
                            continue_blocking: {
                                message: "Terus menyekat"
                            },
                            allow_from: {
                                message: "Benarkan pop-timbul untuk %origDomain%"
                            },
                            manage_pref: {
                                message: "Urus keutamaan..."
                            },
                            popup_text: {
                                message: "AdGuard menghalang laman web ini daripada membuka %numPopup% tetingkap pop-timbul"
                            },
                            options: {
                                message: "Pilihan"
                            },
                            silence_noti: {
                                message: "Jangan tunjuk mesej ini pada %origDomain%"
                            },
                            site_input_ph: {
                                message: "Masukkan nama laman"
                            },
                            add_site: {
                                message: "Tambah laman"
                            },
                            add: {
                                message: "Tambah"
                            },
                            allowed_empty: {
                                message: "Senarai laman dibenarkan adalah kosong"
                            },
                            allowed: {
                                message: "Dibenarkan"
                            },
                            silenced_empty: {
                                message: "Senarai laman disenyapkan adalah kosong"
                            },
                            silenced: {
                                message: "Disenyapkan"
                            },
                            allowed_tooltip: {
                                message: "Poptimbul akan dibenarkan untuk domain disenarai di sini."
                            },
                            silenced_tooltip: {
                                message: "Pemberitahuan untuk poptimbul disekat tidak akan ditunjukkan untuk domain disenarai di sini."
                            },
                            installFrom: {
                                message: "Pasang dari <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Langkah 3: Segar semula laman ini untuk mendapat tetapan skrip pengguna"
                            },
                            noinst_ignore_if_ag: {
                                message: "Jika anda telah memasang AdGuard untuk Windows, anda bole mengabaikan langkah ini kerana skrip pengguna Penyekat Pop Timbul diprapasangkan."
                            },
                            noinst_rec: {
                                message: "(Disyorkan)"
                            },
                            please_wait: {
                                message: "Sila tunggu, mengesan Penyekat Pop Timbul"
                            },
                            noinst_special_prog: {
                                message: "Pertama sekali, untuk mengguna skrip pengguna anda perlu aturcara istimewa atau sambungan yang menjalankan skrip pengguna."
                            },
                            noinst_subtitle: {
                                message: "Skrip pengguna Penyekat Pop Timbul AdGuard tidak dipasang. Sila lihat arahan di bawah."
                            },
                            homepage: {
                                message: "Laman rumah"
                            },
                            noinst_step_1: {
                                message: "Langkah 1: Pasang pengurus skrip pengguna"
                            },
                            noinst_step_2: {
                                message: "Langkah 2: Skrip pengguna"
                            },
                            extension_name: {
                                message: "Penyekat Pop Timbul oleh AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Penyekat Pop Timbul",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Sekat pop timbul pada laman web"
                            },
                            on_navigation_by_popunder: {
                                message: "Peralihan ke laman baru ini kemungkinan disebabkan oleh pop-bawah. Anda ingin meneruskan?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Penyekat Pop Timbul menggugurkan pelaksanaan skrip bagi mengelakkan arah semula latar belakang",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Penyekat Pop Timbul sedang bertugas"
                            },
                            ext_disabled: {
                                message: "Penyekat Pop Timbul dinyahdayakan untuk $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Penyekat Pop Timbul dinyahdayakan untuk domain ini"
                            },
                            settings_saved: {
                                message: "Tetapan disimpan"
                            }
                        },
                        no: {
                            show_popup: {
                                message: "Vis %destUrl%"
                            },
                            continue_blocking: {
                                message: "Fortsett blokkering"
                            },
                            allow_from: {
                                message: "Tillat popup-vinduer for %origDomain%"
                            },
                            manage_pref: {
                                message: "Administrer preferanser…"
                            },
                            popup_text: {
                                message: "AdGuard forhindret denne nettsiden i å åpne popup-vinduer for %numPopup%"
                            },
                            options: {
                                message: "Alternativer"
                            },
                            silence_noti: {
                                message: "Ikke vis denne meldingen for %origDomain%"
                            },
                            site_input_ph: {
                                message: "Oppgi sidenavn"
                            },
                            add_site: {
                                message: "Legg til en side"
                            },
                            add: {
                                message: "Legg til"
                            },
                            allowed_empty: {
                                message: "Lisen over unntak er tom"
                            },
                            allowed: {
                                message: "Unntak"
                            },
                            silenced_empty: {
                                message: "Liste over nettsider med dempede varsler er tom"
                            },
                            silenced: {
                                message: "Dempet"
                            },
                            allowed_tooltip: {
                                message: "Popup-vinduer vil bli tillatt for nettsider som er oppført her."
                            },
                            silenced_tooltip: {
                                message: "Blokkerte popup-vinduer vil ikke vises for nettsider som er oppført her."
                            },
                            installFrom: {
                                message: "Installer fra <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Trinn 3: Oppdater denne siden for å komme til brukerskript-innstillingene"
                            },
                            noinst_ignore_if_ag: {
                                message: "Hvis du har installert AdGuard for Windows, kan du ignorere dette trinnet, da brukerskript for popup-blokkering  kommer forhåndsinstallert."
                            },
                            noinst_rec: {
                                message: "(Anbefalt)"
                            },
                            please_wait: {
                                message: "Vennligst vent, oppdager popup-blokkereren"
                            },
                            noinst_special_prog: {
                                message: "Først av alt, for å bruke et brukerskript trenger du et spesielt program eller en utvidelse som kan kjøre brukerskript."
                            },
                            noinst_subtitle: {
                                message: "Brukerskript for AdGuards popup-blokkerer er ikke installert. Vennligst se instruksjonene nedenfor."
                            },
                            homepage: {
                                message: "Hjemmeside"
                            },
                            noinst_step_1: {
                                message: "Trinn 1: Installer en brukerskript-administerere"
                            },
                            noinst_step_2: {
                                message: "Stinn 2: Brukerskript"
                            },
                            extension_name: {
                                message: "Popup-blokkerer fra AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuards popup-blokkerer",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokker popup-annonser på nettsider"
                            },
                            on_navigation_by_popunder: {
                                message: "Omdirigeringen til den nye nettsiden er sannsynligvis forårsaket av en pop-under. Ønsker du å fortsette?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Popup Blocker avbrøt en skrift fra å kjøre for å hindre bakgrunnsomdirigering",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Popup-blokkereren er på vakt"
                            },
                            ext_disabled: {
                                message: "Popup-blokkereren er deaktivert for $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Popup-blokkereren kan ikke kjøre på dette domenet"
                            },
                            settings_saved: {
                                message: "Innstillinger lagret"
                            }
                        },
                        pl: {
                            show_popup: {
                                message: "Pokaż %destUrl%"
                            },
                            continue_blocking: {
                                message: "Kontynuuj blokowanie"
                            },
                            allow_from: {
                                message: "Zezwalaj na wyskakujące okienka dla %origDomain%"
                            },
                            manage_pref: {
                                message: "Zarządzaj preferencjami..."
                            },
                            popup_text: {
                                message: "AdGuard zapobiegł na tej stronie otwarcie  %numPopup% wyskakujacego okienka."
                            },
                            options: {
                                message: "Opcje"
                            },
                            silence_noti: {
                                message: "Nie pokazuj tej wiadomości w %origDomain%"
                            },
                            site_input_ph: {
                                message: "Wprowadź nazwę witryny"
                            },
                            add_site: {
                                message: "Dodaj stronę"
                            },
                            add: {
                                message: "Dodaj"
                            },
                            allowed_empty: {
                                message: "Lista dozwolonych stron jest pusta"
                            },
                            allowed: {
                                message: "Dozwolona"
                            },
                            silenced_empty: {
                                message: "Lista uciszonych stron jest pusta"
                            },
                            silenced: {
                                message: "Uciszona"
                            },
                            allowed_tooltip: {
                                message: "Dla wymienionych tutaj stron dozwolone będą wyskakujące okienka."
                            },
                            silenced_tooltip: {
                                message: "Powiadomienia o zablokowanych wyskakujących okienkach nie będą wyświetlane dla stron tutaj wymienionych."
                            },
                            installFrom: {
                                message: "Instaluj z <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Krok 3: Odśwież tę stronę, aby przejść do ustawień skryptu użytkownika"
                            },
                            noinst_ignore_if_ag: {
                                message: "Jeśli zainstalowałeś AdGuard dla systemu Windows, możesz zignorować ten krok, gdy instalator funkcji Bloker wyskakujących okienek zostanie zainstalowany fabrycznie."
                            },
                            noinst_rec: {
                                message: "(Zalecane)"
                            },
                            please_wait: {
                                message: "Proszę czekać, wykrywam, uruchamiam bloker wyskakujących okienek"
                            },
                            noinst_special_prog: {
                                message: "Przede wszystkim, aby użyć skryptu użytkownika, potrzebujesz specjalnego programu, który uruchamia takie skrypty."
                            },
                            noinst_subtitle: {
                                message: "Bloker wyskakujących okienek AdGuard skrypt użytkownika nie jest zainstalowany. Zobacz instrukcję poniżej."
                            },
                            homepage: {
                                message: "Strona domowa"
                            },
                            noinst_step_1: {
                                message: "Krok 1: Zainstaluj menedżera skryptów użytkownika"
                            },
                            noinst_step_2: {
                                message: "Krok 2: Skrypty użytkownika"
                            },
                            extension_name: {
                                message: "Bloker wyskakujących okienek przez AdGuard"
                            },
                            userscript_name: {
                                message: "Bloker wyskakujących okienek przez AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokuje wyskakujące okienka na stronach internetowych"
                            },
                            on_navigation_by_popunder: {
                                message: "To przejście na nową stronę może być spowodowane przez pop-under. Czy chcesz kontynuować?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Bloker wyskakujących okienek przerwał wykonywanie skryptu, aby zapobiec przekierowaniu w tle",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Bloker wyskakujących okienek jest na służbie"
                            },
                            ext_disabled: {
                                message: "Bloker wyskakujących okienek jest wyłączony dla $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Bloker wyskakujących okienek nie może działać na tej domenie"
                            },
                            settings_saved: {
                                message: "Ustawienia zapisane"
                            }
                        },
                        nl: {
                            show_popup: {
                                message: "Toon %destUrl%"
                            },
                            continue_blocking: {
                                message: "Doorgaan"
                            },
                            allow_from: {
                                message: "Pop-ups toestaan voor %origDomain%"
                            },
                            manage_pref: {
                                message: "Voorkeuren beheren..."
                            },
                            popup_text: {
                                message: "AdGuard heeft voorkomen dat deze website pop-upvensters van %numPopup% opende"
                            },
                            options: {
                                message: "Opties"
                            },
                            silence_noti: {
                                message: "Dit bericht niet weergeven voor %origDomain%"
                            },
                            site_input_ph: {
                                message: "Voer site naam in"
                            },
                            add_site: {
                                message: "Een site toevoegen"
                            },
                            add: {
                                message: "Toevoegen"
                            },
                            allowed_empty: {
                                message: "Lijst met toegestane sites is leeg"
                            },
                            allowed: {
                                message: "Toegestaan"
                            },
                            silenced_empty: {
                                message: "Lijst met sites waarvan de notificaties uit zijn gezet is leeg"
                            },
                            silenced: {
                                message: "Zonder notificaties"
                            },
                            allowed_tooltip: {
                                message: "Pop-ups worden toegestaan voor de domeinen in deze lijst."
                            },
                            silenced_tooltip: {
                                message: "Meldingen voor geblokkeerde pop-ups worden niet weergegeven voor domeinen in deze lijst."
                            },
                            installFrom: {
                                message: "Installeren vanaf <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Stap 3: Deze pagina vernieuwen om naar instellingen voor gebruikerscripts te gaan"
                            },
                            noinst_ignore_if_ag: {
                                message: "Als u AdGuard voor Windows heeft geïnstalleerd, kunt u deze stap negeren omdat het gebruikersscript voor pop-up blokkering vooraf is geïnstalleerd."
                            },
                            noinst_rec: {
                                message: "(Aanbevolen)"
                            },
                            please_wait: {
                                message: "Even geduld, detectie van de pop-up blokkering"
                            },
                            noinst_special_prog: {
                                message: "Om een gebruikersscript te gebruiken, heb je eerst een speciaal programma of extensie nodig die gebruikersscript uitvoert."
                            },
                            noinst_subtitle: {
                                message: "De AdGuard Popup Blocker-gebruikerscript is niet geïnstalleerd. Zie de onderstaande instructie."
                            },
                            homepage: {
                                message: "Startpagina"
                            },
                            noinst_step_1: {
                                message: "Stap 1: Een gebruikersscript beheerder installeren"
                            },
                            noinst_step_2: {
                                message: "Stap 2: Gebruikersscript"
                            },
                            extension_name: {
                                message: "Popup Blocker van AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Pop-up Blocker",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokkeert pop-upadvertenties op webpagina's"
                            },
                            on_navigation_by_popunder: {
                                message: "Deze overgang naar de nieuwe pagina wordt waarschijnlijk veroorzaakt door een onderliggend venster. Wil je doorgaan?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Pop-up Blocker heeft de uitvoering van een script afgebroken om een redirect in de achtergrond te voorkomen",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Pop-up Blocker is actief"
                            },
                            ext_disabled: {
                                message: "Pop-upblokkering is uitgeschakeld voor $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Pop-upblokkering is uitgeschakeld voor dit domein"
                            },
                            settings_saved: {
                                message: "Instellingen opgeslagen"
                            }
                        },
                        pt: {
                            show_popup: {
                                message: "Mostrar %destUrl%"
                            },
                            continue_blocking: {
                                message: "Continuar bloqueando"
                            },
                            allow_from: {
                                message: "Permitir pop-ups em %origDomain%"
                            },
                            manage_pref: {
                                message: "Gerenciar preferências..."
                            },
                            popup_text: {
                                message: "O AdGuard impediu este site de abrir %numPopup% pop-ups"
                            },
                            options: {
                                message: "Opções"
                            },
                            silence_noti: {
                                message: "Não mostrar essa mensagem no %origDomain%"
                            },
                            site_input_ph: {
                                message: "Digite o nome do site"
                            },
                            add_site: {
                                message: "Adicionar um site"
                            },
                            add: {
                                message: "Adicionar"
                            },
                            allowed_empty: {
                                message: "A lista de sites permitidos está vazia"
                            },
                            allowed: {
                                message: "Exceções"
                            },
                            silenced_empty: {
                                message: "Lista de sites com notificações silenciadas está vazia"
                            },
                            silenced: {
                                message: "Silenciado"
                            },
                            allowed_tooltip: {
                                message: "Os pop-ups serão permitidos para sites listados aqui."
                            },
                            silenced_tooltip: {
                                message: "As notificações para pop-ups bloqueados não serão mostrados para sites listados aqui."
                            },
                            installFrom: {
                                message: "Instale da <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Passo 3: Atualize esta página para obter as configurações de script de usuário"
                            },
                            noinst_ignore_if_ag: {
                                message: "Se você instalou o AdGuard para Windows, você pode ignorar esta etapa, porque o script de usuário do Bloqueador de Pop-ups já vem pré-instalado."
                            },
                            noinst_rec: {
                                message: "(Recomendado)"
                            },
                            please_wait: {
                                message: "Por favor, aguarde enquanto detectamos o Bloqueador de Pop-ups"
                            },
                            noinst_special_prog: {
                                message: "Primeiro de tudo, para usar um script de usuário você precisa de um programa ou uma extensão especial para executar scripts de usuário."
                            },
                            noinst_subtitle: {
                                message: "O script de usuário do Bloqueador de Pop-ups do AdGuard não está instalado. Por favor, siga as instruções abaixo."
                            },
                            homepage: {
                                message: "Página Inicial"
                            },
                            noinst_step_1: {
                                message: "Etapa 1: Instale um gerenciador de script de usuário"
                            },
                            noinst_step_2: {
                                message: "Etapa 2: Script de Usuário"
                            },
                            extension_name: {
                                message: "Bloqueador de Pop-ups por AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Bloqueador de Pop-ups",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Bloqueia anúncios pop-ups dentro dos sites"
                            },
                            on_navigation_by_popunder: {
                                message: "Essa transição para a nova página provavelmente será causada por um pop-under. Você deseja continuar?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "O bloqueador de pop-ups interrompeu uma execução de script para evitar um redirecionamento em segundo plano",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Bloqueador de Pop-ups está de plantão"
                            },
                            ext_disabled: {
                                message: "Bloqueador de Pop-ups está desativado para $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "O bloqueador de pop-ups não pode ser executado neste domínio."
                            },
                            settings_saved: {
                                message: "Configurações salvas"
                            }
                        },
                        "pt-PT": {
                            show_popup: {
                                message: "Mostrar %destUrl%"
                            },
                            continue_blocking: {
                                message: "Continuar a bloquear"
                            },
                            allow_from: {
                                message: "Permitir popups em %origDomain%"
                            },
                            manage_pref: {
                                message: "Gerir preferências..."
                            },
                            popup_text: {
                                message: "O AdGuard impediu que este sítio abrisse janelas popup de %numPopup%"
                            },
                            options: {
                                message: "Opções"
                            },
                            silence_noti: {
                                message: "Não mostrar esta mensagem em %origDomain%"
                            },
                            site_input_ph: {
                                message: "Insira o nome do sítio"
                            },
                            add_site: {
                                message: "Adicionar um sítio"
                            },
                            add: {
                                message: "Adicionar"
                            },
                            allowed_empty: {
                                message: "A lista de sítios permitidos está vazia"
                            },
                            allowed: {
                                message: "Excepções"
                            },
                            silenced_empty: {
                                message: "A lista de sítios com notificações silenciadas está vazia"
                            },
                            silenced: {
                                message: "Silenciado"
                            },
                            allowed_tooltip: {
                                message: "Popups serão permitidos nos sítios listados aqui."
                            },
                            silenced_tooltip: {
                                message: "As notificações de popups bloqueados não serão exibidas nos sítios listados aqui."
                            },
                            installFrom: {
                                message: "Instalar a partir de <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Passo 3: Atualize esta página para obter as configurações de script de utilizador"
                            },
                            noinst_ignore_if_ag: {
                                message: "Se tiver instalado o AdGuard para Windows, ignore essa etapa, pois o userscript do Popup Blocker vem pré-instalado."
                            },
                            noinst_rec: {
                                message: "(Recomendado)"
                            },
                            please_wait: {
                                message: "Por favor, aguarde, a detectar o Bloqueador de Popups"
                            },
                            noinst_special_prog: {
                                message: "Antes de tudo, para usar um userscript precisa de um programa ou extensão especial que possa executar scripts de utilizadores."
                            },
                            noinst_subtitle: {
                                message: "O userscript do AdGuard Popup Blocker não está instalado. Por favor, veja as instruções abaixo."
                            },
                            homepage: {
                                message: "Página Principal"
                            },
                            noinst_step_1: {
                                message: "Etapa 1: Instalar um gestor de userscript"
                            },
                            noinst_step_2: {
                                message: "Etapa 2: Script de utilizador"
                            },
                            extension_name: {
                                message: "Bloqueador de Popup por AdGuard"
                            },
                            userscript_name: {
                                message: "Bloqueador de Popup AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Bloqueia anúncios popup em páginas da web."
                            },
                            on_navigation_by_popunder: {
                                message: "Esta transição para a nova página  será  provavelmente causada por um popunder. Deseja continuar?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "PopupBlocker abortou uma execução de script para evitar o redireccionamento em segundo plano",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "O bloqueador de popups está em serviço"
                            },
                            ext_disabled: {
                                message: "O bloqueador de popups está desativado para $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "O Bloqueador de popups não pode ser executado neste domínio"
                            },
                            settings_saved: {
                                message: "As definições foram guardadas"
                            }
                        },
                        ro: {
                            show_popup: {
                                message: "Arată %destUrl%"
                            },
                            continue_blocking: {
                                message: "Continuați blocarea"
                            },
                            allow_from: {
                                message: "Permiteți pop-up pentru %origDomain%"
                            },
                            manage_pref: {
                                message: "Gestiune preferințe..."
                            },
                            popup_text: {
                                message: "AdGuard a împiedicat acestui site să deschidă %numPopup% ferestre pop-up"
                            },
                            options: {
                                message: "Opțiuni"
                            },
                            silence_noti: {
                                message: "Nu afișați acest mesaj pe %origDomain%"
                            },
                            site_input_ph: {
                                message: "Introduceți numele de site"
                            },
                            add_site: {
                                message: "Adăugă site"
                            },
                            add: {
                                message: "Adaugă"
                            },
                            allowed_empty: {
                                message: "Lista de site-uri permise este goală"
                            },
                            allowed: {
                                message: "Permis"
                            },
                            silenced_empty: {
                                message: "Lista site-uri cu notificări amuțite este goală"
                            },
                            silenced: {
                                message: "Amuțit"
                            },
                            allowed_tooltip: {
                                message: "Popup-urile vor fi permise domeniilor enumerate aici."
                            },
                            silenced_tooltip: {
                                message: "Notificările pentru pop-up-uri blocate nu vor fi afișate domeniilor enumerate aici."
                            },
                            installFrom: {
                                message: "Instalați din <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Pasul 3: Actualizați pagina pentru a ajunge la setări userscript"
                            },
                            noinst_ignore_if_ag: {
                                message: "Dacă ați instalat AdGuard pentru Windows, ignorați acest pas, deoarece userscript-ul Blocant Pop-up vine preinstalat."
                            },
                            noinst_rec: {
                                message: "(Recomandat)"
                            },
                            please_wait: {
                                message: "Vă rugăm să așteptați, se detectează Blocantul Pop-up"
                            },
                            noinst_special_prog: {
                                message: "Mai întâi, folosirea unui userscript cere un program sau o extensie specială care rulează userscript-uri."
                            },
                            noinst_subtitle: {
                                message: "Blocantul Pop-up AdGuard nu este instalat. Vă rugăm să consultați instrucțiunea de mai jos."
                            },
                            homepage: {
                                message: "Homepage"
                            },
                            noinst_step_1: {
                                message: "Pasul 1: Instalați un manager userscript"
                            },
                            noinst_step_2: {
                                message: "Pasul 2: Userscript"
                            },
                            extension_name: {
                                message: "Blocant Pop-up de AdGuard"
                            },
                            userscript_name: {
                                message: "Blocant Pop-up AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blochează reclame pop-up pe pagini web"
                            },
                            on_navigation_by_popunder: {
                                message: "Tranziția la această noua pagină este probabil cauzată de un pop-under. Vrei să continui?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Blocantul Pop-up a oprit o execuție de script ca să prevină redirecționare în fundal",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Blocantul Pop-up lucrează"
                            },
                            ext_disabled: {
                                message: "Blocantul Pop-up e dezactivat pentru $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Blocantul Pop-up e dezactivat pentru acest domeniu"
                            },
                            settings_saved: {
                                message: "Setări salvate"
                            }
                        },
                        ru: {
                            show_popup: {
                                message: "Показать %destUrl%"
                            },
                            continue_blocking: {
                                message: "Продолжить блокировку"
                            },
                            allow_from: {
                                message: "Разрешить всплывающие окна на %origDomain%"
                            },
                            manage_pref: {
                                message: "Управлять настройками..."
                            },
                            popup_text: {
                                message: "AdGuard предотвратил показ %numPopup% всплывающих окон на этом сайте"
                            },
                            options: {
                                message: "Опции"
                            },
                            silence_noti: {
                                message: "Не показывать это сообщение на %origDomain%"
                            },
                            site_input_ph: {
                                message: "Введите имя сайта"
                            },
                            add_site: {
                                message: "Добавить сайт"
                            },
                            add: {
                                message: "Добавить"
                            },
                            allowed_empty: {
                                message: "Список исключений пуст"
                            },
                            allowed: {
                                message: "Исключения"
                            },
                            silenced_empty: {
                                message: "Список сайтов с отключенными уведомлениями пуст"
                            },
                            silenced: {
                                message: "Без уведомлений"
                            },
                            allowed_tooltip: {
                                message: "Всплывающие окна будут разрешены на сайтах, перечисленных здесь."
                            },
                            silenced_tooltip: {
                                message: "Уведомления о заблокированных всплывающих окнах не будут отображаться на сайтах, перечисленных здесь."
                            },
                            installFrom: {
                                message: "Установить из <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Шаг 3: Обновите эту страницу, чтобы перейти к настройкам пользовательского скрипта"
                            },
                            noinst_ignore_if_ag: {
                                message: "Если вы установили AdGuard для Windows, вы можете проигнорировать этот шаг, так как Блокировщик всплывающей рекламы уже установлен."
                            },
                            noinst_rec: {
                                message: "Рекомендуется"
                            },
                            please_wait: {
                                message: "Пожалуйста, подождите, попытка обнаружить Блокировщик всплывающей рекламы"
                            },
                            noinst_special_prog: {
                                message: "Для использования скрипта вам, прежде всего, необходима специальная программа (или расширение), которая может работать с пользовательскими скриптами."
                            },
                            noinst_subtitle: {
                                message: "Блокировщик всплывающей рекламы AdGuard не установлен. Пожалуйста, обратитесь к инструкции ниже."
                            },
                            homepage: {
                                message: "Домашняя страница"
                            },
                            noinst_step_1: {
                                message: "Шаг 1: установите программу для управления пользовательскими скриптами"
                            },
                            noinst_step_2: {
                                message: "Шаг 2: пользовательский скрипт"
                            },
                            extension_name: {
                                message: "Блокировщик всплывающей рекламы от AdGuard"
                            },
                            userscript_name: {
                                message: "Блокировщик всплывающей рекламы от AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Блокирует всплывающую рекламу на страницах"
                            },
                            on_navigation_by_popunder: {
                                message: "Этот переход на новую страницу скорее всего вызван поп-андером. Всё равно продолжить?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Блокировщик всплывающей рекламы прервал исполнение скрипта, чтобы предотвратить фоновую переадресацию",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Блокировщик всплывающей рекламы готов к работе"
                            },
                            ext_disabled: {
                                message: "Блокировщик всплывающей рекламы отключен для $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Блокировщик всплывающей рекламы не работает на этом домене."
                            },
                            settings_saved: {
                                message: "Настройки сохранены"
                            }
                        },
                        sk: {
                            show_popup: {
                                message: "Zobraziť %destUrl%"
                            },
                            continue_blocking: {
                                message: "Pokračovať v blokovaní"
                            },
                            allow_from: {
                                message: "Povoliť vyskakovacie okná pre %origDomain%"
                            },
                            manage_pref: {
                                message: "Spravovať preferencie..."
                            },
                            popup_text: {
                                message: "AdGuard zabránil tejto stránke otvoriť %numPopup% vyskakovacích okien"
                            },
                            options: {
                                message: "Voľby"
                            },
                            silence_noti: {
                                message: "Neukazovať túto správu na %origDomain%"
                            },
                            site_input_ph: {
                                message: "Zadajte meno stránky"
                            },
                            add_site: {
                                message: "Pridať stránku"
                            },
                            add: {
                                message: "Pridať"
                            },
                            allowed_empty: {
                                message: "Zoznam povolených stránok je prázdny"
                            },
                            allowed: {
                                message: "Povolené"
                            },
                            silenced_empty: {
                                message: "Zoznam stíšených stránok je prázdny"
                            },
                            silenced: {
                                message: "Stíšené"
                            },
                            allowed_tooltip: {
                                message: "Vyskakovacie okná budú povolené pre domény tu uvedené."
                            },
                            silenced_tooltip: {
                                message: "Upozornenia na blokované vyskakovacie okná sa nebudú zobrazovať pre domény tu uvedené."
                            },
                            installFrom: {
                                message: "Inštalovať z <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Krok 3: Obnovte túto stránku, aby ste sa dostali k nastaveniam používateľského skriptu"
                            },
                            noinst_ignore_if_ag: {
                                message: "Ak ste nainštalovali AdGuard pre Windows, môžete tento krok ignorovať, pretože používateľský skript Popup Blocker je už predinštalovaný."
                            },
                            noinst_rec: {
                                message: "(Odporúčané)"
                            },
                            please_wait: {
                                message: "Počkajte, kým sa nezistí blokovanie vyskakovacích okien"
                            },
                            noinst_special_prog: {
                                message: "V prvom rade je na používanie používateľského skriptu potrebný špeciálny program alebo rozšírenie, ktoré spúšťa používateľské skripty."
                            },
                            noinst_subtitle: {
                                message: "Nie je nainštalovaný používateľský skript blokovania vyskakovacích okien AdGuard. Prečítajte si pokyny uvedené nižšie."
                            },
                            homepage: {
                                message: "Domovská stránka"
                            },
                            noinst_step_1: {
                                message: "Krok 1: Inštalovať manažéra používateľských skriptov"
                            },
                            noinst_step_2: {
                                message: "Krok2: Používateľský skript"
                            },
                            extension_name: {
                                message: "Blokovač vyskakovacích okien od AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard blokovač vyskakovacích okien",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokuje vyskakovacie reklamy na webových stránkach"
                            },
                            on_navigation_by_popunder: {
                                message: "Tento prechod na novú stránku bude pravdepodobne spôsobený kontextovým oknom. Prajete si pokračovať?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Blokovanie vyskakovacích okien prerušilo vykonávanie skriptu, aby sa zabránilo presmerovaniu na pozadí",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Blokovanie vyskakovacích okien je v činnosti"
                            },
                            ext_disabled: {
                                message: "Blokovanie vyskakovacích okien je pre $DOMAIN$ vypnuté",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Blokovanie vyskakovacích okien je pre túto doménu vypnuté"
                            },
                            settings_saved: {
                                message: "Nastavenia boli uložené"
                            }
                        },
                        sl: {
                            show_popup: {
                                message: " Prikaži %destUrl%"
                            },
                            continue_blocking: {
                                message: "Nadaljuj z zaviranjem"
                            },
                            allow_from: {
                                message: "Dovoli pojavna okna na %origDomain%"
                            },
                            manage_pref: {
                                message: "Upravljaj nastavitve..."
                            },
                            popup_text: {
                                message: "AdGuard je tej spletni strani preprečil odpiranje %numPopup% pojavnih oken"
                            },
                            options: {
                                message: "Možnosti"
                            },
                            silence_noti: {
                                message: "Ne prikazuj tega sporočila na %origDomain%"
                            },
                            site_input_ph: {
                                message: "Vnesite ime strani"
                            },
                            add_site: {
                                message: "Dodaj stran"
                            },
                            add: {
                                message: "Dodaj"
                            },
                            allowed_empty: {
                                message: "Seznam dovoljenih strani je prazen"
                            },
                            allowed: {
                                message: "Izjeme"
                            },
                            silenced_empty: {
                                message: "Seznam utišanih strani je prazen"
                            },
                            silenced: {
                                message: "Utišane strani"
                            },
                            allowed_tooltip: {
                                message: "Za tukaj navedene domene bodo dovoljena pojavna okna."
                            },
                            silenced_tooltip: {
                                message: "Obvestila o onemogočenih pojavnih oknih ne bodo prikazana za tukaj navedene domene."
                            },
                            installFrom: {
                                message: "Namesti z <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "3. korak: Osvežite to stran, da pridete do nastavitev uporabniškega skripta"
                            },
                            noinst_ignore_if_ag: {
                                message: "Če ste namestili AdGuard za Windows, lahko ta korak prezrete, saj je uporabniški skript za zaviranje pojavnih oken vnaprej nameščen."
                            },
                            noinst_rec: {
                                message: "(Priporočeno)"
                            },
                            please_wait: {
                                message: "Počakajte, zaznavanje Zaviralca pojavnih oken"
                            },
                            noinst_special_prog: {
                                message: "Najprej, za uporabo uporabniškega skripta potrebujete poseben program ali razširitev, ki lahko zažene uporabniške skripte."
                            },
                            noinst_subtitle: {
                                message: "AdGuard uporabniški skript Popup Blocker ni nameščen. Oglejte si spodnja navodila."
                            },
                            homepage: {
                                message: "Domača stran"
                            },
                            noinst_step_1: {
                                message: "1. korak: Namestite upravitelja uporabniških skriptov"
                            },
                            noinst_step_2: {
                                message: "2. korak: Uporabniški skript"
                            },
                            extension_name: {
                                message: "Zaviralec pojavnih oken z AdGuardom"
                            },
                            userscript_name: {
                                message: "AdGuard Zaviralec pojavnih oken",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokira pojavne oglase na spletnih straneh"
                            },
                            on_navigation_by_popunder: {
                                message: "Ta prehod na novo stran je verjetno posledica pojavnega okna. Ali želite nadaljevati?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Zaviralec pojavnih oken je prekinil izvajanje skripta, da bi preprečil preusmerjanje v ozadju",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Zaviralec pojavnih oken je na dolžnosti"
                            },
                            ext_disabled: {
                                message: "Zaviralec pojavnih oken je onemogočen za $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Zaviralec pojavnih oken je onemogočen za to domeno"
                            },
                            settings_saved: {
                                message: "Nastavitve so shranjene"
                            }
                        },
                        "sr-CS": {
                            show_popup: {
                                message: "Prikaži %destUrl%"
                            },
                            continue_blocking: {
                                message: "Nastavi sa blokiranjem"
                            },
                            allow_from: {
                                message: "Dozvoli iskačuće prozore za %origDomain%"
                            },
                            manage_pref: {
                                message: "Upravljaj postavkama..."
                            },
                            popup_text: {
                                message: "AdGuard je sprečio ovaj sajt da otvori %numPopup% iskačućih prozora"
                            },
                            options: {
                                message: "Opcije"
                            },
                            silence_noti: {
                                message: "Ne prikazuj ovu poruku na %origDomain%"
                            },
                            site_input_ph: {
                                message: "Unesite ime sajta"
                            },
                            add_site: {
                                message: "Dodaj sajt"
                            },
                            add: {
                                message: "Dodaj"
                            },
                            allowed_empty: {
                                message: "Lista dozvoljenih sajtova je prazna"
                            },
                            allowed: {
                                message: "Dozvoljeno"
                            },
                            silenced_empty: {
                                message: "Lista utišanih sajtova je prazna"
                            },
                            silenced: {
                                message: "Utišano"
                            },
                            allowed_tooltip: {
                                message: "Iskačući prozori će biti dozvoljeni za ovde prikazane domene."
                            },
                            silenced_tooltip: {
                                message: "Obaveštenja o blokiranim iskačućim prozorima neće biti prikazivana za ovde prikazane domene."
                            },
                            installFrom: {
                                message: "Instaliraj sa <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Korak 3: Osvežite ovu stranicu da dođete do userscript postavki"
                            },
                            noinst_ignore_if_ag: {
                                message: "Ako ste instalirali AdGuard za Windows, ovaj korak možete zanemariti jer je userscript za blokiranje iskačućih prozora preinstaliran."
                            },
                            noinst_rec: {
                                message: "(preporučuje se)"
                            },
                            please_wait: {
                                message: "Molim sačekajte, otkrivam blokatora iskačućih prozora"
                            },
                            noinst_special_prog: {
                                message: "Pre svega, za kkorišćenje userscript vam je potreban poseban program ili proširenje koje pokreće userscripts."
                            },
                            noinst_subtitle: {
                                message: "AdGuard userscript blokator iskačućih prozora nije instaliran. Pogledajte uputstva ispod."
                            },
                            homepage: {
                                message: "Početna stranica"
                            },
                            noinst_step_1: {
                                message: "Korak 1: Instalirajte usrscript upravljača"
                            },
                            noinst_step_2: {
                                message: "Korak 2: Userscript"
                            },
                            extension_name: {
                                message: "Blokator iskačućih prozora od AdGuard-a"
                            },
                            userscript_name: {
                                message: "AdGuard blokator iskačućih prozora",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Blokira iskačuće reklame na veb stranicama"
                            },
                            on_navigation_by_popunder: {
                                message: "Ovo preusmerenje na novu stranicu je verovatno uzrokovano iskačućim prozorom. Želite li da nastavite?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Blokator iskačućih prozora je odbacio izvršenje skripte kako bi sprečio pozadinsko preusmerenje",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Blokator iskačućih prozora je na dužnosti"
                            },
                            ext_disabled: {
                                message: "Blokator iskačućih prozora je isključen za $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Blokator iskačućih prozora je isključen za ovaj domen"
                            },
                            settings_saved: {
                                message: "Postavke sačuvane"
                            }
                        },
                        ta: {
                            show_popup: {
                                message: "%destUrl% ஐக் காட்டு"
                            },
                            continue_blocking: {
                                message: "தடுப்பதைத் தொடரவும்"
                            },
                            allow_from: {
                                message: "%origDomain% க்கு பாப்-அப்களை அனுமதிக்கவும்"
                            },
                            manage_pref: {
                                message: "விருப்பங்களை நிர்வகிக்கவும்..."
                            },
                            popup_text: {
                                message: "AdGuard இந்த வலைத்தளத்தை %numPopup% பாப்-அப் திறப்பதைத் தடுத்தது"
                            },
                            options: {
                                message: "விருப்பங்கள்"
                            },
                            silence_noti: {
                                message: "இந்த செய்தியை %origDomain% இல் காட்ட வேண்டாம்"
                            },
                            site_input_ph: {
                                message: "தளத்தின் பெயரை உள்ளிடவும்"
                            },
                            add_site: {
                                message: "தளத்தைச் சேர்க்கவும்"
                            },
                            add: {
                                message: "சேர்க்கவும்"
                            },
                            allowed_empty: {
                                message: "அனுமதிக்கப்பட்ட தளங்களின் பட்டியல் காலியாக உள்ளது"
                            },
                            allowed: {
                                message: "அனுமதிக்கப்பட்டது"
                            },
                            silenced_empty: {
                                message: "அமைதியான தளங்களின் பட்டியல் காலியாக உள்ளது"
                            },
                            silenced: {
                                message: "அமைதியான அறிவிப்புகள்"
                            },
                            allowed_tooltip: {
                                message: "இங்கே பட்டியலிடப்பட்ட களங்களுக்கு பாப்அப்கள் அனுமதிக்கப்படும்."
                            },
                            silenced_tooltip: {
                                message: "இங்கே பட்டியலிடப்பட்ட களங்களுக்கு தடுக்கப்பட்ட பாப்அப்களுக்கான அறிவிப்புகள் காண்பிக்கப்படாது."
                            },
                            installFrom: {
                                message: "<a>%name%</a> இலிருந்து நிறுவவும்"
                            },
                            noinst_step_3: {
                                message: "படி 3: பயனர் ஸ்கிரிப்ட் அமைப்புகளைப் பெற இந்தப் பக்கத்தைப் புதுப்பிக்கவும்"
                            },
                            noinst_ignore_if_ag: {
                                message: "நீங்கள் விண்டோஸுக்கான AdGuard ஐ நிறுவியிருந்தால், பாப்அப் தடுப்பான் பயனர் ஸ்கிரிப்ட் முன்பே நிறுவப்பட்டிருப்பதால் இந்த படிநிலையை நீங்கள் புறக்கணிக்கலாம்."
                            },
                            noinst_rec: {
                                message: "(பரிந்துரைக்கப்படுகிறது)"
                            },
                            please_wait: {
                                message: "தயவுசெய்து காத்திருங்கள், பாப்அப் தடுப்பைக் கண்டறிகிறது"
                            },
                            noinst_special_prog: {
                                message: "முதலாவதாக, ஒரு பயனர் ஸ்கிரிப்டைப் பயன்படுத்த உங்களுக்கு ஒரு சிறப்பு நிரல் அல்லது பயனர் ஸ்கிரிப்ட்களை இயக்கும் நீட்டிப்பு தேவை."
                            },
                            noinst_subtitle: {
                                message: "AdGuard பாப்அப் தடுப்பான் பயனர் ஸ்கிரிப்ட் நிறுவப்படவில்லை. கீழே உள்ள வழிமுறைகளைப் பார்க்கவும்."
                            },
                            homepage: {
                                message: "முகப்புப்பக்கம்"
                            },
                            noinst_step_1: {
                                message: "படி 1: பயனர் ஸ்கிரிப்ட் மேலாளரை நிறுவவும்"
                            },
                            noinst_step_2: {
                                message: "படி 2: பயனர் ஸ்கிரிப்ட்"
                            },
                            extension_name: {
                                message: "AdGuard இன் பாப்அப் தடுப்பான்"
                            },
                            userscript_name: {
                                message: "AdGuard பாப்அப் தடுப்பான்",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "வலைப்பக்கங்களில் பாப்அப் விளம்பரங்களைத் தடுக்கிறது"
                            },
                            on_navigation_by_popunder: {
                                message: "புதிய பக்கத்திற்கான இந்த மாற்றம் ஒரு பாப்-அண்டர் காரணமாக ஏற்படக்கூடும். தொடர விரும்புகிறீர்களா?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "பின்னணி திருப்பிவிடப்படுவதைத் தடுக்க பாப்அப் தடுப்பான் ஸ்கிரிப்ட் செயல்பாட்டை நிறுத்தியது",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "பாப்அப் தடுப்பான் செயலில் உள்ளது"
                            },
                            ext_disabled: {
                                message: "$DOMAIN$ க்கு பாப்அப் தடுப்பான் முடக்கப்பட்டுள்ளது",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "இந்த களத்திற்கு பாப்அப் தடுப்பான் முடக்கப்பட்டுள்ளது"
                            },
                            settings_saved: {
                                message: "அமைப்புகள் சேமிக்கப்பட்டன"
                            }
                        },
                        th: {
                            show_popup: {
                                message: "แสดง %destUrl%"
                            },
                            continue_blocking: {
                                message: "ปิดกั้นต่อไป"
                            },
                            allow_from: {
                                message: "อนุญาตป๊อปอัปสำหรับ %origDomain%"
                            },
                            manage_pref: {
                                message: "จัดการค่ากำหนด..."
                            },
                            popup_text: {
                                message: "AdGuard ป้องกันไม่ให้เว็บไซต์นี้เปิดหน้าต่างป๊อปอัพ %numPopup%"
                            },
                            options: {
                                message: "ตัวเลือก"
                            },
                            silence_noti: {
                                message: "อย่าแสดงข้อความนี้ใน %origDomain%"
                            },
                            site_input_ph: {
                                message: "ใส่ชื่อเว็บไซต์"
                            },
                            add_site: {
                                message: "เพิ่มเว็บไซต์"
                            },
                            add: {
                                message: "เพิ่ม"
                            },
                            allowed_empty: {
                                message: "รายการไซต์ที่อนุญาตว่างเปล่า"
                            },
                            allowed: {
                                message: "อนุญาต"
                            },
                            silenced_empty: {
                                message: "รายการไซต์ที่ถูกปิดกั้นว่างเปล่า"
                            },
                            silenced: {
                                message: "ปิดกั้น"
                            },
                            allowed_tooltip: {
                                message: "ป๊อปอัปจะได้รับอนุญาตสำหรับโดเมนที่แสดงที่นี่"
                            },
                            silenced_tooltip: {
                                message: "การแจ้งเตือนสำหรับป๊อปอัปที่ถูกปิดกั้นจะไม่แสดงสำหรับโดเมนที่แสดงที่นี่"
                            },
                            installFrom: {
                                message: "ติดตั้งจาก <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "ขั้นตอนที่ 3: รีเฟรชหน้านี้เพื่อไปที่การตั้งค่า userscript"
                            },
                            noinst_ignore_if_ag: {
                                message: "หากคุณติดตั้ง AdGuard สำหรับ Windows คุณสามารถข้ามขั้นตอนนี้ได้เนื่องจากผู้ใช้ Popup Blocker มาติดตั้งล่วงหน้า"
                            },
                            noinst_rec: {
                                message: "(แนะนำ)"
                            },
                            please_wait: {
                                message: "โปรดรอสักครู่ กำลังตรวจหา Popup Blocker"
                            },
                            noinst_special_prog: {
                                message: "ก่อนอื่น เพื่อใช้ userscript คุณต้องมีโปรแกรมหรือส่วนเสริมพิเศษที่รัน userscripts"
                            },
                            noinst_subtitle: {
                                message: "Userscript ของ AdGuard Popup Blocker ไม่ได้รับการติดตั้ง โปรดดูคำแนะนำด้านล่าง"
                            },
                            homepage: {
                                message: "หน้าหลัก"
                            },
                            noinst_step_1: {
                                message: "ขั้นตอนที่ 1: ติดตั้งตัวจัดการ usrscript"
                            },
                            noinst_step_2: {
                                message: "ขั้นตอนที่ 2: Userscript"
                            },
                            extension_name: {
                                message: "Popup Blocker โดย AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Popup Blocker",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "ปิดกั้นโฆษณาป๊อปอัพในหน้าเว็บ"
                            },
                            on_navigation_by_popunder: {
                                message: "การเปลี่ยนไปใช้หน้าใหม่นี้น่าจะเกิดจากป๊อปอันเดอร์ คุณต้องการทำต่อไปหรือไม่?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Popup Blocker ยกเลิกการทำงานของสคริปต์เพื่อป้องกันการเปลี่ยนพื้นหลัง",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Popup Blocker ทำหน้าที่"
                            },
                            ext_disabled: {
                                message: "Popup Blocker ถูกปิดใช้งานสำหรับ $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Popup Blocker ถูกปิดการใช้งานสำหรับโดเมนนี้"
                            },
                            settings_saved: {
                                message: "การตั้งค่าที่บันทึกไว้"
                            }
                        },
                        tr: {
                            show_popup: {
                                message: "%destUrl% sitesini göster"
                            },
                            continue_blocking: {
                                message: "Engellemeye devam et"
                            },
                            allow_from: {
                                message: "%origDomain% için açılır pencerelere izin ver"
                            },
                            manage_pref: {
                                message: "Tercihleri yönet..."
                            },
                            popup_text: {
                                message: "AdGuard bu sitenin %numPopup% açılır pencere açmasını önledi"
                            },
                            options: {
                                message: "Ayarlar"
                            },
                            silence_noti: {
                                message: "Bu mesajı %origDomain% üzerinde gösterme"
                            },
                            site_input_ph: {
                                message: "Site adını girin"
                            },
                            add_site: {
                                message: "Site ekle"
                            },
                            add: {
                                message: "Ekle"
                            },
                            allowed_empty: {
                                message: "İzin verilen sitelerin listesi boş"
                            },
                            allowed: {
                                message: "İzin verilen"
                            },
                            silenced_empty: {
                                message: "Sessize alınmış olan sitelerin listesi boş"
                            },
                            silenced: {
                                message: "Sessize alınmış"
                            },
                            allowed_tooltip: {
                                message: "Burada listelenen alan adları için açılır pencerelere izin verilecektir."
                            },
                            silenced_tooltip: {
                                message: "Engellenen açılır pencerelere ilişkin bildirimler, burada listelenen alan adları için gösterilmeyecektir."
                            },
                            installFrom: {
                                message: "<a>%name%</a>'dan yükle"
                            },
                            noinst_step_3: {
                                message: "Adım 3: Kullanıcı betikleri ayarlarını almak için bu sayfayı yenile"
                            },
                            noinst_ignore_if_ag: {
                                message: "Windows için AdGuard yüklediyseniz, Açılır Pencere Engelleyici betiği önceden yüklü olarak geldiği için bu adımı görmezden gelebilirsiniz."
                            },
                            noinst_rec: {
                                message: "(Tavsiye edilen)"
                            },
                            please_wait: {
                                message: "Lütfen bekleyin, Açılır Pencere Engelleyici tespit ediliyor"
                            },
                            noinst_special_prog: {
                                message: "Bir kullanıcı betiği kullanmak için öncelikle kullanıcı betiği çalıştıran özel bir programa veya uzantıya ihtiyacınız var."
                            },
                            noinst_subtitle: {
                                message: "AdGuard Açılır Pencere Engelleyicisi kullanıcı betiği yüklü değil. Lütfen aşağıdaki talimata bakın."
                            },
                            homepage: {
                                message: "Ana sayfa"
                            },
                            noinst_step_1: {
                                message: "1. Adım: Bir kullanıcı betiği yöneticisi yükle"
                            },
                            noinst_step_2: {
                                message: "2. Adım: Kullanıcı betiği"
                            },
                            extension_name: {
                                message: "AdGuard ile Açılır Pencere Engelleyici"
                            },
                            userscript_name: {
                                message: "AdGuard Açılır Pencere Engelleyici",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Web sayfalarında açılır pencere reklamlarını engeller"
                            },
                            on_navigation_by_popunder: {
                                message: "Yeni sayfaya geçiş, bir gizli pencere nedeniyle meydana gelmiş olabilir. Devam etmek istiyor musunuz?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Açılır Pencere Engelleyici arka plan yönlendirmesini önlemek için bir komut dosyasının çalışmasını durdurdu",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Açılır Pencere Engelleyici görevinin başında"
                            },
                            ext_disabled: {
                                message: "Açılır Pencere Engelleyici $DOMAIN$ için devre dışı bırakıldı",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Açılır Pencere Engelleyici bu alan adı için devre dışı bırakıldı"
                            },
                            settings_saved: {
                                message: "Ayarlar kaydedildi"
                            }
                        },
                        uk: {
                            show_popup: {
                                message: "Показати %destUrl%"
                            },
                            continue_blocking: {
                                message: "Продовжити блокування"
                            },
                            allow_from: {
                                message: "Дозволити спливні вікна для %origDomain%"
                            },
                            manage_pref: {
                                message: "Керувати налаштуваннями..."
                            },
                            popup_text: {
                                message: "AdGuard запобіг показу спливних вікон %numPopup% на цьому сайті"
                            },
                            options: {
                                message: "Параметри"
                            },
                            silence_noti: {
                                message: "Не показувати це повідомлення на %origDomain%"
                            },
                            site_input_ph: {
                                message: "Введіть назву сайту"
                            },
                            add_site: {
                                message: "Додати сайт"
                            },
                            add: {
                                message: "Додати"
                            },
                            allowed_empty: {
                                message: "Список винятків порожній"
                            },
                            allowed: {
                                message: "Винятки"
                            },
                            silenced_empty: {
                                message: "Список сайтів з вимкненими сповіщеннями порожній"
                            },
                            silenced: {
                                message: "Без повідомлень"
                            },
                            allowed_tooltip: {
                                message: "Спливні вікна будуть дозволені на сайтах з цього списку."
                            },
                            silenced_tooltip: {
                                message: "Повідомлення про заблоковані спливні вікна не відображатимуться на сайтах з цього списку."
                            },
                            installFrom: {
                                message: "Встановити з <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Крок 3: оновіть цю сторінку, щоб перейти до налаштувань розширення"
                            },
                            noinst_ignore_if_ag: {
                                message: "Якщо ви встановили AdGuard для Windows, можете пропустити цей крок, оскільки розширення «Блокувальник спливних вікон» уже встановлено. Ймовірно, його необхідно увімкнути в налаштуваннях AdGuard."
                            },
                            noinst_rec: {
                                message: "(Рекомендовано)"
                            },
                            please_wait: {
                                message: "Будь ласка, зачекайте, спроба виявити Блокувальник спливних вікон"
                            },
                            noinst_special_prog: {
                                message: "Щоб використовувати скрипт, потрібна спеціальна програма або браузерне розширення, що може працювати з користувацькими скриптами."
                            },
                            noinst_subtitle: {
                                message: "Розширення «Блокувальник спливних вікон AdGuard» не встановлено. Будь ласка, виконайте наступні кроки."
                            },
                            homepage: {
                                message: "Домашня сторінка"
                            },
                            noinst_step_1: {
                                message: "Крок 1: встановіть програму для керування користувацькими скриптами"
                            },
                            noinst_step_2: {
                                message: "Крок 2: користувацький скрипт"
                            },
                            extension_name: {
                                message: "Блокувальник спливних вікон AdGuard"
                            },
                            userscript_name: {
                                message: "Блокувальник спливних вікон AdGuard",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Блокує спливну рекламу на вебсторінках"
                            },
                            on_navigation_by_popunder: {
                                message: "Цей перехід на нову сторінку, ймовірно, міг бути викликаний «поп-андером». Бажаєте продовжити?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Блокувальник спливних вікон перервав виконання скрипта, щоб запобігти фоновому перенаправленню",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Блокувальник спливних вікон готовий до роботи"
                            },
                            ext_disabled: {
                                message: "Блокувальник спливних вікон вимкнено для $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Блокувальник спливних вікон вимкнено для цього домена"
                            },
                            settings_saved: {
                                message: "Налаштування збережено"
                            }
                        },
                        vi: {
                            show_popup: {
                                message: "Hiện %destUrl%"
                            },
                            continue_blocking: {
                                message: "Tiếp tục chặn"
                            },
                            allow_from: {
                                message: "Cho phép cửa sổ bật lên cho %origDomain%"
                            },
                            manage_pref: {
                                message: "Quản lý tùy chọn..."
                            },
                            popup_text: {
                                message: "AdGuard đã ngăn trang web này mở %numPopup% cửa sổ bật lên"
                            },
                            options: {
                                message: "Tuỳ chọn"
                            },
                            silence_noti: {
                                message: "Đừng hiển thị thông báo này trên %origDomain%"
                            },
                            site_input_ph: {
                                message: "Nhập tên trang web"
                            },
                            add_site: {
                                message: "Thêm một trang web"
                            },
                            add: {
                                message: "Thêm"
                            },
                            allowed_empty: {
                                message: "Danh sách các trang web được phép trống"
                            },
                            allowed: {
                                message: "Được phép"
                            },
                            silenced_empty: {
                                message: "Danh sách các trang im lặng trống"
                            },
                            silenced: {
                                message: "Im lặng"
                            },
                            allowed_tooltip: {
                                message: "Cửa sổ bật lên sẽ được phép cho các tên miền được liệt kê ở đây."
                            },
                            silenced_tooltip: {
                                message: "Thông báo cho cửa sổ bật lên bị chặn sẽ không được hiển thị cho các tên miền được liệt kê ở đây."
                            },
                            installFrom: {
                                message: "Cài đặt từ <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "Bước 3: Làm mới trang này để có được cài đặt usercript"
                            },
                            noinst_ignore_if_ag: {
                                message: "Nếu bạn đã cài đặt AdGuard cho Windows, bạn có thể bỏ qua bước này vì bản mô tả người dùng Popup Blocker được cài đặt sẵn."
                            },
                            noinst_rec: {
                                message: "(Khuyến nghị)"
                            },
                            please_wait: {
                                message: "Xin vui lòng chờ, phát hiện Trình chặn Popup"
                            },
                            noinst_special_prog: {
                                message: "Trước hết, để sử dụng một userscript bạn cần một chương trình đặc biệt hoặc tiện ích mở rộng chạy userscripts."
                            },
                            noinst_subtitle: {
                                message: "Bản tin người dùng AdGuard Popup Blocker chưa được cài đặt. Xin vui lòng xem hướng dẫn dưới đây."
                            },
                            homepage: {
                                message: "Trang chủ"
                            },
                            noinst_step_1: {
                                message: "Bước 1: Cài đặt trình quản lý usrscript"
                            },
                            noinst_step_2: {
                                message: "Bước 2: Userscript"
                            },
                            extension_name: {
                                message: "Trình chặn Popup của AdGuard"
                            },
                            userscript_name: {
                                message: "AdGuard Popup Blocker",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "Chặn quảng cáo bật lên trên các trang web"
                            },
                            on_navigation_by_popunder: {
                                message: "Việc chuyển đổi sang trang mới này có thể được gây ra bởi một cửa sổ bật xuống. Bạn có muốn tiếp tục?",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "Trình chặn Popup đã hủy bỏ việc thực thi tập lệnh để ngăn chuyển hướng nền",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "Trình chặn Popup đang làm nhiệm vụ"
                            },
                            ext_disabled: {
                                message: "Trình chặn Popup bị vô hiệu hóa cho $DOMAIN$",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "Trình chặn Popup bị vô hiệu hóa cho miền này"
                            },
                            settings_saved: {
                                message: "Đã lưu cài đặt"
                            }
                        },
                        zh: {
                            show_popup: {
                                message: "显示 %destUrl%"
                            },
                            continue_blocking: {
                                message: "继续拦截"
                            },
                            allow_from: {
                                message: "允许 %origDomain% 弹窗"
                            },
                            manage_pref: {
                                message: "管理首选项..."
                            },
                            popup_text: {
                                message: "AdGuard 已防止此网站打开的 %numPopup%个弹窗"
                            },
                            options: {
                                message: "选项"
                            },
                            silence_noti: {
                                message: "在 %origDomain% 上不再显示此讯息"
                            },
                            site_input_ph: {
                                message: "输入网站名称"
                            },
                            add_site: {
                                message: "添加网站"
                            },
                            add: {
                                message: "添加"
                            },
                            allowed_empty: {
                                message: "允许的网站列表为空"
                            },
                            allowed: {
                                message: "允许"
                            },
                            silenced_empty: {
                                message: "禁止的网站列表"
                            },
                            silenced: {
                                message: "禁止"
                            },
                            allowed_tooltip: {
                                message: "此处列出的是允许弹窗的域。"
                            },
                            silenced_tooltip: {
                                message: "此处列出的是禁止弹出的域。"
                            },
                            installFrom: {
                                message: "安装从 <a>%name%</a>"
                            },
                            noinst_step_3: {
                                message: "步骤3：刷新此页已获取用户脚本设置"
                            },
                            noinst_ignore_if_ag: {
                                message: "如您已安装 AdGuard for Windows，则您可忽略此步骤，因为其已预安装弹窗拦截器用户脚本。"
                            },
                            noinst_rec: {
                                message: "（推荐）"
                            },
                            please_wait: {
                                message: "请稍后，正在检测弹窗拦截器"
                            },
                            noinst_special_prog: {
                                message: "首先，要使用用户脚本，您需要特殊的程序的以运行用户脚本。"
                            },
                            noinst_subtitle: {
                                message: "AdGuard Popup Blocker 用户脚本未安装。请查看以下指示说明。"
                            },
                            homepage: {
                                message: "主页"
                            },
                            noinst_step_1: {
                                message: "步骤 1：安装用户脚本管理器"
                            },
                            noinst_step_2: {
                                message: "步骤 2：用户脚本"
                            },
                            extension_name: {
                                message: "AdGuard 弹窗拦截器"
                            },
                            userscript_name: {
                                message: "AdGuard 弹窗拦截器",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "拦截网页弹窗广告"
                            },
                            on_navigation_by_popunder: {
                                message: "此网页导航可能导致弹窗。您要继续？",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "PopupBlocker 已中止脚本执行以防止后台重新定向",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "弹窗拦截器工作中"
                            },
                            ext_disabled: {
                                message: "已在 $DOMAIN$ 上禁用弹窗拦截器",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "弹窗拦截器无法运行于此域之上"
                            },
                            settings_saved: {
                                message: "设置已保存"
                            }
                        },
                        "zh-HK": {
                            show_popup: {
                                message: "顯示 %destUrl%"
                            },
                            continue_blocking: {
                                message: "繼續封鎖"
                            },
                            allow_from: {
                                message: "允許 %origDomain% 的彈出式視窗"
                            },
                            manage_pref: {
                                message: "管理偏好設定"
                            },
                            popup_text: {
                                message: "AdGuard 已阻止此網站開啟 %numPopup% 個彈出式視窗"
                            },
                            options: {
                                message: "選項"
                            },
                            silence_noti: {
                                message: "不再 %origDomain% 上提示"
                            },
                            site_input_ph: {
                                message: "輸入網站名稱"
                            },
                            add_site: {
                                message: "新增網站"
                            },
                            add: {
                                message: "新增"
                            },
                            allowed_empty: {
                                message: "允許清單為空的"
                            },
                            allowed: {
                                message: "已允許"
                            },
                            silenced_empty: {
                                message: "已靜音清單為空的"
                            },
                            silenced: {
                                message: "已靜音"
                            },
                            allowed_tooltip: {
                                message: "允許彈出式視窗網域清單"
                            },
                            silenced_tooltip: {
                                message: "已設定靜音不通知的網域清單"
                            },
                            installFrom: {
                                message: "從 {$startLink}{$name}{$endLink} 安裝"
                            },
                            noinst_step_3: {
                                message: "步驟 3：重新整理網頁來設定使用者腳本"
                            },
                            noinst_ignore_if_ag: {
                                message: "如果您已安裝 AdGuard for Windows，您可以不必安裝這個使用者腳本，此功能已內建於 AdGuard for Windows 。"
                            },
                            noinst_rec: {
                                message: "（推薦）"
                            },
                            please_wait: {
                                message: "正在偵測彈出式視窗封鎖器，請稍候"
                            },
                            noinst_special_prog: {
                                message: "首先，要使用一個使用者腳本您需要特殊的程式或瀏覽器的擴充套件。"
                            },
                            noinst_subtitle: {
                                message: "彈出式視窗封鎖器腳本尚未安裝。請閱讀以下使用說明。"
                            },
                            homepage: {
                                message: "首頁"
                            },
                            noinst_step_1: {
                                message: "步驟 1：安裝使用者腳本管理器"
                            },
                            noinst_step_2: {
                                message: "步驟 2：準備好使用者腳本"
                            },
                            extension_name: {
                                message: "由 AdGuard 提供的彈出式視窗封鎖器"
                            },
                            userscript_name: {
                                message: "AdGuard 彈出式視窗封鎖器",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "封鎖網頁上的彈出式視窗廣告"
                            },
                            on_navigation_by_popunder: {
                                message: "頁面轉跳可能是由彈出式視窗進行的，您要繼續嗎？",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "彈出式視窗封鎖器已阻止網頁內的腳本運作避免網頁被重新導向",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "彈出式視窗封鎖器正在運作"
                            },
                            ext_disabled: {
                                message: "彈出式視窗封鎖器已在 $DOMAIN$ 上停用",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "彈出式視窗封鎖器已在此網域上停用"
                            },
                            settings_saved: {
                                message: "已儲存設定"
                            }
                        },
                        "zh-TW": {
                            show_popup: {
                                message: "顯示 %destUrl%"
                            },
                            continue_blocking: {
                                message: "繼續封鎖"
                            },
                            allow_from: {
                                message: "允許在 %origDomain% 的彈出式視窗"
                            },
                            manage_pref: {
                                message: "管理偏好設定…"
                            },
                            popup_text: {
                                message: "AdGuard 已防止此網站開啟 %numPopup% 個彈出式視窗"
                            },
                            options: {
                                message: "選項"
                            },
                            silence_noti: {
                                message: "不要於 %origDomain% 上顯示該訊息"
                            },
                            site_input_ph: {
                                message: "輸入站名"
                            },
                            add_site: {
                                message: "新增一個網站"
                            },
                            add: {
                                message: "新增"
                            },
                            allowed_empty: {
                                message: "已允許的網站之清單為空"
                            },
                            allowed: {
                                message: "已允許的"
                            },
                            silenced_empty: {
                                message: "已靜默的網站之清單為空"
                            },
                            silenced: {
                                message: "已靜默的"
                            },
                            allowed_tooltip: {
                                message: "在這裡被列出的網域，彈出式視窗將被允許。"
                            },
                            silenced_tooltip: {
                                message: "在這裡被列出的網域，關於已封鎖的彈出式視窗之通知將不被顯示。"
                            },
                            installFrom: {
                                message: "從 <a>%name%</a> 安裝"
                            },
                            noinst_step_3: {
                                message: "步驟 3：重新整理此頁面以到達使用者腳本設定"
                            },
                            noinst_ignore_if_ag: {
                                message: "如果您已安裝 AdGuard for Windows，您可忽略該步驟，因為彈出式視窗封鎖器使用者腳本變為已預安裝的。"
                            },
                            noinst_rec: {
                                message: "（被建議的）"
                            },
                            please_wait: {
                                message: "請稍候，正在檢測彈出式視窗封鎖器"
                            },
                            noinst_special_prog: {
                                message: "首先，為使用一個使用者腳本，您需要執行使用者腳本之專門的程式或擴充功能。"
                            },
                            noinst_subtitle: {
                                message: "AdGuard 彈出式視窗封鎖器使用者腳本未被安裝。請查看下面的用法說明。"
                            },
                            homepage: {
                                message: "首頁"
                            },
                            noinst_step_1: {
                                message: "步驟 1：安裝使用者腳本管理器"
                            },
                            noinst_step_2: {
                                message: "步驟 2：使用者腳本"
                            },
                            extension_name: {
                                message: "由 AdGuard 提供之彈出式視窗封鎖器"
                            },
                            userscript_name: {
                                message: "AdGuard 彈出式視窗封鎖器",
                                platform: ["userscript", "userscript_settings"]
                            },
                            extension_description: {
                                message: "封鎖於網頁上之彈出式視窗廣告"
                            },
                            on_navigation_by_popunder: {
                                message: "此至新的頁面之轉換很可能是由一個背彈式視窗引起。您想要繼續嗎？",
                                platform: ["userscript"]
                            },
                            aborted_popunder_execution: {
                                message: "彈出式視窗封鎖器已中止腳本執行以防止背景重新導向",
                                platform: ["userscript"]
                            },
                            ext_enabled: {
                                message: "彈出式視窗封鎖器執勤中"
                            },
                            ext_disabled: {
                                message: "在 $DOMAIN$，彈出式視窗封鎖器被禁用",
                                placeholders: {
                                    domain: {
                                        content: "$1"
                                    }
                                }
                            },
                            ext_disabled_default: {
                                message: "在此網域，彈出式視窗封鎖器被禁用"
                            },
                            settings_saved: {
                                message: "設定被儲存"
                            }
                        }
                    };
                    const d = () => "en",
                        g = () => {
                            let e;
                            e = window.navigator.languages ? window.navigator.languages[0] : window.navigator.language;
                            const s = (e => {
                                if (e in u) return e;
                                const s = e.replace("_", "-");
                                if (s in u) return s;
                                const t = e.toLowerCase();
                                if (t in u) return t;
                                const a = s.toLowerCase();
                                if (a in u) return a;
                                const n = a.split("-")[0];
                                return n in u ? n : null
                            })(e);
                            return s || "en"
                        },
                        c = {
                            getMessage: e => {
                                const s = g(),
                                    t = u[s];
                                let a;
                                return a = t && e in t ? t[e].message : (e => {
                                    const s = u.en;
                                    let t;
                                    return s && e in s ? t = s[e].message : (console.error(`[AdGuard PopUp Blocker] Couldn't find message by key "${e}" in base locale. Please report support`), t = e), t
                                })(e), a
                            },
                            getUILanguage: g,
                            getBaseMessage: e => e,
                            getBaseUILanguage: d
                        };
                    var _, h, k, f;

                    function b(e, s, t, a, n) {
                        var i = {
                            type: e,
                            props: s,
                            key: t,
                            ref: a,
                            __k: null,
                            __: null,
                            __b: 0,
                            __e: null,
                            __d: void 0,
                            __c: null,
                            __h: null,
                            constructor: void 0,
                            __v: null == n ? ++k : n
                        };
                        return null == n && null != h.vnode && h.vnode(i), i
                    }

                    function v(e, s, t) {
                        return s in e ? Object.defineProperty(e, s, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[s] = t, e
                    }

                    function w(e, s) {
                        for (var t = 0; t < s.length; t++) {
                            var a = s[t];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }

                    function y(e, s) {
                        (null == s || s > e.length) && (s = e.length);
                        for (var t = 0, a = new Array(s); t < s; t++) a[t] = e[t];
                        return a
                    }

                    function x(e) {
                        return function(e) {
                            if (Array.isArray(e)) return y(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || function(e, s) {
                            if (e) {
                                if ("string" == typeof e) return y(e, s);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? y(e, s) : void 0
                            }
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }
                    _ = [].slice, h = {
                            __e: function(e, s, t, a) {
                                for (var n, i, o; s = s.__;)
                                    if ((n = s.__c) && !n.__) try {
                                        if ((i = n.constructor) && null != i.getDerivedStateFromError && (n.setState(i.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e, a || {}), o = n.__d), o) return n.__E = n
                                    } catch (s) {
                                        e = s
                                    }
                                throw e
                            }
                        }, k = 0, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
                        function(e) {
                            e.PLACEHOLDER = "placeholder", e.TEXT = "text", e.TAG = "tag", e.VOID_TAG = "void_tag"
                        }(f || (f = {}));
                    var A, j = function(e) {
                            return e.type === f.TAG
                        },
                        P = function(e) {
                            return e.type === f.PLACEHOLDER
                        },
                        z = function(e) {
                            return e.type === f.VOID_TAG
                        },
                        O = function(e) {
                            return {
                                type: f.TEXT,
                                value: e
                            }
                        },
                        T = function(e, s) {
                            var t = e.trim();
                            return {
                                type: f.TAG,
                                value: t,
                                children: s
                            }
                        };
                    ! function(e) {
                        e.TEXT = "text", e.TAG = "tag", e.PLACEHOLDER = "placeholder"
                    }(A || (A = {}));
                    var D = "<",
                        E = ">",
                        B = "/",
                        G = "%",
                        I = function(e) {
                            var s = e.text;
                            if (s.length > 0) {
                                var t = O(s);
                                e.stack.length > 0 ? e.stack.push(t) : e.result.push(t)
                            }
                            e.text = ""
                        },
                        $ = function(e) {
                            return e.split(" ").length > 1
                        },
                        S = function(e) {
                            var s = e.currChar,
                                t = e.currIdx;
                            return s === D ? (e.lastTextStateChangeIdx = t, A.TAG) : s === G ? (e.lastTextStateChangeIdx = t, A.PLACEHOLDER) : (e.text += s, A.TEXT)
                        },
                        M = function(e) {
                            var s, t = e.currChar,
                                a = e.currIdx,
                                n = e.lastTextStateChangeIdx,
                                i = e.placeholder,
                                o = e.stack,
                                r = e.result,
                                p = e.str;
                            if (t === G) {
                                if (a - n == 1) return e.text += p.substring(n, a), A.TEXT;
                                I(e);
                                var l = (s = i, {
                                    type: f.PLACEHOLDER,
                                    value: s
                                });
                                return o.length > 0 ? o.push(l) : r.push(l), e.placeholder = "", A.TEXT
                            }
                            return e.placeholder += t, A.PLACEHOLDER
                        },
                        C = function(e) {
                            var s, t, a = e.currChar,
                                n = e.text,
                                i = e.stack,
                                o = e.result,
                                r = e.lastTextStateChangeIdx,
                                p = e.currIdx,
                                l = e.str,
                                m = e.tag;
                            if (a === E) {
                                if (0 === m.indexOf(B)) {
                                    m = m.substring(1);
                                    var u = [];
                                    n.length > 0 && (u.push(O(n)), e.text = "");
                                    for (var d = !1; !d && i.length > 0;) {
                                        var g = i.pop();
                                        if (g === m) {
                                            var c = T(m, u);
                                            i.length > 0 ? i.push(c) : o.push(c), u = [], d = !0
                                        } else {
                                            if ("string" == typeof(t = g) || !t.type) throw "string" == typeof g && $(g) ? new Error("Tags in string should not have attributes: ".concat(l)) : new Error("String has unbalanced tags: ".concat(l));
                                            u.unshift(g)
                                        }
                                        if (0 === i.length && u.length > 0) throw new Error("String has unbalanced tags: ".concat(l))
                                    }
                                    return e.tag = "", A.TEXT
                                }
                                if (m.lastIndexOf(B) === m.length - 1) {
                                    m = m.substring(0, m.length - 1), I(e);
                                    var _ = (s = m.trim(), {
                                        type: f.VOID_TAG,
                                        value: s
                                    });
                                    return i.length > 0 ? i.push(_) : o.push(_), e.tag = "", A.TEXT
                                }
                                return I(e), i.push(m), e.tag = "", A.TEXT
                            }
                            return a === D ? (e.text += l.substring(r, p), e.lastTextStateChangeIdx = p, e.tag = "", A.TAG) : (e.tag += a, A.TAG)
                        };

                    function L(e, s) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            s && (a = a.filter((function(s) {
                                return Object.getOwnPropertyDescriptor(e, s).enumerable
                            }))), t.push.apply(t, a)
                        }
                        return t
                    }

                    function N(e) {
                        for (var s = 1; s < arguments.length; s++) {
                            var t = null != arguments[s] ? arguments[s] : {};
                            s % 2 ? L(Object(t), !0).forEach((function(s) {
                                v(e, s, t[s])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach((function(s) {
                                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                            }))
                        }
                        return e
                    }
                    var U, F, W = function(e, s) {
                            return s ? "<".concat(e, ">").concat(s, "</").concat(e, ">") : "<".concat(e, "/>")
                        },
                        R = function e() {
                            for (var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = [], n = N(N({}, {
                                    p: function(e) {
                                        return W("p", e)
                                    },
                                    b: function(e) {
                                        return W("b", e)
                                    },
                                    strong: function(e) {
                                        return W("strong", e)
                                    },
                                    tt: function(e) {
                                        return W("tt", e)
                                    },
                                    s: function(e) {
                                        return W("s", e)
                                    },
                                    i: function(e) {
                                        return W("i", e)
                                    }
                                }), t), i = 0; i < s.length;) {
                                var o = s[i];
                                if (o.type === f.TEXT) a.push(o.value);
                                else if (j(o)) {
                                    var r = x(e(o.children, n)),
                                        p = n[o.value];
                                    if (!p) throw new Error("Value ".concat(o.value, " wasn't provided"));
                                    "function" == typeof p ? a.push(p(r.join(""))) : a.push(p)
                                } else if (z(o)) {
                                    var l = n[o.value];
                                    if (!l || "string" != typeof l) throw new Error("Value ".concat(o.value, " wasn't provided"));
                                    a.push(l)
                                } else if (P(o)) {
                                    var m = n[o.value];
                                    if (!m || "string" != typeof m) throw new Error("Value ".concat(o.value, " wasn't provided"));
                                    a.push(m)
                                }
                                i += 1
                            }
                            return a
                        },
                        q = function(e, s) {
                            var t = function() {
                                    for (var e, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = {
                                            stack: [],
                                            result: [],
                                            currIdx: 0,
                                            lastTextStateChangeIdx: 0,
                                            tag: "",
                                            text: "",
                                            placeholder: "",
                                            str: s
                                        }, a = (v(e = {}, A.TEXT, S), v(e, A.PLACEHOLDER, M), v(e, A.TAG, C), e), n = A.TEXT; t.currIdx < s.length;) t.currChar = s[t.currIdx], n = (0, a[n])(t), t.currIdx += 1;
                                    var i = t.result,
                                        o = t.text,
                                        r = t.stack,
                                        p = t.lastTextStateChangeIdx;
                                    if (n !== A.TEXT) {
                                        var l = s.substring(p);
                                        (l + o).length > 0 && i.push(O(o + l))
                                    } else o.length > 0 && i.push(O(o));
                                    if (r.length > 0) throw new Error("String has unbalanced tags: ".concat(t.str));
                                    return i
                                }(e),
                                a = {};
                            return s && Object.keys(s).forEach((function(e) {
                                var t = s[e];
                                a[e] = "function" == typeof t ? t : String(t)
                            })), R(t, a)
                        };
                    ! function(e) {
                        e.az = "az", e.bo = "bo", e.dz = "dz", e.id = "id", e.ja = "ja", e.jv = "jv", e.ka = "ka", e.km = "km", e.kn = "kn", e.ko = "ko", e.ms = "ms", e.th = "th", e.tr = "tr", e.vi = "vi", e.zh = "zh", e.zh_cn = "zh_cn", e.zh_tw = "zh_tw", e.af = "af", e.bn = "bn", e.bg = "bg", e.ca = "ca", e.da = "da", e.de = "de", e.el = "el", e.en = "en", e.eo = "eo", e.es = "es", e.et = "et", e.eu = "eu", e.fa = "fa", e.fi = "fi", e.fo = "fo", e.fur = "fur", e.fy = "fy", e.gl = "gl", e.gu = "gu", e.ha = "ha", e.he = "he", e.hu = "hu", e.is = "is", e.it = "it", e.ku = "ku", e.lb = "lb", e.ml = "ml", e.mn = "mn", e.mr = "mr", e.nah = "nah", e.nb = "nb", e.ne = "ne", e.nl = "nl", e.nn = "nn", e.no = "no", e.oc = "oc", e.om = "om", e.or = "or", e.pa = "pa", e.pap = "pap", e.ps = "ps", e.pt = "pt", e.pt_pt = "pt_pt", e.pt_br = "pt_br", e.so = "so", e.sq = "sq", e.sv = "sv", e.sw = "sw", e.ta = "ta", e.te = "te", e.tk = "tk", e.ur = "ur", e.zu = "zu", e.am = "am", e.bh = "bh", e.fil = "fil", e.fr = "fr", e.gun = "gun", e.hi = "hi", e.hy = "hy", e.ln = "ln", e.mg = "mg", e.nso = "nso", e.xbr = "xbr", e.ti = "ti", e.wa = "wa", e.be = "be", e.bs = "bs", e.hr = "hr", e.ru = "ru", e.sr = "sr", e.uk = "uk", e.cs = "cs", e.sk = "sk", e.ga = "ga", e.lt = "lt", e.sl = "sl", e.mk = "mk", e.mt = "mt", e.lv = "lv", e.pl = "pl", e.cy = "cy", e.ro = "ro", e.ar = "ar"
                    }(F || (F = {}));
                    var V = (v(U = {}, F.az, 2), v(U, F.bo, 2), v(U, F.dz, 2), v(U, F.id, 2), v(U, F.ja, 2), v(U, F.jv, 2), v(U, F.ka, 2), v(U, F.km, 2), v(U, F.kn, 2), v(U, F.ko, 2), v(U, F.ms, 2), v(U, F.th, 2), v(U, F.tr, 2), v(U, F.vi, 2), v(U, F.zh, 2), v(U, F.zh_cn, 2), v(U, F.zh_tw, 2), v(U, F.af, 3), v(U, F.bn, 3), v(U, F.bg, 3), v(U, F.ca, 3), v(U, F.da, 3), v(U, F.de, 3), v(U, F.el, 3), v(U, F.en, 3), v(U, F.eo, 3), v(U, F.es, 3), v(U, F.et, 3), v(U, F.eu, 3), v(U, F.fa, 3), v(U, F.fi, 3), v(U, F.fo, 3), v(U, F.fur, 3), v(U, F.fy, 3), v(U, F.gl, 3), v(U, F.gu, 3), v(U, F.ha, 3), v(U, F.he, 3), v(U, F.hu, 3), v(U, F.is, 3), v(U, F.it, 3), v(U, F.ku, 3), v(U, F.lb, 3), v(U, F.ml, 3), v(U, F.mn, 3), v(U, F.mr, 3), v(U, F.nah, 3), v(U, F.nb, 3), v(U, F.ne, 3), v(U, F.nl, 3), v(U, F.nn, 3), v(U, F.no, 3), v(U, F.oc, 3), v(U, F.om, 3), v(U, F.or, 3), v(U, F.pa, 3), v(U, F.pap, 3), v(U, F.ps, 3), v(U, F.pt, 3), v(U, F.pt_pt, 3), v(U, F.pt_br, 3), v(U, F.so, 3), v(U, F.sq, 3), v(U, F.sv, 3), v(U, F.sw, 3), v(U, F.ta, 3), v(U, F.te, 3), v(U, F.tk, 3), v(U, F.ur, 3), v(U, F.zu, 3), v(U, F.am, 2), v(U, F.bh, 2), v(U, F.fil, 2), v(U, F.fr, 3), v(U, F.gun, 2), v(U, F.hi, 2), v(U, F.hy, 2), v(U, F.ln, 2), v(U, F.mg, 2), v(U, F.nso, 2), v(U, F.xbr, 2), v(U, F.ti, 2), v(U, F.wa, 2), v(U, F.be, 4), v(U, F.bs, 4), v(U, F.hr, 4), v(U, F.ru, 4), v(U, F.sr, 4), v(U, F.uk, 4), v(U, F.cs, 4), v(U, F.sk, 4), v(U, F.ga, 4), v(U, F.lt, 4), v(U, F.sl, 5), v(U, F.mk, 3), v(U, F.mt, 5), v(U, F.lv, 3), v(U, F.pl, 4), v(U, F.cy, 4), v(U, F.ro, 4), v(U, F.ar, 6), U),
                        H = function(e, s, t, a) {
                            ! function(e, s, t) {
                                var a = e.split("|");
                                if (a.length !== V[s]) throw new Error('Invalid plural string "'.concat(t, '" for locale ').concat(s, ": ").concat(a.length, " given; need: ").concat(V[s]))
                            }(e, t, a);
                            var n = e.split("|"),
                                i = function(e, s) {
                                    var t;
                                    if (0 === s) return 0;
                                    var a = s % 10 == 1 && s % 100 != 11 ? 1 : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 10 || s % 100 >= 20) ? 2 : 3;
                                    return (v(t = {}, F.az, 1), v(t, F.bo, 1), v(t, F.dz, 1), v(t, F.id, 1), v(t, F.ja, 1), v(t, F.jv, 1), v(t, F.ka, 1), v(t, F.km, 1), v(t, F.kn, 1), v(t, F.ko, 1), v(t, F.ms, 1), v(t, F.th, 1), v(t, F.tr, 1), v(t, F.vi, 1), v(t, F.zh, 1), v(t, F.zh_tw, 1), v(t, F.zh_cn, 1), v(t, F.af, 1 === s ? 1 : 2), v(t, F.bn, 1 === s ? 1 : 2), v(t, F.bg, 1 === s ? 1 : 2), v(t, F.ca, 1 === s ? 1 : 2), v(t, F.da, 1 === s ? 1 : 2), v(t, F.de, 1 === s ? 1 : 2), v(t, F.el, 1 === s ? 1 : 2), v(t, F.en, 1 === s ? 1 : 2), v(t, F.eo, 1 === s ? 1 : 2), v(t, F.es, 1 === s ? 1 : 2), v(t, F.et, 1 === s ? 1 : 2), v(t, F.eu, 1 === s ? 1 : 2), v(t, F.fa, 1 === s ? 1 : 2), v(t, F.fi, 1 === s ? 1 : 2), v(t, F.fo, 1 === s ? 1 : 2), v(t, F.fur, 1 === s ? 1 : 2), v(t, F.fy, 1 === s ? 1 : 2), v(t, F.gl, 1 === s ? 1 : 2), v(t, F.gu, 1 === s ? 1 : 2), v(t, F.ha, 1 === s ? 1 : 2), v(t, F.he, 1 === s ? 1 : 2), v(t, F.hu, 1 === s ? 1 : 2), v(t, F.is, 1 === s ? 1 : 2), v(t, F.it, 1 === s ? 1 : 2), v(t, F.ku, 1 === s ? 1 : 2), v(t, F.lb, 1 === s ? 1 : 2), v(t, F.ml, 1 === s ? 1 : 2), v(t, F.mn, 1 === s ? 1 : 2), v(t, F.mr, 1 === s ? 1 : 2), v(t, F.nah, 1 === s ? 1 : 2), v(t, F.nb, 1 === s ? 1 : 2), v(t, F.ne, 1 === s ? 1 : 2), v(t, F.nl, 1 === s ? 1 : 2), v(t, F.nn, 1 === s ? 1 : 2), v(t, F.no, 1 === s ? 1 : 2), v(t, F.oc, 1 === s ? 1 : 2), v(t, F.om, 1 === s ? 1 : 2), v(t, F.or, 1 === s ? 1 : 2), v(t, F.pa, 1 === s ? 1 : 2), v(t, F.pap, 1 === s ? 1 : 2), v(t, F.ps, 1 === s ? 1 : 2), v(t, F.pt, 1 === s ? 1 : 2), v(t, F.pt_pt, 1 === s ? 1 : 2), v(t, F.pt_br, 1 === s ? 1 : 2), v(t, F.so, 1 === s ? 1 : 2), v(t, F.sq, 1 === s ? 1 : 2), v(t, F.sv, 1 === s ? 1 : 2), v(t, F.sw, 1 === s ? 1 : 2), v(t, F.ta, 1 === s ? 1 : 2), v(t, F.te, 1 === s ? 1 : 2), v(t, F.tk, 1 === s ? 1 : 2), v(t, F.ur, 1 === s ? 1 : 2), v(t, F.zu, 1 === s ? 1 : 2), v(t, F.am, 0 === s || 1 === s ? 0 : 1), v(t, F.bh, 0 === s || 1 === s ? 0 : 1), v(t, F.fil, 0 === s || 1 === s ? 0 : 1), v(t, F.fr, 0 === s || s >= 2 ? 2 : 1), v(t, F.gun, 0 === s || 1 === s ? 0 : 1), v(t, F.hi, 0 === s || 1 === s ? 0 : 1), v(t, F.hy, 0 === s || 1 === s ? 0 : 1), v(t, F.ln, 0 === s || 1 === s ? 0 : 1), v(t, F.mg, 0 === s || 1 === s ? 0 : 1), v(t, F.nso, 0 === s || 1 === s ? 0 : 1), v(t, F.xbr, 0 === s || 1 === s ? 0 : 1), v(t, F.ti, 0 === s || 1 === s ? 0 : 1), v(t, F.wa, 0 === s || 1 === s ? 0 : 1), v(t, F.be, a), v(t, F.bs, a), v(t, F.hr, a), v(t, F.ru, a), v(t, F.sr, a), v(t, F.uk, a), v(t, F.cs, 1 === s ? 1 : s >= 2 && s <= 4 ? 2 : 3), v(t, F.sk, 1 === s ? 1 : s >= 2 && s <= 4 ? 2 : 3), v(t, F.ga, 1 === s ? 1 : 2 === s ? 2 : 3), v(t, F.lt, s % 10 == 1 && s % 100 != 11 ? 1 : s % 10 >= 2 && (s % 100 < 10 || s % 100 >= 20) ? 2 : 3), v(t, F.sl, s % 100 == 1 ? 1 : s % 100 == 2 ? 2 : s % 100 == 3 || s % 100 == 4 ? 3 : 4), v(t, F.mk, s % 10 == 1 ? 1 : 2), v(t, F.mt, 1 === s ? 1 : 0 === s || s % 100 > 1 && s % 100 < 11 ? 2 : s % 100 > 10 && s % 100 < 20 ? 3 : 4), v(t, F.lv, 0 === s ? 0 : s % 10 == 1 && s % 100 != 11 ? 1 : 2), v(t, F.pl, 1 === s ? 1 : s % 10 >= 2 && s % 10 <= 4 && (s % 100 < 12 || s % 100 > 14) ? 2 : 3), v(t, F.cy, 1 === s ? 0 : 2 === s ? 1 : 8 === s || 11 === s ? 2 : 3), v(t, F.ro, 1 === s ? 1 : 1 === s || s % 100 > 0 && s % 100 < 20 ? 2 : 3), v(t, F.ar, 0 === s ? 0 : 1 === s ? 1 : 2 === s ? 2 : s % 100 >= 3 && s % 100 <= 10 ? 3 : s % 100 >= 11 && s % 100 <= 99 ? 4 : 5), t)[e]
                                }(t, s);
                            return n[i].trim()
                        };

                    function K(e, s) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            s && (a = a.filter((function(s) {
                                return Object.getOwnPropertyDescriptor(e, s).enumerable
                            }))), t.push.apply(t, a)
                        }
                        return t
                    }

                    function Z(e) {
                        for (var s = 1; s < arguments.length; s++) {
                            var t = null != arguments[s] ? arguments[s] : {};
                            s % 2 ? K(Object(t), !0).forEach((function(s) {
                                v(e, s, t[s])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach((function(s) {
                                Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                            }))
                        }
                        return e
                    }
                    var X = function(e) {
                            return e.join("")
                        },
                        J = function() {
                            function e(s, t, a) {
                                ! function(e, s) {
                                    if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this.i18n = s, this.messageConstructor = t || X, this.values = a || {}
                            }
                            var s, t, a;
                            return s = e, t = [{
                                key: "getMessage",
                                value: function(e) {
                                    var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        t = this.i18n.getMessage(e);
                                    if (!t && !(t = this.i18n.getBaseMessage(e))) throw new Error('Was unable to find message for key: "'.concat(e, '"'));
                                    var a = q(t, Z(Z({}, this.values), s));
                                    return this.messageConstructor(a)
                                }
                            }, {
                                key: "getPlural",
                                value: function(e, s) {
                                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        a = this.i18n.getMessage(e),
                                        n = this.i18n.getUILanguage();
                                    if (!a) {
                                        if (!(a = this.i18n.getBaseMessage(e))) throw new Error('Was unable to find message for key: "'.concat(e, '"'));
                                        n = this.i18n.getBaseUILanguage()
                                    }
                                    var i = H(a, s, n, e),
                                        o = q(i, Z(Z(Z({}, this.values), t), {}, {
                                            count: s
                                        }));
                                    return this.messageConstructor(o)
                                }
                            }], t && w(s.prototype, t), a && w(s, a), e
                        }();

                    function Q(e, s) {
                        return s = s || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
                            Q(e, s)
                        })) : s.push(e)), s
                    }

                    function Y(e, s) {
                        var t = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            s && (a = a.filter((function(s) {
                                return Object.getOwnPropertyDescriptor(e, s).enumerable
                            }))), t.push.apply(t, a)
                        }
                        return t
                    }
                    "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
                    var ee = function(e, s, t) {
                            return new J(e, s, t)
                        },
                        se = function(e, s, t) {
                            var a, n = function(e, t) {
                                    return t ? s.createElement(e, null, Q(t)) : s.createElement(e, null)
                                },
                                i = (a = {}, t && t.tags.forEach((function(e) {
                                    a[e.key] = function(s) {
                                        return n(e.createdTag, s)
                                    }
                                })), null != t && t.override ? a : function(e) {
                                    for (var s = 1; s < arguments.length; s++) {
                                        var t = null != arguments[s] ? arguments[s] : {};
                                        s % 2 ? Y(Object(t), !0).forEach((function(s) {
                                            v(e, s, t[s])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach((function(s) {
                                            Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                                        }))
                                    }
                                    return e
                                }({
                                    p: function(e) {
                                        return n("p", e)
                                    },
                                    b: function(e) {
                                        return n("b", e)
                                    },
                                    strong: function(e) {
                                        return n("strong", e)
                                    },
                                    tt: function(e) {
                                        return n("tt", e)
                                    },
                                    s: function(e) {
                                        return n("s", e)
                                    },
                                    i: function(e) {
                                        return n("i", e)
                                    }
                                }, a));
                            return new J(e, (function(e) {
                                var s = Q(e);
                                return s.every((function(e) {
                                    return "string" == typeof e
                                })) ? s.join("") : s
                            }), i)
                        };
                    se(c, {
                        createElement: function(e, s, t) {
                            var a, n, i, o = {};
                            for (i in s) "key" == i ? a = s[i] : "ref" == i ? n = s[i] : o[i] = s[i];
                            if (arguments.length > 2 && (o.children = arguments.length > 3 ? _.call(arguments, 2) : t), "function" == typeof e && null != e.defaultProps)
                                for (i in e.defaultProps) void 0 === o[i] && (o[i] = e.defaultProps[i]);
                            return b(e, o, a, n, null)
                        }
                    });
                    const te = ee(c);
                    let ae;

                    function ne() {
                        throw m.closeAllGroup(), ae = Math.random().toString(36).substr(7), console.warn(te.getMessage("aborted_popunder_execution")), new p(ae)
                    }
                    const ie = Element.prototype.matches || Element.prototype.msMatchesSelector,
                        oe = "closest" in Element.prototype ? (e, s) => e.closest(s) : (e, s) => {
                            for (; e;) {
                                if (ie.call(e, s)) return e;
                                e = e.parentElement
                            }
                            return null
                        };

                    function re(e, s) {
                        return 3 === e.nodeType && (e = e.parentNode), e === s
                    }
                    const pe = e => e.nodeName.toUpperCase(),
                        le = "about:",
                        me = new RegExp(`^${le}`),
                        ue = e => me.test(e),
                        de = (Object.getOwnPropertyDescriptor(window, "frameElement") || Object.getOwnPropertyDescriptor(Window.prototype, "frameElement")).get,
                        ge = e => {
                            const s = de.call(e);
                            return s ? s.ownerDocument.defaultView : null
                        };

                    function ce(e) {
                        return "clientX" in e
                    }

                    function _e(e) {
                        return "touches" in e
                    }

                    function he(e) {
                        return "nodeName" in e
                    }

                    function ke(e) {
                        return "id" in e
                    }

                    function fe(e) {
                        return "style" in e
                    }

                    function be(e) {
                        return "A" === pe(e)
                    }

                    function ve(e) {
                        return "IFRAME" === pe(e)
                    }
                    const {
                        toString: we
                    } = Object.prototype;

                    function ye(e) {
                        return "[object Window]" === we.call(e)
                    }

                    function xe(e) {
                        return "[object Location]" === we.call(e)
                    }

                    function Ae(e) {
                        return void 0 === e
                    }

                    function je(e) {
                        const {
                            type: s
                        } = e;
                        return "click" === s || "mousedown" === s || "mouseup" === s
                    }
                    const Pe = Object.defineProperty,
                        ze = Object.getOwnPropertyDescriptor,
                        Oe = Object.prototype.hasOwnProperty,
                        Te = Object.keys,
                        De = Function.prototype.apply,
                        Ee = Function.prototype.call,
                        Be = Function.prototype.bind,
                        Ge = Function.prototype.toString,
                        Ie = RegExp.prototype.exec,
                        $e = window.Proxy,
                        Se = {};
                    $e && (Se.reflectGetOwnProperty = Reflect.getOwnPropertyDescriptor, Se.reflectDefineProperty = Reflect.defineProperty, Se.reflectGet = Reflect.get, Se.reflectSet = Reflect.set, Se.reflectDeleteProperty = Reflect.deleteProperty, Se.reflectOwnKeys = Reflect.ownKeys, Se.reflectApply = Reflect.apply);
                    const Me = window.MutationObserver || window.WebKitMutationObserver,
                        Ce = window.MessageChannel;
                    window.setTimeout.bind(window);
                    const Le = ze(HTMLIFrameElement.prototype, "contentWindow").get,
                        Ne = ze(HTMLIFrameElement.prototype, "contentDocument").get,
                        Ue = ze(MessageEvent.prototype, "source").get,
                        {
                            captureStackTrace: Fe
                        } = Error,
                        We = /^http/,
                        Re = e => ("string" != typeof e && (e = e instanceof Object ? String(e) : ""), e),
                        qe = e => {
                            const s = document.createElement("a");
                            return s.href = e, "" === s.host && (s.href = s.href), s
                        },
                        Ve = e => {
                            e = Re(e);
                            const s = qe(e);
                            let t, a;
                            const {
                                protocol: n
                            } = s;
                            if (We.test(n)) t = s.href.slice(n.length + 2), a = s.hostname;
                            else {
                                t = e;
                                const s = e.indexOf(",");
                                a = -1 === s ? e : e.slice(0, s)
                            }
                            return [t, a, s.href]
                        };
                    let He = Date.now() % 1e9;
                    const {
                        defineProperty: Ke
                    } = Object;
                    const Ze = "function" == typeof WeakMap;
                    Ze && function() {
                        if ("function" != typeof DOMPoint) return !1;
                        const e = new DOMPoint,
                            s = new WeakMap;
                        try {
                            return s.set(e, void 0), !1
                        } catch (e) {
                            return m.print("Buggy WeakMap support"), !0
                        }
                    }();
                    const Xe = Ze ? WeakMap : class {
                            constructor() {
                                this.$name = `__st${Math.floor(1e9*Math.random())}${He+=1}__`
                            }
                            set(e, s) {
                                const t = e[this.$name];
                                return t && t[0] === e ? t[1] = s : Ke(e, this.$name, {
                                    value: [e, s],
                                    writable: !0
                                }), this
                            }
                            get(e) {
                                const s = e[this.$name];
                                return s[0] === e ? s[1] : void 0
                            }
                            delete(e) {
                                const s = e[this.$name];
                                if (!s) return !1;
                                const t = s[0] === e;
                                return s[0] = s[1] = void 0, t
                            }
                            has(e) {
                                const s = e[this.$name];
                                return !!s && s[0] === e
                            }
                        },
                        Je = $e ? Se.reflectApply : (() => {
                            let e;
                            do {
                                e = Math.random()
                            } while (e in De);
                            return Pe(De, e, {
                                value: Ee
                            }), (s, t, a) => De[e](s, t, a)
                        })(),
                        Qe = new RegExp(`^${Ge.call(Oe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")}$`),
                        Ye = new Xe,
                        es = new Xe,
                        ss = (e, s, t) => {
                            let i = Ye.get(s);
                            return void 0 === i && (i = s), p = i, l = t, o((r = e).apply) ? r.apply(p, l) : o(r.call) ? r.call(p, ...l) : o(n) ? n.call(r, p, l) : o(a) ? a.apply(r, [p, ...l]) : r.apply(p, l);
                            var r, p, l
                        };

                    function ts(e, s, t) {
                        const a = ze(e, t);
                        a && a.configurable && (a.value = e[t], Pe(s, t, a))
                    }

                    function as(e, s) {
                        let t;
                        const a = es.get(e);
                        return a || (t = function() {
                            return s(e, this, arguments)
                        }, ts(e, t, "name"), ts(e, t, "length"), Ye.set(t, e), es.set(e, t), t)
                    }

                    function ns(e, s, t) {
                        Object.prototype.hasOwnProperty.call(e, s) && (e[s] = as(e[s], t))
                    }

                    function is(e, s) {
                        return e instanceof p || (m.print("Internal error from proxyService:", e), m.print("from a target:", s), !1)
                    }
                    class os {
                        constructor(e, s, t) {
                            this.orig = e, this.thisArg = s, this.wrapper = t, this.originalInvoked = !1, this.invokeTarget = Je(Be, this.invokeTarget, [this])
                        }
                        invokeTarget(e, s = this.thisArg) {
                            this.originalInvoked && m.throwMessage("A wrapped target was invoked more than once.", 1), this.originalInvoked = !0;
                            try {
                                return Je(this.orig, s, e)
                            } catch (e) {
                                if (Fe) try {
                                    Fe(e, this.wrapper)
                                } catch (e) {}
                                throw new p(e)
                            }
                        }
                    }
                    const rs = (e, s) => e.invokeTarget(s);

                    function ps(e, s = rs) {
                        let t;
                        return t = as(e, ((e, a, n) => {
                            const i = new os(e, a, t);
                            try {
                                return s(i, n)
                            } catch (s) {
                                if (is(s, e)) throw s.original;
                                if (!i.originalInvoked) try {
                                    return i.invokeTarget(n)
                                } catch (s) {
                                    if (is(s, e)) throw s.original
                                }
                            }
                        })), t
                    }

                    function ls(e, s, t) {
                        Object.prototype.hasOwnProperty.call(e, s) && (e[s] = ps(e[s], t))
                    }
                    class ms {
                        constructor(e, s, t) {
                            this.$type = e, this.$name = s, this.$data = t, this.$timeStamp = l()
                        }
                    }
                    new Xe;
                    const us = "location",
                        ds = "assign",
                        gs = "replace",
                        cs = "href",
                        _s = (e, s) => {
                            const t = s || {};
                            for (const s in e) {
                                const a = ze(e, s);
                                if (a) switch (typeof a.value) {
                                    case "undefined":
                                        break;
                                    case "object":
                                        t[s] = {};
                                        break;
                                    case "function":
                                        t[s] = () => !0;
                                        break;
                                    default:
                                        t[s] = e[s]
                                }
                            }
                            return t
                        },
                        hs = ze(HTMLAnchorElement.prototype, "href"),
                        ks = (s, t, a) => {
                            const n = _s(e);
                            _s(e.Window.prototype, n);
                            const i = _s(document);
                            _s(Document.prototype, i), n.opener = e, n.closed = !1, n.name = t, n.document = i, i.open = function() {
                                return this
                            }, i.write = () => {}, i.writeln = () => {}, i.close = () => {};
                            const o = ((e, s) => {
                                    const t = qe(e);
                                    return t[ds] = hs.set, t[gs] = hs.set, Pe(t, cs, hs), s.wrapMethod(t, ds), s.wrapMethod(t, gs), s.wrapAccessor(t, cs), t
                                })(s, a),
                                r = {
                                    get: () => o,
                                    set() {},
                                    configurable: !0
                                };
                            return Pe(n, us, r), Pe(i, us, r), a.wrapAccessor(n, us), a.wrapAccessor(i, us), n
                        };
                    class fs {
                        constructor(e, s) {
                            this.timeline = e, this.framePosition = s
                        }
                        makeLoggedFunctionWrapper(e, s, t, a = rs, n) {
                            return ps(e, ((i, o) => {
                                const r = {},
                                    {
                                        thisArg: p
                                    } = i;
                                let l;
                                (void 0 === n || n(e, p, o)) && (l = {
                                    thisOrReceiver: p,
                                    arguments: o,
                                    externalContext: r
                                });
                                const m = a(i, o, r);
                                return l && this.timeline.registerEvent(new ms(s, t, l), this.framePosition), m
                            }))
                        }
                        wrapMethod(e, s, t, a) {
                            Object.prototype.hasOwnProperty.call(e, s) && (e[s] = this.makeLoggedFunctionWrapper(e[s], 1, s, t, a))
                        }
                        wrapAccessor(e, s, t, a, n) {
                            const i = ze(e, s);
                            if (i && i.get && i.configurable) {
                                const o = this.makeLoggedFunctionWrapper(i.get, 2, s, t, n);
                                let r;
                                i.set && (r = this.makeLoggedFunctionWrapper(i.set, 3, s, a, n)), Pe(e, s, {
                                    get: o,
                                    set: r,
                                    configurable: !0,
                                    enumerable: i.enumerable
                                })
                            }
                        }
                        get(e, s, t) {
                            const a = Ye.get(t) || t,
                                n = {
                                    thisOrReceiver: a
                                };
                            this.timeline.registerEvent(new ms(2, s, n), this.framePosition);
                            const i = Se.reflectGet(e, s, a);
                            if (function(e) {
                                    if ("function" != typeof e) return !1;
                                    if (e === Be || e === Ee || e === De || e === Ge || e === Ie) return !0;
                                    let s;
                                    try {
                                        s = Je(Ge, e, [])
                                    } catch (t) {
                                        try {
                                            s = e.toString()
                                        } catch (e) {
                                            return !1
                                        }
                                    }
                                    return null !== Je(Ie, Qe, [s])
                                }(i)) return as(i, ss);
                            if (xe(i) || ye(i)) {
                                const t = Se.reflectGetOwnProperty(e, s);
                                return t && !1 === t.writable && !1 === t.configurable ? i : this.makeObjectProxy(i)
                            }
                            return i
                        }
                        set(e, s, t, a) {
                            const n = Ye.get(a) || a,
                                i = {
                                    thisOrReceiver: n,
                                    arguments: [t]
                                };
                            return this.timeline.registerEvent(new ms(3, s, i), this.framePosition), Se.reflectSet(e, s, t, n)
                        }
                        makeObjectProxy(e) {
                            return e
                        }
                    }
                    var bs = m.connect(((e, s) => {
                        m.print("index:", e);
                        const t = s[e][0];
                        if (0 === t.$type && l() - t.$timeStamp < 200) {
                            m.print("time difference is less than a threshold");
                            const e = t.$data.thisOrReceiver;
                            m.print("testing context is: ", e);
                            if (null !== e.frameElement) {
                                const {
                                    timing: s
                                } = e.performance, {
                                    fetchStart: t,
                                    responseEnd: a
                                } = s;
                                if (0 === t || t === a) return !1
                            }
                        }
                        return !0
                    }), "Performing create test");
                    var vs = m.connect(((e, s) => {
                        const t = s[e][s[e].length - 1],
                            a = t.$timeStamp;
                        if (1 === t.$type && "open" === t.$name && ue(Re(t.$data.arguments[0]))) {
                            m.print("The latest event is open('about:blank')");
                            let e = s.length;
                            for (; e-- > 0;) {
                                const t = s[e];
                                let n = t.length;
                                for (; n-- > 0;) {
                                    const e = t[n];
                                    if (a - e.$timeStamp > 200) break;
                                    if ("open" === e.$name && 1 === e.$type && e.$data.externalContext.mocked) return !1
                                }
                            }
                        }
                        return !0
                    }), "Performing aboutBlank test");
                    const ws = [bs, vs],
                        ys = [(s, t, a) => {
                            const {
                                $type: n
                            } = a, {
                                $name: i
                            } = a;
                            if (("assign" === i || "replace" === i) && 1 === n || ("location" === i || "href" === i) && 3 === n) {
                                const n = e.location.href,
                                    i = a.$data,
                                    o = String(i.arguments[0]),
                                    r = i.thisOrReceiver;
                                o === n && (("location" !== a.$name || ye(r)) && xe(r) || (m.print("navigatePopupToItself - tried to navigate a blocked popup to itself"), ne()));
                                const p = t[s];
                                let l = p.length;
                                for (; l--;) {
                                    const e = p[l];
                                    if (a.$timeStamp - e.$timeStamp > 200) break;
                                    const s = e.$data.externalContext;
                                    s && s.mocked && s.defaultEventHandlerTarget === o && (m.print("navigatePopupToItself - tried to navigate a blocked popup to a target of a recently blocked popup initiator"), ne())
                                }
                            }
                            return !0
                        }];
                    const xs = new class {
                        constructor() {
                            this.events = [], this.isRecording = !1
                        }
                        registerEvent(e, s) {
                            if (this.isRecording) {
                                const s = e.$name ? e.$name.toString() : "";
                                m.print(`Timeline.registerEvent: ${e.$type} ${s}`, e.$data)
                            }
                            let t = ys.length;
                            for (; t--;) ys[t](s, this.events, e);
                            const a = this.events[s];
                            a.push(e), this.isRecording || setTimeout((() => {
                                a.splice(a.indexOf(e), 1)
                            }), 5e3)
                        }
                        canOpenPopup(e) {
                            m.call("Inquiring events timeline about whether window.open can be called...");
                            let s = ws.length;
                            for (; s--;)
                                if (!ws[s](e, this.events)) return m.print("false"), m.callEnd(), !1;
                            return m.print("true"), m.callEnd(), !0
                        }
                        onNewFrame(e) {
                            const s = this.events.push([]) - 1;
                            return this.registerEvent(new ms(0, void 0, {
                                thisOrReceiver: e
                            }), s), s
                        }
                        startRecording() {
                            this.isRecording = !0
                        }
                        takeRecords() {
                            this.isRecording = !1;
                            const e = this.events.map((e => Array.prototype.slice.call(e))),
                                s = l();
                            let t = this.events.length;
                            for (; t-- > 0;) {
                                const e = this.events[t];
                                for (; e[0] && s - e[0].$timeStamp > 5e3;) e.shift()
                            }
                            return e
                        }
                    };
                    e.registerEvent = xs.registerEvent, e.canOpenPopup = xs.canOpenPopup, e.onNewFrame = xs.onNewFrame;
                    class As {
                        constructor() {
                            const s = [],
                                t = [],
                                a = [],
                                n = (e, s) => {
                                    const t = e.indexOf(s); - 1 !== t && e.splice(t, 1)
                                },
                                i = e => s => {
                                    e.push(s), setTimeout(n.bind(null, e, s))
                                };
                            e.addEventListener("mousedown", i(s), !0), e.addEventListener("mouseup", i(t), !0), e.addEventListener("click", i(a), !0);
                            const o = e => {
                                    let s, t = e.length;
                                    for (; !s || !s.currentTarget;) {
                                        if (0 === t) return;
                                        s = e[--t]
                                    }
                                    return s
                                },
                                r = (e, s) => e ? s ? s.timeStamp - e.timeStamp : -1 : 1;
                            this.getCurrentMouseEvent = () => {
                                m.call("getCurrentClickEvent");
                                const e = o(s),
                                    n = o(t),
                                    i = [o(a), e, n].sort(r)[0];
                                return m.print("Retrieved event is: ", i), m.callEnd(), i
                            }
                        }
                    }

                    function js(e) {
                        const {
                            zIndex: s,
                            position: t,
                            opacity: a
                        } = getComputedStyle(e);
                        return ("static" !== t && "auto" !== s || parseFloat(a) < 1) && parseInt(s, 10) > 1e3
                    }

                    function Ps(e, s, t) {
                        return 0 == ((e - s) / t | 0)
                    }

                    function zs(e, s, t) {
                        const {
                            left: a,
                            right: n,
                            top: i,
                            bottom: o
                        } = e;
                        return Ps(a, 0, s >> 4) && Ps(n, s, s >> 4) && Ps(i, 0, t >> 4) && Ps(o, t, t >> 4)
                    }
                    const Os = e => {
                            if (ye(e)) return !0;
                            if (he(e)) {
                                const s = pe(e);
                                if ("#DOCUMENT" === s || "HTML" === s || "BODY" === s) return !0
                            }
                            return !1
                        },
                        Ts = e => {
                            const {
                                textContent: s
                            } = e;
                            return (!s || !s.trim().length) && 0 === e.getElementsByTagName("img").length
                        };

                    function Ds(e) {
                        if (!fe(e)) return !1;
                        const s = e.ownerDocument.defaultView,
                            t = s.innerWidth,
                            a = s.innerHeight;
                        if (zs(e.getBoundingClientRect(), t, a))
                            do {
                                if (js(e)) return !0
                            } while (e = e.parentElement);
                        return !1
                    }
                    class Es {
                        static initialize() {
                            e.addEventListener("mousedown", Es.attemptPatch, !0), e.addEventListener("touchstart", Es.attemptPatch, !0)
                        }
                        static getCurrentJQueryTarget(e) {
                            const {
                                jQueries: s
                            } = Es;
                            for (let t = 0, a = s.length; t < a; t += 1) {
                                const a = s[t],
                                    n = Es.jqToStack.get(a);
                                if (Ae(n)) continue;
                                const i = n.getNestedTarget(e);
                                if (i) return i
                            }
                        }
                        static attemptPatch() {
                            const e = Es.detectionHeuristic();
                            Ae(e) || -1 === Es.jQueries.indexOf(e) && (new Xe, Es.jQueries.push(e), Es.jqToStack.set(e, new Es(e).wrap()))
                        }
                        static detectionHeuristic() {
                            const s = e.jQuery || e.$;
                            if ("function" == typeof s && "noConflict" in s && "_data" in s) return s
                        }
                        constructor(e) {
                            this.jQuery = e, this.eventMap = new Xe, this.eventStack = [], this.dispatchApplyHandler = (e, s) => {
                                const t = s[0];
                                this.eventStack.push(t);
                                try {
                                    return e.invokeTarget(s)
                                } finally {
                                    this.eventStack.pop()
                                }
                            }, this.fixApplyHandler = (e, s) => {
                                const t = s[0],
                                    a = e.invokeTarget(s);
                                return this.isNativeEvent(t) && (ce(t) && je(t) || _e(t)) && this.eventMap.set(t, a), a
                            }
                        }
                        isNativeEvent(e) {
                            return e && "object" == typeof e && !e[this.jQuery.expando]
                        }
                        getRelatedJQueryEvent(e) {
                            return this.eventMap.get(e)
                        }
                        static noConflictApplyHandler(e, s) {
                            const t = s[0];
                            e.invokeTarget(s), !0 === t && Es.attemptPatch()
                        }
                        wrap() {
                            const {
                                jQuery: e
                            } = this;
                            return ls(e.event, "dispatch", this.dispatchApplyHandler), ls(e.event, "fix", this.fixApplyHandler), ls(e, "noConflict", Es.noConflictApplyHandler), this
                        }
                        getNestedTarget(e) {
                            const {
                                eventStack: s
                            } = this;
                            if (0 === s.length) return;
                            const t = this.getRelatedJQueryEvent(e);
                            if (-1 === s.indexOf(e) && -1 === s.indexOf(t)) return;
                            let a = t;
                            for (let e = 1, t = s.length; e < t; e += 1) {
                                const t = s[e],
                                    n = t.target;
                                if (he(n)) {
                                    if (re(a.target, n)) {
                                        a = this.isNativeEvent(t) ? this.getRelatedJQueryEvent(t) : t;
                                        continue
                                    }
                                    break
                                }
                                return ye(n) ? n : void 0
                            }
                            return a.currentTarget
                        }
                    }
                    Es.jQueries = [], Es.jqToStack = new Xe, Es.initialize();
                    const {
                        getCurrentJQueryTarget: Bs
                    } = Es;
                    const Gs = "__REACT_DEVTOOLS_GLOBAL_HOOK__";
                    let Is = !1;
                    if (!Oe.call(e, Gs)) {
                        let s = 0;
                        const t = {
                            renderers: new Map,
                            supportsFiber: !0,
                            inject: e => s++,
                            onScheduleFiberRoot(e, s, t) {},
                            onCommitFiberRoot(e, s, t, a) {},
                            onCommitFiberUnmount() {}
                        };
                        Pe(t, "isDisabled", {
                            get: () => (Is = !0, !0),
                            set() {}
                        }), Pe(e, Gs, {
                            get() {
                                if (! function() {
                                        if (document.head) return !1;
                                        const e = document.currentScript;
                                        if (!e) return !1;
                                        const {
                                            textContent: s
                                        } = e;
                                        return -1 !== s.indexOf("^_^")
                                    }()) return t
                            },
                            set(e) {},
                            configurable: !0
                        })
                    }
                    const $s = "[data-reactroot]",
                        Ss = "[data-reactid]";
                    const Ms = /^gtm_autoEvent/,
                        Cs = 'script[src*="googletagmanager.com/gtm.js"]',
                        Ls = "dataLayer",
                        Ns = /[?&]l=([^&]*)(?:&|$)/,
                        Us = "gtm.linkClick";

                    function Fs(s, t) {
                        if (!Ms.test(t)) return !1;
                        if (3 !== s.eventPhase) return !1;
                        const a = document.querySelectorAll(Cs);
                        let n = a.length;
                        if (0 === n) return !1;
                        for (; n--;) {
                            const s = a[n],
                                {
                                    src: t
                                } = s;
                            let i = Ls;
                            const o = Ns.exec(t);
                            o && (i = o[1]);
                            const r = e[i];
                            if (!r) continue;
                            const p = r[r.length - 1];
                            if (p && p.event === Us) return !0
                        }
                        return !1
                    }
                    const Ws = "event" in e && (!("documentMode" in document) || 11 === document.documentMode);
                    let Rs;

                    function qs() {
                        m.call("Retrieving event");
                        let s, a = e;
                        if (Ws)
                            for (s = a.event; !s;) {
                                const {
                                    parent: e
                                } = a;
                                if (e === a) break;
                                a = e;
                                try {
                                    s = a.event
                                } catch (e) {
                                    break
                                }
                            } else s = Rs();
                        if (s) m.print("window.event exists, of which the value is:", s);
                        else {
                            m.print("window.event does not exist, trying to get event from Function.caller");
                            try {
                                let e = arguments.callee;
                                const a = new Xe;
                                for (; e.caller;) {
                                    if (e = e.caller, a.has(e) && !t) throw null;
                                    a.set(e, !0)
                                }
                                m.print("Reached at the top of caller chain."), e.arguments && e.arguments[0] && "target" in e.arguments[0] ? (s = e.arguments[0], m.print("The function at the bottom of the stack has an expected type. The current event is:", s)) : m.print("The function at the bottom of the call stack does not have an expected type.", e.arguments[0])
                            } catch (e) {
                                m.print("Getting event from Function.caller failed, due to an error:", e)
                            }
                        }
                        return m.callEnd(), s
                    }
                    Ws ? m.print("window.event is supported.") : (m.print("window.event is not supported."), Rs = (new As).getCurrentMouseEvent);
                    const Vs = m.connect((s => {
                            if (s) {
                                if (!(ce(s) && je(s) || _e(s))) return !0;
                                const {
                                    currentTarget: t
                                } = s;
                                if (t)
                                    if (m.print("Event is:", s), m.print("currentTarget is: ", t), Os(t)) {
                                        const {
                                            eventPhase: a
                                        } = s;
                                        m.print(`Phase is: ${a}`);
                                        const n = function(e) {
                                            const {
                                                target: s
                                            } = e;
                                            if (ke(s)) {
                                                const {
                                                    type: t
                                                } = e, a = oe(s, `[jsaction*="${t}:"]`);
                                                if (a && Object.prototype.hasOwnProperty.call(a, "__jsaction")) {
                                                    const e = a.__jsaction;
                                                    if (Object.prototype.hasOwnProperty.call(e, t)) return a
                                                }
                                            }
                                        }(s);
                                        if (n) return m.print("maybeJsActionTarget"), !Os(n) && (m.print("jsActionTarget is not a root"), !0);
                                        if (1 === a || 2 === a) return m.print("VerifyEvent - the current event handler is suspicious, for the current target is either window, document, html, or body."), !1;
                                        m.print("VerifyEvent - the current target is document/html/body, but the event is in a bubbling phase.");
                                        const i = Bs(s);
                                        if (i) {
                                            if (m.print("jQueryTarget exists: ", i), Os(i) || ke(i) && Ds(i)) return !1
                                        } else if (! function() {
                                                if (document.querySelector($s) || document.querySelector(Ss)) return !0;
                                                if (Is) return !0;
                                                const s = e[Gs];
                                                if ("object" != typeof s) return !1;
                                                const {
                                                    _renderers: t
                                                } = s;
                                                return "object" == typeof t && null !== t && 0 !== Te(t).length
                                            }() || he(t) && "#DOCUMENT" !== pe(t)) return !1
                                    } else if (ke(t) && Ds(t)) return m.print("VerifyEvent - the current event handler is suspicious, for the current target looks like an artificial overlay."), !1
                            }
                            return !0
                        }), "Verifying event", (function() {
                            return arguments[0]
                        })),
                        Hs = (e => {
                            let s = e;
                            for (; s && ue(s.location.href);) s = ge(s);
                            return s || null
                        })(window),
                        Ks = Hs.MutationObserver || Hs.WebKitMutationObserver;
                    class Zs {
                        constructor() {
                            this.lastActivated = 0, this.callback = m.connect((e => {
                                m.print("mutations:", e);
                                let s = e.length;
                                for (; s--;) {
                                    const t = e[s],
                                        {
                                            addedNodes: a
                                        } = t;
                                    if (a) {
                                        let e = a.length;
                                        for (; e-- > 0;) {
                                            const s = a[e];
                                            if (ke(s)) {
                                                const e = s.querySelectorAll(Zs.pdfObjectSelector);
                                                if (e) {
                                                    let s = e.length;
                                                    for (; s-- > 0;) {
                                                        const t = e[s];
                                                        Zs.neutralizeDummyPdf(t)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }), "pdfObjectObserver callback fired"), Ks && (this.observer = new Ks(this.callback))
                        }
                        $start() {
                            if (this.observer && 0 === this.lastActivated) {
                                const e = document.documentElement;
                                this.observer.observe(e, Zs.option), m.print(`MO started at ${l()}`), this.lastActivated = l()
                            }
                            setTimeout((() => {
                                m.print(`MO stopped at ${l()}`), this.stop()
                            }), Zs.OBSERVE_TIME)
                        }
                        stop() {
                            this.observer && 0 !== this.lastActivated && (this.observer.disconnect(), this.lastActivated = 0)
                        }
                    }
                    Zs.OBSERVE_TIME = 500, Zs.pdfObjectSelector = 'object[data^="data:application/pdf"]', Zs.option = {
                        childList: !0,
                        subtree: !0
                    }, Zs.neutralizeDummyPdf = e => {
                        e.removeAttribute("data")
                    };
                    var Xs = new Zs;
                    const Js = e => {
                            const s = te.getMessage("on_navigation_by_popunder");
                            return e.returnValue = s, s
                        },
                        Qs = document.elementsFromPoint || document.msElementsFromPoint,
                        Ys = (() => {
                            const e = Event.prototype,
                                s = ze(e, "path");
                            return s ? s.get : e.composedPath
                        })(),
                        et = e => {
                            fe(e) && (e.style.setProperty("display", "none", "important"), e.style.setProperty("pointer-events", "none", "important"))
                        };

                    function st(e) {
                        let s = !1,
                            t = null;
                        const a = oe(e, "iframe,input,a,area,button,[onclick],[onmousedown],[onmouseup]");
                        if (a) {
                            s = !0;
                            const e = pe(a);
                            "A" !== e && "AREA" !== e || (t = a.href)
                        }
                        return {
                            hasDefaultEventHandler: s,
                            defaultEventHandlerTarget: t
                        }
                    }

                    function tt(e) {
                        let s, t, a = !1;
                        const n = e;
                        for (; e && ke(e);) t && t.hasDefaultEventHandler || (t = st(e)), !a && js(e) && (a = !0, Ts(n) && (s = e)), e = e.parentElement;
                        return t.maskRoot = s, t
                    }
                    class at {
                        handleMessage(e) {
                            const s = e[7],
                                t = e[8],
                                a = this.hub.hostWindow.document.elementFromPoint(s, t);
                            this.dispatchMouseEventOnTarget(e, a)
                        }
                        dispatchMouseEventOnTarget(e, s) {
                            if (ve(s)) {
                                const t = s.getBoundingClientRect();
                                e[7] -= t.left, e[8] -= t.top, e[3] = null, this.hub.trigger(1, e, Le.call(s))
                            } else this.performClickOnTarget(s)
                        }
                        performClickOnTarget(e) {
                            this.pressed || (this.pressed = !0, setTimeout((() => {
                                this.pressed = !1
                            }), 100), e.click())
                        }
                        constructor(e) {
                            this.hub = e, this.pressed = !1
                        }
                    }
                    let nt;

                    function it(e) {
                        const s = new at(e);
                        e.on(1, s), e === r.messageHub && (nt = s)
                    }
                    const ot = ["type", "canBubble", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
                        rt = Qs ? (s, t, a) => {
                            if (m.print("Event is:", s), !s.isTrusted) return;
                            let n, i, o;
                            if (ce(s)) m.print("It is a mouse event"), n = s.target, i = s.clientX, o = s.clientY;
                            else if (_e(s)) {
                                n = s.target;
                                const e = s.changedTouches[0];
                                if (!e) return;
                                i = e.clientX, o = e.clientY
                            }
                            if (!n || !ke(n)) return;
                            const r = s.view.document,
                                p = Qs.call(r, i, o);
                            if (!p) return;
                            m.print("ElementsFromPoint:", p);
                            const l = [];
                            let u, d = n;
                            d !== p[0] && m.print("target has modified within event handlers");
                            const g = () => {
                                if (u.hasDefaultEventHandler) {
                                    if (!u.maskRoot) return !0;
                                    et(d)
                                } else {
                                    if (!u.maskRoot) return e === e.top && (m.call("Attaching beforeunload event handler"), e.addEventListener("beforeunload", Js), setTimeout((() => {
                                        e.removeEventListener("beforeunload", Js)
                                    }), 1e3), m.callEnd()), !1;
                                    l.push({
                                        maskRoot: u.maskRoot,
                                        mask: d
                                    })
                                }
                            };
                            e: {
                                if (Ys) {
                                    d = n, u = function(e) {
                                        let s, t, a = !1;
                                        for (let n = 0, i = e.length; n < i; n += 1) {
                                            const i = e[n];
                                            if (!ke(i)) break;
                                            t && t.hasDefaultEventHandler || (t = st(i)), !a && js(i) && (a = !0, Ts(e[0]) && (s = i))
                                        }
                                        return t.maskRoot = s, t
                                    }(Ys.call(s));
                                    const e = g();
                                    if (!0 === e) break e;
                                    if (!1 === e) return
                                }
                                for (let e = Ys && p[0] === n ? 1 : 0, s = p.length; e < s; e += 1) {
                                    d = p[e], u = tt(d);
                                    const s = g();
                                    if (!0 === s) break e;
                                    if (!1 === s) return
                                }
                            }
                            const {
                                defaultEventHandlerTarget: c
                            } = u;
                            c && (a && (a.defaultEventHandlerTarget = c), t === c && (m.print("Throwing, because the target url is an href of an eventTarget or its ancestor"), ne()));
                            let _ = !0;
                            e: {
                                if (0 === l.length) {
                                    _ = !1;
                                    break e
                                }
                                const {
                                    innerWidth: e,
                                    innerHeight: s
                                } = r.defaultView,
                                t = d.getBoundingClientRect();
                                for (let a = 0, n = l.length; a < n; a += 1) {
                                    const n = l[a];
                                    if (!Ts(n.mask)) {
                                        _ = !1;
                                        break e
                                    }
                                    const {
                                        left: i,
                                        right: o,
                                        top: r,
                                        bottom: p
                                    } = d.getBoundingClientRect();
                                    if (!(Ps(t.top, r, 1) && Ps(t.left, i, 1) && Ps(t.bottom, p, 1) && Ps(t.right, o, 1) || zs(t, e, s))) {
                                        _ = !1;
                                        break e
                                    }
                                }
                            }
                            if (_) {
                                for (let e = 0, s = l.length; e < s; e += 1) {
                                    const s = l[e];
                                    et(s.maskRoot)
                                }
                                const e = ot.map((e => s[e]));
                                nt.dispatchMouseEventOnTarget(e, d)
                            }
                        } : () => {};
                    var pt = m.connect(rt, "Examining Target");

                    function lt(e, s, t) {
                        r.contentScriptApiFacade.originIsSilenced() || r.messageHub.trigger(0, {
                            orig_domain: r.contentScriptApiFacade.domain,
                            popup_url: e
                        }, r.messageHub.parent), Xs.$start(), s && pt(s, e, t)
                    }
                    class mt {
                        constructor(e) {
                            this.messageHub = e
                        }
                        handleMessage(e) {
                            this.messageHub.trigger(0, e, this.messageHub.parent)
                        }
                    }

                    function ut(e) {
                        const s = e.isTop ? {
                            handleMessage(e) {
                                r.contentScriptApiFacade.showAlert(e.orig_domain, e.popup_url)
                            }
                        } : new mt(e);
                        e.on(0, s)
                    }
                    const dt = (e, s) => {
                        const {
                            thisArg: t
                        } = e;
                        if (be(t)) {
                            if (m.print("click() was called on an anchor tag", t), r.contentScriptApiFacade.originIsAllowed()) return e.invokeTarget(s);
                            const a = Ve(t.href),
                                n = a[1];
                            if (r.contentScriptApiFacade.originIsAllowed(n)) return m.print(`The domain ${n} is in allowlist.`), e.invokeTarget(s);
                            const i = qs();
                            if (!Vs(i)) return m.print("It did not pass the test, not clicking element"), void lt(a[2], i)
                        }
                        return e.invokeTarget(s)
                    };
                    const gt = function(e, s) {
                            const {
                                thisArg: t
                            } = e, a = s[0];
                            if (ce(a) && je(a) && he(t) && be(t) && !a.isTrusted) {
                                if (m.call("It is a MouseEvent on an anchor tag."), m.print("dispatched event is:", a), r.contentScriptApiFacade.originIsAllowed()) return e.invokeTarget(s);
                                const n = Ve(t.href),
                                    i = n[1];
                                if (r.contentScriptApiFacade.originIsAllowed(i)) return m.print(`The domain ${i} is in allowlist.`), e.invokeTarget(s);
                                const o = qs();
                                if (!Vs(o)) {
                                    const e = o.target;
                                    if (!he(e) || !he(t) || !re(e, t)) return m.print("It did not pass the test, not dispatching event"), lt(n[2], o), m.callEnd(), !1;
                                    m.print("dispatched event's target is chainable with the original target.")
                                }
                                m.print("It passed the test"), m.callEnd()
                            }
                            return e.invokeTarget(s)
                        },
                        ct = (e, s, t) => {
                            const a = t[0];
                            return "view" in a
                        };
                    class _t {
                        constructor(e, s, t) {
                            this.$window = e, this.proxyService = s, this.instanceID = t, this.callbacks = [], this.onFrameLoad = Be.call(this.onFrameLoad, this), this.processChildOnContentAccess = Be.call(this.processChildOnContentAccess, this);
                            const a = e.HTMLIFrameElement.prototype;
                            this.frameToDocument = new Xe, s.wrapAccessor(a, "contentWindow", this.processChildOnContentAccess), s.wrapAccessor(a, "contentDocument", this.processChildOnContentAccess), this.observeChildFrames(e)
                        }
                        observeChildFrames(e) {
                            Me && (this.childFrameObserver || (this.childFrameObserver = new Me((e => {
                                for (let s = 0, t = e.length; s < t; s += 1) {
                                    const t = e[s],
                                        {
                                            addedNodes: a
                                        } = t;
                                    for (let e = 0, s = a.length; e < s; e += 1) {
                                        const s = a[e];
                                        if (ve(s)) this.processChildFrameIfNew(s);
                                        else if (ke(s)) {
                                            const e = s.getElementsByTagName("IFRAME");
                                            for (let s = 0, t = e.length; s < t; s += 1) {
                                                const t = e[s];
                                                this.processChildFrameIfNew(t)
                                            }
                                        }
                                    }
                                }
                            }))), this.childFrameObserver.observe(e.document.documentElement, {
                                childList: !0,
                                subtree: !0
                            }))
                        }
                        processChildFrameIfNew(e) {
                            if (Ae(this.frameToDocument.get(e))) {
                                m.print("ChildContextInjector: attaching an event listener to a first met frame"), e.addEventListener("load", this.onFrameLoad);
                                try {
                                    const s = Le.call(e);
                                    if (s.location.protocol === le) {
                                        m.print("ChildContextInjector: new child context encountered.", e.outerHTML), this.frameToDocument.set(e, s.document), this.processChildWindow(s);
                                        const {
                                            src: t
                                        } = e;
                                        t && this.instanceID && function(e, s, t) {
                                            const a = qe(e);
                                            return "javascript:" === a.protocol || "about:blank" === a.href || "data:" !== a.protocol && a.hostname === t && a.port === s.port && a.protocol === s.protocol
                                        }(t, this.$window.location, this.$window.document.domain) && (m.print("ChildContextInjector: setting a global flag"), _t.setNonEnumerableValue(s, this.instanceID, void 0))
                                    }
                                } catch (s) {
                                    m.print("Processing a child frame has failed, due to an error:", s), this.frameToDocument.set(e, null)
                                }
                            }
                        }
                        processChildOnContentAccess(e, s) {
                            const t = e.thisArg;
                            return this.processChildFrameIfNew(t), this.proxyService.makeObjectProxy(e.invokeTarget(s))
                        }
                        processChildWindow(e) {
                            const {
                                callbacks: s
                            } = this;
                            for (let t = 0, a = s.length; t < a; t += 1) s[t](e)
                        }
                        onFrameLoad(e) {
                            const s = e.target;
                            try {
                                const e = Ne.call(s);
                                e.location.protocol === le && this.frameToDocument.get(s) !== e && (m.print("ChildContextInjector: a content of an empty iframe has changed."), this.frameToDocument.set(s, e), this.processChildWindow(e.defaultView))
                            } catch (e) {
                                this.frameToDocument.set(s, null)
                            }
                        }
                        static setNonEnumerableValue(e, s, t) {
                            Pe(e, s, {
                                value: t,
                                configurable: !0
                            })
                        }
                        registerCallback(e) {
                            this.callbacks.push(e)
                        }
                    }
                    class ht {
                        constructor(e, s) {
                            this.typeHandlerMap = [], this.hostWindow = e;
                            const t = this.supported = Ze,
                                a = this.parent = e.parent,
                                n = this.isTop = e.top === e;
                            if (t) {
                                if (this.framePortMap = new WeakMap, e.addEventListener("message", (e => {
                                        this.handshake(e)
                                    })), s) {
                                    m.print("MessageHub: registering to parent instance directly..");
                                    const t = new Ce;
                                    s.registerChildPort(e, t.port1), this.registerChildPort(s.hostWindow, t.port2)
                                }
                                if (!(n || s && s.hostWindow === a)) {
                                    m.print(`MessageHub: sending message from ${e.location.href} to parent...`);
                                    const s = new Ce;
                                    a.postMessage(ht.MAGIC, "*", [s.port1]), this.registerChildPort(a, s.port2)
                                }
                            }
                        }
                        handshake(e) {
                            if (e.data !== ht.MAGIC) return;
                            const s = Ue.call(e);
                            e: {
                                if (Ae(s)) break e;
                                if (this.framePortMap.has(s)) {
                                    if (this.framePortMap.get(s).locationObject === s.location) {
                                        m.print("Received a port from a frame that we already met. This could be a bug");
                                        break e
                                    }
                                    m.print("Received a port from a known frame, but location object has updated")
                                }
                                const t = e.ports[0];this.registerChildPort(s, t)
                            }
                            e.stopImmediatePropagation(), e.preventDefault()
                        }
                        registerChildPort(e, s) {
                            s.onmessage = e => {
                                m.print("MesageHub: received a message from a port"), this.onMessage(e)
                            }, this.framePortMap.set(e, {
                                messagePort: s,
                                locationObject: e.location
                            })
                        }
                        onMessage(e) {
                            const {
                                data: s
                            } = e;
                            this.triggerHandlers(s.$type, s.$data, Ue.call(e))
                        }
                        triggerHandlers(e, s, t) {
                            const a = this.typeHandlerMap[e];
                            a && a.handleMessage(s, t)
                        }
                        on(e, s) {
                            Ae(this.typeHandlerMap[e]) || m.throwMessage("Tried to re-assign a callback for an event type", 2), this.typeHandlerMap[e] = s
                        }
                        trigger(e, s, t, a) {
                            if (t === this.hostWindow && this.triggerHandlers(e, s, this.hostWindow), !this.supported) return;
                            const n = this.framePortMap.get(t);
                            if (!n) return;
                            const i = n.messagePort,
                                o = {
                                    $type: e,
                                    $data: s
                                };
                            m.print("MesageHub: sending a message to a port"), i.postMessage(o, a)
                        }
                    }
                    ht.MAGIC = "pb_handshake";
                    class kt {
                        constructor() {
                            this.lastFired = 0, this.callbackTimer = -1, this.callback = () => {
                                this.lastFired = l(), this.callbackTimer = -1;
                                const e = kt.hitTest();
                                e && kt.preventPointerEventIfOverlayAnchor(e)
                            }, this.clicked = !1, this.throttledCallback = (e, s) => {
                                if (!this.clicked) return;
                                const t = l() - this.lastFired; - 1 === this.callbackTimer && (t > kt.THROTTLE_TIME ? this.callback(e, s) : this.callbackTimer = setTimeout((() => {
                                    this.callback(e, s)
                                }), kt.THROTTLE_TIME - t))
                            }, e.addEventListener("mousedown", (e => {
                                e.isTrusted && (this.clicked = !0, clearTimeout(this.clickTimer), this.clickTimer = setTimeout((() => {
                                    this.clicked = !1
                                }), kt.OBSERVE_DURATION_AFTER_CLICK))
                            }), !0), Ks && (this.observer = new Ks(this.throttledCallback), this.observer.observe(document.documentElement, kt.option))
                        }
                    }
                    kt.hitTest = () => {
                        const s = e.innerWidth,
                            t = e.innerHeight;
                        return document.elementFromPoint(s >> 1, t >> 1)
                    }, kt.preventPointerEventIfOverlayAnchor = e => !(!be(e) || !Ds(e)) && (m.print("Found an overlay Anchor, processing it..."), et(e), !0), kt.THROTTLE_TIME = 50, kt.option = {
                        childList: !0,
                        subtree: !0
                    }, kt.OBSERVE_DURATION_AFTER_CLICK = 200, e.addEventListener("DOMContentLoaded", (() => {
                        new kt
                    })), r.contentScriptApiFacade = e[s];
                    const ft = r.contentScriptApiFacade.getInstanceID();
                    ! function(e, s) {
                        if (e.hasOwnProperty(s)) delete e[s];
                        else {
                            const t = e => {
                                    r.messageHub = new ht(e), ut(r.messageHub), it(r.messageHub)
                                },
                                a = e => {
                                    const s = new ht(e, r.messageHub);
                                    ut(s), it(s)
                                },
                                n = e => {
                                    ! function(e) {
                                        const s = e.Function.prototype;
                                        ns(s, "toString", ss), ns(s, "toSource", ss)
                                    }(e);
                                    const t = xs.onNewFrame(e),
                                        i = new fs(xs, t);
                                    ! function(e, s) {
                                        const t = (e, t, a) => {
                                            if (r.contentScriptApiFacade.originIsAllowed()) return e.invokeTarget(t);
                                            const n = t[0];
                                            m.call(`Called window.open with url ${n}`);
                                            const i = Ve(n),
                                                o = i[1];
                                            if (r.contentScriptApiFacade.originIsAllowed(o)) return m.print(`The domain ${o} is in allowlist.`), e.invokeTarget(t);
                                            const p = qs();
                                            let l;
                                            if (Vs(p) || Fs(p, t[1])) {
                                                if (m.print("event verified, inquiring event timeline.."), xs.canOpenPopup(s.framePosition)) return m.print("calling original window.open..."), l = e.invokeTarget(t), l = s.makeObjectProxy(l), m.callEnd(), l;
                                                m.print("canOpenPopup returned false")
                                            }
                                            return a.mocked = !0, lt(i[2], p, a), m.print("mock a window object"), l = ks(t[0], t[1], s), l = s.makeObjectProxy(l), m.callEnd(), l
                                        };
                                        s.wrapMethod(e, "open", t), s.wrapMethod(e.Window.prototype, "open", t)
                                    }(e, i),
                                    function(e, s) {
                                        s.wrapMethod(e.HTMLElement.prototype, "click", m.connect(dt, "Verifying click"))
                                    }(e, i),
                                    function(e, s) {
                                        const t = e.EventTarget || e.Node;
                                        s.wrapMethod(t.prototype, "dispatchEvent", gt, ct)
                                    }(e, i);
                                    const o = new _t(e, i, s);
                                    o.registerCallback(n), o.registerCallback(a)
                                };
                            n(e), t(e)
                        }
                    }(e, ft)
                }
                const hs = "undefined" != typeof unsafeWindow ? unsafeWindow.window : window;
                ! function(e) {
                    const s = [He, Ke],
                        {
                            href: t
                        } = e.location;
                    return s.some((e => e === t)) || /(localhost:|http:\/\/127\.0\.0\.1).*(\/options\.html)/.test(t)
                }(hs) ? (() => {
                    if (gs.envIsFirefoxBrowserExt) {
                        (e => {
                            const s = document.createElement("script");
                            s.textContent = e;
                            const t = document.body || document.head || document.documentElement;
                            t.appendChild(s), t.removeChild(s)
                        })(`(${_s.toString()})(this, '${cs}')`)
                    } else _s(hs, cs)
                })() : hs[Ve] = n
            }();
        })
    } //# sourceURL=AdGuard%20Popup%20Blocker.user.js
})