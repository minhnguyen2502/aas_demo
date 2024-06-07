(function anonymous(a) {
    with(a.sandbox) {
        (function(userscript) {
            'use strict';
            userscript.call(a.sandbox, a.settings.scriptInfo, a.unsafeWindow, a.A, a.B, a.w, a.settings, a.settings, a.v, a.C, a.u, a.o, a.G, a.m(a.F), a.D);
        })(function(GM_info, unsafeWindow, createObjectIn, exportFunction, cloneInto, adguardSettings, AdguardSettings, ADG_addRule, ADG_removeRule, ADG_isFiltered, ADG_changeFilteringState, ADG_temporaryDontBlock, ADG_sendComplaint, ADG_sendAbuse, a) { // ==UserScript==
            // @name AdGuard Extra 
            // @name:ar AdGuard Extra 
            // @name:be AdGuard Extra 
            // @name:cs AdGuard Extra 
            // @name:da AdGuard Extra 
            // @name:de AdGuard Extra 
            // @name:el AdGuard Extra 
            // @name:es AdGuard Extra 
            // @name:fi AdGuard Extra 
            // @name:fr AdGuard Extra 
            // @name:he AdGuard Extra 
            // @name:hr AdGuard Extra 
            // @name:hu AdGuard Extra 
            // @name:id AdGuard Extra 
            // @name:it AdGuard Extra 
            // @name:ja AdGuard Extra 
            // @name:ko AdGuard Extra 
            // @name:lt AdGuard Extra 
            // @name:lv AdGuard Extra 
            // @name:ms Adguard Tambahan 
            // @name:nl AdGuard Extra 
            // @name:no AdGuard Extra 
            // @name:pl AdGuard Extra 
            // @name:pt-PT AdGuard Extra 
            // @name:pt AdGuard Extra 
            // @name:ro AdGuard Extra 
            // @name:ru AdGuard Extra 
            // @name:sk AdGuard Extra 
            // @name:sl Uporabi AdGuard Extra 
            // @name:sr AdGuard ekstra 
            // @name:sv AdGuard Extra 
            // @name:th AdGuard Extra 
            // @name:tr AdGuard Extra 
            // @name:uk AdGuard Extra 
            // @name:vi AdGuard Extra 
            // @name:zh-HK AdGuard Extra 
            // @name:zh-TW AdGuard Extra 
            // @name:zh AdGuard Extra 
            // @namespace    adguard
            // @version      1.0.594
            // @description AdGuard Extra is designed to solve complicated cases when regular ad blocking rules aren't enough. 
            // @description:ar AdGuard Extra مصمم لأجل أن يحل الحالات المعقدة و اللتي لاتتمكن قواعد حجب الإعلانات العادية من حجبها أو تكون غير كافية. 
            // @description:be AdGuard Extra прызначаны для вырашэння складаных выпадкаў, калі звычайных правілаў блакавання рэкламы недастаткова. 
            // @description:cs AdGuard Extra má za úkol řešit složité případy, když běžná pravidla pro blokování reklam nestačí. 
            // @description:da AdGuard Extra er designet til at løse komplicerede tilfælde, hvor alm. adblockingregler ikke er nok. 
            // @description:de AdGuard Extra wurde entwickelt, um komplexe Fälle zu lösen, wenn normalen Regeln zum Sperren von Werbung nicht ausreichen. 
            // @description:el Το AdGuard Extra είναι σχεδιασμένο να επιλύει περίπλοκες καταστάσεις όπου οι κοινοί κανόνες αποκλεισμού διαφημίσεων δεν αρκούν. 
            // @description:es AdGuard Extra está diseñado para resolver casos complicados cuando las reglas regulares para bloqueo de anuncios no son suficientes. 
            // @description:fi AdGuard Extra on suunniteltu ratkaisemaan monimutkaisia tapauksia silloin kun tavalliset mainosestosäännöt eivät riitä. 
            // @description:fr AdGuard Extra est conçu pour résoudre les cas complexes lorsque les règles de blocage des publicités ne suffisent pas. 
            // @description:he AdGuard Extra מתוכנן לפתור מקרים מורכבים בהם כללים רגילים של חסימת פרסומות אינם מספיקים. 
            // @description:hr AdGuard Extra je dizajniran za rješavanje kompleksnih slučajeva kada opća pravila blokade oglasa nisu dovoljna. 
            // @description:hu Az AdGuard Extra olyan bonyolultabb esetek megoldására szolgál, amikor a hagyományos hirdetésblokkolási szabályok nem elegendőek. 
            // @description:id AdGuard Extra dirancang untuk menyelesaikan kasus rumit saat aturan pemblokiran iklan biasa tidak cukup. 
            // @description:it AdGuard Extra è progettato per risolvere casi complicati in cui le normali regole di blocca-annunci non sono sufficienti. 
            // @description:ja AdGuard Extraは、通常の広告ブロックルールが十分ではない複雑なケースを解決するために設計されています。 
            // @description:ko AdGuard Extra는 일반적인 광고 차단 규칙이 충분하지 않은 복잡한 문제를 해결하도록 설계되었습니다. 
            // @description:lt AdGuard Extra yra skirtas išspręsti sudėtingesnius atvejus, kai nepakanka įprastų skelbimų blokavimo taisyklių. 
            // @description:lv AdGuard Extra ir paredzēts sarežģītu gadījumu risināšanai, kad nepietiek ar parastajiem reklāmu bloķēšanas noteikumiem. 
            // @description:ms AdGuard Tambahan direka untuk menyelesaikan kes rumit apabila peraturan sekatan iklan biasa tidak mencukupi. 
            // @description:nl AdGuard Extra is bedoeld om ingewikkelde gevallen op te lossen wanneer de standaard advertentie blokkeringsregels niet voldoende blijken. 
            // @description:no AdGuard Extra er utformet for å løse kompliserte saker der vanlige blokkeringsoppføringer ikke strekker til. 
            // @description:pl AdGuard Extra jest przeznaczony do rozwiązywania skomplikowanych przypadków, gdy zwykłe reguły blokowania reklam nie wystarczą. 
            // @description:pt-PT O AdGuard Extra é indicado para resolver casos complicados onde as regras regulares de bloqueio de anúncios não são suficientes. 
            // @description:pt O AdGuard Extra é indicado para resolver casos complicados onde as regras regulares de bloqueio de anúncios não são suficientes. 
            // @description:ro AdGuard Extra este creeat să rezolve cazuri complexe când regulile uzuale de blocat reclame sunt insuficiente. 
            // @description:ru AdGuard Extra предназначен для решения более сложных задач, когда обычных правил блокировки рекламы недостаточно. 
            // @description:sk AdGuard Extra má za úlohu riešiť zložité prípady, keď bežné pravidlá blokovania reklám nestačia. 
            // @description:sl AdGuard Extra naj bi rešil zapletene primere, ko običajna pravila za zaviranje oglasov niso dovolj. 
            // @description:sr AdGuard Extra bi trebalo da reši komplikovane slučajeve u kojima standardna pravila blokiranja reklama nisu dovoljna. 
            // @description:th AdGuard Extra ถูกออกแบบมาเพื่อแก้ไขกรณีที่ซับซ้อนเมื่อกฎการปิดกั้นโฆษณาปกติไม่เพียงพอ 
            // @description:tr AdGuard Extra, normal reklam engelleme kurallarının yeterli olmadığı karmaşık durumları çözmek için tasarlanmıştır. 
            // @description:uk AdGuard Extra призначений для вирішення складних завдань, коли звичайних правил для блокування реклами недостатньо. 
            // @description:vi AdGuard Extra được thiết kế để giải quyết các vấn đề khi mà các quy tắc chặn quảng cáo thông thường chưa đủ. 
            // @description:zh-HK AdGuard Extra 可以解決一般封鎖規則不足以處理廣告的問題。 
            // @description:zh-TW 當常規的廣告封鎖規則不夠時，AdGuard Extra 旨在解決複雜的情況。 
            // @description:zh AdGuard Extra 旨在解决常规的广告拦截规则无能为力的复杂情况。 
            // @downloadURL  https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.user.js
            // @updateURL    https://userscripts.adtidy.org/release/adguard-extra/1.0/adguard-extra.meta.js
            // @homepageURL  https://adguard.com/
            // @author       AdGuard
            // @match        *://*/*
            // @grant        unsafeWindow
            // @run-at       document-start
            // @exclude *://mil.ru/*
            // @exclude *wikipedia.org*
            // @exclude *icloud.com*
            // @exclude *hangouts.google.com*
            // @exclude *www.facebook.com/plugins/*
            // @exclude *www.facebook.com/v*/plugins*
            // @exclude *disqus.com/embed/comments*
            // @exclude *vk.com/widget*
            // @exclude *twitter.com/intent/*
            // @exclude *www.youtube.com/embed/*
            // @exclude *player.vimeo.com*
            // @exclude *coub.com/embed*
            // @exclude *staticxx.facebook.com/connect/xd_arbiter/*
            // @exclude *vk.com/q_frame*
            // @exclude *tpc.googlesyndication.com*
            // @exclude *syndication.twitter.com*
            // @exclude *platform.twitter.com*
            // @exclude *tutosdeath.blogspot.com*
            // @exclude *notifications.google.com*
            // @exclude *google.com/recaptcha/*
            // @exclude *bizmania.ru/*
            // ==/UserScript==
            'use strict';
            const _0x17d438 = _0x2c27;
            (function(_0xad4edc, _0x4252ef) {
                const _0x56bc8b = _0x2c27,
                    _0x1ead5c = _0xad4edc();
                while (!![]) {
                    try {
                        const _0xc0bb3b = parseInt(_0x56bc8b(0x146)) / 0x1 * (parseInt(_0x56bc8b(0x138)) / 0x2) + parseInt(_0x56bc8b(0x149)) / 0x3 * (-parseInt(_0x56bc8b(0x13b)) / 0x4) + parseInt(_0x56bc8b(0x13d)) / 0x5 * (-parseInt(_0x56bc8b(0x13c)) / 0x6) + -parseInt(_0x56bc8b(0x141)) / 0x7 * (-parseInt(_0x56bc8b(0x13f)) / 0x8) + parseInt(_0x56bc8b(0x136)) / 0x9 + -parseInt(_0x56bc8b(0x13e)) / 0xa + -parseInt(_0x56bc8b(0x147)) / 0xb * (parseInt(_0x56bc8b(0x134)) / 0xc);
                        if (_0xc0bb3b === _0x4252ef) break;
                        else _0x1ead5c['push'](_0x1ead5c['shift']());
                    } catch (_0x2a53aa) {
                        _0x1ead5c['push'](_0x1ead5c['shift']());
                    }
                }
            }(_0x3b44, 0x6061f));
            let browser;

            function _0x3b44() {
                const _0x31b733 = ['document', '6583OvAHDC', '4246pTMmPS', 'bind', '41073gglXKB', 'call', '9624eSmcYF', 'location', '5269311MVwrQd', 'undefined', '98pNuRPU', 'getAttribute', 'console', '8cdpwRn', '6WeRIBh', '3668530QaWVYd', '2291160PMqAEm', '56NicmlW', 'window', '786513AMKHoR', 'prototype', 'removeAttribute', 'forEach'];
                _0x3b44 = function() {
                    return _0x31b733;
                };
                return _0x3b44();
            }
            try {
                const win = typeof unsafeWindow !== _0x17d438(0x137) ? unsafeWindow : window;
                browser = {
                    'window': win,
                    'document': win[_0x17d438(0x145)],
                    'location': win[_0x17d438(0x145)][_0x17d438(0x135)],
                    'navigator': win['navigator'],
                    'console': {},
                    'querySelector': win[_0x17d438(0x145)]['querySelector'][_0x17d438(0x148)](win['document']),
                    'querySelectorAll': win[_0x17d438(0x145)]['querySelectorAll'][_0x17d438(0x148)](win[_0x17d438(0x145)]),
                    'getAttribute': Function['prototype'][_0x17d438(0x133)]['bind'](HTMLElement[_0x17d438(0x142)][_0x17d438(0x139)]),
                    'setAttribute': Function[_0x17d438(0x142)][_0x17d438(0x133)][_0x17d438(0x148)](HTMLElement[_0x17d438(0x142)]['setAttribute']),
                    'removeAttribute': Function[_0x17d438(0x142)]['call'][_0x17d438(0x148)](HTMLElement[_0x17d438(0x142)][_0x17d438(0x143)]),
                    'defineProperty': Object['defineProperty'],
                    'MutationObserver': win['MutationObserver']
                }, Object['keys'](browser['window'][_0x17d438(0x13a)])[_0x17d438(0x144)](_0xcf44f9 => {
                    const _0x4423f5 = _0x17d438;
                    browser[_0x4423f5(0x13a)][_0xcf44f9] = browser[_0x4423f5(0x140)][_0x4423f5(0x13a)][_0xcf44f9];
                });
            } catch (_0x202585) {
                browser = {};
            }

            function _0x2c27(_0xc31362, _0x265ef8) {
                const _0x3b44bd = _0x3b44();
                return _0x2c27 = function(_0x2c2708, _0x15193f) {
                    _0x2c2708 = _0x2c2708 - 0x133;
                    let _0x42b320 = _0x3b44bd[_0x2c2708];
                    return _0x42b320;
                }, _0x2c27(_0xc31362, _0x265ef8);
            }
            var _0x51ea98 = browser;

            function _0x262f() {
                var _0x8a94a1 = ['55861OtBuXd', 'defineProperty', '33FjWrMU', '90BkohWx', '20TZroHX', 'enumerable', '41030SeGqmG', '719811qQlUVM', '12171gQIiIo', '8gpVABU', '516EWFrbl', '35833cDEgnF', '283712FrCnpJ', '66XVtoFe', 'configurable', '265632UEogES'];
                _0x262f = function() {
                    return _0x8a94a1;
                };
                return _0x262f();
            }(function(_0x50f977, _0xb1479a) {
                var _0x3da993 = _0x6f0a,
                    _0x4a2a0b = _0x50f977();
                while (!![]) {
                    try {
                        var _0x3d8f19 = parseInt(_0x3da993(0x19f)) / 0x1 + -parseInt(_0x3da993(0x196)) / 0x2 * (parseInt(_0x3da993(0x19b)) / 0x3) + parseInt(_0x3da993(0x1a2)) / 0x4 * (parseInt(_0x3da993(0x197)) / 0x5) + -parseInt(_0x3da993(0x1a0)) / 0x6 * (-parseInt(_0x3da993(0x19e)) / 0x7) + -parseInt(_0x3da993(0x19c)) / 0x8 * (parseInt(_0x3da993(0x19a)) / 0x9) + -parseInt(_0x3da993(0x199)) / 0xa * (parseInt(_0x3da993(0x195)) / 0xb) + -parseInt(_0x3da993(0x19d)) / 0xc * (parseInt(_0x3da993(0x193)) / 0xd);
                        if (_0x3d8f19 === _0xb1479a) break;
                        else _0x4a2a0b['push'](_0x4a2a0b['shift']());
                    } catch (_0x5c2d81) {
                        _0x4a2a0b['push'](_0x4a2a0b['shift']());
                    }
                }
            }(_0x262f, 0x23a6d));

            function _defineProperty(_0x451476, _0x58aee6, _0x1ddfa8) {
                var _0x279d79 = _0x6f0a;
                if (_0x58aee6 in _0x451476) {
                    var _0x5a2050 = {};
                    _0x5a2050['value'] = _0x1ddfa8, _0x5a2050[_0x279d79(0x198)] = !![], _0x5a2050[_0x279d79(0x1a1)] = !![], _0x5a2050['writable'] = !![], Object[_0x279d79(0x194)](_0x451476, _0x58aee6, _0x5a2050);
                } else _0x451476[_0x58aee6] = _0x1ddfa8;
                return _0x451476;
            }
            var defineProperty = _defineProperty;

            function _0x6f0a(_0x4e659c, _0x5507f2) {
                var _0x262f74 = _0x262f();
                return _0x6f0a = function(_0x6f0a4, _0x561223) {
                    _0x6f0a4 = _0x6f0a4 - 0x193;
                    var _0x440b20 = _0x262f74[_0x6f0a4];
                    return _0x440b20;
                }, _0x6f0a(_0x4e659c, _0x5507f2);
            }
            const _0x3384b5 = _0x5ecf;

            function _0x596a() {
                const _0x2b940c = ['get', '12BuqLYB', '744410zcgeAg', '114zkseJt', 'hosts', '12733xgxMgr', '253JJpIns', '5277153MUmZVT', '3835204TqSlhX', 'join', 'setEntries', '7096sKLpKp', '7674507NSKafb', '552705Uadlpj', '6687HLpdzf', 'forEach'];
                _0x596a = function() {
                    return _0x2b940c;
                };
                return _0x596a();
            }(function(_0x4f2680, _0xa83233) {
                const _0x380f9a = _0x5ecf,
                    _0x14af89 = _0x4f2680();
                while (!![]) {
                    try {
                        const _0x2c74d3 = -parseInt(_0x380f9a(0x1ed)) / 0x1 * (parseInt(_0x380f9a(0x1f2)) / 0x2) + parseInt(_0x380f9a(0x1f6)) / 0x3 + -parseInt(_0x380f9a(0x1f7)) / 0x4 + parseInt(_0x380f9a(0x1fc)) / 0x5 * (-parseInt(_0x380f9a(0x1f0)) / 0x6) + -parseInt(_0x380f9a(0x1f4)) / 0x7 * (-parseInt(_0x380f9a(0x1fa)) / 0x8) + parseInt(_0x380f9a(0x1fb)) / 0x9 + parseInt(_0x380f9a(0x1f1)) / 0xa * (-parseInt(_0x380f9a(0x1f5)) / 0xb);
                        if (_0x2c74d3 === _0xa83233) break;
                        else _0x14af89['push'](_0x14af89['shift']());
                    } catch (_0x1047cf) {
                        _0x14af89['push'](_0x14af89['shift']());
                    }
                }
            }(_0x596a, 0xe86ea));

            function _0x5ecf(_0x35137d, _0x519654) {
                const _0x596a49 = _0x596a();
                return _0x5ecf = function(_0x5ecf7f, _0x33e2ce) {
                    _0x5ecf7f = _0x5ecf7f - 0x1ed;
                    let _0x36a246 = _0x596a49[_0x5ecf7f];
                    return _0x36a246;
                }, _0x5ecf(_0x35137d, _0x519654);
            }
            class HostsMap {
                constructor(_0x13eee0) {
                    const _0x244dee = _0x5ecf;
                    defineProperty(this, 'getHosts', () => new Map([...this['hosts']])), defineProperty(this, 'getPageScript', _0x282849 => {
                        const _0x3ad4ed = _0x5ecf;
                        let _0x558eac = this[_0x3ad4ed(0x1f3)][_0x3ad4ed(0x1ef)](_0x282849);
                        if (!_0x558eac) {
                            const _0x3353fd = _0x282849['split']('.')['slice'](-0x2)[_0x3ad4ed(0x1f8)]('.');
                            _0x558eac = this[_0x3ad4ed(0x1f3)]['get']('*.' + _0x3353fd);
                        }
                        return _0x558eac;
                    }), this[_0x244dee(0x1f3)] = new Map(_0x13eee0);
                }[_0x3384b5(0x1f9)](_0x36bbbb, _0x46f229) {
                    const _0x23f6ed = _0x3384b5;
                    _0x36bbbb[_0x23f6ed(0x1ee)](_0x2cf96d => {
                        const _0x63c509 = _0x23f6ed;
                        this[_0x63c509(0x1f3)]['set'](_0x2cf96d, _0x46f229);
                    });
                }
            }(function(_0x5d07ab, _0xbef1e5) {
                const _0x123fe3 = _0x327a,
                    _0x53710e = _0x5d07ab();
                while (!![]) {
                    try {
                        const _0x3d3d52 = -parseInt(_0x123fe3(0xf5)) / 0x1 + -parseInt(_0x123fe3(0xf1)) / 0x2 + -parseInt(_0x123fe3(0xf3)) / 0x3 * (-parseInt(_0x123fe3(0xf7)) / 0x4) + -parseInt(_0x123fe3(0xf8)) / 0x5 + parseInt(_0x123fe3(0xf6)) / 0x6 + -parseInt(_0x123fe3(0xf2)) / 0x7 + parseInt(_0x123fe3(0xf4)) / 0x8;
                        if (_0x3d3d52 === _0xbef1e5) break;
                        else _0x53710e['push'](_0x53710e['shift']());
                    } catch (_0x706b0a) {
                        _0x53710e['push'](_0x53710e['shift']());
                    }
                }
            }(_0x196a, 0xe6c30));

            function _0x196a() {
                const _0x156114 = ['7167010TfYoWZ', '3596380vwhpzt', '10818150KOmIIs', '1171173ifEAtB', '37250400VXhTMo', '840065pQASSq', '4409004CizjgS', '12NipVLB'];
                _0x196a = function() {
                    return _0x156114;
                };
                return _0x196a();
            }

            function _0x327a(_0x5bfe7f, _0x39fbc3) {
                const _0x196afb = _0x196a();
                return _0x327a = function(_0x327a70, _0x27c284) {
                    _0x327a70 = _0x327a70 - 0xf1;
                    let _0x25e1a6 = _0x196afb[_0x327a70];
                    return _0x25e1a6;
                }, _0x327a(_0x5bfe7f, _0x39fbc3);
            }
            const commonHosts = new HostsMap();
            const _0x261e10 = _0x2fa2;
            (function(_0x482343, _0x39ae7b) {
                const _0x3120e2 = _0x2fa2,
                    _0x3fd5ee = _0x482343();
                while (!![]) {
                    try {
                        const _0xffaa19 = -parseInt(_0x3120e2(0x165)) / 0x1 * (-parseInt(_0x3120e2(0x16b)) / 0x2) + -parseInt(_0x3120e2(0x170)) / 0x3 * (parseInt(_0x3120e2(0x17c)) / 0x4) + -parseInt(_0x3120e2(0x167)) / 0x5 * (-parseInt(_0x3120e2(0x16d)) / 0x6) + -parseInt(_0x3120e2(0x17a)) / 0x7 * (-parseInt(_0x3120e2(0x166)) / 0x8) + -parseInt(_0x3120e2(0x169)) / 0x9 * (parseInt(_0x3120e2(0x16a)) / 0xa) + parseInt(_0x3120e2(0x164)) / 0xb + -parseInt(_0x3120e2(0x180)) / 0xc * (-parseInt(_0x3120e2(0x182)) / 0xd);
                        if (_0xffaa19 === _0x39ae7b) break;
                        else _0x3fd5ee['push'](_0x3fd5ee['shift']());
                    } catch (_0x2244e1) {
                        _0x3fd5ee['push'](_0x3fd5ee['shift']());
                    }
                }
            }(_0x1bdb, 0x7f921));

            function _0x2fa2(_0x251810, _0x1b61fc) {
                const _0x1bdb8f = _0x1bdb();
                return _0x2fa2 = function(_0x2fa2be, _0x2a3f5f) {
                    _0x2fa2be = _0x2fa2be - 0x162;
                    let _0x12c106 = _0x1bdb8f[_0x2fa2be];
                    return _0x12c106;
                }, _0x2fa2(_0x251810, _0x1b61fc);
            }

            function _0x1bdb() {
                const _0x1bb68c = ['1cSwDeU', '6554104QkUZhN', '35dJwTUk', 'dblclick', '54792LVxTLi', '1460ANsQdz', '620474PIzjiO', 'mousemove', '233718LTUKzF', 'lastEventTime', 'now', '45VpBOAM', 'keypress', 'getCurrentEvent', 'mouseup', 'TRACKED_EVENTS', 'lastEventType', 'mouseout', 'mousedown', 'keydown', 'type', '7rrLmNM', 'wheel', '269196QUDxHz', 'addEventListener', 'documentElement', 'auxclick', '2232rAZnLY', 'mouseover', '66053yzAERz', 'length', 'LAST_EVENT_TIMEOUT_MS', '809875DlRVjy'];
                _0x1bdb = function() {
                    return _0x1bb68c;
                };
                return _0x1bdb();
            }
            class UserInteractionTracker {
                constructor() {
                    const _0x1305ef = _0x2fa2;
                    this['TRACKED_EVENTS'] = [_0x1305ef(0x17f), 'click', _0x1305ef(0x168), _0x1305ef(0x177), 'mouseenter', 'mouseleave', _0x1305ef(0x16c), _0x1305ef(0x181), _0x1305ef(0x176), _0x1305ef(0x173), _0x1305ef(0x17b), _0x1305ef(0x178), _0x1305ef(0x171), 'keyup'], this[_0x1305ef(0x163)] = 0xa, this[_0x1305ef(0x175)] = '', this[_0x1305ef(0x16e)] = '';
                    const _0x3f2f39 = _0x1df51d => {
                        const _0x5a853f = _0x1305ef;
                        this[_0x5a853f(0x175)] = _0x1df51d[_0x5a853f(0x179)], this[_0x5a853f(0x16e)] = Date['now']();
                    };
                    for (let _0x1a4f68 = 0x0; _0x1a4f68 < this[_0x1305ef(0x174)][_0x1305ef(0x162)]; _0x1a4f68 += 0x1) {
                        document[_0x1305ef(0x17e)][_0x1305ef(0x17d)](this[_0x1305ef(0x174)][_0x1a4f68], _0x3f2f39, !![]);
                    }
                }[_0x261e10(0x172)]() {
                    const _0xc7aab6 = _0x261e10;
                    if (!this['lastEventType'] || !this[_0xc7aab6(0x16e)]) return null;
                    const _0x50536b = Date[_0xc7aab6(0x16f)]() - this[_0xc7aab6(0x16e)] > this[_0xc7aab6(0x163)];
                    if (!_0x50536b) return this[_0xc7aab6(0x175)];
                    return null;
                }
            }
            const _0x3b5ed6 = _0x42a1;
            (function(_0x521cf0, _0x37bbb6) {
                const _0x15c83f = _0x42a1,
                    _0x55f947 = _0x521cf0();
                while (!![]) {
                    try {
                        const _0x92bff8 = parseInt(_0x15c83f(0x1f5)) / 0x1 + -parseInt(_0x15c83f(0x1f6)) / 0x2 * (-parseInt(_0x15c83f(0x1b2)) / 0x3) + parseInt(_0x15c83f(0x1af)) / 0x4 + -parseInt(_0x15c83f(0x1a5)) / 0x5 + -parseInt(_0x15c83f(0x1b4)) / 0x6 * (-parseInt(_0x15c83f(0x1ac)) / 0x7) + -parseInt(_0x15c83f(0x1a3)) / 0x8 + -parseInt(_0x15c83f(0x1bc)) / 0x9 * (-parseInt(_0x15c83f(0x1aa)) / 0xa);
                        if (_0x92bff8 === _0x37bbb6) break;
                        else _0x55f947['push'](_0x55f947['shift']());
                    } catch (_0x5571a8) {
                        _0x55f947['push'](_0x55f947['shift']());
                    }
                }
            }(_0x263b, 0x923c7));

            function isBrowserSupported() {
                const _0x2cc98f = _0x42a1;
                return !(navigator['userAgent'] && navigator[_0x2cc98f(0x1cc)][_0x2cc98f(0x1ed)](/(MSIE|Trident)/));
            }

            function shouldRunExtra(_0x3f27cf) {
                const _0x2fcb69 = _0x42a1;
                if (!isBrowserSupported()) return;
                const {
                    hostname: _0x1ad946
                } = _0x51ea98['location'], _0x5f5c0a = _0x3f27cf[_0x2fcb69(0x1ca)](_0x1ad946[_0x2fcb69(0x1e1)](/^www\./, ''));
                typeof _0x5f5c0a === 'function' && _0x5f5c0a();
            }
            const isMobile = () => _0x51ea98['navigator'][_0x3b5ed6(0x1cc)][_0x3b5ed6(0x1ed)](_0x3b5ed6(0x1c1));

            function _0x42a1(_0x1ae069, _0x1f047e) {
                const _0x263bc9 = _0x263b();
                return _0x42a1 = function(_0x42a18e, _0x4f96ef) {
                    _0x42a18e = _0x42a18e - 0x199;
                    let _0xd72538 = _0x263bc9[_0x42a18e];
                    return _0xd72538;
                }, _0x42a1(_0x1ae069, _0x1f047e);
            }
            let tracker;

            function getTracker() {
                return !tracker && (tracker = new UserInteractionTracker()), tracker;
            }

            function observeDomChanges(_0x3a8f22) {
                const _0x44897c = _0x3b5ed6,
                    _0x33d475 = new _0x51ea98[(_0x44897c(0x1cf))](_0x3b3371 => {
                        const _0x524ea9 = _0x44897c;
                        if (getTracker()[_0x524ea9(0x1f4)]()) return;
                        _0x3a8f22(_0x3b3371);
                    }),
                    _0x50a919 = {};
                _0x50a919[_0x44897c(0x1e7)] = !![], _0x50a919['subtree'] = !![], _0x33d475[_0x44897c(0x1db)](_0x51ea98[_0x44897c(0x1e4)], _0x50a919);
            }

            function removeScripts(_0x2907c8) {
                observeDomChanges(_0x2f0141 => {
                    _0x2f0141['forEach'](_0x541bb6 => {
                        const _0x724ea4 = _0x42a1;
                        for (let _0x118c4a = 0x0; _0x118c4a < _0x541bb6[_0x724ea4(0x1ba)][_0x724ea4(0x1d3)]; _0x118c4a += 0x1) {
                            const _0x3e1e07 = _0x541bb6[_0x724ea4(0x1ba)][_0x118c4a],
                                {
                                    innerText: _0x44b9f5,
                                    localName: _0x55afbc
                                } = _0x3e1e07;
                            if (_0x55afbc === _0x724ea4(0x1cd)) {
                                const _0x3cdee0 = _0x2907c8 instanceof RegExp && _0x44b9f5[_0x724ea4(0x1ed)](_0x2907c8) || typeof _0x2907c8 === _0x724ea4(0x1a2) && _0x44b9f5[_0x724ea4(0x1d2)](_0x2907c8) || Array[_0x724ea4(0x19e)](_0x2907c8) && _0x2907c8[_0x724ea4(0x1ef)](_0x515def => _0x44b9f5[_0x724ea4(0x1d2)](_0x515def));
                                _0x3cdee0 && _0x3e1e07[_0x724ea4(0x1ec)]();
                            }
                        }
                    });
                });
            }

            function safeGetStylesheetRules(_0x1a147e) {
                const _0x3dad75 = _0x3b5ed6;
                try {
                    if (_0x1a147e[_0x3dad75(0x1c2)] === null) return [];
                    return _0x1a147e['rules'];
                } catch (_0x2e3557) {
                    return [];
                }
            }

            function removeNode(_0x288c92) {
                const _0x2d6a10 = _0x3b5ed6;
                return _0x288c92 && _0x288c92[_0x2d6a10(0x1b1)] && _0x288c92[_0x2d6a10(0x1b1)]['removeChild'](_0x288c92);
            }
            const hideViaDisplayProperty = _0x38723b => {
                    const _0x34641a = _0x3b5ed6;
                    _0x38723b && _0x38723b[_0x34641a(0x1e9)][_0x34641a(0x1b5)](_0x34641a(0x1d9), 'none', _0x34641a(0x19d));
                },
                hideViaPositionProperty = _0x166ada => {
                    const _0xcd0af6 = _0x3b5ed6;
                    _0x166ada && (_0x166ada['style'][_0xcd0af6(0x1d0)] = _0xcd0af6(0x1a4), _0x166ada[_0xcd0af6(0x1e9)][_0xcd0af6(0x1d4)] = _0xcd0af6(0x19c));
                },
                hideViaOpacity = _0x314b9b => {
                    const _0x4049ef = _0x3b5ed6;
                    _0x314b9b && (_0x314b9b[_0x4049ef(0x1e9)][_0x4049ef(0x1b5)]('position', 'absolute', 'important'), _0x314b9b[_0x4049ef(0x1e9)][_0x4049ef(0x1b5)]('opacity', '0', _0x4049ef(0x19d)));
                },
                iterateCSSRules = _0x536551 => {
                    const _0x439b38 = _0x3b5ed6;
                    [..._0x51ea98[_0x439b38(0x1e4)][_0x439b38(0x1c4)]][_0x439b38(0x1a7)](_0x28af66 => {
                        const _0x1e1cba = _0x439b38;
                        [...safeGetStylesheetRules(_0x28af66)][_0x1e1cba(0x1a7)](_0x3eebb7 => {
                            _0x536551(_0x3eebb7);
                        });
                    });
                },
                hideRulesByCondition = (_0xff1574, _0x288441) => {
                    iterateCSSRules(_0x1f1557 => {
                        const _0x529cb7 = _0x42a1;
                        _0x1f1557[_0x529cb7(0x1f2)] && _0x288441(_0x1f1557[_0x529cb7(0x1f2)], _0xff1574) && hideViaDisplayProperty(_0x1f1557);
                    });
                },
                stringPatternCondition = (_0x289e02, _0x25893e) => _0x289e02[_0x3b5ed6(0x1d2)](_0x25893e),
                regexpPatternCondition = (_0x289691, _0x5e903d) => _0x5e903d[_0x3b5ed6(0x1b3)](_0x289691),
                hideCssRulesBySelectorText = _0x1ec776 => {
                    const _0xf8c62 = _0x3b5ed6;
                    if (_0x1ec776 && _0x1ec776['constructor'] === String) hideRulesByCondition(_0x1ec776, stringPatternCondition);
                    else {
                        if (_0x1ec776 && _0x1ec776[_0xf8c62(0x1e5)] === RegExp) hideRulesByCondition(_0x1ec776, regexpPatternCondition);
                        else throw new Error(_0xf8c62(0x1b6));
                    }
                },
                injectHidingRuleForClassname = ((() => {
                    const _0x1bc5e9 = [];
                    return _0x2f08a3 => {
                        const _0x4e375c = _0x42a1,
                            _0x2f8926 = '.' + _0x2f08a3 + '\x20{\x20display:\x20none\x20!important\x20}';
                        if (_0x1bc5e9[_0x4e375c(0x1ef)](_0x145798 => _0x145798 === _0x2f8926)) return;
                        const {
                            styleSheets: _0x69a78c
                        } = _0x51ea98[_0x4e375c(0x1e4)];
                        let _0x39be0e = _0x69a78c[_0x69a78c[_0x4e375c(0x1d3)] - 0x1];
                        if (!_0x39be0e) {
                            const _0x471473 = _0x51ea98['document'][_0x4e375c(0x1bb)](_0x4e375c(0x1e9));
                            _0x51ea98[_0x4e375c(0x1e4)]['head'][_0x4e375c(0x1a9)](_0x471473), _0x39be0e = _0x471473[_0x4e375c(0x1f0)];
                        }
                        _0x39be0e[_0x4e375c(0x1cb)](_0x2f8926, _0x39be0e[_0x4e375c(0x1bf)][_0x4e375c(0x1d3)]), _0x1bc5e9['push'](_0x2f8926);
                    };
                })()),
                replaceScripts = (_0x5ccc24, _0x53d3f4) => {
                    observeDomChanges(_0x26c1e6 => {
                        _0x26c1e6['forEach'](_0x3345df => {
                            const _0x2c71b8 = _0x42a1;
                            for (let _0x1fc7c0 = 0x0; _0x1fc7c0 < _0x3345df['addedNodes']['length']; _0x1fc7c0 += 0x1) {
                                const _0x30d8d9 = _0x3345df[_0x2c71b8(0x1ba)][_0x1fc7c0];
                                _0x30d8d9['localName'] === 'script' && _0x30d8d9[_0x2c71b8(0x1d7)][_0x2c71b8(0x1ed)](_0x5ccc24) && (_0x30d8d9[_0x2c71b8(0x199)] = _0x30d8d9[_0x2c71b8(0x199)][_0x2c71b8(0x1e1)](_0x5ccc24, _0x53d3f4));
                            }
                        });
                    });
                },
                preventXHR = _0x3b43ad => {
                    const _0x197901 = _0x3b5ed6,
                        _0x204c11 = window[_0x197901(0x19b)]['prototype'][_0x197901(0x1e0)];
                    window[_0x197901(0x19b)][_0x197901(0x1d6)][_0x197901(0x1e0)] = function() {
                        const _0x1d6b6a = _0x197901;

                        function _0x5f1f22(_0x3f3f59) {
                            const _0x483010 = _0x42a1,
                                _0x479c83 = _0x3f3f59[_0x483010(0x1a6)];
                            _0x3b43ad(_0x479c83) && (_0x479c83['abort'](), _0x479c83[_0x483010(0x1ea)](_0x483010(0x19f), _0x5f1f22)), _0x479c83[_0x483010(0x1a0)] === 0x4 && _0x479c83[_0x483010(0x1ea)](_0x483010(0x19f), _0x5f1f22);
                        }
                        return this['addEventListener'](_0x1d6b6a(0x19f), _0x5f1f22), _0x204c11[_0x1d6b6a(0x1e2)](this, arguments);
                    }, window[_0x197901(0x19b)][_0x197901(0x1d6)][_0x197901(0x1e0)][_0x197901(0x1e6)] = _0x204c11[_0x197901(0x1e6)][_0x197901(0x1d5)](_0x204c11);
                },
                elementContains = (_0x412f1e, _0x3ccefe) => {
                    const _0x12d813 = _0x3b5ed6;
                    if (!_0x412f1e || !_0x412f1e[_0x12d813(0x1b8)]) return ![];
                    return _0x412f1e[_0x12d813(0x1b8)]['match'](_0x3ccefe);
                },
                getParent = (_0x292b57, _0x171f33) => {
                    if (!_0x292b57) return null;
                    if (_0x171f33 <= 0x0) return _0x292b57;
                    return getParent(_0x292b57['parentNode'], _0x171f33 - 0x1);
                },
                blockProperty = _0x5832dd => {
                    const _0x8ffce7 = _0x3b5ed6;
                    if (!_0x5832dd) return;
                    if (window[_0x5832dd] && Object[_0x8ffce7(0x1ee)](_0x51ea98[_0x8ffce7(0x1d8)], _0x5832dd)[_0x8ffce7(0x1d1)] || !window[_0x5832dd]) {
                        const _0x2554f1 = {};
                        _0x2554f1['configurable'] = ![], _0x51ea98[_0x8ffce7(0x1a8)](_0x51ea98['window'], _0x5832dd, _0x2554f1);
                    }
                };

            function observeShadowRoots(_0x2aca65) {
                const _0x22b60b = _0x3b5ed6,
                    _0x3769e6 = (_0x5b78c, _0x1286c6) => {
                        const _0x356a37 = _0x42a1,
                            _0x381eae = Object['getOwnPropertyDescriptor'](_0x5b78c, _0x1286c6);
                        if (_0x381eae && _0x381eae['get'] && _0x381eae[_0x356a37(0x1d1)]) return _0x381eae;
                        return null;
                    },
                    _0x37cf87 = new MutationObserver(_0x2aca65),
                    _0x23d198 = {};
                _0x23d198[_0x22b60b(0x1b7)] = !![], _0x23d198['childList'] = !![];
                const _0x4bbb0e = _0x23d198,
                    _0x204bfe = _0x169e07 => {
                        const _0x2d2a01 = _0x22b60b,
                            _0xf735e = _0x169e07[_0x2d2a01(0x1e3)][_0x2d2a01(0x1d6)][_0x2d2a01(0x1c3)];
                        _0x169e07['Element'][_0x2d2a01(0x1d6)][_0x2d2a01(0x1c3)] = function(_0x106c19) {
                            const _0x7e5ba7 = _0x2d2a01,
                                _0x3a0be6 = _0xf735e[_0x7e5ba7(0x1de)](this, _0x106c19);
                            return _0x37cf87[_0x7e5ba7(0x1db)](_0x3a0be6, _0x4bbb0e), _0x3a0be6;
                        }, _0x169e07['Element'][_0x2d2a01(0x1d6)]['attachShadow'][_0x2d2a01(0x1e6)] = _0xf735e[_0x2d2a01(0x1e6)][_0x2d2a01(0x1d5)](_0xf735e);
                    },
                    _0x4d42fc = _0x3edf67 => {
                        const _0x4f9e95 = _0x22b60b,
                            _0x27e5c0 = _0x3769e6(_0x3edf67[_0x4f9e95(0x1c0)]['prototype'], 'contentWindow');
                        if (!_0x27e5c0) return;
                        const _0x3be383 = _0x27e5c0['get'];
                        _0x27e5c0[_0x4f9e95(0x1b9)] = function() {
                            const _0x3074c5 = _0x3be383['call'](this);
                            try {
                                return _0x204bfe(_0x3074c5), _0x3074c5;
                            } catch (_0x5516c8) {
                                return _0x3074c5;
                            }
                        }, Object[_0x4f9e95(0x1a8)](_0x3edf67[_0x4f9e95(0x1c0)][_0x4f9e95(0x1d6)], 'contentWindow', _0x27e5c0);
                    };
                _0x204bfe(_0x51ea98[_0x22b60b(0x1d8)]), _0x4d42fc(_0x51ea98['window']);
            }

            function removeFromShadowRoots(_0x25da04) {
                const _0x1d9304 = _0x3b5ed6;
                let _0x433f5d = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : null,
                    _0x48c5f9 = arguments[_0x1d9304(0x1d3)] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : removeNode,
                    _0x48c406 = [];
                const _0x2a98fe = () => {
                        const _0x188f03 = _0x1d9304;
                        if (_0x48c406[_0x188f03(0x1d3)] === 0x0) return;
                        _0x48c406['forEach'](_0x335778 => {
                            _0x48c5f9(_0x335778);
                        }), _0x48c406 = [];
                    },
                    _0x4ce1c0 = _0x5e871a => {
                        if (typeof _0x433f5d === 'function') return _0x433f5d(_0x5e871a);
                        return _0x5e871a;
                    };
                observeShadowRoots(_0x49a8b3 => {
                    const _0xada16d = _0x1d9304;
                    [..._0x49a8b3][_0xada16d(0x1a7)](_0xed33d1 => {
                        const _0x1a826c = _0xada16d;
                        if (_0xed33d1['addedNodes'][_0x1a826c(0x1d3)] === 0x0) return;
                        const _0x56cf54 = _0xed33d1['target'],
                            _0x4da662 = _0x56cf54[_0x1a826c(0x1c8)](_0x25da04),
                            _0x37d7a7 = [..._0x4da662]['filter'](_0x4ce1c0);
                        _0x48c406[_0x1a826c(0x1dc)](..._0x37d7a7), _0x2a98fe();
                    });
                });
            }
            const hideViaOverlay = function hideViaOverlay(_0x59a9b8) {
                    const _0x38b7e6 = _0x3b5ed6;
                    let _0x29a497 = arguments[_0x38b7e6(0x1d3)] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : _0x38b7e6(0x1b0);
                    if (!_0x59a9b8) return;
                    const _0x2f072a = _0x38b7e6(0x1a1) + _0x29a497 + _0x38b7e6(0x1ae);
                    if (_0x59a9b8['querySelector'](_0x38b7e6(0x1c7))) return;
                    const _0x222bd5 = _0x51ea98[_0x38b7e6(0x1e4)][_0x38b7e6(0x1bb)](_0x38b7e6(0x1da));
                    _0x222bd5[_0x38b7e6(0x1e8)]('id', _0x38b7e6(0x1df)), _0x222bd5['style'][_0x38b7e6(0x1ad)] = _0x2f072a, _0x59a9b8[_0x38b7e6(0x19a)](_0x222bd5);
                },
                exposeContent = function exposeContent(_0x1e1d96, _0x3cb2d6) {
                    const _0x3995eb = _0x3b5ed6;
                    let _0x3c55f2 = arguments[_0x3995eb(0x1d3)] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : _0x3995eb(0x1b0);
                    if (!_0x1e1d96) return;
                    hideViaOverlay(_0x1e1d96, _0x3c55f2), [..._0x3cb2d6][_0x3995eb(0x1a7)](_0x30ec28 => {
                        const _0x416443 = _0x3995eb;
                        _0x30ec28['style']['position'] = _0x416443(0x1c9), _0x30ec28[_0x416443(0x1e9)]['zIndex'] = _0x416443(0x1c5);
                    });
                },
                hideYaDirectAds = () => {
                    const _0x4576c4 = _0x3b5ed6,
                        _0xbfac3f = () => {
                            const _0x41044e = _0x42a1,
                                _0x4d7b72 = [];
                            if (!_0x51ea98[_0x41044e(0x1d8)]['Ya']) return _0x4d7b72;
                            return Object[_0x41044e(0x1bd)](_0x51ea98[_0x41044e(0x1d8)]['Ya'])['forEach'](_0x199f6e => {
                                const _0x581bbe = _0x41044e,
                                    _0x1e4148 = _0x51ea98[_0x581bbe(0x1d8)]['Ya'][_0x199f6e];
                                if (!_0x1e4148 || !_0x1e4148['adUsageStorageVars'] || !_0x1e4148['adUsageStorageVars'][_0x581bbe(0x1be)] || !_0x1e4148[_0x581bbe(0x1ab)]['ads']['list']) return;
                                _0x1e4148[_0x581bbe(0x1ab)]['ads']['list'][_0x581bbe(0x1a7)](_0x58575c => {
                                    const _0x1212d0 = _0x581bbe;
                                    _0x58575c[_0x1212d0(0x1c6)] && !_0x4d7b72[_0x1212d0(0x1d2)](_0x58575c[_0x1212d0(0x1c6)]) && _0x4d7b72[_0x1212d0(0x1dc)](_0x58575c[_0x1212d0(0x1c6)]);
                                });
                            }), _0x4d7b72;
                        },
                        _0x3b3d39 = _0xbfac3f();
                    if (!_0x3b3d39 || _0x3b3d39[_0x4576c4(0x1d3)] === 0x0) return;
                    const _0x4a8c4e = [..._0x51ea98['document'][_0x4576c4(0x1c4)]][_0x4576c4(0x1dd)](_0x26cc0f => {
                        const _0x447308 = _0x4576c4;
                        if (safeGetStylesheetRules(_0x26cc0f)[_0x447308(0x1d3)] > 0x0 && !_0x26cc0f[_0x447308(0x1f1)]) return !![];
                        return ![];
                    });
                    if (!_0x4a8c4e) return;
                    _0x3b3d39[_0x4576c4(0x1a7)](_0x61a9be => {
                        const _0x5b0929 = _0x4576c4,
                            _0x479b11 = _0x51ea98[_0x5b0929(0x1e4)][_0x5b0929(0x1ce)](_0x61a9be);
                        _0x479b11 && (isMobile() ? hideViaPositionProperty(_0x479b11) : removeNode(_0x479b11));
                    });
                };

            function _0x263b() {
                const _0x417f25 = ['selectorText', 'random', 'getCurrentEvent', '643103brhrHs', '66pnzEOF', 'innerHTML', 'append', 'XMLHttpRequest', '-99999px', 'important', 'isArray', 'readystatechange', 'readyState', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x20100;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20', 'string', '6074888ZHZMNu', 'absolute', '4959930UbgBFK', 'currentTarget', 'forEach', 'defineProperty', 'appendChild', '200bgjYsS', 'adUsageStorageVars', '3284617mfzHVa', 'cssText', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20height:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x0a\x20\x20\x20\x20', '1965788RTaCLB', 'white', 'parentNode', '4299jTaIoh', 'test', '6Rwzfdf', 'setProperty', 'The\x20arguments\x20must\x20be\x20type\x20of\x20String\x20or\x20RegExp', 'subtree', 'textContent', 'get', 'addedNodes', 'createElement', '314667uueOzu', 'keys', 'ads', 'cssRules', 'HTMLIFrameElement', 'Mobile', 'rules', 'attachShadow', 'styleSheets', '999', 'renderTo', '#CUSTOM_OVERLAY', 'querySelectorAll', 'relative', 'getPageScript', 'insertRule', 'userAgent', 'script', 'getElementById', 'MutationObserver', 'position', 'configurable', 'includes', 'length', 'top', 'bind', 'prototype', 'innerText', 'window', 'display', 'div', 'observe', 'push', 'find', 'call', 'CUSTOM_OVERLAY', 'open', 'replace', 'apply', 'Element', 'document', 'constructor', 'toString', 'childList', 'setAttribute', 'style', 'removeEventListener', 'substring', 'remove', 'match', 'getOwnPropertyDescriptor', 'some', 'sheet', 'disabled'];
                _0x263b = function() {
                    return _0x417f25;
                };
                return _0x263b();
            }

            function _0x2731(_0xb6b6e0, _0x57fbb3) {
                const _0x2b2b4c = _0x2b2b();
                return _0x2731 = function(_0x273105, _0x2c756a) {
                    _0x273105 = _0x273105 - 0x1d9;
                    let _0x33e146 = _0x2b2b4c[_0x273105];
                    return _0x33e146;
                }, _0x2731(_0xb6b6e0, _0x57fbb3);
            }
            const _0x5bdf99 = _0x2731;
            (function(_0x44d7d9, _0x333e66) {
                const _0x486508 = _0x2731,
                    _0x521824 = _0x44d7d9();
                while (!![]) {
                    try {
                        const _0x376d15 = parseInt(_0x486508(0x1f0)) / 0x1 * (parseInt(_0x486508(0x1ee)) / 0x2) + -parseInt(_0x486508(0x1eb)) / 0x3 + parseInt(_0x486508(0x1de)) / 0x4 + -parseInt(_0x486508(0x1e8)) / 0x5 * (parseInt(_0x486508(0x1e7)) / 0x6) + parseInt(_0x486508(0x1f3)) / 0x7 + -parseInt(_0x486508(0x1e9)) / 0x8 + -parseInt(_0x486508(0x1ed)) / 0x9;
                        if (_0x376d15 === _0x333e66) break;
                        else _0x521824['push'](_0x521824['shift']());
                    } catch (_0x5e1b9e) {
                        _0x521824['push'](_0x521824['shift']());
                    }
                }
            }(_0x2b2b, 0xe4746));

            function _0x2b2b() {
                const _0x9930f0 = ['facebook.com', '3540268oNiYZk', 'setEntries', 'outerHTML', 'props', 'div[data-testid=\x22marketplace_home_feed\x22]\x20>\x20div\x20>\x20div\x20>\x20div[class]\x20>\x20div[class]\x20>\x20div\x20>\x20div[class]:not([style*=\x22display:none\x22])', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-pagelet^=\x22FeedUnit\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[role=\x22feed\x22]\x20>\x20div,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[role=\x22feed\x22]\x20>\x20span,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#ssrb_feed_start\x20+\x20div\x20>\x20div[class],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#ssrb_feed_start\x20+\x20div\x20span\x20>\x20h3\x20~\x20div[class],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#ssrb_feed_start\x20+\x20div\x20h3\x20~\x20div\x20>\x20div[class]\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'category', 'display:none!important;', 'includes', '12eCmaKN', '502225sYZUZN', '583296SCyJxb', 'style', '1433580MEnApa', 'querySelectorAll', '14588685gHeVko', '1252KyLuES', 'forEach', '2261jhpqjE', 'facebookcorewwwi.onion', 'keys', '7055468AaULYt', 'length', 'm.facebook.com', '/ads/about/', 'some', 'children'];
                _0x2b2b = function() {
                    return _0x9930f0;
                };
                return _0x2b2b();
            }

            function pageCallback$X() {
                const _0x22b45a = () => {
                        const _0x469367 = _0x2731,
                            _0x2f6789 = _0x51ea98['querySelectorAll'](_0x469367(0x1e3));
                        if (_0x2f6789['length'] <= 0x0) return;
                        _0x2f6789[_0x469367(0x1ef)](_0x2181b8 => {
                            const _0x355023 = _0x469367;
                            if (_0x2181b8['style']['display'] === 'none') return;
                            let _0x113b72;
                            Object[_0x355023(0x1f2)](_0x2181b8)[_0x355023(0x1db)](_0x3b1de4 => {
                                const _0x3ff312 = _0x355023;
                                var _0x448d28, _0x1e1d50, _0x1c4f0c, _0x106450, _0x25eecb, _0x45faec, _0x34b531, _0x135d00, _0x1c8070, _0x4f54b1, _0x11109b;
                                if (!_0x2181b8[_0x3b1de4]) return ![];
                                return _0x113b72 = ((_0x448d28 = _0x2181b8[_0x3b1de4]['children']) === null || _0x448d28 === void 0x0 ? void 0x0 : (_0x1e1d50 = _0x448d28[_0x3ff312(0x1e1)]) === null || _0x1e1d50 === void 0x0 ? void 0x0 : _0x1e1d50[_0x3ff312(0x1e4)]) || ((_0x1c4f0c = _0x2181b8[_0x3b1de4][_0x3ff312(0x1dc)]) === null || _0x1c4f0c === void 0x0 ? void 0x0 : (_0x106450 = _0x1c4f0c[_0x3ff312(0x1e1)]) === null || _0x106450 === void 0x0 ? void 0x0 : (_0x25eecb = _0x106450['children']) === null || _0x25eecb === void 0x0 ? void 0x0 : (_0x45faec = _0x25eecb['props']) === null || _0x45faec === void 0x0 ? void 0x0 : _0x45faec['category']) || ((_0x34b531 = _0x2181b8[_0x3b1de4][_0x3ff312(0x1dc)]) === null || _0x34b531 === void 0x0 ? void 0x0 : (_0x135d00 = _0x34b531[_0x3ff312(0x1e1)]) === null || _0x135d00 === void 0x0 ? void 0x0 : (_0x1c8070 = _0x135d00[_0x3ff312(0x1dc)]) === null || _0x1c8070 === void 0x0 ? void 0x0 : (_0x4f54b1 = _0x1c8070[_0x3ff312(0x1e1)]) === null || _0x4f54b1 === void 0x0 ? void 0x0 : (_0x11109b = _0x4f54b1['feedEdge']) === null || _0x11109b === void 0x0 ? void 0x0 : _0x11109b[_0x3ff312(0x1e4)]), !!_0x113b72;
                            });
                            if (!_0x113b72) return;
                            const _0x2be9dd = _0x113b72[_0x355023(0x1e6)]('SPONSORED');
                            _0x2be9dd && (_0x2181b8[_0x355023(0x1ea)]['display'] = 'none');
                        });
                    },
                    _0x58c5dd = () => {
                        const _0x23d0b0 = _0x2731,
                            _0x50a480 = _0x51ea98[_0x23d0b0(0x1ec)](_0x23d0b0(0x1e2));
                        if (_0x50a480[_0x23d0b0(0x1f4)] <= 0x0) return;
                        _0x50a480[_0x23d0b0(0x1ef)](_0x565162 => {
                            const _0x44718f = _0x23d0b0,
                                _0x57f933 = _0x565162[_0x44718f(0x1e0)];
                            if (!_0x57f933) return;
                            _0x57f933['includes'](_0x44718f(0x1da)) && (_0x565162[_0x44718f(0x1ea)] = _0x44718f(0x1e5));
                        });
                    };
                observeDomChanges(() => {
                    _0x22b45a(), _0x58c5dd();
                });
            }
            commonHosts[_0x5bdf99(0x1df)]([_0x5bdf99(0x1f1), _0x5bdf99(0x1dd), _0x5bdf99(0x1d9)], pageCallback$X);
            const _0x26ea45 = _0xc636;
            (function(_0x233c7f, _0x1b8c63) {
                const _0x14fa79 = _0xc636,
                    _0x5421cc = _0x233c7f();
                while (!![]) {
                    try {
                        const _0x4b5f60 = -parseInt(_0x14fa79(0x1d2)) / 0x1 + -parseInt(_0x14fa79(0x1e0)) / 0x2 + parseInt(_0x14fa79(0x1f6)) / 0x3 + parseInt(_0x14fa79(0x1da)) / 0x4 * (-parseInt(_0x14fa79(0x1d3)) / 0x5) + -parseInt(_0x14fa79(0x1f0)) / 0x6 + parseInt(_0x14fa79(0x1eb)) / 0x7 + -parseInt(_0x14fa79(0x1dc)) / 0x8 * (-parseInt(_0x14fa79(0x1dd)) / 0x9);
                        if (_0x4b5f60 === _0x1b8c63) break;
                        else _0x5421cc['push'](_0x5421cc['shift']());
                    } catch (_0x188129) {
                        _0x5421cc['push'](_0x5421cc['shift']());
                    }
                }
            }(_0x5dbf, 0x32faa));

            function pageCallback$W() {
                const _0x23ea2d = _0xc636;
                if (_0x51ea98['location']['pathname'][_0x23ea2d(0x1d1)](_0x23ea2d(0x1b6))) return;
                const _0x356971 = _0x197a93 => _0x197a93 && _0x197a93['parentNode']['removeChild'](_0x197a93),
                    _0xaa2488 = () => _0x51ea98[_0x23ea2d(0x1bf)][_0x23ea2d(0x1cc)] || _0x51ea98[_0x23ea2d(0x1ec)][_0x23ea2d(0x1e7)][_0x23ea2d(0x1d4)] || 0x0,
                    _0x27260b = () => _0x51ea98[_0x23ea2d(0x1bf)]['innerHeight'] || _0x51ea98['document'][_0x23ea2d(0x1e7)][_0x23ea2d(0x1d7)] || 0x0,
                    _0x54e00e = () => {
                        const _0x280b29 = _0x23ea2d;
                        let _0x587035 = _0x51ea98['querySelector'](_0x280b29(0x1b9));
                        if (!_0x587035) return;
                        _0x587035 = _0x587035[_0x280b29(0x1d6)]['parentNode'];
                        for (let _0x388f6d = 0x0; _0x388f6d < _0x587035['parentNode'][_0x280b29(0x1b7)][_0x280b29(0x1f3)]; _0x388f6d += 0x1) {
                            const _0x586e15 = _0x587035[_0x280b29(0x1d6)]['children'][_0x388f6d];
                            if (_0x586e15 !== _0x587035) hideViaDisplayProperty(_0x586e15);
                            else return;
                        }
                    },
                    _0x7df3b6 = _0x285d49 => {
                        const _0x360af2 = _0x23ea2d,
                            _0x56252a = _0x285d49 === null || _0x285d49 === void 0x0 ? void 0x0 : _0x285d49[_0x360af2(0x1b4)];
                        return (_0x56252a === null || _0x56252a === void 0x0 ? void 0x0 : _0x56252a[_0x360af2(0x1de)]) === 'H2' && /[AmopPrАорР]{8}/ ['test'](_0x56252a === null || _0x56252a === void 0x0 ? void 0x0 : _0x56252a[_0x360af2(0x1e1)]);
                    },
                    _0x1e39a4 = () => {
                        const _0x5390e4 = _0x23ea2d;
                        var _0x204140, _0x90153f;
                        const _0x2745d8 = _0x51ea98['querySelectorAll'](_0x5390e4(0x1e5));
                        [..._0x2745d8][_0x5390e4(0x1bd)](_0x5d1d5a => {
                            const _0x786ce9 = _0x5390e4;
                            ((_0x5d1d5a === null || _0x5d1d5a === void 0x0 ? void 0x0 : _0x5d1d5a[_0x786ce9(0x1b4)]) === null || _0x5d1d5a[_0x786ce9(0x1b2)] > 0x3e7 || _0x7df3b6(_0x5d1d5a)) && hideViaPositionProperty(_0x5d1d5a);
                        });
                        const _0x2a4674 = _0x51ea98[_0x5390e4(0x1fb)]('div[id^=\x22devdbc_articles\x22]'),
                            _0x1c77d4 = _0x2a4674 === null || _0x2a4674 === void 0x0 ? void 0x0 : (_0x204140 = _0x2a4674[_0x5390e4(0x1e8)]) === null || _0x204140 === void 0x0 ? void 0x0 : _0x204140[_0x5390e4(0x1e8)];
                        !/DIV|SPAN|SCRIPT/ [_0x5390e4(0x1f9)](_0x1c77d4 === null || _0x1c77d4 === void 0x0 ? void 0x0 : (_0x90153f = _0x1c77d4[_0x5390e4(0x1b4)]) === null || _0x90153f === void 0x0 ? void 0x0 : _0x90153f[_0x5390e4(0x1de)]) && hideViaPositionProperty(_0x1c77d4);
                    },
                    _0x4249ea = () => {
                        const _0x1d85d1 = _0x23ea2d,
                            _0x42a253 = _0x51ea98[_0x1d85d1(0x1c1)](_0x1d85d1(0x1c4));
                        _0x42a253 && [..._0x42a253][_0x1d85d1(0x1bd)](_0x274279 => {
                            const _0x31e43d = _0x1d85d1;
                            ((_0x274279 === null || _0x274279 === void 0x0 ? void 0x0 : _0x274279['textContent'][_0x31e43d(0x1c5)](_0x31e43d(0x1ce))) > 0x0 || (_0x274279 === null || _0x274279 === void 0x0 ? void 0x0 : _0x274279[_0x31e43d(0x1d5)][_0x31e43d(0x1c5)](_0x31e43d(0x1f2))) > 0x0) && hideViaPositionProperty(_0x274279);
                        });
                    },
                    _0x24027d = () => {
                        const _0x1da548 = _0x23ea2d,
                            _0xfc18be = _0x51ea98[_0x1da548(0x1c1)](_0x1da548(0x1f1));
                        if (_0xfc18be['length'] === 0x0) return;
                        [..._0xfc18be][_0x1da548(0x1bd)](_0x2da1a4 => {
                            const _0x14a47a = _0x1da548;
                            _0x51ea98[_0x14a47a(0x1ed)](_0x2da1a4, _0x14a47a(0x1c6)) === 'result.adv' && hideViaDisplayProperty(_0x2da1a4);
                        });
                    },
                    _0x429f3a = () => {
                        const _0x4fa046 = _0x23ea2d;
                        if (navigator[_0x4fa046(0x1df)][_0x4fa046(0x1e4)](_0x4fa046(0x1ee))) {
                            const _0x15b65b = _0x51ea98[_0x4fa046(0x1fb)](_0x4fa046(0x1bc)),
                                _0x3b68f3 = _0x51ea98[_0x4fa046(0x1fb)](_0x4fa046(0x1b0)),
                                _0x44251c = _0x3b68f3 === null || _0x3b68f3 === void 0x0 ? void 0x0 : _0x3b68f3[_0x4fa046(0x1fe)];
                            _0x15b65b && hideViaDisplayProperty(_0x15b65b[_0x4fa046(0x1d6)]);
                            _0x3b68f3 && _0x44251c && (hideViaDisplayProperty(_0x3b68f3), hideViaDisplayProperty(_0x44251c));
                            const _0x5dda11 = _0x51ea98[_0x4fa046(0x1fb)](_0x4fa046(0x1c7));
                            _0x5dda11 && _0x5dda11['querySelector'](_0x4fa046(0x1ba)) && removeNode(_0x5dda11);
                        }
                    },
                    _0x28eb87 = () => {
                        const _0x3617d7 = _0x23ea2d,
                            _0x3affbf = _0x51ea98['querySelector'](_0x3617d7(0x1e3));
                        if (!_0x3affbf) return;
                        hideViaDisplayProperty(_0x3affbf);
                    },
                    _0x13b126 = () => /iPhone|iPad|iPod|Android/i [_0x23ea2d(0x1f9)](navigator[_0x23ea2d(0x1df)]),
                    _0x145264 = () => {
                        const _0x5e164f = _0x23ea2d;
                        var _0x4f7e2a, _0x441410;
                        const _0x3750dd = _0x51ea98[_0x5e164f(0x1ec)]['querySelector'](_0x5e164f(0x1b1)),
                            _0x1e9ddc = _0x3750dd === null || _0x3750dd === void 0x0 ? void 0x0 : (_0x4f7e2a = _0x3750dd[_0x5e164f(0x1d6)]) === null || _0x4f7e2a === void 0x0 ? void 0x0 : _0x4f7e2a[_0x5e164f(0x1d6)];
                        _0x1e9ddc && (_0x3750dd === null || _0x3750dd === void 0x0 ? void 0x0 : (_0x441410 = _0x3750dd[_0x5e164f(0x1c2)]) === null || _0x441410 === void 0x0 ? void 0x0 : _0x441410[_0x5e164f(0x1db)]) !== _0x5e164f(0x1ca) && !_0x13b126() && (_0x1e9ddc[_0x5e164f(0x1f5)]['marginTop'] = _0x5e164f(0x1b3));
                    },
                    _0xbbb505 = () => {
                        const _0x50dc12 = _0x23ea2d,
                            _0x35011e = _0x51ea98[_0x50dc12(0x1fb)](_0x50dc12(0x1f8));
                        if (!_0x35011e) return;
                        const _0x382d01 = getParent(_0x35011e, 0x3),
                            _0x40e52a = _0x35011e['nextElementSibling'];
                        _0x382d01[_0x50dc12(0x1be)] !== _0x50dc12(0x1cb) && !_0x51ea98['getAttribute'](_0x40e52a, _0x50dc12(0x1fc)) && hideViaDisplayProperty(_0x382d01);
                    },
                    _0x8aad69 = () => {
                        const _0x4d351d = _0x23ea2d,
                            {
                                body: _0x3adf6c
                            } = _0x51ea98[_0x4d351d(0x1ec)];
                        _0x3adf6c[_0x4d351d(0x1fa)](_0x4d351d(0x1f5), (_0x3adf6c['getAttribute'](_0x4d351d(0x1f5)) || '') + ';background-color:#E6E7E9!important');
                        const _0x4cbb78 = _0x4d351d(0x200),
                            _0x440122 = new WeakMap(),
                            _0x42533b = {
                                'get': (_0x430d58, _0x3cb032) => _0x440122[_0x4d351d(0x1c9)](_0x430d58)[_0x3cb032] || _0x430d58[_0x3cb032],
                                'set' (_0x5e53b5, _0x2374d8, _0x3f5e7f) {
                                    const _0x2a0493 = _0x4d351d,
                                        _0x39b7a2 = _0x440122[_0x2a0493(0x1c9)](_0x5e53b5);
                                    return (_0x2374d8 in _0x39b7a2 ? _0x39b7a2 : _0x5e53b5)[_0x2374d8] = _0x3f5e7f, !![];
                                }
                            };
                        [..._0x51ea98[_0x4d351d(0x1c1)]('[id]:not(A),\x20A')][_0x4d351d(0x1bd)](_0xa5849e => {
                            const _0x2f12a2 = _0x4d351d;
                            if (!(_0xa5849e[_0x2f12a2(0x1d8)] > 0.95 * _0xaa2488() && _0xa5849e[_0x2f12a2(0x1b2)] > 0.85 * _0x27260b())) return;
                            if (_0xa5849e['tagName'] !== 'A') {
                                _0x440122[_0x2f12a2(0x1c3)](_0xa5849e['style'], {
                                    'backgroundImage': _0xa5849e[_0x2f12a2(0x1f5)][_0x2f12a2(0x201)],
                                    'backgroundColor': _0xa5849e['style'][_0x2f12a2(0x1c8)]
                                });
                                try {
                                    _0x51ea98[_0x2f12a2(0x1e9)](_0xa5849e, _0x2f12a2(0x1f5), {
                                        'value': new Proxy(_0xa5849e[_0x2f12a2(0x1f5)], _0x42533b),
                                        'enumerable': !![]
                                    });
                                } catch (_0x561810) {}
                                _0x51ea98[_0x2f12a2(0x1fa)](_0xa5849e, _0x2f12a2(0x1f5), (_0x51ea98[_0x2f12a2(0x1ed)](_0xa5849e, _0x2f12a2(0x1f5)) || '') + ';' + _0x4cbb78);
                            }
                            _0xa5849e['tagName'] === 'A' && _0x51ea98[_0x2f12a2(0x1fa)](_0xa5849e, _0x2f12a2(0x1f5), 'display:none!important');
                        }), _0x145264(), _0xbbb505();
                    },
                    _0x3f3176 = () => {
                        const _0xd63718 = _0x23ea2d,
                            _0x44b5c2 = _0x51ea98[_0xd63718(0x1fb)](_0xd63718(0x1e6));
                        _0x44b5c2 && _0x356971(_0x44b5c2[_0xd63718(0x1d6)]['nextSibling']);
                        if (_0x51ea98[_0xd63718(0x1bb)][_0xd63718(0x1d0)][_0xd63718(0x1d1)]('/forum/dl/')) {
                            const _0x3b445d = _0x64fd8 => _0x51ea98['setAttribute'](_0x64fd8, _0xd63718(0x1f5), (_0x51ea98[_0xd63718(0x1ed)](_0x64fd8, _0xd63718(0x1f5)) || '') + _0xd63718(0x1e2));
                            _0x3b445d(_0x51ea98[_0xd63718(0x1ec)][_0xd63718(0x1e7)]), [..._0x51ea98[_0xd63718(0x1c1)](_0xd63718(0x1ef))][_0xd63718(0x1bd)](_0x196973 => {
                                const _0xee054d = _0xd63718;
                                !_0x196973[_0xee054d(0x1fb)](_0xee054d(0x1f4)) && !_0x196973[_0xee054d(0x1f7)][_0xee054d(0x1ea)](_0xee054d(0x1b8)) ? _0x356971(_0x196973) : _0x3b445d(_0x196973);
                            });
                        }
                    },
                    _0x5f1747 = () => {
                        const _0x2f3cc7 = _0x23ea2d,
                            _0x1aaa9b = _0x51ea98[_0x2f3cc7(0x1c1)](_0x2f3cc7(0x1b5));
                        [..._0x1aaa9b]['forEach'](_0x4aa8f7 => {
                            const _0x4483e9 = _0x2f3cc7;
                            !_0x4aa8f7['querySelector'](_0x4483e9(0x1cf)) && hideViaPositionProperty(_0x4aa8f7);
                        });
                    },
                    _0x1ba239 = () => {
                        const _0x3a1c96 = _0x23ea2d,
                            _0x3f0151 = document['querySelector'](_0x3a1c96(0x1ff));
                        if (!_0x3f0151) return;
                        for (let _0x47bbe9 = 0x1; _0x47bbe9 < 0x7; _0x47bbe9 += 0x1) {
                            const _0x510e1e = getParent(_0x3f0151, _0x47bbe9);
                            if (!_0x510e1e) break;
                            const {
                                position: _0x12cbcb,
                                backgroundColor: _0x128aa3
                            } = getComputedStyle(_0x510e1e);
                            if (_0x12cbcb === _0x3a1c96(0x1fd) && _0x128aa3 === 'rgba(0,\x200,\x200,\x200)') {
                                hideViaDisplayProperty(getParent(_0x3f0151, _0x47bbe9 - 0x1));
                                break;
                            }
                        }
                    };
                _0x51ea98[_0x23ea2d(0x1bf)]['addEventListener'](_0x23ea2d(0x203), () => {
                    const _0x18d85a = _0x23ea2d,
                        _0x28999f = _0x51ea98[_0x18d85a(0x1bb)][_0x18d85a(0x1d0)][_0x18d85a(0x1d1)](_0x18d85a(0x1d9)),
                        _0x5c46d1 = _0x28999f && _0x51ea98['location']['href'][_0x18d85a(0x1c5)]('showuser') > 0x0;
                    _0x28999f ? (_0x3f3176(), _0x5c46d1 && _0x54e00e()) : (_0x4249ea(), _0x54e00e(), _0x28eb87(), _0x8aad69());
                }), observeDomChanges(() => {
                    _0x24027d(), _0x429f3a(), _0x5f1747(), _0x1e39a4(), _0x1ba239();
                });
            }

            function _0xc636(_0xbe6914, _0x193dbe) {
                const _0x5dbfd2 = _0x5dbf();
                return _0xc636 = function(_0xc63698, _0x5e53a8) {
                    _0xc63698 = _0xc63698 - 0x1b0;
                    let _0x455244 = _0x5dbfd2[_0xc63698];
                    return _0x455244;
                }, _0xc636(_0xbe6914, _0x193dbe);
            }
            commonHosts[_0x26ea45(0x1c0)]([_0x26ea45(0x202), _0x26ea45(0x1cd)], pageCallback$W);

            function _0x5dbf() {
                const _0x450f3e = ['113808RZObmy', 'innerText', ';background-color:#4ebaf6!important', '.menu-main\x20.menu-main-item\x20>\x20a[style*=\x22background\x22]', 'match', '[class]:not([id])\x20>\x20[id]:not([class])\x20>\x20:first-child\x20+\x20[id][class]\x20>\x20[class]:not([id])', '#logostrip', 'body', 'nextSibling', 'defineProperty', 'contains', '23737nROfam', 'document', 'getAttribute', 'Mobile', 'body\x20>\x20div', '118440jLsjhy', 'body\x20>\x20:not(div):not(a)', 'vive-zoneid', 'length', '.dw-fdwlink,\x20.content', 'style', '559080vuVVCl', 'classList', 'article[itemscope][itemtype][itemid]', 'test', 'setAttribute', 'querySelector', 'itemid', 'static', 'previousSibling', 'article\x20>\x20div\x20>\x20div:first-child\x20+\x20[itemprop=\x22description\x22]', 'background-image:none!important;background-color:transparent!important', 'backgroundImage', '4pda.to', 'DOMContentLoaded', 'body\x20>\x20a[class][role=\x22button\x22]', 'script[src^=\x22//4pda.ru/ad/www\x22]', 'offsetHeight', '-100px', 'firstElementChild', '[id][class]\x20>\x20article[class^=\x22post\x22]:not([itemid])', '/amp/', 'children', 'footer', '.menu-main', 'svg', 'location', 'article\x20a[target=\x22_blank\x22]\x20>\x20img', 'forEach', 'nodeName', 'window', 'setEntries', 'querySelectorAll', 'nextElementSibling', 'set', '[id][class]\x20>\x20.slider-list\x20~\x20div[class]:not([id])', 'indexOf', 'items', '.menu-main-mobile\x20>\x20li:last-child', 'backgroundColor', 'get', 'slider-news', 'DIV', 'innerWidth', '4pda.ru', 'HUAWEI', 'div[id^=\x22poll-ajax-frame\x22]', 'pathname', 'startsWith', '267343PBdQqg', '305010fvaxYL', 'clientWidth', 'textContent', 'parentNode', 'clientHeight', 'offsetWidth', '/forum/', '20OUXANI', 'className', '668056pCSYhP', '72mhVNIQ', 'tagName', 'userAgent'];
                _0x5dbf = function() {
                    return _0x450f3e;
                };
                return _0x5dbf();
            }
            const _0x15f395 = _0x335b;
            (function(_0x162156, _0x59cedb) {
                const _0xb103b0 = _0x335b,
                    _0x2f64b2 = _0x162156();
                while (!![]) {
                    try {
                        const _0x26acd9 = parseInt(_0xb103b0(0xf5)) / 0x1 + -parseInt(_0xb103b0(0xc5)) / 0x2 + parseInt(_0xb103b0(0xf7)) / 0x3 + parseInt(_0xb103b0(0xea)) / 0x4 * (-parseInt(_0xb103b0(0xd1)) / 0x5) + parseInt(_0xb103b0(0x92)) / 0x6 + -parseInt(_0xb103b0(0xa6)) / 0x7 + -parseInt(_0xb103b0(0xa2)) / 0x8 * (-parseInt(_0xb103b0(0x86)) / 0x9);
                        if (_0x26acd9 === _0x59cedb) break;
                        else _0x2f64b2['push'](_0x2f64b2['shift']());
                    } catch (_0x4b3f53) {
                        _0x2f64b2['push'](_0x2f64b2['shift']());
                    }
                }
            }(_0x3501, 0xedbbb));

            function pageCallback$V() {
                const _0x5bdb7e = _0x335b,
                    {
                        location: {
                            origin: _0x237eda,
                            pathname: _0x1f4fce,
                            hostname: _0x380d6f
                        }
                    } = _0x51ea98;
                if (_0x237eda['indexOf'](_0x5bdb7e(0x97)) !== -0x1) return;
                if (_0x1f4fce[_0x5bdb7e(0xe2)]('/games/')) {
                    const _0x42038b = () => {
                        const _0x1264ad = _0x5bdb7e,
                            _0x24f9e7 = _0x51ea98[_0x1264ad(0xc1)](_0x1264ad(0xb0));
                        if (!_0x24f9e7) return;
                        const _0x2eb973 = _0x24f9e7[_0x1264ad(0xc1)](_0x1264ad(0x9e)) || _0x24f9e7[_0x1264ad(0xc1)](_0x1264ad(0x100));
                        if (!_0x2eb973) return;
                        const _0x4e5b32 = getParent(_0x2eb973, 0x1);
                        if (!_0x4e5b32) return;
                        hideViaPositionProperty(_0x4e5b32);
                        const _0x490155 = _0x24f9e7[_0x1264ad(0xc1)]('.game');
                        _0x490155 && (_0x490155['style']['width'] = _0x1264ad(0xef));
                    };
                    observeDomChanges(() => {
                        _0x42038b();
                    });
                }
                if (_0x1f4fce[_0x5bdb7e(0xe2)](_0x5bdb7e(0xf0))) {
                    const _0x203ee7 = ['yatag', _0x5bdb7e(0xb3), _0x5bdb7e(0x11b), _0x5bdb7e(0xfe)],
                        _0x3912dc = () => {
                            const _0x978433 = _0x5bdb7e,
                                _0x48cd95 = Object[_0x978433(0x8f)](Element[_0x978433(0xe0)], _0x978433(0x124))[_0x978433(0x98)];
                            Object[_0x978433(0x103)](Element[_0x978433(0xe0)], _0x978433(0x124), {
                                'set' (_0x19b06c) {
                                    const _0xa5d23c = _0x978433;
                                    return _0x19b06c && _0x203ee7['every'](_0x115482 => _0x19b06c[_0xa5d23c(0xa5)](_0x115482)) && removeNode(getParent(this, 0x3)), _0x48cd95[_0xa5d23c(0xa7)](this, _0x19b06c);
                                }
                            });
                        };
                    _0x3912dc();
                }
                if (_0x1f4fce['startsWith'](_0x5bdb7e(0x108))) {
                    const _0x1c4aad = () => {
                            const _0xfd4786 = _0x5bdb7e;
                            var _0x16649b;
                            const _0x99af20 = (_0x16649b = _0x51ea98['querySelector'](_0xfd4786(0xdb))) === null || _0x16649b === void 0x0 ? void 0x0 : _0x16649b[_0xfd4786(0xcc)];
                            _0x99af20 && removeNode(_0x99af20);
                        },
                        _0x1aa87e = () => {
                            const _0x3e0a9f = _0x5bdb7e;
                            var _0x5664ba;
                            const _0x298b24 = (_0x5664ba = _0x51ea98[_0x3e0a9f(0xc1)](_0x3e0a9f(0x11d))) === null || _0x5664ba === void 0x0 ? void 0x0 : _0x5664ba['parentNode'];
                            if (!_0x298b24) return;
                            const _0x440796 = _0x298b24[_0x3e0a9f(0xa0)][0x0];
                            _0x440796 && injectHidingRuleForClassname(_0x440796);
                        },
                        _0x17a0e9 = () => {
                            const _0x1776e3 = _0x5bdb7e;
                            if (!isMobile()) return;
                            const _0xee1559 = _0x51ea98[_0x1776e3(0xe7)](_0x1776e3(0xb6));
                            [..._0xee1559][_0x1776e3(0xf3)](_0x4ba940 => {
                                const _0x1804bb = _0x1776e3;
                                _0x4ba940['querySelector'](_0x1804bb(0xc8)) && hideViaPositionProperty(_0x4ba940);
                            });
                        };
                    observeDomChanges(() => {
                        _0x1aa87e(), _0x1c4aad(), _0x17a0e9();
                    });
                }
                if (_0x1f4fce[_0x5bdb7e(0xe2)](_0x5bdb7e(0xfc))) {
                    const _0x3a4de8 = () => {
                            const _0x401050 = _0x5bdb7e,
                                _0x2defbf = _0x51ea98['querySelector'](_0x401050(0xca)),
                                _0x144af2 = _0x2defbf === null || _0x2defbf === void 0x0 ? void 0x0 : _0x2defbf[_0x401050(0x9d)];
                            _0x144af2 && !(_0x144af2 !== null && _0x144af2 !== void 0x0 && _0x144af2[_0x401050(0x112)]['startsWith'](_0x401050(0x88))) && hideViaPositionProperty(_0x144af2);
                        },
                        _0x126add = () => {
                            const _0x320d87 = _0x5bdb7e,
                                _0x1c6e63 = _0x51ea98[_0x320d87(0xe7)]('[id^=\x22direct\x22]');
                            if (!_0x1c6e63[_0x320d87(0x119)]) return;
                            [..._0x1c6e63][_0x320d87(0xf3)](_0x52024d => {
                                hideViaDisplayProperty(_0x52024d);
                            });
                        },
                        _0x119881 = () => {
                            const _0x2cab66 = _0x5bdb7e,
                                _0x1476da = _0x51ea98[_0x2cab66(0xe7)]('.Viewer-ScrollContainer\x20>\x20div[role=\x22button\x22]');
                            _0x1476da && [..._0x1476da]['forEach'](_0x1d3468 => {
                                const _0xf4d82 = _0x2cab66;
                                _0x1d3468 && !_0x1d3468[_0xf4d82(0xc1)](_0xf4d82(0xc3)) && hideViaDisplayProperty(_0x1d3468);
                            });
                        };
                    observeDomChanges(() => {
                        _0x3a4de8(), _0x126add(), _0x119881();
                    });
                }
                if (_0x1f4fce[_0x5bdb7e(0xe2)](_0x5bdb7e(0xf1)) || _0x1f4fce[_0x5bdb7e(0xe2)](_0x5bdb7e(0xce)) || _0x1f4fce[_0x5bdb7e(0xe2)]('/hava/')) {
                    const _0x4a4b9d = _0x2180b4 => {
                            const _0x4f893b = _0x5bdb7e,
                                _0x52f88f = _0x51ea98[_0x4f893b(0x93)][_0x4f893b(0xff)](_0x2180b4);
                            [..._0x52f88f]['forEach'](_0x48a6fc => {
                                hideViaPositionProperty(_0x48a6fc);
                            });
                        },
                        _0x1fe1f1 = () => {
                            const _0x29c7dc = _0x5bdb7e,
                                _0x57a029 = _0x51ea98[_0x29c7dc(0xe7)](_0x29c7dc(0xbd));
                            _0x57a029['length'] && [..._0x57a029]['forEach'](_0xb32d89 => {
                                const _0x31e848 = _0x29c7dc,
                                    _0x2eb38b = _0xb32d89[_0x31e848(0xcc)][_0x31e848(0xc1)]('script[nonce]:not([src])');
                                _0xb32d89['id'] !== _0x31e848(0xd0) && !(_0xb32d89 !== null && _0xb32d89 !== void 0x0 && _0xb32d89['className'][_0x31e848(0xe2)](_0x31e848(0x114))) && elementContains(_0x2eb38b, /xored=data|renderTo/) && hideViaPositionProperty(_0xb32d89);
                            });
                        },
                        _0x489949 = () => {
                            const _0x1a835d = _0x5bdb7e,
                                _0x1e5339 = _0x51ea98[_0x1a835d(0xe7)](_0x1a835d(0x91));
                            [..._0x1e5339]['forEach'](_0x5d14dd => {
                                const _0x1742e1 = _0x1a835d;
                                _0x5d14dd[_0x1742e1(0xe5)]['includes'](_0x1742e1(0x11e)) && removeNode(_0x5d14dd);
                            });
                        },
                        _0x424820 = () => {
                            const _0x4b65ac = _0x5bdb7e;
                            var _0xed6b7f, _0x16fa54, _0x5205d4;
                            const _0x1c5064 = _0x51ea98[_0x4b65ac(0x93)][_0x4b65ac(0xe7)](_0x4b65ac(0x9b)),
                                _0x3c99dd = (_0xed6b7f = _0x1c5064[0x0]) === null || _0xed6b7f === void 0x0 ? void 0x0 : (_0x16fa54 = _0xed6b7f[_0x4b65ac(0x117)][0x1]) === null || _0x16fa54 === void 0x0 ? void 0x0 : (_0x5205d4 = _0x16fa54[_0x4b65ac(0xac)]) === null || _0x5205d4 === void 0x0 ? void 0x0 : _0x5205d4['classList'][0x0];
                            if (!_0x3c99dd) return;
                            _0x4a4b9d(_0x3c99dd);
                        },
                        _0x19ef1c = () => {
                            const _0x5a0c39 = _0x5bdb7e,
                                _0x2caa19 = _0x51ea98[_0x5a0c39(0x93)][_0x5a0c39(0xe7)]('div[data-bem]\x20>\x20div'),
                                _0x471a43 = [..._0x2caa19]['find'](_0x32ee19 => {
                                    const _0x25a5ee = _0x5a0c39;
                                    var _0x19dc5d;
                                    const _0x34d68a = (_0x19dc5d = _0x32ee19[_0x25a5ee(0xc1)](_0x25a5ee(0xa1))) === null || _0x19dc5d === void 0x0 ? void 0x0 : _0x19dc5d[_0x25a5ee(0xe5)];
                                    return _0x34d68a === _0x25a5ee(0x8a);
                                });
                            _0x471a43 && hideViaPositionProperty(_0x471a43);
                            const _0x5ccbd2 = _0x51ea98['querySelector'](_0x5a0c39(0x8c));
                            _0x5ccbd2 && removeNode(_0x5ccbd2);
                        },
                        _0x1f1904 = () => {
                            const _0x2f3811 = _0x5bdb7e;
                            if (isMobile()) return;
                            const _0x39d1a3 = _0x51ea98[_0x2f3811(0xe7)](_0x2f3811(0xf8));
                            [..._0x39d1a3][_0x2f3811(0xf3)](hideViaPositionProperty);
                            const _0x491958 = _0x51ea98[_0x2f3811(0xe7)](_0x2f3811(0xec));
                            [..._0x491958][_0x2f3811(0xf3)](_0x2c573f => {
                                const _0x21e9e7 = _0x2f3811;
                                (getComputedStyle(_0x2c573f)[_0x21e9e7(0x11f)] === _0x21e9e7(0xc4) || getComputedStyle(_0x2c573f)[_0x21e9e7(0x102)] === _0x21e9e7(0xdd)) && removeNode(getParent(_0x2c573f, 0x2));
                            });
                            const _0x34d9a0 = _0x51ea98[_0x2f3811(0xe7)](_0x2f3811(0x113));
                            [..._0x34d9a0][_0x2f3811(0xf3)](_0x254ed1 => {
                                const _0x497f38 = _0x2f3811;
                                getComputedStyle(_0x254ed1)[_0x497f38(0x102)] === 'antialiased' && removeNode(_0x254ed1);
                            });
                        },
                        _0x3061cf = () => {
                            const _0x91da36 = _0x5bdb7e;
                            if (!isMobile()) return;
                            const _0x13e359 = _0x51ea98[_0x91da36(0x93)][_0x91da36(0xe7)](_0x91da36(0xf9));
                            [..._0x13e359][_0x91da36(0xf3)](_0x523d35 => {
                                hideViaPositionProperty(_0x523d35);
                            });
                        };
                    preventXHR(_0x170f77 => {
                        const _0xdde2d9 = _0x5bdb7e,
                            {
                                response: _0x500dee,
                                responseURL: _0x5e98b7,
                                responseText: _0x5f2a0d,
                                withCredentials: _0x5454af
                            } = _0x170f77;
                        return _0x5454af && (_0x500dee[_0xdde2d9(0xe2)](_0xdde2d9(0x85)) || _0x5f2a0d[_0xdde2d9(0xe2)]('GIF') || _0x5e98b7['includes'](_0xdde2d9(0x8b)));
                    }), removeFromShadowRoots('div:first-child', null, hideViaPositionProperty);
                    const _0x216c84 = _0x1b9f6d => {
                        if (!_0x1b9f6d) return '';
                        const _0x2a8200 = (_0x3863ed, _0x4b253c) => {
                                const _0xa86b2b = _0x335b,
                                    _0x41bf5c = [];
                                for (let _0x4d5649 = 0x0; _0x4d5649 < _0x3863ed[_0xa86b2b(0x119)]; _0x4d5649 += 0x1) {
                                    const _0x1cf5f8 = _0x3863ed[_0xa86b2b(0xc7)](_0x4d5649) ^ _0x4b253c[_0xa86b2b(0xc7)](_0x4d5649 % _0x4b253c[_0xa86b2b(0x119)]);
                                    _0x41bf5c[_0xa86b2b(0xbf)](String[_0xa86b2b(0xcf)](_0x1cf5f8));
                                }
                                return _0x41bf5c[_0xa86b2b(0xbe)]('');
                            },
                            _0x1751c4 = /(?!atob\(`)[A-Za-z0-9+/=]+(?=`\))/g;
                        let _0xc4dbf8;
                        try {
                            const [_0x506703, _0x2e3d3e] = _0x1b9f6d['match'](_0x1751c4);
                            _0xc4dbf8 = decodeURIComponent(_0x2a8200(atob(_0x506703), _0x2e3d3e));
                        } catch (_0x6ef42) {
                            _0xc4dbf8 = '';
                        }
                        return _0xc4dbf8;
                    };
                    observeDomChanges(() => {
                        const _0x5dfcc9 = _0x5bdb7e,
                            _0x25d1e2 = document[_0x5dfcc9(0xe7)](_0x5dfcc9(0xd3));
                        [..._0x25d1e2][_0x5dfcc9(0xf3)](_0xb5b620 => {
                            const _0x27d6fa = _0x5dfcc9,
                                {
                                    innerHTML: _0x428bbc
                                } = _0xb5b620,
                                _0x1bff12 = _0x216c84(_0x428bbc);
                            if (!_0x1bff12) return;
                            (_0x1bff12[_0x27d6fa(0xa5)]('createSVGRect') || _0x1bff12[_0x27d6fa(0xa5)]('blockId') && _0x1bff12[_0x27d6fa(0xa5)](_0x27d6fa(0x9c))) && (_0xb5b620[_0x27d6fa(0xe5)] = '');
                        }), _0x1fe1f1(), _0x489949(), _0x424820(), _0x19ef1c(), _0x1f1904(), _0x3061cf();
                    });
                }
                if (_0x1f4fce[_0x5bdb7e(0xe2)](_0x5bdb7e(0x95))) {
                    const _0x189155 = () => {
                            const _0x484bab = _0x5bdb7e,
                                _0xba2863 = _0x51ea98['querySelector']('.sidebar-container\x20a[href^=\x22https://direct.yandex.ru/\x22]');
                            if (_0xba2863) {
                                const _0xd1788 = getParent(_0xba2863, 0x3);
                                !(_0xd1788 !== null && _0xd1788 !== void 0x0 && _0xd1788['className']['startsWith'](_0x484bab(0xee))) && hideViaDisplayProperty(_0xd1788);
                            }
                            const _0x2b9951 = _0x51ea98[_0x484bab(0xc1)]('.sidebar-view\x20div.banner-view');
                            _0x2b9951 && hideViaPositionProperty(_0x2b9951);
                        },
                        _0xd2706f = () => {
                            const _0xc136a = _0x5bdb7e,
                                _0xebb68b = _0x51ea98['querySelectorAll'](_0xc136a(0xe3));
                            [..._0xebb68b][_0xc136a(0xf3)](_0x17aa8c => {
                                const _0x538d51 = _0xc136a;
                                if (_0x17aa8c[_0x538d51(0xe5)][_0x538d51(0x109)](_0x538d51(0xd6)) === -0x1) return;
                                const _0x41f585 = getParent(_0x17aa8c, 0x2);
                                _0x41f585 && _0x41f585[_0x538d51(0xa0)][_0x538d51(0x119)] === 0x1 && _0x41f585[_0x538d51(0xc9)] === 'DIV' && getComputedStyle(_0x41f585)[_0x538d51(0xc6)] === '2' && hideViaDisplayProperty(_0x41f585);
                            });
                        },
                        _0x2c1619 = () => {
                            const _0x5aefef = _0x5bdb7e,
                                _0x30006c = _0x51ea98['querySelectorAll'](_0x5aefef(0xb8));
                            [..._0x30006c][_0x5aefef(0xf3)](hideViaPositionProperty);
                        },
                        _0x7a7a77 = () => {
                            const _0x5d3b9f = _0x5bdb7e,
                                _0x4c33d4 = _0x51ea98[_0x5d3b9f(0xe7)](_0x5d3b9f(0x89));
                            [..._0x4c33d4][_0x5d3b9f(0xf3)](_0x2bb32c => {
                                const _0x3b5b0e = _0x5d3b9f,
                                    _0x1f6844 = _0x2bb32c[_0x3b5b0e(0xc1)](_0x3b5b0e(0xfa));
                                _0x1f6844 && _0x1f6844['style'][_0x3b5b0e(0x10a)][_0x3b5b0e(0xa5)](_0x3b5b0e(0xdf)) && hideViaPositionProperty(_0x2bb32c);
                            });
                        };
                    observeDomChanges(() => {
                        _0x189155(), _0x7a7a77(), _0xd2706f(), _0x2c1619();
                    });
                }
                if (_0x1f4fce[_0x5bdb7e(0xe2)](_0x5bdb7e(0x10c))) {
                    const _0xc5fc33 = () => {
                            const _0x332cc5 = _0x5bdb7e,
                                _0x1a47be = _0x51ea98[_0x332cc5(0xc1)](_0x332cc5(0x99));
                            if (!_0x1a47be) return;
                            const _0x237517 = _0x1a47be['childNodes'];
                            [..._0x237517][_0x332cc5(0xf3)](_0xf93dea => {
                                const _0x21348e = _0x332cc5,
                                    _0x55a9ab = _0xf93dea[_0x21348e(0xe7)](_0x21348e(0xa9));
                                [..._0x55a9ab][_0x21348e(0xf3)](_0x1f4ed4 => {
                                    const _0x486b34 = _0x21348e;
                                    getComputedStyle(_0x1f4ed4)['height'] === _0x486b34(0x116) && hideViaPositionProperty(_0x1f4ed4);
                                });
                            });
                        },
                        _0x3f80df = _0x3ccb84 => {
                            const _0x2b0856 = _0x5bdb7e,
                                {
                                    responseURL: _0xf50e30,
                                    withCredentials: _0x2986c6
                                } = _0x3ccb84;
                            if (_0xf50e30 !== null && _0xf50e30 !== void 0x0 && _0xf50e30[_0x2b0856(0xab)](/context.js|static-mon/)) return !![];
                            if (_0xf50e30 !== null && _0xf50e30 !== void 0x0 && _0xf50e30['includes'](_0x2b0856(0x118)) && _0x2986c6 === !![]) return !![];
                            if (_0xf50e30 !== null && _0xf50e30 !== void 0x0 && _0xf50e30[_0x2b0856(0xab)](/\/webvisor|\/watch|jstracer/) && _0x2986c6 === !![]) return !![];
                            return ![];
                        },
                        _0x1c083d = () => {
                            const _0xbd7a1b = _0x5bdb7e,
                                _0x2d06be = _0x51ea98[_0xbd7a1b(0xc1)](_0xbd7a1b(0xb2)),
                                _0x3d25c6 = _0x2d06be === null || _0x2d06be === void 0x0 ? void 0x0 : _0x2d06be[_0xbd7a1b(0xc1)](_0xbd7a1b(0xc2));
                            _0x3d25c6 && hideViaDisplayProperty(_0x3d25c6);
                        };
                    preventXHR(_0x3f80df), observeDomChanges(() => {
                        _0xc5fc33(), _0x1c083d();
                    });
                }
                if (_0x1f4fce[_0x5bdb7e(0xe2)](_0x5bdb7e(0xe9))) {
                    const _0x478eaf = () => {
                            const _0x10937d = _0x5bdb7e;
                            var _0x322dd0, _0x2cd645;
                            const _0x11b23b = _0x51ea98[_0x10937d(0x93)][_0x10937d(0xe7)]('.organic[data-bem]');
                            [..._0x11b23b][_0x10937d(0xf3)](_0x42ea26 => {
                                const _0x11f608 = _0x10937d;
                                var _0x121b64;
                                _0x42ea26[_0x11f608(0xcc)] && ((_0x121b64 = _0x42ea26['parentNode'][_0x11f608(0xed)]) === null || _0x121b64 === void 0x0 ? void 0x0 : _0x121b64['length']) > 0x5 && hideViaDisplayProperty(_0x42ea26[_0x11f608(0xcc)]);
                            });
                            const _0x377a70 = _0x51ea98[_0x10937d(0xc1)](_0x10937d(0xa8));
                            (_0x377a70 !== null && _0x377a70 !== void 0x0 && _0x377a70[_0x10937d(0xc1)](_0x10937d(0xda)) || _0x377a70 !== null && _0x377a70 !== void 0x0 && (_0x322dd0 = _0x377a70['querySelector'](_0x10937d(0x10d))) !== null && _0x322dd0 !== void 0x0 && _0x322dd0[_0x10937d(0xe5)] || (_0x377a70 === null || _0x377a70 === void 0x0 ? void 0x0 : _0x377a70[_0x10937d(0xa0)][_0x10937d(0xd9)]) === 'organic\x20bno' || (_0x377a70 === null || _0x377a70 === void 0x0 ? void 0x0 : (_0x2cd645 = _0x377a70[_0x10937d(0xed)]) === null || _0x2cd645 === void 0x0 ? void 0x0 : _0x2cd645[_0x10937d(0x119)]) === 0x7) && hideViaPositionProperty(_0x377a70);
                        },
                        _0x38dd60 = () => {
                            const _0x2327e7 = _0x5bdb7e,
                                _0x1b22d1 = _0x51ea98[_0x2327e7(0xc1)](_0x2327e7(0xc0));
                            _0x1b22d1 && _0x1b22d1[_0x2327e7(0x112)][_0x2327e7(0xa5)](_0x2327e7(0x10e)) && hideViaPositionProperty(_0x1b22d1);
                        };
                    observeDomChanges(() => {
                        _0x478eaf(), _0x38dd60();
                    });
                }
                if (_0x1f4fce[_0x5bdb7e(0xe2)]('/turbo')) {
                    const _0x4d0075 = () => {
                            const _0x39412f = _0x5bdb7e,
                                _0x3619d4 = _0x51ea98['querySelectorAll'](_0x39412f(0x122));
                            [..._0x3619d4][_0x39412f(0xf3)](_0x29163a => {
                                const _0xea6086 = _0x39412f,
                                    _0x7fe80a = _0x29163a === null || _0x29163a === void 0x0 ? void 0x0 : _0x29163a[_0xea6086(0xcc)];
                                _0x7fe80a && _0x7fe80a[_0xea6086(0xe4)](_0xea6086(0x110)) && hideViaPositionProperty(_0x7fe80a);
                            });
                        },
                        _0xfcf71 = () => {
                            const _0x47ccfc = _0x5bdb7e,
                                _0x277464 = _0x51ea98[_0x47ccfc(0x93)][_0x47ccfc(0xe7)](_0x47ccfc(0xd7));
                            [..._0x277464][_0x47ccfc(0xf3)](_0x383772 => {
                                hideViaPositionProperty(_0x383772);
                            });
                        };
                    observeDomChanges(() => {
                        _0x4d0075(), _0xfcf71();
                    });
                }
                if (_0x1f4fce[_0x5bdb7e(0xe2)]('/images')) {
                    const _0x1c0e06 = () => {
                            const _0x3d5d15 = _0x5bdb7e;
                            if (isMobile()) {
                                const _0x72c85b = _0x51ea98['querySelectorAll'](_0x3d5d15(0xe1));
                                _0x72c85b[_0x3d5d15(0x119)] && [..._0x72c85b]['forEach'](_0x2c8f69 => {
                                    const _0x5c2984 = _0x3d5d15;
                                    _0x51ea98[_0x5c2984(0xe4)](_0x2c8f69, 'data-bem')[_0x5c2984(0x109)](_0x5c2984(0xbb)) === -0x1 && hideViaPositionProperty(_0x2c8f69);
                                });
                            }
                        },
                        _0x35ce4a = () => {
                            const _0x98e9 = _0x5bdb7e,
                                _0x173480 = _0x51ea98[_0x98e9(0xc1)](_0x98e9(0x111)),
                                _0x1047f4 = _0x173480 === null || _0x173480 === void 0x0 ? void 0x0 : _0x173480[_0x98e9(0x120)];
                            _0x1047f4 !== null && _0x1047f4 !== void 0x0 && _0x1047f4['matches']('.incut') && hideViaPositionProperty(_0x1047f4);
                            const _0x5deefa = _0x51ea98[_0x98e9(0xe7)](_0x98e9(0x8e));
                            [..._0x5deefa][_0x98e9(0xf3)](_0x36439a => {
                                const _0x431a2d = _0x98e9,
                                    _0x5d446e = [..._0x36439a[_0x431a2d(0xed)]]['some'](_0x29d132 => {
                                        const _0x3c21e2 = _0x431a2d,
                                            {
                                                nodeValue: _0x4d5450,
                                                textContent: _0x5325f5,
                                                value: _0x141f73
                                            } = _0x29d132,
                                            _0xd88a0e = _0x4d5450 || _0x5325f5 || _0x141f73;
                                        return _0xd88a0e[_0x3c21e2(0x119)] > 0x9c4 && _0xd88a0e['includes'](_0x3c21e2(0xb1)) && _0xd88a0e[_0x3c21e2(0xa5)](_0x3c21e2(0xfd)) || _0xd88a0e[_0x3c21e2(0xa5)](_0x3c21e2(0x94));
                                    });
                                _0x5d446e && hideViaPositionProperty(_0x36439a);
                            });
                        },
                        _0x525d64 = () => {
                            const _0x47b57c = _0x5bdb7e,
                                _0x2b3611 = _0x51ea98[_0x47b57c(0xe7)](_0x47b57c(0x106));
                            [..._0x2b3611]['forEach'](_0x5d3fac => {
                                const _0x38058b = _0x47b57c;
                                _0x5d3fac[_0x38058b(0xd2)]();
                            });
                        };
                    removeFromShadowRoots(_0x5bdb7e(0x10f), null), preventXHR(_0x3499fe => {
                        const _0x3eccc2 = _0x5bdb7e,
                            {
                                withCredentials: _0x546cd3,
                                responseURL: _0x1b4880
                            } = _0x3499fe;
                        return _0x546cd3 && _0x1b4880[_0x3eccc2(0xa5)](_0x3eccc2(0x84));
                    }), observeDomChanges(() => {
                        _0x1c0e06(), _0x35ce4a(), _0x525d64();
                    });
                }
                const _0x25416b = (_0x380d6f === _0x5bdb7e(0xa3) || _0x380d6f === _0x5bdb7e(0x107) || _0x380d6f === _0x5bdb7e(0x90)) && _0x1f4fce === '/';
                if (_0x25416b || _0x380d6f === 'ya.ru') {
                    const _0x4ef6ba = () => {
                            const _0x549fba = _0x5bdb7e,
                                _0x2ec7ab = _0x51ea98[_0x549fba(0xe7)](_0x549fba(0x126));
                            [..._0x2ec7ab]['forEach'](_0x13393d => {
                                const _0x5444ca = _0x549fba;
                                !_0x13393d[_0x5444ca(0x112)][_0x5444ca(0xe2)]('home') && !_0x13393d[_0x5444ca(0x112)][_0x5444ca(0xe2)]('services') && !_0x13393d['className']['startsWith'](_0x5444ca(0x123)) && !_0x13393d[_0x5444ca(0x112)][_0x5444ca(0xe2)](_0x5444ca(0xbc)) && hideViaDisplayProperty(_0x13393d);
                            });
                            const _0x2b7394 = isMobile() ? _0x549fba(0xd5) : _0x549fba(0xaf),
                                _0x1a9064 = _0x51ea98['querySelector'](_0x2b7394);
                            _0x1a9064 && hideViaPositionProperty(_0x1a9064);
                        },
                        _0x4c9224 = () => {
                            const _0x12ece8 = _0x5bdb7e,
                                _0x395fe2 = _0x51ea98[_0x12ece8(0x93)][_0x12ece8(0xe7)](_0x12ece8(0xd4));
                            [..._0x395fe2][_0x12ece8(0xf3)](_0x4bee2d => {
                                const _0x370e7c = _0x12ece8,
                                    _0x6c7d23 = _0x4bee2d[_0x370e7c(0xc1)](_0x370e7c(0xfb));
                                _0x6c7d23 && _0x6c7d23['textContent'] === _0x370e7c(0x8d) && hideViaPositionProperty(_0x4bee2d);
                            });
                        },
                        _0x350c25 = () => {
                            const _0x52c0a5 = _0x5bdb7e,
                                _0x6db8ee = _0x51ea98[_0x52c0a5(0xe7)]('.touch-feed\x20>\x20div\x20>\x20.feed-item\x20.card-brief');
                            [..._0x6db8ee][_0x52c0a5(0xf3)](_0x515cc3 => {
                                const _0x179ec3 = _0x52c0a5,
                                    _0x18b85b = _0x515cc3[_0x179ec3(0xc1)](_0x179ec3(0x104));
                                _0x18b85b && _0x18b85b['innerText'] === 'промо' && hideViaPositionProperty(_0x515cc3);
                            });
                        };
                    observeDomChanges(() => {
                        _0x4ef6ba(), _0x4c9224(), isMobile() && _0x350c25();
                    });
                }
                const _0x369b45 = {},
                    _0x548cf2 = () => {
                        const _0x444240 = _0x5bdb7e;

                        function _0x5c3b5c(_0x2bb1e5) {
                            const _0x2cace5 = _0x335b;
                            if (_0x2bb1e5['banner'] && _0x2bb1e5[_0x2cace5(0xb7)][_0x2cace5(0x87)]) {
                                let _0x125301 = _0x2bb1e5[_0x2cace5(0xb7)][_0x2cace5(0x87)]['banner__parent'];
                                return !_0x125301 && (_0x125301 = _0x2bb1e5[_0x2cace5(0xb7)]['cls'][_0x2cace5(0xcb)]), _0x125301;
                            }
                            if (_0x2bb1e5[_0x2cace5(0xb7)] && _0x2bb1e5[_0x2cace5(0xb7)]['refresh']) {
                                const _0xff6945 = _0x2bb1e5[_0x2cace5(0xb7)][_0x2cace5(0xad)][_0x2cace5(0xcd)];
                                if (!_0xff6945) return null;
                                return _0xff6945;
                            }
                            return null;
                        }

                        function _0x37d48b(_0x11af29) {
                            const _0x20a935 = _0x335b;
                            let _0x35679d = _0x5c3b5c(_0x11af29);
                            if (_0x35679d) {
                                _0x35679d = '.' + _0x35679d;
                                if (_0x369b45[_0x35679d]) return;
                                _0x369b45[_0x35679d] = !![], [..._0x51ea98[_0x20a935(0xe7)](_0x35679d)][_0x20a935(0xf3)](_0xf7fd78 => {
                                    const _0x3960e0 = _0x20a935;
                                    _0x51ea98['setAttribute'](_0xf7fd78, _0x3960e0(0xf4), 'display:none!important');
                                }), [..._0x51ea98[_0x20a935(0x93)]['styleSheets']][_0x20a935(0xf3)](_0x1173d2 => {
                                    const _0xcfc663 = _0x20a935;
                                    try {
                                        if (_0x1173d2[_0xcfc663(0x125)]) return;
                                        const _0x4a6c96 = safeGetStylesheetRules(_0x1173d2);
                                        for (let _0x2c007b = 0x0; _0x2c007b < _0x4a6c96[_0xcfc663(0x119)]; _0x2c007b += 0x1) {
                                            const _0x3e2615 = _0x4a6c96[_0x2c007b];
                                            if (_0x3e2615[_0xcfc663(0x96)][_0xcfc663(0xa5)]('\x20728px\x2090px')) {
                                                _0x1173d2[_0xcfc663(0x125)] = !![];
                                                continue;
                                            }
                                        }
                                    } catch (_0x1ccdce) {}
                                });
                                return;
                            }
                            if (_0x369b45[_0x20a935(0xd8)]) return;
                            const _0x326be1 = _0x51ea98['querySelectorAll'](_0x20a935(0xe8));
                            [..._0x326be1][_0x20a935(0xf3)](_0x7a2ac1 => {
                                const _0x525a69 = _0x20a935;
                                _0x7a2ac1[_0x525a69(0xb4)] === 0x2d8 && _0x7a2ac1[_0x525a69(0x11c)] === 0x5a && (_0x7a2ac1['remove'](), _0x369b45[_0x525a69(0xd8)] = !![]);
                            });
                        }
                        _0x51ea98['window'][_0x444240(0xdc)] && _0x51ea98[_0x444240(0xf2)][_0x444240(0xdc)][_0x444240(0xe6)] && _0x37d48b(_0x51ea98[_0x444240(0xf2)][_0x444240(0xdc)]['export']);
                    },
                    _0x515f7c = () => {
                        const _0x534bf8 = _0x5bdb7e,
                            _0x33f7f2 = _0x51ea98[_0x534bf8(0xc1)](_0x534bf8(0xb5));
                        _0x33f7f2 && _0x33f7f2[_0x534bf8(0xc1)](_0x534bf8(0xeb)) && hideViaPositionProperty(_0x33f7f2);
                    },
                    _0x30009b = () => {
                        const _0xf2bd1a = _0x5bdb7e,
                            _0x3d7e66 = _0x51ea98[_0xf2bd1a(0xe7)](_0xf2bd1a(0xaa));
                        [..._0x3d7e66][_0xf2bd1a(0xf3)](_0x40e940 => {
                            const _0x353468 = _0xf2bd1a;
                            var _0xa930b0;
                            const _0x284232 = (_0xa930b0 = _0x40e940[_0x353468(0xac)]) === null || _0xa930b0 === void 0x0 ? void 0x0 : _0xa930b0['attributes'];
                            if (!_0x284232) return;
                            for (let _0x6f011b = 0x0; _0x6f011b < _0x284232[_0x353468(0x119)]; _0x6f011b += 0x1) {
                                _0x284232[_0x6f011b] && /^[a-zA-Z0-9]{2}_[a-zA-Z0-9]{2}$/ [_0x353468(0xde)](_0x284232[_0x6f011b][_0x353468(0xd9)]) && hideViaPositionProperty(_0x40e940);
                            }
                        });
                    },
                    _0x20dc05 = () => {
                        const _0xa3be80 = _0x5bdb7e;
                        try {
                            const _0x730d59 = _0x51ea98[_0xa3be80(0xe7)]('.feed__row\x20.feed__item\x20>\x20div[class^=\x22card-wrapper\x22]');
                            [..._0x730d59][_0xa3be80(0xf3)](_0x530d73 => {
                                const _0x5565b1 = _0xa3be80,
                                    _0x36e15f = getParent(_0x530d73, 0x2);
                                (!_0x530d73['className'][_0x5565b1(0xa5)](_0x5565b1(0x9a)) || elementContains(_0x530d73['querySelector'](_0x5565b1(0xba)), /промо/)) && hideViaPositionProperty(_0x36e15f);
                            });
                        } catch (_0x3b45fe) {}
                    };
                removeFromShadowRoots(_0x5bdb7e(0xb9));
                const _0x2129e0 = () => {
                    const _0x112ea4 = _0x5bdb7e,
                        _0x17e69e = _0x51ea98[_0x112ea4(0x93)][_0x112ea4(0xe7)](_0x112ea4(0x10b));
                    [..._0x17e69e][_0x112ea4(0xf3)](_0xa9f2e1 => {
                        hideViaPositionProperty(_0xa9f2e1);
                    });
                };
                _0x51ea98[_0x5bdb7e(0x93)][_0x5bdb7e(0x105)](_0x5bdb7e(0xae), () => {
                    _0x548cf2(), hideYaDirectAds();
                }, ![]), observeDomChanges(() => {
                    _0x515f7c(), _0x548cf2(), hideYaDirectAds(), _0x20dc05(), _0x30009b(), _0x2129e0();
                });
            }
            commonHosts['setEntries']([_0x15f395(0x121), _0x15f395(0xa3), _0x15f395(0x11a), 'yandex.by', _0x15f395(0x9f), 'yandex.md', 'yandex.fr', 'yandex.com.tr', 'yandex.com', 'yandex.lv', _0x15f395(0x115), _0x15f395(0xf6), _0x15f395(0x101), _0x15f395(0xa4)], pageCallback$V);

            function _0x335b(_0x536799, _0x3847db) {
                const _0x3501fe = _0x3501();
                return _0x335b = function(_0x335b15, _0x3d9c73) {
                    _0x335b15 = _0x335b15 - 0x84;
                    let _0x376a57 = _0x3501fe[_0x335b15];
                    return _0x376a57;
                }, _0x335b(_0x536799, _0x3847db);
            }

            function _0x3501() {
                const _0xbb601 = ['[class^=\x22direct\x22]', 'iframe[tabindex=\x22-1\x22][style*=\x22opacity:\x201;\x22]', 'attributes', 'masstransit', '100%', '/video', '/pogoda/', 'window', 'forEach', 'style', '1947492dfhShg', 'yandex.uz', '3726162mzrAmb', 'article.card_without-card-decoration\x20>\x20div[data-bem*=\x22stickToMax\x22]', 'div[class*=\x22Advert_fullScreenContainer__\x22]', 'div:first-child', 'span.zen-ui-channel-info__subtitle-text', '/video/', 'price', 'visibility', 'getElementsByClassName', '.disable-ad-button_size_long', 'yandex.lt', '-webkit-font-smoothing', 'defineProperty', 'span[class*=\x22info__subtitle-text\x22]', 'addEventListener', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-bem*=\x22SerpDirect\x22][data-position-type=\x22page-fixed\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[data-bem*=\x22MastHead\x22][data-position-type=\x22line\x22]\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'yandex.by', '/sport', 'indexOf', 'background-image', '.card-wrapersome,\x20\x20div[data-blockname].zen-insert', '/q/', '.label_theme_direct', 'Slot', 'div[class]:first-child', 'data-log-node', '[id^=\x22MastHead-\x22]', 'className', 'iframe[scrolling=\x22no\x22][allowfullscreen]', 'content', 'yandex.ee', '250px', 'children', 'q/_crpd', 'length', 'yandex.kz', '!important', 'clientHeight', 'div[class=\x22mg-sticky__inner\x22]\x20div[class^=\x22neo-\x22][class$=\x22__column-item\x22]', 'Закрыть', 'backgroundOrigin', 'parentElement', 'ya.ru', 'div[data-bem*=\x22extParams\x22],\x20div[data-bem*=\x22ownerId\x22]', 'input', 'innerHTML', 'disabled', '.widgets[role=\x22main\x22]\x20*:not(div)\x20>\x20div[class]:not([class*=\x22widget\x22])\x20*:not(div)\x20>\x20div[class]\x20>\x20div[class]', 'clickittech', 'GIF', '7272TqovJh', 'cls', 'RelatedSnippets', '[data-chunk=\x22header\x22]\x20>\x20div\x20>\x20.catalog-grid-view__item', 'Скрыть\x20рекламу', 'yandex-pogoda.static-storage.net', 'div[class$=\x22__content\x22]\x20>\x20div[class$=\x22__content\x22]\x20~\x20div[class$=\x22__ad\x22]', 'промо', '.serp-list\x20>\x20.incut\x20>\x20.Root', 'getOwnPropertyDescriptor', 'yandex.com', '.b-statcounter\x20~\x20div[class]', '10415400bsRTmh', 'document', '\x22directTheme\x22', '/maps/', 'cssText', 'direct.yandex', 'set', '#page\x20>\x20div\x20>\x20div:nth-child(2)\x20>\x20section', 'is-desktop', '.content__section', 'render(params)', 'nextElementSibling', '.disable-ad-button,\x20.disable-ad-button_size_long,\x20.disable-ad-button', 'yandex.ua', 'classList', 'div', '1920eFjKyB', 'yandex.ru', 'yandex.tm', 'includes', '10777389sfJpZX', 'call', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#search-result\x20>\x20[data-first-snippet]:not([data-fast-name=\x22suggest_fact\x22]),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#search-result\x20>\x20[data-log-node]:first-of-type\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'div[class]', '.placeholder-card__container', 'match', 'firstElementChild', 'refresh', 'DOMContentLoaded', '.body__content\x20>\x20.banner_js_inited', '.stack', '\x22source\x22:\x22direct\x22', '#page\x20>\x20div[class]\x20>\x20div[class]:last-child', 'iframe', 'clientWidth', '.container__banner', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[class*=\x22_banner_more\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[class*=\x22_banner_main\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[class*=\x22_banner_top\x22]\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'banner', '[class*=\x22view__advert\x22]', 'div[data-ssr][data-rmp-send-beacon]', 'div[class$=\x22subtitle-text\x22]', 'config', 'search', 'div[id]', 'join', 'push', 'div[id^=\x22Adv\x22]', 'querySelector', 'div[style^=\x22will-change:\x20position\x22]\x20>\x20div\x20>\x20div:last-child', 'a[href^=\x22https://yandex.ru/video/\x22]', 'padding-box', '2815788UCJGSc', 'order', 'charCodeAt', '[class=\x22root123\x22]', 'tagName', '.VideoViewer-Info', 'b-banner__content_direct', 'parentNode', 'bannerContainer', '/weather/', 'fromCharCode', 'root', '5IKSfOz', 'hideViaPositionProperty', 'script', 'div.feed\x20>\x20[id^=\x22zen-row-\x22]', '.content\x20>\x20.banner_js_inited', 'реклама', '#recommendations\x20>\x20div[class*=\x22_type_adfox\x22]', 'div-hidden-by-size', 'value', 'div[class^=\x22serp-adv__\x22]', 'div[class^=\x22mg-grid__col\x22]\x20div[class^=\x22neo-\x22][class$=\x22mg-grid__item_type_card\x22]', 'home', 'antialiased', 'test', 'geoadv', 'prototype', 'div[data-bem*=\x22adultDirectId\x22]', 'startsWith', '.sidebar-container\x20a[href*=\x22socialads\x22][target=\x22_parent\x22]', 'getAttribute', 'innerText', 'export', 'querySelectorAll', 'div.main\x20div', '/search/', '4792360MxUkac'];
                _0x3501 = function() {
                    return _0xbb601;
                };
                return _0x3501();
            }

            function _0xfb1d() {
                const _0x1aa498 = ['1364356FLURMI', '.mb-style-tag', '984074fZzuek', 'querySelectorAll', 'kinopoisk.ru', 'style[id]', 'visibility', 'sheet', 'length', '.page-content\x20>\x20div[id]:not([class])', '78244lgJnGQ', 'div[class^=\x22toaster-container\x22],\x20div[class*=\x22adBlockWarningRoot\x22]', 'iframe[hidefocus=\x22true\x22].yandex_music', '.kinopoisk-header-branding__image', 'rules', 'div[class$=\x22__sidebar-content\x22]\x20>\x20div[class][data-tid]\x20>\x20div[id][class$=\x22__container\x22]\x20>\x20div[id][class]:not([data-id])', ':scope\x20>\x20div[id][style]', '9HMcGTU', 'div[style*=\x22width\x22][style*=\x22height\x22][style*=\x22!important\x22]', '12121576ZDwYDV', '4257636srmhZM', 'selectorText', 'setEntries', '1086360Rsnzlg', 'querySelector', 'indexOf', 'style', '69kWgwYU', 'div[class^=\x22styles_themeTopBanner__\x22]\x20>\x20div[data-tid]\x20>\x20div[id][class]:not([data-tid])', '.kinopoisk-header-branding__link', 'div[id][class^=\x22styles_container__\x22]\x20>\x20div[id][class]:not([data-tid])', 'a[href*=\x22adblock.html\x22]', '1163440iddWgM', 'cssRules'];
                _0xfb1d = function() {
                    return _0x1aa498;
                };
                return _0xfb1d();
            }
            const _0x29cd91 = _0x142b;
            (function(_0x1ca80c, _0x4e6c26) {
                const _0x5bdd10 = _0x142b,
                    _0x51bd04 = _0x1ca80c();
                while (!![]) {
                    try {
                        const _0x38c1dc = -parseInt(_0x5bdd10(0xc7)) / 0x1 + -parseInt(_0x5bdd10(0xd4)) / 0x2 + parseInt(_0x5bdd10(0xcb)) / 0x3 * (-parseInt(_0x5bdd10(0xdc)) / 0x4) + parseInt(_0x5bdd10(0xd0)) / 0x5 + parseInt(_0x5bdd10(0xc4)) / 0x6 + parseInt(_0x5bdd10(0xd2)) / 0x7 + -parseInt(_0x5bdd10(0xc3)) / 0x8 * (-parseInt(_0x5bdd10(0xe3)) / 0x9);
                        if (_0x38c1dc === _0x4e6c26) break;
                        else _0x51bd04['push'](_0x51bd04['shift']());
                    } catch (_0x2d729c) {
                        _0x51bd04['push'](_0x51bd04['shift']());
                    }
                }
            }(_0xfb1d, 0x985e3));

            function _0x142b(_0x30036b, _0x5eff67) {
                const _0xfb1d27 = _0xfb1d();
                return _0x142b = function(_0x142b95, _0x302bdb) {
                    _0x142b95 = _0x142b95 - 0xc3;
                    let _0x34c327 = _0xfb1d27[_0x142b95];
                    return _0x34c327;
                }, _0x142b(_0x30036b, _0x5eff67);
            }

            function pageCallback$U() {
                const _0x453e33 = _0x142b,
                    _0x3d98a8 = () => {
                        const _0x172e06 = _0x142b,
                            _0x4fab34 = _0x51ea98[_0x172e06(0xc8)](_0x172e06(0xdd));
                        _0x4fab34 && _0x4fab34[_0x172e06(0xc8)](_0x172e06(0xcf)) && hideViaDisplayProperty(_0x4fab34);
                    },
                    _0x408e9e = () => {
                        const _0x29ad9b = _0x142b,
                            _0x4cdd08 = _0x51ea98['querySelectorAll'](_0x29ad9b(0xd7));
                        [..._0x4cdd08]['forEach'](_0x4425a1 => {
                            const _0x488efe = _0x29ad9b;
                            _0x4425a1[_0x488efe(0xd9)] && _0x4425a1[_0x488efe(0xd9)][_0x488efe(0xe0)]['length'] <= 0xa && removeNode(_0x4425a1);
                        }), iterateCSSRules(_0x4bf787 => {
                            const _0x27bdb2 = _0x29ad9b;
                            if (_0x4bf787[_0x27bdb2(0xc5)] && _0x4bf787[_0x27bdb2(0xc5)][_0x27bdb2(0xc9)](_0x27bdb2(0xcd)) === 0x0) hideViaDisplayProperty(_0x4bf787);
                            else _0x4bf787[_0x27bdb2(0xc5)] && _0x4bf787[_0x27bdb2(0xc5)][_0x27bdb2(0xc9)](_0x27bdb2(0xdf)) === 0x0 && (_0x4bf787[_0x27bdb2(0xca)][_0x27bdb2(0xd8)] = 'hidden');
                        }), [..._0x51ea98[_0x29ad9b(0xd5)](_0x29ad9b(0xdb))]['forEach'](_0x335f48 => {
                            const _0x2b6322 = _0x29ad9b;
                            _0x335f48[_0x2b6322(0xc8)](_0x2b6322(0xe2)) && removeNode(_0x335f48);
                        });
                    },
                    _0x127635 = () => {
                        const _0x5745df = _0x142b,
                            _0x5bc3b6 = _0x51ea98[_0x5745df(0xc8)](_0x5745df(0xd3));
                        if (!_0x5bc3b6 || !_0x5bc3b6[_0x5745df(0xd9)] || _0x5bc3b6['sheet']['cssRules']['length'] !== 0x1) return;
                        hideViaDisplayProperty(_0x5bc3b6[_0x5745df(0xd9)][_0x5745df(0xd1)][0x0]);
                    },
                    _0x3556f9 = () => {
                        const _0x4fa2fb = _0x142b,
                            _0x9dc884 = _0x51ea98[_0x4fa2fb(0xc8)]('div[id].media-post-embed');
                        if (!_0x9dc884) return;
                        const _0x3034ce = _0x9dc884[_0x4fa2fb(0xc8)]('div[style*=\x22absolute\x22]'),
                            _0x3f707d = _0x9dc884['querySelector'](_0x4fa2fb(0xde));
                        _0x3f707d && _0x3034ce && hideViaDisplayProperty(_0x9dc884);
                        const _0x58492f = _0x51ea98[_0x4fa2fb(0xd5)](_0x4fa2fb(0xe4));
                        if (_0x58492f[_0x4fa2fb(0xda)] === 0x2) {
                            const _0x3cfb45 = getParent(_0x58492f[0x0], 0x2);
                            hideViaDisplayProperty(_0x3cfb45);
                        }
                    },
                    _0x1b7e81 = () => {
                        const _0x28cb4b = _0x142b,
                            _0x49398a = _0x51ea98[_0x28cb4b(0xc8)](_0x28cb4b(0xe1));
                        _0x49398a && removeNode(_0x49398a);
                    },
                    _0x13ab1f = () => {
                        const _0x13119e = _0x142b,
                            _0x4925cb = _0x51ea98['querySelectorAll']('div[class*=\x22styles_rootRendered__\x22]\x20div[style=\x22min-width:1px\x22]\x20>\x20div[class][data-tid]');
                        [..._0x4925cb]['forEach'](_0x3b3676 => {
                            const _0x4f6e05 = _0x142b;
                            _0x3b3676[_0x4f6e05(0xc8)](_0x4f6e05(0xce)) && removeNode(_0x3b3676);
                        });
                        const _0x40d6ab = _0x51ea98['querySelector']('div[class^=\x22styles_rootWithBranding__\x22]\x20+\x20div\x20>\x20div[class^=\x22styles_abbreviated__\x22]'),
                            _0x27bf6a = _0x51ea98[_0x13119e(0xc8)](_0x13119e(0xcc));
                        _0x40d6ab && _0x27bf6a && removeNode(_0x40d6ab);
                    };
                removeFromShadowRoots(_0x453e33(0xe4), null, hideViaDisplayProperty), observeDomChanges(() => {
                    _0x3d98a8(), _0x408e9e(), _0x127635(), _0x3556f9(), _0x1b7e81(), _0x13ab1f();
                });
            }
            commonHosts[_0x29cd91(0xc6)]([_0x29cd91(0xd6)], pageCallback$U);
            const _0x54c7e9 = _0x2b06;
            (function(_0xd2f074, _0x442227) {
                const _0x55327b = _0x2b06,
                    _0xd55b79 = _0xd2f074();
                while (!![]) {
                    try {
                        const _0x7750cf = -parseInt(_0x55327b(0x200)) / 0x1 + -parseInt(_0x55327b(0x1f7)) / 0x2 * (-parseInt(_0x55327b(0x210)) / 0x3) + parseInt(_0x55327b(0x1f2)) / 0x4 * (-parseInt(_0x55327b(0x1f4)) / 0x5) + parseInt(_0x55327b(0x202)) / 0x6 * (-parseInt(_0x55327b(0x1f9)) / 0x7) + parseInt(_0x55327b(0x209)) / 0x8 * (parseInt(_0x55327b(0x20d)) / 0x9) + -parseInt(_0x55327b(0x1fd)) / 0xa * (-parseInt(_0x55327b(0x1fe)) / 0xb) + parseInt(_0x55327b(0x207)) / 0xc * (parseInt(_0x55327b(0x201)) / 0xd);
                        if (_0x7750cf === _0x442227) break;
                        else _0xd55b79['push'](_0xd55b79['shift']());
                    } catch (_0x22b821) {
                        _0xd55b79['push'](_0xd55b79['shift']());
                    }
                }
            }(_0x4a64, 0x30337));

            function _0x4a64() {
                const _0x4a99e9 = ['length', 'ns-view-right-box', 'mail.yandex.ua', 'querySelectorAll', 'nextElementSibling', 'mail.yandex.lt', '4fXzkon', 'ns-view-', '24365JEFoNy', 'advblock', '.ns-view-infoline-box', '31202joqzIi', 'mail.yandex.md', '19075FgKPZk', 'mail.yandex.ee', 'querySelector', 'textContent', '468970UmAzUv', '55ulkmTw', 'setEntries', '337359VtkuXr', '17095AINYYT', '186RDsCZB', 'classList', 'div[style*=\x22width:\x20100%\x22]', '.mail-DirectLine\x20', 'a[href]', '2148wzbWOO', 'startsWith', '48232tUaGYz', 'mail.yandex.kg', 'forEach', 'Отключить\x20рекламу', '207MqIDRE', 'includes', 'mail.yandex.kz', '3RFxSOK', 'parentNode', '.mail-Layout-Content\x20>\x20[data-key*=\x22box\x22]', 'Скрыть\x20рекламу', 'mail.yandex.by', 'document', '.mail-Layout-Aside\x20.mail-Layout-Aside-Inner-Box\x20>\x20div[class^=\x22ns-view-\x22]', '.mail-Layout-Aside\x20iframe', '.mail-DirectLinePlaceholder', 'response'];
                _0x4a64 = function() {
                    return _0x4a99e9;
                };
                return _0x4a64();
            }

            function _0x2b06(_0x761a41, _0x539f00) {
                const _0x4a6423 = _0x4a64();
                return _0x2b06 = function(_0x2b0649, _0x560158) {
                    _0x2b0649 = _0x2b0649 - 0x1eb;
                    let _0x3c0a55 = _0x4a6423[_0x2b0649];
                    return _0x3c0a55;
                }, _0x2b06(_0x761a41, _0x539f00);
            }

            function pageCallback$T() {
                const _0xd71de = () => {
                        const _0x18ad3d = _0x2b06,
                            _0x1bb496 = _0x51ea98[_0x18ad3d(0x215)]['querySelector'](_0x18ad3d(0x1f6));
                        if (!_0x1bb496) return;
                        const _0x49ccf9 = _0x1bb496[_0x18ad3d(0x1f0)];
                        _0x49ccf9 && _0x49ccf9['nextElementSibling'] && _0x49ccf9[_0x18ad3d(0x1f0)][_0x18ad3d(0x203)][0x0] === _0x18ad3d(0x1ed) && hideViaPositionProperty(_0x49ccf9);
                    },
                    _0x5644f8 = () => {
                        const _0x20c2c3 = _0x2b06,
                            _0xa41250 = _0x51ea98[_0x20c2c3(0x215)][_0x20c2c3(0x1fb)](_0x20c2c3(0x218));
                        if (!_0xa41250) {
                            _0xd71de();
                            return;
                        }
                        hideViaPositionProperty(_0xa41250);
                    },
                    _0x1be87c = () => {
                        const _0x26fae4 = _0x2b06,
                            _0x57a567 = _0x51ea98[_0x26fae4(0x1ef)](_0x26fae4(0x212));
                        [..._0x57a567][_0x26fae4(0x20b)](_0x498ea4 => {
                            const _0x2605ee = _0x26fae4;
                            _0x498ea4[_0x2605ee(0x1fb)](_0x2605ee(0x205)) && hideViaPositionProperty(_0x498ea4);
                        });
                    },
                    _0x1fba3d = () => {
                        const _0x411229 = _0x2b06;
                        var _0x59446d;
                        const _0x50b3e7 = document[_0x411229(0x1fb)](_0x411229(0x217));
                        if (!_0x50b3e7) return;
                        const _0x166368 = (_0x59446d = _0x50b3e7[_0x411229(0x211)]) === null || _0x59446d === void 0x0 ? void 0x0 : _0x59446d[_0x411229(0x211)];
                        _0x166368 && _0x166368[_0x411229(0x203)][_0x411229(0x1ec)] > 0x0 && !_0x166368['classList'][0x0][_0x411229(0x208)](_0x411229(0x1f3)) && hideViaPositionProperty(_0x166368);
                    },
                    _0x2277a9 = () => {
                        const _0x2ffd34 = _0x2b06,
                            _0x21d285 = _0x51ea98[_0x2ffd34(0x1ef)](_0x2ffd34(0x216));
                        _0x21d285 && [..._0x21d285][_0x2ffd34(0x20b)](_0x33f4f1 => {
                            const _0x2e840b = _0x2ffd34;
                            _0x33f4f1 && !_0x33f4f1[_0x2e840b(0x1fb)](_0x2e840b(0x206)) && _0x33f4f1[_0x2e840b(0x1fb)](_0x2e840b(0x204)) && removeNode(_0x33f4f1), _0x33f4f1 && (_0x33f4f1 !== null && _0x33f4f1 !== void 0x0 && _0x33f4f1['textContent']['includes'](_0x2e840b(0x20c)) || _0x33f4f1 !== null && _0x33f4f1 !== void 0x0 && _0x33f4f1[_0x2e840b(0x1fc)][_0x2e840b(0x20e)](_0x2e840b(0x213))) && removeNode(_0x33f4f1 === null || _0x33f4f1 === void 0x0 ? void 0x0 : _0x33f4f1['nextElementSibling']);
                        });
                        const _0x218dcd = _0x51ea98[_0x2ffd34(0x215)][_0x2ffd34(0x1fb)]('.ComposeDoneDirect');
                        _0x218dcd && hideViaPositionProperty(_0x218dcd);
                    },
                    _0x3743e4 = _0x304b4f => {
                        const _0x39fe03 = _0x2b06;
                        if (_0x304b4f[_0x39fe03(0x1eb)][_0x39fe03(0x20e)]('adreasons.yandex-team.ru')) return !![];
                        if (_0x304b4f[_0x39fe03(0x1eb)][_0x39fe03(0x20e)](_0x39fe03(0x1f5))) return !![];
                        return ![];
                    };
                preventXHR(_0x3743e4), observeDomChanges(() => {
                    _0x1be87c(), _0x5644f8(), _0x1fba3d(), _0x2277a9();
                });
            }
            commonHosts[_0x54c7e9(0x1ff)](['mail.yandex.ru', _0x54c7e9(0x20f), _0x54c7e9(0x214), _0x54c7e9(0x1ee), _0x54c7e9(0x1f8), 'mail.yandex.com.tr', 'mail.yandex.com', 'mail.yandex.fr', _0x54c7e9(0x1fa), _0x54c7e9(0x20a), 'mail.yandex.lv', _0x54c7e9(0x1f1)], pageCallback$T);

            function _0x6460() {
                const _0xf60e05 = ['8876457mShPRD', '3UeeLDj', 'YaBrowser', 'match', 'querySelectorAll', 'values', 'props', '[class*=\x22js_inited\x22].i-react.i-bem', 'div.i-react.i-bem', '.top-branding-holder,\x20.adfox_type_branding', '54906trFgvB', 'afisha.yandex.kz', '.yabs_type_banners', 'afisha.yandex.ua', '305382DWKfwK', 'document', 'length', '.rubric-type-landing\x20>\x20div[class*=\x22afisha-profit\x22]', '.grid__inner\x20>\x20div[class*=\x22afisha-profit_\x22][class*=\x22content-event-emotional__\x22]', 'getAttributeNames', 'parse', 'div[data-bem*=\x22metrikaEntry\x22][data-bem*=\x22R-A-\x22]', '[id^=\x22adfox-\x22]', 'forEach', '11067192GzexUP', 'a[data-bem][target=\x22_blank\x22]', '[data-banner-id^=\x22R-A-\x22]', 'new_advertising', '[data-component=\x22EventContentTouch\x22]\x20>\x20div[class^=\x22Item-sc-\x22]', 'userAgent', 'getAttribute', 'iframe[hidefocus=\x22true\x22]', 'querySelector', '6318515xjebBx', '2119616anKaFY', 'includes', 'afisha.yandex.by', '156WhtmSj', '.grid__inner\x20>\x20div.grid__margin-right\x20>\x20div.grid__sidebar_type_cinema', 'afisha.yandex.ru', '836694PUoirF'];
                _0x6460 = function() {
                    return _0xf60e05;
                };
                return _0x6460();
            }
            const _0x10701b = _0x5cf3;
            (function(_0x2ab221, _0x366ea5) {
                const _0x26dffd = _0x5cf3,
                    _0x1cee9d = _0x2ab221();
                while (!![]) {
                    try {
                        const _0x522e59 = -parseInt(_0x26dffd(0x11a)) / 0x1 * (-parseInt(_0x26dffd(0x118)) / 0x2) + -parseInt(_0x26dffd(0x123)) / 0x3 + -parseInt(_0x26dffd(0x112)) / 0x4 + parseInt(_0x26dffd(0x111)) / 0x5 + -parseInt(_0x26dffd(0x115)) / 0x6 * (-parseInt(_0x26dffd(0x127)) / 0x7) + -parseInt(_0x26dffd(0x108)) / 0x8 + -parseInt(_0x26dffd(0x119)) / 0x9;
                        if (_0x522e59 === _0x366ea5) break;
                        else _0x1cee9d['push'](_0x1cee9d['shift']());
                    } catch (_0x4bab1c) {
                        _0x1cee9d['push'](_0x1cee9d['shift']());
                    }
                }
            }(_0x6460, 0xb37a6));

            function pageCallback$S() {
                const _0x3ed96c = () => {
                        const _0x4dc417 = _0x5cf3,
                            _0x14ad17 = document[_0x4dc417(0x11d)](_0x4dc417(0x12e));
                        _0x14ad17['forEach'](_0x6086bc => {
                            hideViaPositionProperty(_0x6086bc);
                        });
                    },
                    _0x16d272 = () => {
                        const _0x11383a = _0x5cf3,
                            _0x3b7a65 = document[_0x11383a(0x110)](_0x11383a(0x125));
                        _0x3b7a65 && _0x3b7a65[_0x11383a(0x110)](_0x11383a(0x109)) && hideViaPositionProperty(_0x3b7a65);
                    },
                    _0x48acdc = () => {
                        const _0x3f52a8 = _0x5cf3;
                        if (navigator[_0x3f52a8(0x10d)][_0x3f52a8(0x11c)](_0x3f52a8(0x11b))) {
                            const _0x23ab37 = _0x51ea98['querySelector'](_0x3f52a8(0x12b));
                            _0x23ab37 && hideViaPositionProperty(_0x23ab37);
                            const _0x4dee28 = _0x51ea98[_0x3f52a8(0x110)](_0x3f52a8(0x116));
                            _0x4dee28 && _0x4dee28[_0x3f52a8(0x110)]('[id^=\x22ya_partner_R-A-\x22]') && hideViaPositionProperty(_0x4dee28);
                            const _0xbfaa43 = _0x51ea98[_0x3f52a8(0x110)](_0x3f52a8(0x12a));
                            _0xbfaa43 && hideViaPositionProperty(_0xbfaa43);
                            const _0x474f7e = _0x51ea98[_0x3f52a8(0x128)]['querySelectorAll'](_0x3f52a8(0x122));
                            [..._0x474f7e][_0x3f52a8(0x107)](_0x4531b8 => {
                                hideViaPositionProperty(_0x4531b8);
                            });
                        }
                    },
                    _0x2b8b7a = () => {
                        const _0x49c11c = _0x5cf3;
                        if (isMobile()) {
                            const _0x124d25 = _0x51ea98['document'][_0x49c11c(0x110)]('[class^=\x22WrapperAdfoxContainer-\x22]');
                            _0x124d25 && removeNode(_0x124d25);
                        }
                    },
                    _0x277ae8 = () => {
                        const _0x2441a2 = _0x5cf3;
                        if (isMobile()) {
                            const _0x4f03f5 = _0x51ea98[_0x2441a2(0x110)](_0x2441a2(0x10c));
                            _0x4f03f5 && _0x4f03f5[_0x2441a2(0x110)](_0x2441a2(0x106)) && removeNode(_0x4f03f5);
                        }
                    },
                    _0x588a58 = () => {
                        const _0x9d8e2b = _0x5cf3;
                        if (isMobile()) {
                            const _0xd86cca = _0x51ea98[_0x9d8e2b(0x128)][_0x9d8e2b(0x110)](_0x9d8e2b(0x10a));
                            _0xd86cca && removeNode(_0xd86cca);
                        }
                    },
                    _0x2d6507 = () => {
                        const _0x2dc4c8 = _0x5cf3,
                            _0x83aceb = _0x51ea98[_0x2dc4c8(0x11d)](_0x2dc4c8(0x121)),
                            _0x5134a4 = [..._0x83aceb]['filter'](_0x1279ab => {
                                const _0x529161 = _0x2dc4c8,
                                    _0x587d6f = _0x1279ab[_0x529161(0x12c)]();
                                return _0x587d6f['some'](_0x4c58a5 => {
                                    const _0x35d6cb = _0x529161;
                                    let _0x461bee;
                                    try {
                                        _0x461bee = JSON[_0x35d6cb(0x12d)](_0x1279ab[_0x35d6cb(0x10e)](_0x4c58a5));
                                    } catch (_0x2ec310) {
                                        return ![];
                                    }
                                    const _0x50b6dd = Object[_0x35d6cb(0x11e)](_0x461bee)[0x0];
                                    if (!_0x50b6dd[_0x35d6cb(0x11f)]) return ![];
                                    const {
                                        metrikaEntry: _0x4db337,
                                        title: _0x5b15a4,
                                        activeType: _0x51fbb8
                                    } = _0x50b6dd[_0x35d6cb(0x11f)];
                                    if (!_0x4db337 || Array['isArray'](_0x4db337)) return ![];
                                    const {
                                        context: _0x1b6384,
                                        params: _0x1333f8
                                    } = _0x4db337;
                                    if (!_0x5b15a4 && !_0x51fbb8 && (_0x1b6384 === null || _0x1b6384 === void 0x0 ? void 0x0 : _0x1b6384[_0x35d6cb(0x129)]) > 0x2 && _0x1333f8) return !![];
                                    return ![];
                                });
                            });
                        _0x5134a4[_0x2dc4c8(0x107)](_0x184084 => hideViaPositionProperty(_0x184084));
                    },
                    _0x4d0bb7 = () => {
                        const _0x242d8f = _0x5cf3,
                            _0x428be9 = _0x51ea98['querySelectorAll'](_0x242d8f(0x120));
                        [..._0x428be9][_0x242d8f(0x107)](_0x1ff9ef => {
                            const _0xdd913c = _0x242d8f,
                                _0x1c4289 = _0x1ff9ef['getAttributeNames'](),
                                _0x1e36d8 = _0x1ff9ef[_0xdd913c(0x110)](_0xdd913c(0x10f));
                            if (!_0x1e36d8) return;
                            let _0x4f869e = ![];
                            for (let _0x85261a = 0x0, _0x4024dc = _0x1c4289[_0xdd913c(0x129)]; _0x85261a < _0x4024dc; _0x85261a += 0x1) {
                                const _0x2f1829 = _0x1ff9ef[_0xdd913c(0x10e)](_0x1c4289[_0x85261a]);
                                if (_0x2f1829['includes']('adv_scripts_placement') || _0x2f1829[_0xdd913c(0x113)](_0xdd913c(0x10b))) {
                                    _0x4f869e = !![];
                                    break;
                                }
                            }
                            _0x4f869e && _0x1e36d8 && hideViaPositionProperty(_0x1ff9ef);
                        });
                    };
                observeDomChanges(() => {
                    _0x3ed96c(), _0x16d272(), _0x48acdc(), _0x2b8b7a(), _0x277ae8(), _0x588a58(), _0x2d6507(), _0x4d0bb7();
                });
            }

            function _0x5cf3(_0x22e694, _0x5ed97a) {
                const _0x646081 = _0x6460();
                return _0x5cf3 = function(_0x5cf369, _0x3f4e4b) {
                    _0x5cf369 = _0x5cf369 - 0x106;
                    let _0x1c7c45 = _0x646081[_0x5cf369];
                    return _0x1c7c45;
                }, _0x5cf3(_0x22e694, _0x5ed97a);
            }
            commonHosts['setEntries']([_0x10701b(0x117), _0x10701b(0x114), _0x10701b(0x126), _0x10701b(0x124), 'afisha.yandex.md'], pageCallback$S);
            const _0x11e8bf = _0x2302;
            (function(_0x4f90eb, _0x247e02) {
                const _0x502b53 = _0x2302,
                    _0x166753 = _0x4f90eb();
                while (!![]) {
                    try {
                        const _0x4a75e6 = parseInt(_0x502b53(0x16b)) / 0x1 * (parseInt(_0x502b53(0x170)) / 0x2) + parseInt(_0x502b53(0x151)) / 0x3 + -parseInt(_0x502b53(0x158)) / 0x4 + parseInt(_0x502b53(0x167)) / 0x5 * (parseInt(_0x502b53(0x16e)) / 0x6) + -parseInt(_0x502b53(0x16c)) / 0x7 + parseInt(_0x502b53(0x16a)) / 0x8 * (parseInt(_0x502b53(0x155)) / 0x9) + parseInt(_0x502b53(0x154)) / 0xa;
                        if (_0x4a75e6 === _0x247e02) break;
                        else _0x166753['push'](_0x166753['shift']());
                    } catch (_0x1d26d2) {
                        _0x166753['push'](_0x166753['shift']());
                    }
                }
            }(_0x2474, 0xee882));

            function _0x2302(_0x11ca5d, _0x42b4b8) {
                const _0x247494 = _0x2474();
                return _0x2302 = function(_0x2302f8, _0x2b2c8e) {
                    _0x2302f8 = _0x2302f8 - 0x147;
                    let _0x1375e6 = _0x247494[_0x2302f8];
                    return _0x1375e6;
                }, _0x2302(_0x11ca5d, _0x42b4b8);
            }

            function pageCallback$R() {
                const _0x2b553e = _0x2302,
                    _0x3ad5e8 = _0x1dd5c5 => {
                        const _0x23dafa = _0x2302;
                        var _0x9ce1ec;
                        const _0x1fd872 = _0x1dd5c5 === null || _0x1dd5c5 === void 0x0 ? void 0x0 : (_0x9ce1ec = _0x1dd5c5[_0x23dafa(0x168)]) === null || _0x9ce1ec === void 0x0 ? void 0x0 : _0x9ce1ec[_0x23dafa(0x161)];
                        if (!_0x1fd872) return;
                        [..._0x1fd872][_0x23dafa(0x15a)](_0xfee9c => {
                            const _0x1233e2 = _0x23dafa;
                            if (_0xfee9c['endsWith'](_0x1233e2(0x169))) {
                                const _0x771fe5 = _0x51ea98[_0x1233e2(0x149)][_0x1233e2(0x160)](_0xfee9c);
                                [..._0x771fe5][_0x1233e2(0x15a)](_0xa38c2b => {
                                    hideViaPositionProperty(_0xa38c2b);
                                });
                            }
                        });
                    },
                    _0x17aaca = () => {
                        const _0x37aa26 = _0x2302;
                        var _0x1c7051;
                        const _0x338edb = _0x2a7849 => {
                                const _0x34e633 = _0x2302;
                                if (!_0x2a7849) return;
                                const _0x3a59e3 = [..._0x2a7849[_0x34e633(0x14d)]][_0x34e633(0x14f)](_0x52210b => {
                                    const {
                                        nodeValue: _0x47cc59,
                                        textContent: _0x2efcdc,
                                        value: _0x5e5e55
                                    } = _0x52210b, _0x5cfea4 = _0x47cc59 || _0x2efcdc || _0x5e5e55;
                                    return _0x5cfea4['length'] > 0x9c4;
                                });
                                _0x3a59e3 && hideViaPositionProperty(_0x2a7849);
                            },
                            _0x287642 = _0x51ea98[_0x37aa26(0x163)](_0x37aa26(0x15e)),
                            _0x42efde = _0x287642 === null || _0x287642 === void 0x0 ? void 0x0 : _0x287642[_0x37aa26(0x164)];
                        _0x42efde !== null && _0x42efde !== void 0x0 && (_0x1c7051 = _0x42efde[_0x37aa26(0x168)]) !== null && _0x1c7051 !== void 0x0 && _0x1c7051[_0x37aa26(0x153)][_0x37aa26(0x156)]('__wrapper') && hideViaPositionProperty(_0x42efde);
                        const _0x410179 = [_0x51ea98[_0x37aa26(0x163)](_0x37aa26(0x14c)), _0x51ea98['querySelector']('[class$=\x22_hidden\x22]\x20>\x20div:first-child')];
                        _0x410179[_0x37aa26(0x15a)](_0x338edb);
                    },
                    _0x337be5 = () => {
                        const _0x4bbe26 = _0x2302;
                        var _0x849760;
                        const _0x4112fe = _0x51ea98['document'][_0x4bbe26(0x163)](_0x4bbe26(0x15d)),
                            _0x3e6f9a = _0x4112fe === null || _0x4112fe === void 0x0 ? void 0x0 : _0x4112fe[_0x4bbe26(0x164)];
                        _0x3e6f9a !== null && _0x3e6f9a !== void 0x0 && (_0x849760 = _0x3e6f9a[_0x4bbe26(0x162)]) !== null && _0x849760 !== void 0x0 && _0x849760[_0x4bbe26(0x15f)] && _0x3e6f9a !== null && _0x3e6f9a !== void 0x0 && _0x3e6f9a[_0x4bbe26(0x163)]('a[target=\x22_blank\x22]') && hideViaPositionProperty(_0x3e6f9a);
                    },
                    _0x5bc258 = () => {
                        const _0x49c12e = _0x2302;
                        try {
                            const _0xcf9be4 = _0x51ea98[_0x49c12e(0x149)]['querySelectorAll'](_0x49c12e(0x14a)),
                                _0x11b518 = [..._0xcf9be4][_0x49c12e(0x148)](_0x40539b => {
                                    const _0x5a64d2 = _0x49c12e,
                                        _0x3cc00e = getComputedStyle(_0x40539b)[_0x5a64d2(0x14b)];
                                    return _0x3cc00e === _0x5a64d2(0x152) || _0x3cc00e === _0x5a64d2(0x16d);
                                });
                            [..._0x11b518]['forEach'](_0x21f4e8 => {
                                hideViaPositionProperty(_0x21f4e8), _0x3ad5e8(_0x21f4e8);
                            });
                        } catch (_0x31b810) {}
                    },
                    _0x37dc49 = () => {
                        const _0x2d26b8 = _0x2302,
                            _0x405975 = _0x51ea98[_0x2d26b8(0x150)]('div[class*=\x22channel-controller__\x22]\x20>\x20div[class]:not([class*=\x22channel\x22])\x20>\x20div[class][id]');
                        _0x405975['length'] === 0x1 && hideViaPositionProperty(_0x405975[0x0]);
                        const _0x242ce2 = _0x51ea98[_0x2d26b8(0x150)]('div[class^=\x22content__\x22]\x20>\x20div[class$=\x22__wrapper\x22]\x20>\x20div[class][id]');
                        _0x242ce2[_0x2d26b8(0x166)] === 0x1 && hideViaPositionProperty(_0x242ce2[0x0]);
                    },
                    _0x3175d2 = () => {
                        const _0x1c7aff = _0x2302,
                            _0x22852b = _0x51ea98[_0x1c7aff(0x150)](_0x1c7aff(0x14e));
                        _0x22852b[_0x1c7aff(0x166)] === 0x2 && hideViaPositionProperty(_0x22852b[0x0]);
                    };
                preventXHR(_0x44c306 => {
                    const _0x1de47d = _0x2302,
                        {
                            responseText: _0x4e2b5b,
                            withCredentials: _0xcc7d3f
                        } = _0x44c306;
                    return _0xcc7d3f && _0x4e2b5b[_0x1de47d(0x165)]('advblock');
                }), removeFromShadowRoots(_0x2b553e(0x147), _0x26fbd1 => {
                    const _0x452f07 = _0x2b553e;
                    var _0x329938;
                    return !((_0x329938 = _0x26fbd1['nextElementSibling']) !== null && _0x329938 !== void 0x0 && _0x329938[_0x452f07(0x157)]('[type=\x22text/css\x22][nonce]'));
                }), observeDomChanges(() => {
                    _0x5bc258(), _0x17aaca(), _0x337be5(), _0x37dc49(), _0x3175d2();
                });
            }

            function _0x2474() {
                const _0x437377 = ['style', 'querySelector', 'previousElementSibling', 'includes', 'length', '4525ycBKKX', 'firstElementChild', '__wrapper', '16iKWEVR', '18835TsanNs', '13475756nMlqFY', 'wide', '10866Sicbtt', 'tv.yandex.ru', '2LryVgP', 'div:first-child', 'filter', 'document', '[class^=\x22grid__\x22]', 'grid-row-start', 'div:first-child\x20>\x20div:first-child', 'attributes', 'div[class^=\x22content__\x22]\x20>\x20div[class*=\x22__wrapper\x22]\x20>\x20div[class][id]', 'some', 'querySelectorAll', '2232111TJTMyK', 'adv', 'className', '2561670gYbJEm', '2894616tNCFYE', 'endsWith', 'matches', '1596432kEAlrH', 'tv.yandex.ua', 'forEach', 'tv.yandex.md', 'tv.yandex.kz', '.content__header', 'header', 'backgroundImage', 'getElementsByClassName', 'classList'];
                _0x2474 = function() {
                    return _0x437377;
                };
                return _0x2474();
            }
            commonHosts['setEntries']([_0x11e8bf(0x16f), _0x11e8bf(0x15c), 'tv.yandex.by', _0x11e8bf(0x159), _0x11e8bf(0x15b)], pageCallback$R);
            const _0x1abc4d = _0x14f4;
            (function(_0x434211, _0x1e9730) {
                const _0x5634ee = _0x14f4,
                    _0x50cea3 = _0x434211();
                while (!![]) {
                    try {
                        const _0x357fed = parseInt(_0x5634ee(0x14f)) / 0x1 + -parseInt(_0x5634ee(0x178)) / 0x2 + -parseInt(_0x5634ee(0x14e)) / 0x3 * (parseInt(_0x5634ee(0x158)) / 0x4) + parseInt(_0x5634ee(0x15c)) / 0x5 * (-parseInt(_0x5634ee(0x175)) / 0x6) + -parseInt(_0x5634ee(0x166)) / 0x7 * (parseInt(_0x5634ee(0x173)) / 0x8) + parseInt(_0x5634ee(0x164)) / 0x9 * (parseInt(_0x5634ee(0x15a)) / 0xa) + parseInt(_0x5634ee(0x133)) / 0xb;
                        if (_0x357fed === _0x1e9730) break;
                        else _0x50cea3['push'](_0x50cea3['shift']());
                    } catch (_0xa9780a) {
                        _0x50cea3['push'](_0x50cea3['shift']());
                    }
                }
            }(_0x15d8, 0xdef77));

            function pageCallback$Q() {
                const _0x4fed34 = _0x14f4,
                    {
                        hostname: _0x269453,
                        pathname: _0x143d1f
                    } = _0x51ea98[_0x4fed34(0x17a)];
                if (_0x269453 === _0x4fed34(0x154) || _0x269453 === _0x4fed34(0x144)) {
                    preventXHR(_0x5d95ee => _0x5d95ee[_0x4fed34(0x139)][_0x4fed34(0x160)]('puny_domain'));
                    !isMobile() && removeFromShadowRoots(_0x4fed34(0x171));
                    const _0x14399d = () => {
                            const _0x89a35a = _0x4fed34,
                                _0x311f64 = _0x51ea98[_0x89a35a(0x13a)](_0x89a35a(0x13f));
                            _0x311f64 && _0x311f64[_0x89a35a(0x176)]['length'] !== 0x1 && hideViaPositionProperty(_0x311f64);
                        },
                        _0x233851 = () => {
                            const _0x7c870c = _0x4fed34,
                                _0x256f00 = _0x51ea98[_0x7c870c(0x16f)](_0x7c870c(0x134));
                            [..._0x256f00]['forEach'](_0x4f3831 => {
                                const _0x492e21 = _0x7c870c;
                                _0x4f3831[_0x492e21(0x13a)](_0x492e21(0x14c)) && hideViaPositionProperty(_0x4f3831);
                            });
                            const _0x51e852 = _0x51ea98['querySelector']('.b-layout_main\x20>\x20div.b-layout__col\x20>\x20div:last-child:not([id])');
                            _0x51e852 && !_0x51e852[_0x7c870c(0x13a)](_0x7c870c(0x13b)) && hideViaPositionProperty(_0x51e852);
                        },
                        _0x513ed3 = () => {
                            const _0x3cc3c2 = _0x4fed34,
                                _0x64e38f = _0x51ea98[_0x3cc3c2(0x13a)](_0x3cc3c2(0x16b));
                            if (!_0x64e38f) return;
                            const _0x2f5fc9 = [..._0x64e38f['children']][_0x3cc3c2(0x13e)](_0x426cbe => (!isMobile() || _0x426cbe[_0x3cc3c2(0x13a)]('div[class*=\x22adv\x22]')) && _0x426cbe[_0x3cc3c2(0x146)] === _0x3cc3c2(0x132) && _0x51ea98[_0x3cc3c2(0x179)](_0x426cbe, _0x3cc3c2(0x13c)) && getComputedStyle(_0x426cbe)['height'] !== _0x3cc3c2(0x137));
                            if (!_0x2f5fc9) return;
                            const {
                                height: _0x31b4c1
                            } = getComputedStyle(_0x2f5fc9);
                            hideViaPositionProperty(_0x2f5fc9), _0x64e38f[_0x3cc3c2(0x13c)][_0x3cc3c2(0x135)] += _0x3cc3c2(0x138) + _0x31b4c1 + _0x3cc3c2(0x149);
                        },
                        _0x3d2d10 = () => {
                            const _0x3e28ca = _0x4fed34,
                                _0x56e3b8 = _0x51ea98[_0x3e28ca(0x13a)]('.only-new-toolbar');
                            if (!_0x56e3b8 || !_0x56e3b8[_0x3e28ca(0x136)]) return;
                            const {
                                childElementCount: _0xf06478
                            } = _0x56e3b8[_0x3e28ca(0x136)], {
                                previousElementSibling: _0x4f5311
                            } = _0x56e3b8;
                            if (!_0x4f5311 || _0xf06478 !== 0x4) return;
                            hideViaPositionProperty(_0x4f5311);
                        };
                    observeDomChanges(() => {
                        _0x233851(), _0x14399d(), _0x513ed3(), !isMobile() && _0x3d2d10();
                    });
                }
                if (_0x269453 === 'go.mail.ru' && _0x143d1f === _0x4fed34(0x130)) {
                    const _0x5682fb = () => {
                        const _0x522d16 = _0x4fed34,
                            _0xd2665d = _0x51ea98[_0x522d16(0x13a)](_0x522d16(0x14d));
                        _0xd2665d && hideViaDisplayProperty(_0xd2665d);
                    };
                    observeDomChanges(() => {
                        _0x5682fb();
                    });
                }
                if (_0x269453 === 'mail.ru' && _0x143d1f === '/') {
                    const _0x3c0f53 = () => {
                            const _0x48e9bb = _0x4fed34,
                                _0x26b822 = _0x51ea98[_0x48e9bb(0x16f)](_0x48e9bb(0x16d));
                            [..._0x26b822]['forEach'](_0x40769d => {
                                const _0x1f95d3 = _0x48e9bb,
                                    _0x17d9a5 = _0x40769d[_0x1f95d3(0x156)]['parentNode'][_0x1f95d3(0x156)][_0x1f95d3(0x156)][_0x1f95d3(0x156)];
                                _0x17d9a5 && _0x40769d[_0x1f95d3(0x150)] === _0x1f95d3(0x148) && _0x17d9a5['id']['startsWith'](_0x1f95d3(0x145)) && hideViaDisplayProperty(_0x17d9a5);
                            });
                            const _0x325981 = _0x51ea98[_0x48e9bb(0x16f)](_0x48e9bb(0x165));
                            [..._0x325981][_0x48e9bb(0x155)](_0x147e90 => {
                                const _0x3fb92a = _0x48e9bb;
                                _0x147e90[_0x3fb92a(0x13a)](_0x3fb92a(0x13d)) && hideViaDisplayProperty(_0x147e90);
                            });
                        },
                        _0x491243 = () => {
                            const _0x6359a1 = _0x4fed34;
                            var _0x8a57e7;
                            const _0x4df684 = _0x51ea98[_0x6359a1(0x13a)](_0x6359a1(0x14a)),
                                _0x25641a = _0x4df684 === null || _0x4df684 === void 0x0 ? void 0x0 : (_0x8a57e7 = _0x4df684[_0x6359a1(0x136)]) === null || _0x8a57e7 === void 0x0 ? void 0x0 : _0x8a57e7[_0x6359a1(0x162)];
                            _0x25641a && [..._0x25641a][_0x6359a1(0x155)](_0x29380a => {
                                const _0x96d1bd = _0x6359a1;
                                _0x29380a[_0x96d1bd(0x13a)]('div[data-mnemo]') && hideViaDisplayProperty(_0x29380a);
                            });
                            const _0x12368d = _0x51ea98[_0x6359a1(0x13a)]('div[data-bem]\x20>\x20div\x20>\x20div[data-testid=\x22search-container\x22]\x20+\x20div.stripe-wrapper');
                            _0x12368d && hideViaDisplayProperty(_0x12368d);
                        },
                        _0x5a2f9b = () => {
                            const _0x9bb379 = _0x4fed34,
                                _0x17dad3 = _0x51ea98[_0x9bb379(0x13a)](_0x9bb379(0x15d)) || _0x51ea98[_0x9bb379(0x13a)]('.tabs'),
                                _0x533438 = _0x17dad3 === null || _0x17dad3 === void 0x0 ? void 0x0 : _0x17dad3[_0x9bb379(0x140)];
                            if (!_0x533438) return;
                            const _0x5b5bbe = [_0x9bb379(0x142), _0x9bb379(0x168), _0x9bb379(0x148), _0x9bb379(0x163)],
                                {
                                    innerHTML: _0x26a1f5
                                } = _0x533438,
                                _0x283eb7 = _0x5b5bbe[_0x9bb379(0x15e)](_0x25b29b => _0x26a1f5[_0x9bb379(0x160)](_0x25b29b));
                            !_0x533438[_0x9bb379(0x13a)](_0x9bb379(0x172)) && _0x283eb7 && hideViaPositionProperty(_0x533438);
                        };
                    removeScripts(/Honeypot/), observeDomChanges(() => {
                        _0x3c0f53(), _0x491243(), _0x5a2f9b();
                    });
                }
                if (_0x269453 === _0x4fed34(0x151) && _0x143d1f[_0x4fed34(0x152)](_0x4fed34(0x15b))) {
                    const _0x4096f1 = () => {
                        const _0x5a9ed7 = _0x4fed34,
                            _0x1d9e38 = _0x51ea98[_0x5a9ed7(0x16f)]('[data-testid=\x22pulse-card\x22]');
                        [..._0x1d9e38][_0x5a9ed7(0x155)](_0x6936e4 => {
                            const _0x1b01e6 = _0x5a9ed7;
                            _0x6936e4[_0x1b01e6(0x13a)](_0x1b01e6(0x13d)) && hideViaDisplayProperty(_0x6936e4);
                        });
                    };
                    observeDomChanges(() => {
                        _0x4096f1();
                    });
                }
                if (_0x269453 === _0x4fed34(0x143)) {
                    const _0x37c545 = () => {
                            const _0xe66f1d = _0x4fed34,
                                _0x58f843 = _0x51ea98[_0xe66f1d(0x13a)](_0xe66f1d(0x15f));
                            _0x58f843 && _0x58f843[_0xe66f1d(0x176)][_0xe66f1d(0x177)] === 0x1 && _0x58f843['innerText'][_0xe66f1d(0x160)](_0xe66f1d(0x148)) && hideViaPositionProperty(_0x58f843);
                        },
                        _0x10406e = _0x4ad29d => {
                            const _0x301b09 = _0x4fed34;
                            if (_0x4ad29d[_0x301b09(0x139)]['includes'](_0x301b09(0x159))) return !![];
                            return ![];
                        };
                    preventXHR(_0x10406e), observeDomChanges(() => {
                        _0x37c545();
                    });
                }
                if (_0x269453 === _0x4fed34(0x157)) {
                    const _0xd04b43 = () => {
                            const _0x3abc2b = _0x4fed34,
                                _0x4f41e8 = _0x51ea98[_0x3abc2b(0x13a)](_0x3abc2b(0x16a));
                            if (!_0x4f41e8) return;
                            const _0x52b143 = _0x4f41e8[_0x3abc2b(0x13a)](_0x3abc2b(0x14b));
                            _0x52b143 && hideViaDisplayProperty(_0x52b143);
                            const _0x101a73 = document[_0x3abc2b(0x13a)](_0x3abc2b(0x141));
                            _0x101a73 && _0x101a73['childElementCount'] === 0x0 && hideViaDisplayProperty(_0x52b143);
                        },
                        _0x11770c = () => {
                            const _0x1a7565 = _0x4fed34;
                            var _0x40c3c6;
                            const _0x37deb4 = (_0x40c3c6 = _0x51ea98[_0x1a7565(0x13a)](_0x1a7565(0x167))) === null || _0x40c3c6 === void 0x0 ? void 0x0 : _0x40c3c6[_0x1a7565(0x136)];
                            if (!_0x37deb4) return;
                            const _0x2bc9ca = _0x37deb4['querySelectorAll'](_0x1a7565(0x169));
                            [..._0x2bc9ca][_0x1a7565(0x155)](_0x124431 => {
                                const _0xb9f9b4 = _0x1a7565;
                                _0x124431[_0xb9f9b4(0x176)][_0xb9f9b4(0x177)] === 0x3 && !_0x124431['id'][_0xb9f9b4(0x160)](_0xb9f9b4(0x147)) && !_0x124431['id']['includes'](_0xb9f9b4(0x12f)) && hideViaPositionProperty(_0x124431);
                            });
                        },
                        _0x5a6638 = () => {
                            const _0x29734f = _0x4fed34,
                                _0x15548c = _0x51ea98[_0x29734f(0x13a)]('.overlay.overlay_banner');
                            if (!_0x15548c) return;
                            const _0xd3198 = _0x15548c[_0x29734f(0x16f)](_0x29734f(0x169));
                            [..._0xd3198][_0x29734f(0x155)](_0x146c69 => {
                                const _0x3bcf79 = _0x29734f;
                                _0x146c69[_0x3bcf79(0x176)][_0x3bcf79(0x177)] === 0x2 && hideViaPositionProperty(_0x146c69);
                            });
                        };
                    observeDomChanges(() => {
                        _0xd04b43(), _0x11770c(), _0x5a6638();
                    });
                }
                if (_0x269453 === _0x4fed34(0x131)) {
                    const _0x85b7bd = ['advInfoUrl', _0x4fed34(0x174), _0x4fed34(0x16c), _0x4fed34(0x170)];
                    preventXHR(_0x5da72b => _0x85b7bd[_0x4fed34(0x15e)](_0x400656 => _0x5da72b[_0x4fed34(0x139)]['includes'](_0x400656)));
                }
            }

            function _0x15d8() {
                const _0x233f0f = ['1360252QhOFeu', 'getAttribute', 'location', 'layout', '/search', 'my.mail.ru', 'DIV', '55112321ZfSErK', 'div[class=\x22b-datalist__head\x22],\x20div[class=\x22b-letter__rb-line\x22]', 'cssText', 'parentElement', '0px', ';margin-top:\x20-', 'response', 'querySelector', '[class*=\x22content\x22],\x20[class*=\x22login\x22]', 'style', 'ins[data-slot]', 'find', '.application-mail__layout_main\x20>\x20span\x20>\x20div:last-child', 'previousElementSibling', '.js-relap-widget', 'Директ', 'otvet.mail.ru', 'octavius.mail.ru', '_pcard', 'tagName', 'menu', 'Реклама', '\x20!important;', 'ul[data-testid=\x22news-content\x22]', '[class=\x22cols__column\x20cols__column_small_12\x20cols__column_sidebar\x22]', '#adman-line', '.tb-rb-banner-wrapper', '1594071JTRGXP', '692424IubSjx', 'innerText', 'pulse.mail.ru', 'startsWith', 'mail.ru', 'e.mail.ru', 'forEach', 'parentNode', 'tv.mail.ru', '8UbhEzF', '\x22ads\x22', '550WEhznM', '/article', '274345JgRlMr', '[data-testid=\x22news-tabs\x22]', 'some', 'div[class^=\x22list_\x22]\x20>\x20div[class^=\x22layoutBlock_\x22]\x20>\x20div[class^=\x22wrapper_\x22]\x20>\x20div[class^=\x22wrapper__inner_\x22]\x20+\x20div[class]', 'includes', 'go.mail.ru', 'children', 'реклама', '15039gwrvZR', '[data-testid=\x22pulse-card\x22]', '772933mUrbwH', 'div.js-counters.counters', 'myTarget', 'div[class][id]', '[class=\x22cols__wrapper\x20margin_off_sides-hor\x22]', 'div[role=\x22rowgroup\x22].ReactVirtualized__Grid__innerScrollContainer', 'adChoices', 'span.pl_cs', 'setEntries', 'querySelectorAll', 'ads.vk.com', 'style[data-styled=\x22active\x22]\x20+\x20div', 'search-container', '128zmoTXX', 'adv_info', '150wpMAft', 'classList', 'length'];
                _0x15d8 = function() {
                    return _0x233f0f;
                };
                return _0x15d8();
            }

            function _0x14f4(_0x1a4d0f, _0x136622) {
                const _0x15d8d3 = _0x15d8();
                return _0x14f4 = function(_0x14f433, _0x5e83e3) {
                    _0x14f433 = _0x14f433 - 0x12f;
                    let _0x1c446b = _0x15d8d3[_0x14f433];
                    return _0x1c446b;
                }, _0x14f4(_0x1a4d0f, _0x136622);
            }
            commonHosts[_0x1abc4d(0x16e)]([_0x1abc4d(0x154), 'octavius.mail.ru', _0x1abc4d(0x161), _0x1abc4d(0x153), _0x1abc4d(0x143), _0x1abc4d(0x157), _0x1abc4d(0x151), 'my.mail.ru'], pageCallback$Q);

            function _0x3848() {
                const _0x501c48 = ['Реклама', 'setEntries', 'innerText', 'children', '0px', '14iRQHLH', 'forEach', '2096405QubhOo', 'div', 'lady.mail.ru', '[data-module=\x22SlotModel\x22][data-view*=\x22SlotView\x22]', '[class*=\x22fixed-panel\x22]\x20div[class]', '419433MdPIAv', 'location', 'minHeight', 'length', 'includes', '4033782VQpClR', 'nodeName', '77890OSWvxC', '[data-module=\x22FixedPanel.Rubric\x22]\x20>\x20div.block_collapse_bottom\x20>\x20.wrapper', 'block', '12119173qFajmT', 'classList', 'DIV', '400px', 'auto.mail.ru', '16oRcfcS', '.m-fixed-panel', '200MeYzoz', 'sportmail.ru', 'querySelector', 'className', '8588988uejftZ', 'news.mail.ru', '.js-fixed-panel\x20>\x20div[class*=\x22experiment\x22]', 'box', '3693807aujnrF', 'hi-tech.mail.ru', 'parentNode', '12KgKqHD', 'querySelectorAll', '10KEbBzh'];
                _0x3848 = function() {
                    return _0x501c48;
                };
                return _0x3848();
            }
            const _0x3d3279 = _0x4616;
            (function(_0x44adcd, _0x1b0a3d) {
                const _0x1b65ac = _0x4616,
                    _0x37cbb3 = _0x44adcd();
                while (!![]) {
                    try {
                        const _0x2cd8f5 = parseInt(_0x1b65ac(0x152)) / 0x1 * (parseInt(_0x1b65ac(0x144)) / 0x2) + parseInt(_0x1b65ac(0x150)) / 0x3 + -parseInt(_0x1b65ac(0x12f)) / 0x4 * (parseInt(_0x1b65ac(0x146)) / 0x5) + -parseInt(_0x1b65ac(0x135)) / 0x6 + -parseInt(_0x1b65ac(0x14b)) / 0x7 * (-parseInt(_0x1b65ac(0x131)) / 0x8) + parseInt(_0x1b65ac(0x139)) / 0x9 * (-parseInt(_0x1b65ac(0x13e)) / 0xa) + parseInt(_0x1b65ac(0x12a)) / 0xb * (parseInt(_0x1b65ac(0x13c)) / 0xc);
                        if (_0x2cd8f5 === _0x1b0a3d) break;
                        else _0x37cbb3['push'](_0x37cbb3['shift']());
                    } catch (_0x84610d) {
                        _0x37cbb3['push'](_0x37cbb3['shift']());
                    }
                }
            }(_0x3848, 0xecf01));

            function _0x4616(_0x3f09d9, _0x239d6a) {
                const _0x38480f = _0x3848();
                return _0x4616 = function(_0x461681, _0x6e99ee) {
                    _0x461681 = _0x461681 - 0x12a;
                    let _0x13789f = _0x38480f[_0x461681];
                    return _0x13789f;
                }, _0x4616(_0x3f09d9, _0x239d6a);
            }

            function pageCallback$P() {
                const _0x57c82a = _0x4616,
                    {
                        hostname: _0x4f39f8
                    } = _0x51ea98[_0x57c82a(0x14c)],
                    _0x148aac = () => {
                        const _0x8a53c0 = _0x57c82a,
                            _0x2d3fef = _0x51ea98[_0x8a53c0(0x133)]('.pulse-lenta-root');
                        if (!_0x2d3fef) return;
                        const _0x26f893 = _0x2d3fef[_0x8a53c0(0x13d)]('a[rel=\x22noopener\x20nofollow\x22][target=\x22_blank\x22]');
                        if (!_0x26f893[_0x8a53c0(0x14e)]) return;
                        _0x26f893[_0x8a53c0(0x145)](_0x3b122c => {
                            const _0x140c4b = _0x8a53c0,
                                _0x3238f9 = _0x3b122c[_0x140c4b(0x13d)]('span');
                            _0x3238f9[_0x140c4b(0x145)](_0x475f3a => {
                                const _0x2513d6 = _0x140c4b;
                                _0x475f3a && _0x475f3a[_0x2513d6(0x141)] === _0x2513d6(0x13f) && hideViaDisplayProperty(_0x3b122c[_0x2513d6(0x13b)]);
                            });
                        });
                    };
                if (_0x4f39f8 === _0x57c82a(0x136)) {
                    const _0x54c998 = () => {
                            const _0x298efb = _0x57c82a,
                                _0x406685 = _0x51ea98[_0x298efb(0x133)](_0x298efb(0x153));
                            if (!_0x406685) return;
                            const _0x54aff2 = _0x406685[_0x298efb(0x142)];
                            if (!_0x54aff2 || _0x54aff2['length'] === 0x0) return;
                            [..._0x54aff2][_0x298efb(0x145)](_0x2f6416 => {
                                const _0x30d538 = _0x298efb;
                                if (_0x2f6416[_0x30d538(0x151)] !== _0x30d538(0x12c)) return;
                                const _0x9b2344 = _0x2f6416[_0x30d538(0x13d)](_0x30d538(0x14a));
                                [..._0x9b2344][_0x30d538(0x145)](_0x3806dc => {
                                    const _0x33b287 = _0x30d538,
                                        _0x4d9936 = [..._0x3806dc[_0x33b287(0x12b)]];
                                    !_0x4d9936[_0x33b287(0x14f)](_0x33b287(0x138)) && getComputedStyle(_0x3806dc)[_0x33b287(0x14d)] === '400px' && removeNode(_0x3806dc);
                                });
                            });
                        },
                        _0x42fee1 = () => {
                            const _0x1e3843 = _0x57c82a,
                                _0x32c397 = document['querySelector'](_0x1e3843(0x130));
                            if (!_0x32c397) return;
                            [..._0x32c397[_0x1e3843(0x142)]]['forEach'](_0x14bde7 => {
                                const _0x33669e = _0x1e3843,
                                    _0x4a6f83 = _0x14bde7[_0x33669e(0x133)](_0x33669e(0x147));
                                _0x4a6f83 && getComputedStyle(_0x4a6f83)[_0x33669e(0x14d)] === _0x33669e(0x12d) && removeNode(_0x14bde7);
                            });
                        };
                    observeDomChanges(() => {
                        hideCssRulesBySelectorText(/, \.p-directhack|\.cols_experiment-1|\.js-smoky-single/), _0x54c998(), _0x42fee1();
                    });
                }
                _0x4f39f8 === 'mail.ru' && observeDomChanges(() => {
                    hideCssRulesBySelectorText(/\.spring_side|\.p-directhack|\.rb-direct-mimic_index|\.deti-slot_box|\.health-slot_box|\.spring|\.rb-direct-wrapper|\.rb_body|\.rb-direct-side|\.news-item__link|\.notify/), _0x148aac();
                });
                _0x4f39f8 === _0x57c82a(0x12e) && observeDomChanges(() => {
                    hideCssRulesBySelectorText(/\.rb_main-240x400|\.trg-banners|\.rb_hide_by_parallax/);
                });
                if (_0x4f39f8 === _0x57c82a(0x132)) {
                    const _0x4b01bd = () => {
                            const _0x90352 = _0x57c82a;
                            if (isMobile()) {
                                const _0xa74d02 = _0x51ea98[_0x90352(0x13d)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.wrapper_with-article-swipe-navigation\x20>\x20div[class]:not([style]),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.wrapper_with-article-swipe-navigation\x20>\x20span\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
                                _0xa74d02 && [..._0xa74d02][_0x90352(0x145)](_0x4c9866 => {
                                    _0x4c9866 && _0x4c9866['__smokedElement'] === !![] && hideViaPositionProperty(_0x4c9866);
                                });
                            }
                        },
                        _0x3b745b = () => {
                            const _0x577462 = _0x57c82a,
                                _0x23b793 = _0x51ea98[_0x577462(0x133)](_0x577462(0x137));
                            _0x23b793 && hideViaPositionProperty(_0x23b793);
                        },
                        _0x40f76f = () => {
                            const _0x907e3f = _0x57c82a,
                                _0x1d68a3 = _0x51ea98[_0x907e3f(0x13d)](_0x907e3f(0x149));
                            [..._0x1d68a3][_0x907e3f(0x145)](_0x2b2d39 => {
                                hideViaPositionProperty(_0x2b2d39);
                            });
                        };
                    observeDomChanges(() => {
                        _0x4b01bd(), hideCssRulesBySelectorText(/\.cols_experiment-1|\.p-spring/), _0x3b745b(), isMobile() && _0x40f76f();
                    });
                }
                _0x4f39f8 === 'horo.mail.ru' && observeDomChanges(() => {
                    hideCssRulesBySelectorText(/\.incut_full|\.cols__column_sidebar/);
                });
                if (_0x4f39f8 === _0x57c82a(0x13a)) {
                    const _0x835d31 = () => {
                        const _0x318275 = _0x57c82a,
                            _0xebbf46 = _0x51ea98[_0x318275(0x13d)]('[data-logger-parent=\x22bottom\x22]\x20>\x20div');
                        [..._0xebbf46][_0x318275(0x145)](_0xab8ee9 => {
                            const _0x4b1e6d = _0x318275,
                                {
                                    height: _0x269d8b
                                } = getComputedStyle(_0xab8ee9),
                                _0x184e5b = _0xab8ee9[_0x4b1e6d(0x142)][_0x4b1e6d(0x14e)],
                                _0x59c03c = _0xab8ee9[_0x4b1e6d(0x134)][_0x4b1e6d(0x14f)](_0x4b1e6d(0x154));
                            _0x269d8b !== _0x4b1e6d(0x143) && _0x184e5b > 0x0 && _0x59c03c && hideViaPositionProperty(_0xab8ee9);
                        });
                    };
                    observeDomChanges(() => {
                        hideCssRulesBySelectorText(/\.sticky-springs__item|\.cols__column_asd|\.viewbox__side/), _0x835d31();
                    });
                }
                _0x4f39f8 === 'lady.mail.ru' && observeDomChanges(() => {
                    _0x148aac();
                });
            }
            commonHosts[_0x3d3279(0x140)]([_0x3d3279(0x136), _0x3d3279(0x148), _0x3d3279(0x13a), 'horo.mail.ru', _0x3d3279(0x136), _0x3d3279(0x12e), _0x3d3279(0x132), _0x3d3279(0x12e)], pageCallback$P);

            function _0x2c3f() {
                const _0x2e16c2 = ['200nbOlFU', 'previousElementSibling', '860SxvOls', '58772xwsvWO', '929DAfEOp', 'music.yandex.by', 'querySelector', '.adfox-brick', '13alUNhw', '.d-overhead__close', '189156DhosnA', 'music.yandex.ua', '8747800JdBGEP', '7107sVDGCY', 'music.yandex.kz', '346AdifNA', '17487943StqzGZ', '3944485oZsIhz', '18wVZeiO', '12BYJFXY', 'document', 'music.yandex.ru'];
                _0x2c3f = function() {
                    return _0x2e16c2;
                };
                return _0x2c3f();
            }

            function _0x23a2(_0x4a7e62, _0x1896d3) {
                const _0x2c3f65 = _0x2c3f();
                return _0x23a2 = function(_0x23a24f, _0x58724c) {
                    _0x23a24f = _0x23a24f - 0x138;
                    let _0x44dd1f = _0x2c3f65[_0x23a24f];
                    return _0x44dd1f;
                }, _0x23a2(_0x4a7e62, _0x1896d3);
            }
            const _0x20e3ae = _0x23a2;
            (function(_0x4ffd8f, _0x2c506d) {
                const _0x52e2d9 = _0x23a2,
                    _0x185860 = _0x4ffd8f();
                while (!![]) {
                    try {
                        const _0x28df33 = parseInt(_0x52e2d9(0x146)) / 0x1 * (parseInt(_0x52e2d9(0x13b)) / 0x2) + -parseInt(_0x52e2d9(0x139)) / 0x3 * (parseInt(_0x52e2d9(0x144)) / 0x4) + parseInt(_0x52e2d9(0x13d)) / 0x5 * (parseInt(_0x52e2d9(0x13f)) / 0x6) + parseInt(_0x52e2d9(0x145)) / 0x7 * (-parseInt(_0x52e2d9(0x142)) / 0x8) + parseInt(_0x52e2d9(0x13e)) / 0x9 * (-parseInt(_0x52e2d9(0x138)) / 0xa) + parseInt(_0x52e2d9(0x13c)) / 0xb + parseInt(_0x52e2d9(0x14c)) / 0xc * (parseInt(_0x52e2d9(0x14a)) / 0xd);
                        if (_0x28df33 === _0x2c506d) break;
                        else _0x185860['push'](_0x185860['shift']());
                    } catch (_0x319831) {
                        _0x185860['push'](_0x185860['shift']());
                    }
                }
            }(_0x2c3f, 0xd5b1c));

            function pageCallback$O() {
                const _0x4a2f94 = () => {
                    const _0x450959 = _0x23a2;
                    var _0xc07c65;
                    const _0x349eef = (_0xc07c65 = _0x51ea98[_0x450959(0x140)][_0x450959(0x148)](_0x450959(0x149))) === null || _0xc07c65 === void 0x0 ? void 0x0 : _0xc07c65[_0x450959(0x143)];
                    _0x349eef && _0x349eef[_0x450959(0x148)](_0x450959(0x14b)) && hideViaPositionProperty(_0x349eef);
                };
                observeDomChanges(() => {
                    _0x4a2f94();
                });
            }
            commonHosts['setEntries']([_0x20e3ae(0x141), _0x20e3ae(0x13a), _0x20e3ae(0x147), _0x20e3ae(0x14d), 'music.yandex.md'], pageCallback$O);

            function _0x4122() {
                const _0x2a43cd = ['querySelectorAll', 'ol\x20>\x20li[class$=\x22__list-item_type_promo\x22]', '2231424hElEjZ', 'document', '494195VIfWcV', '834372hXGAgr', '6kXxmyG', '46UJAVGB', '39261SsMeeH', '2585472FvXWDF', '305616DuwvJL', 'ol\x20>\x20li[class$=\x22__list-item_type_ad\x22]', 'forEach', '770119WvXyPc', 'setEntries'];
                _0x4122 = function() {
                    return _0x2a43cd;
                };
                return _0x4122();
            }

            function _0x57c1(_0x488005, _0x465108) {
                const _0x41223b = _0x4122();
                return _0x57c1 = function(_0x57c181, _0x16b715) {
                    _0x57c181 = _0x57c181 - 0x1e7;
                    let _0x62c813 = _0x41223b[_0x57c181];
                    return _0x62c813;
                }, _0x57c1(_0x488005, _0x465108);
            }
            const _0x394219 = _0x57c1;
            (function(_0x54fd41, _0x15835e) {
                const _0x5b4b25 = _0x57c1,
                    _0x44607b = _0x54fd41();
                while (!![]) {
                    try {
                        const _0x5cdf38 = -parseInt(_0x5b4b25(0x1e9)) / 0x1 + parseInt(_0x5b4b25(0x1f5)) / 0x2 * (-parseInt(_0x5b4b25(0x1e7)) / 0x3) + parseInt(_0x5b4b25(0x1f3)) / 0x4 + -parseInt(_0x5b4b25(0x1f2)) / 0x5 * (-parseInt(_0x5b4b25(0x1f4)) / 0x6) + -parseInt(_0x5b4b25(0x1ec)) / 0x7 + parseInt(_0x5b4b25(0x1e8)) / 0x8 + parseInt(_0x5b4b25(0x1f0)) / 0x9;
                        if (_0x5cdf38 === _0x15835e) break;
                        else _0x44607b['push'](_0x44607b['shift']());
                    } catch (_0x28c59e) {
                        _0x44607b['push'](_0x44607b['shift']());
                    }
                }
            }(_0x4122, 0x2787e));

            function pageCallback$N() {
                const _0x45189e = () => {
                        const _0x48ee88 = _0x57c1,
                            _0x216418 = _0x51ea98[_0x48ee88(0x1f1)][_0x48ee88(0x1ee)](_0x48ee88(0x1ef));
                        [..._0x216418][_0x48ee88(0x1eb)](_0x967d24 => {
                            hideViaDisplayProperty(_0x967d24);
                        });
                    },
                    _0x57be54 = () => {
                        const _0x20b058 = _0x57c1,
                            _0x41296d = _0x51ea98[_0x20b058(0x1f1)][_0x20b058(0x1ee)](_0x20b058(0x1ea));
                        [..._0x41296d][_0x20b058(0x1eb)](_0x596056 => {
                            hideViaDisplayProperty(_0x596056);
                        });
                    },
                    _0x11202b = () => {
                        const _0x4621ac = _0x51ea98['querySelector']('div.ContentWidth\x20>\x20div[class=\x22SitesSearchPage__topAd\x20SitesSearchPage__topAd_special\x22]');
                        _0x4621ac && hideViaDisplayProperty(_0x4621ac);
                    };
                observeDomChanges(() => {
                    blockProperty('AD'), _0x45189e(), _0x57be54(), _0x11202b();
                });
            }
            commonHosts[_0x394219(0x1ed)](['realty.ya.ru'], pageCallback$N);

            function _0x1199(_0x5930e8, _0x13d47c) {
                const _0x41de39 = _0x41de();
                return _0x1199 = function(_0x119914, _0x4d9361) {
                    _0x119914 = _0x119914 - 0x178;
                    let _0x2b768c = _0x41de39[_0x119914];
                    return _0x2b768c;
                }, _0x1199(_0x5930e8, _0x13d47c);
            }
            const _0x4f7b28 = _0x1199;
            (function(_0x4bf073, _0x5167a3) {
                const _0x1d2b6a = _0x1199,
                    _0x49aea9 = _0x4bf073();
                while (!![]) {
                    try {
                        const _0x3e1977 = parseInt(_0x1d2b6a(0x178)) / 0x1 + parseInt(_0x1d2b6a(0x197)) / 0x2 + -parseInt(_0x1d2b6a(0x193)) / 0x3 + -parseInt(_0x1d2b6a(0x17b)) / 0x4 + -parseInt(_0x1d2b6a(0x194)) / 0x5 * (-parseInt(_0x1d2b6a(0x198)) / 0x6) + -parseInt(_0x1d2b6a(0x17d)) / 0x7 + parseInt(_0x1d2b6a(0x185)) / 0x8;
                        if (_0x3e1977 === _0x5167a3) break;
                        else _0x49aea9['push'](_0x49aea9['shift']());
                    } catch (_0x4dc620) {
                        _0x49aea9['push'](_0x49aea9['shift']());
                    }
                }
            }(_0x41de, 0x64d6c));

            function _0x41de() {
                const _0x368651 = ['removeProperty', 'display', 'position', '#hook_Block_GiftsFrontFourthColumn,\x20#hook_Block_FriendStream', 'innerText', '#hook_Block_ViewportHeightAwareBanner', '1279152PCIbcU', '1060730FmCQYm', 'forEach', 'querySelector', '229100RgZanP', '6jQglVc', '287491rBiYfV', 'style', 'length', '691276BdQqYu', '.feed_top\x20.feed_count\x20>\x20div', '1712235UWoDGn', 'top', '#RightColumnBannerInner', 'matches', 'querySelectorAll', 'width', 'none', '240px', '5141256sSPbLw', 'setEntries', 'includes', 'document', '#hook_Block_FourthCol,\x20#rightColumn', 'styleSheets', 'some', 'Реклама'];
                _0x41de = function() {
                    return _0x368651;
                };
                return _0x41de();
            }

            function pageCallback$M() {
                const _0x9230ee = _0x1199,
                    _0x7523bb = [_0x9230ee(0x17f), _0x9230ee(0x192)],
                    _0x1b9ef2 = _0x223c42 => {
                        const _0x591721 = _0x9230ee;
                        if (_0x7523bb[_0x591721(0x18b)](_0x44a1f0 => _0x223c42[_0x591721(0x187)](_0x44a1f0))) return !![];
                        return ![];
                    },
                    _0x4264c4 = () => {
                        const _0x4ccc8f = _0x9230ee;
                        [..._0x51ea98[_0x4ccc8f(0x188)][_0x4ccc8f(0x18a)]][_0x4ccc8f(0x195)](_0x1357ef => {
                            const _0x4636f2 = _0x4ccc8f;
                            [...safeGetStylesheetRules(_0x1357ef)][_0x4636f2(0x195)](_0x3d083b => {
                                const _0x4ddfd0 = _0x4636f2;
                                _0x3d083b['selectorText'] && _0x1b9ef2(_0x3d083b['selectorText']) && _0x3d083b[_0x4ddfd0(0x179)][_0x4ddfd0(0x18e)] !== 'none' && (_0x3d083b[_0x4ddfd0(0x179)][_0x4ddfd0(0x18e)] = 'none');
                            });
                        });
                    },
                    _0x29a732 = () => {
                        const _0x19beaf = _0x9230ee,
                            _0x1f046c = document[_0x19beaf(0x181)]('.feed-list\x20>\x20.feed-w\x20>\x20[data-feed-id]');
                        _0x1f046c[_0x19beaf(0x195)](_0x345121 => {
                            const _0x5375e7 = _0x19beaf;
                            if (_0x345121['style'][_0x5375e7(0x18e)] === _0x5375e7(0x183)) return;
                            const _0x53663f = _0x345121['querySelectorAll']('.feed_top\x20.feed_ava+div\x20>\x20div[class]');
                            _0x53663f[_0x5375e7(0x195)](_0x4f79fb => {
                                const _0x481ddb = _0x5375e7;
                                (_0x4f79fb['innerText'] === _0x481ddb(0x18c) || _0x4f79fb['innerText'] === 'Ad') && (_0x345121[_0x481ddb(0x179)][_0x481ddb(0x18e)] = _0x481ddb(0x183));
                            });
                            const _0x5cb2d4 = _0x345121['querySelector'](_0x5375e7(0x17c));
                            if (!_0x5cb2d4) return;
                            (_0x5cb2d4[_0x5375e7(0x191)] === 'Реклама' || _0x5cb2d4[_0x5375e7(0x191)] === 'Ad') && (_0x345121[_0x5375e7(0x179)][_0x5375e7(0x18e)] = _0x5375e7(0x183));
                        });
                    },
                    _0x347b6d = () => {
                        const _0x23663c = _0x9230ee,
                            _0x388eab = [_0x23663c(0x190)],
                            _0x549d93 = _0x261753 => _0x388eab[_0x23663c(0x18b)](_0x59c364 => _0x261753[_0x23663c(0x180)](_0x59c364)),
                            _0x134315 = _0x530585 => {
                                const _0x5eb45d = _0x23663c;
                                _0x530585[_0x5eb45d(0x179)]['removeProperty'](_0x5eb45d(0x18f)), _0x530585[_0x5eb45d(0x179)][_0x5eb45d(0x18d)](_0x5eb45d(0x17e));
                            },
                            _0x15900a = _0x2419bc => {
                                const _0x57531f = _0x23663c;
                                _0x134315(_0x2419bc);
                                if (_0x549d93(_0x2419bc)) return;
                                const _0x5324de = _0x388eab['filter'](_0x137c5a => _0x2419bc['querySelector'](_0x137c5a));
                                if (_0x5324de[_0x57531f(0x17a)] === 0x0) {
                                    hideViaPositionProperty(_0x2419bc);
                                    return;
                                }
                                const {
                                    children: _0xa60ef9
                                } = _0x2419bc;
                                [..._0xa60ef9][_0x57531f(0x195)](_0x578257 => _0x15900a(_0x578257));
                            },
                            _0x3995b2 = _0x51ea98[_0x23663c(0x181)](_0x23663c(0x189));
                        [..._0x3995b2]['forEach'](_0x1d342d => {
                            const _0x4513c1 = _0x23663c,
                                {
                                    children: _0x190058
                                } = _0x1d342d;
                            [..._0x190058][_0x4513c1(0x195)](_0x3aa394 => {
                                _0x134315(_0x3aa394), _0x15900a(_0x3aa394);
                            });
                        });
                    },
                    _0x4f82e8 = () => {
                        const _0x635d44 = _0x9230ee,
                            _0x1af5a5 = _0x51ea98[_0x635d44(0x196)]('.dialogWrapper\x20>\x20.dialogWrapperBanner\x20');
                        _0x1af5a5 && getComputedStyle(_0x1af5a5)[_0x635d44(0x182)] === _0x635d44(0x184) && hideViaPositionProperty(_0x1af5a5);
                    };
                observeDomChanges(() => {
                    _0x4264c4(), _0x29a732(), _0x347b6d(), _0x4f82e8();
                });
            }
            commonHosts[_0x4f7b28(0x186)](['ok.ru'], pageCallback$M);

            function _0x3c71(_0x1b340f, _0x524cb0) {
                const _0x116048 = _0x1160();
                return _0x3c71 = function(_0x3c713c, _0x250ad2) {
                    _0x3c713c = _0x3c713c - 0x1b9;
                    let _0x3ffabb = _0x116048[_0x3c713c];
                    return _0x3ffabb;
                }, _0x3c71(_0x1b340f, _0x524cb0);
            }
            const _0x21d1c9 = _0x3c71;
            (function(_0x52d539, _0x1e19bc) {
                const _0x4af3e2 = _0x3c71,
                    _0x44208c = _0x52d539();
                while (!![]) {
                    try {
                        const _0x3a34a8 = parseInt(_0x4af3e2(0x1ba)) / 0x1 + -parseInt(_0x4af3e2(0x1c7)) / 0x2 + parseInt(_0x4af3e2(0x1ce)) / 0x3 + -parseInt(_0x4af3e2(0x1fd)) / 0x4 + -parseInt(_0x4af3e2(0x1ed)) / 0x5 * (-parseInt(_0x4af3e2(0x1c1)) / 0x6) + -parseInt(_0x4af3e2(0x1c3)) / 0x7 * (-parseInt(_0x4af3e2(0x1e0)) / 0x8) + parseInt(_0x4af3e2(0x1ff)) / 0x9 * (-parseInt(_0x4af3e2(0x1e8)) / 0xa);
                        if (_0x3a34a8 === _0x1e19bc) break;
                        else _0x44208c['push'](_0x44208c['shift']());
                    } catch (_0x5851a8) {
                        _0x44208c['push'](_0x44208c['shift']());
                    }
                }
            }(_0x1160, 0x65926));

            function pageCallback$L() {
                const _0x44a4a6 = _0x3c71;

                function _0x1e0ca2() {
                    const _0x5095d5 = _0x3c71;
                    if (!document[_0x5095d5(0x1cf)] || !document[_0x5095d5(0x1cf)]['innerText']) return ![];
                    const _0x4a460b = document[_0x5095d5(0x1cf)][_0x5095d5(0x207)];
                    if (_0x4a460b[_0x5095d5(0x1e4)] > 0x186a0 && _0x4a460b[_0x5095d5(0x1dc)](_0x5095d5(0x1ea)) > 0x0 && _0x4a460b[_0x5095d5(0x1dc)](_0x5095d5(0x1de)) > 0x0) return !![];
                    return ![];
                }
                const _0x7192fe = _0x1630b0 => {
                        const _0x300259 = _0x3c71;
                        if (_0x1630b0['length'] === 0x1) return ![];
                        for (let _0x2d3d36 = 0x1; _0x2d3d36 < _0x1630b0[_0x300259(0x1e4)]; _0x2d3d36 += 0x1) {
                            var _0x48b03f, _0x4f96e7, _0x1985c5, _0xe0a2de;
                            if (((_0x48b03f = _0x1630b0[_0x2d3d36 - 0x1]) === null || _0x48b03f === void 0x0 ? void 0x0 : (_0x4f96e7 = _0x48b03f['attributes'][0x0]) === null || _0x4f96e7 === void 0x0 ? void 0x0 : _0x4f96e7['value']) !== ((_0x1985c5 = _0x1630b0[_0x2d3d36]) === null || _0x1985c5 === void 0x0 ? void 0x0 : (_0xe0a2de = _0x1985c5[_0x300259(0x1f9)][0x0]) === null || _0xe0a2de === void 0x0 ? void 0x0 : _0xe0a2de[_0x300259(0x1d6)])) return ![];
                        }
                        return !![];
                    },
                    _0x1d6447 = () => {
                        const _0x554abe = _0x3c71,
                            _0x3feaf7 = _0x51ea98['document']['querySelectorAll']('a[target=\x22_blank\x22][style^=\x22background-image:\x20url(\x27//\x22]');
                        [..._0x3feaf7][_0x554abe(0x1d0)](_0x4fc6e6 => {
                            const _0x50d9a0 = _0x554abe;
                            var _0x15163f, _0x406ae2, _0x57472c;
                            const _0x393c13 = _0x4fc6e6 === null || _0x4fc6e6 === void 0x0 ? void 0x0 : (_0x15163f = _0x4fc6e6['parentNode']) === null || _0x15163f === void 0x0 ? void 0x0 : _0x15163f['parentNode'],
                                _0x6f75b8 = _0x4fc6e6 === null || _0x4fc6e6 === void 0x0 ? void 0x0 : (_0x406ae2 = _0x4fc6e6[_0x50d9a0(0x1df)]) === null || _0x406ae2 === void 0x0 ? void 0x0 : (_0x57472c = _0x406ae2['parentNode']) === null || _0x57472c === void 0x0 ? void 0x0 : _0x57472c[_0x50d9a0(0x1df)];
                            _0x7192fe(_0x393c13 === null || _0x393c13 === void 0x0 ? void 0x0 : _0x393c13[_0x50d9a0(0x1be)]) && hideViaDisplayProperty(_0x393c13), _0x7192fe(_0x6f75b8 === null || _0x6f75b8 === void 0x0 ? void 0x0 : _0x6f75b8['children']) && hideViaDisplayProperty(_0x6f75b8);
                        });
                    },
                    _0x4be0f5 = () => {
                        const _0x1e1702 = _0x3c71,
                            _0x194757 = _0x51ea98[_0x1e1702(0x1cc)][_0x1e1702(0x1f5)](_0x1e1702(0x1f1));
                        [..._0x194757][_0x1e1702(0x1d0)](_0xaa3160 => {
                            const _0x4111f4 = _0x1e1702,
                                _0x14a903 = [...safeGetStylesheetRules(_0xaa3160[_0x4111f4(0x1ee)])],
                                _0x4b8198 = _0x14a903[0x0];
                            if (_0x14a903[_0x4111f4(0x1e4)] > 0x32 || !_0x4b8198) return;
                            _0x4b8198[_0x4111f4(0x1ec)] && /[a-zA-Z0-9]{2,8}\[[a-zA-Z0-9]{2,8}\*="[a-zA-Z0-9]{2,10}"]/ [_0x4111f4(0x1fa)](_0x4b8198['selectorText']) && hideViaPositionProperty(_0x4b8198);
                        });
                    },
                    _0x362ce0 = () => {
                        const _0x2efd11 = _0x3c71,
                            _0x42be0a = _0x51ea98[_0x2efd11(0x206)]('button[data-cerber*=\x22::adblock_screen::\x22]'),
                            _0x1638fd = _0x51ea98[_0x2efd11(0x206)](_0x2efd11(0x204));
                        if (_0x42be0a) {
                            const _0x236bfd = getParent(_0x42be0a, 0x4);
                            removeNode(_0x236bfd);
                        } else _0x1638fd && _0x1638fd[_0x2efd11(0x1fe)]('style');
                    },
                    _0x406b57 = () => {
                        const _0x408dc6 = _0x3c71,
                            _0xe59391 = _0x51ea98['document'][_0x408dc6(0x1f5)](_0x408dc6(0x1fb));
                        for (let _0x156ac5 = 0x0; _0x156ac5 < _0xe59391[_0x408dc6(0x1e4)]; _0x156ac5 += 0x1) {
                            const _0x37c377 = _0xe59391[_0x156ac5];
                            _0x37c377 && _0x37c377[_0x408dc6(0x207)][_0x408dc6(0x1dc)]('getYaClickUrl') > 0x0 && removeNode(_0x37c377);
                        }
                    },
                    _0x7d523b = navigator[_0x44a4a6(0x201)],
                    _0x4f591a = () => {
                        if (_0x1e0ca2()) return 'MSIE\x20';
                        return _0x7d523b;
                    },
                    _0x4e1338 = {};
                _0x4e1338[_0x44a4a6(0x1ef)] = _0x4f591a, Object['defineProperty'](_0x51ea98['window'][_0x44a4a6(0x208)], _0x44a4a6(0x201), _0x4e1338);
                let _0x46fcb5 = _0x51ea98[_0x44a4a6(0x1d1)][_0x44a4a6(0x1d2)];
                Object[_0x44a4a6(0x1d4)](_0x51ea98[_0x44a4a6(0x1d1)], 'Promise', {
                    'get': () => {
                        const _0x3d2315 = _0x44a4a6;
                        if (_0x1e0ca2()) throw new TypeError(_0x3d2315(0x1b9));
                        return _0x46fcb5;
                    },
                    'set': _0x28223b => {
                        _0x46fcb5 = _0x28223b;
                    }
                });
                const _0x5ec011 = () => {
                        const _0x13f7b7 = _0x44a4a6,
                            _0x1c1d5a = _0x51ea98[_0x13f7b7(0x1f4)](_0x13f7b7(0x1fc));
                        [..._0x1c1d5a][_0x13f7b7(0x1d0)](_0x28d6a0 => {
                            const _0x37d7d2 = _0x13f7b7;
                            var _0x4a37ee;
                            const _0x46551c = getParent(_0x28d6a0, 0x5);
                            if (_0x46551c && _0x46551c instanceof Element && _0x46551c[_0x37d7d2(0x1e6)][_0x37d7d2(0x1d6)] && _0x46551c[_0x37d7d2(0x1e6)][0x0]['indexOf']('rui__') !== -0x1) return;
                            const _0x33c87d = (_0x4a37ee = _0x28d6a0['nextElementSibling']) === null || _0x4a37ee === void 0x0 ? void 0x0 : _0x4a37ee[_0x37d7d2(0x206)](_0x37d7d2(0x1c0));
                            if (_0x33c87d) return;
                            for (let _0xba5f78 = 0x5; _0xba5f78 >= 0x1; _0xba5f78 -= 0x1) {
                                const _0x1f16e0 = getParent(_0x28d6a0, _0xba5f78);
                                _0x1f16e0 && _0x1f16e0 instanceof Element && (getComputedStyle(_0x1f16e0)['backgroundColor'] === _0x37d7d2(0x1c2) || getComputedStyle(_0x1f16e0)['backgroundColor'] === _0x37d7d2(0x1d9) || getComputedStyle(_0x1f16e0)[_0x37d7d2(0x1cd)] === _0x37d7d2(0x1c2)) && hideViaPositionProperty(_0x1f16e0);
                            }
                        });
                    },
                    _0x1c6e93 = () => {
                        const _0x447d67 = _0x44a4a6;
                        if (isMobile()) return;
                        const _0x5b88c9 = _0x51ea98['querySelectorAll'](_0x447d67(0x1c6));
                        [..._0x5b88c9][_0x447d67(0x1d0)](_0xd93e53 => {
                            const _0x35d708 = _0x447d67;
                            var _0x3a5443;
                            const _0x4886f7 = getParent(_0xd93e53, 0x3);
                            _0x4886f7 !== null && _0x4886f7 !== void 0x0 && (_0x3a5443 = _0x4886f7[_0x35d708(0x1bb)]) !== null && _0x3a5443 !== void 0x0 && _0x3a5443[_0x35d708(0x1f7)]('[id][class][data-horo-new]') && hideViaPositionProperty(_0x4886f7);
                        });
                    },
                    _0x53e52c = () => {
                        const _0x20633d = _0x44a4a6,
                            _0x4e6698 = _0x51ea98[_0x20633d(0x1f4)](_0x20633d(0x1f3));
                        [..._0x4e6698][_0x20633d(0x1d0)](_0x44d281 => {
                            hideViaPositionProperty(_0x44d281);
                        });
                        const _0x230855 = _0x51ea98[_0x20633d(0x1f4)](_0x20633d(0x209));
                        [..._0x230855][_0x20633d(0x1d0)](_0x4fe31b => {
                            hideViaPositionProperty(_0x4fe31b);
                        });
                        const _0x47037e = _0x51ea98[_0x20633d(0x1cc)]['getElementById'](_0x20633d(0x1bf));
                        _0x47037e && hideViaPositionProperty(_0x47037e['parentNode']);
                    },
                    _0x5cd3ce = () => {
                        if (!isMobile()) return;
                        const _0x540ec7 = () => {
                                const _0x2df6d7 = _0x3c71,
                                    _0x47225e = document[_0x2df6d7(0x1f4)](_0x2df6d7(0x1e2));
                                _0x47225e[_0x2df6d7(0x1d0)](_0x3cc0a2 => {
                                    const _0x275146 = _0x2df6d7,
                                        {
                                            backgroundColor: _0x588678
                                        } = getComputedStyle(_0x3cc0a2);
                                    if (_0x588678 === _0x275146(0x1c2)) {
                                        const _0x450504 = _0x3cc0a2[_0x275146(0x206)](_0x275146(0x1f6));
                                        _0x450504 && hideViaPositionProperty(_0x3cc0a2);
                                    }
                                });
                            },
                            _0x224282 = () => {
                                const _0x271841 = _0x3c71,
                                    _0x328e3f = _0x51ea98[_0x271841(0x1f4)](_0x271841(0x1e1));
                                [..._0x328e3f][_0x271841(0x1d0)](_0x422bcd => {
                                    const _0x566a07 = _0x271841,
                                        _0x266c26 = getParent(_0x422bcd, 0x3);
                                    getComputedStyle(_0x266c26)[_0x566a07(0x1cd)] === _0x566a07(0x1c2) && hideViaPositionProperty(_0x266c26);
                                });
                            },
                            _0x523461 = () => {
                                const _0x42453f = _0x3c71,
                                    _0x190651 = document[_0x42453f(0x1f4)](_0x42453f(0x1f8)),
                                    _0x28bb03 = [..._0x190651]['map'](_0x436732 => {
                                        const _0x49d1d3 = _0x42453f;
                                        var _0x3ff9b3;
                                        const _0x2b705e = (_0x3ff9b3 = _0x436732[_0x49d1d3(0x203)]) === null || _0x3ff9b3 === void 0x0 ? void 0x0 : _0x3ff9b3[_0x49d1d3(0x1be)];
                                        return _0x2b705e ? [..._0x2b705e] : [];
                                    })[_0x42453f(0x1d3)]();
                                [..._0x28bb03][_0x42453f(0x1d0)](_0x405aa3 => {
                                    const _0x22afed = _0x42453f;
                                    getComputedStyle(_0x405aa3, _0x22afed(0x205))[_0x22afed(0x1e5)] && getComputedStyle(_0x405aa3)['alignItems'] === 'center' && hideViaPositionProperty(_0x405aa3);
                                });
                            };
                        _0x540ec7(), _0x224282(), _0x523461();
                    },
                    _0x4105b0 = [_0x44a4a6(0x1f2), _0x44a4a6(0x1d8), _0x44a4a6(0x1eb), _0x44a4a6(0x1e9)];
                preventXHR(_0x157df2 => {
                    const _0x2190c8 = _0x44a4a6,
                        {
                            withCredentials: _0x363292,
                            responseURL: _0xcafc1f
                        } = _0x157df2,
                        _0x183273 = _0x4105b0['some'](_0x547388 => _0xcafc1f[_0x2190c8(0x1e7)](_0x547388)),
                        _0x4c3375 = _0xcafc1f['startsWith'](_0x2190c8(0x1db)) || _0x363292 && !_0x183273;
                    return _0x4c3375;
                }), observeDomChanges(() => {
                    _0x1d6447(), _0x4be0f5(), _0x406b57(), _0x362ce0(), _0x5ec011(), _0x5cd3ce(), _0x1c6e93(), _0x53e52c();
                });
            }
            commonHosts[_0x21d1c9(0x1d7)](['rambler.ru', _0x21d1c9(0x1bc), 'soft.rambler.ru', 'images.rambler.ru', _0x21d1c9(0x1c8), _0x21d1c9(0x200), _0x21d1c9(0x1ca), _0x21d1c9(0x1cb), 'finance.rambler.ru', _0x21d1c9(0x1c5), _0x21d1c9(0x1e3), _0x21d1c9(0x202), _0x21d1c9(0x1da), _0x21d1c9(0x1bd), _0x21d1c9(0x1c9), 'championat.com', _0x21d1c9(0x1c4), _0x21d1c9(0x1d5), _0x21d1c9(0x1dd), 'rns.online', 'passion.ru', 'wmj.ru', 'letidor.ru', _0x21d1c9(0x1f0)], pageCallback$L);

            function _0x1160() {
                const _0x46756d = ['doctor.rambler.ru', 'https://zoomdecorate.rambler.ru', 'indexOf', 'quto.ru', 'checkAdPlace', 'parentNode', '180944YIVydH', 'div:not([class])\x20>\x20[data-rnet]\x20>\x20[id^=\x22rnet_\x22][id*=\x22finance\x22]', '[style*=\x22min-height:\x20250px;\x22],\x20[style*=\x22min-height:250px\x22]', 'weekend.rambler.ru', 'length', 'content', 'classList', 'includes', '5460PQQHuz', 'https://id.championat.com/api/v3/profile/getInfo', 'window.Adf', 'https://id.championat.com/api/v3/session/getRsidx', 'selectorText', '3118090LAHEKn', 'sheet', 'get', 'motor.ru', 'style', 'id.rambler', '[class^=\x22comments__right-sticky\x22]\x20>\x20[class=\x22comments__partners\x22]', 'querySelectorAll', 'getElementsByTagName', 'div[id^=\x22adfox-\x22]', 'matches', '[id=\x22summary\x22]', 'attributes', 'test', 'script', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[id^=\x22desktop_\x22][data-banner],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[id^=\x22hedux-\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[id^=\x22adfox-\x22][style=\x22display:block\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[id^=\x22adfox-\x22][style=\x22display:\x20block;\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet]\x20>\x20[id^=\x22rnet_kino_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet]\x20>\x20[id^=\x22rnet_news_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet]\x20>\x20div[id^=\x22rnet_sport_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet]\x20>\x20div[id^=\x22rnet_finance_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet]\x20>\x20div[id^=\x22rnet_weekend_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet]\x20>\x20div[id^=\x22rnet_travel_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet]\x20>\x20div[id^=\x22rnet_woman_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet]\x20>\x20div[id^=\x22rnet_doctor_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet]\x20>\x20div[id^=\x22rnet_auto_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet=\x22rnet_news_comments\x22]\x20>\x20div[id^=\x22rnet_rambler_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[data-rnet]\x20>\x20[data-changer][data-blocks=\x22exchange_block\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[style=\x22display:block\x22]\x20>\x20[id^=\x22__ban_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[style^=\x22height\x22]\x20>\x20div\x20>\x20[id][style=\x22display:\x20block;\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[class^=\x22banner--container\x22]\x20>\x20[id][class^=\x22banner\x20banner--desktop\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[style*=\x22min-\x22]\x20>\x20div\x20>\x20div[id][style*=\x22display\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#app\x20>\x20div[class]\x20>\x20div[class]\x20>\x20div:not([class])\x20>\x20\x20div[class]\x20>\x20div[id][style*=\x22display\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div:not([class]):not([id])\x20>\x20div[style*=\x22min-\x22]\x20>\x20div\x20>\x20div[style=\x22display:\x20block;\x22]\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '1818692yPrPjH', 'removeAttribute', '270FmIaxm', 'sport.rambler.ru', 'userAgent', 'travel.rambler.ru', 'parentElement', 'body[style]', 'before', 'querySelector', 'innerText', 'navigator', '[class=\x22comments__read-also\x22],\x20div[data-traffic-blocks]\x20>\x20[class^=\x22traffic-blocks--\x22]', 'Failed\x20to\x20fetch', '133084NxwVtT', 'previousElementSibling', 'news.rambler.ru', 'weather.rambler.ru', 'children', 'mobile_top_banner', 'article\x20>\x20a[data-blocks]', '6FxHpCU', 'rgb(239,\x20245,\x20255)', '119smiUuz', 'gazeta.ru', 'woman.rambler.ru', 'div[class]\x20>\x20div\x20>\x20div\x20>\x20[id^=\x22hedux-\x22]', '1248462UJFHHi', 'kino.rambler.ru', 'developers.rambler.ru', 'auto.rambler.ru', 'horoscopes.rambler.ru', 'document', 'backgroundColor', '1110342cLnIPR', 'currentScript', 'forEach', 'window', 'Promise', 'flat', 'defineProperty', 'lenta.ru', 'value', 'setEntries', 'authorization', 'rgb(243,\x20244,\x20247)'];
                _0x1160 = function() {
                    return _0x46756d;
                };
                return _0x1160();
            }
            const _0x4a5b0f = _0x3c50;
            (function(_0x3db83c, _0x458efc) {
                const _0x555d68 = _0x3c50,
                    _0x399ddf = _0x3db83c();
                while (!![]) {
                    try {
                        const _0x2f3924 = -parseInt(_0x555d68(0xed)) / 0x1 + parseInt(_0x555d68(0xdf)) / 0x2 * (parseInt(_0x555d68(0xc6)) / 0x3) + -parseInt(_0x555d68(0xde)) / 0x4 + -parseInt(_0x555d68(0xf7)) / 0x5 * (parseInt(_0x555d68(0xd7)) / 0x6) + -parseInt(_0x555d68(0xe7)) / 0x7 + parseInt(_0x555d68(0xd6)) / 0x8 * (parseInt(_0x555d68(0xd8)) / 0x9) + parseInt(_0x555d68(0xcf)) / 0xa * (parseInt(_0x555d68(0xd2)) / 0xb);
                        if (_0x2f3924 === _0x458efc) break;
                        else _0x399ddf['push'](_0x399ddf['shift']());
                    } catch (_0x3b27c0) {
                        _0x399ddf['push'](_0x399ddf['shift']());
                    }
                }
            }(_0x4c6a, 0xa05e1));

            function _0x3c50(_0x4561e4, _0x54ce40) {
                const _0x4c6af4 = _0x4c6a();
                return _0x3c50 = function(_0x3c50d5, _0xe1c11e) {
                    _0x3c50d5 = _0x3c50d5 - 0xc3;
                    let _0x4655f1 = _0x4c6af4[_0x3c50d5];
                    return _0x4655f1;
                }, _0x3c50(_0x4561e4, _0x54ce40);
            }

            function _0x4c6a() {
                const _0x47fa58 = ['DIV', 'querySelector', 'match', '1105496iLxiUV', '.dv-post-header\x20link[crossorigin=\x22anonymous\x22][as=\x22font\x22]', 'parentNode', 'childNodes', 'querySelectorAll', 'c-post__body', 'div[class]\x20>\x20div[id]\x20>\x20div[class][id]', '.c-pager__link', 'body\x20>\x20div[class$=\x22-body\x22]\x20>\x20div[class][data-role]', 'drive2.com', '30NQERkr', '960px', 'forEach', '.js-page\x20>\x20div\x20>\x20[class*=\x22column-mid\x22]\x20>\x20div:last-child', 'partner-code-bundles', 'withCredentials', '0px', 'line-height', '6yIkuxl', 'z-index', '.js-page\x20>\x20div[class]\x20>\x20.js-gallery', 'link[crossorigin=\x22anonymous\x22][as=\x22font\x22]', '.js-page\x20>\x20div[class]\x20>\x20div[data-target][data-role]', 'adfox', '[id=\x22comments\x22]', 'lastElementChild', 'responseURL', '3865510YkrNuK', 'innerText', '.js-page\x20>\x20div[class]\x20>\x20div[itemtype$=\x22BlogPosting\x22]\x20+\x20div[class]', '55zUnFMU', 'drive2.ru', '.js-page\x20>\x20div\x20>\x20div.g-column-mid\x20+\x20div', 'contains', '2989936bUxAth', '87510WjWLFf', '18RzpuSI', 'div[class]\x20>\x20script', 'includes', 'parentElement', 'nextElementSibling', 'nodeName', '4825132HoSnUo', '1186576eczOip', 'previousElementSibling', '300px', 'width', '-9999px', 'setEntries', '.x-box\x20.c-share', 'classList', '5674627oQcJPf', '.c-exp-cols\x20>\x20.c-exp-form', '[data-role=\x22post\x22]'];
                _0x4c6a = function() {
                    return _0x47fa58;
                };
                return _0x4c6a();
            }

            function pageCallback$K() {
                const _0x49a523 = () => {
                        const _0x233b15 = _0x3c50,
                            _0x4b8d3f = _0x51ea98['querySelector'](_0x233b15(0xf5)),
                            _0x5e1919 = _0x4b8d3f === null || _0x4b8d3f === void 0x0 ? void 0x0 : _0x4b8d3f['querySelector'](_0x233b15(0xd9));
                        _0x4b8d3f && _0x5e1919 && _0x5e1919[_0x233b15(0xd0)][_0x233b15(0xda)](_0x233b15(0xcb)) && hideViaPositionProperty(_0x4b8d3f);
                    },
                    _0x4d5bc8 = () => {
                        const _0x3a3a6a = _0x3c50,
                            _0x37cd64 = document[_0x3a3a6a(0xeb)](_0x3a3a6a(0xee));
                        if (!(_0x37cd64 !== null && _0x37cd64 !== void 0x0 && _0x37cd64[_0x3a3a6a(0xdb)])) return;
                        hideViaPositionProperty(_0x37cd64['parentElement']);
                    },
                    _0x5deb7a = _0x1d650f => {
                        const _0x1acb66 = _0x3c50;
                        _0x1d650f && _0x1d650f[_0x1acb66(0xeb)](_0x1acb66(0xf3)) && hideViaOpacity(_0x1d650f);
                    },
                    _0x47cd5d = () => {
                        const _0x3b4e65 = _0x3c50;
                        var _0x2c9454, _0xd647fe, _0x2f1255;
                        const _0x24d34d = _0x51ea98[_0x3b4e65(0xeb)](_0x3b4e65(0xca)),
                            _0x1f04a5 = _0x24d34d === null || _0x24d34d === void 0x0 ? void 0x0 : _0x24d34d['previousElementSibling'];
                        _0x5deb7a(_0x1f04a5);
                        const _0x5c55b1 = _0x24d34d === null || _0x24d34d === void 0x0 ? void 0x0 : _0x24d34d[_0x3b4e65(0xdc)];
                        _0x5deb7a(_0x5c55b1);
                        const _0x6ba474 = (_0x2c9454 = _0x51ea98[_0x3b4e65(0xeb)](_0x3b4e65(0xc8))) === null || _0x2c9454 === void 0x0 ? void 0x0 : _0x2c9454[_0x3b4e65(0xdc)];
                        _0x5deb7a(_0x6ba474);
                        const _0x4a3fb0 = (_0xd647fe = _0x51ea98[_0x3b4e65(0xeb)]('.js-page\x20>\x20div[class]\x20>\x20.offer')) === null || _0xd647fe === void 0x0 ? void 0x0 : _0xd647fe['nextElementSibling'];
                        _0x5deb7a(_0x4a3fb0);
                        const _0x3e328d = _0x51ea98[_0x3b4e65(0xeb)](_0x3b4e65(0xd1));
                        _0x5deb7a(_0x3e328d);
                        const _0x1aaae0 = (_0x2f1255 = _0x51ea98[_0x3b4e65(0xeb)]('div[id=\x22comments\x22].x-box')) === null || _0x2f1255 === void 0x0 ? void 0x0 : _0x2f1255[_0x3b4e65(0xdc)];
                        _0x5deb7a(_0x1aaae0);
                    },
                    _0x283b83 = () => {
                        const _0x259f3c = _0x3c50;
                        var _0x170ad7;
                        const _0x66bb63 = _0x51ea98['querySelector'](_0x259f3c(0xfa));
                        _0x66bb63 && _0x66bb63 !== null && _0x66bb63 !== void 0x0 && (_0x170ad7 = _0x66bb63[_0x259f3c(0xe0)]) !== null && _0x170ad7 !== void 0x0 && _0x170ad7[_0x259f3c(0xeb)](_0x259f3c(0xf4)) && hideViaPositionProperty(_0x66bb63);
                    },
                    _0x3f2395 = () => {
                        const _0x4586e9 = _0x3c50,
                            _0x495400 = _0x51ea98[_0x4586e9(0xf1)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20div[style*=\x22width\x22][style*=\x22height\x22]\x20>\x20div[style*=\x22width\x22][style*=\x22height\x22]\x20iframe,\x0a\x20\x20\x20\x20\x20\x20\x20\x20iframe[allowfullscreen][style*=\x22block\x22][width=\x22300px\x22][height=\x22500px\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20iframe[allowfullscreen][style*=\x22block\x22][width=\x22300px\x22][height=\x22300px\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20iframe[allowfullscreen][style*=\x22block\x22][width=\x22300px\x22][height=\x22290px\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20iframe[allowfullscreen][style*=\x22block\x22][width=\x22100%\x22]\x0a\x20\x20\x20\x20');
                        [..._0x495400]['forEach'](_0x48c06f => {
                            const _0x359264 = _0x4586e9,
                                _0x38aa31 = getParent(_0x48c06f, 0x3);
                            getComputedStyle(_0x38aa31)[_0x359264(0xe2)] !== _0x359264(0xf8) && removeNode(_0x38aa31);
                        });
                    },
                    _0x54905a = () => {
                        const _0x39595e = _0x3c50,
                            _0x2a957e = _0x51ea98[_0x39595e(0xeb)](_0x39595e(0xd4));
                        if (!_0x2a957e) return;
                        const _0x15e356 = _0x2a957e[_0x39595e(0xcd)],
                            {
                                top: _0x177e20
                            } = getComputedStyle(_0x15e356);
                        (_0x177e20 === '70px' || _0x177e20 === _0x39595e(0xe3)) && removeNode(_0x15e356);
                    },
                    _0x2d944d = () => {
                        const _0x197d29 = _0x3c50;
                        var _0x742d5c;
                        const _0x2f2c6d = _0x51ea98['document'][_0x197d29(0xeb)](_0x197d29(0xe8)),
                            _0x28c455 = _0x2f2c6d === null || _0x2f2c6d === void 0x0 ? void 0x0 : (_0x742d5c = _0x2f2c6d[_0x197d29(0xef)]) === null || _0x742d5c === void 0x0 ? void 0x0 : _0x742d5c[_0x197d29(0xcd)];
                        _0x5deb7a(_0x28c455);
                    },
                    _0x5e2cee = () => {
                        const _0x11d12e = _0x3c50,
                            _0x5c73ca = _0x51ea98[_0x11d12e(0xeb)](_0x11d12e(0xcc));
                        if (!_0x5c73ca) return;
                        for (let _0x4feb1c = 0x1; _0x4feb1c < 0x5; _0x4feb1c += 0x1) {
                            const _0x501c1a = getParent(_0x5c73ca, _0x4feb1c),
                                _0x4fc004 = _0x501c1a === null || _0x501c1a === void 0x0 ? void 0x0 : _0x501c1a[_0x11d12e(0xdc)];
                            if (_0x4fc004 && getComputedStyle(_0x4fc004)['width'] === _0x11d12e(0xe1)) {
                                hideViaPositionProperty(_0x4fc004);
                                break;
                            }
                        }
                    },
                    _0x3113ba = () => {
                        const _0x2d24a8 = _0x3c50,
                            _0x472285 = _0x51ea98[_0x2d24a8(0xeb)](_0x2d24a8(0xe9));
                        if (!_0x472285) return;
                        const _0x10d2b8 = _0x472285['childNodes'];
                        [..._0x10d2b8][_0x2d24a8(0xf9)](_0x364af8 => {
                            const _0x4f7dd1 = _0x2d24a8;
                            var _0x5ece61, _0x409d8e;
                            const _0x227113 = (_0x5ece61 = _0x364af8[_0x4f7dd1(0xe0)]) === null || _0x5ece61 === void 0x0 ? void 0x0 : _0x5ece61[_0x4f7dd1(0xe6)],
                                _0x4ebf58 = (_0x409d8e = _0x364af8['nextElementSibling']) === null || _0x409d8e === void 0x0 ? void 0x0 : _0x409d8e[_0x4f7dd1(0xe6)];
                            if (!_0x227113 || !_0x4ebf58) return;
                            _0x227113[_0x4f7dd1(0xd5)]('o-group') && _0x4ebf58[_0x4f7dd1(0xd5)](_0x4f7dd1(0xf2)) && hideViaPositionProperty(_0x364af8);
                        });
                    },
                    _0x5f38d2 = () => {
                        const _0x4ed31e = _0x3c50,
                            _0x16bc4b = _0x51ea98[_0x4ed31e(0xeb)]('[itemprop=\x22articleBody\x22]\x20>\x20div:not([class*=\x22post__pic\x22])');
                        if (!_0x16bc4b) return;
                        _0x16bc4b[_0x4ed31e(0xeb)](_0x4ed31e(0xc9)) && hideViaPositionProperty(_0x16bc4b);
                    },
                    _0x14150e = () => {
                        const _0xc4ff25 = _0x3c50,
                            _0x5338b4 = _0x51ea98[_0xc4ff25(0xeb)]('body\x20>\x20main');
                        if (!_0x5338b4) return;
                        const _0x37ad24 = _0x5338b4[_0xc4ff25(0xf0)];
                        [..._0x37ad24][_0xc4ff25(0xf9)](_0x19fb3e => {
                            const _0x290c97 = _0xc4ff25;
                            if (_0x19fb3e[_0x290c97(0xdd)] !== _0x290c97(0xea)) return;
                            getComputedStyle(_0x19fb3e)[_0x290c97(0xc7)] === '1' && getComputedStyle(_0x19fb3e)[_0x290c97(0xc5)] === _0x290c97(0xc4) && hideViaPositionProperty(_0x19fb3e);
                        });
                    },
                    _0xbee3b3 = () => {
                        const _0x238bc0 = _0x3c50;
                        var _0xcfc3c4;
                        const _0x44815e = _0x51ea98[_0x238bc0(0xeb)](_0x238bc0(0xe5)),
                            _0x5d2bff = getParent(_0x44815e, 0x2);
                        _0x44815e && _0x5d2bff !== null && _0x5d2bff !== void 0x0 && (_0xcfc3c4 = _0x5d2bff[_0x238bc0(0xe6)]) !== null && _0xcfc3c4 !== void 0x0 && _0xcfc3c4[_0x238bc0(0xd5)]('x-box') && removeNode(_0x5d2bff);
                    },
                    _0x51179d = _0x208871 => {
                        const _0x1cc931 = _0x3c50;
                        if (_0x208871[_0x1cc931(0xce)][_0x1cc931(0xec)](/drive2.ru\/.{1,50}\/*/) && _0x208871[_0x1cc931(0xc3)] === !![]) return !![];
                        if (_0x208871['responseURL']['includes'](_0x1cc931(0xfb))) return !![];
                        if (_0x208871[_0x1cc931(0xce)][_0x1cc931(0xda)]('adfox')) return !![];
                        return ![];
                    };
                preventXHR(_0x51179d), observeDomChanges(() => {
                    _0x49a523(), _0x4d5bc8(), _0x47cd5d(), _0x283b83(), _0x54905a(), _0x2d944d(), _0x5e2cee(), _0xbee3b3(), !isMobile() && _0x3f2395(), isMobile() && (_0x3113ba(), _0x5f38d2(), _0x14150e());
                });
            }
            commonHosts[_0x4a5b0f(0xe4)]([_0x4a5b0f(0xd3), _0x4a5b0f(0xf6)], pageCallback$K);
            const _0x2c9c0e = _0x4ee9;
            (function(_0x10cfe8, _0x4efb30) {
                const _0x178963 = _0x4ee9,
                    _0x87a8ab = _0x10cfe8();
                while (!![]) {
                    try {
                        const _0x1b64a2 = -parseInt(_0x178963(0xb8)) / 0x1 + -parseInt(_0x178963(0xa3)) / 0x2 + parseInt(_0x178963(0xaf)) / 0x3 + parseInt(_0x178963(0xb4)) / 0x4 * (-parseInt(_0x178963(0x9d)) / 0x5) + -parseInt(_0x178963(0x99)) / 0x6 + -parseInt(_0x178963(0xb2)) / 0x7 * (-parseInt(_0x178963(0xa8)) / 0x8) + parseInt(_0x178963(0xb5)) / 0x9;
                        if (_0x1b64a2 === _0x4efb30) break;
                        else _0x87a8ab['push'](_0x87a8ab['shift']());
                    } catch (_0x204392) {
                        _0x87a8ab['push'](_0x87a8ab['shift']());
                    }
                }
            }(_0x2e25$1, 0xc43c9));

            function _0x4ee9(_0x1c0dba, _0x1ed2d0) {
                const _0x2e25c5 = _0x2e25$1();
                return _0x4ee9 = function(_0x4ee9e6, _0x1e295c) {
                    _0x4ee9e6 = _0x4ee9e6 - 0x97;
                    let _0x3a19cb = _0x2e25c5[_0x4ee9e6];
                    return _0x3a19cb;
                }, _0x4ee9(_0x1c0dba, _0x1ed2d0);
            }

            function _0x2e25$1() {
                const _0x5ae531 = ['/pubads_impl.js?cb=', 'host', 'floor', '[fivis=0]', 'construct', '5489124FgJivj', 'location', 'dropgalaxy.com', '[referer=', '5OShatc', 'includes', '[fdref44=1273.41px]', '[fivis=1]', '[fdref42=none]', '[adblock_detected=1]', '1810012UulsgE', 'encode', 'djxmaza.in', 'dropgalaxy.co', '[finun=0]', '8rOspHF', 'getMonth', 'random', '[vidn=1]', 'toString', 'replace', '[finum=8]', '1270032gQxlYS', 'getFullYear', 'dev.miuiflash.com', '6522327lloljr', 'Uint8Array', '2611912kMEfLZ', '29335725xbuNtH', 'slice', '[finum=0]', '1338007guSfip', 'jytechs.in', '[scr=https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/m'];
                _0x2e25$1 = function() {
                    return _0x5ae531;
                };
                return _0x2e25$1();
            }

            function pageCallback$J() {
                const _0x311cba = _0x4ee9,
                    _0x3b1104 = _0x4cfd8e => {
                        const _0xf39e71 = _0x4ee9;
                        let _0x5a3d27 = _0x4cfd8e[_0xf39e71(0xb0)]()['toString']();
                        return _0x5a3d27 += (_0x4cfd8e[_0xf39e71(0xa9)]() + 0x1)[_0xf39e71(0xac)]()['padStart'](0x2, '0'), _0x5a3d27 += _0x4cfd8e['getDate']()[_0xf39e71(0xac)]()['padStart'](0x2, '0'), _0x5a3d27;
                    };

                function _0x283836(_0x13d67f) {
                    const _0x2db7a5 = _0x4ee9;
                    let _0x273218 = _0x13d67f;
                    return _0x273218 += _0x2db7a5(0xba) + ('' + _0x3b1104(new Date()) + Math[_0x2db7a5(0xbd)](Math[_0x2db7a5(0xaa)]() * 0xf9f) + _0x2db7a5(0xbb)) + (Math['floor'](Math['random']() * 0x989680) + ']'), _0x273218[_0x2db7a5(0xad)](/\[scr=undefined\]/g, '')[_0x2db7a5(0xad)](/\[scr=chrome-extension:[^\]]+\]/g, '')[_0x2db7a5(0xad)]('[referer=]', _0x2db7a5(0x9c) + _0x51ea98[_0x2db7a5(0x9a)][_0x2db7a5(0xbc)] + ']')['replace'](_0x2db7a5(0xa2), '[adblock_detected=0]')[_0x2db7a5(0xad)](_0x2db7a5(0xb7), _0x2db7a5(0xae))['replace'](_0x2db7a5(0xa7), '[finun=2]')['replace'](_0x2db7a5(0x97), _0x2db7a5(0xa0))['replace'](_0x2db7a5(0xab), '[vidn=2]')[_0x2db7a5(0xad)](_0x2db7a5(0xa1), '[fdref42=block]')['replace'](/\[fdref44=\d+\]/g, _0x2db7a5(0x9f));
                }
                const _0x119ee0 = (_0x5b6abd, _0x587803, _0x47995c) => {
                        const _0x57ad20 = _0x4ee9,
                            _0x43639d = Reflect[_0x57ad20(0x98)](_0x5b6abd, _0x587803, _0x47995c);
                        let _0x30fb79 = new TextDecoder()['decode'](_0x43639d);
                        if (_0x30fb79[_0x57ad20(0x9e)]('[scr=')) {
                            const _0x24430f = _0x30fb79['lastIndexOf'](']') + 0x1;
                            _0x30fb79 = _0x30fb79[_0x57ad20(0xb6)](0x0, _0x24430f);
                            const _0x4fa8f2 = _0x283836(_0x30fb79),
                                _0x5769d6 = new TextEncoder()[_0x57ad20(0xa4)](_0x4fa8f2);
                            return _0x5769d6;
                        }
                        return _0x43639d;
                    },
                    _0x23bbdc = {};
                _0x23bbdc[_0x311cba(0x98)] = _0x119ee0;
                const _0x335e80 = _0x23bbdc;
                _0x51ea98['window']['Uint8Array'] = new Proxy(window[_0x311cba(0xb3)], _0x335e80);
            }
            commonHosts['setEntries']([_0x2c9c0e(0xa6), _0x2c9c0e(0x9b), _0x2c9c0e(0xa5), _0x2c9c0e(0xb1), 'thecubexguide.com', _0x2c9c0e(0xb9)], pageCallback$J);
            const _0xdc05c2 = _0x2374;
            (function(_0x2f81f4, _0x2621ac) {
                const _0x4c2d02 = _0x2374,
                    _0x43a811 = _0x2f81f4();
                while (!![]) {
                    try {
                        const _0x5d12f7 = -parseInt(_0x4c2d02(0x1df)) / 0x1 + -parseInt(_0x4c2d02(0x1de)) / 0x2 + parseInt(_0x4c2d02(0x1e0)) / 0x3 * (-parseInt(_0x4c2d02(0x1f2)) / 0x4) + -parseInt(_0x4c2d02(0x1f3)) / 0x5 + -parseInt(_0x4c2d02(0x1f7)) / 0x6 + -parseInt(_0x4c2d02(0x1ee)) / 0x7 * (-parseInt(_0x4c2d02(0x1f4)) / 0x8) + -parseInt(_0x4c2d02(0x1dc)) / 0x9 * (-parseInt(_0x4c2d02(0x1e3)) / 0xa);
                        if (_0x5d12f7 === _0x2621ac) break;
                        else _0x43a811['push'](_0x43a811['shift']());
                    } catch (_0xdd69c4) {
                        _0x43a811['push'](_0x43a811['shift']());
                    }
                }
            }(_0x632c, 0x6d5de));

            function _0x2374(_0x3f7204, _0x4c8397) {
                const _0x632cf9 = _0x632c();
                return _0x2374 = function(_0x237429, _0x4b2691) {
                    _0x237429 = _0x237429 - 0x1dc;
                    let _0x2d4c28 = _0x632cf9[_0x237429];
                    return _0x2d4c28;
                }, _0x2374(_0x3f7204, _0x4c8397);
            }

            function _0x632c() {
                const _0xe35dc1 = ['setEntries', 'forEach', '397453JLdKOs', 'tagName', 'slice', 'textContent', '466316IMdoFN', '2701200IhXcAE', '32dwBWRU', 'parentNode', 'previousSibling', '2275782vXdoWV', 'SCRIPT', '63rdxtCW', 'attributes', '1784460NRHzvD', '509936Urwbof', '3gUwsBg', 'header', 'undefined', '3798760tfYpeT', 'body', 'children', '#superfooter', 'length', 'document', 'indexOf', 'eda.ru', 'querySelector'];
                _0x632c = function() {
                    return _0xe35dc1;
                };
                return _0x632c();
            }

            function pageCallback$I() {
                const _0x17fc5e = function _0x25b281() {
                        const _0x7ec002 = _0x2374;
                        for (var _0x5ccff1 = arguments[_0x7ec002(0x1e7)], _0x31f8f1 = new Array(_0x5ccff1), _0x187a8c = 0x0; _0x187a8c < _0x5ccff1; _0x187a8c++) {
                            _0x31f8f1[_0x187a8c] = arguments[_0x187a8c];
                        }
                        for (let _0x2e46b7 = 0x1; _0x2e46b7 < _0x31f8f1[_0x7ec002(0x1e7)]; _0x2e46b7 += 0x1) {
                            if (_0x31f8f1[_0x2e46b7] === null || _0x31f8f1[_0x2e46b7] !== _0x31f8f1[_0x2e46b7 - 0x1]) return ![];
                        }
                        return !![];
                    },
                    _0x4e7a15 = () => {
                        const _0x4c6192 = _0x2374;
                        try {
                            const _0x5bee5b = _0x51ea98['document'][_0x4c6192(0x1eb)](_0x4c6192(0x1e4)),
                                _0x550b46 = [..._0x5bee5b[_0x4c6192(0x1e5)]],
                                _0x55d7d3 = _0x51ea98[_0x4c6192(0x1e8)][_0x4c6192(0x1eb)](_0x4c6192(0x1e1))[_0x4c6192(0x1f5)],
                                _0x399d86 = _0x550b46[_0x4c6192(0x1e9)](_0x55d7d3);
                            if (_0x399d86 === -0x1) return;
                            const _0x5b1fb0 = _0x550b46[_0x4c6192(0x1f0)](0x0, _0x399d86);
                            let _0x16eea9;
                            _0x5b1fb0[_0x4c6192(0x1ed)]((_0x331184, _0x451f54) => {
                                const _0x140baf = _0x4c6192;
                                _0x331184[_0x140baf(0x1ef)] === _0x140baf(0x1f8) && (_0x16eea9 = _0x451f54);
                            });
                            if (_0x16eea9 === _0x4c6192(0x1e2)) return;
                            for (let _0x1ce257 = _0x16eea9 + 0x1; _0x1ce257 < _0x399d86; _0x1ce257 += 0x1) {
                                hideViaDisplayProperty(_0x5b1fb0[_0x1ce257]);
                            }
                        } catch (_0x25d45a) {}
                    },
                    _0xb48fe8 = () => {
                        const _0x396708 = _0x2374;
                        try {
                            const _0x385f67 = _0x51ea98[_0x396708(0x1e8)][_0x396708(0x1eb)](_0x396708(0x1e6))[_0x396708(0x1f6)];
                            _0x385f67[_0x396708(0x1e5)]['length'] === 0x3 && _0x17fc5e(_0x385f67[_0x396708(0x1e5)][0x0][_0x396708(0x1dd)][0x0]['textContent'], _0x385f67[_0x396708(0x1e5)][0x1][_0x396708(0x1dd)][0x0][_0x396708(0x1f1)], _0x385f67[_0x396708(0x1e5)][0x2][_0x396708(0x1dd)][0x0]['textContent']) && hideViaDisplayProperty(_0x385f67);
                        } catch (_0x3ea087) {}
                    };
                observeDomChanges(() => {
                    _0x4e7a15(), _0xb48fe8();
                });
            }
            commonHosts[_0xdc05c2(0x1ec)]([_0xdc05c2(0x1ea)], pageCallback$I);
            const _0x28ea10 = _0x31c2;
            (function(_0x174560, _0x12b1bd) {
                const _0xea867e = _0x31c2,
                    _0x1e087a = _0x174560();
                while (!![]) {
                    try {
                        const _0xc38e33 = -parseInt(_0xea867e(0x199)) / 0x1 * (-parseInt(_0xea867e(0x1aa)) / 0x2) + parseInt(_0xea867e(0x1b6)) / 0x3 + -parseInt(_0xea867e(0x191)) / 0x4 + parseInt(_0xea867e(0x1b7)) / 0x5 + -parseInt(_0xea867e(0x18d)) / 0x6 * (-parseInt(_0xea867e(0x1ac)) / 0x7) + -parseInt(_0xea867e(0x19a)) / 0x8 + -parseInt(_0xea867e(0x197)) / 0x9;
                        if (_0xc38e33 === _0x12b1bd) break;
                        else _0x1e087a['push'](_0x1e087a['shift']());
                    } catch (_0x40f265) {
                        _0x1e087a['push'](_0x1e087a['shift']());
                    }
                }
            }(_0x12f0, 0x9eaf0));

            function _0x31c2(_0x25c66e, _0x262989) {
                const _0x12f04f = _0x12f0();
                return _0x31c2 = function(_0x31c267, _0x4042b9) {
                    _0x31c267 = _0x31c267 - 0x189;
                    let _0x2d6cb6 = _0x12f04f[_0x31c267];
                    return _0x2d6cb6;
                }, _0x31c2(_0x25c66e, _0x262989);
            }

            function pageCallback$H() {
                const _0x28c512 = () => {
                        const _0x273a8f = _0x31c2;
                        var _0x131912;
                        const _0x5e0337 = _0x51ea98[_0x273a8f(0x1a7)][_0x273a8f(0x1ab)](_0x273a8f(0x1b8)),
                            _0x319e46 = _0x5e0337 === null || _0x5e0337 === void 0x0 ? void 0x0 : _0x5e0337[_0x273a8f(0x189)];
                        if (!_0x319e46) return;
                        const _0xf00cbf = [_0x273a8f(0x1a6), _0x273a8f(0x1b5), _0x273a8f(0x194)];
                        if (_0xf00cbf[_0x273a8f(0x18a)](_0x52c7cf => _0x319e46[_0x273a8f(0x1a1)] === _0x52c7cf)) return;
                        (_0x131912 = _0x319e46[_0x273a8f(0x1b4)]) !== null && _0x131912 !== void 0x0 && _0x131912[_0x273a8f(0x19b)] && removeNode(_0x319e46);
                    },
                    _0x16ef9f = () => {
                        const _0x1221fa = _0x31c2,
                            _0x921026 = _0x51ea98['querySelector']('.LayoutSidebar');
                        _0x921026 && [..._0x921026[_0x1221fa(0x1a5)]][_0x1221fa(0x1ad)](_0x27f79e => {
                            const _0x4aff86 = _0x1221fa;
                            _0x27f79e[_0x4aff86(0x19b)] !== _0x4aff86(0x19c) && hideViaPositionProperty(_0x27f79e[_0x4aff86(0x1b4)]);
                        });
                        const _0x3cfce9 = _0x51ea98[_0x1221fa(0x1ab)](_0x1221fa(0x192)),
                            _0x3b04fe = _0x3cfce9 === null || _0x3cfce9 === void 0x0 ? void 0x0 : _0x3cfce9[_0x1221fa(0x1b1)];
                        _0x3b04fe && [..._0x3b04fe['children']][_0x1221fa(0x1ad)](_0x1c054b => {
                            const _0x5b366e = _0x1221fa,
                                {
                                    nodeName: _0x187a4f
                                } = _0x1c054b;
                            (_0x187a4f[_0x5b366e(0x198)]('RTB') || _0x187a4f[_0x5b366e(0x198)](_0x5b366e(0x1a3))) && hideViaPositionProperty(_0x1c054b);
                        });
                    },
                    _0x210ff9 = () => {
                        const _0x4a3099 = _0x31c2,
                            _0xa20f7e = _0x51ea98[_0x4a3099(0x1a7)][_0x4a3099(0x1ab)]('#priceRange');
                        if (!_0xa20f7e) return;
                        const _0x186a3d = _0xa20f7e[_0x4a3099(0x1af)];
                        _0x186a3d && !_0x186a3d[_0x4a3099(0x19b)] && hideViaPositionProperty(_0x186a3d);
                    },
                    _0x1763bb = () => {
                        const _0x2ab80b = _0x31c2;
                        var _0xf95daa, _0x46bb42;
                        const _0x5dc194 = _0x51ea98[_0x2ab80b(0x1a7)][_0x2ab80b(0x1ab)](_0x2ab80b(0x196));
                        if (!_0x5dc194) return;
                        const _0x3d3011 = _0x5dc194 === null || _0x5dc194 === void 0x0 ? void 0x0 : (_0xf95daa = _0x5dc194[_0x2ab80b(0x190)]) === null || _0xf95daa === void 0x0 ? void 0x0 : (_0x46bb42 = _0xf95daa[_0x2ab80b(0x190)]) === null || _0x46bb42 === void 0x0 ? void 0x0 : _0x46bb42[_0x2ab80b(0x190)];
                        _0x3d3011 && getComputedStyle(_0x3d3011)[_0x2ab80b(0x1a8)] === _0x2ab80b(0x18f) && hideViaPositionProperty(_0x3d3011);
                    },
                    _0x31edcb = () => {
                        const _0x3f6ecd = _0x31c2,
                            _0x325a09 = _0x51ea98[_0x3f6ecd(0x1a7)][_0x3f6ecd(0x1b2)](_0x3f6ecd(0x193));
                        for (let _0x3f2bb5 = 0x0; _0x3f2bb5 < _0x325a09[_0x3f6ecd(0x1a4)]; _0x3f2bb5 += 0x1) {
                            const _0x2e2990 = _0x325a09[_0x3f2bb5];
                            _0x2e2990 && _0x2e2990[_0x3f6ecd(0x1a0)]['indexOf'](_0x3f6ecd(0x18e)) > 0x0 && _0x2e2990[_0x3f6ecd(0x1a0)][_0x3f6ecd(0x1ae)](_0x3f6ecd(0x1b0)) > 0x0 && removeNode(_0x2e2990);
                        }
                    },
                    _0x56c5ab = () => {
                        const _0x3a4d41 = _0x31c2,
                            _0x4bcbdd = _0x51ea98[_0x3a4d41(0x1ab)](_0x3a4d41(0x1a2)),
                            _0x4b8536 = _0x4bcbdd === null || _0x4bcbdd === void 0x0 ? void 0x0 : _0x4bcbdd[_0x3a4d41(0x1a5)];
                        _0x4b8536 && [..._0x4b8536][_0x3a4d41(0x1ad)](_0x37d083 => {
                            const _0x36ce8d = _0x3a4d41;
                            _0x37d083['tagName'][_0x36ce8d(0x198)]('ADS-') && removeNode(_0x37d083);
                        });
                        const _0x23a0ee = _0x51ea98[_0x3a4d41(0x1ab)](_0x3a4d41(0x18b)),
                            _0x55b804 = _0x23a0ee === null || _0x23a0ee === void 0x0 ? void 0x0 : _0x23a0ee[_0x3a4d41(0x1a5)];
                        _0x55b804 && [..._0x55b804][_0x3a4d41(0x1ad)](_0x5b931d => {
                            const _0x4d0eb5 = _0x3a4d41;
                            _0x5b931d[_0x4d0eb5(0x19d)][_0x4d0eb5(0x198)](_0x4d0eb5(0x19f)) && removeNode(_0x5b931d);
                        });
                        const _0x16f196 = _0x51ea98[_0x3a4d41(0x1ab)](_0x3a4d41(0x1a9));
                        _0x16f196 && _0x16f196[_0x3a4d41(0x19d)][_0x3a4d41(0x198)]('ADS-BRAND') && removeNode(_0x16f196);
                    },
                    _0x107034 = _0x978253 => {
                        const _0x1126cc = _0x31c2,
                            {
                                responseURL: _0x4e071f,
                                response: _0x241524
                            } = _0x978253;
                        if (_0x4e071f && _0x4e071f['includes'](_0x1126cc(0x1b3))) return !![];
                        if (_0x241524 && _0x241524[_0x1126cc(0x198)](_0x1126cc(0x195))) return !![];
                        return ![];
                    };
                preventXHR(_0x107034), observeDomChanges(() => {
                    _0x210ff9(), _0x1763bb(), _0x28c512(), _0x16ef9f(), _0x31edcb(), _0x56c5ab();
                });
            }
            commonHosts[_0x28ea10(0x19e)]([_0x28ea10(0x18c)], pageCallback$H);

            function _0x12f0() {
                const _0x6b9cb8 = ['STYLE', 'rtbAuctionInfo', 'a[target$=\x22_blank\x22][href^=\x22https://an.yandex.ru\x22]', '11026377CkKGdI', 'includes', '8tBvJUu', '5256792KLRCIX', 'className', 'LayoutSidebar__content', 'tagName', 'setEntries', 'ADS-', 'innerText', 'nodeName', '[class$=\x22__content\x22]\x20>\x20[class$=\x22container\x22]', 'ADFOX', 'length', 'children', 'DIV', 'document', 'width', '.Index\x20\x20>\x20.Index__block\x20>\x20[class$=\x22place_brand\x22]', '230974zwzPox', 'querySelector', '10276ViwrUU', 'forEach', 'indexOf', 'nextElementSibling', 'direct', 'firstChild', 'getElementsByTagName', 'yandex.ru/ads', 'firstElementChild', 'SCRIPT', '1534050LburES', '3782555mGfnxp', 'header', 'previousElementSibling', 'some', '[class$=\x22__sidebar\x22]\x20>\x20[class$=\x22__sidebarStickyContent\x22]', 'auto.ru', '3156aHiKwP', 'onError', '240px', 'parentNode', '1726820JDSsMF', '.ScrollableSidebar', 'script'];
                _0x12f0 = function() {
                    return _0x6b9cb8;
                };
                return _0x12f0();
            }

            function _0x46f4(_0x447b15, _0x10a170) {
                const _0x12f18c = _0x12f1();
                return _0x46f4 = function(_0x46f4d1, _0x400a84) {
                    _0x46f4d1 = _0x46f4d1 - 0x141;
                    let _0x1c1798 = _0x12f18c[_0x46f4d1];
                    return _0x1c1798;
                }, _0x46f4(_0x447b15, _0x10a170);
            }
            const _0x3a8c82 = _0x46f4;

            function _0x12f1() {
                const _0x2c0b19 = ['DIV', '20556gMXiQE', '1114515ZYBjci', 'nodeName', '11091360pfykOT', '16YddaGb', '8rhDypI', '2zteGic', 'SCRIPT', 'document', 'media.auto.ru', '11WpudBZ', '135075aEjPuT', 'querySelector', '531095bjltmK', '810110HjRWQJ', '28ZnzZcx', '411459DKlaSH'];
                _0x12f1 = function() {
                    return _0x2c0b19;
                };
                return _0x12f1();
            }(function(_0x4c0cca, _0x206951) {
                const _0x29d76c = _0x46f4,
                    _0x569415 = _0x4c0cca();
                while (!![]) {
                    try {
                        const _0x7fe0d8 = -parseInt(_0x29d76c(0x148)) / 0x1 + parseInt(_0x29d76c(0x143)) / 0x2 * (-parseInt(_0x29d76c(0x14d)) / 0x3) + parseInt(_0x29d76c(0x142)) / 0x4 * (-parseInt(_0x29d76c(0x14a)) / 0x5) + -parseInt(_0x29d76c(0x14f)) / 0x6 * (-parseInt(_0x29d76c(0x14c)) / 0x7) + -parseInt(_0x29d76c(0x141)) / 0x8 * (parseInt(_0x29d76c(0x150)) / 0x9) + -parseInt(_0x29d76c(0x14b)) / 0xa * (parseInt(_0x29d76c(0x147)) / 0xb) + parseInt(_0x29d76c(0x152)) / 0xc;
                        if (_0x7fe0d8 === _0x206951) break;
                        else _0x569415['push'](_0x569415['shift']());
                    } catch (_0xd067d6) {
                        _0x569415['push'](_0x569415['shift']());
                    }
                }
            }(_0x12f1, 0x1e6dd));

            function pageCallback$G() {
                const _0x3d8978 = () => {
                    const _0x108227 = _0x46f4;
                    var _0x3a377c;
                    const _0x47a43e = _0x51ea98[_0x108227(0x145)][_0x108227(0x149)]('header'),
                        _0x5b0260 = _0x47a43e === null || _0x47a43e === void 0x0 ? void 0x0 : _0x47a43e['previousElementSibling'];
                    if (!_0x5b0260) return;
                    const _0x491522 = [_0x108227(0x14e), _0x108227(0x144), 'STYLE'];
                    if (_0x491522['some'](_0x5e0f32 => _0x5b0260[_0x108227(0x151)] === _0x5e0f32)) return;
                    (_0x3a377c = _0x5b0260['firstElementChild']) !== null && _0x3a377c !== void 0x0 && _0x3a377c['className'] && removeNode(_0x5b0260);
                };
                observeDomChanges(() => {
                    _0x3d8978();
                });
            }
            commonHosts['setEntries']([_0x3a8c82(0x146)], pageCallback$G);
            const _0x1298be = _0x1daa;
            (function(_0x3b448e, _0x209c5f) {
                const _0x4ed0ce = _0x1daa,
                    _0x427680 = _0x3b448e();
                while (!![]) {
                    try {
                        const _0x23a573 = parseInt(_0x4ed0ce(0x174)) / 0x1 * (parseInt(_0x4ed0ce(0x166)) / 0x2) + parseInt(_0x4ed0ce(0x17c)) / 0x3 * (parseInt(_0x4ed0ce(0x178)) / 0x4) + -parseInt(_0x4ed0ce(0x167)) / 0x5 * (parseInt(_0x4ed0ce(0x179)) / 0x6) + parseInt(_0x4ed0ce(0x17b)) / 0x7 * (-parseInt(_0x4ed0ce(0x171)) / 0x8) + parseInt(_0x4ed0ce(0x16c)) / 0x9 * (-parseInt(_0x4ed0ce(0x16b)) / 0xa) + parseInt(_0x4ed0ce(0x173)) / 0xb + parseInt(_0x4ed0ce(0x17d)) / 0xc;
                        if (_0x23a573 === _0x209c5f) break;
                        else _0x427680['push'](_0x427680['shift']());
                    } catch (_0x346846) {
                        _0x427680['push'](_0x427680['shift']());
                    }
                }
            }(_0x2de2, 0x6d6e6));

            function _0x2de2() {
                const _0x3e26c1 = ['40px', 'style', 'forEach', '1055460qHnufZ', '36pNcIKs', 'querySelector', 'textContent', 'REKLAMA', 'parentNode', '151832bcSpBe', 'width', '5733068wqRWNd', '7XVZTkm', 'sheet', 'setEntries', '320px', '64EUzRkz', '1485006eUiAqu', 'wp.pl', '196NlBcDO', '49551jzZOfU', '7272768PXcCXl', 'cssRules', 'querySelectorAll', 'span', '73658kYJMKn', '5twHbXH'];
                _0x2de2 = function() {
                    return _0x3e26c1;
                };
                return _0x2de2();
            }

            function _0x1daa(_0x26e33b, _0x30c1d7) {
                const _0x2de28f = _0x2de2();
                return _0x1daa = function(_0x1daad6, _0x31d7fb) {
                    _0x1daad6 = _0x1daad6 - 0x163;
                    let _0x302a71 = _0x2de28f[_0x1daad6];
                    return _0x302a71;
                }, _0x1daa(_0x26e33b, _0x30c1d7);
            }

            function pageCallback$F() {
                const _0x4e5cf4 = () => {
                        const _0x1b93ae = _0x1daa;
                        var _0x341ed8, _0x294dd5;
                        const _0x240181 = (_0x341ed8 = _0x51ea98[_0x1b93ae(0x16d)]('style[data-id=wpcss]')) === null || _0x341ed8 === void 0x0 ? void 0x0 : (_0x294dd5 = _0x341ed8[_0x1b93ae(0x175)]) === null || _0x294dd5 === void 0x0 ? void 0x0 : _0x294dd5[_0x1b93ae(0x163)];
                        if (!_0x240181) return;
                        [..._0x240181]['forEach'](_0x3b4f2f => {
                            const _0x4e9aea = _0x1b93ae;
                            var _0x4761f8, _0x3df89c;
                            (_0x3b4f2f === null || _0x3b4f2f === void 0x0 ? void 0x0 : (_0x4761f8 = _0x3b4f2f[_0x4e9aea(0x169)]) === null || _0x4761f8 === void 0x0 ? void 0x0 : _0x4761f8[_0x4e9aea(0x172)]) === _0x4e9aea(0x177) && (_0x3b4f2f === null || _0x3b4f2f === void 0x0 ? void 0x0 : (_0x3df89c = _0x3b4f2f[_0x4e9aea(0x169)]) === null || _0x3df89c === void 0x0 ? void 0x0 : _0x3df89c['height']) === _0x4e9aea(0x168) && hideViaDisplayProperty(_0x3b4f2f);
                        });
                    },
                    _0xb9b837 = () => {
                        const _0x4dab2f = _0x1daa;
                        _0x51ea98[_0x4dab2f(0x164)](_0x4dab2f(0x165))[_0x4dab2f(0x16a)](_0x56b49e => {
                            const _0x4fc6c9 = _0x4dab2f;
                            (_0x56b49e === null || _0x56b49e === void 0x0 ? void 0x0 : _0x56b49e[_0x4fc6c9(0x16e)]) === _0x4fc6c9(0x16f) && hideViaDisplayProperty(_0x56b49e === null || _0x56b49e === void 0x0 ? void 0x0 : _0x56b49e[_0x4fc6c9(0x170)]);
                        });
                    };
                observeDomChanges(() => {
                    _0xb9b837(), _0x4e5cf4();
                });
            }
            commonHosts[_0x1298be(0x176)]([_0x1298be(0x17a)], pageCallback$F);
            const _0x26f1fa = _0x1d69;
            (function(_0x2e3f25, _0x28363d) {
                const _0x4d9c75 = _0x1d69,
                    _0x28f67c = _0x2e3f25();
                while (!![]) {
                    try {
                        const _0x5bc5d1 = -parseInt(_0x4d9c75(0x1cd)) / 0x1 * (-parseInt(_0x4d9c75(0x1d0)) / 0x2) + parseInt(_0x4d9c75(0x1bf)) / 0x3 * (parseInt(_0x4d9c75(0x1bd)) / 0x4) + parseInt(_0x4d9c75(0x1d1)) / 0x5 * (-parseInt(_0x4d9c75(0x1ca)) / 0x6) + -parseInt(_0x4d9c75(0x1c2)) / 0x7 * (parseInt(_0x4d9c75(0x1c7)) / 0x8) + -parseInt(_0x4d9c75(0x1c4)) / 0x9 * (parseInt(_0x4d9c75(0x1c9)) / 0xa) + parseInt(_0x4d9c75(0x1ce)) / 0xb + -parseInt(_0x4d9c75(0x1c6)) / 0xc * (-parseInt(_0x4d9c75(0x1c0)) / 0xd);
                        if (_0x5bc5d1 === _0x28363d) break;
                        else _0x28f67c['push'](_0x28f67c['shift']());
                    } catch (_0x44216c) {
                        _0x28f67c['push'](_0x28f67c['shift']());
                    }
                }
            }(_0x5931, 0x59f75));

            function _0x1d69(_0x187153, _0x4c335a) {
                const _0x5931e7 = _0x5931();
                return _0x1d69 = function(_0x1d69da, _0x41ba5d) {
                    _0x1d69da = _0x1d69da - 0x1bd;
                    let _0x3fb7ed = _0x5931e7[_0x1d69da];
                    return _0x3fb7ed;
                }, _0x1d69(_0x187153, _0x4c335a);
            }

            function pageCallback$E() {
                const _0x24e0b9 = () => {
                    iterateCSSRules(_0x4c5e2f => {
                        const _0x1b9002 = _0x1d69;
                        if (_0x4c5e2f[_0x1b9002(0x1cc)][_0x1b9002(0x1c8)]('{\x20content:\x20url(\x22data:image/jpeg;base64')) {
                            const _0x12023b = _0x51ea98[_0x1b9002(0x1c5)](_0x4c5e2f[_0x1b9002(0x1cf)]),
                                _0x28d50e = getParent(_0x12023b, 0x5);
                            if (!_0x28d50e || _0x28d50e[_0x1b9002(0x1cb)][_0x1b9002(0x1be)] < 0x3) return;
                            hideViaDisplayProperty(_0x28d50e);
                        }
                    });
                };
                observeDomChanges(() => {
                    _0x24e0b9();
                });
            }

            function _0x5931() {
                const _0x19b504 = ['127344eqEZIv', '10792847KFKFmm', 'minigames.mail.ru', '2113776DJclsQ', 'setEntries', '9oJsPNb', 'querySelector', '12MhjQMH', '16solkXP', 'includes', '4166810MxcfuA', '24qlGnUH', 'children', 'cssText', '177497fFMlhM', '3432077PgCnff', 'selectorText', '8zSrcTU', '791110lycknC', '16thEUif', 'length'];
                _0x5931 = function() {
                    return _0x19b504;
                };
                return _0x5931();
            }
            commonHosts[_0x26f1fa(0x1c3)]([_0x26f1fa(0x1c1)], pageCallback$E);

            function _0x49cc(_0x1a9999, _0x1ac6be) {
                const _0x28abb1 = _0x28ab();
                return _0x49cc = function(_0x49ccbf, _0xe0c73d) {
                    _0x49ccbf = _0x49ccbf - 0x192;
                    let _0xe33f21 = _0x28abb1[_0x49ccbf];
                    return _0xe33f21;
                }, _0x49cc(_0x1a9999, _0x1ac6be);
            }
            const _0x160b30 = _0x49cc;
            (function(_0x2d7b70, _0x7f9e90) {
                const _0x5b1e7b = _0x49cc,
                    _0x3cbe8a = _0x2d7b70();
                while (!![]) {
                    try {
                        const _0x39c7a3 = -parseInt(_0x5b1e7b(0x19d)) / 0x1 + parseInt(_0x5b1e7b(0x196)) / 0x2 * (parseInt(_0x5b1e7b(0x197)) / 0x3) + -parseInt(_0x5b1e7b(0x194)) / 0x4 + -parseInt(_0x5b1e7b(0x19e)) / 0x5 + -parseInt(_0x5b1e7b(0x19a)) / 0x6 + -parseInt(_0x5b1e7b(0x193)) / 0x7 * (-parseInt(_0x5b1e7b(0x19f)) / 0x8) + parseInt(_0x5b1e7b(0x199)) / 0x9;
                        if (_0x39c7a3 === _0x7f9e90) break;
                        else _0x3cbe8a['push'](_0x3cbe8a['shift']());
                    } catch (_0x326792) {
                        _0x3cbe8a['push'](_0x3cbe8a['shift']());
                    }
                }
            }(_0x28ab, 0xbf15a));

            function _0x28ab() {
                const _0x1f8951 = ['304316zhiqEU', '4779340EQmKvS', '482712vQQzDv', 'innerText', '84lFqwCs', '4412272qGDNiR', 'forEach', '35368aWNKuN', '123stGzmD', 'vidstream.online', '21012804FZCEED', '3827604qxlKoh', 'querySelectorAll', 'parentNode'];
                _0x28ab = function() {
                    return _0x1f8951;
                };
                return _0x28ab();
            }

            function pageCallback$D() {
                const _0x4b6a1e = () => {
                    const _0x152c94 = _0x49cc,
                        _0x324907 = _0x51ea98[_0x152c94(0x19b)]('span');
                    [..._0x324907][_0x152c94(0x195)](_0x42c14c => {
                        const _0xc94347 = _0x152c94;
                        if (_0x42c14c[_0xc94347(0x192)] === 'PropellerAds') {
                            var _0xf20ad7, _0x166738, _0x2f0624;
                            const _0x31d412 = _0x42c14c === null || _0x42c14c === void 0x0 ? void 0x0 : (_0xf20ad7 = _0x42c14c['parentNode']) === null || _0xf20ad7 === void 0x0 ? void 0x0 : (_0x166738 = _0xf20ad7[_0xc94347(0x19c)]) === null || _0x166738 === void 0x0 ? void 0x0 : (_0x2f0624 = _0x166738[_0xc94347(0x19c)]) === null || _0x2f0624 === void 0x0 ? void 0x0 : _0x2f0624['parentNode'];
                            hideViaPositionProperty(_0x31d412);
                        }
                    });
                };
                observeDomChanges(() => {
                    _0x4b6a1e();
                });
            }
            commonHosts['setEntries']([_0x160b30(0x198)], pageCallback$D);
            const _0x51cb7b = _0x5124;
            (function(_0x55d662, _0x264b80) {
                const _0x1ce08a = _0x5124,
                    _0x531037 = _0x55d662();
                while (!![]) {
                    try {
                        const _0x3c38df = parseInt(_0x1ce08a(0xd3)) / 0x1 + -parseInt(_0x1ce08a(0xbf)) / 0x2 * (parseInt(_0x1ce08a(0xca)) / 0x3) + -parseInt(_0x1ce08a(0xc4)) / 0x4 + -parseInt(_0x1ce08a(0xc9)) / 0x5 * (-parseInt(_0x1ce08a(0xcd)) / 0x6) + -parseInt(_0x1ce08a(0xcf)) / 0x7 * (parseInt(_0x1ce08a(0xbd)) / 0x8) + parseInt(_0x1ce08a(0xba)) / 0x9 + parseInt(_0x1ce08a(0xc6)) / 0xa;
                        if (_0x3c38df === _0x264b80) break;
                        else _0x531037['push'](_0x531037['shift']());
                    } catch (_0x33843a) {
                        _0x531037['push'](_0x531037['shift']());
                    }
                }
            }(_0x9c49, 0x5a75f));

            function _0x5124(_0x1c10e8, _0x40af5e) {
                const _0x9c4985 = _0x9c49();
                return _0x5124 = function(_0x512489, _0x28dadd) {
                    _0x512489 = _0x512489 - 0xb7;
                    let _0x488661 = _0x9c4985[_0x512489];
                    return _0x488661;
                }, _0x5124(_0x1c10e8, _0x40af5e);
            }

            function _0x9c49() {
                const _0x45fd52 = ['12GCbPRS', 'docviewer.yandex.md', '2471sKuapA', '.js-doc-html\x20>\x20div[class]', 'docviewer.yandex.kz', 'input[type=\x22number\x22]', '578605IlZRBC', 'parentElement', 'docviewer.yandex.ua', 'docviewer.yandex.com.tr', 'setEntries', 'querySelector', '655686bXNOkd', 'div[style*=\x22width:\x20100%\x22]', 'querySelectorAll', '3368OKwPvR', 'length', '576764omCMcN', 'forEach', 'div\x20>\x20style:first-child\x20+\x20div[data-ssr]', 'className', 'classList', '2917472xMlegU', 'docviewer.yandex.by', '4234690RibhHO', 'docviewer.yandex.com.am', '.js-doc-page', '1154905aEvRlq', '3YOnAue', 'startsWith', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20+\x20div\x20>\x20div[class$=\x22-direct\x22]\x20>\x20div[class],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20header\x20+\x20div\x20>\x20div[class]\x0a\x20\x20\x20\x20\x20\x20\x20\x20'];
                _0x9c49 = function() {
                    return _0x45fd52;
                };
                return _0x9c49();
            }

            function pageCallback$C() {
                const _0x2dfc16 = _0x5124,
                    _0x2ac9de = () => {
                        const _0x38c28b = _0x5124,
                            _0x129602 = _0x51ea98[_0x38c28b(0xbc)](_0x38c28b(0xcc));
                        [..._0x129602][_0x38c28b(0xc0)](_0x4b4af1 => {
                            const _0x22734c = _0x38c28b;
                            var _0x4082fc;
                            (_0x4b4af1 === null || _0x4b4af1 === void 0x0 ? void 0x0 : (_0x4082fc = _0x4b4af1[_0x22734c(0xc3)]) === null || _0x4082fc === void 0x0 ? void 0x0 : _0x4082fc['length']) >= 0x3 && _0x4b4af1[_0x22734c(0xb9)](_0x22734c(0xbb)) && !_0x4b4af1[_0x22734c(0xb9)](_0x22734c(0xc8)) && !_0x4b4af1[_0x22734c(0xb9)](_0x22734c(0xd2)) && hideViaPositionProperty(_0x4b4af1);
                        });
                        const _0x53066d = _0x51ea98[_0x38c28b(0xbc)](_0x38c28b(0xd0));
                        [..._0x53066d][_0x38c28b(0xc0)](_0x5127bc => {
                            const _0x25ade5 = _0x38c28b;
                            var _0x482081;
                            (_0x5127bc === null || _0x5127bc === void 0x0 ? void 0x0 : (_0x482081 = _0x5127bc[_0x25ade5(0xc3)]) === null || _0x482081 === void 0x0 ? void 0x0 : _0x482081['length']) >= 0x3 && !(_0x5127bc !== null && _0x5127bc !== void 0x0 && _0x5127bc[_0x25ade5(0xc2)][_0x25ade5(0xcb)]('js-doc-page')) && hideViaPositionProperty(_0x5127bc);
                        });
                    },
                    _0x2a3aae = () => {
                        const _0x2d304b = _0x5124,
                            _0x57ad74 = _0x51ea98[_0x2d304b(0xbc)]('div[class^=\x22html\x22]\x20>\x20div[class^=\x22pages_\x22]\x20>\x20div');
                        [..._0x57ad74]['forEach'](_0x382f80 => {
                            const _0x46f884 = _0x2d304b;
                            _0x382f80[_0x46f884(0xc3)][_0x46f884(0xbe)] === 0x3 && getComputedStyle(_0x382f80)['margin'] === '0px\x20-10px' && hideViaPositionProperty(_0x382f80);
                        });
                    },
                    _0x23b5b0 = () => {
                        const _0x4380da = _0x5124,
                            _0x2420d8 = _0x51ea98['querySelectorAll']('div[style=\x22width:\x20100%;\x22]');
                        [..._0x2420d8][_0x4380da(0xc0)](_0x3fca27 => {
                            const _0x29eba0 = _0x4380da;
                            !_0x3fca27['childElementCount'] && hideViaPositionProperty(_0x3fca27[_0x29eba0(0xd4)]);
                        });
                    };
                removeFromShadowRoots(_0x2dfc16(0xc1), null, hideViaPositionProperty), observeDomChanges(() => {
                    _0x2ac9de(), _0x2a3aae(), _0x23b5b0();
                });
            }
            commonHosts[_0x51cb7b(0xb8)](['docviewer.yandex.ru', _0x51cb7b(0xd1), _0x51cb7b(0xc5), _0x51cb7b(0xd5), _0x51cb7b(0xce), _0x51cb7b(0xb7), _0x51cb7b(0xc7)], pageCallback$C);

            function _0x42d9() {
                const _0x20f62c = ['livejournal.com', '925436JwFSjb', '204GPqKtU', '.mainpage__box\x20>\x20.mainpage__category-header\x20+\x20div[class]\x20>\x20div\x20>\x20div\x20>\x20div', 'VK.Retargeting.Hit()', 'location', '181284wCIKlQ', '592820uEWWic', '--rcim', '13gHoDTi', 'some', '382WMvRha', '3TTIrKT', '35TFfHUm', '155331Mablsr', 'setEntries', 'Site.page.no', '16px', '70uSbakV', '*.livejournal.com', '1049wDZBmz', '45OFqbgr', '217248XJaPXk', '10157294FdGKTE', 'querySelectorAll', 'pathname', 'forEach'];
                _0x42d9 = function() {
                    return _0x20f62c;
                };
                return _0x42d9();
            }
            const _0x382bef = _0x41d1;
            (function(_0x2a653c, _0x15b3a6) {
                const _0x4c98f3 = _0x41d1,
                    _0x3020a9 = _0x2a653c();
                while (!![]) {
                    try {
                        const _0x7ab6de = parseInt(_0x4c98f3(0x6b)) / 0x1 * (parseInt(_0x4c98f3(0x7d)) / 0x2) + -parseInt(_0x4c98f3(0x7e)) / 0x3 * (parseInt(_0x4c98f3(0x73)) / 0x4) + -parseInt(_0x4c98f3(0x7f)) / 0x5 * (parseInt(_0x4c98f3(0x78)) / 0x6) + parseInt(_0x4c98f3(0x69)) / 0x7 * (-parseInt(_0x4c98f3(0x6d)) / 0x8) + -parseInt(_0x4c98f3(0x6c)) / 0x9 * (parseInt(_0x4c98f3(0x79)) / 0xa) + -parseInt(_0x4c98f3(0x80)) / 0xb * (-parseInt(_0x4c98f3(0x74)) / 0xc) + -parseInt(_0x4c98f3(0x7b)) / 0xd * (-parseInt(_0x4c98f3(0x6e)) / 0xe);
                        if (_0x7ab6de === _0x15b3a6) break;
                        else _0x3020a9['push'](_0x3020a9['shift']());
                    } catch (_0x4e0a90) {
                        _0x3020a9['push'](_0x3020a9['shift']());
                    }
                }
            }(_0x42d9, 0x25de6));

            function pageCallback$B() {
                const _0x506eab = _0x41d1;
                replaceScripts(/Site\.page\.adv/, _0x506eab(0x82)), removeScripts(['atob', 'Autocontext.showAd(', _0x506eab(0x76), 'Begun_Autocontext_save']);
                const _0x4fc618 = () => {
                    const _0x414b71 = _0x506eab;
                    if (_0x51ea98[_0x414b71(0x77)][_0x414b71(0x70)] !== '/') return;
                    const _0xea27f1 = _0x51ea98[_0x414b71(0x6f)](_0x414b71(0x75));
                    [..._0xea27f1][_0x414b71(0x71)](_0x5a2c57 => {
                        const _0x34a440 = _0x414b71,
                            {
                                marginRight: _0x4b26
                            } = getComputedStyle(_0x5a2c57),
                            _0x1d37d8 = [..._0x5a2c57['classList']][_0x34a440(0x7c)](_0x21de20 => _0x21de20['endsWith'](_0x34a440(0x7a)));
                        _0x1d37d8 && _0x4b26 === _0x34a440(0x68) && hideViaPositionProperty(_0x5a2c57);
                    });
                };
                observeDomChanges(() => {
                    _0x4fc618();
                });
            }

            function _0x41d1(_0x406570, _0x54b8bc) {
                const _0x42d982 = _0x42d9();
                return _0x41d1 = function(_0x41d175, _0x19f959) {
                    _0x41d175 = _0x41d175 - 0x68;
                    let _0x59ebd8 = _0x42d982[_0x41d175];
                    return _0x59ebd8;
                }, _0x41d1(_0x406570, _0x54b8bc);
            }
            commonHosts[_0x382bef(0x81)]([_0x382bef(0x72), _0x382bef(0x6a)], pageCallback$B);
            const _0x3cbd9b = _0x3aab;
            (function(_0x578abd, _0x47384d) {
                const _0x2d9eed = _0x3aab,
                    _0x96ebf7 = _0x578abd();
                while (!![]) {
                    try {
                        const _0x869d3 = parseInt(_0x2d9eed(0x1f1)) / 0x1 + -parseInt(_0x2d9eed(0x200)) / 0x2 * (-parseInt(_0x2d9eed(0x1ff)) / 0x3) + -parseInt(_0x2d9eed(0x205)) / 0x4 + -parseInt(_0x2d9eed(0x1f4)) / 0x5 + -parseInt(_0x2d9eed(0x1f6)) / 0x6 * (parseInt(_0x2d9eed(0x1fc)) / 0x7) + parseInt(_0x2d9eed(0x1f3)) / 0x8 * (-parseInt(_0x2d9eed(0x202)) / 0x9) + parseInt(_0x2d9eed(0x1fb)) / 0xa;
                        if (_0x869d3 === _0x47384d) break;
                        else _0x96ebf7['push'](_0x96ebf7['shift']());
                    } catch (_0x4d679a) {
                        _0x96ebf7['push'](_0x96ebf7['shift']());
                    }
                }
            }(_0x443a, 0x89863));

            function _0x443a() {
                const _0x4bb6fe = ['4546795wmSimv', 'selectorText', '6RujLKc', 'document', 'getElementsByTagName', 'sheet', 'setEntries', '13967570ocRQjh', '895937mqzJey', 'lena-miro.ru', 'forEach', '2631201qThrBr', '2bjVSsE', 'levik.blog', '6278211wzzkXU', 'varlamov.ru', 'vadimrazumov.ru', '2024240DvVkZu', 'olegmakarenko.ru', '530464LBZPVo', 'periskop.su', '8POGfWf'];
                _0x443a = function() {
                    return _0x4bb6fe;
                };
                return _0x443a();
            }

            function _0x3aab(_0x129e21, _0x1db4a6) {
                const _0x443aaf = _0x443a();
                return _0x3aab = function(_0x3aab69, _0x3015bc) {
                    _0x3aab69 = _0x3aab69 - 0x1f0;
                    let _0x3f39f = _0x443aaf[_0x3aab69];
                    return _0x3f39f;
                }, _0x3aab(_0x129e21, _0x1db4a6);
            }

            function pageCallback$A() {
                const _0x1ba7e6 = () => {
                    const _0x22b676 = _0x3aab,
                        _0x373b33 = _0x51ea98[_0x22b676(0x1f7)][_0x22b676(0x1f8)]('style');
                    [..._0x373b33][_0x22b676(0x1fe)](_0x46806a => {
                        const _0x52a6ef = _0x22b676,
                            _0x3abf04 = [...safeGetStylesheetRules(_0x46806a[_0x52a6ef(0x1f9)])],
                            _0x2118d0 = _0x3abf04[0x0];
                        if (_0x3abf04['length'] > 0x32 || !_0x2118d0) return;
                        _0x2118d0[_0x52a6ef(0x1f5)] && /\s*"[.a-z0-9]+"/ ['test'](_0x2118d0[_0x52a6ef(0x1f5)]) && hideViaPositionProperty(_0x2118d0);
                    });
                };
                observeDomChanges(() => {
                    _0x1ba7e6();
                });
            }
            commonHosts[_0x3cbd9b(0x1fa)]([_0x3cbd9b(0x203), _0x3cbd9b(0x1fd), _0x3cbd9b(0x1f0), _0x3cbd9b(0x1f2), _0x3cbd9b(0x201), _0x3cbd9b(0x204)], pageCallback$A);
            const _0xc3a194 = _0x5409;

            function _0x8209() {
                const _0xa65d68 = ['708tpfkZl', '5610760QmsmJA', '3927990SmfBaw', 'textContent', 'test', '942427twbPIw', '4153569hoiYVA', '201515hMOZrc', '2BpvPQc', 'parentNode', 'forEach', 'querySelectorAll', '4UiJmaK', 'previousSibling', 'otzovik.com', '23954pLWQlh', '9WCoSHn', 'div[id]', '25817066VsxXoR', 'setEntries'];
                _0x8209 = function() {
                    return _0xa65d68;
                };
                return _0x8209();
            }(function(_0x46d87d, _0x3d84fe) {
                const _0x6e8609 = _0x5409,
                    _0x5907a7 = _0x46d87d();
                while (!![]) {
                    try {
                        const _0x36397b = -parseInt(_0x6e8609(0x1c6)) / 0x1 * (parseInt(_0x6e8609(0x1b5)) / 0x2) + parseInt(_0x6e8609(0x1c7)) / 0x3 * (-parseInt(_0x6e8609(0x1b9)) / 0x4) + parseInt(_0x6e8609(0x1b4)) / 0x5 + parseInt(_0x6e8609(0x1c1)) / 0x6 * (parseInt(_0x6e8609(0x1bc)) / 0x7) + parseInt(_0x6e8609(0x1c2)) / 0x8 * (parseInt(_0x6e8609(0x1bd)) / 0x9) + -parseInt(_0x6e8609(0x1c3)) / 0xa + parseInt(_0x6e8609(0x1bf)) / 0xb;
                        if (_0x36397b === _0x3d84fe) break;
                        else _0x5907a7['push'](_0x5907a7['shift']());
                    } catch (_0x3dd2a2) {
                        _0x5907a7['push'](_0x5907a7['shift']());
                    }
                }
            }(_0x8209, 0xbca5d));

            function _0x5409(_0x35baba, _0xb62c77) {
                const _0x82093e = _0x8209();
                return _0x5409 = function(_0x540954, _0x10d504) {
                    _0x540954 = _0x540954 - 0x1b4;
                    let _0x5bcc4c = _0x82093e[_0x540954];
                    return _0x5bcc4c;
                }, _0x5409(_0x35baba, _0xb62c77);
            }

            function pageCallback$z() {
                const _0x2cbc5f = () => {
                    const _0x47b5e5 = _0x5409,
                        _0x14be85 = _0x51ea98[_0x47b5e5(0x1b8)](_0x47b5e5(0x1be));
                    [..._0x14be85][_0x47b5e5(0x1b7)](_0x22470b => {
                        const _0x294be7 = _0x47b5e5;
                        var _0xe912c3, _0x27f849, _0x1521a6, _0x95a441, _0x3406e1;
                        const _0x235dd1 = _0x22470b === null || _0x22470b === void 0x0 ? void 0x0 : (_0xe912c3 = _0x22470b[_0x294be7(0x1b6)]) === null || _0xe912c3 === void 0x0 ? void 0x0 : (_0x27f849 = _0xe912c3[_0x294be7(0x1ba)]) === null || _0x27f849 === void 0x0 ? void 0x0 : (_0x1521a6 = _0x27f849['previousSibling']) === null || _0x1521a6 === void 0x0 ? void 0x0 : _0x1521a6[_0x294be7(0x1c4)],
                            _0x49cfd9 = _0x22470b === null || _0x22470b === void 0x0 ? void 0x0 : (_0x95a441 = _0x22470b[_0x294be7(0x1ba)]) === null || _0x95a441 === void 0x0 ? void 0x0 : (_0x3406e1 = _0x95a441[_0x294be7(0x1ba)]) === null || _0x3406e1 === void 0x0 ? void 0x0 : _0x3406e1[_0x294be7(0x1c4)],
                            _0x1a5795 = /Yandex\.|\.RTB|OTZOAD/;
                        (_0x1a5795[_0x294be7(0x1c5)](_0x235dd1) || _0x1a5795[_0x294be7(0x1c5)](_0x49cfd9)) && hideViaPositionProperty(_0x22470b);
                    });
                };
                observeDomChanges(() => {
                    _0x2cbc5f();
                });
            }
            commonHosts[_0xc3a194(0x1c0)]([_0xc3a194(0x1bb)], pageCallback$z);
            const _0x75bcad = _0x4a11;
            (function(_0x283e4c, _0x45a259) {
                const _0x5e2235 = _0x4a11,
                    _0x216b09 = _0x283e4c();
                while (!![]) {
                    try {
                        const _0x280593 = -parseInt(_0x5e2235(0x1d1)) / 0x1 * (-parseInt(_0x5e2235(0x1da)) / 0x2) + parseInt(_0x5e2235(0x1ce)) / 0x3 * (-parseInt(_0x5e2235(0x1d2)) / 0x4) + parseInt(_0x5e2235(0x1d6)) / 0x5 + parseInt(_0x5e2235(0x1dc)) / 0x6 + -parseInt(_0x5e2235(0x1cc)) / 0x7 + parseInt(_0x5e2235(0x1db)) / 0x8 * (parseInt(_0x5e2235(0x1cd)) / 0x9) + -parseInt(_0x5e2235(0x1d8)) / 0xa * (parseInt(_0x5e2235(0x1d0)) / 0xb);
                        if (_0x280593 === _0x45a259) break;
                        else _0x216b09['push'](_0x216b09['shift']());
                    } catch (_0x5be326) {
                        _0x216b09['push'](_0x216b09['shift']());
                    }
                }
            }(_0x545c, 0x1b8a1));

            function _0x545c() {
                const _0x59a713 = ['setEntries', '/test.html', '178339dFMzMj', '345717UXGUpN', '100077ezjWVf', 'adguard.info', '61160jJjKkd', '1sguejv', '20sqRLfs', 'querySelector', 'adguard.com', '/new_issue.html', '645705JLZQMT', '.extra-test', '300qyxaUr', 'location', '306990njXuIa', '8ahFldV', '904944lCVSxt', 'adguard.app', 'pathname'];
                _0x545c = function() {
                    return _0x59a713;
                };
                return _0x545c();
            }

            function _0x4a11(_0x5370f4, _0x494d9e) {
                const _0x545cd7 = _0x545c();
                return _0x4a11 = function(_0x4a111b, _0x288143) {
                    _0x4a111b = _0x4a111b - 0x1cc;
                    let _0x577c22 = _0x545cd7[_0x4a111b];
                    return _0x577c22;
                }, _0x4a11(_0x5370f4, _0x494d9e);
            }
            const TEST_PAGE = _0x75bcad(0x1e0),
                NEW_ISSUE_PAGE = _0x75bcad(0x1d5),
                testExtra = () => {
                    const _0x44d867 = _0x75bcad,
                        _0x3b0793 = _0x51ea98['document'][_0x44d867(0x1d3)](_0x44d867(0x1d7));
                    hideViaDisplayProperty(_0x3b0793);
                };

            function pageCallback$y() {
                const _0x57e7fc = _0x75bcad;
                (_0x51ea98[_0x57e7fc(0x1d9)]['pathname']['endsWith'](TEST_PAGE) || _0x51ea98['location'][_0x57e7fc(0x1de)]['endsWith'](NEW_ISSUE_PAGE)) && observeDomChanges(() => {
                    testExtra();
                });
            }
            commonHosts[_0x75bcad(0x1df)]([_0x75bcad(0x1dd), _0x75bcad(0x1d4), _0x75bcad(0x1cf)], pageCallback$y);
            const _0x47eb3f = _0x103a;
            (function(_0x67fc30, _0x474c47) {
                const _0x20dd7e = _0x103a,
                    _0x3c4566 = _0x67fc30();
                while (!![]) {
                    try {
                        const _0x432d72 = -parseInt(_0x20dd7e(0xa1)) / 0x1 * (-parseInt(_0x20dd7e(0xa3)) / 0x2) + -parseInt(_0x20dd7e(0xa8)) / 0x3 * (parseInt(_0x20dd7e(0xa6)) / 0x4) + parseInt(_0x20dd7e(0xa2)) / 0x5 + -parseInt(_0x20dd7e(0xb2)) / 0x6 * (-parseInt(_0x20dd7e(0xb1)) / 0x7) + -parseInt(_0x20dd7e(0xaf)) / 0x8 * (-parseInt(_0x20dd7e(0xaa)) / 0x9) + parseInt(_0x20dd7e(0xab)) / 0xa * (parseInt(_0x20dd7e(0xa9)) / 0xb) + -parseInt(_0x20dd7e(0xb3)) / 0xc;
                        if (_0x432d72 === _0x474c47) break;
                        else _0x3c4566['push'](_0x3c4566['shift']());
                    } catch (_0x1a1ec6) {
                        _0x3c4566['push'](_0x3c4566['shift']());
                    }
                }
            }(_0x523e, 0x55f8a));

            function pageCallback$x() {
                const _0x2eebca = () => {
                    const _0x1bd3c0 = _0x103a,
                        _0x18f7e2 = document[_0x1bd3c0(0xa7)](_0x1bd3c0(0xae)),
                        _0x29d74e = document['querySelectorAll']('.panel-footer\x20>\x20form[action]');
                    if (_0x18f7e2[_0x1bd3c0(0xb0)] === _0x29d74e[_0x1bd3c0(0xb0)])
                        for (let _0x5a30fd = 0x0; _0x5a30fd < _0x29d74e[_0x1bd3c0(0xb0)]; _0x5a30fd += 0x1) {
                            const _0x5190e4 = _0x18f7e2[_0x5a30fd][_0x1bd3c0(0xa4)](_0x1bd3c0(0xa5));
                            _0x29d74e[_0x5a30fd]['setAttribute'](_0x1bd3c0(0xac), _0x5190e4), _0x29d74e[_0x5a30fd]['setAttribute']('target', _0x1bd3c0(0xa0));
                        }
                };
                observeDomChanges(() => {
                    _0x2eebca();
                });
            }

            function _0x523e() {
                const _0x447f5f = ['154tmyQSn', '906DWRLpH', '5517384WUIWBK', '_blank', '268175tvBJZr', '2759970VIuHwL', '2ykLtqJ', 'getAttribute', 'link', '6068XczoQQ', 'querySelectorAll', '1281IrSoJV', '671pNyUOT', '9UUxBCc', '8430hDgXtC', 'action', 'setEntries', '.panel-footer\x20>\x20form[action]\x20>\x20button[link]', '4678120DVcVkc', 'length'];
                _0x523e = function() {
                    return _0x447f5f;
                };
                return _0x523e();
            }

            function _0x103a(_0x4ef69a, _0x3470b1) {
                const _0x523e66 = _0x523e();
                return _0x103a = function(_0x103a7d, _0x871dc7) {
                    _0x103a7d = _0x103a7d - 0xa0;
                    let _0x2294d8 = _0x523e66[_0x103a7d];
                    return _0x2294d8;
                }, _0x103a(_0x4ef69a, _0x3470b1);
            }
            commonHosts[_0x47eb3f(0xad)](['multiup.org'], pageCallback$x);
            const _0x1cfb64 = _0x482e;

            function _0x1588() {
                const _0x545d59 = ['934520OUkwRE', '639504Vuzubv', 'querySelectorAll', 'yaplakal.com', '1653337QkLtav', '67124pxcJWk', '457838YAMFSZ', 'setEntries', 'parentNode', '1304544zRDSNS', 'length', 'nextElementSibling', '36748nEOnJU', 'querySelector'];
                _0x1588 = function() {
                    return _0x545d59;
                };
                return _0x1588();
            }

            function _0x482e(_0x1b16db, _0x4fddd7) {
                const _0x1588ce = _0x1588();
                return _0x482e = function(_0x482eb2, _0x3b95d9) {
                    _0x482eb2 = _0x482eb2 - 0x1f2;
                    let _0x4a4787 = _0x1588ce[_0x482eb2];
                    return _0x4a4787;
                }, _0x482e(_0x1b16db, _0x4fddd7);
            }(function(_0x5d51ec, _0x156f87) {
                const _0x4437fb = _0x482e,
                    _0x50a897 = _0x5d51ec();
                while (!![]) {
                    try {
                        const _0xad33dd = parseInt(_0x4437fb(0x1f4)) / 0x1 + -parseInt(_0x4437fb(0x1fc)) / 0x2 + parseInt(_0x4437fb(0x1f7)) / 0x3 + parseInt(_0x4437fb(0x1fb)) / 0x4 + parseInt(_0x4437fb(0x1f6)) / 0x5 + parseInt(_0x4437fb(0x1ff)) / 0x6 + -parseInt(_0x4437fb(0x1fa)) / 0x7;
                        if (_0xad33dd === _0x156f87) break;
                        else _0x50a897['push'](_0x50a897['shift']());
                    } catch (_0x1d47da) {
                        _0x50a897['push'](_0x50a897['shift']());
                    }
                }
            }(_0x1588, 0x3245b));

            function pageCallback$w() {
                const _0x38935a = () => {
                    const _0x11a0b3 = _0x482e,
                        _0x152cae = _0x51ea98[_0x11a0b3(0x1f8)]('#lentaFeed\x20>\x20tr\x20>\x20td.newshead');
                    for (let _0x1bcb0c = 0x0; _0x1bcb0c < _0x152cae[_0x11a0b3(0x1f2)]; _0x1bcb0c += 0x1) {
                        const _0x21f200 = _0x152cae[_0x1bcb0c],
                            _0x3eec98 = _0x21f200 === null || _0x21f200 === void 0x0 ? void 0x0 : _0x21f200[_0x11a0b3(0x1fe)],
                            _0x4dab4c = _0x3eec98 === null || _0x3eec98 === void 0x0 ? void 0x0 : _0x3eec98[_0x11a0b3(0x1f3)],
                            _0x176f65 = _0x4dab4c === null || _0x4dab4c === void 0x0 ? void 0x0 : _0x4dab4c[_0x11a0b3(0x1f3)];
                        _0x21f200[_0x11a0b3(0x1f5)]('.rating-short-value') === null && (hideViaPositionProperty(_0x3eec98), hideViaPositionProperty(_0x4dab4c), hideViaPositionProperty(_0x176f65));
                    }
                };
                observeDomChanges(() => {
                    _0x38935a();
                });
            }
            commonHosts[_0x1cfb64(0x1fd)]([_0x1cfb64(0x1f9), 'yap.ru'], pageCallback$w);

            function _0x3071(_0xd31ca5, _0x1c7eba) {
                var _0x11fbe0 = _0x11fb();
                return _0x3071 = function(_0x3071b7, _0x3e2aa0) {
                    _0x3071b7 = _0x3071b7 - 0xed;
                    var _0x1e1321 = _0x11fbe0[_0x3071b7];
                    return _0x1e1321;
                }, _0x3071(_0xd31ca5, _0x1c7eba);
            }
            var _0x500dff = _0x3071;

            function _0x11fb() {
                var _0xa24246 = ['13069406kAGmbZ', '168243LAdDCu', 'liga.net', 'strana.ua', 'vsetv.com', '9664870OKeDKS', 'nashamama.com', '5187300RTpbuN', 'tochka.net', '1777.ru', 'ukr.net', 'viks.bz', 'ostro.org', 'nnovosti.info', 'meteo.ua', '11734464gQLBtx', 'facenews.ua', '7600110tCMiaa', '2xhgwSa', '18FXrIwi', 'glianec.com', 'inforesist.org', '8TBHWMC', 'enovosty.com', '202965pcGXVn', 'bilshe.com'];
                _0x11fb = function() {
                    return _0xa24246;
                };
                return _0x11fb();
            }(function(_0x4e6891, _0x41ab57) {
                var _0xa5e32e = _0x3071,
                    _0x4483aa = _0x4e6891();
                while (!![]) {
                    try {
                        var _0x3ef3af = -parseInt(_0xa5e32e(0x100)) / 0x1 * (-parseInt(_0xa5e32e(0xfa)) / 0x2) + parseInt(_0xa5e32e(0x103)) / 0x3 * (-parseInt(_0xa5e32e(0xfe)) / 0x4) + parseInt(_0xa5e32e(0xef)) / 0x5 + parseInt(_0xa5e32e(0xf9)) / 0x6 + -parseInt(_0xa5e32e(0x102)) / 0x7 + -parseInt(_0xa5e32e(0xf7)) / 0x8 + parseInt(_0xa5e32e(0xfb)) / 0x9 * (parseInt(_0xa5e32e(0xed)) / 0xa);
                        if (_0x3ef3af === _0x41ab57) break;
                        else _0x4483aa['push'](_0x4483aa['shift']());
                    } catch (_0x3b9c00) {
                        _0x4483aa['push'](_0x4483aa['shift']());
                    }
                }
            }(_0x11fb, 0xf2b08));

            function pageCallback$v() {
                removeScripts(/ShadowRoot|AdnetAttachScript|zmctrack/);
            }
            commonHosts['setEntries']([_0x500dff(0xfc), _0x500dff(0xf4), _0x500dff(0xee), _0x500dff(0x101), _0x500dff(0xf1), 'cn.ru', 'hvylya.net', 'peers.tv', 'real-vin.com', _0x500dff(0xf3), _0x500dff(0x106), _0x500dff(0x105), 'bigmir.net', _0x500dff(0xff), _0x500dff(0xf8), _0x500dff(0xfd), _0x500dff(0x104), _0x500dff(0xf5), _0x500dff(0xf0), _0x500dff(0xf2), _0x500dff(0xf6)], pageCallback$v);
            var _0x25056e = _0x412f;

            function _0x1a16() {
                var _0x21a265 = ['1299793dhfwGw', '1642068wVaPMG', 'walla.co.il', '6603eDajBT', '923209cqvBCH', '110wgbtRz', 'sheee.co.il', '663545lgMHPQ', '20nBZufV', '849567SAzfag', '82anoQfA', '32qsIAhJ', '2353350Siuzmi', 'setEntries'];
                _0x1a16 = function() {
                    return _0x21a265;
                };
                return _0x1a16();
            }(function(_0x1347a1, _0x10a39d) {
                var _0x57d78c = _0x412f,
                    _0x28d424 = _0x1347a1();
                while (!![]) {
                    try {
                        var _0x367b5b = parseInt(_0x57d78c(0x153)) / 0x1 * (-parseInt(_0x57d78c(0x15a)) / 0x2) + parseInt(_0x57d78c(0x159)) / 0x3 + -parseInt(_0x57d78c(0x158)) / 0x4 * (-parseInt(_0x57d78c(0x157)) / 0x5) + parseInt(_0x57d78c(0x14e)) / 0x6 + -parseInt(_0x57d78c(0x154)) / 0x7 + parseInt(_0x57d78c(0x15b)) / 0x8 * (parseInt(_0x57d78c(0x151)) / 0x9) + parseInt(_0x57d78c(0x155)) / 0xa * (-parseInt(_0x57d78c(0x150)) / 0xb);
                        if (_0x367b5b === _0x10a39d) break;
                        else _0x28d424['push'](_0x28d424['shift']());
                    } catch (_0x8ee4b4) {
                        _0x28d424['push'](_0x28d424['shift']());
                    }
                }
            }(_0x1a16, 0x5971c));

            function _0x412f(_0x41745b, _0x5ab825) {
                var _0x1a16fb = _0x1a16();
                return _0x412f = function(_0x412fe2, _0x3ea3e2) {
                    _0x412fe2 = _0x412fe2 - 0x14e;
                    var _0x3b4eb5 = _0x1a16fb[_0x412fe2];
                    return _0x3b4eb5;
                }, _0x412f(_0x41745b, _0x5ab825);
            }

            function pageCallback$u() {
                removeScripts(/function[\s\S]*?static[\s\S]*?switch/);
            }
            commonHosts[_0x25056e(0x14f)]([_0x25056e(0x156), _0x25056e(0x152)], pageCallback$u);

            function _0x3e11(_0x140c3d, _0x51cffc) {
                var _0x2ae337 = _0x2ae3();
                return _0x3e11 = function(_0x3e1116, _0x505369) {
                    _0x3e1116 = _0x3e1116 - 0xef;
                    var _0x4d0bd4 = _0x2ae337[_0x3e1116];
                    return _0x4d0bd4;
                }, _0x3e11(_0x140c3d, _0x51cffc);
            }
            var _0x428dbd = _0x3e11;
            (function(_0x42312e, _0x530e33) {
                var _0x3082a8 = _0x3e11,
                    _0x2a15da = _0x42312e();
                while (!![]) {
                    try {
                        var _0x3646b1 = -parseInt(_0x3082a8(0xf6)) / 0x1 + parseInt(_0x3082a8(0xf4)) / 0x2 + parseInt(_0x3082a8(0xf0)) / 0x3 * (parseInt(_0x3082a8(0xf9)) / 0x4) + parseInt(_0x3082a8(0xef)) / 0x5 + -parseInt(_0x3082a8(0xf2)) / 0x6 * (-parseInt(_0x3082a8(0xf1)) / 0x7) + parseInt(_0x3082a8(0xf8)) / 0x8 + -parseInt(_0x3082a8(0xf7)) / 0x9 * (parseInt(_0x3082a8(0xfa)) / 0xa);
                        if (_0x3646b1 === _0x530e33) break;
                        else _0x2a15da['push'](_0x2a15da['shift']());
                    } catch (_0x21c81d) {
                        _0x2a15da['push'](_0x2a15da['shift']());
                    }
                }
            }(_0x2ae3, 0x6cce7));

            function pageCallback$t() {
                replaceScripts(/e&&\(o\(de\),n\(e\)\)/, '');
            }

            function _0x2ae3() {
                var _0xc86a1f = ['74142uADtBS', '5715928ldypbH', '35036WAvadm', '1810OSxXTb', '3750600FAJTam', '219iPHqtQ', '48839DDkfVS', '222WdcdUT', 'sinoptik.ua', '225302kVSEPB', 'setEntries', '538069GWjxxf'];
                _0x2ae3 = function() {
                    return _0xc86a1f;
                };
                return _0x2ae3();
            }
            commonHosts[_0x428dbd(0xf5)]([_0x428dbd(0xf3)], pageCallback$t);

            function _0x3fb8() {
                const _0x1697ea = ['isYandexPage', 'responseText', '7lrektS', '62486wcdlrf', '43IsCXkg', '2749833ngpxPj', '3039732DxeuUI', 'includes', 'a[href*=\x22advertising\x22]', 'closest', '1586454byNSOl', 'querySelectorAll', 'setEntries', '5565155DEkxvE', '1356904SUHBXs', '1212066omUSkD', 'forEach'];
                _0x3fb8 = function() {
                    return _0x1697ea;
                };
                return _0x3fb8();
            }
            const _0x920aed = _0x410c;
            (function(_0x41642c, _0x470f3d) {
                const _0x26e590 = _0x410c,
                    _0x2ef155 = _0x41642c();
                while (!![]) {
                    try {
                        const _0x158c0f = -parseInt(_0x26e590(0x148)) / 0x1 * (parseInt(_0x26e590(0x147)) / 0x2) + parseInt(_0x26e590(0x153)) / 0x3 + parseInt(_0x26e590(0x14a)) / 0x4 + parseInt(_0x26e590(0x151)) / 0x5 + parseInt(_0x26e590(0x14e)) / 0x6 + parseInt(_0x26e590(0x146)) / 0x7 * (-parseInt(_0x26e590(0x152)) / 0x8) + -parseInt(_0x26e590(0x149)) / 0x9;
                        if (_0x158c0f === _0x470f3d) break;
                        else _0x2ef155['push'](_0x2ef155['shift']());
                    } catch (_0x1ceffe) {
                        _0x2ef155['push'](_0x2ef155['shift']());
                    }
                }
            }(_0x3fb8, 0xb076c));

            function _0x410c(_0x424ee5, _0x561541) {
                const _0x3fb8d3 = _0x3fb8();
                return _0x410c = function(_0x410c8f, _0x59e470) {
                    _0x410c8f = _0x410c8f - 0x143;
                    let _0x288699 = _0x3fb8d3[_0x410c8f];
                    return _0x288699;
                }, _0x410c(_0x424ee5, _0x561541);
            }

            function pageCallback$s() {
                const _0x956c59 = _0x8b4521 => {
                        const _0x9eb589 = _0x410c;
                        if (_0x8b4521 !== null && _0x8b4521 !== void 0x0 && _0x8b4521[_0x9eb589(0x145)][_0x9eb589(0x14b)](_0x9eb589(0x144))) return !![];
                        return ![];
                    },
                    _0x2f3209 = () => {
                        const _0x3d90c6 = _0x410c,
                            _0xc694be = _0x51ea98[_0x3d90c6(0x14f)](_0x3d90c6(0x14c));
                        [..._0xc694be][_0x3d90c6(0x143)](_0x5a13af => {
                            const _0xd679ca = _0x3d90c6,
                                _0x51bb52 = _0x5a13af[_0xd679ca(0x14d)]('.block__content');
                            hideViaPositionProperty(_0x51bb52);
                        });
                    };
                preventXHR(_0x956c59), observeDomChanges(() => {
                    _0x2f3209();
                });
            }
            commonHosts[_0x920aed(0x150)](['kakprosto.ru'], pageCallback$s);
            var _0xbc1e7a = _0xd018;
            (function(_0x2ecd5c, _0x105e16) {
                var _0x2842c2 = _0xd018,
                    _0x3bfdac = _0x2ecd5c();
                while (!![]) {
                    try {
                        var _0x24fa10 = parseInt(_0x2842c2(0x14e)) / 0x1 + -parseInt(_0x2842c2(0x149)) / 0x2 + parseInt(_0x2842c2(0x153)) / 0x3 * (-parseInt(_0x2842c2(0x14c)) / 0x4) + -parseInt(_0x2842c2(0x14d)) / 0x5 + -parseInt(_0x2842c2(0x148)) / 0x6 * (parseInt(_0x2842c2(0x151)) / 0x7) + parseInt(_0x2842c2(0x14f)) / 0x8 * (-parseInt(_0x2842c2(0x152)) / 0x9) + -parseInt(_0x2842c2(0x150)) / 0xa * (-parseInt(_0x2842c2(0x14a)) / 0xb);
                        if (_0x24fa10 === _0x105e16) break;
                        else _0x3bfdac['push'](_0x3bfdac['shift']());
                    } catch (_0x27e80f) {
                        _0x3bfdac['push'](_0x3bfdac['shift']());
                    }
                }
            }(_0x26b1, 0x36dbf));

            function _0xd018(_0x11bb84, _0x11725f) {
                var _0x26b1a6 = _0x26b1();
                return _0xd018 = function(_0xd0182d, _0x2c2c24) {
                    _0xd0182d = _0xd0182d - 0x148;
                    var _0x3dcd5c = _0x26b1a6[_0xd0182d];
                    return _0x3dcd5c;
                }, _0xd018(_0x11bb84, _0x11725f);
            }

            function pageCallback$r() {
                blockProperty('ya');
            }
            commonHosts['setEntries']([_0xbc1e7a(0x14b)], pageCallback$r);

            function _0x26b1() {
                var _0x5a5b3c = ['8nELWVx', '237340JVRQoc', '7392MrZpoU', '2054529OoYDJL', '408LUSViJ', '1566ZsrsYC', '455378PtYHYg', '605flwnPJ', '24smi.org', '11168AmBIdl', '1611270TrEXHK', '352885qYcTku'];
                _0x26b1 = function() {
                    return _0x5a5b3c;
                };
                return _0x26b1();
            }

            function _0x904d() {
                const _0x4d01ab = ['206376gZBHhq', '2526248UbtpQR', 'echo.msk.ru', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div.ad,\x20div[id*=\x22adfox\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[id^=\x22yandex_rtb_\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div[class^=\x22y-dir-\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20a[href^=\x22https://relap.io\x22]\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'echomsk.static-storage', '1008280RqKzJT', '3geuMZt', 'querySelector', '346084Mtokqb', 'forEach', 'div[id^=\x22under_article\x22]', 'querySelectorAll', '876sHXXTN', '283787fMznMO', '10euOduB', 'includes', 'match', '493182JhYSis', '13445SzSYJY'];
                _0x904d = function() {
                    return _0x4d01ab;
                };
                return _0x904d();
            }
            const _0x28c5ca = _0x1134$1;

            function _0x1134$1(_0x5e483b, _0x1cfa47) {
                const _0x904de = _0x904d();
                return _0x1134$1 = function(_0x1134c9, _0x1434fb) {
                    _0x1134c9 = _0x1134c9 - 0x131;
                    let _0x177b6d = _0x904de[_0x1134c9];
                    return _0x177b6d;
                }, _0x1134$1(_0x5e483b, _0x1cfa47);
            }(function(_0x360f1d, _0x222b8f) {
                const _0x286c6b = _0x1134$1,
                    _0x43a910 = _0x360f1d();
                while (!![]) {
                    try {
                        const _0x63e58e = parseInt(_0x286c6b(0x139)) / 0x1 + parseInt(_0x286c6b(0x13f)) / 0x2 + parseInt(_0x286c6b(0x132)) / 0x3 * (parseInt(_0x286c6b(0x134)) / 0x4) + parseInt(_0x286c6b(0x13e)) / 0x5 * (-parseInt(_0x286c6b(0x138)) / 0x6) + -parseInt(_0x286c6b(0x131)) / 0x7 + parseInt(_0x286c6b(0x140)) / 0x8 + parseInt(_0x286c6b(0x13d)) / 0x9 * (-parseInt(_0x286c6b(0x13a)) / 0xa);
                        if (_0x63e58e === _0x222b8f) break;
                        else _0x43a910['push'](_0x43a910['shift']());
                    } catch (_0x577fb2) {
                        _0x43a910['push'](_0x43a910['shift']());
                    }
                }
            }(_0x904d, 0x304d5));

            function pageCallback$q() {
                const _0x5dd314 = _0x3e67c8 => {
                        const _0x41a36c = _0x1134$1,
                            {
                                responseURL: _0x44a459,
                                withCredentials: _0x46d0b6
                            } = _0x3e67c8;
                        if (!_0x44a459) return ![];
                        if (_0x44a459['match'](/adfox|alfasense|securepubads|webvisor|watch|jstracer|static-mon|bidder.criteo/)) return !![];
                        if (_0x44a459[_0x41a36c(0x13c)](/recostream.go|ad.outstream|rb.infox|kraken.rambler/) || _0x44a459[_0x41a36c(0x13c)](/cdn-plus.roxot-panel|.giraff|nativeroll|an.yandex.ru\/newscount/)) return !![];
                        if (_0x44a459[_0x41a36c(0x13c)](/viadata.store|an.yandex.ru\/meta/)) return !![];
                        if (_0x44a459 !== null && _0x44a459 !== void 0x0 && _0x44a459[_0x41a36c(0x13b)](_0x41a36c(0x143)) && _0x46d0b6 === !![]) return !![];
                        return ![];
                    },
                    _0x13a1ca = () => {
                        const _0x3adfa2 = _0x1134$1,
                            _0x17031d = _0x51ea98[_0x3adfa2(0x137)](_0x3adfa2(0x142));
                        [..._0x17031d][_0x3adfa2(0x135)](_0x52d758 => {
                            removeNode(_0x52d758);
                        });
                    },
                    _0x41a7e4 = () => {
                        const _0x5a7ddf = _0x1134$1,
                            _0x4abde5 = _0x51ea98[_0x5a7ddf(0x133)](_0x5a7ddf(0x136));
                        _0x4abde5 && _0x4abde5['querySelector']('div[id^=\x22smi_teaser\x22]') && removeNode(_0x4abde5);
                    };
                preventXHR(_0x5dd314), observeDomChanges(() => {
                    _0x13a1ca(), _0x41a7e4();
                });
            }
            commonHosts['setEntries']([_0x28c5ca(0x141)], pageCallback$q);

            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    if (enumerableOnly) symbols = symbols.filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }

            function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i] != null ? arguments[i] : {};
                    if (i % 2) {
                        ownKeys(Object(source), true).forEach(function(key) {
                            defineProperty(target, key, source[key]);
                        });
                    } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    } else {
                        ownKeys(Object(source)).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                }
                return target;
            }

            function pageCallback$p() {
                let TwitchAdblockSettings = {
                    BannerVisible: true,
                    ForcedQuality: null,
                    ProxyType: null,
                    ProxyQuality: null
                };
                const twitchWorkers = [];

                function gqlRequest(body) {
                    if (!GQLDeviceID) {
                        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
                        for (let i = 0; i < 32; i += 1) {
                            GQLDeviceID += chars.charAt(Math.floor(Math.random() * chars.length));
                        }
                    }
                    return fetch('https://gql.twitch.tv/gql', {
                        method: 'POST',
                        body: JSON.stringify(body),
                        headers: {
                            'Client-ID': ClientID,
                            'Client-Integrity': ClientIntegrityHeader,
                            'Device-ID': GQLDeviceID,
                            'X-Device-Id': GQLDeviceID,
                            'Client-Version': ClientVersion,
                            'Client-Session-Id': ClientSession,
                            Authorization: AuthorizationHeader
                        }
                    });
                }

                function parseAttributes(str) {
                    return Object.fromEntries(str.split(/(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))/).filter(x => !!x).map(x => {
                        const idx = x.indexOf('=');
                        const key = x.substring(0, idx);
                        const value = x.substring(idx + 1);
                        if (value.startsWith('"')) {
                            return [key, JSON.parse(value)];
                        }
                        const num = parseInt(value, 10);
                        if (!Number.isNaN(num)) {
                            return [key, num];
                        }
                        return [key, value];
                    }));
                }

                function getAccessToken(channelName, playerType) {
                    const query = 'query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) {  streamPlaybackAccessToken(channelName: $login, params: {platform: "ios", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isLive) {    value    signature    __typename  }  videoPlaybackAccessToken(id: $vodID, params: {platform: "ios", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isVod) {    value    signature    __typename  }}';
                    const body = {
                        operationName: 'PlaybackAccessToken_Template',
                        query,
                        variables: {
                            isLive: true,
                            login: channelName,
                            isVod: false,
                            vodID: '',
                            playerType
                        }
                    };
                    return gqlRequest(body);
                }

                function getStreamUrlForResolution(encodingsM3u8, resolutionInfo, qualityOverrideStr) {
                    let qualityOverride = 0;
                    if (qualityOverrideStr && qualityOverrideStr.endsWith('p')) {
                        const numericPart = qualityOverrideStr.slice(0, -1);
                        const numericValue = parseInt(numericPart, 10);
                        if (!Number.isNaN(numericValue)) {
                            qualityOverride = numericValue;
                        }
                    }
                    const encodingsLines = encodingsM3u8.replace('\r', '').split('\n');
                    let firstUrl = null;
                    let lastUrl = null;
                    let matchedResolutionUrl = null;
                    let matchedFrameRate = false;
                    for (let i = 0; i < encodingsLines.length; i += 1) {
                        const line = encodingsLines[i];
                        const previousLine = encodingsLines[i - 1];
                        if (line.startsWith('#') || !line.includes('.m3u8')) {
                            continue;
                        }
                        if (i === 0 || !previousLine.startsWith('#EXT-X-STREAM-INF')) {
                            continue;
                        }
                        const attributes = parseAttributes(previousLine);
                        const resolution = attributes.RESOLUTION;
                        if (!resolution) {
                            continue;
                        }
                        const frameRate = attributes['FRAME-RATE'];
                        if (qualityOverride) {
                            const quality = resolution.toLowerCase().split('x')[1];
                            if (parseInt(quality, 10) === qualityOverride) {
                                qualityOverrideFoundQuality = quality;
                                qualityOverrideFoundFrameRate = frameRate;
                                matchedResolutionUrl = line;
                                if (frameRate < 40) {
                                    return matchedResolutionUrl;
                                }
                            } else if (quality < qualityOverride) {
                                return matchedResolutionUrl || line;
                            }
                        } else if ((!resolutionInfo || resolution === resolutionInfo.Resolution) && (!matchedResolutionUrl || !matchedFrameRate && frameRate === resolutionInfo.FrameRate)) {
                            matchedResolutionUrl = line;
                            matchedFrameRate = frameRate === resolutionInfo.FrameRate;
                            if (matchedFrameRate) {
                                return matchedResolutionUrl;
                            }
                        }
                        if (!firstUrl) {
                            firstUrl = line;
                        }
                        lastUrl = line;
                    }
                    if (qualityOverride) {
                        return lastUrl;
                    }
                    return matchedResolutionUrl || firstUrl;
                }
                async function getStreamForResolution(streamInfo, resolutionInfo, encodingsM3u8, fallbackStreamStr, playerType, realFetch) {
                    const qualityOverride = null;
                    if (streamInfo.EncodingsM3U8Cache[playerType].Resolution !== resolutionInfo.Resolution || streamInfo.EncodingsM3U8Cache[playerType].RequestTime < Date.now() - EncodingCacheTimeout) {
                        console.log(`Blocking ads (
    type:${playerType},
    resolution:${resolutionInfo.Resolution},
    frameRate:${resolutionInfo.FrameRate},
    qualityOverride:${qualityOverride}
)`);
                    }
                    streamInfo.EncodingsM3U8Cache[playerType].RequestTime = Date.now();
                    streamInfo.EncodingsM3U8Cache[playerType].Value = encodingsM3u8;
                    streamInfo.EncodingsM3U8Cache[playerType].Resolution = resolutionInfo.Resolution;
                    const streamM3u8Url = getStreamUrlForResolution(encodingsM3u8, resolutionInfo, qualityOverride);
                    const streamM3u8Response = await realFetch(streamM3u8Url);
                    if (streamM3u8Response.status === 200) {
                        const m3u8Text = await streamM3u8Response.text();
                        WasShowingAd = true;
                        postMessage({
                            key: 'ShowAdBlockBanner'
                        });
                        postMessage({
                            key: 'ForceChangeQuality'
                        });
                        if (!m3u8Text || m3u8Text.includes(AdSignifier)) {
                            streamInfo.EncodingsM3U8Cache[playerType].Value = null;
                        }
                        return m3u8Text;
                    }
                    streamInfo.EncodingsM3U8Cache[playerType].Value = null;
                    return fallbackStreamStr;
                }
                async function processM3U8(url, textStr, realFetch, playerType) {
                    const streamInfo = StreamInfosByUrl[url];
                    if (IsSquadStream || !textStr || !textStr.includes('.ts') && !textStr.includes('.mp4')) {
                        return textStr;
                    }
                    if (!textStr.includes(AdSignifier)) {
                        if (WasShowingAd) {
                            console.log('Finished blocking ads');
                            WasShowingAd = false;
                            postMessage({
                                key: 'ForceChangeQuality',
                                value: 'original'
                            });
                            postMessage({
                                key: 'PauseResumePlayer'
                            });
                            postMessage({
                                key: 'HideAdBlockBanner'
                            });
                        }
                        return textStr;
                    }
                    let currentResolution = null;
                    if (streamInfo && streamInfo.Urls) {
                        for (const [resUrl, resInfo] of Object.entries(streamInfo.Urls)) {
                            if (resUrl === url) {
                                currentResolution = resInfo;
                                break;
                            }
                        }
                    }
                    const encodingsM3U8Cache = streamInfo.EncodingsM3U8Cache[playerType];
                    if (encodingsM3U8Cache) {
                        const {
                            Value,
                            RequestTime
                        } = encodingsM3U8Cache;
                        if (Value && RequestTime >= Date.now() - EncodingCacheTimeout) {
                            try {
                                const result = getStreamForResolution(streamInfo, currentResolution, Value, null, playerType, realFetch);
                                if (result) {
                                    return result;
                                }
                            } catch (err) {
                                encodingsM3U8Cache.Value = null;
                            }
                        }
                    } else {
                        streamInfo.EncodingsM3U8Cache[playerType] = {
                            RequestTime: Date.now(),
                            Value: null,
                            Resolution: null
                        };
                    }
                    const accessTokenResponse = await getAccessToken(CurrentChannelName, playerType);
                    if (accessTokenResponse.status !== 200) {
                        return textStr;
                    }
                    const accessToken = await accessTokenResponse.json();
                    const {
                        signature,
                        value
                    } = accessToken.data.streamPlaybackAccessToken;
                    let encodingsM3u8Response;
                    try {
                        const urlInfo = new URL(`https://usher.ttvnw.net/api/channel/hls/${CurrentChannelName}.m3u8${UsherParams}`);
                        urlInfo.searchParams.set('sig', signature);
                        urlInfo.searchParams.set('token', value);
                        encodingsM3u8Response = await realFetch(urlInfo.href);
                    } catch (e) {}
                    return encodingsM3u8Response && encodingsM3u8Response.status === 200 ? getStreamForResolution(streamInfo, currentResolution, await encodingsM3u8Response.text(), textStr, playerType, realFetch) : textStr;
                }

                function getWasmWorkerUrl(twitchBlobUrl) {
                    const req = new XMLHttpRequest();
                    req.open('GET', twitchBlobUrl, false);
                    req.send();
                    return req.responseText.split("'")[1];
                }

                function hookWorkerFetch() {
                    console.log('Twitch Worker has been hooked');
                    const realFetch = fetch;
                    fetch = async function fetch(url, options) {
                        if (typeof url !== 'string') {
                            return realFetch.apply(this, arguments);
                        }
                        if (url.includes('video-weaver')) {
                            return new Promise((resolve, reject) => {
                                async function processAfter(response) {
                                    const responseText = await response.text();
                                    let weaverText = null;
                                    weaverText = await processM3U8(url, responseText, realFetch, PlayerType2);
                                    if (weaverText.includes(AdSignifier)) {
                                        weaverText = await processM3U8(url, responseText, realFetch, PlayerType3);
                                    }
                                    if (weaverText.includes(AdSignifier)) {
                                        weaverText = await processM3U8(url, responseText, realFetch, PlayerType4);
                                    }
                                    resolve(new Response(weaverText));
                                }
                                realFetch(url, options).then(processAfter).catch(reject);
                            });
                        }
                        if (url.includes('/api/channel/hls/')) {
                            const channelName = new URL(url).pathname.match(/([^\/]+)(?=\.\w+$)/)[0];
                            UsherParams = new URL(url).search;
                            CurrentChannelName = channelName;
                            const isPBYPRequest = url.includes('picture-by-picture');
                            if (isPBYPRequest) {
                                url = '';
                            }
                            return new Promise((resolve, reject) => {
                                async function processAfter(response) {
                                    if (response.status !== 200) {
                                        resolve(response);
                                    }
                                    encodingsM3u8 = await response.text();
                                    let streamInfo = StreamInfos[channelName];
                                    if (streamInfo == null) {
                                        StreamInfos[channelName] = {};
                                        streamInfo = {};
                                    }
                                    streamInfo.ChannelName = channelName;
                                    streamInfo.Urls = [];
                                    streamInfo.EncodingsM3U8Cache = [];
                                    streamInfo.EncodingsM3U8 = encodingsM3u8;
                                    const lines = encodingsM3u8.replace('\r', '').split('\n');
                                    for (let i = 0; i < lines.length; i += 1) {
                                        const line = lines[i];
                                        const previousLine = lines[i - 1];
                                        if (!line.startsWith('#') && line.includes('.m3u8')) {
                                            streamInfo.Urls[line] = -1;
                                            StreamInfosByUrl[line] = streamInfo;
                                            MainUrlByUrl[line] = url;
                                            if (i === 0 || !previousLine.startsWith('#EXT-X-STREAM-INF')) {
                                                continue;
                                            }
                                            const attributes = parseAttributes(previousLine);
                                            const resolution = attributes.RESOLUTION;
                                            const frameRate = attributes['FRAME-RATE'];
                                            if (resolution) {
                                                streamInfo.Urls[line] = {
                                                    Resolution: resolution,
                                                    FrameRate: frameRate
                                                };
                                            }
                                        }
                                    }
                                    resolve(new Response(encodingsM3u8));
                                }
                                realFetch(url, options).then(processAfter).catch(reject);
                            });
                        }
                        return realFetch.apply(this, arguments);
                    };
                }

                function stripUnusedParams(str) {
                    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['token', 'sig'];
                    const tempUrl = new URL(`https://localhost/${str}`);
                    for (let i = 0; i < params.length; i += 1) {
                        tempUrl.searchParams.delete(params[i]);
                    }
                    return tempUrl.pathname.substring(1) + tempUrl.search;
                }

                function adRecordgqlPacket(event, radToken, payload) {
                    const gqlRequestBody = {
                        operationName: 'ClientSideAdEventHandling_RecordAdEvent',
                        variables: {
                            input: {
                                eventName: event,
                                eventPayload: JSON.stringify(payload),
                                radToken
                            }
                        },
                        extensions: {
                            persistedQuery: {
                                version: 1,
                                sha256Hash: '7e6c69e6eb59f8ccb97ab73686f3d8b7d85a72a0298745ccd8bfc68e4054ca5b'
                            }
                        }
                    };
                    return [gqlRequestBody];
                }
                async function tryNotifyTwitch(streamM3u8) {
                    const matches = streamM3u8.match(/#EXT-X-DATERANGE:(ID="stitched-ad-[^\n]+)\n/);
                    if (!matches || matches.length <= 1) {
                        return;
                    }
                    const attrString = matches[1];
                    const attr = parseAttributes(attrString);
                    const adId = attr['X-TV-TWITCH-AD-ADVERTISER-ID'];
                    const rollType = attr['X-TV-TWITCH-AD-ROLL-TYPE'].toLowerCase();
                    const creativeId = attr['X-TV-TWITCH-AD-CREATIVE-ID'];
                    const orderId = attr['X-TV-TWITCH-AD-ORDER-ID'];
                    const lineItemId = attr['X-TV-TWITCH-AD-LINE-ITEM-ID'];
                    const baseData = {
                        stitched: true,
                        ad_id: adId,
                        roll_type: rollType,
                        creative_id: creativeId,
                        order_id: orderId,
                        line_item_id: lineItemId,
                        player_mute: true,
                        player_volume: 0.0,
                        visible: false,
                        duration: 0
                    };
                    const podLength = parseInt(attr['X-TV-TWITCH-AD-POD-LENGTH'] || '1', 10);
                    const radToken = attr['X-TV-TWITCH-AD-RADS-TOKEN'];
                    for (let podPosition = 0; podPosition < podLength; podPosition += 1) {
                        const extendedData = _objectSpread(_objectSpread({}, baseData), {}, {
                            ad_position: podPosition,
                            total_ads: podLength
                        });
                        const adRecord = adRecordgqlPacket('video_ad_impression', radToken, extendedData);
                        await gqlRequest(adRecord);
                        for (let quartile = 0; quartile < 4; quartile += 1) {
                            const adQuartileRecord = adRecordgqlPacket('video_ad_quartile_complete', radToken, _objectSpread(_objectSpread({}, extendedData), {}, {
                                quartile: quartile + 1
                            }));
                            await gqlRequest(adQuartileRecord);
                        }
                        const adCompleteRecord = adRecordgqlPacket('video_ad_pod_complete', radToken, baseData);
                        await gqlRequest(adCompleteRecord);
                    }
                }

                function pauseResumeTwitchPlayer() {
                    var _videoPlayer, _videoPlayer$props;

                    function findReactNode(root, constraint) {
                        if (root.stateNode && constraint(root.stateNode)) {
                            return root.stateNode;
                        }
                        let node = root.child;
                        while (node) {
                            const targetNode = findReactNode(node, constraint);
                            if (targetNode) {
                                return targetNode;
                            }
                            node = node.sibling;
                        }
                        return null;
                    }

                    function findReactRootNode() {
                        var _rootNode$_reactRootC, _rootNode$_reactRootC2;
                        const rootNode = _0x51ea98.querySelector('#root');
                        let reactRootNode = (rootNode === null || rootNode === void 0 ? void 0 : (_rootNode$_reactRootC = rootNode._reactRootContainer) === null || _rootNode$_reactRootC === void 0 ? void 0 : (_rootNode$_reactRootC2 = _rootNode$_reactRootC._internalRoot) === null || _rootNode$_reactRootC2 === void 0 ? void 0 : _rootNode$_reactRootC2.current) || null;
                        if (reactRootNode === null) {
                            const containerName = Object.keys(rootNode).find(x => x.startsWith('__reactContainer'));
                            if (containerName !== null) {
                                reactRootNode = rootNode[containerName];
                            }
                        }
                        return reactRootNode;
                    }
                    const reactRootNode = findReactRootNode();
                    if (!reactRootNode) {
                        return;
                    }
                    let videoPlayer = findReactNode(reactRootNode, node => node.setPlayerActive && node.props && node.props.mediaPlayerInstance);
                    videoPlayer = ((_videoPlayer = videoPlayer) === null || _videoPlayer === void 0 ? void 0 : (_videoPlayer$props = _videoPlayer.props) === null || _videoPlayer$props === void 0 ? void 0 : _videoPlayer$props.mediaPlayerInstance) || null;
                    videoPlayer.pause();
                    videoPlayer.play();
                }

                function postTwitchWorkerMessage(key, value) {
                    twitchWorkers.forEach(worker => worker.postMessage({
                        key,
                        value
                    }));
                }

                function hookFetch() {
                    const localDeviceID = _0x51ea98.window.localStorage.getItem('local_copy_unique_id');
                    const realFetch = _0x51ea98.window.fetch;

                    function newFetch() {
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }
                        let url = args[0];
                        const options = args[1];
                        if (typeof url !== 'string') {
                            return realFetch.apply(this, args);
                        }
                        postTwitchWorkerMessage('UpdateIsSquadStream', window.location.pathname.includes('/squad'));
                        if (!url.includes('/access_token') && !url.includes('gql')) {
                            return realFetch.apply(this, args);
                        }
                        const deviceId = options.headers['X-Device-Id'] || options.headers['Device-ID'];
                        if (typeof deviceId === 'string' && !deviceId.includes('twitch-web-wall-mason')) {
                            GQLDeviceID = deviceId;
                        } else if (localDeviceID) {
                            GQLDeviceID = localDeviceID.replace('"', '').replace('"', '');
                        }
                        if (GQLDeviceID) {
                            if (typeof options.headers['X-Device-Id'] === 'string') {
                                options.headers['X-Device-Id'] = GQLDeviceID;
                            }
                            if (typeof options.headers['Device-ID'] === 'string') {
                                options.headers['Device-ID'] = GQLDeviceID;
                            }
                            postTwitchWorkerMessage('UpdateDeviceId', GQLDeviceID);
                        }
                        const clientVersion = options.headers['Client-Version'];
                        if (clientVersion && typeof clientVersion === 'string') {
                            ClientVersion = clientVersion;
                        }
                        if (ClientVersion) {
                            postTwitchWorkerMessage('UpdateClientVersion', ClientVersion);
                        }
                        const clientSession = options.headers['Client-Session-Id'];
                        if (clientSession && typeof clientSession === 'string') {
                            ClientSession = clientSession;
                        }
                        if (ClientSession) {
                            postTwitchWorkerMessage('UpdateClientSession', ClientSession);
                        }
                        if (url.includes('gql') && options && typeof options.body === 'string' && options.body.includes('PlaybackAccessToken')) {
                            const clientId = options.headers['Client-ID'];
                            if (clientId && typeof clientId === 'string') {
                                ClientID = clientId;
                            }
                            if (ClientID) {
                                postTwitchWorkerMessage('UpdateClientId', ClientID);
                            }
                            ClientIntegrityHeader = options.headers['Client-Integrity'];
                            if (ClientIntegrityHeader) {
                                postTwitchWorkerMessage('UpdateClientIntegrityHeader', ClientIntegrityHeader);
                            }
                            AuthorizationHeader = options.headers.Authorization;
                            if (AuthorizationHeader) {
                                postTwitchWorkerMessage('UpdateAuthorizationHeader', AuthorizationHeader);
                            }
                            if (options.body.includes('PlaybackAccessToken') && options.body.includes('picture-by-picture')) {
                                options.body = '';
                            }
                        }
                        if (url.includes('picture-by-picture')) {
                            url = '';
                        }
                        return realFetch.apply(this, args);
                    }
                    _0x51ea98.window.fetch = newFetch;
                }

                function declareOptions(scope) {
                    scope.AdSignifier = 'stitched';
                    scope.ClientID = 'kimne78kx3ncx6brgo4mv6wki5h1ko';
                    scope.ClientVersion = 'null';
                    scope.ClientSession = 'null';
                    scope.PlayerType2 = 'embed';
                    scope.PlayerType3 = 'site';
                    scope.PlayerType4 = 'autoplay';
                    scope.CurrentChannelName = null;
                    scope.UsherParams = null;
                    scope.WasShowingAd = false;
                    scope.GQLDeviceID = null;
                    scope.IsSquadStream = false;
                    scope.StreamInfos = [];
                    scope.StreamInfosByUrl = [];
                    scope.MainUrlByUrl = [];
                    scope.EncodingCacheTimeout = 60000;
                    scope.ClientIntegrityHeader = null;
                    scope.AuthorizationHeader = null;
                }
                const isWorkerIntact = () => {
                    const iframe = _0x51ea98.window.document.createElement('iframe');
                    _0x51ea98.window.document.body.append(iframe);
                    const cleanWindow = iframe.contentWindow;
                    if (cleanWindow.Worker.toString() === _0x51ea98.window.Worker.toString()) {
                        iframe.remove();
                        return true;
                    }
                    iframe.remove();
                    return false;
                };

                function init() {
                    try {
                        _0x51ea98.defineProperty(_0x51ea98.document, 'visibilityState', {
                            get() {
                                return 'visible';
                            }
                        });
                        _0x51ea98.defineProperty(_0x51ea98.document, 'hidden', {
                            get() {
                                return false;
                            }
                        });
                        const vendorProp = /Firefox/.test(_0x51ea98.navigator.userAgent) ? 'mozHidden' : 'webkitHidden';
                        _0x51ea98.defineProperty(_0x51ea98.document, vendorProp, {
                            get() {
                                return false;
                            }
                        });
                        const documentEventsToBlock = ['visibilitychange', 'webkitvisibilitychange', 'mozvisibilitychange', 'hasFocus'];
                        const block = e => {
                            e.preventDefault();
                            e.stopPropagation();
                            e.stopImmediatePropagation();
                        };
                        documentEventsToBlock.forEach(event => {
                            _0x51ea98.document.addEventListener(event, block, true);
                        });
                    } catch (e) {}
                    _0x51ea98.window.addEventListener('message', event => {
                        const {
                            data: {
                                type,
                                settings
                            },
                            source
                        } = event;
                        if (source !== _0x51ea98.window) {
                            return;
                        }
                        if (type === 'SetTwitchAdblockSettings' && settings) {
                            TwitchAdblockSettings = settings;
                        }
                    });
                    declareOptions(_0x51ea98.window);
                    const oldWorker = _0x51ea98.window.Worker;
                    _0x51ea98.window.Worker = class Worker extends oldWorker {
                        constructor(twitchBlobUrl) {
                            const jsURL = getWasmWorkerUrl(twitchBlobUrl);
                            if (typeof jsURL !== 'string') {
                                super(twitchBlobUrl);
                                return;
                            }
                            const newBlobStr = `
                    ${getStreamUrlForResolution.toString()}
                    ${getStreamForResolution.toString()}
                    ${stripUnusedParams.toString()}
                    ${processM3U8.toString()}
                    ${hookWorkerFetch.toString()}
                    ${declareOptions.toString()}
                    ${getAccessToken.toString()}
                    ${gqlRequest.toString()}
                    ${adRecordgqlPacket.toString()}
                    ${tryNotifyTwitch.toString()}
                    ${parseAttributes.toString()}
                    declareOptions(self);
                    self.TwitchAdblockSettings = ${JSON.stringify(TwitchAdblockSettings)};
                    self.addEventListener('message', function(e) {
                        if (e.data.key == 'UpdateIsSquadStream') {
                            IsSquadStream = e.data.value;
                        } else if (e.data.key == 'UpdateClientVersion') {
                            ClientVersion = e.data.value;
                        } else if (e.data.key == 'UpdateClientSession') {
                            ClientSession = e.data.value;
                        } else if (e.data.key == 'UpdateClientId') {
                            ClientID = e.data.value;
                        } else if (e.data.key == 'UpdateDeviceId') {
                            GQLDeviceID = e.data.value;
                        } else if (e.data.key == 'UpdateClientIntegrityHeader') {
                            ClientIntegrityHeader = e.data.value;
                        } else if (e.data.key == 'UpdateAuthorizationHeader') {
                            AuthorizationHeader = e.data.value;
                        }
                    });
                    hookWorkerFetch();
                    importScripts('${jsURL}');
                `;
                            super(URL.createObjectURL(new Blob([newBlobStr])));
                            twitchWorkers.push(this);
                            const adblockNoticeManager = (() => {
                                let adblockNotice = null;
                                return {
                                    getNotice() {
                                        if (adblockNotice instanceof HTMLElement) {
                                            return adblockNotice;
                                        }
                                        const playerRootDiv = _0x51ea98.querySelector('.video-player');
                                        if (!playerRootDiv) {
                                            return null;
                                        }
                                        const overlayElement = playerRootDiv === null || playerRootDiv === void 0 ? void 0 : playerRootDiv.querySelector('.adblock-overlay');
                                        if (overlayElement) {
                                            adblockNotice = overlayElement;
                                            return adblockNotice;
                                        }
                                        const overlayStub = _0x51ea98.document.createElement('div');
                                        overlayStub.className = 'adblock-overlay';
                                        overlayStub.innerHTML = '<div class="player-adblock-notice" style="color: white; background-color: rgba(0, 0, 0, 0.8); position: absolute; top: 0px; left: 0px; padding: 5px;"><p></p></div>';
                                        overlayStub.style.display = 'none';
                                        overlayStub.P = overlayStub.querySelector('p');
                                        playerRootDiv.appendChild(overlayStub);
                                        adblockNotice = overlayStub;
                                        return adblockNotice;
                                    },
                                    showNotice() {
                                        const notice = this.getNotice();
                                        if (notice) {
                                            notice.P.textContent = 'Blocking ads';
                                            notice.style.display = 'block';
                                        }
                                    },
                                    hideNotice() {
                                        const notice = this.getNotice();
                                        if (notice) {
                                            notice.style.display = 'none';
                                        }
                                    }
                                };
                            })();
                            this.onmessage = e => {
                                const {
                                    data: {
                                        key
                                    }
                                } = e;
                                switch (key) {
                                    case 'ShowAdBlockBanner':
                                        if (!TwitchAdblockSettings.BannerVisible) {
                                            return;
                                        }
                                        adblockNoticeManager.showNotice();
                                        break;
                                    case 'HideAdBlockBanner':
                                        adblockNoticeManager.hideNotice();
                                        break;
                                    case 'PauseResumePlayer':
                                        pauseResumeTwitchPlayer();
                                        break;
                                }
                            };
                        }
                    };
                    hookFetch();
                }
                _0x51ea98.window.addEventListener('DOMContentLoaded', () => {
                    if (!isWorkerIntact()) {
                        return;
                    }
                    init();
                });
            }
            commonHosts.setEntries(['twitch.tv'], pageCallback$p);
            const _0x198fab = _0x864c;
            (function(_0x31e006, _0x4f0c3f) {
                const _0x49bacf = _0x864c,
                    _0x2958a9 = _0x31e006();
                while (!![]) {
                    try {
                        const _0x4bbf48 = parseInt(_0x49bacf(0x181)) / 0x1 * (parseInt(_0x49bacf(0x178)) / 0x2) + -parseInt(_0x49bacf(0x17b)) / 0x3 + parseInt(_0x49bacf(0x17d)) / 0x4 + -parseInt(_0x49bacf(0x196)) / 0x5 + parseInt(_0x49bacf(0x189)) / 0x6 * (parseInt(_0x49bacf(0x18b)) / 0x7) + -parseInt(_0x49bacf(0x18e)) / 0x8 + parseInt(_0x49bacf(0x172)) / 0x9 * (-parseInt(_0x49bacf(0x17e)) / 0xa);
                        if (_0x4bbf48 === _0x4f0c3f) break;
                        else _0x2958a9['push'](_0x2958a9['shift']());
                    } catch (_0x2b1fa4) {
                        _0x2958a9['push'](_0x2958a9['shift']());
                    }
                }
            }(_0xefcc, 0xb612f));

            function _0xefcc() {
                const _0x417661 = ['liveinternet.ru', 'setEntries', '222247IAOMhG', '#bantop_span', 'style', 'div.Bo\x20+\x20div[id]:not([class])', '[style=\x22display:\x20inline-block;\x20width:\x2050%;\x20vertical-align:\x20top;\x22]', 'div', 'includes', '.myblockbottom__close', '88662HGqnVH', 'querySelectorAll', '427BsdJrW', 'BlWrapper', 'iframe[width][height][allowfullscreen]', '1425944PEpdQS', 'socialAdvertising', 'length', 'querySelector', 'parentElement', 'nodeName', 'forEach', 'location', '2380875RkBDLD', '18tiVeFI', '-20px', 'BODY', 'font-size', '-5px', 'div.Inner\x20>\x20div\x20>\x20script\x20+\x20div\x20>\x20div[id]\x20>\x20div', '10NZVOUK', 'childElements', '0px', '530721CWuNHE', 'allpage', '2834976eFLOdG', '5721380UacfFR'];
                _0xefcc = function() {
                    return _0x417661;
                };
                return _0xefcc();
            }

            function pageCallback$o() {
                const _0x3aaec7 = _0x864c,
                    _0x215a6f = () => {
                        const _0x4a1ef8 = _0x864c,
                            _0x3ae5c1 = _0x51ea98[_0x4a1ef8(0x191)]('.allpageinner\x20>\x20div:not([class])\x20div[align=\x22center\x22]');
                        if (!_0x3ae5c1) return;
                        const _0x41defe = getParent(_0x3ae5c1, 0x2),
                            {
                                marginBottom: _0x21656a,
                                marginTop: _0x5d2197
                            } = getComputedStyle(_0x41defe);
                        _0x21656a === _0x4a1ef8(0x173) && _0x5d2197 === _0x4a1ef8(0x176) && hideViaPositionProperty(_0x41defe);
                        const _0x22bff6 = _0x51ea98[_0x4a1ef8(0x191)]('.allpageinner\x20>\x20div\x20>\x20div[id]\x20>\x20div');
                        _0x22bff6 && _0x22bff6['childElements'][_0x4a1ef8(0x190)] === 0x0 && hideViaPositionProperty(_0x22bff6);
                    },
                    _0x4d528c = () => {
                        const _0x4bc96b = _0x864c,
                            _0x2d22ee = _0x51ea98[_0x4bc96b(0x18a)](_0x4bc96b(0x185));
                        [..._0x2d22ee][_0x4bc96b(0x194)](_0x36eb61 => {
                            const _0x2218b8 = _0x4bc96b,
                                _0x3f2388 = getParent(_0x36eb61, 0x1);
                            _0x3f2388[_0x2218b8(0x183)][_0x2218b8(0x175)] === _0x2218b8(0x17a) && hideViaPositionProperty(_0x3f2388);
                        });
                    },
                    _0x17a47c = () => {
                        const _0x3845a1 = _0x864c,
                            _0x1f7a66 = _0x51ea98[_0x3845a1(0x191)](_0x3845a1(0x182));
                        if (_0x1f7a66) {
                            const _0x4b94fa = getParent(_0x1f7a66, 0x1);
                            _0x4b94fa['id'] === _0x3845a1(0x18c) && hideViaPositionProperty(_0x4b94fa);
                        }
                        const _0x2efcd6 = _0x51ea98['querySelectorAll'](_0x3845a1(0x184));
                        [..._0x2efcd6]['forEach'](_0x25646e => {
                            _0x25646e['id'] && !/[^A-Za-z0-9]+/ ['test'](_0x25646e['id']) && hideViaPositionProperty(_0x25646e);
                        });
                        const _0x288c14 = _0x51ea98[_0x3845a1(0x191)](_0x3845a1(0x188)),
                            _0x287217 = _0x288c14 === null || _0x288c14 === void 0x0 ? void 0x0 : _0x288c14[_0x3845a1(0x192)];
                        _0x288c14 && (_0x287217[_0x3845a1(0x193)] === _0x3845a1(0x174) || (_0x287217 === null || _0x287217 === void 0x0 ? void 0x0 : _0x287217['parentElement']['id']) === _0x3845a1(0x18c)) && removeNode(_0x288c14);
                    },
                    _0x5d9cb2 = () => {
                        const _0x5491d5 = _0x864c,
                            _0x292ad0 = _0x51ea98[_0x5491d5(0x191)](_0x5491d5(0x177));
                        _0x292ad0 && _0x292ad0[_0x5491d5(0x179)]['length'] === 0x0 && hideViaPositionProperty(_0x292ad0);
                    },
                    _0x3a5521 = () => {
                        const _0x2edb88 = _0x864c;
                        if (_0x51ea98[_0x2edb88(0x195)]['pathname'] === '/') {
                            const _0x199cfe = _0x51ea98[_0x2edb88(0x191)](_0x2edb88(0x18d));
                            if (!_0x199cfe) return;
                            const _0x25ffc8 = getParent(_0x199cfe, 0x6),
                                {
                                    className: _0x24b26c,
                                    tagName: _0x2f7ff0
                                } = _0x25ffc8;
                            _0x2f7ff0 !== 'BODY' && !_0x24b26c[_0x2edb88(0x187)](_0x2edb88(0x17c)) && hideViaPositionProperty(_0x25ffc8);
                        } else {
                            const _0x1060a0 = _0x51ea98['querySelectorAll']('iframe[width][height][style^=\x22display:\x20block;\x22][scrolling=\x22no\x22]');
                            _0x1060a0 && removeNode(_0x1060a0);
                        }
                    };
                preventXHR(_0x31fafe => {
                    const _0x593339 = _0x864c,
                        {
                            withCredentials: _0x270b27,
                            responseText: _0x39b8f2
                        } = _0x31fafe;
                    return _0x39b8f2[_0x593339(0x187)](_0x593339(0x18f)) || _0x270b27;
                }), removeFromShadowRoots(_0x3aaec7(0x186)), observeDomChanges(() => {
                    _0x3a5521(), _0x215a6f(), _0x5d9cb2(), _0x4d528c(), _0x17a47c();
                });
            }

            function _0x864c(_0x5666df, _0x5c7ad6) {
                const _0xefcc0 = _0xefcc();
                return _0x864c = function(_0x864c73, _0x13d356) {
                    _0x864c73 = _0x864c73 - 0x172;
                    let _0x17795a = _0xefcc0[_0x864c73];
                    return _0x17795a;
                }, _0x864c(_0x5666df, _0x5c7ad6);
            }
            commonHosts[_0x198fab(0x180)]([_0x198fab(0x17f)], pageCallback$o);
            const _0x5c7579 = _0x4e9e;
            (function(_0x42caa7, _0x55bc8c) {
                const _0x1af5f1 = _0x4e9e,
                    _0xdbab83 = _0x42caa7();
                while (!![]) {
                    try {
                        const _0x265ddf = -parseInt(_0x1af5f1(0x1b6)) / 0x1 * (parseInt(_0x1af5f1(0x1c6)) / 0x2) + parseInt(_0x1af5f1(0x1d5)) / 0x3 * (-parseInt(_0x1af5f1(0x1ce)) / 0x4) + parseInt(_0x1af5f1(0x1c1)) / 0x5 * (parseInt(_0x1af5f1(0x1d4)) / 0x6) + -parseInt(_0x1af5f1(0x1de)) / 0x7 * (parseInt(_0x1af5f1(0x1b8)) / 0x8) + parseInt(_0x1af5f1(0x1cd)) / 0x9 + -parseInt(_0x1af5f1(0x1cf)) / 0xa * (parseInt(_0x1af5f1(0x1e1)) / 0xb) + parseInt(_0x1af5f1(0x1c3)) / 0xc * (parseInt(_0x1af5f1(0x1cb)) / 0xd);
                        if (_0x265ddf === _0x55bc8c) break;
                        else _0xdbab83['push'](_0xdbab83['shift']());
                    } catch (_0x24261d) {
                        _0xdbab83['push'](_0xdbab83['shift']());
                    }
                }
            }(_0x5e5b, 0x81c7f));

            function _0x4e9e(_0x17273a, _0x2c12da) {
                const _0x5e5b8e = _0x5e5b();
                return _0x4e9e = function(_0x4e9ebe, _0x4f18ab) {
                    _0x4e9ebe = _0x4e9ebe - 0x1b3;
                    let _0x2dd76c = _0x5e5b8e[_0x4e9ebe];
                    return _0x2dd76c;
                }, _0x4e9e(_0x17273a, _0x2c12da);
            }

            function _0x5e5b() {
                const _0x1d7740 = ['go.discovery.com', '84PSNUmw', 'window', '/ssai/', '1278sOIKoz', 'discoveryplus.com', 'foodnetwork.com', 'replaceAll', 'go.tlc.com', '3120598SGfAza', 'data', '3315726eqHCsQ', '40LoQWRa', '10Htaade', 'includes', 'videoPlaybackInfo', 'forecastTimeline', 'dash_clear_fmp4', '102tMRTlL', '21900hYjtCU', 'max.com', 'text/xml', 'setEntries', 'querySelector', 'fetch', 'sciencechannel.com', 'querySelectorAll', 'forEach', '7TxEfEh', 'ssaiInfo', 'textContent', '6146767Dapcwn', 'string', 'watch.hgtv.com', 'uplynk.com/preplay', '1388WSckIN', 'attributes', '4389304UhHsdh', 'text', 'vendorAttributes', 'stringify', 'investigationdiscovery.com', 'breaks', 'parseFromString', 'parsererror', 'apply', '161835MsbVHA'];
                _0x5e5b = function() {
                    return _0x1d7740;
                };
                return _0x5e5b();
            }

            function pageCallback$n() {
                const _0xa81745 = _0x4e9e,
                    _0x56bf98 = /<Period duration="[a-zA-Z.\d]+" id="[a-zA-Z\-\d]+"><AssetIdentifier schemeIdUri="urn:com:uplynk:ad-asset-id".*?<\/AdaptationSet><\/Period>/g,
                    _0x2a0da6 = _0x51ea98[_0xa81745(0x1c4)][_0xa81745(0x1da)],
                    _0x283ec6 = async (_0x4d6186, _0x33b220, _0x4661cc) => {
                        const _0x558f40 = _0xa81745,
                            _0x4b1d14 = _0x4661cc[0x0];
                        if (typeof _0x4b1d14 !== _0x558f40(0x1b3) || _0x4b1d14['length'] === 0x0) return Reflect['apply'](_0x4d6186, _0x33b220, _0x4661cc);
                        if (_0x4b1d14[_0x558f40(0x1d0)](_0x558f40(0x1d1))) {
                            var _0x208aa6, _0x4b3969, _0x4d7188, _0x4c9977, _0x4203dc, _0x245d69, _0xd980f4;
                            const _0x48f492 = await _0x2a0da6(..._0x4661cc);
                            let _0x1866c6 = await _0x48f492[_0x558f40(0x1b9)]();
                            return _0x1866c6 = JSON['parse'](_0x1866c6), (_0x208aa6 = _0x1866c6[_0x558f40(0x1cc)]) !== null && _0x208aa6 !== void 0x0 && (_0x4b3969 = _0x208aa6['attributes']) !== null && _0x4b3969 !== void 0x0 && (_0x4d7188 = _0x4b3969['ssaiInfo']) !== null && _0x4d7188 !== void 0x0 && (_0x4c9977 = _0x4d7188[_0x558f40(0x1ba)]) !== null && _0x4c9977 !== void 0x0 && _0x4c9977[_0x558f40(0x1bd)] && (_0x1866c6['data'][_0x558f40(0x1b7)][_0x558f40(0x1df)]['vendorAttributes'][_0x558f40(0x1bd)] = []), (_0x4203dc = _0x1866c6[_0x558f40(0x1cc)]) !== null && _0x4203dc !== void 0x0 && (_0x245d69 = _0x4203dc['attributes']) !== null && _0x245d69 !== void 0x0 && (_0xd980f4 = _0x245d69['ssaiInfo']) !== null && _0xd980f4 !== void 0x0 && _0xd980f4[_0x558f40(0x1d2)] && (_0x1866c6[_0x558f40(0x1cc)]['attributes'][_0x558f40(0x1df)][_0x558f40(0x1d2)] = []), _0x1866c6 = JSON[_0x558f40(0x1bb)](_0x1866c6), new Response(_0x1866c6);
                        }
                        if (_0x4b1d14[_0x558f40(0x1d0)](_0x558f40(0x1b5)) && _0x4b1d14[_0x558f40(0x1d0)]('.mpd')) {
                            const _0x528ffd = await _0x2a0da6(..._0x4661cc);
                            let _0x5a5cd6 = await _0x528ffd[_0x558f40(0x1b9)]();
                            return _0x5a5cd6 = _0x5a5cd6[_0x558f40(0x1c9)](_0x56bf98, ''), new Response(_0x5a5cd6);
                        }
                        if (_0x4b1d14[_0x558f40(0x1d0)](_0x558f40(0x1c5)) && _0x4b1d14[_0x558f40(0x1d0)]('.mpd')) {
                            const _0x1ac7ab = await _0x2a0da6(..._0x4661cc);
                            let _0x5d65fd = await _0x1ac7ab[_0x558f40(0x1b9)]();
                            const _0x32c70b = new DOMParser(),
                                _0x3d21ff = _0x32c70b[_0x558f40(0x1be)](_0x5d65fd, _0x558f40(0x1d7)),
                                _0x5c5831 = _0x3d21ff[_0x558f40(0x1d9)](_0x558f40(0x1bf));
                            if (_0x5c5831) return new Response(_0x5d65fd);
                            const _0x585ea7 = _0x3d21ff[_0x558f40(0x1dc)]('Period');
                            _0x585ea7[_0x558f40(0x1dd)](_0x332499 => {
                                const _0x298e88 = _0x558f40;
                                _0x332499[_0x298e88(0x1e0)]['includes'](_0x298e88(0x1d3)) && _0x332499['remove']();
                            });
                            const _0x43fa30 = new XMLSerializer();
                            return _0x5d65fd = _0x43fa30['serializeToString'](_0x3d21ff), new Response(_0x5d65fd);
                        }
                        return Reflect['apply'](_0x4d6186, _0x33b220, _0x4661cc);
                    },
                    _0x482a07 = {};
                _0x482a07[_0xa81745(0x1c0)] = _0x283ec6;
                const _0x24a92b = _0x482a07;
                try {
                    _0x51ea98['window']['fetch'] = new Proxy(window[_0xa81745(0x1da)], _0x24a92b);
                } catch (_0x3c9889) {
                    console['debug'](_0x3c9889);
                }
            }
            commonHosts[_0x5c7579(0x1d8)]([_0x5c7579(0x1c2), _0x5c7579(0x1c7), _0x5c7579(0x1ca), _0x5c7579(0x1b4), _0x5c7579(0x1bc), _0x5c7579(0x1db), _0x5c7579(0x1c8), _0x5c7579(0x1d6)], pageCallback$n);
            const _0xf528f5 = _0x1a82;
            (function(_0x459c86, _0x57b6dd) {
                const _0x46de3f = _0x1a82,
                    _0x57ece2 = _0x459c86();
                while (!![]) {
                    try {
                        const _0x13fabf = parseInt(_0x46de3f(0xe9)) / 0x1 + -parseInt(_0x46de3f(0xed)) / 0x2 * (-parseInt(_0x46de3f(0xe5)) / 0x3) + parseInt(_0x46de3f(0xf0)) / 0x4 + parseInt(_0x46de3f(0xe6)) / 0x5 * (-parseInt(_0x46de3f(0xef)) / 0x6) + parseInt(_0x46de3f(0xe3)) / 0x7 * (-parseInt(_0x46de3f(0xe8)) / 0x8) + -parseInt(_0x46de3f(0xf1)) / 0x9 * (parseInt(_0x46de3f(0xeb)) / 0xa) + parseInt(_0x46de3f(0xea)) / 0xb;
                        if (_0x13fabf === _0x57b6dd) break;
                        else _0x57ece2['push'](_0x57ece2['shift']());
                    } catch (_0x1b039c) {
                        _0x57ece2['push'](_0x57ece2['shift']());
                    }
                }
            }(_0x394c, 0x5c16d));

            function _0x1a82(_0x1f4ebb, _0x21ac40) {
                const _0x394c85 = _0x394c();
                return _0x1a82 = function(_0x1a826f, _0x4588ec) {
                    _0x1a826f = _0x1a826f - 0xe2;
                    let _0x4f5ea5 = _0x394c85[_0x1a826f];
                    return _0x4f5ea5;
                }, _0x1a82(_0x1f4ebb, _0x21ac40);
            }

            function pageCallback$m() {
                const _0x1b2120 = () => {
                        const _0x3370af = _0x1a82,
                            _0x761f08 = _0x51ea98[_0x3370af(0xf6)]('[data-test*=\x22AdKebabAndLabel\x22]');
                        [..._0x761f08]['forEach'](_0x1d3779 => {
                            const _0x3c1533 = _0x3370af;
                            if (_0x1d3779['innerText'] !== 'РЕКЛАМА') return;
                            for (let _0x50ef98 = 0x5; _0x50ef98 > 0x0; _0x50ef98 -= 0x1) {
                                const _0x5169f5 = getParent(_0x1d3779, _0x50ef98),
                                    {
                                        nodeName: _0x5b6128
                                    } = _0x5169f5;
                                if (_0x5b6128 !== 'DIV' && _0x5b6128 !== _0x3c1533(0xec) && _0x5b6128 !== _0x3c1533(0xf2) && _0x5b6128 !== _0x3c1533(0xf3)) {
                                    hideViaPositionProperty(_0x5169f5);
                                    break;
                                }
                            }
                        });
                    },
                    _0x2010be = () => {
                        const _0x3f9a5c = _0x1a82,
                            _0x181f94 = _0x51ea98[_0x3f9a5c(0xf6)](_0x3f9a5c(0xfa));
                        [..._0x181f94][_0x3f9a5c(0xe2)](_0x2a04f4 => {
                            const _0x2792c7 = _0x3f9a5c;
                            _0x2a04f4[_0x2792c7(0xe7)] === 0x0 && removeNode(_0x2a04f4);
                        });
                        const _0x2e158e = _0x51ea98[_0x3f9a5c(0xf6)]('[id$=\x22inread\x22]');
                        [..._0x2e158e][_0x3f9a5c(0xe2)](_0x53c957 => {
                            hideViaPositionProperty(_0x53c957);
                        });
                    },
                    _0x31f13d = () => {
                        const _0x5a83a8 = _0x1a82,
                            _0x268826 = _0x51ea98[_0x5a83a8(0xf6)](_0x5a83a8(0xf4));
                        [..._0x268826][_0x5a83a8(0xe2)](_0x5ca4de => {
                            const _0x5eebf6 = _0x5a83a8;
                            _0x5ca4de[_0x5eebf6(0xe4)] === 'РЕКЛAМA' && (hideViaPositionProperty(_0x5ca4de), _0x5ca4de[_0x5eebf6(0xf8)][_0x5eebf6(0xe7)] === 0x0 && hideViaPositionProperty(_0x5ca4de['nextElementSibling']));
                        });
                    };
                removeFromShadowRoots('*');
                const _0x348aa0 = () => {
                    const _0x279cba = _0x1a82,
                        _0x4863a3 = _0x51ea98['querySelectorAll'](_0x279cba(0xf7));
                    [..._0x4863a3][_0x279cba(0xe2)](_0x20424f => {
                        const _0x515691 = _0x279cba;
                        getComputedStyle(_0x20424f)[_0x515691(0xf5)] === _0x515691(0xf9) && hideViaPositionProperty(_0x20424f);
                    });
                };
                observeDomChanges(() => {
                    _0x1b2120(), _0x348aa0(), _0x31f13d(), isMobile() && _0x2010be();
                });
            }
            commonHosts[_0xf528f5(0xee)](['spletnik.ru'], pageCallback$m);

            function _0x394c() {
                const _0x21e3c2 = ['58059tAVWNW', 'HEADER', 'BODY', '[itemprop=\x22articleBody\x22]\x20>\x20div', 'width', 'querySelectorAll', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20body\x20>\x20[style^=\x22width:1000px\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20main\x20>\x20[style^=\x22margin:\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.col_wrapper\x20>\x20[style^=\x22margin:\x22]\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'nextElementSibling', '1000px', '[id=\x22mobile_footer\x22]\x20>\x20*\x20>\x20*', 'forEach', '49soJVrk', 'innerText', '7449NzHmVl', '5huNFtB', 'childElementCount', '352520mDpedQ', '686464vGlWbv', '3426918dwTgHC', '390NGDcqc', 'MAIN', '112ZIOBWP', 'setEntries', '3904080TegMab', '1803484SFiUDZ'];
                _0x394c = function() {
                    return _0x21e3c2;
                };
                return _0x394c();
            }
            const _0x56b099 = _0x57cd;

            function _0x57cd(_0x1cd10d, _0x29a6c2) {
                const _0x26dbac = _0x26db();
                return _0x57cd = function(_0x57cd6a, _0xafed5e) {
                    _0x57cd6a = _0x57cd6a - 0x108;
                    let _0x50d65b = _0x26dbac[_0x57cd6a];
                    return _0x50d65b;
                }, _0x57cd(_0x1cd10d, _0x29a6c2);
            }(function(_0x21f971, _0x34da3c) {
                const _0x52f5d3 = _0x57cd,
                    _0xbecd53 = _0x21f971();
                while (!![]) {
                    try {
                        const _0x57edd3 = -parseInt(_0x52f5d3(0x116)) / 0x1 * (-parseInt(_0x52f5d3(0x115)) / 0x2) + parseInt(_0x52f5d3(0x109)) / 0x3 * (parseInt(_0x52f5d3(0x108)) / 0x4) + -parseInt(_0x52f5d3(0x10e)) / 0x5 * (-parseInt(_0x52f5d3(0x119)) / 0x6) + parseInt(_0x52f5d3(0x10a)) / 0x7 * (-parseInt(_0x52f5d3(0x111)) / 0x8) + -parseInt(_0x52f5d3(0x112)) / 0x9 + -parseInt(_0x52f5d3(0x118)) / 0xa * (parseInt(_0x52f5d3(0x11a)) / 0xb) + -parseInt(_0x52f5d3(0x10c)) / 0xc * (parseInt(_0x52f5d3(0x117)) / 0xd);
                        if (_0x57edd3 === _0x34da3c) break;
                        else _0xbecd53['push'](_0xbecd53['shift']());
                    } catch (_0x5a7b85) {
                        _0xbecd53['push'](_0xbecd53['shift']());
                    }
                }
            }(_0x26db, 0x886a3));

            function _0x26db() {
                const _0x235c83 = ['3feciam', '735WLlHvD', '#tidal-player-root\x20>\x20video', '8719344QCRhDH', 'tidal.com', '355qfyEWe', 'querySelector', 'duration', '16184mmBKUp', '6894657ArqIpe', 'setEntries', '#footerPlayer\x20a[title=\x22Advertisement\x22]', '2145478CNnumG', '1oRoNlb', '13ljbAxf', '14830dtBMKh', '31890jbJeuP', '1452zPqjCD', '4038028VvNKuB'];
                _0x26db = function() {
                    return _0x235c83;
                };
                return _0x26db();
            }

            function pageCallback$l() {
                observeDomChanges(() => {
                    const _0x4658cb = _0x57cd,
                        _0x346338 = _0x51ea98[_0x4658cb(0x10f)](_0x4658cb(0x114)),
                        _0x42d062 = _0x51ea98[_0x4658cb(0x10f)](_0x4658cb(0x10b));
                    _0x346338 && _0x42d062 && (_0x42d062['currentTime'] = _0x42d062[_0x4658cb(0x110)]);
                });
            }
            commonHosts[_0x56b099(0x113)]([_0x56b099(0x10d)], pageCallback$l);
            const _0x221d61 = _0x2730;

            function _0x2730(_0x10b16b, _0x46531e) {
                const _0x4e6ea3 = _0x4e6e();
                return _0x2730 = function(_0x273026, _0x413d02) {
                    _0x273026 = _0x273026 - 0xcd;
                    let _0x284395 = _0x4e6ea3[_0x273026];
                    return _0x284395;
                }, _0x2730(_0x10b16b, _0x46531e);
            }(function(_0x4385c6, _0x23f7fa) {
                const _0x261750 = _0x2730,
                    _0x51dc3a = _0x4385c6();
                while (!![]) {
                    try {
                        const _0x369972 = -parseInt(_0x261750(0xdb)) / 0x1 * (parseInt(_0x261750(0xd4)) / 0x2) + -parseInt(_0x261750(0xd0)) / 0x3 + -parseInt(_0x261750(0xcd)) / 0x4 + parseInt(_0x261750(0xda)) / 0x5 * (parseInt(_0x261750(0xe1)) / 0x6) + parseInt(_0x261750(0xd5)) / 0x7 + -parseInt(_0x261750(0xd3)) / 0x8 * (parseInt(_0x261750(0xe4)) / 0x9) + -parseInt(_0x261750(0xde)) / 0xa * (-parseInt(_0x261750(0xd9)) / 0xb);
                        if (_0x369972 === _0x23f7fa) break;
                        else _0x51dc3a['push'](_0x51dc3a['shift']());
                    } catch (_0x4f67f4) {
                        _0x51dc3a['push'](_0x51dc3a['shift']());
                    }
                }
            }(_0x4e6e, 0x34cfe));

            function pageCallback$k() {
                const _0x4f992b = _0x2730,
                    _0x19f343 = new MutationObserver(_0x56a0b9 => {
                        const _0x37bbd5 = _0x2730;
                        [..._0x56a0b9][_0x37bbd5(0xcf)](_0x31f8b2 => {
                            const _0x434a3d = _0x37bbd5;
                            if (_0x31f8b2[_0x434a3d(0xd6)]['length'] === 0x0) return;
                            const _0x1b32db = _0x31f8b2['target'],
                                _0x45db6f = _0x1b32db['querySelectorAll']('msft-article-card:not([class=\x22contentCard\x22])');
                            [..._0x45db6f][_0x434a3d(0xcf)](_0x4c38b8 => {
                                const _0x399a68 = _0x434a3d;
                                _0x4c38b8[_0x399a68(0xd1)]();
                            });
                        });
                    }),
                    _0x5797f8 = {};
                _0x5797f8[_0x4f992b(0xe6)] = !![], _0x5797f8[_0x4f992b(0xdc)] = !![];
                const _0x2fcd38 = _0x5797f8,
                    _0x3da3fa = _0x41146d => {
                        const _0x3a4e99 = _0x4f992b,
                            _0x4d1369 = _0x41146d[_0x3a4e99(0xd8)][_0x3a4e99(0xe0)]['attachShadow'];
                        _0x41146d['Element'][_0x3a4e99(0xe0)][_0x3a4e99(0xdd)] = function(_0x31da91) {
                            const _0x50d46e = _0x3a4e99,
                                _0x5d4c36 = _0x4d1369[_0x50d46e(0xce)](this, _0x31da91);
                            return _0x19f343[_0x50d46e(0xe5)](_0x5d4c36, _0x2fcd38), _0x5d4c36;
                        }, _0x41146d['Element']['prototype'][_0x3a4e99(0xdd)][_0x3a4e99(0xe3)] = _0x4d1369[_0x3a4e99(0xe3)][_0x3a4e99(0xe2)](_0x4d1369);
                    };
                _0x3da3fa(_0x51ea98[_0x4f992b(0xdf)]);
            }
            commonHosts[_0x221d61(0xd7)]([_0x221d61(0xd2)], pageCallback$k);

            function _0x4e6e() {
                const _0x3930fd = ['call', 'forEach', '455730jQdcyE', 'remove', 'msn.com', '8EVUWTP', '44qoZcOA', '2602096urptUw', 'addedNodes', 'setEntries', 'Element', '9565336CPORHA', '1135oFWEnr', '8754FsHdha', 'childList', 'attachShadow', '10SLnJqg', 'window', 'prototype', '1668gosshz', 'bind', 'toString', '3399597YqKVrs', 'observe', 'subtree', '1463444icNjQb'];
                _0x4e6e = function() {
                    return _0x3930fd;
                };
                return _0x4e6e();
            }
            const _0xd5e19 = _0xa329;

            function _0x3a96() {
                const _0x415b8f = ['div:not([class]):not([id])', 'div[class^=\x22dzen-mobile__wrapperFeed\x22]\x20article:not([id])', '170304clSQpR', '28428JXPeIv', '/news', '/news/rubric/', 'previousSibling', '15IoPujg', '6yseOkl', '5753DLSYCo', 'adreasons.yandex-team.ru', '.mg-advert__card', '/news/instory/', '963nLGNGb', 'firstElementChild', '#article__bottom-embed', '.viewer-layout__content\x20>\x20div[class*=\x22content\x22]\x20>\x20div[class*=\x22content__description\x22]\x20+\x20div:not([class]):not([id])', 'cssText', 'columnGap', '/?yredirect=true', 'relative', 'mg-grid__col_xs_4', '7433279jCCxrk', 'setEntries', 'video-grid-row', '\x20728px\x2090px', '.feed__row\x20.feed__item\x20>\x20div[class^=\x22card-wrapper\x22]', 'q/_crpd', 'clientWidth', 'bannerContainer', 'styleSheets', 'every', '.placeholder-card__container', 'remove', '[class^=\x22direct\x22]', '4837215jIMoJi', '[class*=\x22-sidebar__item\x22]\x20>\x20[class*=\x22recommended\x22]\x20>\x20[class*=\x22-recommended__content\x22]\x20>\x20[class*=\x22-view__feed\x22]', '.container__banner', 'home', 'iframe[src=\x22about:blank\x22]', 'link[crossorigin=\x22anonymous\x22]', 'script\x20+\x20section[class*=\x22_\x22]\x20>\x20div\x20div[id]', 'a[target=\x22__blank\x22]', 'parentNode', 'startsWith', 'article__content_limited', '/video', 'advblock', '73764cRtDqo', '/pogoda', 'mradx', 'DOMContentLoaded', 'test', 'disabled', 'forEach', '[class*=\x22ad-split-embed\x22]', 'classList', 'contains', 'div:not([id]):not([class])\x20>\x20iframe', 'pathname', 'dzen-desktop__search-', 'div.main\x20div', 'refresh', '.mg-advert__column', 'userAgent', 'innerText', 'response', 'article.card-wrapper:not(.card-video-punch__wrapper-35)', '[data-ad-slot][data-ad-client]', 'iframe', 'join', '.news-instory-page\x20>\x20div:not([class*=\x22instory\x22])[class*=\x22type_native\x22]', 'includes', 'querySelector', 'document', '#page\x20>\x20div[class]\x20>\x20div[class]:last-child', 'Mobile', '0px', '.grid__feed-cn\x20div[class][aria-label]', '[class*=\x22desktop-layout__container-\x22]', 'data-type', 'div[style*=\x22-top\x22]\x20>\x20div[style*=\x22-top\x22]', 'className', 'dzen.ru', 'style:first-child', 'b-banner__content_direct', '.touch-feed\x20>\x20div\x20>\x20div.feed-item[data-type]', 'getElementById', 'window', 'iframe[width=\x22100%\x22]', 'location', 'clientHeight', 'brief', 'div[data-id][class]\x20+\x20div[data-id][class]\x20+\x20div[data-id][class]\x20+\x20div[class]', 'banner__parent', '[class*=\x22video-card-ad__\x22]', 'querySelectorAll', '18784cnvfkh', 'length', '[class^=\x22dzen-desktop__search\x22]', 'textContent', 'banner', 'match', 'value', '/news/story/', 'image_card', 'export', '9421800zxfdua', 'nextElementSibling', 'div-hidden-by-size', '24xRDadW', 'dataset', 'news', 'attributes', 'data-variant', '/media', 'aria-labelledby', 'setAttribute', 'style', 'previousElementSibling', 'keys', 'cls'];
                _0x3a96 = function() {
                    return _0x415b8f;
                };
                return _0x3a96();
            }(function(_0x139a8e, _0x2dca75) {
                const _0x567ee3 = _0xa329,
                    _0x2c13c9 = _0x139a8e();
                while (!![]) {
                    try {
                        const _0x49f39c = parseInt(_0x567ee3(0xb1)) / 0x1 * (-parseInt(_0x567ee3(0xac)) / 0x2) + parseInt(_0x567ee3(0xad)) / 0x3 * (parseInt(_0x567ee3(0x9e)) / 0x4) + -parseInt(_0x567ee3(0xcd)) / 0x5 + parseInt(_0x567ee3(0xb2)) / 0x6 * (-parseInt(_0x567ee3(0xc0)) / 0x7) + -parseInt(_0x567ee3(0x91)) / 0x8 * (parseInt(_0x567ee3(0xb7)) / 0x9) + parseInt(_0x567ee3(0x9b)) / 0xa + parseInt(_0x567ee3(0xb3)) / 0xb * (parseInt(_0x567ee3(0xda)) / 0xc);
                        if (_0x49f39c === _0x2dca75) break;
                        else _0x2c13c9['push'](_0x2c13c9['shift']());
                    } catch (_0x386f55) {
                        _0x2c13c9['push'](_0x2c13c9['shift']());
                    }
                }
            }(_0x3a96, 0xa02bd));

            function _0xa329(_0x1f9f1b, _0x5c6292) {
                const _0x3a9629 = _0x3a96();
                return _0xa329 = function(_0xa329f0, _0x5e6ae4) {
                    _0xa329f0 = _0xa329f0 - 0x7a;
                    let _0xfe8292 = _0x3a9629[_0xa329f0];
                    return _0xfe8292;
                }, _0xa329(_0x1f9f1b, _0x5c6292);
            }

            function pageCallback$j() {
                const _0xc4450d = _0xa329,
                    _0x32fce3 = () => {
                        const _0x451c71 = _0xa329;
                        try {
                            const _0x147a25 = _0x51ea98[_0x451c71(0x90)](_0x451c71(0xc4));
                            [..._0x147a25][_0x451c71(0xe0)](_0x52dd2e => {
                                const _0x2b20bc = _0x451c71,
                                    _0xdbc118 = getParent(_0x52dd2e, 0x2);
                                (!_0x52dd2e[_0x2b20bc(0x82)][_0x2b20bc(0xf2)]('is-desktop') || elementContains(_0x52dd2e[_0x2b20bc(0xf3)]('div[class$=\x22subtitle-text\x22]'), /промо/)) && hideViaPositionProperty(_0xdbc118);
                            });
                        } catch (_0x478d80) {}
                    };
                if (_0x51ea98[_0xc4450d(0x8a)][_0xc4450d(0xe5)][_0xc4450d(0xd6)]('/') || _0x51ea98[_0xc4450d(0x8a)][_0xc4450d(0xe5)][_0xc4450d(0xd6)](_0xc4450d(0xbd))) {
                    const _0x3497a1 = () => {
                            const _0x18d75 = () => {
                                    const _0x27a90d = _0xa329;
                                    var _0x99585, _0x1e5d3e;
                                    const _0x1b1d6b = (_0x99585 = document['querySelector']('[class^=\x22dzen-header-desktop__header\x22]')) === null || _0x99585 === void 0x0 ? void 0x0 : _0x99585[_0x27a90d(0x9c)],
                                        _0x284eca = (_0x1e5d3e = document['querySelector'](_0x27a90d(0x7f))) === null || _0x1e5d3e === void 0x0 ? void 0x0 : _0x1e5d3e[_0x27a90d(0xa7)];
                                    if (!_0x1b1d6b || !_0x284eca) return;
                                    _0x1b1d6b === _0x284eca && hideViaPositionProperty(_0x1b1d6b);
                                },
                                _0x1118b7 = () => {
                                    const _0x51555b = _0xa329;
                                    var _0x14fedb;
                                    const _0x11a37d = (_0x14fedb = _0x51ea98[_0x51555b(0xf3)](_0x51555b(0x93))) === null || _0x14fedb === void 0x0 ? void 0x0 : _0x14fedb[_0x51555b(0xd5)],
                                        _0xaf1450 = _0x11a37d === null || _0x11a37d === void 0x0 ? void 0x0 : _0x11a37d['childNodes'];
                                    if (!_0x11a37d || !_0xaf1450 || _0xaf1450[_0x51555b(0x92)] === 0x0) return;
                                    for (let _0x55c0bc = 0x0; _0x55c0bc < _0xaf1450[_0x51555b(0x92)] - 0x1; _0x55c0bc += 0x1) {
                                        const _0x57fed8 = [..._0xaf1450[_0x55c0bc][_0x51555b(0xe2)]][_0x51555b(0xf0)]();
                                        if (_0x57fed8['includes'](_0x51555b(0xe6))) break;
                                        hideViaDisplayProperty(_0xaf1450[_0x55c0bc]);
                                    }
                                };
                            observeDomChanges(() => {
                                _0x18d75(), _0x1118b7();
                            });
                        },
                        _0x2a14b0 = () => {
                            const _0xf4635a = _0xc4450d,
                                _0x56d79f = _0x51ea98[_0xf4635a(0x90)](_0xf4635a(0x86)),
                                _0x46ef5c = ['gif', _0xf4635a(0x8c), _0xf4635a(0xa0), _0xf4635a(0x99), ''];
                            [..._0x56d79f][_0xf4635a(0xe0)](_0x39c0ad => {
                                const _0x4026c0 = _0xf4635a,
                                    _0x2dfd62 = _0x39c0ad['getAttribute'](_0x4026c0(0x80));
                                _0x2dfd62 && !_0x46ef5c[_0x4026c0(0xf2)](_0x2dfd62) && hideViaPositionProperty(_0x39c0ad);
                            });
                            const _0x427cb8 = _0x51ea98[_0xf4635a(0xf3)]('a[href*=\x22count\x22][alt^=\x22ООО\x22]');
                            if (_0x427cb8) {
                                const _0x3dd60c = getParent(_0x427cb8, 0x2);
                                hideViaPositionProperty(_0x3dd60c);
                            }
                            const _0xa7ab9b = _0x51ea98['querySelectorAll'](_0xf4635a(0xab));
                            _0xa7ab9b[_0xf4635a(0xe0)](_0x38fe0d => {
                                const _0x56ea37 = _0xf4635a;
                                if (!_0x38fe0d[_0x56ea37(0x9f)] && !getComputedStyle(_0x38fe0d)[_0x56ea37(0xbc)]) return;
                                hideViaPositionProperty(_0x38fe0d);
                            });
                        },
                        _0x6a190f = () => {
                            const _0x585db5 = _0xc4450d,
                                _0x221d20 = _0x51ea98[_0x585db5(0x7a)][_0x585db5(0x90)](_0x585db5(0xe4));
                            [..._0x221d20]['forEach'](_0x416524 => {
                                const {
                                    src: _0x4f65a9,
                                    allowFullscreen: _0x43f2f4
                                } = _0x416524;
                                _0x4f65a9 === '' && _0x43f2f4 && hideViaPositionProperty(_0x416524);
                            });
                        },
                        _0x5b4921 = () => {
                            const _0x3f8853 = _0xc4450d,
                                _0x49826c = _0x51ea98[_0x3f8853(0x7a)][_0x3f8853(0x87)]('article__comments'),
                                _0x1d8010 = getParent(_0x49826c, 0x2),
                                _0x385a91 = _0x1d8010 === null || _0x1d8010 === void 0x0 ? void 0x0 : _0x1d8010[_0x3f8853(0xb0)];
                            _0x385a91 && _0x385a91[_0x3f8853(0xe2)][_0x3f8853(0xe3)](_0x3f8853(0xd7)) && hideViaPositionProperty(_0x385a91);
                        },
                        _0x5061db = () => {
                            const _0x20d77a = _0xc4450d,
                                _0x3e3086 = _0x51ea98[_0x20d77a(0x90)](_0x20d77a(0xed)),
                                _0x23411b = [..._0x3e3086];
                            for (let _0x3998e9 = 0x0; _0x3998e9 < _0x23411b[_0x20d77a(0x92)]; _0x3998e9 += 0x1) {
                                const _0x5afbef = _0x23411b[_0x3998e9],
                                    {
                                        borderBottomRightRadius: _0x2e07a4,
                                        borderBottomLeftRadius: _0x285d90,
                                        borderTopRightRadius: _0x2a7f72,
                                        borderTopLeftRadius: _0x3a6996,
                                        marginTop: _0x2f7b22
                                    } = getComputedStyle(_0x5afbef),
                                    _0x4a0f1f = [_0x2e07a4, _0x285d90, _0x2a7f72, _0x3a6996, _0x2f7b22][_0x20d77a(0xc9)](_0x33cdae => _0x33cdae === _0x20d77a(0x7d));
                                _0x4a0f1f && hideViaPositionProperty(_0x5afbef);
                            }
                        },
                        _0x14edf9 = () => {
                            const _0x1c14b9 = _0xc4450d,
                                _0x57a11d = _0x51ea98['querySelector'](_0x1c14b9(0x81));
                            if (!_0x57a11d) return;
                            const _0x193fd4 = getParent(_0x57a11d, 0x1);
                            hideViaPositionProperty(_0x193fd4);
                        };
                    removeFromShadowRoots('div:first-child', _0x2cf8ab => {
                        const _0x3d1426 = _0xc4450d,
                            _0x11f1c4 = _0x2cf8ab['querySelector'](_0x3d1426(0x84));
                        if (!_0x11f1c4) return ![];
                        return _0x11f1c4[_0x3d1426(0xeb)][_0x3d1426(0xf2)]('get-direct') || _0x11f1c4[_0x3d1426(0xeb)]['includes'](_0x3d1426(0xa2));
                    }), observeDomChanges(() => {
                        const _0x202135 = _0xc4450d;
                        _0x5061db(), _0x32fce3(), _0x6a190f(), _0x5b4921(), _0x3497a1(), _0x14edf9(), navigator[_0x202135(0xea)]['includes'](_0x202135(0x7c)) && _0x2a14b0();
                    });
                }
                if (_0x51ea98[_0xc4450d(0x8a)][_0xc4450d(0xe5)][_0xc4450d(0xd6)](_0xc4450d(0xae))) {
                    const _0x5013f4 = () => {
                            const _0x3763cc = _0x51ea98['querySelectorAll']('.news-app__content\x20>\x20div\x20>\x20div:first-child\x20>\x20div');
                            [..._0x3763cc]['forEach'](_0x54d755 => {
                                const _0x5d5fdc = _0xa329;
                                !_0x54d755['getAttribute'](_0x5d5fdc(0xa4)) && hideViaDisplayProperty(_0x54d755);
                            });
                        },
                        _0x4290a4 = () => {
                            const _0x352356 = _0xc4450d,
                                _0x5610d5 = _0x51ea98['querySelectorAll'](_0x352356(0xd1));
                            [..._0x5610d5][_0x352356(0xe0)](_0x176dd8 => {
                                const _0x238b55 = _0x352356,
                                    _0x2d7314 = _0x176dd8[_0x238b55(0xd5)],
                                    _0x1e536b = _0x2d7314 === null || _0x2d7314 === void 0x0 ? void 0x0 : _0x2d7314[_0x238b55(0x9c)];
                                if (!_0x2d7314 || !_0x1e536b) return;
                                if (!_0x1e536b[_0x238b55(0xeb)]['includes'](_0x238b55(0xdc))) return;
                                const _0x19fa3a = getParent(_0x2d7314, 0x2);
                                _0x19fa3a && hideViaPositionProperty(_0x19fa3a);
                            });
                            const _0x222360 = _0x51ea98['querySelector'](_0x352356(0xe9));
                            _0x222360 && hideViaPositionProperty(_0x222360);
                            if (_0x51ea98[_0x352356(0x8a)]['pathname'][_0x352356(0xf2)](_0x352356(0x98)) || _0x51ea98[_0x352356(0x8a)][_0x352356(0xe5)][_0x352356(0xf2)](_0x352356(0xaf))) {
                                const _0x5ecb9c = _0x51ea98['querySelectorAll'](_0x352356(0xb5));
                                [..._0x5ecb9c][_0x352356(0xe0)](_0x1491c8 => {
                                    const _0x3299d8 = _0x352356;
                                    var _0x1f1956;
                                    const {
                                        parentNode: _0x5b7ad2
                                    } = _0x1491c8;
                                    _0x5b7ad2 !== null && _0x5b7ad2 !== void 0x0 && (_0x1f1956 = _0x5b7ad2[_0x3299d8(0xe2)]) !== null && _0x1f1956 !== void 0x0 && _0x1f1956['contains'](_0x3299d8(0xbf)) && hideViaPositionProperty(_0x5b7ad2);
                                });
                                const _0x27d4ad = _0x51ea98[_0x352356(0x90)](_0x352356(0xee));
                                [..._0x27d4ad][_0x352356(0xe0)](_0x37904e => {
                                    const _0x232448 = _0x352356,
                                        _0x3dae0c = getParent(_0x37904e, 0x1),
                                        _0x2ada86 = getParent(_0x37904e, 0x2),
                                        _0x5d23fd = _0x3ccc6b => _0x3ccc6b && !_0x3ccc6b['querySelector']('.news-feed') && getComputedStyle(_0x3ccc6b)['position'] === _0x232448(0xbe);
                                    _0x5d23fd(_0x3dae0c) && hideViaPositionProperty(_0x3dae0c), _0x5d23fd(_0x2ada86) && hideViaPositionProperty(_0x2ada86);
                                });
                            }
                            if (_0x51ea98[_0x352356(0x8a)][_0x352356(0xe5)][_0x352356(0xf2)](_0x352356(0xb6))) {
                                const _0x251e73 = _0x51ea98['querySelectorAll'](_0x352356(0xf1));
                                [..._0x251e73]['forEach'](_0x5a976c => {
                                    hideViaPositionProperty(_0x5a976c);
                                });
                            }
                        };
                    observeDomChanges(() => {
                        const _0x30d361 = _0xc4450d;
                        _0x51ea98[_0x30d361(0x8a)]['pathname'] === _0x30d361(0xae) && _0x5013f4(), _0x4290a4();
                    });
                }
                if (_0x51ea98[_0xc4450d(0x8a)][_0xc4450d(0xe5)][_0xc4450d(0xd6)](_0xc4450d(0xa3)));
                if (_0x51ea98[_0xc4450d(0x8a)]['pathname'][_0xc4450d(0xd6)](_0xc4450d(0xd8))) {
                    removeFromShadowRoots(_0xc4450d(0xd4));
                    const _0x31bdcf = () => {
                            const _0x36e92b = _0xc4450d,
                                _0x305f4a = _0x51ea98[_0x36e92b(0xf3)](_0x36e92b(0xba));
                            _0x305f4a && _0x305f4a[_0x36e92b(0xf3)](_0x36e92b(0xd2)) && _0x305f4a[_0x36e92b(0xf3)](_0x36e92b(0xef)) && hideViaPositionProperty(_0x305f4a);
                        },
                        _0x412a54 = () => {
                            const _0x294b83 = _0xc4450d,
                                _0x5552b0 = _0x51ea98['querySelector']('.viewer-layout__sidebar\x20>\x20[class*=\x22-sidebar\x22]\x20>\x20[class*=\x22-sidebar__item\x22]');
                            if (!_0x5552b0) return;
                            const _0x2d8489 = _0x5552b0[_0x294b83(0xf3)]('div:first-child:not([class]):not([id])');
                            _0x2d8489 && hideViaPositionProperty(_0x2d8489);
                            const _0x3b6728 = _0x5552b0[_0x294b83(0xf3)](_0x294b83(0xce)),
                                _0x21703c = _0x3b6728[_0x294b83(0x90)](_0x294b83(0xaa));
                            [..._0x21703c]['forEach'](_0x289b08 => {
                                const _0xbf9d69 = _0x294b83;
                                _0x289b08[_0xbf9d69(0xf3)](_0xbf9d69(0x89)) && hideViaPositionProperty(_0x289b08);
                            });
                        },
                        _0x4e44a2 = () => {
                            const _0x3ea4b0 = _0xc4450d,
                                _0x4aceb7 = _0x51ea98[_0x3ea4b0(0x90)](_0x3ea4b0(0x8f));
                            [..._0x4aceb7][_0x3ea4b0(0xe0)](_0x36c335 => hideViaPositionProperty(_0x36c335));
                            const _0x125a7a = _0x51ea98['querySelectorAll'](_0x3ea4b0(0x7e));
                            _0x125a7a[_0x3ea4b0(0xe0)](_0xfb4b0 => {
                                const _0x14cbe3 = _0x3ea4b0,
                                    _0x19297e = getParent(_0xfb4b0, 0x1);
                                if (!_0x19297e[_0x14cbe3(0x9f)]) return;
                                const _0x53c358 = _0x19297e['dataset'],
                                    _0x4ac15d = Object[_0x14cbe3(0xa8)](_0x53c358)[0x0];
                                _0x53c358[_0x4ac15d] === _0x14cbe3(0xc2) && hideViaPositionProperty(_0x19297e);
                            });
                        };
                    observeDomChanges(() => {
                        _0x31bdcf(), _0x412a54(), _0x4e44a2();
                    });
                }
                if (_0x51ea98[_0xc4450d(0x8a)][_0xc4450d(0xe5)][_0xc4450d(0xd6)](_0xc4450d(0xdb))) {
                    const _0x1410fc = () => {
                        const _0x136212 = _0xc4450d,
                            _0x4ee709 = _0x51ea98[_0x136212(0x90)]('div[style*=\x22!important\x22][style*=\x22height\x22][style*=\x22width\x22],\x20article.card_without-card-decoration');
                        [..._0x4ee709]['forEach'](_0x34cbf8 => hideViaPositionProperty(_0x34cbf8));
                    };
                    removeFromShadowRoots('*'), observeDomChanges(() => {
                        _0x1410fc();
                    });
                }
                if (_0x51ea98['location'][_0xc4450d(0xe5)][_0xc4450d(0xd6)]('/q')) {
                    const _0x274fd4 = _0x30a002 => {
                            const _0x25488d = _0xc4450d,
                                {
                                    responseURL: _0x33122c,
                                    withCredentials: _0x2850ce
                                } = _0x30a002;
                            if (_0x33122c !== null && _0x33122c !== void 0x0 && _0x33122c[_0x25488d(0x96)](/context.js|static-mon/)) return !![];
                            if (_0x33122c !== null && _0x33122c !== void 0x0 && _0x33122c['includes'](_0x25488d(0xc5)) && _0x2850ce === !![]) return !![];
                            if (_0x33122c !== null && _0x33122c !== void 0x0 && _0x33122c[_0x25488d(0x96)](/\/webvisor|\/watch|jstracer/) && _0x2850ce === !![]) return !![];
                            return ![];
                        },
                        _0x1c94a4 = () => {
                            const _0x282de9 = _0xc4450d,
                                _0x1a3152 = _0x51ea98[_0x282de9(0x90)](_0x282de9(0x8d));
                            [..._0x1a3152][_0x282de9(0xe0)](_0x1222aa => {
                                const _0x158ecd = _0x282de9;
                                _0x1222aa['classList'][_0x158ecd(0x92)] === 0x3 && !_0x1222aa['textContent'] && hideViaDisplayProperty(_0x1222aa);
                            });
                            const _0x5f018f = _0x51ea98[_0x282de9(0x90)](_0x282de9(0xd3));
                            [..._0x5f018f][_0x282de9(0xe0)](_0x49d1bb => {
                                const _0x310eb0 = _0x282de9,
                                    _0x2c8665 = getParent(_0x49d1bb, 0x3);
                                (_0x49d1bb['querySelector']('div[style*=\x22width:\x20100%\x22]') || !_0x49d1bb[_0x310eb0(0x94)]) && hideViaDisplayProperty(_0x2c8665);
                            });
                        },
                        _0x25cdf1 = () => {
                            const _0x50a1ac = _0xc4450d,
                                _0x32dcb5 = _0x51ea98['querySelector'](_0x50a1ac(0x7b)),
                                _0x3855ff = _0x32dcb5 === null || _0x32dcb5 === void 0x0 ? void 0x0 : _0x32dcb5[_0x50a1ac(0xf3)]('div[style^=\x22will-change:\x20position\x22]\x20>\x20div\x20>\x20div:last-child');
                            _0x3855ff && hideViaDisplayProperty(_0x3855ff);
                        };
                    preventXHR(_0x274fd4), observeDomChanges(() => {
                        _0x1c94a4(), _0x25cdf1();
                    });
                }
                if (_0x51ea98[_0xc4450d(0x8a)][_0xc4450d(0xe5)][_0xc4450d(0xd6)]('/a')) {
                    const _0x53a559 = () => {
                            const _0x85351f = _0xc4450d,
                                _0x255463 = _0x51ea98['querySelector'](_0x85351f(0xb9));
                            _0x255463 && _0x255463[_0x85351f(0xf3)]('[class*=\x22ad-split-embed\x22]') && hideViaPositionProperty(_0x255463);
                        },
                        _0x580df6 = () => {
                            const _0x137d4e = _0xc4450d,
                                _0x2f6b2e = _0x51ea98['querySelectorAll']('[class$=\x22__ad-content\x22],\x20.sticky-container:nth-child(2n)');
                            [..._0x2f6b2e][_0x137d4e(0xe0)](_0x1b8e8b => {
                                hideViaPositionProperty(_0x1b8e8b);
                            });
                        },
                        _0xb10e3a = () => {
                            const _0x3c45e6 = () => {
                                const _0x2ca391 = _0xa329,
                                    _0x3369cc = _0x51ea98[_0x2ca391(0x90)](_0x2ca391(0xe1));
                                [..._0x3369cc][_0x2ca391(0xe0)](_0x29f6b1 => {
                                    hideViaPositionProperty(_0x29f6b1);
                                });
                            };
                            _0x3c45e6();
                        };
                    observeDomChanges(() => {
                        const _0x5c22ba = _0xc4450d;
                        _0x53a559(), _0x580df6(), navigator[_0x5c22ba(0xea)][_0x5c22ba(0xf2)](_0x5c22ba(0x7c)) && _0xb10e3a();
                    });
                }
                const _0x53701e = () => {
                        const _0x523d5e = _0xc4450d,
                            _0x9894de = _0x51ea98[_0x523d5e(0x90)]('.feed__item\x20article:not([aria-label])');
                        _0x9894de['forEach'](_0xce3ecd => {
                            const _0x245e8e = _0x523d5e,
                                _0x37ab94 = _0xce3ecd[_0x245e8e(0x90)]('div\x20>\x20div:has(>\x20div:not([class]):not([id]))');
                            _0x37ab94[_0x245e8e(0xe0)](_0x53eb50 => {
                                const _0x5b3515 = _0x245e8e,
                                    _0x1076b1 = _0x53eb50[_0x5b3515(0x94)];
                                if (_0x1076b1[_0x5b3515(0x92)] !== 0x7) return;
                                hideViaPositionProperty(_0xce3ecd);
                            });
                        });
                    },
                    _0x4999ab = {},
                    _0x8061b5 = () => {
                        const _0x39d0c2 = _0xc4450d;

                        function _0xce453d(_0x450e2a) {
                            const _0x1e18ab = _0xa329;
                            if (_0x450e2a[_0x1e18ab(0x95)] && _0x450e2a['banner'][_0x1e18ab(0xa9)]) {
                                let _0x342742 = _0x450e2a[_0x1e18ab(0x95)]['cls'][_0x1e18ab(0x8e)];
                                return !_0x342742 && (_0x342742 = _0x450e2a['banner']['cls'][_0x1e18ab(0x85)]), _0x342742;
                            }
                            if (_0x450e2a['banner'] && _0x450e2a[_0x1e18ab(0x95)][_0x1e18ab(0xe8)]) {
                                const _0xf10a39 = _0x450e2a[_0x1e18ab(0x95)]['refresh'][_0x1e18ab(0xc7)];
                                if (!_0xf10a39) return null;
                                return _0xf10a39;
                            }
                            return null;
                        }

                        function _0x31b896(_0x95e1c1) {
                            const _0x2173a4 = _0xa329;
                            let _0x1e53b5 = _0xce453d(_0x95e1c1);
                            if (_0x1e53b5) {
                                _0x1e53b5 = '.' + _0x1e53b5;
                                if (_0x4999ab[_0x1e53b5]) return;
                                _0x4999ab[_0x1e53b5] = !![], [..._0x51ea98['querySelectorAll'](_0x1e53b5)][_0x2173a4(0xe0)](_0x1dd11c => {
                                    const _0x4d412a = _0x2173a4;
                                    _0x51ea98[_0x4d412a(0xa5)](_0x1dd11c, _0x4d412a(0xa6), 'display:none!important');
                                }), [..._0x51ea98[_0x2173a4(0x7a)][_0x2173a4(0xc8)]][_0x2173a4(0xe0)](_0x57d7e8 => {
                                    const _0x461056 = _0x2173a4;
                                    try {
                                        if (_0x57d7e8[_0x461056(0xdf)]) return;
                                        const _0x59956b = safeGetStylesheetRules(_0x57d7e8);
                                        for (let _0x1894e6 = 0x0; _0x1894e6 < _0x59956b['length']; _0x1894e6 += 0x1) {
                                            const _0x25a29e = _0x59956b[_0x1894e6];
                                            if (_0x25a29e[_0x461056(0xbb)][_0x461056(0xf2)](_0x461056(0xc3))) {
                                                _0x57d7e8[_0x461056(0xdf)] = !![];
                                                continue;
                                            }
                                        }
                                    } catch (_0x383350) {}
                                });
                                return;
                            }
                            if (_0x4999ab[_0x2173a4(0x9d)]) return;
                            const _0x569bf7 = _0x51ea98[_0x2173a4(0x90)](_0x2173a4(0xe7));
                            [..._0x569bf7][_0x2173a4(0xe0)](_0x1948a2 => {
                                const _0x407741 = _0x2173a4;
                                _0x1948a2[_0x407741(0xc6)] === 0x2d8 && _0x1948a2[_0x407741(0x8b)] === 0x5a && (_0x1948a2[_0x407741(0xcb)](), _0x4999ab[_0x407741(0x9d)] = !![]);
                            });
                        }
                        _0x51ea98['window'][_0x39d0c2(0xd0)] && _0x51ea98[_0x39d0c2(0x88)][_0x39d0c2(0xd0)][_0x39d0c2(0x9a)] && _0x31b896(_0x51ea98[_0x39d0c2(0x88)][_0x39d0c2(0xd0)][_0x39d0c2(0x9a)]);
                    },
                    _0x1db51e = () => {
                        const _0x534d4b = _0xc4450d,
                            _0x47602f = _0x51ea98['querySelector'](_0x534d4b(0xcf));
                        _0x47602f && _0x47602f[_0x534d4b(0xf3)](_0x534d4b(0xcc)) && hideViaPositionProperty(_0x47602f);
                    },
                    _0x213808 = () => {
                        const _0x2c6d24 = _0xc4450d,
                            _0x57d94f = _0x51ea98[_0x2c6d24(0x90)](_0x2c6d24(0xca));
                        [..._0x57d94f][_0x2c6d24(0xe0)](_0x33a8a2 => {
                            const _0x347d38 = _0x2c6d24;
                            var _0x56edcf;
                            const _0x2c8f42 = (_0x56edcf = _0x33a8a2[_0x347d38(0xb8)]) === null || _0x56edcf === void 0x0 ? void 0x0 : _0x56edcf[_0x347d38(0xa1)];
                            if (!_0x2c8f42) return;
                            for (let _0x1fa4e7 = 0x0; _0x1fa4e7 < _0x2c8f42[_0x347d38(0x92)]; _0x1fa4e7 += 0x1) {
                                _0x2c8f42[_0x1fa4e7] && /^[a-zA-Z0-9]{2}_[a-zA-Z0-9]{2}$/ [_0x347d38(0xde)](_0x2c8f42[_0x1fa4e7][_0x347d38(0x97)]) && hideViaPositionProperty(_0x33a8a2);
                            }
                        });
                    },
                    _0x3975bc = _0x5a784d => {
                        const _0x37d121 = _0xc4450d;
                        if (_0x5a784d[_0x37d121(0xec)]['includes'](_0x37d121(0xb4))) return !![];
                        if (_0x5a784d[_0x37d121(0xec)][_0x37d121(0xf2)](_0x37d121(0xd9))) return !![];
                        return ![];
                    };
                preventXHR(_0x3975bc), _0x51ea98['document']['addEventListener'](_0xc4450d(0xdd), () => {
                    _0x8061b5(), hideYaDirectAds();
                }, ![]), observeDomChanges(() => {
                    _0x1db51e(), _0x8061b5(), hideYaDirectAds(), _0x32fce3(), _0x213808(), _0x53701e();
                });
            }
            commonHosts[_0xd5e19(0xc1)]([_0xd5e19(0x83)], pageCallback$j);
            const _0x59b72e = _0x5c99;
            (function(_0x5f31a6, _0x8d7c86) {
                const _0x14edef = _0x5c99,
                    _0x461b4c = _0x5f31a6();
                while (!![]) {
                    try {
                        const _0x27221d = parseInt(_0x14edef(0x14a)) / 0x1 + parseInt(_0x14edef(0x153)) / 0x2 * (parseInt(_0x14edef(0x14f)) / 0x3) + -parseInt(_0x14edef(0x149)) / 0x4 + -parseInt(_0x14edef(0x144)) / 0x5 * (parseInt(_0x14edef(0x14b)) / 0x6) + parseInt(_0x14edef(0x145)) / 0x7 + parseInt(_0x14edef(0x147)) / 0x8 * (parseInt(_0x14edef(0x14e)) / 0x9) + parseInt(_0x14edef(0x157)) / 0xa * (-parseInt(_0x14edef(0x158)) / 0xb);
                        if (_0x27221d === _0x8d7c86) break;
                        else _0x461b4c['push'](_0x461b4c['shift']());
                    } catch (_0x2cb010) {
                        _0x461b4c['push'](_0x461b4c['shift']());
                    }
                }
            }(_0x154e, 0xb67cf));

            function _0x154e() {
                const _0x3aaa8b = ['contains', '2iNszQV', 'pathname', 'adpTags', '7px', '1110qNsmIW', '141977XzwlWE', 'sdaf', 'adpush', 'setEntries', '14275fmLuLM', '1417752kYETHY', 'classList', '3134176MtGiRU', 'duplichecker.com', '144192TCKkXZ', '980745NFHNYj', '504kKESSc', '.container-fluid\x20#home_top\x20+\x20div[class][style]', 'adRecover', '9vCxqfj', '2642889gJpZPa', 'location', 'container-fluid'];
                _0x154e = function() {
                    return _0x3aaa8b;
                };
                return _0x154e();
            }

            function _0x5c99(_0x2e2ddb, _0x198b71) {
                const _0x154e02 = _0x154e();
                return _0x5c99 = function(_0x5c99a9, _0x2199d7) {
                    _0x5c99a9 = _0x5c99a9 - 0x142;
                    let _0x3cf0f3 = _0x154e02[_0x5c99a9];
                    return _0x3cf0f3;
                }, _0x5c99(_0x2e2ddb, _0x198b71);
            }

            function pageCallback$i() {
                const _0x51579a = _0x5c99,
                    _0x3a0666 = [_0x51579a(0x142), _0x51579a(0x14d), _0x51579a(0x155)];
                removeScripts(_0x3a0666);
                const _0x5cbad5 = () => {
                    const _0x1f30ad = _0x51579a,
                        _0x17edb3 = document['querySelector'](_0x1f30ad(0x14c));
                    if (!_0x17edb3) return;
                    const _0x5e6ff4 = _0x51ea98[_0x1f30ad(0x150)][_0x1f30ad(0x154)] === '/' ? _0x1f30ad(0x159) : _0x1f30ad(0x151);
                    for (let _0x4029d9 = 0x0; _0x4029d9 < 0x5; _0x4029d9 += 0x1) {
                        const _0x1438a7 = getParent(_0x17edb3, _0x4029d9);
                        _0x1438a7 && (_0x1438a7[_0x1f30ad(0x146)][_0x1f30ad(0x152)](_0x5e6ff4) || getComputedStyle(_0x1438a7)['marginTop'] === _0x1f30ad(0x156)) && hideViaPositionProperty(_0x1438a7);
                    }
                };
                observeDomChanges(() => {
                    _0x5cbad5();
                });
            }
            commonHosts[_0x59b72e(0x143)]([_0x59b72e(0x148)], pageCallback$i);
            const _0x1ac22d = _0x285c;
            (function(_0x6772c2, _0xb29a9b) {
                const _0x166fc7 = _0x285c,
                    _0x3c67ff = _0x6772c2();
                while (!![]) {
                    try {
                        const _0x40ff3c = parseInt(_0x166fc7(0xd8)) / 0x1 * (parseInt(_0x166fc7(0xd1)) / 0x2) + -parseInt(_0x166fc7(0xcc)) / 0x3 * (-parseInt(_0x166fc7(0xd5)) / 0x4) + parseInt(_0x166fc7(0xc5)) / 0x5 + -parseInt(_0x166fc7(0xc2)) / 0x6 + parseInt(_0x166fc7(0xc0)) / 0x7 + parseInt(_0x166fc7(0xbe)) / 0x8 + -parseInt(_0x166fc7(0xc9)) / 0x9 * (parseInt(_0x166fc7(0xca)) / 0xa);
                        if (_0x40ff3c === _0xb29a9b) break;
                        else _0x3c67ff['push'](_0x3c67ff['shift']());
                    } catch (_0x1390c5) {
                        _0x3c67ff['push'](_0x3c67ff['shift']());
                    }
                }
            }(_0x1134, 0xc6f02));

            function _0x285c(_0x2e9ccb, _0x398093) {
                const _0x11342c = _0x1134();
                return _0x285c = function(_0x285c79, _0x5decb8) {
                    _0x285c79 = _0x285c79 - 0xbe;
                    let _0x41af1d = _0x11342c[_0x285c79];
                    return _0x41af1d;
                }, _0x285c(_0x2e9ccb, _0x398093);
            }

            function pageCallback$h() {
                const _0x53d5ac = () => {
                        const _0x188f97 = _0x285c,
                            _0x387d9c = _0x51ea98[_0x188f97(0xd9)]('.main_area\x20>\x20div:not([id=\x22tooltip_box\x22])\x20>\x20div.col');
                        if (!_0x387d9c) return;
                        const _0x58426e = _0x387d9c[_0x188f97(0xd2)](_0x188f97(0xcd));
                        [..._0x58426e]['forEach'](_0x5616f6 => {
                            const _0xd1d47c = _0x188f97,
                                _0x55f231 = _0x5616f6[_0xd1d47c(0xd9)](_0xd1d47c(0xce));
                            _0x55f231 && (_0x55f231['src']['includes'](_0xd1d47c(0xbf)) || _0x55f231['innerText'][_0xd1d47c(0xdb)](_0xd1d47c(0xcf))) && hideViaPositionProperty(_0x5616f6);
                        });
                    },
                    _0x189b5e = () => {
                        const _0x43165c = _0x285c,
                            _0x1fca03 = _0x51ea98[_0x43165c(0xd9)]('form[id$=\x22-checker-form\x22]\x20a[href$=\x22.html\x22][onclick^=\x22tool_trigger\x22]');
                        _0x1fca03 && hideViaPositionProperty(_0x1fca03);
                    },
                    _0x14e143 = () => {
                        const _0x5c4917 = _0x285c,
                            _0x3912f6 = _0x51ea98[_0x5c4917(0xd9)](_0x5c4917(0xd0)),
                            _0x5b82ea = _0x3912f6 === null || _0x3912f6 === void 0x0 ? void 0x0 : _0x3912f6[_0x5c4917(0xd9)]('[data-ad-client]');
                        _0x5b82ea && hideViaPositionProperty(_0x3912f6);
                    },
                    _0x7814fe = () => {
                        const _0x427760 = _0x285c,
                            _0x4ea05f = _0x51ea98[_0x427760(0xd9)](_0x427760(0xda));
                        if (!_0x4ea05f) return;
                        const _0x375eba = _0x4ea05f[_0x427760(0xd2)]('a[href$=\x22.html\x22][onclick^=\x22tool_trigger\x22],\x20span');
                        [..._0x375eba][_0x427760(0xc4)](_0x215a81 => {
                            const _0x5a4e57 = _0x427760,
                                {
                                    tagName: _0x3fadb6
                                } = _0x215a81;
                            (_0x3fadb6 === 'A' || _0x3fadb6 === _0x5a4e57(0xc1) && !_0x215a81['classList'][_0x5a4e57(0xc6)](_0x5a4e57(0xc8))) && hideViaPositionProperty(_0x215a81);
                        });
                    },
                    _0x1894db = () => {
                        const _0x58899f = _0x285c,
                            _0x294fa8 = _0x51ea98[_0x58899f(0xd9)](_0x58899f(0xc7));
                        _0x294fa8 && _0x294fa8[_0x58899f(0xd9)]('.semrush_banner') && hideViaPositionProperty(_0x294fa8);
                    },
                    _0x400f07 = () => {
                        const _0x4114b8 = _0x285c,
                            _0x30a3ef = _0x51ea98[_0x4114b8(0xd2)](_0x4114b8(0xd3));
                        [..._0x30a3ef][_0x4114b8(0xc4)](_0x2bc7ab => {
                            const _0x3be369 = _0x4114b8;
                            _0x2bc7ab[_0x3be369(0xd9)]('img[width=\x22300\x22][height=\x22250\x22]') && hideViaPositionProperty(_0x2bc7ab);
                        });
                        const _0x213a93 = _0x51ea98[_0x4114b8(0xd9)]('.main_area\x20>\x20div:not([id=\x22tooltip_box\x22])\x20>\x20.clearfix\x20+\x20span');
                        _0x213a93 && _0x213a93[_0x4114b8(0xd9)](_0x4114b8(0xd4)) && hideViaPositionProperty(_0x213a93);
                    };
                observeDomChanges(() => {
                    const _0x3923f8 = _0x285c,
                        {
                            pathname: _0x34be6d
                        } = _0x51ea98[_0x3923f8(0xc3)],
                        _0x2e9271 = _0x34be6d === '/';
                    _0x14e143(), _0x7814fe(), _0x1894db(), _0x2e9271 && _0x400f07(), !_0x2e9271 && _0x53d5ac(), (_0x34be6d[_0x3923f8(0xcb)](_0x3923f8(0xd6)) || _0x34be6d['startsWith'](_0x3923f8(0xd7))) && _0x189b5e();
                });
            }

            function _0x1134() {
                const _0x44ac53 = ['body\x20>\x20.pt-3\x20>\x20span', '84PlMxKj', 'querySelectorAll', '.main_area\x20>\x20div:not([id=\x22tooltip_box\x22])\x20>\x20div\x20>\x20span', 'a[target=\x22_blank\x22][rel=\x22nofollow\x20noopener\x22]', '4xOivMN', '/plagiarism-checker', '/grammar-checker', '16281GFOcWQ', 'querySelector', '.side_area', 'includes', 'setEntries', 'smallseotools.com', '7117928pzUkmd', 'googlesyndication', '2052428sCxvKk', 'SPAN', '4267050wcJblE', 'location', 'forEach', '8073995TQcYYR', 'contains', '.main_area\x20>\x20div.bg-white.text-center', 'pro_pricing', '5099670aIlSUm', '50dgmBXQ', 'startsWith', '2632887OHWbOn', 'span', 'script', 'adpushup'];
                _0x1134 = function() {
                    return _0x44ac53;
                };
                return _0x1134();
            }
            commonHosts[_0x1ac22d(0xdc)]([_0x1ac22d(0xdd)], pageCallback$h);

            function _0x28a7(_0x3aead2, _0x11d079) {
                const _0x4bac83 = _0x4bac();
                return _0x28a7 = function(_0x28a776, _0x2eb741) {
                    _0x28a776 = _0x28a776 - 0x170;
                    let _0x3f70c3 = _0x4bac83[_0x28a776];
                    return _0x3f70c3;
                }, _0x28a7(_0x3aead2, _0x11d079);
            }
            const _0x32a8af = _0x28a7;

            function _0x4bac() {
                const _0x59fa03 = ['amedia.online', '72ADJyOw', '1073898SViSdT', '1526290myjmMw', '83980GxxHNg', '7317990iaAQgh', 'setEntries', '4782534fwhYNG', 'includes', '2dXdwtV', '107159hjWvqg', '3318423RxRVBH', '45QbyVEb', 'firstAdGrow'];
                _0x4bac = function() {
                    return _0x59fa03;
                };
                return _0x4bac();
            }(function(_0x599e91, _0x2bd15f) {
                const _0x57533b = _0x28a7,
                    _0x386430 = _0x599e91();
                while (!![]) {
                    try {
                        const _0x1d8152 = parseInt(_0x57533b(0x17b)) / 0x1 + parseInt(_0x57533b(0x17a)) / 0x2 * (-parseInt(_0x57533b(0x17c)) / 0x3) + -parseInt(_0x57533b(0x175)) / 0x4 + parseInt(_0x57533b(0x174)) / 0x5 + -parseInt(_0x57533b(0x178)) / 0x6 + -parseInt(_0x57533b(0x173)) / 0x7 * (parseInt(_0x57533b(0x172)) / 0x8) + -parseInt(_0x57533b(0x17d)) / 0x9 * (-parseInt(_0x57533b(0x176)) / 0xa);
                        if (_0x1d8152 === _0x2bd15f) break;
                        else _0x386430['push'](_0x386430['shift']());
                    } catch (_0x3476b8) {
                        _0x386430['push'](_0x386430['shift']());
                    }
                }
            }(_0x4bac, 0xbb1fd));

            function pageCallback$g() {
                const _0x5cf73d = _0x5b2e7f => {
                    const _0x3e4256 = _0x28a7,
                        {
                            response: _0x2d33db
                        } = _0x5b2e7f;
                    if (_0x2d33db[_0x3e4256(0x179)](_0x3e4256(0x170))) return !![];
                    if (_0x2d33db[_0x3e4256(0x179)]('ADFOX')) return !![];
                    return ![];
                };
                preventXHR(_0x5cf73d);
            }
            commonHosts[_0x32a8af(0x177)]([_0x32a8af(0x171)], pageCallback$g);
            const _0x1c168d = _0x1c35;

            function _0x1c35(_0x166a27, _0x3f009f) {
                const _0x1691f1 = _0x1691();
                return _0x1c35 = function(_0x1c35bd, _0xd2c0c4) {
                    _0x1c35bd = _0x1c35bd - 0xc6;
                    let _0x1f1801 = _0x1691f1[_0x1c35bd];
                    return _0x1f1801;
                }, _0x1c35(_0x166a27, _0x3f009f);
            }

            function _0x1691() {
                const _0x2a26aa = ['1578EKwrDq', 'innerText', 'pubg', 'responseURL', 'script', '14086720zOuFfr', '3158193WSnJav', 'sm.news', 'includes', 'forEach', '34636RdxgnE', '10uaSafp', '26355bZTKWL', 'a.src=\x22//sm', 'script[src*=\x22vidjetsm.js\x22]', 'AdvManager', '602402Zxthdy', 'adbanner', '345wiQuGx', '235038eyKHzE', '4511439WVnxCv', 'response', 'querySelectorAll', 'querySelector', 'includeJs', 'article.article[itemscope]\x20+\x20article.aside'];
                _0x1691 = function() {
                    return _0x2a26aa;
                };
                return _0x1691();
            }(function(_0x4d3ee3, _0x1584f2) {
                const _0x368af1 = _0x1c35,
                    _0x4fd40e = _0x4d3ee3();
                while (!![]) {
                    try {
                        const _0x45a2dc = -parseInt(_0x368af1(0xd8)) / 0x1 + -parseInt(_0x368af1(0xdb)) / 0x2 + -parseInt(_0x368af1(0xce)) / 0x3 + parseInt(_0x368af1(0xd2)) / 0x4 * (-parseInt(_0x368af1(0xda)) / 0x5) + -parseInt(_0x368af1(0xc8)) / 0x6 * (-parseInt(_0x368af1(0xd4)) / 0x7) + parseInt(_0x368af1(0xcd)) / 0x8 + -parseInt(_0x368af1(0xdc)) / 0x9 * (-parseInt(_0x368af1(0xd3)) / 0xa);
                        if (_0x45a2dc === _0x1584f2) break;
                        else _0x4fd40e['push'](_0x4fd40e['shift']());
                    } catch (_0x5061ac) {
                        _0x4fd40e['push'](_0x4fd40e['shift']());
                    }
                }
            }(_0x1691, 0xd7607));

            function pageCallback$f() {
                const _0x45b008 = _0x207040 => {
                        const _0x16219f = _0x1c35;
                        if (_0x207040[_0x16219f(0xdd)][_0x16219f(0xd0)](_0x16219f(0xd9))) return !![];
                        if (_0x207040[_0x16219f(0xcb)]['includes'](_0x16219f(0xca))) return !![];
                        return ![];
                    },
                    _0x35f211 = () => {
                        const _0x39c339 = _0x1c35,
                            _0xe1340 = _0x51ea98[_0x39c339(0xdf)](_0x39c339(0xc7));
                        if (!_0xe1340 || !_0xe1340['querySelector'](_0x39c339(0xd6))) return;
                        hideViaPositionProperty(_0xe1340);
                    };
                preventXHR(_0x45b008), observeDomChanges(() => {
                    const _0x1665b4 = _0x1c35,
                        _0x2b9c59 = document[_0x1665b4(0xde)](_0x1665b4(0xcc));
                    [..._0x2b9c59][_0x1665b4(0xd1)](_0x5da9c1 => {
                        const _0xe5c22b = _0x1665b4;
                        (_0x5da9c1[_0xe5c22b(0xc9)][_0xe5c22b(0xd0)](_0xe5c22b(0xd7)) || _0x5da9c1['innerText'][_0xe5c22b(0xd0)]('testAdblock') || _0x5da9c1['innerText'][_0xe5c22b(0xd0)](_0xe5c22b(0xc6)) || _0x5da9c1['innerText'][_0xe5c22b(0xd0)](_0xe5c22b(0xd5))) && (_0x5da9c1['innerText'] = '');
                    }), _0x35f211();
                });
            }
            commonHosts['setEntries']([_0x1c168d(0xcf)], pageCallback$f);
            const _0x2435f0 = _0x1c67;
            (function(_0x4f4ffe, _0x3250f9) {
                const _0x58ef1d = _0x1c67,
                    _0x449f9c = _0x4f4ffe();
                while (!![]) {
                    try {
                        const _0x181083 = -parseInt(_0x58ef1d(0x178)) / 0x1 + parseInt(_0x58ef1d(0x16f)) / 0x2 + -parseInt(_0x58ef1d(0x16a)) / 0x3 * (-parseInt(_0x58ef1d(0x170)) / 0x4) + -parseInt(_0x58ef1d(0x177)) / 0x5 + parseInt(_0x58ef1d(0x172)) / 0x6 + -parseInt(_0x58ef1d(0x173)) / 0x7 * (-parseInt(_0x58ef1d(0x16c)) / 0x8) + parseInt(_0x58ef1d(0x169)) / 0x9 * (-parseInt(_0x58ef1d(0x171)) / 0xa);
                        if (_0x181083 === _0x3250f9) break;
                        else _0x449f9c['push'](_0x449f9c['shift']());
                    } catch (_0x292c8) {
                        _0x449f9c['push'](_0x449f9c['shift']());
                    }
                }
            }(_0x3d31, 0x60e6d));

            function _0x3d31() {
                const _0x55bb54 = ['206046pybXnS', '3bFyZVM', '[id*=\x22gpt-ad\x22],\x20div.outbrain', '8PYDVdV', 'prepend', 'setEntries', '1089734KkChel', '1686340ArrkyE', '220hSLivh', '1868112leRRmP', '3963029MtzWzu', 'DOMContentLoaded', 'forEach', 'soranews24.com', '1457285rGvcZP', '651917PUKVGa', 'createElement', 'img', 'lazy', 'add', 'youpouch.com', 'addEventListener'];
                _0x3d31 = function() {
                    return _0x55bb54;
                };
                return _0x3d31();
            }

            function _0x1c67(_0x333a04, _0x2d0132) {
                const _0x3d31c6 = _0x3d31();
                return _0x1c67 = function(_0x1c67ce, _0x3d8319) {
                    _0x1c67ce = _0x1c67ce - 0x165;
                    let _0x24edbc = _0x3d31c6[_0x1c67ce];
                    return _0x24edbc;
                }, _0x1c67(_0x333a04, _0x2d0132);
            }

            function pageCallback$e() {
                const _0x4c54e0 = _0x1c67,
                    _0x34ecc9 = () => {
                        const _0x159324 = _0x1c67,
                            _0x28770b = _0x51ea98['querySelector']('#main-content\x20\x20.post-content');
                        if (!_0x28770b) return;
                        const _0x321add = document[_0x159324(0x179)](_0x159324(0x17a));
                        _0x321add['classList'][_0x159324(0x166)](_0x159324(0x165)), _0x28770b[_0x159324(0x16d)](_0x321add);
                    };
                window[_0x4c54e0(0x168)](_0x4c54e0(0x174), () => {
                    _0x34ecc9(), observeDomChanges(() => {
                        const _0x13773d = _0x1c67,
                            _0x359d7a = _0x51ea98['querySelectorAll'](_0x13773d(0x16b));
                        [..._0x359d7a][_0x13773d(0x175)](_0x597947 => {
                            hideViaPositionProperty(_0x597947);
                        });
                    });
                });
            }
            commonHosts[_0x2435f0(0x16e)]([_0x2435f0(0x176), 'rocketnews24.com', _0x2435f0(0x167)], pageCallback$e);
            var _0x379a13 = _0x4c6e;
            (function(_0x3f035c, _0x30c4ef) {
                var _0x431a15 = _0x4c6e,
                    _0x5b8e23 = _0x3f035c();
                while (!![]) {
                    try {
                        var _0x223da7 = -parseInt(_0x431a15(0x141)) / 0x1 + parseInt(_0x431a15(0x138)) / 0x2 * (-parseInt(_0x431a15(0x143)) / 0x3) + -parseInt(_0x431a15(0x142)) / 0x4 * (parseInt(_0x431a15(0x13e)) / 0x5) + -parseInt(_0x431a15(0x139)) / 0x6 * (parseInt(_0x431a15(0x13a)) / 0x7) + parseInt(_0x431a15(0x13b)) / 0x8 + -parseInt(_0x431a15(0x144)) / 0x9 * (parseInt(_0x431a15(0x13c)) / 0xa) + parseInt(_0x431a15(0x13d)) / 0xb;
                        if (_0x223da7 === _0x30c4ef) break;
                        else _0x5b8e23['push'](_0x5b8e23['shift']());
                    } catch (_0x381e94) {
                        _0x5b8e23['push'](_0x5b8e23['shift']());
                    }
                }
            }(_0x1e96, 0x8df78));

            function _0x1e96() {
                var _0x22ece5 = ['7647696dHRbjj', '395410PvMOWe', '41635022rrgFTm', '115oVUsFY', 'setEntries', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20[data-container=\x22outer\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20iframe[hidefocus=\x22true\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20img[title*=\x22.ru\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20img[title*=\x22.com\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20div[style*=\x22width\x22][style*=\x22height\x22][style*=\x22important\x22]\x0a\x20\x20\x20\x20', '941567oFBGEP', '56648tNZRzW', '3NsWRuO', '207MMYIXt', '1953274AtRCVJ', '30ZICYIp', '1408533whaCnK'];
                _0x1e96 = function() {
                    return _0x22ece5;
                };
                return _0x1e96();
            }

            function pageCallback$d() {
                var _0xca1f30 = _0x4c6e;
                removeFromShadowRoots(_0xca1f30(0x140));
            }

            function _0x4c6e(_0x348ac0, _0x5e4d1b) {
                var _0x1e9675 = _0x1e96();
                return _0x4c6e = function(_0x4c6ef8, _0x213f45) {
                    _0x4c6ef8 = _0x4c6ef8 - 0x138;
                    var _0x5746f6 = _0x1e9675[_0x4c6ef8];
                    return _0x5746f6;
                }, _0x4c6e(_0x348ac0, _0x5e4d1b);
            }
            commonHosts[_0x379a13(0x13f)](['irecommend.ru'], pageCallback$d);
            const _0x2fe228 = _0xbabf;

            function _0x4c52() {
                const _0xe31afb = ['416310USVxeV', 'height:inherit', '.page_project', 'nextElementSibling', 'style', 'setEntries', 'firstElementChild', '40635JAnVDL', '304840ooMozZ', '7290216qbprLH', '15SeewHg', '20768460qrGNbL', '552734rYbykQ', '585Jaylxp', 'top', 'innerHTML', '2032NbPNQC', '39828uccFkn'];
                _0x4c52 = function() {
                    return _0xe31afb;
                };
                return _0x4c52();
            }

            function _0xbabf(_0x3994d, _0x839bd4) {
                const _0x4c5279 = _0x4c52();
                return _0xbabf = function(_0xbabfaa, _0x250f65) {
                    _0xbabfaa = _0xbabfaa - 0x1c2;
                    let _0x133628 = _0x4c5279[_0xbabfaa];
                    return _0x133628;
                }, _0xbabf(_0x3994d, _0x839bd4);
            }(function(_0x1ec917, _0x5b4e38) {
                const _0x4621b6 = _0xbabf,
                    _0x28f1af = _0x1ec917();
                while (!![]) {
                    try {
                        const _0x15f290 = parseInt(_0x4621b6(0x1d1)) / 0x1 + parseInt(_0x4621b6(0x1c7)) / 0x2 * (-parseInt(_0x4621b6(0x1c9)) / 0x3) + parseInt(_0x4621b6(0x1d0)) / 0x4 * (parseInt(_0x4621b6(0x1cc)) / 0x5) + -parseInt(_0x4621b6(0x1c8)) / 0x6 + parseInt(_0x4621b6(0x1cb)) / 0x7 + parseInt(_0x4621b6(0x1cf)) / 0x8 * (-parseInt(_0x4621b6(0x1c6)) / 0x9) + parseInt(_0x4621b6(0x1ca)) / 0xa;
                        if (_0x15f290 === _0x5b4e38) break;
                        else _0x28f1af['push'](_0x28f1af['shift']());
                    } catch (_0x330891) {
                        _0x28f1af['push'](_0x28f1af['shift']());
                    }
                }
            }(_0x4c52, 0x95b15));

            function pageCallback$c() {
                const _0x433368 = () => {
                    const _0x5a604c = _0xbabf,
                        _0x21616e = _0x51ea98['querySelectorAll'](_0x5a604c(0x1d3));
                    [..._0x21616e]['forEach'](_0x1cb25f => {
                        const _0x1b849d = _0x5a604c;
                        var _0x40eb02;
                        const _0x354e36 = _0x1cb25f[_0x1b849d(0x1c5)];
                        (_0x354e36 === null || _0x354e36 === void 0x0 ? void 0x0 : (_0x40eb02 = _0x354e36[_0x1b849d(0x1c3)]) === null || _0x40eb02 === void 0x0 ? void 0x0 : _0x40eb02[_0x1b849d(0x1cd)]) === '-99999px' && hideViaPositionProperty(_0x1cb25f);
                    });
                };
                removeFromShadowRoots('div', _0x5cfc05 => {
                    const _0x145f70 = _0xbabf;
                    var _0x489dfa, _0x1dd4e6;
                    return _0x5cfc05 === null || _0x5cfc05 === void 0x0 ? void 0x0 : (_0x489dfa = _0x5cfc05[_0x145f70(0x1c2)]) === null || _0x489dfa === void 0x0 ? void 0x0 : (_0x1dd4e6 = _0x489dfa[_0x145f70(0x1ce)]) === null || _0x1dd4e6 === void 0x0 ? void 0x0 : _0x1dd4e6['includes'](_0x145f70(0x1d2));
                }), observeDomChanges(() => {
                    hideYaDirectAds(), _0x433368();
                });
            }
            commonHosts[_0x2fe228(0x1c4)](['rg.ru'], pageCallback$c);
            const _0x50c284 = _0x1455;
            (function(_0x5c7531, _0x29cfef) {
                const _0x2ce3fd = _0x1455,
                    _0x30d29b = _0x5c7531();
                while (!![]) {
                    try {
                        const _0x485037 = -parseInt(_0x2ce3fd(0x160)) / 0x1 + parseInt(_0x2ce3fd(0x166)) / 0x2 * (parseInt(_0x2ce3fd(0x164)) / 0x3) + -parseInt(_0x2ce3fd(0x15f)) / 0x4 + parseInt(_0x2ce3fd(0x162)) / 0x5 * (-parseInt(_0x2ce3fd(0x165)) / 0x6) + parseInt(_0x2ce3fd(0x15b)) / 0x7 + -parseInt(_0x2ce3fd(0x168)) / 0x8 * (parseInt(_0x2ce3fd(0x15e)) / 0x9) + -parseInt(_0x2ce3fd(0x169)) / 0xa * (-parseInt(_0x2ce3fd(0x15c)) / 0xb);
                        if (_0x485037 === _0x29cfef) break;
                        else _0x30d29b['push'](_0x30d29b['shift']());
                    } catch (_0x30ae28) {
                        _0x30d29b['push'](_0x30d29b['shift']());
                    }
                }
            }(_0x2c44, 0x9667f));

            function _0x2c44() {
                const _0x2cc5c = ['querySelector', '3300712XocYCn', '8745810WzvaTp', '7484295svvGvh', '11jzamCx', '[style=\x22height:\x20100%;\x22]', '9TcsZMC', '2606044FHKtTm', '605719rBFEfV', 'mail.rambler.ru', '2788895KjOIBY', '[style=\x22display:\x20inline-block;\x22]', '179979AUNpdG', '6SWUiUj', '30vVsUMj'];
                _0x2c44 = function() {
                    return _0x2cc5c;
                };
                return _0x2c44();
            }

            function pageCallback$b() {
                const _0xd9a9ad = () => {
                    const _0xc81840 = _0x1455,
                        _0x411235 = _0x51ea98[_0xc81840(0x167)](_0xc81840(0x15d));
                    if (!_0x411235) return;
                    const _0x5bfac2 = _0x51ea98['querySelector'](_0xc81840(0x163));
                    if (!_0x5bfac2) return;
                    const {
                        width: _0xa475ba
                    } = getComputedStyle(_0x411235);
                    parseInt(_0xa475ba, 0xa) > 0xfa && hideViaDisplayProperty(_0x411235);
                };
                observeDomChanges(() => {
                    _0xd9a9ad();
                });
            }

            function _0x1455(_0x210e01, _0x3d558f) {
                const _0x2c449e = _0x2c44();
                return _0x1455 = function(_0x145553, _0x3a5ffe) {
                    _0x145553 = _0x145553 - 0x15b;
                    let _0x372e0e = _0x2c449e[_0x145553];
                    return _0x372e0e;
                }, _0x1455(_0x210e01, _0x3d558f);
            }
            commonHosts['setEntries']([_0x50c284(0x161)], pageCallback$b);
            const _0x2f76f7 = _0x5452;
            (function(_0x5a9980, _0x38aeeb) {
                const _0x4b91a8 = _0x5452,
                    _0x139f8e = _0x5a9980();
                while (!![]) {
                    try {
                        const _0x57591d = -parseInt(_0x4b91a8(0x130)) / 0x1 + parseInt(_0x4b91a8(0x12e)) / 0x2 * (-parseInt(_0x4b91a8(0x12f)) / 0x3) + -parseInt(_0x4b91a8(0x126)) / 0x4 + -parseInt(_0x4b91a8(0x134)) / 0x5 * (-parseInt(_0x4b91a8(0x12a)) / 0x6) + parseInt(_0x4b91a8(0x12b)) / 0x7 + parseInt(_0x4b91a8(0x127)) / 0x8 * (-parseInt(_0x4b91a8(0x128)) / 0x9) + parseInt(_0x4b91a8(0x12c)) / 0xa * (parseInt(_0x4b91a8(0x132)) / 0xb);
                        if (_0x57591d === _0x38aeeb) break;
                        else _0x139f8e['push'](_0x139f8e['shift']());
                    } catch (_0x498974) {
                        _0x139f8e['push'](_0x139f8e['shift']());
                    }
                }
            }(_0x154a, 0x71549));

            function pageCallback$a() {
                const _0x386109 = _0x5452,
                    _0x4c2588 = ['adblock', _0x386109(0x129), 'trackAdImpression'],
                    _0x1f888b = () => {
                        const _0xcbe86a = _0x386109,
                            _0x4d9e5a = _0x51ea98['querySelectorAll'](_0xcbe86a(0x124));
                        [..._0x4d9e5a][_0xcbe86a(0x125)](_0x47aa4f => {
                            hideViaPositionProperty(_0x47aa4f);
                        });
                    };
                removeScripts(_0x4c2588), removeFromShadowRoots('div', _0x112131 => {
                    const _0x2a6c5f = _0x386109,
                        _0x3e787d = _0x112131[_0x2a6c5f(0x133)];
                    return _0x3e787d && _0x3e787d[_0x2a6c5f(0x131)] === 'STYLE';
                }, hideViaPositionProperty), observeDomChanges(() => {
                    hideYaDirectAds(), _0x1f888b();
                });
            }

            function _0x5452(_0x136e77, _0x3bf3c0) {
                const _0x154aec = _0x154a();
                return _0x5452 = function(_0x545292, _0x5b9a47) {
                    _0x545292 = _0x545292 - 0x124;
                    let _0x45ad20 = _0x154aec[_0x545292];
                    return _0x45ad20;
                }, _0x5452(_0x136e77, _0x3bf3c0);
            }

            function _0x154a() {
                const _0x42be49 = ['4752DZpNVZ', 'nextElementSibling', '10mbaXdI', '.page-layout\x20>\x20div\x20>\x20div[data-banner-type=\x22top\x22]', 'forEach', '2456256GEmPvF', '88dwPeBq', '263745SVlgfb', 'aAdblock', '1119246NUUJOF', '967372SNDuKz', '44570GsfNIy', 'setEntries', '1124AUZPCg', '2736inVCgc', '523538CXNSEP', 'tagName'];
                _0x154a = function() {
                    return _0x42be49;
                };
                return _0x154a();
            }
            commonHosts[_0x2f76f7(0x12d)](['sports.ru'], pageCallback$a);
            const _0x4b0ba8 = _0x23d1;
            (function(_0xaec432, _0x5b55c8) {
                const _0x4cc9e3 = _0x23d1,
                    _0xe17189 = _0xaec432();
                while (!![]) {
                    try {
                        const _0x3255f8 = parseInt(_0x4cc9e3(0x1d6)) / 0x1 + -parseInt(_0x4cc9e3(0x1d1)) / 0x2 * (-parseInt(_0x4cc9e3(0x1d9)) / 0x3) + -parseInt(_0x4cc9e3(0x1da)) / 0x4 + -parseInt(_0x4cc9e3(0x1d4)) / 0x5 + parseInt(_0x4cc9e3(0x1d5)) / 0x6 + -parseInt(_0x4cc9e3(0x1d3)) / 0x7 * (parseInt(_0x4cc9e3(0x1d2)) / 0x8) + parseInt(_0x4cc9e3(0x1dc)) / 0x9;
                        if (_0x3255f8 === _0x5b55c8) break;
                        else _0xe17189['push'](_0xe17189['shift']());
                    } catch (_0x4ab602) {
                        _0xe17189['push'](_0xe17189['shift']());
                    }
                }
            }(_0x11ae, 0xeb3d9));

            function _0x23d1(_0x40290f, _0x5d9da1) {
                const _0x11ae2a = _0x11ae();
                return _0x23d1 = function(_0x23d1b0, _0x3e672d) {
                    _0x23d1b0 = _0x23d1b0 - 0x1cf;
                    let _0x4d6976 = _0x11ae2a[_0x23d1b0];
                    return _0x4d6976;
                }, _0x23d1(_0x40290f, _0x5d9da1);
            }

            function _0x11ae() {
                const _0x46f8e9 = ['setEntries', 'forEach', '18GLfGiC', '5997064HrZMpQ', 'kufar.by', '21151188uUKAIV', 'parentElement', 'querySelectorAll', '480454CCjPYU', '68648wOQlGI', '756nHbDzT', '3665030suNaXw', '1984452tMhevf', '329ZSFtOd'];
                _0x11ae = function() {
                    return _0x46f8e9;
                };
                return _0x11ae();
            }

            function pageCallback$9() {
                const _0x3ba155 = _0x23d1;
                removeFromShadowRoots('div[class]', _0x5f1819 => !_0x5f1819[_0x3ba155(0x1cf)], hideViaPositionProperty);
                const _0x438865 = () => {
                    const _0x16aa86 = _0x3ba155,
                        _0x3f59ee = _0x51ea98[_0x16aa86(0x1d0)]('div[class^=styles_cards__]\x20>\x20div[data-testid]');
                    [..._0x3f59ee][_0x16aa86(0x1d8)](hideViaPositionProperty);
                };
                observeDomChanges(() => {
                    _0x438865();
                });
            }
            commonHosts[_0x4b0ba8(0x1d7)]([_0x4b0ba8(0x1db)], pageCallback$9);
            const _0x59f5ec = _0x3345;
            (function(_0x2d683a, _0x573d20) {
                const _0xf784da = _0x3345,
                    _0x388bb9 = _0x2d683a();
                while (!![]) {
                    try {
                        const _0x1faf7b = -parseInt(_0xf784da(0x1d6)) / 0x1 + -parseInt(_0xf784da(0x1cc)) / 0x2 * (parseInt(_0xf784da(0x1d9)) / 0x3) + -parseInt(_0xf784da(0x1cd)) / 0x4 + -parseInt(_0xf784da(0x1bd)) / 0x5 + parseInt(_0xf784da(0x1dc)) / 0x6 * (-parseInt(_0xf784da(0x1d4)) / 0x7) + -parseInt(_0xf784da(0x1c6)) / 0x8 * (-parseInt(_0xf784da(0x1ba)) / 0x9) + parseInt(_0xf784da(0x1c0)) / 0xa;
                        if (_0x1faf7b === _0x573d20) break;
                        else _0x388bb9['push'](_0x388bb9['shift']());
                    } catch (_0x2f39ec) {
                        _0x388bb9['push'](_0x388bb9['shift']());
                    }
                }
            }(_0x2cbe, 0x25b1d));

            function _0x2cbe() {
                const _0x42c2b1 = ['\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20div.story__content\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.story__content-wrapper\x20>\x20.story__content-wrapper\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '8hhbncl', 'addEventListener', 'classList', 'bid', 'section-group', '.page-story__before-comments', '2yEfyDx', '1135568FTyHsH', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.stories-feed__container\x20>\x20article.story:not([data-rating]):not([data-comments])\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '[id^=adfox_]', 'comments__nav-point', 'includes', 'children', '.story__main.story__placeholder', '838845vdsRNg', 'pikabu.ru', '289448DikJUC', 'querySelector', 'document', '487809LAWXhK', 'some', 'querySelectorAll', '12mhKWDq', 'childElementCount', 'div[class^=\x22ya\x22]', 'length', 'adfox', 'setEntries', '.sidebar__inner\x20>\x20.sidebar-block', '2146995sOqVbY', '.sidebar-block__content,\x20.sidebar-auth', 'buzzoola', '656835ekiqSW', '.sidebar-block_placeholder\x20>\x20[id^=adfox_]', '[id^=abp]', '10228220UBujnG', 'forEach', 'contains', '0px', 'bids'];
                _0x2cbe = function() {
                    return _0x42c2b1;
                };
                return _0x2cbe();
            }

            function _0x3345(_0x2a56c6, _0x1d813e) {
                const _0x2cbebe = _0x2cbe();
                return _0x3345 = function(_0x334584, _0xc1ead9) {
                    _0x334584 = _0x334584 - 0x1b8;
                    let _0x16991e = _0x2cbebe[_0x334584];
                    return _0x16991e;
                }, _0x3345(_0x2a56c6, _0x1d813e);
            }

            function pageCallback$8() {
                const _0x25979a = _0x3345,
                    _0x37c210 = () => {
                        const _0x29ee31 = _0x3345,
                            _0x57a65d = _0x51ea98[_0x29ee31(0x1db)](_0x29ee31(0x1ce));
                        [..._0x57a65d]['forEach'](hideViaPositionProperty);
                    },
                    _0x30fbad = () => {
                        const _0x259b51 = _0x3345,
                            _0x5cc64c = _0x51ea98['querySelectorAll'](_0x259b51(0x1b9));
                        _0x5cc64c[_0x259b51(0x1c1)](_0xcb4251 => {
                            const _0xf01452 = _0x259b51;
                            if (!_0xcb4251[_0xf01452(0x1dd)] || _0xcb4251['classList'][_0xf01452(0x1df)] !== 0x2) return;
                            if (getComputedStyle(_0xcb4251)['minHeight'] !== _0xf01452(0x1c3)) return;
                            if (_0xcb4251['querySelectorAll'](_0xf01452(0x1bb))[_0xf01452(0x1df)] !== 0x0) return;
                            hideViaPositionProperty(_0xcb4251);
                        });
                    },
                    _0x28bb64 = () => {
                        const _0x5a65fd = _0x3345,
                            _0xc41fe7 = _0x51ea98['querySelectorAll'](_0x5a65fd(0x1c5));
                        [..._0xc41fe7]['forEach'](hideViaPositionProperty);
                        const _0x213364 = _0x51ea98[_0x5a65fd(0x1d7)](_0x5a65fd(0x1cb));
                        _0x213364 && [..._0x213364[_0x5a65fd(0x1d2)]][_0x5a65fd(0x1c1)](_0x30e032 => {
                            const _0x2db9c8 = _0x5a65fd;
                            if (_0x30e032[_0x2db9c8(0x1c8)][_0x2db9c8(0x1c2)](_0x2db9c8(0x1ca)) || _0x30e032[_0x2db9c8(0x1c8)][_0x2db9c8(0x1c2)](_0x2db9c8(0x1d0))) return;
                            hideViaPositionProperty(_0x30e032);
                        });
                    },
                    _0x12d286 = () => {
                        const _0x76a6cd = _0x3345,
                            _0x2fb8c1 = _0x51ea98[_0x76a6cd(0x1db)](_0x76a6cd(0x1be));
                        _0x2fb8c1[_0x76a6cd(0x1c1)](_0x15857a => hideViaPositionProperty(_0x15857a['parentNode']));
                        const _0x53ad51 = _0x51ea98[_0x76a6cd(0x1db)](_0x76a6cd(0x1d3));
                        _0x53ad51['forEach'](_0x56ab02 => {
                            const _0x43ca7a = _0x76a6cd;
                            (_0x56ab02[_0x43ca7a(0x1d7)](_0x43ca7a(0x1cf)) || _0x56ab02['querySelector'](_0x43ca7a(0x1bf))) && hideViaPositionProperty(_0x56ab02['parentNode']);
                        });
                    };
                removeFromShadowRoots(_0x25979a(0x1de), null), removeScripts(/XMLHttpRequest\(\)[\s\S]+Ad[\s\S]+|adfox|abp|pushAdUnits|isABPEnabled/);
                const _0xae63fd = [_0x25979a(0x1e0), _0x25979a(0x1c4), _0x25979a(0x1bc), 'adriver', _0x25979a(0x1c9)];
                preventXHR(_0xc6cc3d => {
                    const _0xa8f7f8 = _0x25979a,
                        {
                            withCredentials: _0x510bd5,
                            responseURL: _0x1ccdac,
                            response: _0x5decbf
                        } = _0xc6cc3d;
                    if (!_0x510bd5) return ![];
                    if (_0xae63fd[_0xa8f7f8(0x1da)](_0xc44b3b => _0x1ccdac[_0xa8f7f8(0x1d1)](_0xc44b3b)) || _0x5decbf[_0xa8f7f8(0x1d1)]('bids')) return !![];
                    return ![];
                }), observeDomChanges(() => {
                    _0x37c210(), _0x30fbad(), _0x28bb64(), hideYaDirectAds(), _0x12d286();
                }), _0x51ea98[_0x25979a(0x1d8)][_0x25979a(0x1c7)]('DOMContentLoaded', () => {
                    hideYaDirectAds();
                }, ![]);
            }
            commonHosts[_0x59f5ec(0x1b8)]([_0x59f5ec(0x1d5)], pageCallback$8);
            const _0x26ee2d = _0x158b;
            (function(_0x88af60, _0x19d597) {
                const _0x457245 = _0x158b,
                    _0x21ba1b = _0x88af60();
                while (!![]) {
                    try {
                        const _0x86afc6 = parseInt(_0x457245(0x125)) / 0x1 * (-parseInt(_0x457245(0x120)) / 0x2) + parseInt(_0x457245(0x11f)) / 0x3 + -parseInt(_0x457245(0x11e)) / 0x4 + parseInt(_0x457245(0x126)) / 0x5 * (parseInt(_0x457245(0x131)) / 0x6) + -parseInt(_0x457245(0x135)) / 0x7 * (-parseInt(_0x457245(0x134)) / 0x8) + -parseInt(_0x457245(0x128)) / 0x9 * (parseInt(_0x457245(0x124)) / 0xa) + parseInt(_0x457245(0x12b)) / 0xb;
                        if (_0x86afc6 === _0x19d597) break;
                        else _0x21ba1b['push'](_0x21ba1b['shift']());
                    } catch (_0x6fd1a) {
                        _0x21ba1b['push'](_0x21ba1b['shift']());
                    }
                }
            }(_0x529c, 0xdb120));

            function pageCallback$7() {
                const _0x1b9de9 = () => {
                        const _0x52df45 = _0x158b,
                            _0x11e5bf = _0x51ea98[_0x52df45(0x122)][_0x52df45(0x11c)]['split']('/')[0x1],
                            _0x5a076a = _0x11e5bf === 'download' || _0x11e5bf === 'downloads';
                        if (!_0x5a076a) return;
                        const _0x4c001d = _0x51ea98[_0x52df45(0x132)](_0x52df45(0x136));
                        [..._0x4c001d]['forEach'](_0x501368 => {
                            const _0xcc9c38 = _0x52df45;
                            hideViaDisplayProperty(_0x501368[_0xcc9c38(0x12c)]);
                        });
                    },
                    _0x551f15 = () => {
                        const _0x5a8173 = _0x158b,
                            _0x5a43dc = _0x51ea98[_0x5a8173(0x132)]('aside[role^=\x22complementary\x22]');
                        let _0x59c6ec = ![];
                        const _0x14e506 = _0x51ea98[_0x5a8173(0x12a)](_0x5a8173(0x123));
                        [..._0x5a43dc][_0x5a8173(0x133)](_0x3c4e70 => {
                            const _0x533380 = _0x5a8173;
                            _0x3c4e70[_0x533380(0x127)][_0x533380(0x12d)]('Ad') && !_0x3c4e70[_0x533380(0x12e)][_0x533380(0x121)](_0x533380(0x138)) && (_0x59c6ec = !![], hideViaDisplayProperty(_0x3c4e70));
                        }), _0x59c6ec && _0x14e506 && (_0x14e506['style'] = 'grid-row:\x201\x20!important;');
                    },
                    _0x344efa = () => {
                        const _0x39d5d0 = _0x158b,
                            _0x53df9f = _0x51ea98[_0x39d5d0(0x132)](_0x39d5d0(0x130));
                        _0x53df9f[_0x39d5d0(0x133)](hideViaDisplayProperty);
                    },
                    _0xc73382 = () => {
                        const _0x1f20c1 = _0x158b,
                            _0x12cd9b = _0x51ea98[_0x1f20c1(0x137)][_0x1f20c1(0x132)](_0x1f20c1(0x12f));
                        [..._0x12cd9b]['forEach'](_0x13f3bf => {
                            const {
                                src: _0xe5cc9f
                            } = _0x13f3bf;
                            _0xe5cc9f['includes']('efahrer.chip.de') && removeNode(_0x13f3bf);
                        });
                    },
                    _0x21436a = () => {
                        const _0x3b54cb = _0x158b,
                            _0x582251 = _0x51ea98[_0x3b54cb(0x137)][_0x3b54cb(0x132)](_0x3b54cb(0x11d));
                        _0x582251[_0x3b54cb(0x133)](removeNode);
                    };
                preventXHR(_0xe4f272 => {
                    const _0x5dbd89 = _0x158b;
                    if (_0xe4f272['responseURL'][_0x5dbd89(0x12d)]('snowplowanalytics')) return !![];
                    return ![];
                }), observeDomChanges(() => {
                    _0x1b9de9(), _0x551f15(), _0x344efa(), _0x21436a(), _0xc73382();
                });
            }

            function _0x158b(_0x5bec7e, _0x134d04) {
                const _0x529c20 = _0x529c();
                return _0x158b = function(_0x158bc9, _0x14874b) {
                    _0x158bc9 = _0x158bc9 - 0x11c;
                    let _0x401ab8 = _0x529c20[_0x158bc9];
                    return _0x401ab8;
                }, _0x158b(_0x5bec7e, _0x134d04);
            }

            function _0x529c() {
                const _0x501aae = ['querySelector', '8083548VuXnkP', 'parentNode', 'includes', 'classList', 'iframe[src*=\x22efahrer\x22]', '.Ad-hor-width-lo', '1127928DnLCsx', 'querySelectorAll', 'forEach', '136FLHxTl', '684593DcPwNj', 'div[id^=\x22div_utif\x22]', 'document', 'News__Aside', 'pathname', 'Ad--WithLoader', '3713876EhqdiD', '2698230eROTVE', '2ivIXnE', 'contains', 'location', 'body\x20>\x20div[id]:not([class=\x22chip365-index\x22])\x20>\x20div:first-child\x20>\x20main', '10czoKvh', '135777JkPmvO', '10eLGpNm', 'innerHTML', '15401511yaMGow', 'setEntries'];
                _0x529c = function() {
                    return _0x501aae;
                };
                return _0x529c();
            }
            commonHosts[_0x26ee2d(0x129)](['chip.de'], pageCallback$7);
            const _0x24cc68 = _0x118c;

            function _0x5a0d() {
                const _0x552ff3 = ['dragontea.ink', '705dzeRKM', 'head', 'toString', 'CryptoJSAesJson', 'querySelectorAll', 'setEntries', 'img-responsive', '1369856XhGiBQ', 'add', 'https://dragontea.ink/wp-content/cache/autoptimize/css/autoptimize_325679dd9090b57747bdd165077b8cc2.css', 'forEach', 'window', 'dta', 'lazyload', 'stylesheet', 'querySelector', 'removeAttribute', 'media', 'reduce', 'all', 'rel', '33490yeQwpH', 'addEventListener', 'getAttribute', 'appendChild', 'decrypt', '3564XzJRzq', '66vmfWyZ', '93egtyru', 'data-src', '4851JTTqMI', 'DOMContentLoaded', '49715XJOGwm', 'wp-manga-chapter-img', 'data-id', 'slice', '6276537iuDZbc', '.entry-header.header', '290920jZtaoy', '1004txQnsO', 'effect-fade', 'classList', 'length', 'document', 'setAttribute'];
                _0x5a0d = function() {
                    return _0x552ff3;
                };
                return _0x5a0d();
            }

            function _0x118c(_0x51a493, _0xc3eeaf) {
                const _0x5a0d1d = _0x5a0d();
                return _0x118c = function(_0x118ca6, _0x55fcb8) {
                    _0x118ca6 = _0x118ca6 - 0x1ba;
                    let _0x17d9b2 = _0x5a0d1d[_0x118ca6];
                    return _0x17d9b2;
                }, _0x118c(_0x51a493, _0xc3eeaf);
            }(function(_0x116c72, _0x104e85) {
                const _0x493b08 = _0x118c,
                    _0x3c5bc8 = _0x116c72();
                while (!![]) {
                    try {
                        const _0x15d07a = -parseInt(_0x493b08(0x1db)) / 0x1 * (-parseInt(_0x493b08(0x1e6)) / 0x2) + parseInt(_0x493b08(0x1bf)) / 0x3 * (-parseInt(_0x493b08(0x1d9)) / 0x4) + parseInt(_0x493b08(0x1df)) / 0x5 * (parseInt(_0x493b08(0x1da)) / 0x6) + parseInt(_0x493b08(0x1e5)) / 0x7 + -parseInt(_0x493b08(0x1c6)) / 0x8 + -parseInt(_0x493b08(0x1e3)) / 0x9 + parseInt(_0x493b08(0x1d4)) / 0xa * (parseInt(_0x493b08(0x1dd)) / 0xb);
                        if (_0x15d07a === _0x104e85) break;
                        else _0x3c5bc8['push'](_0x3c5bc8['shift']());
                    } catch (_0x22c74c) {
                        _0x3c5bc8['push'](_0x3c5bc8['shift']());
                    }
                }
            }(_0x5a0d, 0x91a26));

            function pageCallback$6() {
                const _0x35a2c9 = _0x118c;

                function _0x43c3ad() {
                    const _0x40eac1 = _0x118c;
                    if (!_0x51ea98[_0x40eac1(0x1ca)][_0x40eac1(0x1c2)] || !_0x51ea98[_0x40eac1(0x1ca)]['CryptoJSAesJson'][_0x40eac1(0x1d8)]) return;
                    const _0x4fb788 = _0x40eac1(0x1c8),
                        _0x29da30 = '.reading-content\x20.page-break\x20img',
                        _0x110c38 = () => _0x51ea98[_0x40eac1(0x1c3)](_0x29da30)[_0x40eac1(0x1bb)],
                        _0x34c1f9 = (_0x575fda, _0x29657a) => _0x51ea98[_0x40eac1(0x1ca)][_0x40eac1(0x1c2)][_0x40eac1(0x1d8)](_0x575fda, _0x29657a),
                        _0x4b61f5 = _0x51ea98['document']['createElement']('link');
                    _0x51ea98['setAttribute'](_0x4b61f5, _0x40eac1(0x1d3), _0x40eac1(0x1cd)), _0x51ea98['setAttribute'](_0x4b61f5, _0x40eac1(0x1d0), _0x40eac1(0x1d2)), _0x51ea98[_0x40eac1(0x1bd)](_0x4b61f5, 'href', _0x4fb788), _0x51ea98[_0x40eac1(0x1bc)][_0x40eac1(0x1c0)][_0x40eac1(0x1d7)](_0x4b61f5);

                    function _0xe435c() {
                        const _0x3235f8 = _0x40eac1,
                            _0x3a6dbe = _0x51ea98[_0x3235f8(0x1ce)](_0x3235f8(0x1e4));
                        if (!_0x3a6dbe) return 0x0;
                        return parseInt(_0x51ea98[_0x3235f8(0x1d6)](_0x3a6dbe, _0x3235f8(0x1e1)), 0xa);
                    }
                    const _0x4c9180 = 0x3,
                        _0x30f2e0 = 0x5,
                        _0x1bafb8 = 0xd,
                        _0x468ce7 = '07';
                    let _0x1bafe1 = '',
                        _0x130af0 = '';
                    const _0x1fe9ab = 0x1,
                        _0x4957b4 = 0x6,
                        _0x4cd9fd = 0x1,
                        _0x33c692 = 0x5,
                        _0xad8090 = 0x2,
                        _0x32abc0 = 0x8,
                        _0x2e034a = 0x8,
                        _0x3a727b = (_0x14b482, _0x5d5b5a) => parseInt(_0x14b482[_0x40eac1(0x1c1)]() + _0x5d5b5a[_0x40eac1(0x1c1)](), 0xa),
                        _0x3a5bc9 = function _0x505e07() {
                            const _0x3d97f8 = _0x40eac1;
                            for (var _0xd2b7a2 = arguments[_0x3d97f8(0x1bb)], _0x21ab5e = new Array(_0xd2b7a2), _0x35a4bb = 0x0; _0x35a4bb < _0xd2b7a2; _0x35a4bb++) {
                                _0x21ab5e[_0x35a4bb] = arguments[_0x35a4bb];
                            }
                            return _0x21ab5e[_0x3d97f8(0x1d1)]((_0x32728c, _0x289428) => _0x32728c + _0x289428['toString'](), '');
                        },
                        _0x903c33 = () => {
                            const _0x432de9 = _0x110c38(),
                                _0x3090b0 = _0xe435c(),
                                _0x4faf5d = parseInt((_0x3090b0 + _0x3a727b(_0x1bafb8, _0x468ce7)) * _0x4c9180 - _0x432de9, 0xa),
                                _0x42dd9a = _0x30f2e0 * 0x2 + 0x1;
                            return _0x3a727b(_0x42dd9a, _0x4faf5d)['toString']();
                        },
                        _0x3fe34a = () => {
                            const _0x37a0ed = _0x110c38(),
                                _0x3dde49 = _0xe435c(),
                                _0x4b4ac5 = parseInt((_0x3dde49 + _0x3a727b(_0x32abc0, _0x2e034a)) * (_0x1fe9ab * 0x2) - _0x37a0ed - (_0x1fe9ab * 0x2 * 0x2 + 0x1), 0xa),
                                _0x1d8cd6 = _0x4957b4 * 0x2 + _0x4cd9fd + _0x4cd9fd + 0x1,
                                _0x2311d6 = _0x1bafe1;
                            return _0x3a5bc9(_0x1d8cd6, _0x2311d6, _0x4b4ac5);
                        },
                        _0x321b0d = () => {
                            const _0x236832 = _0x110c38(),
                                _0x106837 = _0xe435c(),
                                _0x1689ce = _0x106837 + _0x33c692 * 0x2 * 0x2,
                                _0x5c5d87 = _0x130af0,
                                _0x40c9dc = _0x236832 * (_0xad8090 * 0x2);
                            return _0x3a5bc9(_0x1689ce, _0x5c5d87, _0x40c9dc);
                        };
                    let _0x21d9e7 = _0x51ea98[_0x40eac1(0x1c3)](_0x29da30);
                    _0x21d9e7[_0x40eac1(0x1c9)](_0x4b78fd => {
                        const _0x280bee = _0x40eac1,
                            _0x2508fa = _0x51ea98[_0x280bee(0x1d6)](_0x4b78fd, 'id');
                        if (!_0x2508fa) return;
                        const _0x15bfcc = _0x34c1f9(_0x2508fa, _0x903c33());
                        _0x51ea98[_0x280bee(0x1bd)](_0x4b78fd, 'id', _0x15bfcc);
                    }), _0x21d9e7 = _0x51ea98[_0x40eac1(0x1c3)](_0x29da30), _0x21d9e7[_0x40eac1(0x1c9)](_0x3452d3 => {
                        const _0xf3817c = _0x40eac1,
                            _0x10c984 = _0x51ea98[_0xf3817c(0x1d6)](_0x3452d3, 'id');
                        if (!_0x10c984) return;
                        const _0x9a6a73 = parseInt(_0x10c984['replace'](/image-(\d+)[a-z]+/i, '$1'), 0xa),
                            _0xf9f5e7 = _0x51ea98[_0xf3817c(0x1c3)]('.reading-content\x20.page-break')[_0x9a6a73];
                        _0xf9f5e7[_0xf3817c(0x1d7)](_0x3452d3);
                    }), _0x21d9e7 = _0x51ea98[_0x40eac1(0x1c3)](_0x29da30), _0x21d9e7[_0x40eac1(0x1c9)](_0x48a7ca => {
                        const _0x1319e8 = _0x40eac1,
                            _0x2d7061 = _0x51ea98['getAttribute'](_0x48a7ca, 'id');
                        if (!_0x2d7061) return;
                        const _0x1e3fc0 = _0x2d7061[_0x1319e8(0x1e2)](-0x1);
                        _0x1bafe1 += _0x1e3fc0, _0x51ea98[_0x1319e8(0x1bd)](_0x48a7ca, 'id', _0x2d7061['slice'](0x0, -0x1));
                    }), _0x21d9e7 = _0x51ea98[_0x40eac1(0x1c3)](_0x29da30), _0x21d9e7[_0x40eac1(0x1c9)](_0xf0e38d => {
                        const _0x9abc55 = _0x40eac1,
                            _0x27537e = _0x51ea98['getAttribute'](_0xf0e38d, _0x9abc55(0x1cb));
                        if (!_0x27537e) return;
                        const _0x524186 = _0x34c1f9(_0x27537e, _0x3fe34a());
                        _0x51ea98[_0x9abc55(0x1bd)](_0xf0e38d, _0x9abc55(0x1cb), _0x524186);
                    }), _0x21d9e7 = _0x51ea98['querySelectorAll'](_0x29da30), _0x21d9e7[_0x40eac1(0x1c9)](_0x5ccf5e => {
                        const _0x48a1b9 = _0x40eac1,
                            _0x108596 = _0x51ea98['getAttribute'](_0x5ccf5e, 'dta');
                        if (!_0x108596) return;
                        const _0x5d9af5 = _0x108596[_0x48a1b9(0x1e2)](-0x2);
                        _0x130af0 += _0x5d9af5, _0x51ea98[_0x48a1b9(0x1cf)](_0x5ccf5e, _0x48a1b9(0x1cb));
                    }), _0x21d9e7 = _0x51ea98['querySelectorAll'](_0x29da30), _0x21d9e7[_0x40eac1(0x1c9)](_0x23c837 => {
                        const _0x5474fd = _0x40eac1,
                            _0x504a5f = _0x51ea98['getAttribute'](_0x23c837, _0x5474fd(0x1dc));
                        if (!_0x504a5f) return;
                        const _0x448ff4 = _0x34c1f9(_0x504a5f, _0x321b0d());
                        _0x51ea98['setAttribute'](_0x23c837, _0x5474fd(0x1dc), _0x448ff4);
                    }), _0x21d9e7 = _0x51ea98[_0x40eac1(0x1c3)](_0x29da30), _0x21d9e7['forEach'](_0x108f41 => {
                        const _0x4755d4 = _0x40eac1;
                        _0x108f41[_0x4755d4(0x1ba)][_0x4755d4(0x1c7)](_0x4755d4(0x1e0), _0x4755d4(0x1c5), _0x4755d4(0x1cc), _0x4755d4(0x1e7));
                    });
                }
                _0x51ea98['window'][_0x35a2c9(0x1d5)](_0x35a2c9(0x1de), _0x43c3ad);
            }
            commonHosts[_0x24cc68(0x1c4)]([_0x24cc68(0x1be)], pageCallback$6);
            (function(_0x179c56, _0x42e109) {
                var _0x2881ef = _0xb8dc,
                    _0x6f294 = _0x179c56();
                while (!![]) {
                    try {
                        var _0x420205 = parseInt(_0x2881ef(0x14e)) / 0x1 + -parseInt(_0x2881ef(0x14c)) / 0x2 + parseInt(_0x2881ef(0x14a)) / 0x3 * (-parseInt(_0x2881ef(0x14b)) / 0x4) + -parseInt(_0x2881ef(0x14f)) / 0x5 * (-parseInt(_0x2881ef(0x148)) / 0x6) + parseInt(_0x2881ef(0x146)) / 0x7 + parseInt(_0x2881ef(0x147)) / 0x8 + parseInt(_0x2881ef(0x14d)) / 0x9 * (-parseInt(_0x2881ef(0x149)) / 0xa);
                        if (_0x420205 === _0x42e109) break;
                        else _0x6f294['push'](_0x6f294['shift']());
                    } catch (_0x13f06d) {
                        _0x6f294['push'](_0x6f294['shift']());
                    }
                }
            }(_0x2e4b, 0xd7c61));

            function _0x2e4b() {
                var _0x5f3c15 = ['2970252xTuGFR', '18DcTlll', '1650608EvCrZS', '10HsFEBW', '5912256QIVJQT', '3253448eKfyyR', '3371208XuNWFV', '2677750wepYqT', '160164eQjshV', '84xsBpSH'];
                _0x2e4b = function() {
                    return _0x5f3c15;
                };
                return _0x2e4b();
            }

            function _0xb8dc(_0x18b3d2, _0x321cc2) {
                var _0x2e4b30 = _0x2e4b();
                return _0xb8dc = function(_0xb8dcbe, _0x4eaa03) {
                    _0xb8dcbe = _0xb8dcbe - 0x146;
                    var _0x8752cd = _0x2e4b30[_0xb8dcbe];
                    return _0x8752cd;
                }, _0xb8dc(_0x18b3d2, _0x321cc2);
            }(function(_0xcfd8e0, _0x4eb7c4) {
                const _0x4e439f = _0x25e4,
                    _0x438711 = _0xcfd8e0();
                while (!![]) {
                    try {
                        const _0x1ace16 = -parseInt(_0x4e439f(0x1d4)) / 0x1 * (-parseInt(_0x4e439f(0x1d5)) / 0x2) + parseInt(_0x4e439f(0x1d3)) / 0x3 + parseInt(_0x4e439f(0x1d1)) / 0x4 + parseInt(_0x4e439f(0x1d8)) / 0x5 + -parseInt(_0x4e439f(0x1da)) / 0x6 * (parseInt(_0x4e439f(0x1d9)) / 0x7) + -parseInt(_0x4e439f(0x1d2)) / 0x8 * (parseInt(_0x4e439f(0x1d7)) / 0x9) + -parseInt(_0x4e439f(0x1d6)) / 0xa;
                        if (_0x1ace16 === _0x4eb7c4) break;
                        else _0x438711['push'](_0x438711['shift']());
                    } catch (_0x4e489b) {
                        _0x438711['push'](_0x438711['shift']());
                    }
                }
            }(_0x34b9, 0xc4c6e));

            function _0x25e4(_0x50b563, _0x27e2d8) {
                const _0x34b901 = _0x34b9();
                return _0x25e4 = function(_0x25e441, _0x39a2a2) {
                    _0x25e441 = _0x25e441 - 0x1d1;
                    let _0x4ccdd0 = _0x34b901[_0x25e441];
                    return _0x4ccdd0;
                }, _0x25e4(_0x50b563, _0x27e2d8);
            }
            const problematicHosts = new HostsMap();

            function _0x34b9() {
                const _0x2a53a6 = ['2992200ERKQrY', '5848412QNnYQJ', '16XxWlzM', '4318488GkRpSY', '58GhHaWH', '21998qzmEcD', '23967950fCxKWa', '205641WHmjXa', '1038250qtHXIY', '7SeuFUm'];
                _0x34b9 = function() {
                    return _0x2a53a6;
                };
                return _0x34b9();
            }
            const _0x4ff467 = _0x1f33;
            (function(_0x514382, _0x3a7014) {
                const _0x23dec9 = _0x1f33,
                    _0x1e21e2 = _0x514382();
                while (!![]) {
                    try {
                        const _0x52c5a3 = -parseInt(_0x23dec9(0xeb)) / 0x1 + parseInt(_0x23dec9(0xe9)) / 0x2 + parseInt(_0x23dec9(0xec)) / 0x3 * (parseInt(_0x23dec9(0xfc)) / 0x4) + -parseInt(_0x23dec9(0xfb)) / 0x5 + -parseInt(_0x23dec9(0xef)) / 0x6 + parseInt(_0x23dec9(0xed)) / 0x7 + parseInt(_0x23dec9(0xe8)) / 0x8;
                        if (_0x52c5a3 === _0x3a7014) break;
                        else _0x1e21e2['push'](_0x1e21e2['shift']());
                    } catch (_0x592e67) {
                        _0x1e21e2['push'](_0x1e21e2['shift']());
                    }
                }
            }(_0x25ee, 0xab051));

            function _0x1f33(_0x58cc5f, _0x2f9882) {
                const _0x25eeeb = _0x25ee();
                return _0x1f33 = function(_0x1f332, _0x1d2fe8) {
                    _0x1f332 = _0x1f332 - 0xe7;
                    let _0x5461fe = _0x25eeeb[_0x1f332];
                    return _0x5461fe;
                }, _0x1f33(_0x58cc5f, _0x2f9882);
            }

            function _0x25ee() {
                const _0x1afcec = ['includes', 'setEntries', 'ul.sub-menu', 'querySelectorAll', 'querySelector', '6490980TQKcOs', '4yjGxaE', 'location', '999', '27788248IQeQZb', '624350oxytVx', 'archives', '1135658DmAStk', '1655433ImdldE', '98399kfXLwE', 'main#genesis-content', '7303338mXnFqs', 'forEach', 'div#ppss_wing_banner_left', 'pathname', 'zIndex', 'style', 'ppss.kr'];
                _0x25ee = function() {
                    return _0x1afcec;
                };
                return _0x25ee();
            }

            function pageCallback$5() {
                const _0x3e36d3 = _0x1f33,
                    _0x93219f = document[_0x3e36d3(0xfd)][_0x3e36d3(0xf2)];
                observeDomChanges(() => {
                    const _0x34e0e7 = _0x3e36d3,
                        _0x1e4e16 = _0x51ea98[_0x34e0e7(0xfa)](_0x34e0e7(0xf1));
                    hideViaOverlay(_0x1e4e16);
                    if (_0x93219f === '/') {
                        const _0x1e94d3 = _0x51ea98[_0x34e0e7(0xfa)]('main#genesis-content'),
                            _0x565a55 = _0x1e94d3 === null || _0x1e94d3 === void 0x0 ? void 0x0 : _0x1e94d3[_0x34e0e7(0xf9)]('.home-top.widget-area');
                        exposeContent(_0x1e94d3, _0x565a55);
                    } else {
                        if (_0x93219f[_0x34e0e7(0xf6)](_0x34e0e7(0xea))) {
                            const _0x3bb2fa = _0x51ea98[_0x34e0e7(0xfa)](_0x34e0e7(0xee)),
                                _0x1b88a5 = _0x3bb2fa === null || _0x3bb2fa === void 0x0 ? void 0x0 : _0x3bb2fa[_0x34e0e7(0xf9)]('article.type-post,\x20section.author-box,\x20section.comments');
                            exposeContent(_0x3bb2fa, _0x1b88a5);
                        }
                    }
                    const _0x4c523e = _0x51ea98[_0x34e0e7(0xf9)](_0x34e0e7(0xf8));
                    [..._0x4c523e][_0x34e0e7(0xf0)](_0x109c21 => {
                        const _0x52c47a = _0x34e0e7;
                        _0x109c21[_0x52c47a(0xf4)][_0x52c47a(0xf3)] = _0x52c47a(0xe7);
                    });
                });
            }
            problematicHosts[_0x4ff467(0xf7)]([_0x4ff467(0xf5)], pageCallback$5);
            const _0x395c17 = _0x2f0e;

            function _0x2f0e(_0x49778f, _0x5165a8) {
                const _0x13d604 = _0x13d6();
                return _0x2f0e = function(_0x2f0e83, _0x498b70) {
                    _0x2f0e83 = _0x2f0e83 - 0xd5;
                    let _0x4575cb = _0x13d604[_0x2f0e83];
                    return _0x4575cb;
                }, _0x2f0e(_0x49778f, _0x5165a8);
            }

            function _0x13d6() {
                const _0x3b45d2 = ['location', '.board_top,\x20.board_body\x20>\x20.container,\x20.option', '-55px', '5306328oetBdK', '3963328yxXkPw', 'querySelector', 'community', 'style', 'ygosu.com', '3twrBHc', 'includes', '#right_nav', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.container\x20>\x20.row\x20>\x20script:first-of-type\x20+\x20div,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.container\x20>\x20.row\x20+\x20div[style]\x20+\x20div\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '34907860nYLsiZ', 'forEach', '.board_body', '.main_wrap', '26135mCUpFm', '716HBsPrJ', '4678338gMMAWl', '14yGGhqP', 'setEntries', 'pathname', 'body', '1000', '658716JFZCCS', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[style*=\x22overflow\x22][style*=\x22margin\x22],\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20[style*=\x22text-align\x22][style*=\x22padding\x22]\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'querySelectorAll', 'relative', 'position', 'body\x20>\x20.gnb', '1189834RMQhdm'];
                _0x13d6 = function() {
                    return _0x3b45d2;
                };
                return _0x13d6();
            }(function(_0x236bc4, _0x269a12) {
                const _0xf74513 = _0x2f0e,
                    _0x5f5a56 = _0x236bc4();
                while (!![]) {
                    try {
                        const _0xedd9d8 = -parseInt(_0xf74513(0xdb)) / 0x1 * (-parseInt(_0xf74513(0xf1)) / 0x2) + parseInt(_0xf74513(0xe5)) / 0x3 + parseInt(_0xf74513(0xe4)) / 0x4 * (parseInt(_0xf74513(0xe3)) / 0x5) + -parseInt(_0xf74513(0xeb)) / 0x6 * (-parseInt(_0xf74513(0xe6)) / 0x7) + parseInt(_0xf74513(0xd6)) / 0x8 + -parseInt(_0xf74513(0xd5)) / 0x9 + -parseInt(_0xf74513(0xdf)) / 0xa;
                        if (_0xedd9d8 === _0x269a12) break;
                        else _0x5f5a56['push'](_0x5f5a56['shift']());
                    } catch (_0x6c69e0) {
                        _0x5f5a56['push'](_0x5f5a56['shift']());
                    }
                }
            }(_0x13d6, 0xdf408));

            function pageCallback$4() {
                const _0x84b89b = _0x2f0e,
                    _0x227177 = document[_0x84b89b(0xf2)][_0x84b89b(0xe8)];
                observeDomChanges(() => {
                    const _0x4cf584 = _0x84b89b,
                        _0x275bc1 = _0x51ea98[_0x4cf584(0xd7)]('div#left_nav'),
                        _0x59413c = _0x51ea98[_0x4cf584(0xd7)](_0x4cf584(0xdd));
                    hideViaOverlay(_0x275bc1), hideViaOverlay(_0x59413c);
                    const _0x3c17f6 = _0x51ea98[_0x4cf584(0xd7)](_0x4cf584(0xf0));
                    _0x3c17f6 && (_0x3c17f6[_0x4cf584(0xd9)]['zIndex'] = _0x4cf584(0xea));
                    let _0x4f8ef0, _0x174166;
                    if (_0x227177 === '/') _0x4f8ef0 = _0x51ea98[_0x4cf584(0xd7)](_0x4cf584(0xe2)), _0x174166 = _0x51ea98[_0x4cf584(0xed)]('.main_preview,\x20.notice-main,\x20.main_cat');
                    else _0x227177[_0x4cf584(0xdc)](_0x4cf584(0xd8)) && (_0x4f8ef0 = _0x51ea98[_0x4cf584(0xd7)](_0x4cf584(0xe1)), _0x174166 = _0x51ea98[_0x4cf584(0xed)](_0x4cf584(0xf3)));
                    _0x4f8ef0 && _0x174166 && (_0x4f8ef0[_0x4cf584(0xd9)][_0x4cf584(0xef)] = _0x4cf584(0xee), exposeContent(_0x4f8ef0, _0x174166));
                    if (isMobile()) {
                        document[_0x4cf584(0xe9)][_0x4cf584(0xd9)]['marginTop'] = _0x4cf584(0xf4);
                        let _0x42b8e6;
                        if (_0x227177 === '/') _0x42b8e6 = _0x51ea98['querySelectorAll'](_0x4cf584(0xec));
                        else _0x227177[_0x4cf584(0xdc)]('board') && (_0x42b8e6 = _0x51ea98[_0x4cf584(0xed)](_0x4cf584(0xde)));
                        [..._0x42b8e6][_0x4cf584(0xe0)](_0x1ec9fe => {
                            const _0x1e511b = _0x4cf584;
                            _0x1ec9fe['style'][_0x1e511b(0xef)] = _0x1e511b(0xee), hideViaOverlay(_0x1ec9fe);
                        });
                    }
                });
            }
            problematicHosts[_0x395c17(0xe7)]([_0x395c17(0xda)], pageCallback$4);
            const _0x22686b = _0xa13f;

            function _0xca64() {
                const _0x494da1 = ['228iyhQIO', 'includes', 'querySelector', '986495eCKWhF', '14481951gzVYYJ', 'clipPath', 'innerHTML', 'body\x20>\x20div:has(>\x20[href*=\x22flashbanner\x22])', '836ZfkWMh', '4vBzyxm', 'prototype', '890071bDmHDS', '/templates.php', 'rgb(67,\x20117,\x20147)', '10zKythM', '423612XTkuFU', '24pNUGpA', 'every', 'center', 'aside\x20div:has(>\x20div\x20>\x20a[href]\x20>\x20span\x20+\x20img[data-backup])', 'rgb(232,\x20232,\x20232)', 'set', 'iframe', 'call', '422133fMQakk', '2308056moyhQx', 'getOwnPropertyDescriptor', 'soft98.ir', 'defineProperty'];
                _0xca64 = function() {
                    return _0x494da1;
                };
                return _0xca64();
            }(function(_0x4c0d7e, _0x49f6b1) {
                const _0x58643b = _0xa13f,
                    _0x1b89dc = _0x4c0d7e();
                while (!![]) {
                    try {
                        const _0x3af61a = -parseInt(_0x58643b(0x128)) / 0x1 * (-parseInt(_0x58643b(0x113)) / 0x2) + -parseInt(_0x58643b(0x123)) / 0x3 * (parseInt(_0x58643b(0x114)) / 0x4) + parseInt(_0x58643b(0x12b)) / 0x5 * (-parseInt(_0x58643b(0x11b)) / 0x6) + parseInt(_0x58643b(0x116)) / 0x7 + parseInt(_0x58643b(0x124)) / 0x8 + -parseInt(_0x58643b(0x11a)) / 0x9 + -parseInt(_0x58643b(0x119)) / 0xa * (-parseInt(_0x58643b(0x12c)) / 0xb);
                        if (_0x3af61a === _0x49f6b1) break;
                        else _0x1b89dc['push'](_0x1b89dc['shift']());
                    } catch (_0x40faae) {
                        _0x1b89dc['push'](_0x1b89dc['shift']());
                    }
                }
            }(_0xca64, 0xcfa62));

            function _0xa13f(_0x5ed4d1, _0x140db7) {
                const _0xca64e = _0xca64();
                return _0xa13f = function(_0xa13fec, _0x1a71f5) {
                    _0xa13fec = _0xa13fec - 0x112;
                    let _0x597b99 = _0xca64e[_0xa13fec];
                    return _0x597b99;
                }, _0xa13f(_0x5ed4d1, _0x140db7);
            }

            function pageCallback$3() {
                const _0x2c4428 = _0xa13f,
                    _0x21d4e4 = [_0x2c4428(0x121), _0x2c4428(0x11d), _0x2c4428(0x117)],
                    _0x2d918f = () => {
                        const _0x2c8260 = _0x2c4428,
                            _0x1e70e2 = Object[_0x2c8260(0x125)](Element[_0x2c8260(0x115)], _0x2c8260(0x12e))[_0x2c8260(0x120)];
                        Object[_0x2c8260(0x127)](Element['prototype'], _0x2c8260(0x12e), {
                            'set' (_0x318916) {
                                const _0x1d099f = _0x2c8260;
                                return _0x318916 && _0x21d4e4[_0x1d099f(0x11c)](_0x506177 => _0x318916[_0x1d099f(0x129)](_0x506177)) && removeNode(getParent(this, 0x1)), _0x1e70e2[_0x1d099f(0x122)](this, _0x318916);
                            }
                        });
                    },
                    _0x182252 = () => {
                        const _0x7ddc4b = _0x2c4428,
                            _0x1630ce = _0x51ea98['querySelectorAll'](_0x7ddc4b(0x11e));
                        _0x1630ce['forEach'](_0x70bb8e => {
                            const _0x3ecbf4 = _0x7ddc4b;
                            hideViaOverlay(_0x70bb8e, _0x3ecbf4(0x11f));
                        });
                    },
                    _0x173ad4 = () => {
                        const _0x340a39 = _0x2c4428,
                            _0x27dd4c = _0x51ea98[_0x340a39(0x12a)]('header\x20div:has(>\x20div\x20>\x20a[href]\x20>\x20span\x20+\x20img[data-backup])');
                        if (!_0x27dd4c || !getComputedStyle(_0x27dd4c)[_0x340a39(0x12d)]) return;
                        hideViaOverlay(_0x27dd4c, _0x340a39(0x118));
                    },
                    _0x5692ce = () => {
                        const _0x540b7d = _0x2c4428;
                        let _0x58f669;
                        isMobile() && (_0x58f669 = _0x51ea98[_0x540b7d(0x12a)](_0x540b7d(0x112))), _0x58f669 && hideViaPositionProperty(_0x58f669);
                    };
                observeDomChanges(() => {
                    _0x5692ce(), _0x2d918f(), _0x182252(), _0x173ad4();
                });
            }
            problematicHosts['setEntries']([_0x22686b(0x126)], pageCallback$3);
            const _0x3bf0f5 = _0x2e25;
            (function(_0x51db98, _0x416e9f) {
                const _0x60bc78 = _0x2e25,
                    _0x22f6a5 = _0x51db98();
                while (!![]) {
                    try {
                        const _0x2b8305 = -parseInt(_0x60bc78(0x123)) / 0x1 + -parseInt(_0x60bc78(0x12a)) / 0x2 + -parseInt(_0x60bc78(0x124)) / 0x3 * (parseInt(_0x60bc78(0x125)) / 0x4) + parseInt(_0x60bc78(0x127)) / 0x5 * (parseInt(_0x60bc78(0x128)) / 0x6) + parseInt(_0x60bc78(0x11e)) / 0x7 * (parseInt(_0x60bc78(0x126)) / 0x8) + -parseInt(_0x60bc78(0x12c)) / 0x9 * (-parseInt(_0x60bc78(0x12b)) / 0xa) + parseInt(_0x60bc78(0x122)) / 0xb;
                        if (_0x2b8305 === _0x416e9f) break;
                        else _0x22f6a5['push'](_0x22f6a5['shift']());
                    } catch (_0x35da78) {
                        _0x22f6a5['push'](_0x22f6a5['shift']());
                    }
                }
            }(_0x4d99, 0x27e0d));

            function _0x4d99() {
                const _0x3f8130 = ['4777157uEnRlO', '17146HoFQWW', '37389xGEwRh', '72YpNESK', '528704GOuFsL', '169480ECijso', '36JOINRn', 'querySelectorAll', '613390FvNpsx', '77650ZsJzFy', '9JLiaVB', 'querySelector', '7ahzYli', 'forEach', 'div:not([class]):not([id])\x20>\x20a[target=\x22_blank\x22]\x20>\x20img[alt]', 'techpowerup.com'];
                _0x4d99 = function() {
                    return _0x3f8130;
                };
                return _0x4d99();
            }

            function _0x2e25(_0x347a5b, _0x36400a) {
                const _0x4d9942 = _0x4d99();
                return _0x2e25 = function(_0x2e25c8, _0x4b6458) {
                    _0x2e25c8 = _0x2e25c8 - 0x11e;
                    let _0xf53af = _0x4d9942[_0x2e25c8];
                    return _0xf53af;
                }, _0x2e25(_0x347a5b, _0x36400a);
            }

            function pageCallback$2() {
                const _0x5cbc65 = () => {
                        const _0x111c45 = _0x2e25,
                            _0x5ae47d = _0x51ea98[_0x111c45(0x12d)]('.page-header__logo-wrapper\x20+\x20div');
                        _0x5ae47d && _0x5ae47d['querySelector'](_0x111c45(0x120)) && hideViaPositionProperty(_0x5ae47d);
                    },
                    _0x5c7c3c = () => {
                        const _0x14b5b3 = _0x2e25,
                            _0x463d5a = _0x51ea98[_0x14b5b3(0x129)]('div.s--item');
                        [..._0x463d5a][_0x14b5b3(0x11f)](_0x456942 => {
                            const _0x157fc1 = _0x14b5b3;
                            _0x456942[_0x157fc1(0x12d)]('div:not([class]):not([id])\x20>\x20a[target=\x22_blank\x22]\x20>\x20img[alt]') && hideViaPositionProperty(_0x456942);
                        });
                    };
                observeDomChanges(() => {
                    _0x5c7c3c(), isMobile() && _0x5cbc65();
                });
            }
            problematicHosts['setEntries']([_0x3bf0f5(0x121)], pageCallback$2);

            function _0x460d() {
                const _0x115d21 = ['60EhAcrk', '16bbxFvl', '119484pUKKOn', '1936608vjLrwJ', '5118870mLfMol', '1708FTsLEo', '628dkDcBP', '2567115dCiYlh', '110HsGLLu', '91QmTWcO', 'rjno1.com', 'querySelectorAll', 'backgroundColor', '65LdjdAF', 'body\x20>\x20div[style],\x20body\x20>\x20div[id^=\x22di\x22]', '3003ZuWAXS', '471710aBDrHS', 'indexOf'];
                _0x460d = function() {
                    return _0x115d21;
                };
                return _0x460d();
            }
            const _0x3bc661 = _0xe4e5;
            (function(_0x4245d2, _0x22b342) {
                const _0xf452ca = _0xe4e5,
                    _0x560681 = _0x4245d2();
                while (!![]) {
                    try {
                        const _0x1df1c0 = -parseInt(_0xf452ca(0x129)) / 0x1 * (parseInt(_0xf452ca(0x123)) / 0x2) + parseInt(_0xf452ca(0x120)) / 0x3 * (-parseInt(_0xf452ca(0x128)) / 0x4) + parseInt(_0xf452ca(0x127)) / 0x5 + parseInt(_0xf452ca(0x125)) / 0x6 * (-parseInt(_0xf452ca(0x12c)) / 0x7) + -parseInt(_0xf452ca(0x124)) / 0x8 * (-parseInt(_0xf452ca(0x12a)) / 0x9) + parseInt(_0xf452ca(0x121)) / 0xa * (parseInt(_0xf452ca(0x12b)) / 0xb) + parseInt(_0xf452ca(0x126)) / 0xc * (-parseInt(_0xf452ca(0x11e)) / 0xd);
                        if (_0x1df1c0 === _0x22b342) break;
                        else _0x560681['push'](_0x560681['shift']());
                    } catch (_0x30bd47) {
                        _0x560681['push'](_0x560681['shift']());
                    }
                }
            }(_0x460d, 0x8739d));

            function pageCallback$1() {
                const _0x1a403a = () => {
                    const _0x1f61df = _0xe4e5,
                        _0x2594bd = _0x51ea98[_0x1f61df(0x11c)](_0x1f61df(0x11f));
                    [..._0x2594bd]['forEach'](_0x26f786 => {
                        const _0x424199 = _0x1f61df;
                        getComputedStyle(_0x26f786)[_0x424199(0x11d)][_0x424199(0x122)]('0.95') !== -0x1 && removeNode(_0x26f786);
                    });
                };
                observeDomChanges(() => {
                    _0x1a403a();
                });
            }

            function _0xe4e5(_0x56be93, _0x18e262) {
                const _0x460d26 = _0x460d();
                return _0xe4e5 = function(_0xe4e5cf, _0x445ecf) {
                    _0xe4e5cf = _0xe4e5cf - 0x11b;
                    let _0x1f2c75 = _0x460d26[_0xe4e5cf];
                    return _0x1f2c75;
                }, _0xe4e5(_0x56be93, _0x18e262);
            }
            problematicHosts['setEntries']([_0x3bc661(0x11b)], pageCallback$1);
            (function(_0x2ae240, _0x1d6c9e) {
                const _0x3b189a = _0x29bf,
                    _0x52dc60 = _0x2ae240();
                while (!![]) {
                    try {
                        const _0x6783bd = parseInt(_0x3b189a(0x1ba)) / 0x1 + parseInt(_0x3b189a(0x1c5)) / 0x2 * (parseInt(_0x3b189a(0x1d0)) / 0x3) + -parseInt(_0x3b189a(0x1c8)) / 0x4 * (parseInt(_0x3b189a(0x1b8)) / 0x5) + -parseInt(_0x3b189a(0x1c3)) / 0x6 * (-parseInt(_0x3b189a(0x1d4)) / 0x7) + -parseInt(_0x3b189a(0x1bd)) / 0x8 * (parseInt(_0x3b189a(0x1bc)) / 0x9) + -parseInt(_0x3b189a(0x1c9)) / 0xa * (-parseInt(_0x3b189a(0x1c6)) / 0xb) + -parseInt(_0x3b189a(0x1bf)) / 0xc;
                        if (_0x6783bd === _0x1d6c9e) break;
                        else _0x52dc60['push'](_0x52dc60['shift']());
                    } catch (_0x1e28e5) {
                        _0x52dc60['push'](_0x52dc60['shift']());
                    }
                }
            }(_0x3c69, 0x50e04));

            function _0x3c69() {
                const _0x36d1a4 = ['querySelector', '1104477uMftLc', 'container', 'includes', 'contains', '1461502PRalrz', '20Vhcnnd', 'classList', '363695CYxpSz', '.onclick', '36lrfFaN', '980456SJUZkR', 'youripd', '7201164LKyCOW', 'script', 'window', '[onclick*=\x22https://specialrdp.com\x22]', '18LjCvkT', 'img[src*=\x22close\x22]', '2jxxekr', '385eLTwIl', 'location', '294004GvuThq', '102110rDwZdg', 'querySelectorAll', 'getElementById', 'forEach', 'tagName', 'BODY'];
                _0x3c69 = function() {
                    return _0x36d1a4;
                };
                return _0x3c69();
            }

            function _0x29bf(_0x42b1ed, _0x412b9d) {
                const _0x3c690f = _0x3c69();
                return _0x29bf = function(_0x29bfca, _0x2418b5) {
                    _0x29bfca = _0x29bfca - 0x1b8;
                    let _0x2e6081 = _0x3c690f[_0x29bfca];
                    return _0x2e6081;
                }, _0x29bf(_0x42b1ed, _0x412b9d);
            }

            function pageCallback() {
                const _0x66c4d8 = () => {
                    const _0x144b66 = _0x29bf,
                        _0xe87c9 = _0x51ea98[_0x144b66(0x1ca)](_0x144b66(0x1c0));
                    _0xe87c9['forEach'](_0x2b840b => {
                        const _0x3580ff = _0x144b66,
                            {
                                innerText: _0x2646d9
                            } = _0x2b840b;
                        if (_0x2646d9[_0x3580ff(0x1d2)](_0x3580ff(0x1c1)) && _0x2646d9[_0x3580ff(0x1d2)](_0x3580ff(0x1c7)) && _0x2646d9['includes'](_0x3580ff(0x1bb))) {
                            const _0x5e7235 = getParent(_0x2b840b, 0x3);
                            hideViaPositionProperty(_0x5e7235);
                        }
                    });
                    const _0x276d1c = document[_0x144b66(0x1ca)](_0x144b66(0x1c4));
                    _0x276d1c[_0x144b66(0x1cc)](_0xba2395 => {
                        const _0xb18e6d = _0x144b66,
                            _0x2b0d21 = getParent(_0xba2395, 0x2);
                        if (!_0x2b0d21 || _0x2b0d21[_0xb18e6d(0x1cd)] === _0xb18e6d(0x1ce) || _0x2b0d21[_0xb18e6d(0x1b9)][_0xb18e6d(0x1d3)](_0xb18e6d(0x1d1))) return;
                        hideViaPositionProperty(_0x2b0d21);
                    });
                    const _0x54981b = document[_0x144b66(0x1cf)](_0x144b66(0x1c2)),
                        _0x4ab7b6 = getParent(_0x54981b, 0x1);
                    if (!_0x4ab7b6 || _0x4ab7b6[_0x144b66(0x1cd)] === _0x144b66(0x1ce) || document[_0x144b66(0x1cb)](_0x144b66(0x1be)) === _0x4ab7b6) return;
                    hideViaPositionProperty(_0x4ab7b6);
                };
                observeDomChanges(() => {
                    _0x66c4d8();
                });
            }
            problematicHosts['setEntries'](['check-host.net'], pageCallback);
            (function(_0x154d12, _0x458c66) {
                var _0x573325 = _0x23fa,
                    _0x2dcbc6 = _0x154d12();
                while (!![]) {
                    try {
                        var _0x53b3d2 = -parseInt(_0x573325(0x75)) / 0x1 * (-parseInt(_0x573325(0x77)) / 0x2) + -parseInt(_0x573325(0x76)) / 0x3 * (parseInt(_0x573325(0x6f)) / 0x4) + parseInt(_0x573325(0x73)) / 0x5 + -parseInt(_0x573325(0x72)) / 0x6 * (parseInt(_0x573325(0x70)) / 0x7) + parseInt(_0x573325(0x71)) / 0x8 * (parseInt(_0x573325(0x6d)) / 0x9) + parseInt(_0x573325(0x6e)) / 0xa + parseInt(_0x573325(0x74)) / 0xb;
                        if (_0x53b3d2 === _0x458c66) break;
                        else _0x2dcbc6['push'](_0x2dcbc6['shift']());
                    } catch (_0x24f5d5) {
                        _0x2dcbc6['push'](_0x2dcbc6['shift']());
                    }
                }
            }(_0x5984, 0x6dc4e));

            function _0x23fa(_0x3c5a99, _0x1142b1) {
                var _0x59844c = _0x5984();
                return _0x23fa = function(_0x23fae7, _0x3c1229) {
                    _0x23fae7 = _0x23fae7 - 0x6d;
                    var _0x39a862 = _0x59844c[_0x23fae7];
                    return _0x39a862;
                }, _0x23fa(_0x3c5a99, _0x1142b1);
            }

            function _0x5984() {
                var _0x4a61c8 = ['1171wLbBmI', '629496FTpdbD', '350uYVpzy', '18IHBrvN', '2773250ERKdsk', '8MYpeaZ', '7pGkGTj', '760712TVxsJF', '5323602CQWmaN', '814835LidKZd', '10132650OJyOhA'];
                _0x5984 = function() {
                    return _0x4a61c8;
                };
                return _0x5984();
            }
            const _0x4fc96f = _0x3cb7;
            (function(_0x4bdf10, _0x432d7d) {
                const _0x4d92c0 = _0x3cb7,
                    _0x4a7e67 = _0x4bdf10();
                while (!![]) {
                    try {
                        const _0x3497ca = -parseInt(_0x4d92c0(0xb3)) / 0x1 + parseInt(_0x4d92c0(0xb7)) / 0x2 + -parseInt(_0x4d92c0(0xb1)) / 0x3 + parseInt(_0x4d92c0(0xb2)) / 0x4 + parseInt(_0x4d92c0(0xb9)) / 0x5 * (-parseInt(_0x4d92c0(0xb8)) / 0x6) + parseInt(_0x4d92c0(0xb5)) / 0x7 * (-parseInt(_0x4d92c0(0xaf)) / 0x8) + parseInt(_0x4d92c0(0xb0)) / 0x9 * (parseInt(_0x4d92c0(0xb6)) / 0xa);
                        if (_0x3497ca === _0x432d7d) break;
                        else _0x4a7e67['push'](_0x4a7e67['shift']());
                    } catch (_0x17bdef) {
                        _0x4a7e67['push'](_0x4a7e67['shift']());
                    }
                }
            }(_0x5b46, 0x4940d));

            function _0x3cb7(_0x351dba, _0x3afdc8) {
                const _0x5b461d = _0x5b46();
                return _0x3cb7 = function(_0x3cb7c3, _0x37586c) {
                    _0x3cb7c3 = _0x3cb7c3 - 0xaf;
                    let _0x50619b = _0x5b461d[_0x3cb7c3];
                    return _0x50619b;
                }, _0x3cb7(_0x351dba, _0x3afdc8);
            }

            function _0x5b46() {
                const _0x3650a1 = ['515889nsZPTm', '7716wzxVYh', '13876MkHrTG', '364314BPkDVq', 'getHosts', '1021965QIKJRb', '190RlxAaO', '358160DQdzWY', '1876362HtUXkd', '5NWJXJw', '16VgbOBD'];
                _0x5b46 = function() {
                    return _0x3650a1;
                };
                return _0x5b46();
            }
            const allHosts = new HostsMap([...commonHosts[_0x4fc96f(0xb4)](), ...problematicHosts[_0x4fc96f(0xb4)]()]);
            (function(_0x4797d8, _0x43ccff) {
                var _0x3aab09 = _0x28ff,
                    _0x168704 = _0x4797d8();
                while (!![]) {
                    try {
                        var _0xe48b32 = parseInt(_0x3aab09(0x101)) / 0x1 * (parseInt(_0x3aab09(0xfd)) / 0x2) + parseInt(_0x3aab09(0x103)) / 0x3 * (parseInt(_0x3aab09(0x102)) / 0x4) + -parseInt(_0x3aab09(0xfe)) / 0x5 + parseInt(_0x3aab09(0xfc)) / 0x6 + -parseInt(_0x3aab09(0x100)) / 0x7 + parseInt(_0x3aab09(0xfb)) / 0x8 + parseInt(_0x3aab09(0xff)) / 0x9;
                        if (_0xe48b32 === _0x43ccff) break;
                        else _0x168704['push'](_0x168704['shift']());
                    } catch (_0xdab6be) {
                        _0x168704['push'](_0x168704['shift']());
                    }
                }
            }(_0x40b6, 0xd35af));

            function _0x28ff(_0x14e8af, _0x245ef8) {
                var _0x40b698 = _0x40b6();
                return _0x28ff = function(_0x28ffb1, _0x3735e7) {
                    _0x28ffb1 = _0x28ffb1 - 0xfb;
                    var _0x4f93ec = _0x40b698[_0x28ffb1];
                    return _0x4f93ec;
                }, _0x28ff(_0x14e8af, _0x245ef8);
            }

            function _0x40b6() {
                var _0x48c005 = ['6pplxsk', '8270144Oaimfu', '4796064ElzXaR', '10tvLMLo', '7126960uXzhkh', '1734840WMYQXf', '7970242rGAMbO', '187203qpTYVc', '935644jcKCgX'];
                _0x40b6 = function() {
                    return _0x48c005;
                };
                return _0x40b6();
            }
            shouldRunExtra(allHosts);
        })
    } //# sourceURL=AdGuard%20Extra.user.js
})