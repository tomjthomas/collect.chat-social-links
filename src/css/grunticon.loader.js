/*! grunt-grunticon Stylesheet Loader - v2.1.2 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */

(function (e) {
  function t(t, n, r, o) {
    function a() {
      for (var e, n = 0; u.length > n; n++)
        u[n].href && u[n].href.indexOf(t) > -1 && (e = !0);
      e ? (i.media = r || "all") : setTimeout(a);
    }
    var i = e.document.createElement("link");
    const l = n || e.document.getElementsByTagName("script")[0];
    var u = e.document.styleSheets;
    return (
      (i.rel = "stylesheet"),
      (i.href = t),
      (i.media = "only x"),
      (i.onload = o || null),
      l.parentNode.insertBefore(i, l),
      a(),
      i
    );
  }
  var n = function (r, o) {
    if (r && r.length === 3) {
      const a = e.navigator;
      const i = e.Image;
      const l = !(
        !document.createElementNS ||
        !document.createElementNS("http://www.w3.org/2000/svg", "svg")
          .createSVGRect ||
        !document.implementation.hasFeature(
          "http://www.w3.org/TR/SVG11/feature#Image",
          "1.1"
        ) ||
        (e.opera && a.userAgent.indexOf("Chrome") === -1) ||
        a.userAgent.indexOf("Series40") !== -1
      );
      const u = new i();
      (u.onerror = function () {
        (n.method = "png"), (n.href = r[2]), t(r[2]);
      }),
        (u.onload = function () {
          const e = u.width === 1 && u.height === 1;
          const a = r[e && l ? 0 : e ? 1 : 2];
          (n.method = e && l ? "svg" : e ? "datapng" : "png"),
            (n.href = a),
            t(a, null, null, o);
        }),
        (u.src =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="),
        (document.documentElement.className += " grunticon");
    }
  };
  (n.loadCSS = t), (e.grunticon = n);
})(this);
(function (e, t) {
  const n = t.document;
  const r = "grunticon:";
  const o = function (e) {
    if (
      n.attachEvent ? n.readyState === "complete" : n.readyState !== "loading"
    )
      e();
    else {
      let t = !1;
      n.addEventListener(
        "readystatechange",
        function () {
          t || ((t = !0), e());
        },
        !1
      );
    }
  };
  const a = function (e) {
    return t.document.querySelector(`link[href$="${e}"]`);
  };
  const c = function (e) {
    let t;
    let n;
    let o;
    let a;
    let c;
    let i;
    const u = {};
    if (((t = e.sheet), !t)) return u;
    n = t.cssRules ? t.cssRules : t.rules;
    for (let l = 0; n.length > l; l++)
      (o = n[l].cssText),
        (a = r + n[l].selectorText),
        (c = o.split(");")[0].match(/US\-ASCII\,([^"']+)/)),
        c && c[1] && ((i = decodeURIComponent(c[1])), (u[a] = i));
    return u;
  };
  const i = function (e) {
    let t;
    let o;
    let a;
    o = "data-grunticon-embed";
    for (const c in e)
      if (
        ((a = c.slice(r.length)),
        (t = n.querySelectorAll(`${a}[${o}]`)),
        t.length)
      )
        for (let i = 0; t.length > i; i++)
          (t[i].innerHTML = e[c]),
            (t[i].style.backgroundImage = "none"),
            t[i].removeAttribute(o);
    return t;
  };
  const u = function (t) {
    e.method === "svg" &&
      o(function () {
        i(c(a(e.href))), typeof t === "function" && t();
      });
  };
  (e.embedIcons = i),
    (e.getCSS = a),
    (e.getIcons = c),
    (e.ready = o),
    (e.svgLoadedCallback = u),
    (e.embedSVG = u);
})(grunticon, this);
