(function(exoDynamicParams) {
    ! function() {
        try {
            var t = void 0 !== document.currentScript ? document.currentScript : document.scripts[document.scripts.length - 1],
                e = t.getAttribute("data-goal"),
                n = t.getAttribute("data-value") || null,
                a = function() {
                    try {
                        var t, e, n, a = document.cookie.split(";")
                    } catch (t) {
                        return
                    }
                    for (t = 0; t < a.length; t++)
                        if (e = a[t].substr(0, a[t].indexOf("=")), n = a[t].substr(a[t].indexOf("=") + 1), "__nuvt" === (e = e.replace(/^\s+|\s+$/g, ""))) return decodeURI(n)
                }() || null;
            if (null != e) {
                for (var r = new Array, c = 0, o = 0; o < exoDynamicParams.aliases.length; o++) {
                    c++;
                    var u = "https://" + exoDynamicParams.aliases[o] + "/tag.php?goal=" + e;
                    n && (u += "&value=" + n), a && (u += "&nuvt=" + a), r[o] = new Image(1, 1), r[o].src = u, r[o].style.display = "none", r[o].onload = function(t) {
                        c--
                    }, r[o].onerror = function(t) {
                        c--
                    }, r[o].alt = "Pixel";
                    try {
                        document.body.appendChild(r[o])
                    } catch (t) {}
                }
                var i = 20,
                    l = setInterval((function() {
                        if (c < 1 || i < 1) {
                            clearInterval(l);
                            var t = new CustomEvent("goals-done");
                            document.dispatchEvent(t)
                        }
                        i--
                    }), 100)
            }
        } catch (t) {}
    }();
})({
    "aliases": ["s.chmsrv.com", "s.chnsrv.com", "s.dsqyla.com", "s.dszqsm.com", "s.elnnap.com", "s.magsrv.com", "s.opoxv.com", "s.orbsrv.com", "s.pemsrv.com", "s.xlink3.com", "s.zline0.com", "syndication.realsrv.com"]
})