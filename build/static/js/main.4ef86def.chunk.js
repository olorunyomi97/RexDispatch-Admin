(this["webpackJsonpMuntu-admin"] = this["webpackJsonpMuntu-admin"] || []).push([
  [0],
  {
    1: function(e, t, a) {
      "use strict";
      (function(e) {
        a.d(t, "a", function() {
          return i;
        });
        var n = a(361),
          r = a(231);
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
          Element.prototype.closest ||
            (Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector),
            (Element.prototype.closest = function(e) {
              var t = this;
              if (!document.documentElement.contains(this)) return null;
              do {
                if (t.matches(e)) return t;
                t = t.parentElement;
              } while (null !== t);
              return null;
            })),
          (function(e) {
            for (var t = 0; t < e.length; t++)
              window[e[t]] &&
                !("remove" in window[e[t]].prototype) &&
                (window[e[t]].prototype.remove = function() {
                  this.parentNode.removeChild(this);
                });
          })(["Element", "CharacterData", "DocumentType"]),
          (function() {
            for (
              var e = 0, t = ["webkit", "moz"], a = 0;
              a < t.length && !window.requestAnimationFrame;
              ++a
            )
              (window.requestAnimationFrame =
                window[t[a] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[t[a] + "CancelAnimationFrame"] ||
                  window[t[a] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function(t) {
                var a = new Date().getTime(),
                  n = Math.max(0, 16 - (a - e)),
                  r = window.setTimeout(function() {
                    t(a + n);
                  }, n);
                return (e = a + n), r;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function(e) {
                  clearTimeout(e);
                });
          })(),
          [
            Element.prototype,
            Document.prototype,
            DocumentFragment.prototype,
          ].forEach(function(e) {
            e.hasOwnProperty("prepend") ||
              Object.defineProperty(e, "prepend", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                  var e = Array.prototype.slice.call(arguments),
                    t = document.createDocumentFragment();
                  e.forEach(function(e) {
                    var a = e instanceof Node;
                    t.appendChild(a ? e : document.createTextNode(String(e)));
                  }),
                    this.insertBefore(t, this.firstChild);
                },
              });
          }),
          (window.KTUtilElementDataStore = {}),
          (window.KTUtilElementDataStoreID = 0),
          (window.KTUtilDelegatedEventHandlers = {});
        var i = (function() {
          var e = [],
            t = { sm: 544, md: 768, lg: 992, xl: 1200 },
            a = function() {
              window.addEventListener("resize", function() {
                i.throttle(
                  void 0,
                  function() {
                    !(function() {
                      for (var t = 0; t < e.length; t++) {
                        e[t].call();
                      }
                    })();
                  },
                  200
                );
              });
            };
          return {
            init: function(e) {
              e && e.breakpoints && (t = e.breakpoints), a();
            },
            addResizeHandler: function(t) {
              e.push(t);
            },
            removeResizeHandler: function(t) {
              for (var a = 0; a < e.length; a++) t === e[a] && delete e[a];
            },
            runResizeHandlers: function() {
              _runResizeHandlers();
            },
            resize: function() {
              if ("function" === typeof Event)
                window.dispatchEvent(new Event("resize"));
              else {
                var e = window.document.createEvent("UIEvents");
                e.initUIEvent("resize", !0, !1, window, 0),
                  window.dispatchEvent(e);
              }
            },
            getURLParam: function(e) {
              var t,
                a,
                n = window.location.search.substring(1).split("&");
              for (t = 0; t < n.length; t++)
                if ((a = n[t].split("="))[0] == e) return unescape(a[1]);
              return null;
            },
            isMobileDevice: function() {
              var e = this.getViewPort().width < this.getBreakpoint("lg");
              return (
                !1 === e && (e = null != navigator.userAgent.match(/iPad/i)), e
              );
            },
            isDesktopDevice: function() {
              return !i.isMobileDevice();
            },
            getViewPort: function() {
              var e = window,
                t = "inner";
              return (
                "innerWidth" in window ||
                  ((t = "client"),
                  (e = document.documentElement || document.body)),
                { width: e[t + "Width"], height: e[t + "Height"] }
              );
            },
            isInResponsiveRange: function(e) {
              var t = this.getViewPort().width;
              return (
                "general" == e ||
                ("desktop" == e && t >= this.getBreakpoint("lg") + 1) ||
                  ("tablet" == e &&
                    t >= this.getBreakpoint("md") + 1 &&
                    t < this.getBreakpoint("lg")) ||
                    ("mobile" == e && t <= this.getBreakpoint("md")) ||
                      ("desktop-and-tablet" == e &&
                        t >= this.getBreakpoint("md") + 1) ||
                        ("tablet-and-mobile" == e &&
                          t <= this.getBreakpoint("lg")) ||
                          ("minimal-desktop-and-below" == e &&
                            t <= this.getBreakpoint("xl"))
              );
            },
            isBreakpointUp: function(e) {
              return this.getViewPort().width >= this.getBreakpoint(e);
            },
            isBreakpointDown: function(e) {
              return this.getViewPort().width < this.getBreakpoint(e);
            },
            getUniqueID: function(e) {
              return e + Math.floor(Math.random() * new Date().getTime());
            },
            getBreakpoint: function(e) {
              return t[e];
            },
            isset: function(e, t) {
              var a;
              if (-1 !== (t = t || "").indexOf("["))
                throw new Error("Unsupported object path notation.");
              t = t.split(".");
              do {
                if (void 0 === e) return !1;
                if (((a = t.shift()), !e.hasOwnProperty(a))) return !1;
                e = e[a];
              } while (t.length);
              return !0;
            },
            getHighestZindex: function(e) {
              for (var t, a; e && e !== document; ) {
                if (
                  ("absolute" === (t = i.css(e, "position")) ||
                    "relative" === t ||
                    "fixed" === t) &&
                  ((a = parseInt(i.css(e, "z-index"))), !isNaN(a) && 0 !== a)
                )
                  return a;
                e = e.parentNode;
              }
              return null;
            },
            hasFixedPositionedParent: function(e) {
              for (; e && e !== document; ) {
                if ("fixed" === i.css(e, "position")) return !0;
                e = e.parentNode;
              }
              return !1;
            },
            sleep: function(e) {
              for (
                var t = new Date().getTime(), a = 0;
                a < 1e7 && !(new Date().getTime() - t > e);
                a++
              );
            },
            getRandomInt: function(e, t) {
              return Math.floor(Math.random() * (t - e + 1)) + e;
            },
            isAngularVersion: function() {
              return void 0 !== window.Zone;
            },
            deepExtend: function(e) {
              e = e || {};
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                if (a)
                  for (var n in a)
                    a.hasOwnProperty(n) &&
                      ("object" === typeof a[n]
                        ? (e[n] = i.deepExtend(e[n], a[n]))
                        : (e[n] = a[n]));
              }
              return e;
            },
            extend: function(e) {
              e = e || {};
              for (var t = 1; t < arguments.length; t++)
                if (arguments[t])
                  for (var a in arguments[t])
                    arguments[t].hasOwnProperty(a) && (e[a] = arguments[t][a]);
              return e;
            },
            getById: function(e) {
              return "string" === typeof e ? document.getElementById(e) : e;
            },
            getByTag: function(e) {
              return document.getElementsByTagName(e);
            },
            getByTagName: function(e) {
              return document.getElementsByTagName(e);
            },
            getByClass: function(e) {
              return document.getElementsByClassName(e);
            },
            getBody: function() {
              return document.getElementsByTagName("body")[0];
            },
            hasClasses: function(e, t) {
              if (e) {
                for (var a = t.split(" "), n = 0; n < a.length; n++)
                  if (0 == i.hasClass(e, i.trim(a[n]))) return !1;
                return !0;
              }
            },
            hasClass: function(e, t) {
              if (e)
                return e.classList
                  ? e.classList.contains(t)
                  : new RegExp("\\b" + t + "\\b").test(e.className);
            },
            addClass: function(e, t) {
              if (e && "undefined" !== typeof t) {
                var a = t.split(" ");
                if (e.classList)
                  for (var n = 0; n < a.length; n++)
                    a[n] && a[n].length > 0 && e.classList.add(i.trim(a[n]));
                else if (!i.hasClass(e, t))
                  for (var r = 0; r < a.length; r++)
                    e.className += " " + i.trim(a[r]);
              }
            },
            removeClass: function(e, t) {
              if (e && "undefined" !== typeof t) {
                var a = t.split(" ");
                if (e.classList)
                  for (var n = 0; n < a.length; n++)
                    e.classList.remove(i.trim(a[n]));
                else if (i.hasClass(e, t))
                  for (var r = 0; r < a.length; r++)
                    e.className = e.className.replace(
                      new RegExp("\\b" + i.trim(a[r]) + "\\b", "g"),
                      ""
                    );
              }
            },
            triggerCustomEvent: function(e, t, a) {
              var n;
              window.CustomEvent
                ? (n = new CustomEvent(t, { detail: a }))
                : (n = document.createEvent("CustomEvent")).initCustomEvent(
                    t,
                    !0,
                    !0,
                    a
                  ),
                e.dispatchEvent(n);
            },
            triggerEvent: function(e, t) {
              var a;
              if (e.ownerDocument) a = e.ownerDocument;
              else {
                if (9 != e.nodeType)
                  throw new Error("Invalid node passed to fireEvent: " + e.id);
                a = e;
              }
              if (e.dispatchEvent) {
                var n = "";
                switch (t) {
                  case "click":
                  case "mouseenter":
                  case "mouseleave":
                  case "mousedown":
                  case "mouseup":
                    n = "MouseEvents";
                    break;
                  case "focus":
                  case "change":
                  case "blur":
                  case "select":
                    n = "HTMLEvents";
                    break;
                  default:
                    throw "fireEvent: Couldn't find an event class for event '" +
                      t +
                      "'.";
                }
                var r = "change" != t;
                (i = a.createEvent(n)).initEvent(t, r, !0),
                  (i.synthetic = !0),
                  e.dispatchEvent(i, !0);
              } else if (e.fireEvent) {
                var i;
                ((i = a.createEventObject()).synthetic = !0),
                  e.fireEvent("on" + t, i);
              }
            },
            index: function(e) {
              for (var t = e.parentNode.children, a = 0; a < t.length; a++)
                if (t[a] == e) return a;
            },
            trim: function(e) {
              return e.trim();
            },
            eventTriggered: function(e) {
              return (
                !!e.currentTarget.dataset.triggered ||
                ((e.currentTarget.dataset.triggered = !0), !1)
              );
            },
            remove: function(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            },
            find: function(e, t) {
              if ((e = i.getById(e))) return e.querySelector(t);
            },
            findAll: function(e, t) {
              if ((e = i.getById(e))) return e.querySelectorAll(t);
            },
            insertAfter: function(e, t) {
              return t.parentNode.insertBefore(e, t.nextSibling);
            },
            parents: function(e, t) {
              Element.prototype.matches ||
                (Element.prototype.matches =
                  Element.prototype.matchesSelector ||
                  Element.prototype.mozMatchesSelector ||
                  Element.prototype.msMatchesSelector ||
                  Element.prototype.oMatchesSelector ||
                  Element.prototype.webkitMatchesSelector ||
                  function(e) {
                    for (
                      var t = (
                          this.document || this.ownerDocument
                        ).querySelectorAll(e),
                        a = t.length;
                      --a >= 0 && t.item(a) !== this;

                    );
                    return a > -1;
                  });
              for (var a = []; e && e !== document; e = e.parentNode)
                t ? e.matches(t) && a.push(e) : a.push(e);
              return a;
            },
            children: function(e, t, a) {
              if (e && e.childNodes) {
                for (var n = [], r = 0, l = e.childNodes.length; r < l; ++r)
                  1 == e.childNodes[r].nodeType &&
                    i.matches(e.childNodes[r], t, a) &&
                    n.push(e.childNodes[r]);
                return n;
              }
            },
            child: function(e, t, a) {
              var n = i.children(e, t, a);
              return n ? n[0] : null;
            },
            matches: function(e, t, a) {
              var n = Element.prototype,
                r =
                  n.matches ||
                  n.webkitMatchesSelector ||
                  n.mozMatchesSelector ||
                  n.msMatchesSelector ||
                  function(e) {
                    return (
                      -1 !== [].indexOf.call(document.querySelectorAll(e), this)
                    );
                  };
              return !(!e || !e.tagName) && r.call(e, t);
            },
            data: function(e) {
              return {
                set: function(t, a) {
                  e &&
                    (void 0 === e.customDataTag &&
                      (window.KTUtilElementDataStoreID++,
                      (e.customDataTag = window.KTUtilElementDataStoreID)),
                    void 0 === window.KTUtilElementDataStore[e.customDataTag] &&
                      (window.KTUtilElementDataStore[e.customDataTag] = {}),
                    (window.KTUtilElementDataStore[e.customDataTag][t] = a));
                },
                get: function(t) {
                  if (e)
                    return void 0 === e.customDataTag
                      ? null
                      : this.has(t)
                      ? window.KTUtilElementDataStore[e.customDataTag][t]
                      : null;
                },
                has: function(t) {
                  return (
                    !!e &&
                    void 0 !== e.customDataTag &&
                      !(
                        !window.KTUtilElementDataStore[e.customDataTag] ||
                        !window.KTUtilElementDataStore[e.customDataTag][t]
                      )
                  );
                },
                remove: function(t) {
                  e &&
                    this.has(t) &&
                    delete window.KTUtilElementDataStore[e.customDataTag][t];
                },
              };
            },
            outerWidth: function(e, t) {
              var a;
              return !0 === t
                ? ((a = parseFloat(e.offsetWidth)),
                  (a +=
                    parseFloat(i.css(e, "margin-left")) +
                    parseFloat(i.css(e, "margin-right"))),
                  parseFloat(a))
                : (a = parseFloat(e.offsetWidth));
            },
            offset: function(e) {
              var t, a;
              if (e)
                return e.getClientRects().length
                  ? ((t = e.getBoundingClientRect()),
                    (a = e.ownerDocument.defaultView),
                    {
                      top: t.top + a.pageYOffset,
                      left: t.left + a.pageXOffset,
                    })
                  : { top: 0, left: 0 };
            },
            height: function(e) {
              return i.css(e, "height");
            },
            outerHeight: function(e) {
              var t,
                a =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = e.offsetHeight;
              return a
                ? ((t = getComputedStyle(e)),
                  (n += parseInt(t.marginTop) + parseInt(t.marginBottom)))
                : n;
            },
            visible: function(e) {
              return !(0 === e.offsetWidth && 0 === e.offsetHeight);
            },
            attr: function(e, t, a) {
              if (void 0 != e)
                return void 0 === a
                  ? e.getAttribute(t)
                  : void e.setAttribute(t, a);
            },
            hasAttr: function(e, t) {
              if (void 0 != e) return !!e.getAttribute(t);
            },
            removeAttr: function(e, t) {
              void 0 != e && e.removeAttribute(t);
            },
            animate: function(e, t, a, n, r, i) {
              var l = {};
              if (
                ((l.linear = function(e, t, a, n) {
                  return (a * e) / n + t;
                }),
                (r = l.linear),
                "number" === typeof e &&
                  "number" === typeof t &&
                  "number" === typeof a &&
                  "function" === typeof n)
              ) {
                "function" !== typeof i && (i = function() {});
                var o =
                    window.requestAnimationFrame ||
                    function(e) {
                      window.setTimeout(e, 20);
                    },
                  s = t - e;
                n(e);
                var c =
                  window.performance && window.performance.now
                    ? window.performance.now()
                    : +new Date();
                o(function l(m) {
                  var u = (m || +new Date()) - c;
                  u >= 0 && n(r(u, e, s, a)),
                    u >= 0 && u >= a ? (n(t), i()) : o(l);
                });
              }
            },
            actualCss: function(e, t, a) {
              var n,
                r = "";
              if (e instanceof HTMLElement !== !1)
                return e.getAttribute("kt-hidden-" + t) && !1 !== a
                  ? parseFloat(e.getAttribute("kt-hidden-" + t))
                  : ((r = e.style.cssText),
                    (e.style.cssText =
                      "position: absolute; visibility: hidden; display: block;"),
                    "width" == t
                      ? (n = e.offsetWidth)
                      : "height" == t && (n = e.offsetHeight),
                    (e.style.cssText = r),
                    e.setAttribute("kt-hidden-" + t, n),
                    parseFloat(n));
            },
            actualHeight: function(e, t) {
              return i.actualCss(e, "height", t);
            },
            actualWidth: function(e, t) {
              return i.actualCss(e, "width", t);
            },
            getScroll: function(e, t) {
              return (
                (t = "scroll" + t),
                e == window || e == document
                  ? self["scrollTop" == t ? "pageYOffset" : "pageXOffset"] ||
                    (browserSupportsBoxModel && document.documentElement[t]) ||
                    document.body[t]
                  : e[t]
              );
            },
            css: function(e, t, a) {
              if (e)
                if (void 0 !== a) e.style[t] = a;
                else {
                  var n = (e.ownerDocument || document).defaultView;
                  if (n && n.getComputedStyle)
                    return (
                      (t = t.replace(/([A-Z])/g, "-$1").toLowerCase()),
                      n.getComputedStyle(e, null).getPropertyValue(t)
                    );
                  if (e.currentStyle)
                    return (
                      (t = t.replace(/\-(\w)/g, function(e, t) {
                        return t.toUpperCase();
                      })),
                      (a = e.currentStyle[t]),
                      /^\d+(em|pt|%|ex)?$/i.test(a)
                        ? (function(t) {
                            var a = e.style.left,
                              n = e.runtimeStyle.left;
                            return (
                              (e.runtimeStyle.left = e.currentStyle.left),
                              (e.style.left = t || 0),
                              (t = e.style.pixelLeft + "px"),
                              (e.style.left = a),
                              (e.runtimeStyle.left = n),
                              t
                            );
                          })(a)
                        : a
                    );
                }
            },
            slide: function(e, t, a, n, r) {
              if (
                !(
                  !e ||
                  ("up" == t && !1 === i.visible(e)) ||
                  ("down" == t && !0 === i.visible(e))
                )
              ) {
                a = a || 600;
                var l = i.actualHeight(e),
                  o = !1,
                  s = !1;
                i.css(e, "padding-top") &&
                  !0 !== i.data(e).has("slide-padding-top") &&
                  i.data(e).set("slide-padding-top", i.css(e, "padding-top")),
                  i.css(e, "padding-bottom") &&
                    !0 !== i.data(e).has("slide-padding-bottom") &&
                    i
                      .data(e)
                      .set("slide-padding-bottom", i.css(e, "padding-bottom")),
                  i.data(e).has("slide-padding-top") &&
                    (o = parseInt(i.data(e).get("slide-padding-top"))),
                  i.data(e).has("slide-padding-bottom") &&
                    (s = parseInt(i.data(e).get("slide-padding-bottom"))),
                  "up" == t
                    ? ((e.style.cssText = "display: block; overflow: hidden;"),
                      o &&
                        i.animate(
                          0,
                          o,
                          a,
                          function(t) {
                            e.style.paddingTop = o - t + "px";
                          },
                          "linear"
                        ),
                      s &&
                        i.animate(
                          0,
                          s,
                          a,
                          function(t) {
                            e.style.paddingBottom = s - t + "px";
                          },
                          "linear"
                        ),
                      i.animate(
                        0,
                        l,
                        a,
                        function(t) {
                          e.style.height = l - t + "px";
                        },
                        "linear",
                        function() {
                          (e.style.height = ""),
                            (e.style.display = "none"),
                            "function" === typeof n && n();
                        }
                      ))
                    : "down" == t &&
                      ((e.style.cssText = "display: block; overflow: hidden;"),
                      o &&
                        i.animate(
                          0,
                          o,
                          a,
                          function(t) {
                            e.style.paddingTop = t + "px";
                          },
                          "linear",
                          function() {
                            e.style.paddingTop = "";
                          }
                        ),
                      s &&
                        i.animate(
                          0,
                          s,
                          a,
                          function(t) {
                            e.style.paddingBottom = t + "px";
                          },
                          "linear",
                          function() {
                            e.style.paddingBottom = "";
                          }
                        ),
                      i.animate(
                        0,
                        l,
                        a,
                        function(t) {
                          e.style.height = t + "px";
                        },
                        "linear",
                        function() {
                          (e.style.height = ""),
                            (e.style.display = ""),
                            (e.style.overflow = ""),
                            "function" === typeof n && n();
                        }
                      ));
              }
            },
            slideUp: function(e, t, a) {
              i.slide(e, "up", t, a);
            },
            slideDown: function(e, t, a) {
              i.slide(e, "down", t, a);
            },
            show: function(e, t) {
              "undefined" !== typeof e && (e.style.display = t || "block");
            },
            hide: function(e) {
              "undefined" !== typeof e && (e.style.display = "none");
            },
            addEvent: function(e, t, a, n) {
              "undefined" !== typeof e &&
                null !== e &&
                e.addEventListener(t, a);
            },
            removeEvent: function(e, t, a) {
              null !== e && e.removeEventListener(t, a);
            },
            on: function(e, t, a, n) {
              if (t) {
                var r = i.getUniqueID("event");
                return (
                  (window.KTUtilDelegatedEventHandlers[r] = function(a) {
                    for (
                      var r = e.querySelectorAll(t), i = a.target;
                      i && i !== e;

                    ) {
                      for (var l = 0, o = r.length; l < o; l++)
                        i === r[l] && n.call(i, a);
                      i = i.parentNode;
                    }
                  }),
                  i.addEvent(e, a, window.KTUtilDelegatedEventHandlers[r]),
                  r
                );
              }
            },
            off: function(e, t, a) {
              e &&
                window.KTUtilDelegatedEventHandlers[a] &&
                (i.removeEvent(e, t, window.KTUtilDelegatedEventHandlers[a]),
                delete window.KTUtilDelegatedEventHandlers[a]);
            },
            one: function(e, t, a) {
              e.addEventListener(t, function t(n) {
                return (
                  n.target &&
                    n.target.removeEventListener &&
                    n.target.removeEventListener(n.type, t),
                  e &&
                    e.removeEventListener &&
                    n.currentTarget.removeEventListener(n.type, t),
                  a(n)
                );
              });
            },
            hash: function(e) {
              var t,
                a = 0;
              if (0 === e.length) return a;
              for (t = 0; t < e.length; t++)
                (a = (a << 5) - a + e.charCodeAt(t)), (a |= 0);
              return a;
            },
            animateClass: function(e, t, a) {
              var n,
                r = {
                  animation: "animationend",
                  OAnimation: "oAnimationEnd",
                  MozAnimation: "mozAnimationEnd",
                  WebkitAnimation: "webkitAnimationEnd",
                  msAnimation: "msAnimationEnd",
                };
              for (var l in r) void 0 !== e.style[l] && (n = r[l]);
              i.addClass(e, "animated " + t),
                i.one(e, n, function() {
                  i.removeClass(e, "animated " + t);
                }),
                a && i.one(e, n, a);
            },
            transitionEnd: function(e, t) {
              var a,
                n = {
                  transition: "transitionend",
                  OTransition: "oTransitionEnd",
                  MozTransition: "mozTransitionEnd",
                  WebkitTransition: "webkitTransitionEnd",
                  msTransition: "msTransitionEnd",
                };
              for (var r in n) void 0 !== e.style[r] && (a = n[r]);
              i.one(e, a, t);
            },
            animationEnd: function(e, t) {
              var a,
                n = {
                  animation: "animationend",
                  OAnimation: "oAnimationEnd",
                  MozAnimation: "mozAnimationEnd",
                  WebkitAnimation: "webkitAnimationEnd",
                  msAnimation: "msAnimationEnd",
                };
              for (var r in n) void 0 !== e.style[r] && (a = n[r]);
              i.one(e, a, t);
            },
            animateDelay: function(e, t) {
              for (
                var a = ["webkit-", "moz-", "ms-", "o-", ""], n = 0;
                n < a.length;
                n++
              )
                i.css(e, a[n] + "animation-delay", t);
            },
            animateDuration: function(e, t) {
              for (
                var a = ["webkit-", "moz-", "ms-", "o-", ""], n = 0;
                n < a.length;
                n++
              )
                i.css(e, a[n] + "animation-duration", t);
            },
            scrollTo: function(e, t, a) {
              a = a || 500;
              var n,
                r,
                l = e ? i.offset(e).top : 0,
                o =
                  window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0;
              t && (o += t),
                (n = o),
                (r = l),
                i.animate(n, r, a, function(e) {
                  (document.documentElement.scrollTop = e),
                    (document.body.parentNode.scrollTop = e),
                    (document.body.scrollTop = e);
                });
            },
            scrollTop: function(e, t) {
              i.scrollTo(null, e, t);
            },
            isArray: function(e) {
              return e && Array.isArray(e);
            },
            ready: function(e) {
              (document.attachEvent
              ? "complete" === document.readyState
              : "loading" !== document.readyState)
                ? e()
                : document.addEventListener("DOMContentLoaded", e);
            },
            isEmpty: function(e) {
              for (var t in e) if (e.hasOwnProperty(t)) return !1;
              return !0;
            },
            numberString: function(e) {
              for (
                var t = (e += "").split("."),
                  a = t[0],
                  n = t.length > 1 ? "." + t[1] : "",
                  r = /(\d+)(\d{3})/;
                r.test(a);

              )
                a = a.replace(r, "$1,$2");
              return a + n;
            },
            detectIE: function() {
              var e = window.navigator.userAgent,
                t = e.indexOf("MSIE ");
              if (t > 0)
                return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
              if (e.indexOf("Trident/") > 0) {
                var a = e.indexOf("rv:");
                return parseInt(e.substring(a + 3, e.indexOf(".", a)), 10);
              }
              var n = e.indexOf("Edge/");
              return (
                n > 0 && parseInt(e.substring(n + 5, e.indexOf(".", n)), 10)
              );
            },
            isRTL: function() {
              var e = i.getByTagName("html")[0];
              if (e) return "rtl" == i.attr(e, "direction");
            },
            scrollInit: function(e, t) {
              if (e) {
                (t = i.deepExtend(
                  {},
                  {
                    wheelSpeed: 0.5,
                    swipeEasing: !0,
                    wheelPropagation: !1,
                    minScrollbarLength: 40,
                    maxScrollbarLength: 300,
                    suppressScrollX: !0,
                  },
                  t
                )),
                  a(),
                  t.handleWindowResize &&
                    i.addResizeHandler(function() {
                      a();
                    });
              }
              function a() {
                var a,
                  l,
                  o = e.getAttributeNames();
                if (
                  (o.length > 0 &&
                    o.forEach(function(a) {
                      if (
                        /^data-.*/g.test(a) &&
                        0 == ["scroll", "height", "mobile-height"].includes(n)
                      ) {
                        var n = a
                          .replace("data-", "")
                          .toLowerCase()
                          .replace(/(?:[\s-])\w/g, function(e) {
                            return e.replace("-", "").toUpperCase();
                          });
                        t[n] = i.filterBoolean(e.getAttribute(a));
                      }
                    }),
                  !1 !==
                    (l =
                      t.height instanceof Function
                        ? t.height.call()
                        : !0 === i.isMobileDevice() && t.mobileHeight
                        ? parseInt(t.mobileHeight)
                        : parseInt(t.height)))
                )
                  if (
                    ((l = parseInt(l)),
                    (!t.mobileNativeScroll && !t.disableForMobile) ||
                      !0 !== i.isMobileDevice())
                  )
                    if (
                      (l > 0 && i.css(e, "height", l + "px"),
                      t.desktopNativeScroll)
                    )
                      i.css(e, "overflow", "auto");
                    else {
                      "true" == i.attr(e, "data-window-scroll") &&
                        (t.windowScroll = !0),
                        (a = i.data(e).get("ps"))
                          ? a.update()
                          : (i.css(e, "overflow", "hidden"),
                            i.addClass(e, "scroll"),
                            (a = new n.default(e, t)),
                            i.data(e).set("ps", a));
                      var s = i.attr(e, "id");
                      try {
                        if (s) {
                          var c = r.a.getCookie(s);
                          if (!0 === t.rememberPosition && c) {
                            var m = parseInt(c);
                            m > 0 && (e.scrollTop = m),
                              e.addEventListener("ps-scroll-y", function() {
                                r.a.setCookie(s, e.scrollTop, {});
                              });
                          }
                        }
                      } catch (u) {
                        console.error(u);
                      }
                    }
                  else
                    (a = i.data(e).get("ps"))
                      ? (t.resetHeightOnDestroy
                          ? i.css(e, "height", "auto")
                          : (i.css(e, "overflow", "auto"),
                            l > 0 && i.css(e, "height", l + "px")),
                        a.destroy(),
                        (a = i.data(e).remove("ps")))
                      : l > 0 &&
                        (i.css(e, "overflow", "auto"),
                        i.css(e, "height", l + "px"));
                else i.scrollDestroy(e, !0);
              }
            },
            scrollUpdate: function(e) {
              var t = i.data(e).get("ps");
              t && t.update();
            },
            scrollUpdateAll: function(e) {
              for (var t = i.findAll(e, ".ps"), a = 0, n = t.length; a < n; a++)
                i.scrollUpdate(t[a]);
            },
            scrollDestroy: function(e, t) {
              var a = i.data(e).get("ps");
              a && (a.destroy(), (a = i.data(e).remove("ps"))),
                e &&
                  t &&
                  (e.style.setProperty("overflow", ""),
                  e.style.setProperty("height", ""));
            },
            filterBoolean: function(e) {
              return (
                !0 === e || "true" === e || (!1 !== e && "false" !== e && e)
              );
            },
            setHTML: function(e, t) {
              e.innerHTML = t;
            },
            getHTML: function(e) {
              if (e) return e.innerHTML;
            },
            getDocumentHeight: function() {
              var e = document.body,
                t = document.documentElement;
              return Math.max(
                e.scrollHeight,
                e.offsetHeight,
                t.clientHeight,
                t.scrollHeight,
                t.offsetHeight
              );
            },
            getScrollTop: function() {
              return (document.scrollingElement || document.documentElement)
                .scrollTop;
            },
            colorDarken: function(e, t) {
              var a = function(e, t) {
                var a = parseInt(e, 16) - t,
                  n = a < 0 ? 0 : a;
                return (n =
                  n.toString(16).length > 1
                    ? n.toString(16)
                    : "0".concat(n.toString(16)));
              };
              return (
                (e = e.indexOf("#") >= 0 ? e.substring(1, e.length) : e),
                (t = parseInt((255 * t) / 100)),
                "#"
                  .concat(a(e.substring(0, 2), t))
                  .concat(a(e.substring(2, 4), t))
                  .concat(a(e.substring(4, 6), t))
              );
            },
            colorLighten: function(e, t) {
              var a = function(e, t) {
                var a = parseInt(e, 16) + t,
                  n = a > 255 ? 255 : a;
                return (n =
                  n.toString(16).length > 1
                    ? n.toString(16)
                    : "0".concat(n.toString(16)));
              };
              return (
                (e = e.indexOf("#") >= 0 ? e.substring(1, e.length) : e),
                (t = parseInt((255 * t) / 100)),
                "#"
                  .concat(a(e.substring(0, 2), t))
                  .concat(a(e.substring(2, 4), t))
                  .concat(a(e.substring(4, 6), t))
              );
            },
            throttle: function(e, t, a) {
              e ||
                (e = setTimeout(function() {
                  t(), (e = void 0);
                }, a));
            },
            debounce: function(e, t, a) {
              clearTimeout(e), (e = setTimeout(t, a));
            },
            btnWait: function(e, t, a) {
              var n =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3];
              if (
                e &&
                (n && i.attr(e, "disabled", !0),
                t && (i.addClass(e, t), i.attr(e, "wait-class", t)),
                a)
              ) {
                var r = i.find(e, ".btn-caption");
                r
                  ? (i.data(r).set("caption", i.getHTML(r)), i.setHTML(r, a))
                  : (i.data(e).set("caption", i.getHTML(e)), i.setHTML(e, a));
              }
            },
            btnRelease: function(e) {
              if (e) {
                i.removeAttr(e, "disabled"),
                  i.hasAttr(e, "wait-class") &&
                    i.removeClass(e, i.attr(e, "wait-class"));
                var t = i.find(e, ".btn-caption");
                t && i.data(t).has("caption")
                  ? i.setHTML(t, i.data(t).get("caption"))
                  : i.data(e).has("caption") &&
                    i.setHTML(e, i.data(e).get("caption"));
              }
            },
            isOffscreen: function(e, t) {
              var a =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                n = i.getViewPort().width,
                r = i.getViewPort().height,
                l = i.offset(e).top,
                o = i.outerHeight(e) + a,
                s = i.offset(e).left,
                c = i.outerWidth(e) + a;
              if ("bottom" == t) {
                if (r < l + o) return !0;
                if (r > l + 1.5 * o) return !0;
              }
              if ("top" == t) {
                if (l < 0) return !0;
                if (l > o) return !0;
              }
              return ("left" == t && s < 0) || ("right" == t && n < s + c);
            },
          };
        })();
        e.exports,
          i.ready(function() {
            "undefined" !== typeof KTAppSettings
              ? i.init(KTAppSettings)
              : i.init();
          }),
          (window.onload = function() {
            var e = i.getByTagName("body");
            e && e[0] && i.removeClass(e[0], "page-loading");
          });
      }.call(this, a(101)(e)));
    },
    1051: function(e, t) {},
    1089: function(e, t) {},
    1091: function(e, t, a) {},
    1175: function(e, t, a) {},
    1176: function(e, t, a) {},
    1177: function(e, t, a) {},
    1178: function(e, t, a) {},
    1179: function(e, t, a) {},
    1180: function(e, t, a) {},
    1181: function(e, t, a) {},
    1184: function(e, t, a) {},
    1185: function(e, t, a) {},
    1187: function(e, t, a) {
      "use strict";
      a.r(t);
      a(550), a(560);
      var n = a(0),
        r = a.n(n),
        i = a(34),
        l = a.n(i),
        o = a(9),
        s = a.n(o),
        c = (a(511), a(54)),
        m = a(37),
        u = a(24),
        d = a(25),
        f = (function() {
          function e() {
            Object(u.a)(this, e);
          }
          return (
            Object(d.a)(e, [
              {
                key: "baseFilter",
                value: function(e, t) {
                  var a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [],
                    n = this.searchInArray(e, t.filter, a);
                  t.sortField &&
                    (n = this.sortArray(n, t.sortField, t.sortOrder));
                  var r = t.pageNumber - 1,
                    i = n.length,
                    l = r * t.pageSize,
                    o = {
                      entities: (n = n.slice(l, l + t.pageSize)),
                      totalCount: i,
                      errorMessage: "",
                    };
                  return o;
                },
              },
              {
                key: "sortArray",
                value: function(e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "asc";
                  if (!t) return e;
                  return e.sort(function(e, n) {
                    return e[t] < n[t]
                      ? "asc" === a
                        ? -1
                        : 1
                      : e[t] > n[t]
                      ? "asc" === a
                        ? 1
                        : -1
                      : 0;
                  });
                },
              },
              {
                key: "searchInArray",
                value: function(e, t) {
                  var a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [],
                    n = [],
                    r = [],
                    i = [],
                    l = [],
                    o = !1;
                  return (
                    a.forEach(function(a) {
                      a in t &&
                        (e.forEach(function(e, n) {
                          e[a] === t[a] && l.push(n);
                        }),
                        l.forEach(function(t) {
                          r.push(e[t]);
                        }),
                        (e = r.slice(0)),
                        (r = [].slice(0)),
                        (l = [].slice(0)));
                    }),
                    Object.keys(t).forEach(function(n) {
                      var r = t[n]
                        .toString()
                        .trim()
                        .toLowerCase();
                      if (
                        n &&
                        !a.some(function(e) {
                          return e === n;
                        }) &&
                        r
                      ) {
                        o = !0;
                        try {
                          e.forEach(function(e, t) {
                            (e[n] || (0 === e[n] && "0" === r)) &&
                              e[n]
                                .toString()
                                .trim()
                                .toLowerCase()
                                .indexOf(r) > -1 &&
                                -1 === i.indexOf(t) &&
                                i.push(t);
                          });
                        } catch (l) {
                          console.log(l, n, r);
                        }
                      }
                    }),
                    o
                      ? (i.forEach(function(t) {
                          n.push(e[t]);
                        }),
                        n)
                      : e
                  );
                },
              },
            ]),
            e
          );
        })();
      var E = a(59),
        p = a(543),
        g = a(513),
        b = a(300),
        h = a(60),
        v = a.n(h),
        y = a(164),
        C = a(51),
        N = a(514),
        T = a.n(N),
        O = "https://muntu-designs-api.herokuapp.com/api/v1/admin",
        S = "".concat(O, "/auth/sign_in"),
        M = "".concat(O, "/forgot_password");
      "".concat(O, "/me");
      var w = v.a.mark(P),
        x = "[Login] Action",
        A = "[Logout] Action",
        D = "[Register] Action",
        k = "[Request User] Action",
        L = "[Load User] Auth API",
        I = { user: void 0, authToken: void 0 },
        R = Object(b.a)(
          {
            storage: T.a,
            key: "muntu-dashboard",
            whitelist: ["user", "authToken"],
          },
          function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : I,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case x:
                var a = t.payload.authToken;
                return { authToken: a, user: a.data };
              case D:
                var n = t.payload.authToken;
                return { authToken: n, user: void 0 };
              case A:
                return I;
              case L:
                var r = t.payload.user;
                return Object(m.a)(Object(m.a)({}, e), {}, { user: r });
              default:
                return e;
            }
          }
        ),
        U = {
          login: function(e) {
            return { type: x, payload: { authToken: e } };
          },
          register: function(e) {
            return { type: D, payload: { authToken: e } };
          },
          logout: function() {
            return { type: A };
          },
          requestUser: function(e) {
            return { type: k, payload: { user: e } };
          },
          fulfillUser: function(e) {
            return { type: L, payload: { user: e } };
          },
        };
      function P() {
        return v.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.next = 2),
                  Object(y.c)(
                    x,
                    v.a.mark(function e() {
                      return v.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Object(y.b)(U.requestUser());
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 2:
                return (
                  (e.next = 4),
                  Object(y.c)(
                    D,
                    v.a.mark(function e() {
                      return v.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), Object(y.b)(U.requestUser());
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )
                );
              case 4:
              case "end":
                return e.stop();
            }
        }, w);
      }
      var _ = {
          listLoading: !1,
          actionsLoading: !1,
          totalCount: 0,
          entities: null,
          initial_entity: null,
          adminForEdit: void 0,
          lastError: null,
        },
        F = "list",
        j = "action",
        H = Object(E.b)({
          name: "admins",
          initialState: _,
          reducers: {
            catchError: function(e, t) {
              (e.error = "".concat(t.type, ": ").concat(t.payload.error)),
                t.payload.callType === F
                  ? (e.listLoading = !1)
                  : (e.actionsLoading = !1);
            },
            startCall: function(e, t) {
              (e.error = null),
                t.payload.callType === F
                  ? (e.listLoading = !0)
                  : (e.actionsLoading = !0);
            },
            adminFetched: function(e, t) {
              (e.actionsLoading = !1),
                (e.adminForEdit = t.payload.adminForEdit),
                (e.error = null);
            },
            fetchAdmins: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n),
                (e.initial_entity = r);
            },
            adminsFetched: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n);
            },
            adminCreated: function(e, t) {
              (e.actionsLoading = !1),
                (e.error = null),
                e.entities.push(t.payload.new_Admin);
            },
            adminUpdated: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.map(function(e) {
                  return e.id === t.payload.admins.id ? t.payload.admins : e;
                }));
            },
            adminDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return e.id !== t.payload.id;
                }));
            },
            adminsDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return !t.payload.ids.includes(e.id);
                }));
            },
            adminsStatusUpdated: function(e, t) {
              (e.actionsLoading = !1), (e.error = null);
              var a = t.payload,
                n = a.ids,
                r = a.status;
              e.entities = e.entities.map(function(e) {
                return (
                  n.findIndex(function(t) {
                    return t === e.id;
                  }) > -1 && (e.status = r),
                  e
                );
              });
            },
          },
        }),
        B = {
          listLoading: !1,
          actionsLoading: !1,
          totalCount: 0,
          entities: null,
          initial_entity: null,
          customerForEdit: void 0,
          lastError: null,
        },
        q = "list",
        z = "action",
        G = Object(E.b)({
          name: "customers",
          initialState: B,
          reducers: {
            catchError: function(e, t) {
              (e.error = "".concat(t.type, ": ").concat(t.payload.error)),
                t.payload.callType === q
                  ? (e.listLoading = !1)
                  : (e.actionsLoading = !1);
            },
            startCall: function(e, t) {
              (e.error = null),
                t.payload.callType === q
                  ? (e.listLoading = !0)
                  : (e.actionsLoading = !0);
            },
            customerFetched: function(e, t) {
              (e.actionsLoading = !1),
                (e.customerForEdit = t.payload.customerForEdit),
                (e.error = null);
            },
            fetchCustomers: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n),
                (e.initial_entity = r);
            },
            customersFetched: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n);
            },
            customerCreated: function(e, t) {
              (e.actionsLoading = !1),
                (e.error = null),
                e.entities.push(t.payload.new_customer);
            },
            customerUpdated: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.map(function(e) {
                  return e.id === t.payload.customer.id
                    ? t.payload.customer
                    : e;
                }));
            },
            customerDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return e.id !== t.payload.id;
                }));
            },
            customersDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return !t.payload.ids.includes(e.id);
                }));
            },
            customersStatusUpdated: function(e, t) {
              (e.actionsLoading = !1), (e.error = null);
              var a = t.payload,
                n = a.ids,
                r = a.status;
              e.entities = e.entities.map(function(e) {
                return (
                  n.findIndex(function(t) {
                    return t === e.id;
                  }) > -1 && (e.status = r),
                  e
                );
              });
            },
          },
        }),
        V = {
          listLoading: !1,
          actionsLoading: !1,
          totalCount: 0,
          entities: null,
          initial_entity: null,
          publisherForEdit: void 0,
          lastError: null,
        },
        W = "list",
        Q = "action",
        Y = Object(E.b)({
          name: "publishers",
          initialState: V,
          reducers: {
            catchError: function(e, t) {
              (e.error = "".concat(t.type, ": ").concat(t.payload.error)),
                t.payload.callType === W
                  ? (e.listLoading = !1)
                  : (e.actionsLoading = !1);
            },
            startCall: function(e, t) {
              (e.error = null),
                t.payload.callType === W
                  ? (e.listLoading = !0)
                  : (e.actionsLoading = !0);
            },
            PublisherFetched: function(e, t) {
              (e.actionsLoading = !1),
                (e.PublisherForEdit = t.payload.PublisherForEdit),
                (e.error = null);
            },
            fetchPublishers: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n),
                (e.initial_entity = r);
            },
            publishersFetched: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n);
            },
            publisherCreated: function(e, t) {
              (e.actionsLoading = !1),
                (e.error = null),
                e.entities.push(t.payload.new_publisher);
            },
            publisherUpdated: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.map(function(e) {
                  return e.id === t.payload.publishers.id
                    ? t.payload.publishers
                    : e;
                }));
            },
            publisherDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return e.id !== t.payload.id;
                }));
            },
            publishersDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return !t.payload.ids.includes(e.id);
                }));
            },
            publishersStatusUpdated: function(e, t) {
              (e.actionsLoading = !1), (e.error = null);
              var a = t.payload,
                n = a.ids,
                r = a.status;
              e.entities = e.entities.map(function(e) {
                return (
                  n.findIndex(function(t) {
                    return t === e.id;
                  }) > -1 && (e.status = r),
                  e
                );
              });
            },
          },
        }),
        K = {
          listLoading: !1,
          actionsLoading: !1,
          totalCount: 0,
          entities: null,
          productForEdit: void 0,
          lastError: null,
        },
        Z = "list",
        X = "action",
        J = Object(E.b)({
          name: "products",
          initialState: K,
          reducers: {
            catchError: function(e, t) {
              (e.error = "".concat(t.type, ": ").concat(t.payload.error)),
                t.payload.callType === Z
                  ? (e.listLoading = !1)
                  : (e.actionsLoading = !1);
            },
            startCall: function(e, t) {
              (e.error = null),
                t.payload.callType === Z
                  ? (e.listLoading = !0)
                  : (e.actionsLoading = !0);
            },
            productFetched: function(e, t) {
              (e.actionsLoading = !1),
                (e.productForEdit = t.payload.productForEdit),
                (e.error = null);
            },
            productsFetched: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n);
            },
            productCreated: function(e, t) {
              (e.actionsLoading = !1),
                (e.error = null),
                e.entities.push(t.payload.product);
            },
            productUpdated: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.map(function(e) {
                  return e.id === t.payload.product.id ? t.payload.product : e;
                }));
            },
            productDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return e.id !== t.payload.id;
                }));
            },
            productsDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return !t.payload.ids.includes(e.id);
                }));
            },
            productsStatusUpdated: function(e, t) {
              (e.actionsLoading = !1), (e.error = null);
              var a = t.payload,
                n = a.ids,
                r = a.status;
              e.entities = e.entities.map(function(e) {
                return (
                  n.findIndex(function(t) {
                    return t === e.id;
                  }) > -1 && (e.status = r),
                  e
                );
              });
            },
          },
        }),
        $ = {
          listLoading: !1,
          actionsLoading: !1,
          totalCount: 0,
          entities: null,
          remarkForEdit: void 0,
          lastError: null,
        },
        ee = "list",
        te = "action",
        ae = Object(E.b)({
          name: "remarks",
          initialState: $,
          reducers: {
            catchError: function(e, t) {
              (e.error = "".concat(t.type, ": ").concat(t.payload.error)),
                t.payload.callType === ee
                  ? (e.listLoading = !1)
                  : (e.actionsLoading = !1);
            },
            startCall: function(e, t) {
              (e.error = null),
                t.payload.callType === ee
                  ? (e.listLoading = !0)
                  : (e.actionsLoading = !0);
            },
            remarkFetched: function(e, t) {
              (e.actionsLoading = !1),
                (e.remarkForEdit = t.payload.remarkForEdit),
                (e.error = null);
            },
            remarksFetched: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n);
            },
            remarkCreated: function(e, t) {
              (e.actionsLoading = !1),
                (e.error = null),
                e.entities.push(t.payload.remark);
            },
            remarkUpdated: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.map(function(e) {
                  return e.id === t.payload.remark.id ? t.payload.remark : e;
                }));
            },
            remarkDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return e.id !== t.payload.id;
                }));
            },
            remarksDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return !t.payload.ids.includes(e.id);
                }));
            },
            remarksStatusUpdated: function(e, t) {
              (e.actionsLoading = !1), (e.error = null);
              var a = t.payload,
                n = a.ids,
                r = a.status;
              e.entities = e.entities.map(function(e) {
                return (
                  n.findIndex(function(t) {
                    return t === e.id;
                  }) > -1 && (e.status = r),
                  e
                );
              });
            },
          },
        }),
        ne = {
          listLoading: !1,
          actionsLoading: !1,
          totalCount: 0,
          entities: null,
          specificationForEdit: void 0,
          lastError: null,
        },
        re = "list",
        ie = "action",
        le = Object(E.b)({
          name: "specifications",
          initialState: ne,
          reducers: {
            catchError: function(e, t) {
              (e.error = "".concat(t.type, ": ").concat(t.payload.error)),
                t.payload.callType === re
                  ? (e.listLoading = !1)
                  : (e.actionsLoading = !1);
            },
            startCall: function(e, t) {
              (e.error = null),
                t.payload.callType === re
                  ? (e.listLoading = !0)
                  : (e.actionsLoading = !0);
            },
            specificationFetched: function(e, t) {
              (e.actionsLoading = !1),
                (e.specificationForEdit = t.payload.specificationForEdit),
                (e.error = null);
            },
            specificationsFetched: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n);
            },
            specificationCreated: function(e, t) {
              (e.actionsLoading = !1),
                (e.error = null),
                e.entities.push(t.payload.specification);
            },
            specificationUpdated: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.map(function(e) {
                  return e.id === t.payload.specification.id
                    ? t.payload.specification
                    : e;
                }));
            },
            specificationDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return e.id !== t.payload.id;
                }));
            },
            specificationsDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return !t.payload.ids.includes(e.id);
                }));
            },
          },
        }),
        oe = {
          listLoading: !1,
          actionsLoading: !1,
          totalCount: 0,
          entities: null,
          initial_entity: null,
          promotionForEdit: void 0,
          lastError: null,
        },
        se = "list",
        ce = "action",
        me = Object(E.b)({
          name: "promotions",
          initialState: oe,
          reducers: {
            catchError: function(e, t) {
              (e.error = "".concat(t.type, ": ").concat(t.payload.error)),
                t.payload.callType === se
                  ? (e.listLoading = !1)
                  : (e.actionsLoading = !1);
            },
            startCall: function(e, t) {
              (e.error = null),
                t.payload.callType === se
                  ? (e.listLoading = !0)
                  : (e.actionsLoading = !0);
            },
            promotionFetched: function(e, t) {
              (e.actionsLoading = !1),
                (e.promotionForEdit = t.payload.promotionForEdit),
                (e.error = null);
            },
            fetchPromos: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n),
                (e.initial_entity = r);
            },
            promotionsFetched: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n);
            },
            promotionCreated: function(e, t) {
              (e.actionsLoading = !1),
                (e.error = null),
                e.entities.push(t.payload.promotion);
            },
            promotionUpdated: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.map(function(e) {
                  return e.id === t.payload.promotion.id
                    ? t.payload.promotion
                    : e;
                }));
            },
            promotionDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return e.id !== t.payload.id;
                }));
            },
            promotionsDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return !t.payload.ids.includes(e.id);
                }));
            },
            promotionsStatusUpdated: function(e, t) {
              (e.actionsLoading = !1), (e.error = null);
              var a = t.payload,
                n = a.ids,
                r = a.status;
              e.entities = e.entities.map(function(e) {
                return (
                  n.findIndex(function(t) {
                    return t === e.id;
                  }) > -1 && (e.status = r),
                  e
                );
              });
            },
          },
        }),
        ue = {
          listLoading: !1,
          actionsLoading: !1,
          totalCount: 0,
          entities: null,
          discountForEdit: void 0,
          lastError: null,
        },
        de = "list",
        fe = Object(E.b)({
          name: "discounts",
          initialState: ue,
          reducers: {
            catchError: function(e, t) {
              (e.error = "".concat(t.type, ": ").concat(t.payload.error)),
                t.payload.callType === de
                  ? (e.listLoading = !1)
                  : (e.actionsLoading = !1);
            },
            startCall: function(e, t) {
              (e.error = null),
                t.payload.callType === de
                  ? (e.listLoading = !0)
                  : (e.actionsLoading = !0);
            },
            discountFetched: function(e, t) {
              (e.actionsLoading = !1),
                (e.discountForEdit = t.payload.discountForEdit),
                (e.error = null);
            },
            discountsFetched: function(e, t) {
              var a = t.payload,
                n = a.totalCount,
                r = a.entities;
              (e.listLoading = !1),
                (e.error = null),
                (e.entities = r),
                (e.totalCount = n);
            },
            discountCreated: function(e, t) {
              (e.actionsLoading = !1),
                (e.error = null),
                e.entities.push(t.payload.discount);
            },
            discountUpdated: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.map(function(e) {
                  return e.id === t.payload.discount.id
                    ? t.payload.discount
                    : e;
                }));
            },
            discountDeleted: function(e, t) {
              (e.error = null),
                (e.actionsLoading = !1),
                (e.entities = e.entities.filter(function(e) {
                  return e.id !== t.payload.id;
                }));
            },
            discountsStatusUpdated: function(e, t) {
              (e.actionsLoading = !1), (e.error = null);
              var a = t.payload,
                n = a.ids,
                r = a.status;
              e.entities = e.entities.map(function(e) {
                return (
                  n.findIndex(function(t) {
                    return t === e.id;
                  }) > -1 && (e.status = r),
                  e
                );
              });
            },
          },
        }),
        Ee = v.a.mark(ge),
        pe = Object(C.c)({
          auth: R,
          admins: H.reducer,
          customers: G.reducer,
          publishers: Y.reducer,
          products: J.reducer,
          remarks: ae.reducer,
          specifications: le.reducer,
          promotions: me.reducer,
          discounts: fe.reducer,
        });
      function ge() {
        return v.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(y.a)([P()]);
              case 2:
              case "end":
                return e.stop();
            }
        }, Ee);
      }
      var be = Object(p.a)(),
        he = [].concat(
          Object(c.a)(
            Object(E.c)({
              immutableCheck: !1,
              serializableCheck: !1,
              thunk: !0,
            })
          ),
          [be]
        ),
        ve = Object(E.a)({
          reducer: pe,
          middleware: he,
          devTools: !1,
          enhancers: [g.reduxBatch],
        }),
        ye = Object(b.b)(ve);
      be.run(ge);
      var Ce = ve,
        Ne = a(3),
        Te = a(23),
        Oe = a(515),
        Se = a(112),
        Me = a(11),
        we = a.n(Me),
        xe = a(30),
        Ae = a(29);
      var De = function(e) {
        return "" + e;
      };
      function ke(e, t) {
        var a = (function(e) {
          return e.pathname.split(/[?#]/)[0];
        })(e);
        return !(!a || !t) && (a === t || a.indexOf(t) > -1);
      }
      function Le(e) {
        return function(t, a) {
          var n = a.page,
            r = a.sizePerPage,
            i = a.sortField,
            l = a.sortOrder,
            o = (a.data, n || 1);
          e(function(e) {
            return "sort" === t
              ? Object(m.a)(
                  Object(m.a)({}, e),
                  {},
                  { sortOrder: l, sortField: i }
                )
              : "pagination" === t
              ? Object(m.a)(
                  Object(m.a)({}, e),
                  {},
                  { pageNumber: o, pageSize: r }
                )
              : e;
          });
        };
      }
      function Ie(e) {
        var t = e.entities;
        return r.a.createElement(
          r.a.Fragment,
          null,
          null === t && r.a.createElement("div", null, "Please wait...")
        );
      }
      function Re(e) {
        var t = e.entities,
          a = null === t ? [] : t;
        return r.a.createElement(
          r.a.Fragment,
          null,
          0 === a.length &&
            null !== t &&
            r.a.createElement("div", null, "No records found")
        );
      }
      function Ue(e) {
        var t = e.isSelected,
          a = e.onChange;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement("input", {
            type: "checkbox",
            style: { display: "none" },
          }),
          r.a.createElement(
            "label",
            { className: "checkbox checkbox-single" },
            r.a.createElement("input", {
              type: "checkbox",
              checked: t,
              onChange: a,
            }),
            r.a.createElement("span", null)
          )
        );
      }
      function Pe(e) {
        var t = e.entities,
          a = e.ids,
          n = e.setIds;
        return {
          mode: "checkbox",
          clickToSelect: !0,
          hideSelectAll: !1,
          selectionHeaderRenderer: function() {
            var e = t && t.length > 0 && t.length === a.length,
              i = { isSelected: e, entities: t, setIds: n };
            return r.a.createElement(Ue, {
              isSelected: e,
              onChange: function() {
                return (function(e) {
                  var t = e.isSelected,
                    a = e.setIds,
                    n = e.entities;
                  if (t) a([]);
                  else {
                    var r = [];
                    n.forEach(function(e) {
                      return r.push(e.id);
                    }),
                      a(r);
                  }
                  return t;
                })(i);
              },
            });
          },
          selectionRenderer: function(e) {
            var i = e.rowIndex,
              l = a.some(function(e) {
                return e === t[i].id;
              }),
              o = { ids: a, setIds: n, customerId: t[i].id };
            return r.a.createElement(Ue, {
              isSelected: l,
              onChange: function() {
                return (function(e) {
                  var t = e.ids,
                    a = e.setIds,
                    n = e.customerId;
                  if (
                    t.some(function(e) {
                      return e === n;
                    })
                  )
                    a(
                      t.filter(function(e) {
                        return e !== n;
                      })
                    );
                  else {
                    var r = Object(c.a)(t);
                    r.push(n), a(r);
                  }
                })(o);
              },
            });
          },
        };
      }
      var _e = a(14),
        Fe = a.n(_e),
        je = function(e, t) {
          return e
            ? "asc" === e
              ? r.a.createElement(
                  "span",
                  { className: "svg-icon svg-icon-sm svg-icon-primary ml-1" },
                  r.a.createElement(Fe.a, {
                    src: De("/media/svg/icons/Navigation/Up-2.svg"),
                  })
                )
              : "desc" === e
              ? r.a.createElement(
                  "span",
                  { className: "svg-icon svg-icon-sm svg-icon-primary ml-1" },
                  r.a.createElement(Fe.a, {
                    src: De("/media/svg/icons/Navigation/Down-2.svg"),
                  })
                )
              : null
            : r.a.createElement(
                "span",
                {
                  className:
                    "svg-icon svg-icon-sm svg-icon-primary ml-1 svg-icon-sort",
                },
                r.a.createElement(Fe.a, {
                  src: De("/media/svg/icons/Shopping/Sort1.svg"),
                })
              );
        },
        He = function(e, t, a, n) {
          return "asc" === t || "desc" === t ? "sortable-active" : "";
        };
      function Be() {
        return {
          demo: "demo1",
          js: {
            breakpoints: {
              sm: "576",
              md: "768",
              lg: "992",
              xl: "1200",
              xxl: "1200",
            },
            colors: {
              theme: {
                base: {
                  white: "#ffffff",
                  primary: "#6993FF",
                  secondary: "#E5EAEE",
                  success: "#1BC5BD",
                  info: "#8950FC",
                  warning: "#FFA800",
                  danger: "#F64E60",
                  light: "#F3F6F9",
                  dark: "#212121",
                },
                light: {
                  white: "#ffffff",
                  primary: "#E1E9FF",
                  secondary: "#ECF0F3",
                  success: "#C9F7F5",
                  info: "#EEE5FF",
                  warning: "#FFF4DE",
                  danger: "#FFE2E5",
                  light: "#F3F6F9",
                  dark: "#D6D6E0",
                },
                inverse: {
                  white: "#ffffff",
                  primary: "#ffffff",
                  secondary: "#212121",
                  success: "#ffffff",
                  info: "#ffffff",
                  warning: "#ffffff",
                  danger: "#ffffff",
                  light: "#464E5F",
                  dark: "#ffffff",
                },
              },
              gray: {
                gray100: "#F3F6F9",
                gray200: "#ECF0F3",
                gray300: "#E5EAEE",
                gray400: "#D6D6E0",
                gray500: "#B5B5C3",
                gray600: "#80808F",
                gray700: "#464E5F",
                gray800: "#1B283F",
                gray900: "#212121",
              },
            },
            fontFamily: "Poppins",
          },
          loader: {
            enabled: !0,
            type: "",
            logo: De("/media/logos/logo-dark-sm.png"),
            message: "Please wait...",
          },
          toolbar: { display: !0 },
          header: {
            self: {
              width: "fluid",
              theme: "light",
              fixed: { desktop: !0, mobile: !0 },
            },
            menu: {
              self: {
                display: !0,
                layout: "default",
                "root-arrow": !1,
                "icon-style": "duotone",
              },
              desktop: {
                arrow: !0,
                toggle: "click",
                submenu: { theme: "light", arrow: !0 },
              },
              mobile: { submenu: { theme: "dark", accordion: !0 } },
            },
          },
          subheader: {
            display: !0,
            displayDesc: !1,
            displayDaterangepicker: !0,
            layout: "subheader-v1",
            fixed: !0,
            width: "fluid",
            clear: !1,
            style: "solid",
          },
          content: { width: "fixed" },
          brand: { self: { theme: "dark" } },
          aside: {
            self: {
              theme: "dark",
              display: !0,
              fixed: !0,
              minimize: { toggle: !0, default: !1, hoverable: !0 },
            },
            footer: { self: { display: !0 } },
            menu: {
              dropdown: !1,
              scroll: !0,
              "icon-style": "duotone",
              submenu: {
                accordion: !0,
                dropdown: { arrow: !0, "hover-timeout": 500 },
              },
            },
          },
          footer: { self: { fixed: !0, width: "fluid" } },
          extras: {
            search: {
              display: !0,
              layout: "dropdown",
              offcanvas: { direction: "right" },
            },
            notifications: {
              display: !0,
              layout: "dropdown",
              dropdown: { style: "dark" },
              offcanvas: { directions: "right" },
            },
            "quick-actions": {
              display: !0,
              layout: "dropdown",
              dropdown: { style: "dark" },
              offcanvas: { directions: "right" },
            },
            user: {
              display: !0,
              layout: "offcanvas",
              dropdown: { style: "dark" },
              offcanvas: { directions: "right" },
            },
            languages: { display: !0 },
            cart: { display: !0, dropdown: { style: "dark" } },
            "quick-panel": { display: !0, offcanvas: { directions: "right" } },
            chat: { display: !0 },
            toolbar: { display: !0 },
            scrolltop: { display: !0 },
          },
        };
      }
      var qe = (function() {
          function e() {
            Object(u.a)(this, e);
          }
          return (
            Object(d.a)(e, [
              {
                key: "setConfig",
                value: function(e) {
                  (this.config = this.preInit(e)),
                    (this.classes = {
                      header: [],
                      header_container: [],
                      header_mobile: [],
                      header_menu: [],
                      aside: [],
                      aside_menu: [],
                      subheader: [],
                      subheader_container: [],
                      content: [],
                      content_container: [],
                      footer_container: [],
                    }),
                    (this.attributes = {
                      aside_menu: {},
                      header_mobile: {},
                      header_menu: {},
                    }),
                    this.initLayout(),
                    this.initLoader(),
                    this.initHeader(),
                    this.initSubheader(),
                    this.initContent(),
                    this.initAside(),
                    this.initFooter(),
                    this.initTheme();
                },
              },
              {
                key: "preInit",
                value: function(e) {
                  var t = Object.assign({}, e),
                    a = we.a.get(t, "header.self.fixed.desktop");
                  return (
                    we.a.get(t, "subheader.fixed") && a
                      ? (t.subheader.style = "solid")
                      : (t.subheader.fixed = !1),
                    t
                  );
                },
              },
              {
                key: "getClasses",
                value: function(e, t) {
                  if (e) {
                    var a = we.a.get(this.classes, e) || "";
                    return t && Array.isArray(a) ? a.join(" ") : a.toString();
                  }
                  return this.classes;
                },
              },
              {
                key: "getAttributes",
                value: function(e) {
                  return (e && we.a.get(this.attributes, e)) || [];
                },
              },
              {
                key: "getLogo",
                value: function() {
                  var e = we.a.get(this.config, "brand.self.theme");
                  return De(
                    "light" === e
                      ? "/media/logos/logo-dark.png"
                      : "/media/logos/logo-light.png"
                  );
                },
              },
              {
                key: "getStickyLogo",
                value: function() {
                  var e = we.a.get(this.config, "self.logo.sticky");
                  return (
                    "undefined" === typeof e && (e = this.getLogo()), e + ""
                  );
                },
              },
              {
                key: "initLayout",
                value: function() {
                  var e = we.a.get(this.config, "self.body.background-image");
                  e &&
                    (document.body.style.backgroundImage = 'url("'.concat(
                      e,
                      "'\")"
                    ));
                  var t = we.a.get(this.config, "self.body.class");
                  t &&
                    t
                      .toString()
                      .split(" ")
                      .forEach(function(e) {
                        return document.body.classList.add(e);
                      });
                  document.body.classList.add("quick-panel-right"),
                    document.body.classList.add("demo-panel-right"),
                    document.body.classList.add("offcanvas-right");
                },
              },
              { key: "initLoader", value: function() {} },
              {
                key: "initHeader",
                value: function() {
                  if (
                    (we.a.get(this.config, "header.self.fixed.desktop")
                      ? (document.body.classList.add("header-fixed"),
                        we.a.push(this.classes, "header", "header-fixed"))
                      : document.body.classList.add("header-static"),
                    we.a.get(this.config, "header.self.fixed.mobile") &&
                      (document.body.classList.add("header-mobile-fixed"),
                      we.a.push(
                        this.classes,
                        "header_mobile",
                        "header-mobile-fixed"
                      )),
                    we.a.get(this.config, "header.menu.self.display"))
                  ) {
                    var e = we.a.get(this.config, "header.menu.self.layout"),
                      t = "header-menu-layout-".concat(e);
                    we.a.push(this.classes, "header_menu", t),
                      we.a.get(this.config, "header.menu.self.root-arrow") &&
                        we.a.push(
                          this.classes,
                          "header_menu",
                          "header-menu-root-arrow"
                        );
                  }
                  "fluid" === we.a.get(this.config, "header.self.width")
                    ? we.a.push(
                        this.classes,
                        "header_container",
                        "container-fluid"
                      )
                    : we.a.push(this.classes, "header_container", "container");
                },
              },
              {
                key: "initSubheader",
                value: function() {
                  if (we.a.get(this.config, "subheader.display")) {
                    document.body.classList.add("subheader-enabled");
                    var e = we.a.get(this.config, "subheader.fixed"),
                      t = we.a.get(this.config, "header.self.fixed.desktop");
                    e && t && document.body.classList.add("subheader-fixed");
                    var a = we.a.get(this.config, "subheader.style");
                    if (a) {
                      var n = "subheader-".concat(a);
                      we.a.push(this.classes, "subheader", n);
                    }
                    "fluid" === we.a.get(this.config, "subheader.width")
                      ? we.a.push(
                          this.classes,
                          "subheader_container",
                          "container-fluid"
                        )
                      : we.a.push(
                          this.classes,
                          "subheader_container",
                          "container"
                        ),
                      we.a.get(this.config, "subheader.clear") &&
                        we.a.push(this.classes, "subheader", "mb-0");
                  }
                },
              },
              {
                key: "initContent",
                value: function() {
                  we.a.get(this.config, "content.fit-top") &&
                    we.a.push(this.classes, "content", "pt-0"),
                    we.a.get(this.config, "content.fit-bottom") &&
                      we.a.push(this.classes, "content", "pb-0"),
                    "fluid" === we.a.get(this.config, "content.width")
                      ? we.a.push(
                          this.classes,
                          "content_container",
                          "container-fluid"
                        )
                      : we.a.push(
                          this.classes,
                          "content_container",
                          "container"
                        );
                },
              },
              {
                key: "initAside",
                value: function() {
                  var e = we.a.get(this.config, "aside.self.display");
                  if (
                    e &&
                    (document.body.classList.add("aside-enabled"),
                    we.a.get(this.config, "aside.self.fixed")
                      ? (document.body.classList.add("aside-fixed"),
                        we.a.push(this.classes, "aside", "aside-fixed"))
                      : document.body.classList.add("aside-static"),
                    e)
                  ) {
                    we.a.get(this.config, "aside.self.minimize.default") &&
                      document.body.classList.add("aside-minimize"),
                      we.a.get(this.config, "aside.self.minimize.hoverable") &&
                        document.body.classList.add("aside-minimize-hoverable");
                    var t = we.a.get(this.config, "aside.menu.dropdown");
                    t &&
                      (we.a.push(
                        this.classes,
                        "aside_menu",
                        "aside-menu-dropdown"
                      ),
                      (this.attributes.aside_menu["data-menu-dropdown"] = "1")),
                      (this.attributes.aside_menu["data-menu-scroll"] = t
                        ? "0"
                        : "1");
                    var a = we.a.get(
                      this.config,
                      "aside.menu.submenu.dropdown.hover-timeout"
                    );
                    a &&
                      (this.attributes.aside_menu[
                        "data-menu-dropdown-timeout"
                      ] = a);
                  }
                },
              },
              {
                key: "initFooter",
                value: function() {
                  we.a.get(this.config, "footer.fixed") &&
                    document.body.classList.add("footer-fixed"),
                    "fluid" === we.a.get(this.config, "footer.self.width")
                      ? we.a.push(
                          this.classes,
                          "footer_container",
                          "container-fluid"
                        )
                      : we.a.push(
                          this.classes,
                          "footer_container",
                          "container"
                        );
                },
              },
              {
                key: "initTheme",
                value: function() {
                  if (we.a.get(this.config, "aside.self.display")) {
                    var e = we.a.get(this.config, "brand.self.theme");
                    document.body.classList.add("brand-".concat(e));
                  } else {
                    var t = we.a.get(this.config, "header.self.theme");
                    document.body.classList.add("brand-".concat(t));
                  }
                },
              },
            ]),
            e
          );
        })(),
        ze =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            REACT_APP_BASE_URL:
              "https://muntu-designs-api.herokuapp.com/api/v1/admin",
          }).REACT_APP_LAYOUT_CONFIG_KEY || "LayoutConfig";
      function Ge() {
        var e = localStorage.getItem(ze);
        if (e)
          try {
            return JSON.parse(e);
          } catch (t) {
            console.error(t);
          }
        return Be();
      }
      var Ve = Object(n.createContext)();
      function We() {
        return Object(n.useContext)(Ve);
      }
      Ve.Consumer;
      function Qe(e) {
        var t = e.children,
          a = Object(n.useMemo)(Ge, []),
          i = Object(n.useMemo)(
            function() {
              var e = new qe();
              return e.setConfig(a), e;
            },
            [a]
          );
        return r.a.createElement(Ve.Provider, { value: i }, t);
      }
      var Ye = a(8),
        Ke = a(22),
        Ze = a(96),
        Xe = a(1229),
        Je = a(1217);
      a(156);
      function $e() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "ul",
            { className: "navi navi-hover" },
            r.a.createElement(
              "li",
              { className: "navi-header font-weight-bold py-5" },
              r.a.createElement(
                "span",
                { className: "font-size-lg" },
                "Choose Label:"
              ),
              r.a.createElement("i", {
                className: "flaticon2-information icon-md text-muted",
                "data-toggle": "tooltip",
                "data-placement": "right",
                title: "Click to learn more...",
              })
            ),
            r.a.createElement("li", {
              className: "navi-separator mb-3 opacity-70",
            }),
            r.a.createElement(
              "li",
              { className: "navi-item" },
              r.a.createElement(
                "a",
                { href: "#", className: "navi-link" },
                r.a.createElement(
                  "span",
                  { className: "navi-text" },
                  r.a.createElement(
                    "span",
                    {
                      className:
                        "label label-xl label-inline label-light-success",
                    },
                    "Customer"
                  )
                )
              )
            ),
            r.a.createElement(
              "li",
              { className: "navi-item" },
              r.a.createElement(
                "a",
                { href: "#", className: "navi-link" },
                r.a.createElement(
                  "span",
                  { className: "navi-text" },
                  r.a.createElement(
                    "span",
                    {
                      className:
                        "label label-xl label-inline label-light-danger",
                    },
                    "Partner"
                  )
                )
              )
            ),
            r.a.createElement(
              "li",
              { className: "navi-item" },
              r.a.createElement(
                "a",
                { href: "#", className: "navi-link" },
                r.a.createElement(
                  "span",
                  { className: "navi-text" },
                  r.a.createElement(
                    "span",
                    {
                      className:
                        "label label-xl label-inline label-light-warning",
                    },
                    "Suplier"
                  )
                )
              )
            ),
            r.a.createElement(
              "li",
              { className: "navi-item" },
              r.a.createElement(
                "a",
                { href: "#", className: "navi-link" },
                r.a.createElement(
                  "span",
                  { className: "navi-text" },
                  r.a.createElement(
                    "span",
                    {
                      className:
                        "label label-xl label-inline label-light-primary",
                    },
                    "Member"
                  )
                )
              )
            ),
            r.a.createElement(
              "li",
              { className: "navi-item" },
              r.a.createElement(
                "a",
                { href: "#", className: "navi-link" },
                r.a.createElement(
                  "span",
                  { className: "navi-text" },
                  r.a.createElement(
                    "span",
                    {
                      className: "label label-xl label-inline label-light-dark",
                    },
                    "Staff"
                  )
                )
              )
            ),
            r.a.createElement("li", {
              className: "navi-separator mt-3 opacity-70",
            }),
            r.a.createElement(
              "li",
              { className: "navi-footer pt-5 pb-4" },
              r.a.createElement(
                "a",
                {
                  className: "btn btn-clean font-weight-bold btn-sm",
                  href: "#",
                },
                r.a.createElement("i", { className: "ki ki-plus icon-sm" }),
                "Add new"
              )
            )
          )
        );
      }
      r.a.forwardRef(function(e, t) {
        return r.a.createElement(
          "a",
          {
            ref: t,
            className: "btn btn-clean btn-hover-light-primary btn-sm btn-icon",
            onClick: function(t) {
              t.preventDefault(), e.onClick(t);
            },
          },
          e.children
        );
      });
      var et = r.a.forwardRef(function(e, t) {
        return r.a.createElement(
          "div",
          {
            ref: t,
            className: "topbar-item",
            onClick: function(t) {
              t.preventDefault(), e.onClick(t);
            },
          },
          e.children
        );
      });
      et.displayName = "DropdownTopbarItemToggler";
      De("/media/files/doc.svg"),
        De("/media/files/pdf.svg"),
        De("/media/files/zip.svg"),
        De("/media/files/xml.svg"),
        De("/media/users/300_11.jpg"),
        De("/media/users/300_16.jpg"),
        De("/media/users/300_22.jpg"),
        De("/media/users/300_5.jpg");
      var tt = a(371);
      a(544);
      function at() {
        var e = De("/media/misc/bg-2.jpg"),
          t = We(),
          a = Object(n.useMemo)(
            function() {
              return {
                offcanvas:
                  "offcanvas" ===
                  we.a.get(t.config, "extras.quick-actions.layout"),
              };
            },
            [t]
          );
        return r.a.createElement(
          r.a.Fragment,
          null,
          a.offcanvas &&
            r.a.createElement(
              Xe.a,
              {
                placement: "left",
                overlay: r.a.createElement(
                  Je.a,
                  { id: "quick-actions-tooltip" },
                  "Quick actions"
                ),
              },
              r.a.createElement(
                "div",
                { className: "topbar-item" },
                r.a.createElement(
                  "div",
                  {
                    className:
                      "btn btn-icon btn-clean btn-dropdown btn-lg mr-1",
                    id: "kt_quick_actions_toggle",
                  },
                  r.a.createElement(
                    "span",
                    { className: "svg-icon svg-icon-xl svg-icon-primary" },
                    r.a.createElement(Fe.a, {
                      src: De("/media/svg/icons/Media/Equalizer.svg"),
                    })
                  )
                )
              )
            ),
          !a.offcanvas &&
            r.a.createElement(
              Ze.a,
              { drop: "down", alignRight: !0 },
              r.a.createElement(
                Ze.a.Toggle,
                { as: et, id: "kt_quick_actions_panel_toggle" },
                r.a.createElement(
                  Xe.a,
                  {
                    placement: "bottom",
                    overlay: r.a.createElement(
                      Je.a,
                      { id: "quick-actions-tooltip" },
                      "Quick actions"
                    ),
                  },
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "btn btn-icon btn-clean btn-dropdown btn-lg mr-1",
                    },
                    r.a.createElement(
                      "span",
                      { className: "svg-icon svg-icon-xl svg-icon-primary" },
                      r.a.createElement(Fe.a, {
                        src: De("/media/svg/icons/Media/Equalizer.svg"),
                      })
                    )
                  )
                )
              ),
              r.a.createElement(
                Ze.a.Menu,
                {
                  className:
                    "p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg",
                },
                r.a.createElement(
                  "form",
                  null,
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "d-flex flex-column align-items-center justify-content-center pt-10 pb-10 bgi-size-cover bgi-no-repeat rounded-top",
                      style: { backgroundImage: "url(".concat(e, ")") },
                    },
                    r.a.createElement(
                      "h3",
                      { className: "text-white font-weight-bold font-size-5" },
                      "Quick Actions"
                    ),
                    r.a.createElement(
                      "span",
                      {
                        className:
                          "btn btn-success btn-sm btn-bold btn-font-md mt-2",
                      },
                      "23 tasks pending"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "row row-paddingless" },
                    r.a.createElement(
                      "div",
                      { className: "col-6" },
                      r.a.createElement(
                        "a",
                        {
                          href: "#",
                          className:
                            "d-block py-10 px-5 text-center bg-hover-light border-right border-bottom",
                        },
                        r.a.createElement(
                          "span",
                          {
                            className: "svg-icon svg-icon-3x svg-icon-success",
                          },
                          r.a.createElement(Fe.a, {
                            src: De("/media/svg/icons/Shopping/Euro.svg"),
                          })
                        ),
                        r.a.createElement(
                          "span",
                          {
                            className:
                              "d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1",
                          },
                          "Accounting"
                        ),
                        r.a.createElement(
                          "span",
                          { className: "d-block text-dark-50 font-size-lg" },
                          "eCommerce"
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-6" },
                      r.a.createElement(
                        "a",
                        {
                          href: "#",
                          className:
                            "d-block py-10 px-5 text-center bg-hover-light border-bottom",
                        },
                        " ",
                        r.a.createElement(
                          "span",
                          {
                            className: "svg-icon svg-icon-3x svg-icon-success",
                          },
                          r.a.createElement(Fe.a, {
                            src: De(
                              "/media/svg/icons/Communication/Mail-attachment.svg"
                            ),
                          })
                        ),
                        r.a.createElement(
                          "span",
                          {
                            className:
                              "d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1",
                          },
                          "Administration"
                        ),
                        r.a.createElement(
                          "span",
                          { className: "d-block text-dark-50 font-size-lg" },
                          "Console"
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-6" },
                      r.a.createElement(
                        "a",
                        {
                          href: "#",
                          className:
                            "d-block py-10 px-5 text-center bg-hover-light border-right",
                        },
                        r.a.createElement(
                          "span",
                          {
                            className: "svg-icon svg-icon-3x svg-icon-success",
                          },
                          r.a.createElement(Fe.a, {
                            src: De("/media/svg/icons/Shopping/Box2.svg"),
                          })
                        ),
                        r.a.createElement(
                          "span",
                          {
                            className:
                              "d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1",
                          },
                          "Projects"
                        ),
                        r.a.createElement(
                          "span",
                          { className: "d-block text-dark-50 font-size-lg" },
                          "Pending Tasks"
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-6" },
                      r.a.createElement(
                        "a",
                        {
                          href: "#",
                          className:
                            "d-block py-10 px-5 text-center bg-hover-light",
                        },
                        r.a.createElement(
                          "span",
                          {
                            className: "svg-icon svg-icon-3x svg-icon-success",
                          },
                          r.a.createElement(Fe.a, {
                            src: De("/media/svg/icons/Communication/Group.svg"),
                          })
                        ),
                        r.a.createElement(
                          "span",
                          {
                            className:
                              "d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1",
                          },
                          "Customers"
                        ),
                        r.a.createElement(
                          "span",
                          { className: "d-block text-dark-50 font-size-lg" },
                          "Latest cases"
                        )
                      )
                    )
                  )
                )
              )
            )
        );
      }
      var nt =
          Object({
            NODE_ENV: "production",
            PUBLIC_URL: "",
            REACT_APP_BASE_URL:
              "https://muntu-designs-api.herokuapp.com/api/v1/admin",
          }).REACT_APP_I18N_CONFIG_KEY || "i18nConfig",
        rt = { selectedLang: "en" };
      function it() {
        var e = localStorage.getItem(nt);
        if (e)
          try {
            return JSON.parse(e);
          } catch (t) {
            console.error(t);
          }
        return rt;
      }
      var lt = Object(n.createContext)();
      function ot() {
        return Object(n.useContext)(lt).selectedLang;
      }
      lt.Consumer;
      function st(e) {
        var t = e.children,
          a = Object(n.useMemo)(it, []);
        return r.a.createElement(lt.Provider, { value: a }, t);
      }
      var ct = a(1227),
        mt =
          (a(781),
          a(784),
          a(785),
          a(786),
          a(787),
          a(788),
          a(789),
          {
            de: a(518),
            en: a(519),
            es: a(520),
            fr: a(521),
            ja: a(522),
            zh: a(523),
          });
      function ut(e) {
        var t = e.children,
          a = ot(),
          n = mt[a];
        return r.a.createElement(ct.a, { locale: a, messages: n }, t);
      }
      De("/media/svg/flags/226-united-states.svg"),
        De("/media/svg/flags/015-china.svg"),
        De("/media/svg/flags/128-spain.svg"),
        De("/media/svg/flags/063-japan.svg"),
        De("/media/svg/flags/162-germany.svg"),
        De("/media/svg/flags/195-france.svg");
      function dt() {
        var e = Object(Ne.e)(function(e) {
            return e.auth;
          }).user,
          t = We(),
          a = Object(n.useMemo)(
            function() {
              return {
                light:
                  "light" === we.a.get(t.config, "extras.user.dropdown.style"),
              };
            },
            [t]
          );
        return r.a.createElement(
          Ze.a,
          { drop: "down", alignRight: !0 },
          r.a.createElement(
            Ze.a.Toggle,
            { as: et, id: "dropdown-toggle-user-profile" },
            r.a.createElement(
              "div",
              {
                className:
                  "btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2",
              },
              r.a.createElement(
                "span",
                {
                  className:
                    "text-muted font-weight-bold font-size-base d-none d-md-inline mr-1",
                },
                "Hi,"
              ),
              r.a.createElement(
                "span",
                {
                  className:
                    "text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3",
                },
                e.fullname
              ),
              r.a.createElement(
                "span",
                { className: "symbol symbol-35 symbol-light-success" },
                r.a.createElement(
                  "span",
                  { className: "symbol-label font-size-h5 font-weight-bold" },
                  e.fullname[0]
                )
              )
            )
          ),
          r.a.createElement(
            Ze.a.Menu,
            {
              className:
                "p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl",
            },
            r.a.createElement(
              r.a.Fragment,
              null,
              a.light &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "div",
                    { className: "d-flex align-items-center p-8 rounded-top" },
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "symbol symbol-md bg-light-primary mr-3 flex-shrink-0",
                      },
                      r.a.createElement("img", {
                        src: De("/media/users/300_21.jpg"),
                        alt: "",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "text-dark m-0 flex-grow-1 mr-3 font-size-h5",
                      },
                      "Sean Stone"
                    ),
                    r.a.createElement(
                      "span",
                      {
                        className:
                          "label label-light-success label-lg font-weight-bold label-inline",
                      },
                      "3 messages"
                    )
                  ),
                  r.a.createElement("div", {
                    className: "separator separator-solid",
                  })
                ),
              !a.light &&
                r.a.createElement(
                  "div",
                  {
                    className:
                      "d-flex align-items-center justify-content-between flex-wrap p-8 bgi-size-cover bgi-no-repeat rounded-top",
                    style: {
                      backgroundImage: "url(".concat(
                        De("/media/misc/bg-1.jpg"),
                        ")"
                      ),
                    },
                  },
                  r.a.createElement(
                    "div",
                    { className: "symbol bg-white-o-15 mr-3" },
                    r.a.createElement(
                      "span",
                      {
                        className:
                          "symbol-label text-success font-weight-bold font-size-h4",
                      },
                      "S"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className: "text-white m-0 flex-grow-1 mr-3 font-size-h5",
                    },
                    "Sean Stone"
                  ),
                  r.a.createElement(
                    "span",
                    {
                      className:
                        "label label-success label-lg font-weight-bold label-inline",
                    },
                    "3 messages"
                  )
                )
            ),
            r.a.createElement(
              "div",
              { className: "navi navi-spacer-x-0 pt-5" },
              r.a.createElement(
                "a",
                { className: "navi-item px-8" },
                r.a.createElement(
                  "div",
                  { className: "navi-link" },
                  r.a.createElement(
                    "div",
                    { className: "navi-icon mr-2" },
                    r.a.createElement("i", {
                      className: "flaticon2-calendar-3 text-success",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "navi-text" },
                    r.a.createElement(
                      "div",
                      { className: "font-weight-bold" },
                      "My Profile"
                    ),
                    r.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "Account settings and more",
                      r.a.createElement(
                        "span",
                        {
                          className:
                            "label label-light-danger label-inline font-weight-bold",
                        },
                        "update"
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                "a",
                { className: "navi-item px-8" },
                r.a.createElement(
                  "div",
                  { className: "navi-link" },
                  r.a.createElement(
                    "div",
                    { className: "navi-icon mr-2" },
                    r.a.createElement("i", {
                      className: "flaticon2-mail text-warning",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "navi-text" },
                    r.a.createElement(
                      "div",
                      { className: "font-weight-bold" },
                      "My Messages"
                    ),
                    r.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "Inbox and tasks"
                    )
                  )
                )
              ),
              r.a.createElement(
                "a",
                { className: "navi-item px-8" },
                r.a.createElement(
                  "div",
                  { className: "navi-link" },
                  r.a.createElement(
                    "div",
                    { className: "navi-icon mr-2" },
                    r.a.createElement("i", {
                      className: "flaticon2-rocket-1 text-danger",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "navi-text" },
                    r.a.createElement(
                      "div",
                      { className: "font-weight-bold" },
                      "My Activities"
                    ),
                    r.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "Logs and notifications"
                    )
                  )
                )
              ),
              r.a.createElement(
                "a",
                { className: "navi-item px-8" },
                r.a.createElement(
                  "div",
                  { className: "navi-link" },
                  r.a.createElement(
                    "div",
                    { className: "navi-icon mr-2" },
                    r.a.createElement("i", {
                      className: "flaticon2-hourglass text-primary",
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "navi-text" },
                    r.a.createElement(
                      "div",
                      { className: "font-weight-bold" },
                      "My Tasks"
                    ),
                    r.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "latest tasks and projects"
                    )
                  )
                )
              ),
              r.a.createElement("div", { className: "navi-separator mt-3" }),
              r.a.createElement(
                "div",
                { className: "navi-footer  px-8 py-5" },
                r.a.createElement(
                  Te.b,
                  {
                    to: "/logout",
                    className: "btn btn-light-primary font-weight-bold",
                  },
                  "Sign Out"
                ),
                r.a.createElement(
                  "a",
                  { href: "#", className: "btn btn-clean font-weight-bold" },
                  "Upgrade Plan"
                )
              )
            )
          )
        );
      }
      function ft() {
        var e = Object(Ne.e)(function(e) {
            return e.auth;
          }).user,
          t = We(),
          a = Object(n.useMemo)(
            function() {
              return {
                offcanvas:
                  "offcanvas" === we.a.get(t.config, "extras.user.layout"),
              };
            },
            [t]
          );
        return r.a.createElement(
          r.a.Fragment,
          null,
          a.offcanvas &&
            r.a.createElement(
              Xe.a,
              {
                placement: "bottom",
                overlay: r.a.createElement(
                  Je.a,
                  { id: "quick-user-tooltip" },
                  "View user"
                ),
              },
              r.a.createElement(
                "div",
                { className: "topbar-item" },
                r.a.createElement(
                  "div",
                  {
                    className:
                      "btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2",
                    id: "kt_quick_user_toggle",
                  },
                  r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      "span",
                      {
                        className:
                          "text-muted font-weight-bold font-size-base d-none d-md-inline mr-1",
                      },
                      "Hi,"
                    ),
                    r.a.createElement(
                      "span",
                      {
                        className:
                          "text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3",
                      },
                      e.firstname
                    ),
                    r.a.createElement(
                      "span",
                      { className: "symbol symbol-35 symbol-light-success" },
                      r.a.createElement(
                        "span",
                        {
                          className:
                            "symbol-label font-size-h5 font-weight-bold",
                        },
                        e.firstname[0]
                      )
                    )
                  )
                )
              )
            ),
          !a.offcanvas && r.a.createElement(dt, null)
        );
      }
      function Et() {
        var e = We(),
          t = Object(n.useMemo)(
            function() {
              return {
                viewSearchDisplay: we.a.get(e.config, "extras.search.display"),
                viewNotificationsDisplay: we.a.get(
                  e.config,
                  "extras.notifications.display"
                ),
                viewQuickActionsDisplay: we.a.get(
                  e.config,
                  "extras.quick-actions.display"
                ),
                viewCartDisplay: we.a.get(e.config, "extras.cart.display"),
                viewQuickPanelDisplay: we.a.get(
                  e.config,
                  "extras.quick-panel.display"
                ),
                viewLanguagesDisplay: we.a.get(
                  e.config,
                  "extras.languages.display"
                ),
                viewUserDisplay: we.a.get(e.config, "extras.user.display"),
              };
            },
            [e]
          );
        return r.a.createElement(
          "div",
          { className: "topbar ml-auto" },
          t.viewQuickActionsDisplay && r.a.createElement(at, null),
          t.viewUserDisplay && r.a.createElement(ft, null)
        );
      }
      a(526);
      a(1228), a(1219), a(273), a(1225);
      var pt = a(75),
        gt = a(172),
        bt = ["className"],
        ht = ["children", "className"],
        vt = [
          "children",
          "icon",
          "title",
          "toolbar",
          "className",
          "sticky",
          "labelRef",
        ],
        yt = ["fit", "fluid", "className"],
        Ct = ["className"],
        Nt = ["fluidHeight", "className"],
        Tt =
          (Object(n.forwardRef)(function(e, t) {
            var a = e.className;
            return r.a.createElement("span", {
              ref: t,
              className: Object(Ke.a)("card-head-icon", a),
            });
          }),
          Object(n.forwardRef)(function(e, t) {
            var a = e.className,
              n = Object(pt.a)(e, bt);
            return r.a.createElement(
              "h3",
              Object.assign({}, n, {
                ref: t,
                className: Object(Ke.a)("card-label", a),
              })
            );
          })),
        Ot = Object(n.forwardRef)(function(e, t) {
          var a = e.children,
            n = e.className,
            i = Object(pt.a)(e, ht);
          return r.a.createElement(
            "div",
            Object.assign({}, i, {
              ref: t,
              className: Object(Ke.a)("card-toolbar", n),
            }),
            a
          );
        }),
        St = Object(n.forwardRef)(function(e, t) {
          var a = e.children,
            i = e.icon,
            l = e.title,
            o = e.toolbar,
            s = e.className,
            c = e.sticky,
            m = void 0 !== c && c,
            u = e.labelRef,
            d = (Object(pt.a)(e, vt), Object(n.useState)(0)),
            f = Object(Ye.a)(d, 2),
            E = f[0],
            p = f[1],
            g = Object(n.useState)(0),
            b = Object(Ye.a)(g, 2),
            h = b[0],
            v = b[1];
          return (
            Object(n.useEffect)(function() {
              function e() {
                v(window.innerWidth);
              }
              return (
                e(),
                window.addEventListener("resize", e),
                function() {
                  window.removeEventListener("resize", e);
                }
              );
            }),
            Object(n.useEffect)(
              function() {
                if (m && 0 !== h) {
                  var e = document.querySelector(".header"),
                    t = document.querySelector(".subheader"),
                    a = document.querySelector(".header-mobile"),
                    n = 0;
                  "0px" === window.getComputedStyle(e).height
                    ? (n = a.offsetHeight)
                    : document.body.classList.contains("header-minimize-topbar")
                    ? (n = 60)
                    : (document.body.classList.contains("header-fixed") &&
                        (n += e.offsetHeight),
                      document.body.classList.contains("subheader-fixed") &&
                        (n += t.offsetHeight)),
                    p(n);
                }
              },
              [m, h]
            ),
            r.a.createElement(
              "div",
              {
                ref: t,
                className: "card-header",
                style: m
                  ? { top: E, position: "sticky", backgroundColor: "#fff" }
                  : void 0,
              },
              null != l &&
                r.a.createElement(
                  "div",
                  { ref: u, className: Object(Ke.a)("card-title", s) },
                  i,
                  "string" === typeof l || Object(gt.isFragment)(l)
                    ? r.a.createElement(Tt, null, l)
                    : l
                ),
              o,
              a
            )
          );
        }),
        Mt = Object(n.forwardRef)(function(e, t) {
          var a = e.fit,
            n = e.fluid,
            i = e.className,
            l = Object(pt.a)(e, yt);
          return r.a.createElement(
            "div",
            Object.assign({}, l, {
              ref: t,
              className: Object(Ke.a)(
                "card-body",
                { "card-body-fit": a, "card-body-fluid": n },
                i
              ),
            })
          );
        }),
        wt =
          (Object(n.forwardRef)(function(e, t) {
            var a = e.className,
              n = Object(pt.a)(e, Ct);
            return r.a.createElement(
              "div",
              Object.assign({}, n, {
                ref: t,
                className: Object(Ke.a)("card-footer", a),
              })
            );
          }),
          Object(n.forwardRef)(function(e, t) {
            var a = e.fluidHeight,
              n = e.className,
              i = Object(pt.a)(e, Nt);
            return r.a.createElement(
              "div",
              Object.assign({}, i, {
                ref: t,
                className: Object(Ke.a)(
                  "card card-custom gutter-b",
                  { "card-height-fluid": a },
                  n
                ),
              })
            );
          }));
      var xt = a(15),
        At = a(534),
        Dt = a.n(At),
        kt = function(e, t) {
          var a = ["form-control"];
          return (
            e && t && a.push("is-invalid"),
            e && !t && a.push("is-valid"),
            a.join(" ")
          );
        };
      function Lt(e) {
        var t = Object.assign({}, e),
          a = Object(xt.f)(),
          n = a.setFieldValue,
          i = a.errors,
          l = a.touched,
          o = Object(xt.d)(t),
          s = Object(Ye.a)(o, 1)[0];
        return r.a.createElement(
          r.a.Fragment,
          null,
          t.label && r.a.createElement("label", null, t.label),
          r.a.createElement(
            Dt.a,
            Object.assign(
              { className: kt(l[s.name], i[s.name]), style: { width: "100%" } },
              s,
              t,
              {
                selected: (s.value && new Date(s.value)) || null,
                onChange: function(e) {
                  n(s.name, e);
                },
              }
            )
          ),
          i[s.name] && l[s.name]
            ? r.a.createElement(
                "div",
                { className: "invalid-datepicker-feedback" },
                i[s.name].toString()
              )
            : r.a.createElement(
                "div",
                { className: "feedback" },
                "Please enter ",
                r.a.createElement("b", null, t.label),
                " in 'mm/dd/yyyy' format"
              )
        );
      }
      var It = function(e) {
        var t = e.label,
          a = e.touched,
          n = e.error,
          i = e.customFeedbackLabel;
        return a && n
          ? r.a.createElement("div", { className: "invalid-feedback" }, n)
          : a && !n && t
          ? r.a.createElement(
              "div",
              { className: "valid-feedback" },
              t,
              " was entered correct"
            )
          : r.a.createElement(
              "div",
              { className: "feedback" },
              i && r.a.createElement(r.a.Fragment, null, i),
              !i &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  "Please enter ",
                  r.a.createElement("b", null, t)
                )
            );
      };
      function Rt(e) {
        var t = e.label,
          a = e.touched,
          n = e.error,
          i = e.type,
          l = e.customFeedbackLabel;
        switch (i) {
          case "text":
          case "email":
          case "password":
            return It({
              label: t,
              touched: a,
              error: n,
              customFeedbackLabel: l,
            });
          default:
            return (function(e) {
              var t = e.label,
                a = e.touched,
                n = e.error,
                i = e.customFeedbackLabel;
              return a && n
                ? r.a.createElement("div", { className: "invalid-feedback" }, n)
                : r.a.createElement(
                    "div",
                    { className: "feedback" },
                    i && r.a.createElement(r.a.Fragment, null, i),
                    !i &&
                      t &&
                      r.a.createElement(
                        r.a.Fragment,
                        null,
                        "Please select ",
                        r.a.createElement("b", null, t)
                      )
                  );
            })({ label: t, touched: a, error: n, customFeedbackLabel: l });
        }
      }
      var Ut = [
          "field",
          "form",
          "label",
          "withFeedbackLabel",
          "customFeedbackLabel",
          "type",
        ],
        Pt = function(e, t) {
          var a = ["form-control"];
          return (
            e && t && a.push("is-invalid"),
            e && !t && a.push("is-valid"),
            a.join(" ")
          );
        };
      function _t(e) {
        var t = e.field,
          a = e.form,
          n = a.touched,
          i = a.errors,
          l = e.label,
          o = e.withFeedbackLabel,
          s = void 0 === o || o,
          c = e.customFeedbackLabel,
          m = e.type,
          u = void 0 === m ? "text" : m,
          d = Object(pt.a)(e, Ut);
        return r.a.createElement(
          r.a.Fragment,
          null,
          l && r.a.createElement("label", null, "Enter ", l),
          r.a.createElement(
            "input",
            Object.assign(
              { type: u, className: Pt(n[t.name], i[t.name]) },
              t,
              d
            )
          ),
          s &&
            r.a.createElement(Rt, {
              error: i[t.name],
              touched: n[t.name],
              label: l,
              type: u,
              customFeedbackLabel: c,
            })
        );
      }
      var Ft = [
          "label",
          "withFeedbackLabel",
          "type",
          "customFeedbackLabel",
          "children",
        ],
        jt = function(e, t) {
          var a = ["form-control", "form-control-solid"];
          return (
            e && t && a.push("is-invalid-select"),
            e && !t && a.push("is-valid-select"),
            a.join(" ")
          );
        };
      function Ht(e) {
        var t = e.label,
          a = e.withFeedbackLabel,
          n = void 0 === a || a,
          i = (e.type, e.customFeedbackLabel),
          l = e.children,
          o = Object(pt.a)(e, Ft),
          s = Object(xt.d)(o),
          c = Object(Ye.a)(s, 2),
          m = c[0],
          u = c[1],
          d = u.touched,
          f = u.error;
        return r.a.createElement(
          r.a.Fragment,
          null,
          t && r.a.createElement("label", null, "Select ", t),
          r.a.createElement(
            "select",
            Object.assign({ className: jt(d, f) }, m, o),
            l
          ),
          n &&
            r.a.createElement(Rt, {
              erros: f,
              touched: d,
              label: t,
              customFeedbackLabel: i,
            })
        );
      }
      function Bt(e) {
        var t = e.paginationProps,
          a = t.totalSize,
          n = t.sizePerPage,
          i = t.page,
          l = t.paginationSize,
          o = (function(e, t) {
            return Math.ceil(e / t);
          })(a, n),
          s = (function(e, t, a) {
            var n = [];
            if (!e) return n;
            if (1 === t) return n.push(1), n;
            if (t < e) return n;
            if (t < a + 1) {
              for (var r = 1; r < t + 1; r++) n.push(r);
              return n;
            }
            if (1 === e) {
              for (var i = 1; i < a + 1; i++) i < t && n.push(i);
              return n;
            }
            if (e === t) {
              for (var l = t - a + 1; l <= t; l++) l <= t && n.push(l);
              return n;
            }
            var o = Math.floor(a / 2);
            if (o < 1) return n.push(e), n;
            if (e < o + 2) {
              for (var s = 1; s < a + 1; s++) n.push(s);
              return n;
            }
            if (t - e < o + 2) {
              for (var c = t - a; c < t + 1; c++) n.push(c);
              return n;
            }
            for (var m = e - o; m < e; m++) m > 0 && n.push(m);
            n.push(e);
            for (var u = e + 1; u < e + o + 1; u++) u <= t && n.push(u);
            return n;
          })(i, o, l),
          c = o > 1 ? "" : "disabled";
        return r.a.createElement(
          r.a.Fragment,
          null,
          o < 2 && r.a.createElement(r.a.Fragment, null),
          o > 1 &&
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "div",
                { className: "d-flex flex-wrap py-2 mr-3 ".concat(c) },
                r.a.createElement(
                  "a",
                  {
                    onClick: function() {
                      (0, t.onPageChange)(1);
                    },
                    className:
                      "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1",
                  },
                  r.a.createElement("i", {
                    className: "ki ki-bold-double-arrow-back icon-xs",
                  })
                ),
                r.a.createElement(
                  "a",
                  {
                    onClick: function() {
                      return (function(e) {
                        var t = e.page;
                        (0, e.onPageChange)(t - 1);
                      })(t);
                    },
                    className:
                      "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1",
                  },
                  r.a.createElement("i", {
                    className: "ki ki-bold-arrow-back icon-xs",
                  })
                ),
                i > 1 &&
                  r.a.createElement(
                    "a",
                    {
                      className:
                        "btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1",
                    },
                    "..."
                  ),
                s.map(function(e) {
                  return r.a.createElement(
                    "a",
                    {
                      key: e,
                      onClick: function() {
                        return (a = e), void (0, t.onPageChange)(a);
                        var a;
                      },
                      className: "btn btn-icon btn-sm border-0 btn-light ".concat(
                        i === e ? " btn-hover-primary active" : "",
                        " mr-2 my-1"
                      ),
                    },
                    e
                  );
                }),
                i < o &&
                  r.a.createElement(
                    "a",
                    {
                      className:
                        "btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1",
                    },
                    "..."
                  ),
                r.a.createElement(
                  "a",
                  {
                    onClick: function() {
                      return (function(e) {
                        var t = e.page,
                          a = e.onPageChange;
                        t < o && a(t + 1);
                      })(t);
                    },
                    className:
                      "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1",
                  },
                  r.a.createElement("i", {
                    className: "ki ki-bold-arrow-next icon-xs",
                  })
                ),
                r.a.createElement(
                  "a",
                  {
                    onClick: function() {
                      (0, t.onPageChange)(o);
                    },
                    className:
                      "btn btn-icon btn-sm btn-light btn-hover-primary mr-2 my-1",
                  },
                  r.a.createElement("i", {
                    className: "ki ki-bold-double-arrow-next icon-xs",
                  })
                )
              )
            )
        );
      }
      var qt = a(42),
        zt = a.n(qt);
      function Gt(e) {
        var t = e.isLoading,
          a = e.paginationProps,
          n = a.sizePerPageList,
          i = a.sizePerPage,
          l = a.totalSize,
          o = a.onSizePerPageChange,
          s =
            void 0 === o
              ? [
                  { text: "3", value: 3 },
                  { text: "5", value: 5 },
                  { text: "10", value: 10 },
                ]
              : o;
        return r.a.createElement(
          "div",
          { className: "d-flex align-items-center py-3" },
          t &&
            r.a.createElement(
              "div",
              { className: "d-flex align-items-center" },
              r.a.createElement(
                "div",
                { className: "mr-2 text-muted" },
                "Loading..."
              ),
              r.a.createElement("div", {
                className: "spinner spinner-primary mr-10",
              })
            ),
          r.a.createElement(
            "select",
            {
              disabled: 0 === l,
              className: "form-control form-control-sm font-weight-bold mr-4 border-0 bg-light ".concat(
                0 === l && "disabled"
              ),
              onChange: function(e) {
                var t = +e.target.value;
                s(t);
              },
              value: i,
              style: { width: "75px" },
            },
            n.map(function(e) {
              var t = i === "".concat(e.page);
              return r.a.createElement(
                "option",
                {
                  key: e.text,
                  value: e.page,
                  className: "btn ".concat(t ? "active" : ""),
                },
                e.text
              );
            })
          ),
          r.a.createElement(
            qt.PaginationTotalStandalone,
            Object.assign({ className: "text-muted" }, a)
          )
        );
      }
      function Vt(e) {
        var t = e.children,
          a = e.isLoading,
          n = e.paginationProps;
        return r.a.createElement(
          r.a.Fragment,
          null,
          t,
          r.a.createElement(
            "div",
            {
              className:
                "d-flex justify-content-between align-items-center flex-wrap",
            },
            r.a.createElement(Bt, { paginationProps: n }),
            r.a.createElement(Gt, { isLoading: a, paginationProps: n })
          )
        );
      }
      var Wt = a(1220),
        Qt = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            var e;
            Object(u.a)(this, a);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                width: 0,
                routeChanged: !1,
              }),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  this.props.location.pathname !== e.location.pathname &&
                    (this.animate(), this.scrollToTop());
                },
              },
              {
                key: "scrollToTop",
                value: function() {
                  var e = document.getElementById("kt_scrolltop");
                  e && e.click();
                },
              },
              {
                key: "animate",
                value: function() {
                  var e = this;
                  this.animateTimeout = setTimeout(function() {
                    e.state.width <= 100
                      ? (e.setState({ width: e.state.width + 10 }), e.animate())
                      : e.stopAnimate();
                  }, 30);
                },
              },
              {
                key: "stopAnimate",
                value: function() {
                  var e = this;
                  clearTimeout(this.animateInterval),
                    (this.stopAnimateTimeout = setTimeout(function() {
                      e.setState({ width: 0 });
                    }, 300));
                },
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.stopAnimateTimeout &&
                    clearTimeout(this.stopAnimateTimeout),
                    this.animateTimeout && clearTimeout(this.animateTimeout);
                },
              },
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    {
                      className: "header-progress-bar",
                      style: { height: "3px", width: "100%" },
                    },
                    this.state.width > 0 &&
                      r.a.createElement(Wt.a, {
                        variant: "info",
                        now: this.state.width,
                        style: { height: "3px" },
                      })
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        Yt = Object(Se.j)(Qt),
        Kt = a(1230),
        Zt = ["dialog", "dialog-default", "dialog-loader", "dialog-top-center"];
      function Xt(e) {
        var t = e.isLoading,
          a = e.text,
          i = Object(n.useState)(Zt),
          l = Object(Ye.a)(i, 2),
          o = l[0],
          s = l[1];
        return (
          Object(n.useEffect)(
            function() {
              s(Zt);
              var e = setTimeout(function() {
                s([].concat(Zt, [t ? "dialog-shown" : "dialog-hidden"]));
              }, 200);
              return function() {
                clearTimeout(e);
              };
            },
            [t]
          ),
          r.a.createElement(
            Kt.a,
            { node: document && document.getElementById("layout-portal") },
            r.a.createElement("div", { className: o.join(" ") }, a)
          )
        );
      }
      var Jt = [
        "icon",
        "svg",
        "iconRef",
        "textRef",
        "iconWrapperRef",
        "className",
        "children",
      ];
      Object(n.forwardRef)(function(e, t) {
        e.icon, e.svg, e.iconRef;
        var a = e.textRef,
          n = (e.iconWrapperRef, e.className),
          i = e.children,
          l = Object(pt.a)(e, Jt);
        return r.a.createElement(
          "div",
          Object.assign({}, l, {
            ref: t,
            role: "alert",
            className: Object(Ke.a)(
              "alert alert-custom alert-white alert-shadow gutter-b",
              n
            ),
          }),
          r.a.createElement(
            "div",
            { className: "alert-icon alert-icon-top" },
            r.a.createElement(
              "span",
              { className: "svg-icon svg-icon-3x svg-icon-primary mt-4" },
              r.a.createElement(Fe.a, {
                src: De("/media/svg/icons/Tools/Compass.svg"),
              })
            )
          ),
          r.a.createElement("div", { className: "alert-text", ref: a }, i)
        );
      });
      a(1221);
      a(536);
      function $t(e) {
        var t = e.variant,
          a = void 0 === t ? "success" : t;
        return r.a.createElement(Wt.a, {
          variant: a,
          animated: !0,
          now: 100,
          style: { height: "3px", width: "100%" },
        });
      }
      function ea() {
        var e = We(),
          t = Object(n.useMemo)(
            function() {
              return {
                headerClasses: e.getClasses("header", !0),
                headerAttributes: e.getAttributes("header"),
                headerContainerClasses: e.getClasses("header_container", !0),
                menuHeaderDisplay: we.a.get(
                  e.config,
                  "header.menu.self.display"
                ),
              };
            },
            [e]
          );
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            Object.assign(
              { className: "header ".concat(t.headerClasses), id: "kt_header" },
              t.headerAttributes
            ),
            r.a.createElement(
              "div",
              {
                className: " ".concat(
                  t.headerContainerClasses,
                  " d-flex align-items-stretch justify-content-between"
                ),
              },
              r.a.createElement(Yt, null),
              !t.menuHeaderDisplay && r.a.createElement("div", null),
              r.a.createElement(Et, null)
            )
          )
        );
      }
      function ta() {
        var e = We(),
          t = Object(n.useMemo)(
            function() {
              return {
                headerLogo: e.getStickyLogo(),
                asideDisplay: we.a.get(e.config, "aside.self.display"),
                headerMenuSelfDisplay:
                  !0 === we.a.get(e.config, "header.menu.self.display"),
                headerMobileCssClasses: e.getClasses("header_mobile", !0),
                headerMobileAttributes: e.getAttributes("header_mobile"),
              };
            },
            [e]
          );
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            Object.assign(
              {
                id: "kt_header_mobile",
                className: "header-mobile align-items-center ".concat(
                  t.headerMobileCssClasses
                ),
              },
              t.headerMobileAttributes
            ),
            r.a.createElement(
              Te.b,
              { to: "/" },
              r.a.createElement(
                "h2",
                { style: { color: "#fff" }, className: "mt-2" },
                "MUNTU"
              )
            ),
            r.a.createElement(
              "div",
              { className: "d-flex align-items-center" },
              t.asideDisplay &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement(
                    "button",
                    {
                      className: "btn p-0 burger-icon burger-icon-left",
                      id: "kt_aside_mobile_toggle",
                    },
                    r.a.createElement("span", null)
                  )
                ),
              t.headerMenuSelfDisplay && r.a.createElement(r.a.Fragment, null),
              r.a.createElement(
                "button",
                {
                  className: "btn btn-hover-text-primary p-0 ml-2",
                  id: "kt_header_mobile_topbar_toggle",
                },
                r.a.createElement(
                  "span",
                  { className: "svg-icon svg-icon-xl" },
                  r.a.createElement(Fe.a, {
                    src: De("/media/svg/icons/General/User.svg"),
                  })
                )
              )
            )
          )
        );
      }
      function aa() {
        var e = We(),
          t = Object(n.useMemo)(
            function() {
              return {
                brandClasses: e.getClasses("brand", !0),
                asideSelfMinimizeToggle: we.a.get(
                  e.config,
                  "aside.self.minimize.toggle"
                ),
                headerLogo: e.getLogo(),
                headerStickyLogo: e.getStickyLogo(),
              };
            },
            [e]
          );
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            {
              className: "brand flex-column-auto ".concat(t.brandClasses),
              id: "kt_brand",
            },
            r.a.createElement(
              Te.b,
              { to: "", className: "brand-logo pt-2" },
              r.a.createElement("h2", { style: { color: "#fff" } }, "MUNTU")
            ),
            t.asideSelfMinimizeToggle &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "button",
                  {
                    className: "brand-toggle btn btn-sm px-0",
                    id: "kt_aside_toggle",
                  },
                  r.a.createElement(
                    "span",
                    { className: "svg-icon svg-icon-xl" },
                    r.a.createElement(Fe.a, {
                      src: De(
                        "/media/svg/icons/Navigation/Angle-double-left.svg"
                      ),
                    })
                  )
                )
              )
          )
        );
      }
      function na(e) {
        var t = e.layoutProps,
          a = Object(Ne.e)(function(e) {
            return e.auth;
          }).user,
          n = Object(Se.h)(),
          i = function(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return ke(n, e)
              ? " ".concat(!t && "menu-item-active", " menu-item-open ")
              : "";
          };
        return 1 == a.is_nerdc
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "ul",
                { className: "menu-nav ".concat(t.ulClasses) },
                r.a.createElement(
                  "li",
                  {
                    className: "menu-item ".concat(i("/profile", !1)),
                    "aria-haspopup": "true",
                  },
                  r.a.createElement(
                    Te.c,
                    { className: "menu-link", to: "/profile" },
                    r.a.createElement(
                      "span",
                      { className: "svg-icon menu-icon" },
                      r.a.createElement(Fe.a, {
                        src: De("/media/svg/icons/Code/Settings4.svg"),
                      })
                    ),
                    r.a.createElement(
                      "span",
                      { className: "menu-text" },
                      "Profile"
                    )
                  )
                )
              )
            )
          : r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                "ul",
                { className: "menu-nav ".concat(t.ulClasses) },
                r.a.createElement(
                  "li",
                  {
                    className: "menu-item ".concat(i("/dashboard", !1)),
                    "aria-haspopup": "true",
                  },
                  r.a.createElement(
                    Te.c,
                    { className: "menu-link mb-5", to: "/dashboard" },
                    r.a.createElement(
                      "span",
                      { className: "svg-icon menu-icon" },
                      r.a.createElement(Fe.a, {
                        src: De("/media/svg/icons/Design/Layers.svg"),
                      })
                    ),
                    r.a.createElement(
                      "span",
                      { className: "menu-text" },
                      "Dashboard"
                    )
                  )
                ),
                r.a.createElement(
                  "li",
                  {
                    className: "menu-item ".concat(i("/profile", !1)),
                    "aria-haspopup": "true",
                  },
                  r.a.createElement(
                    Te.c,
                    { className: "menu-link mb-5", to: "/profile" },
                    r.a.createElement(
                      "span",
                      { className: "svg-icon menu-icon" },
                      r.a.createElement(Fe.a, {
                        src: De("/media/svg/icons/Code/Settings4.svg"),
                      })
                    ),
                    r.a.createElement(
                      "span",
                      { className: "menu-text" },
                      "Account Profile"
                    )
                  )
                ),
                r.a.createElement(
                  "li",
                  { className: "menu-section " },
                  r.a.createElement(
                    "h4",
                    { className: "menu-text" },
                    "Management"
                  ),
                  r.a.createElement("i", {
                    className: "menu-icon flaticon-more-v2",
                  })
                ),
                r.a.createElement(
                  "li",
                  {
                    className: "menu-item menu-item-submenu ".concat(
                      i("/management", !0)
                    ),
                    "aria-haspopup": "true",
                    "data-menu-toggle": "hover",
                  },
                  r.a.createElement(
                    Te.c,
                    { className: "menu-link menu-toggle", to: "/management" },
                    r.a.createElement(
                      "span",
                      { className: "svg-icon menu-icon" },
                      r.a.createElement(Fe.a, {
                        src: De("/media/svg/icons/Shopping/Bag2.svg"),
                      })
                    ),
                    r.a.createElement(
                      "span",
                      { className: "menu-text" },
                      "Management"
                    ),
                    r.a.createElement("i", { className: "menu-arrow" })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "menu-submenu" },
                    r.a.createElement("i", { className: "menu-arrow" }),
                    r.a.createElement(
                      "ul",
                      { className: "menu-subnav" },
                      r.a.createElement(
                        "li",
                        {
                          className: "menu-item menu-item-parent",
                          "aria-haspopup": "true",
                        },
                        r.a.createElement(
                          "span",
                          { className: "menu-link" },
                          r.a.createElement(
                            "span",
                            { className: "menu-text" },
                            "Management"
                          )
                        )
                      ),
                      r.a.createElement(
                        "li",
                        {
                          className: "menu-item ".concat(
                            i("/management/admins")
                          ),
                          "aria-haspopup": "true",
                        },
                        r.a.createElement(
                          Te.c,
                          { className: "menu-link", to: "/management/admins" },
                          r.a.createElement(
                            "i",
                            { className: "menu-bullet menu-bullet-dot" },
                            r.a.createElement("span", null)
                          ),
                          r.a.createElement(
                            "span",
                            { className: "menu-text" },
                            "Admins"
                          )
                        )
                      ),
                      r.a.createElement(
                        "li",
                        {
                          className: "menu-item ".concat(
                            i("/management/customers")
                          ),
                          "aria-haspopup": "true",
                        },
                        r.a.createElement(
                          Te.c,
                          {
                            className: "menu-link",
                            to: "/management/customers",
                          },
                          r.a.createElement(
                            "i",
                            { className: "menu-bullet menu-bullet-dot" },
                            r.a.createElement("span", null)
                          ),
                          r.a.createElement(
                            "span",
                            { className: "menu-text" },
                            "Customers"
                          )
                        )
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "li",
                  { className: "menu-section " },
                  r.a.createElement(
                    "h4",
                    { className: "menu-text" },
                    "Transactions"
                  ),
                  r.a.createElement("i", {
                    className: "menu-icon flaticon-more-v2",
                  })
                )
              )
            );
      }
      function ra(e) {
        e.disableScroll;
        var t = We(),
          a = Object(n.useMemo)(
            function() {
              return {
                layoutConfig: t.config,
                asideMenuAttr: t.getAttributes("aside_menu"),
                ulClasses: t.getClasses("aside_menu_nav", !0),
                asideClassesFromConfig: t.getClasses("aside_menu", !0),
              };
            },
            [t]
          );
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            Object.assign(
              {
                id: "kt_aside_menu",
                "data-menu-vertical": "1",
                className: "aside-menu my-4 ".concat(a.asideClassesFromConfig),
              },
              a.asideMenuAttr
            ),
            r.a.createElement(na, { layoutProps: a })
          )
        );
      }
      function ia() {
        var e = We(),
          t = Object(n.useMemo)(
            function() {
              return {
                disableScroll:
                  "true" === we.a.get(e.config, "aside.menu.dropdown") || !1,
                asideClassesFromConfig: e.getClasses("aside", !0),
                disableAsideSelfDisplay:
                  !1 === we.a.get(e.config, "aside.self.display"),
                headerLogo: e.getLogo(),
              };
            },
            [e]
          );
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            {
              id: "kt_aside",
              className: "aside aside-left  ".concat(
                t.asideClassesFromConfig,
                " d-flex flex-column flex-row-auto"
              ),
            },
            r.a.createElement(aa, null),
            r.a.createElement(
              "div",
              {
                id: "kt_aside_menu_wrapper",
                className: "aside-menu-wrapper flex-column-fluid",
              },
              t.disableAsideSelfDisplay &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement("div", { className: "header-logo" })
                ),
              r.a.createElement(ra, { disableScroll: t.disableScroll })
            )
          )
        );
      }
      function la() {
        var e = new Date().getFullYear(),
          t = We(),
          a = Object(n.useMemo)(
            function() {
              return {
                footerClasses: t.getClasses("footer", !0),
                footerContainerClasses: t.getClasses("footer_container", !0),
              };
            },
            [t]
          );
        return r.a.createElement(
          "div",
          {
            className: "footer bg-white py-4 d-flex flex-lg-column  ".concat(
              a.footerClasses
            ),
            id: "kt_footer",
          },
          r.a.createElement(
            "div",
            {
              className: "".concat(
                a.footerContainerClasses,
                " d-flex flex-column flex-md-row align-items-center justify-content-between"
              ),
            },
            r.a.createElement(
              "div",
              { className: "text-dark order-2 order-md-1" },
              r.a.createElement(
                "span",
                { className: "text-muted font-weight-bold mr-2" },
                e.toString()
              ),
              " ",
              "\xa9",
              " ",
              r.a.createElement(
                "a",
                {
                  href: "http://keenthemes.com/metronic",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-dark-75 text-hover-primary",
                },
                "Muntu Designs"
              )
            )
          )
        );
      }
      var oa = a(1);
      var sa = (function() {
          var e, t;
          return {
            init: function(a, n) {
              (e = oa.a.getById(a)), (t = oa.a.getById(n));
            },
            isFixed: function() {
              return oa.a.hasClass(oa.a.getBody(), "header-fixed");
            },
            isFixedForMobile: function() {
              return oa.a.hasClass(oa.a.getBody(), "header-mobile-fixed");
            },
            getElement: function() {
              return e;
            },
            getElementForMobile: function() {
              return t;
            },
            getHeader: function() {},
            getHeight: function() {
              return (function() {
                var t = 0;
                return e && (t = oa.a.actualHeight(e) + 1), t;
              })();
            },
            getHeightForMobile: function() {
              return oa.a.actualHeight(t);
            },
          };
        })(),
        ca = a(139),
        ma = a(292);
      var ua = (function() {
          var e, t, a, n;
          return {
            init: function(r, i) {
              (e = oa.a.getById(r)),
                (a = oa.a.getById(i)),
                e &&
                  ((n = new ca.a(a, {
                    overlay: !0,
                    baseClass: "header-menu-wrapper",
                    closeBy: "kt_header_menu_mobile_close_btn",
                    toggleBy: {
                      target: "kt_header_mobile_toggle",
                      state: "mobile-toggle-active",
                    },
                  })),
                  (t = new ma.a(e, {
                    submenu: {
                      desktop: "dropdown",
                      tablet: "accordion",
                      mobile: "accordion",
                    },
                    accordion: { slideSpeed: 200, expandAll: !1 },
                  })).on("linkClick", function(e) {
                    oa.a.isBreakpointDown("lg") && n.hide();
                  }));
            },
            getMenuElement: function() {
              return e;
            },
            getOffcanvasElement: function() {
              return a;
            },
            getMenu: function() {
              return t;
            },
            pauseDropdownHover: function(e) {
              t && t.pauseDropdownHover(e);
            },
            getOffcanvas: function() {
              return n;
            },
            closeMobileOffcanvas: function() {
              t && oa.a.isMobileDevice() && n.hide();
            },
          };
        })(),
        da = a(293);
      var fa = (function() {
        var e;
        return {
          init: function(t) {
            (e = oa.a.getById(t)) &&
              new da.a(e, {
                target: oa.a.getBody(),
                targetState: "topbar-mobile-on",
                toggleState: "active",
              });
          },
          getToggleElement: function() {
            return e;
          },
        };
      })();
      var Ea = (function() {
        var e;
        return {
          init: function(t) {
            e = oa.a.getById(t);
          },
          getElement: function() {
            return e;
          },
          getHeight: function() {
            return (function() {
              var t = 0;
              return e && (t = oa.a.actualHeight(e)), t;
            })();
          },
        };
      })();
      var pa = (function() {
        var e, t;
        return {
          init: function(a) {
            (e = oa.a.getById(a)) &&
              (function() {
                var a,
                  n =
                    "1" === oa.a.attr(e, "data-menu-dropdown")
                      ? "dropdown"
                      : "accordion";
                "1" === oa.a.attr(e, "data-menu-scroll") &&
                  (a = {
                    rememberPosition: !0,
                    height: function() {
                      var t = parseInt(oa.a.getViewPort().height);
                      return (
                        oa.a.isBreakpointUp("lg") && (t -= Ea.getHeight()),
                        (t -=
                          parseInt(oa.a.css(e, "marginBottom")) +
                          parseInt(oa.a.css(e, "marginTop"))),
                        t
                      );
                    },
                  }),
                  (t = new ma.a(e, {
                    scroll: a,
                    submenu: {
                      desktop: n,
                      tablet: "accordion",
                      mobile: "accordion",
                    },
                    accordion: { expandAll: !1 },
                  })).on("submenuToggle", function(e) {
                    if (!0 === ga.isMinimized() && !1 === ga.isHoverable())
                      return !1;
                  }),
                  t.on("linkClick", function(e) {
                    oa.a.isBreakpointDown("lg") && ga.getOffcanvas().hide();
                  });
              })();
          },
          getElement: function() {
            return e;
          },
          getMenu: function() {
            return t;
          },
          pauseDropdownHover: function(e) {
            t && t.pauseDropdownHover(e);
          },
          closeMobileOffcanvas: function() {
            t && oa.a.isMobileDevice() && t.hide();
          },
        };
      })();
      var ga = (function() {
          var e, t, a;
          return {
            init: function(n) {
              (t = oa.a.getById(n)),
                (e = oa.a.getBody()),
                t &&
                  (function() {
                    var n,
                      r,
                      i = oa.a.hasClass(t, "aside-offcanvas-default")
                        ? "aside-offcanvas-default"
                        : "aside";
                    ((a = new ca.a(t, {
                      baseClass: i,
                      overlay: !0,
                      closeBy: "kt_aside_close_btn",
                      toggleBy: {
                        target: "kt_aside_mobile_toggle",
                        state: "mobile-toggle-active",
                      },
                    })),
                    oa.a.hasClass(e, "aside-fixed") &&
                      oa.a.hasClass(e, "aside-minimize-hoverable")) &&
                      (oa.a.addEvent(t, "mouseenter", function(t) {
                        t.preventDefault(),
                          !1 !== oa.a.isBreakpointUp("lg") &&
                            (r && (clearTimeout(r), (r = null)),
                            (n = setTimeout(function() {
                              oa.a.hasClass(e, "aside-minimize") &&
                                oa.a.isBreakpointUp("lg") &&
                                (oa.a.removeClass(e, "aside-minimize"),
                                oa.a.addClass(e, "aside-minimize-hover"),
                                pa.getMenu().scrollUpdate(),
                                pa.getMenu().scrollTop());
                            }, 50)));
                      }),
                      oa.a.addEvent(t, "mouseleave", function(t) {
                        t.preventDefault(),
                          !1 !== oa.a.isBreakpointUp("lg") &&
                            (n && (clearTimeout(n), (n = null)),
                            (r = setTimeout(function() {
                              oa.a.hasClass(e, "aside-minimize-hover") &&
                                oa.a.isBreakpointUp("lg") &&
                                (oa.a.removeClass(e, "aside-minimize-hover"),
                                oa.a.addClass(e, "aside-minimize"),
                                pa.getMenu().scrollUpdate(),
                                pa.getMenu().scrollTop());
                            }, 100)));
                      }));
                  })();
            },
            getElement: function() {
              return t;
            },
            getOffcanvas: function() {
              return a;
            },
            isFixed: function() {
              return oa.a.hasClass(e, "aside-fixed");
            },
            isMinimized: function() {
              return (
                oa.a.hasClass(e, "aside-fixed") &&
                oa.a.hasClass(e, "aside-minimize")
              );
            },
            isHoverable: function() {
              return (
                oa.a.hasClass(e, "aside-fixed") &&
                oa.a.hasClass(e, "aside-minimize-hoverable")
              );
            },
          };
        })(),
        ba = a(537);
      var ha = (function() {
        var e;
        return {
          init: function(t) {
            e = oa.a.getById(t);
          },
          isFixed: function() {
            return oa.a.hasClass(oa.a.getBody(), "subheader-fixed");
          },
          getElement: function() {
            return e;
          },
          getHeight: function() {
            return (function() {
              var t = 0;
              return e && (t = oa.a.actualHeight(e)), t;
            })();
          },
        };
      })();
      var va = (function() {
          var e, t;
          return {
            init: function(a) {
              (e = oa.a.getById(a)) &&
                (function() {
                  var a = 300;
                  "undefined" !== typeof sa && (a = sa.getHeight()),
                    (t = new ba.a(e, {
                      sticky: {
                        offset: a,
                        zIndex: 90,
                        position: {
                          top: function() {
                            var e = 0;
                            oa.a.getBody();
                            return (
                              oa.a.isBreakpointUp("lg")
                                ? ("undefined" !== typeof sa &&
                                    sa.isFixed() &&
                                    (e += sa.getHeight()),
                                  "undefined" !== typeof ha &&
                                    ha.isFixed() &&
                                    (e += ha.getHeight()))
                                : "undefined" !== typeof sa &&
                                  sa.isFixedForMobile() &&
                                  (e += sa.getHeightForMobile()),
                              (e -= 1)
                            );
                          },
                          left: function(t) {
                            return oa.a.offset(e).left;
                          },
                          right: function(t) {
                            var a = oa.a.getBody(),
                              n = parseInt(oa.a.css(e, "width"));
                            return (
                              parseInt(oa.a.css(a, "width")) -
                              n -
                              oa.a.offset(e).left
                            );
                          },
                        },
                      },
                    })).initSticky(),
                    oa.a.addResizeHandler(function() {
                      t.updateSticky();
                    });
                })();
            },
            update: function() {
              t && t.updateSticky();
            },
          };
        })(),
        ya = a(231);
      var Ca = (function() {
        var e, t, a;
        return {
          init: function(n) {
            (t = oa.a.getById(n)),
              (e = oa.a.getBody()),
              t &&
                ((a = new da.a(t, {
                  target: e,
                  targetState: "aside-minimize",
                  toggleState: "active",
                })).on("toggle", function(e) {
                  "undefined" !== typeof va && va.update(),
                    "undefined" !== typeof ua && ua.pauseDropdownHover(800),
                    "undefined" !== typeof pa && pa.pauseDropdownHover(800),
                    ya.a.setCookie("kt_aside_toggle_state", e.getState());
                }),
                a.on("beforeToggle", function(t) {
                  !1 === oa.a.hasClass(e, "aside-minimize") &&
                    oa.a.hasClass(e, "aside-minimize-hover") &&
                    oa.a.removeClass(e, "aside-minimize-hover");
                }));
          },
          getElement: function() {
            return t;
          },
          getToggle: function() {
            return a;
          },
          onToggle: function(e) {
            "undefined" !== typeof a.element && a.on("toggle", e);
          },
        };
      })();
      var Na = (function() {
        var e;
        return {
          init: function(t) {
            e = oa.a.getById(t);
          },
          getHeight: function() {
            return (function() {
              var t = 0;
              return e && (t = oa.a.actualHeight(e)), t;
            })();
          },
          getElement: function() {
            return e;
          },
        };
      })();
      var Ta = (function() {
          var e;
          return {
            init: function(t) {
              e = oa.a.getById(t);
            },
            getHeight: function() {
              return (function() {
                var t;
                return (
                  (t = oa.a.getViewPort().height),
                  e &&
                    (t =
                      t -
                      parseInt(oa.a.css(e, "paddingTop")) -
                      parseInt(oa.a.css(e, "paddingBottom"))),
                  (t -= sa.getHeight()),
                  (t -= ha.getHeight()),
                  (t -= Na.getHeight())
                );
              })();
            },
            getElement: function() {
              return e;
            },
          };
        })(),
        Oa = a(538);
      var Sa = (function() {
        var e;
        return {
          init: function(t) {
            (e = oa.a.getById(t)) && new Oa.a(e, { offset: 300, speed: 600 });
          },
          getElement: function() {
            return e;
          },
        };
      })();
      var Ma = (function() {
        var e,
          t = function() {
            var t = oa.a.find(e, ".card-scroll"),
              a = oa.a.find(e, ".card-body"),
              n = oa.a.find(e, ".card-header"),
              r = Ta.getHeight();
            (r =
              (r =
                (r =
                  (r =
                    (r -= parseInt(oa.a.actualHeight(n))) -
                    parseInt(oa.a.css(e, "marginTop")) -
                    parseInt(oa.a.css(e, "marginBottom"))) -
                  parseInt(oa.a.css(e, "paddingTop")) -
                  parseInt(oa.a.css(e, "paddingBottom"))) -
                parseInt(oa.a.css(a, "paddingTop")) -
                parseInt(oa.a.css(a, "paddingBottom"))) -
              parseInt(oa.a.css(a, "marginTop")) -
              parseInt(oa.a.css(a, "marginBottom"))),
              (r -= 3),
              oa.a.css(t, "height", r + "px");
          };
        return {
          init: function(a) {
            (e = oa.a.getById(a)) &&
              (t(),
              oa.a.addResizeHandler(function() {
                t();
              }));
          },
          update: function() {
            t();
          },
        };
      })();
      var wa = (function() {
        var e,
          t,
          a,
          n,
          r = function() {
            var t = oa.a.find(e, ".offcanvas-header"),
              a = oa.a.find(e, ".offcanvas-content"),
              n = parseInt(oa.a.getViewPort().height);
            return (
              t &&
                ((n -= parseInt(oa.a.actualHeight(t))),
                (n -= parseInt(oa.a.css(t, "marginTop"))),
                (n -= parseInt(oa.a.css(t, "marginBottom")))),
              a &&
                ((n -= parseInt(oa.a.css(a, "marginTop"))),
                (n -= parseInt(oa.a.css(a, "marginBottom")))),
              (n -= parseInt(oa.a.css(e, "paddingTop"))),
              (n -= parseInt(oa.a.css(e, "paddingBottom"))),
              (n -= 2)
            );
          };
        return {
          init: function(i) {
            (e = oa.a.getById(i)),
              (t = oa.a.getById("kt_quick_panel_notifications")),
              (a = oa.a.getById("kt_quick_panel_logs")),
              (n = oa.a.getById("kt_quick_panel_settings")),
              new ca.a(e, {
                overlay: !0,
                baseClass: "offcanvas",
                placement: "right",
                closeBy: "kt_quick_panel_close",
                toggleBy: "kt_quick_panel_toggle",
              }),
              oa.a.scrollInit(t, {
                mobileNativeScroll: !0,
                resetHeightOnDestroy: !0,
                handleWindowResize: !0,
                height: function() {
                  return r();
                },
              }),
              oa.a.scrollInit(a, {
                mobileNativeScroll: !0,
                resetHeightOnDestroy: !0,
                handleWindowResize: !0,
                height: function() {
                  return r();
                },
              }),
              oa.a.scrollInit(n, {
                mobileNativeScroll: !0,
                resetHeightOnDestroy: !0,
                handleWindowResize: !0,
                height: function() {
                  return r();
                },
              });
          },
        };
      })();
      var xa = (function() {
        var e;
        return {
          init: function(t) {
            (e = oa.a.getById(t)) &&
              (function() {
                var t = oa.a.find(e, ".offcanvas-header"),
                  a = oa.a.find(e, ".offcanvas-content");
                new ca.a(e, {
                  overlay: !0,
                  baseClass: "offcanvas",
                  placement: "right",
                  closeBy: "kt_quick_user_close",
                  toggleBy: "kt_quick_user_toggle",
                }),
                  oa.a.scrollInit(a, {
                    disableForMobile: !0,
                    resetHeightOnDestroy: !0,
                    handleWindowResize: !0,
                    height: function() {
                      var n = parseInt(oa.a.getViewPort().height);
                      return (
                        t &&
                          ((n -= parseInt(oa.a.actualHeight(t))),
                          (n -= parseInt(oa.a.css(t, "marginTop"))),
                          (n -= parseInt(oa.a.css(t, "marginBottom")))),
                        a &&
                          ((n -= parseInt(oa.a.css(a, "marginTop"))),
                          (n -= parseInt(oa.a.css(a, "marginBottom")))),
                        (n -= parseInt(oa.a.css(e, "paddingTop"))),
                        (n -= parseInt(oa.a.css(e, "paddingBottom"))),
                        (n -= 2),
                        n
                      );
                    },
                  });
              })();
          },
          getElement: function() {
            return e;
          },
        };
      })();
      function Aa() {
        return (
          Object(n.useLayoutEffect)(function() {
            oa.a.ready(function() {
              sa.init("kt_header", "kt_header_mobile"),
                ua.init("kt_header_menu", "kt_header_menu_wrapper"),
                fa.init("kt_header_mobile_topbar_toggle"),
                Ea.init("kt_brand"),
                ga.init("kt_aside"),
                Ca.init("kt_aside_toggle"),
                pa.init("kt_aside_menu"),
                Ta.init("kt_content"),
                Na.init("kt_footer"),
                ha.init("kt_subheader"),
                Sa.init("kt_scrolltop"),
                va.init("kt_page_sticky_card"),
                Ma.init("kt_page_stretched_card"),
                wa.init("kt_quick_panel"),
                xa.init("kt_quick_user");
            });
          }, []),
          r.a.createElement(r.a.Fragment, null)
        );
      }
      var Da = Object(n.forwardRef)(function(e, t) {
        return r.a.createElement(
          "a",
          {
            ref: t,
            href: "#",
            onClick: function(t) {
              t.preventDefault(), e.onClick(t);
            },
            id: "kt_subheader_quick_actions",
            className: "btn btn-sm btn-clean btn-icon",
          },
          " ",
          r.a.createElement(
            "span",
            { className: "svg-icon svg-icon-success svg-icon-lg" },
            r.a.createElement(
              "span",
              { className: "svg-icon-success svg-icon-2x" },
              r.a.createElement(Fe.a, {
                src: De("/media/svg/icons/Files/File-plus.svg"),
              })
            )
          )
        );
      });
      function ka() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            Xe.a,
            {
              placement: "left",
              overlay: r.a.createElement(
                Je.a,
                { id: "quick-actions-tooltip" },
                "Quick actions"
              ),
            },
            r.a.createElement(
              Ze.a,
              { className: "dropdown-inline", drop: "down", alignRight: !0 },
              r.a.createElement(Ze.a.Toggle, {
                as: Da,
                id: "dropdown-toggle-quick-actions-subheader",
              }),
              r.a.createElement(
                Ze.a.Menu,
                {
                  className:
                    "dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right",
                },
                r.a.createElement($e, null)
              )
            )
          )
        );
      }
      function La(e) {
        var t = e.items;
        return t && t.length
          ? r.a.createElement(
              "ul",
              {
                className:
                  "breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2",
              },
              r.a.createElement(
                "li",
                { className: "breadcrumb-item" },
                r.a.createElement(
                  Te.b,
                  { to: "/dashboard" },
                  r.a.createElement("i", {
                    className: "flaticon2-shelter text-muted icon-1x",
                  })
                )
              ),
              t.map(function(e, t) {
                return r.a.createElement(
                  "li",
                  { key: "bc".concat(t), className: "breadcrumb-item" },
                  r.a.createElement(
                    Te.b,
                    { className: "text-muted", to: { pathname: e.pathname } },
                    e.title
                  )
                );
              })
            )
          : "";
      }
      function Ia(e, t) {
        var a = { breadcrumbs: [], title: "" },
          n = document.getElementById(e);
        if (!n) return a;
        var r = Array.from(n.getElementsByClassName("active") || []).filter(
          function(e) {
            return "A" === e.tagName;
          }
        );
        return r
          ? (r.forEach(function(e) {
              var t = e.getElementsByClassName("menu-text");
              if (t) {
                var n = Array.from(t).find(function(e) {
                  return e.innerHTML;
                });
                n &&
                  a.breadcrumbs.push({
                    pathname: e.pathname,
                    title: n.innerHTML,
                  });
              }
            }),
            (a.title = (function(e, t) {
              if (!e || !t) return "";
              var a = e.find(function(e) {
                return e.pathname === t;
              });
              if (!a) return "";
              return a.title;
            })(a.breadcrumbs, t)),
            a)
          : a;
      }
      var Ra = Object(n.createContext)();
      function Ua() {
        return Object(n.useContext)(Ra);
      }
      Ra.Consumer;
      function Pa(e) {
        var t = e.children,
          a = Object(n.useState)(""),
          i = Object(Ye.a)(a, 2),
          l = i[0],
          o = i[1],
          s = Object(n.useState)([]),
          c = Object(Ye.a)(s, 2),
          m = {
            title: l,
            setTitle: o,
            breadcrumbs: c[0],
            setBreadcrumbs: c[1],
          };
        return r.a.createElement(Ra.Provider, { value: m }, t);
      }
      var _a = a(294),
        Fa = a.n(_a);
      function ja() {
        var e = We(),
          t = Object(Se.h)(),
          a = Ua(),
          i = Object(n.useMemo)(
            function() {
              return {
                config: e.config,
                subheaderMobileToggle: we.a.get(
                  e.config,
                  "subheader.mobile-toggle"
                ),
                subheaderCssClasses: e.getClasses("subheader", !0),
                subheaderContainerCssClasses: e.getClasses(
                  "subheader_container",
                  !0
                ),
              };
            },
            [e]
          );
        Object(n.useLayoutEffect)(
          function() {
            var e = Ia("kt_aside_menu", t.pathname),
              n = Ia("kt_header_menu", t.pathname);
            a.setBreadcrumbs(e.breadcrumbs || n.breadcrumbs),
              a.setTitle(e.title || n.title);
          },
          [t.pathname]
        );
        var l = Fa()().format("dddd, MMMM Do YYYY, h:mm a");
        return (
          Object(n.useEffect)(function() {}, [a]),
          r.a.createElement(
            "div",
            {
              id: "kt_subheader",
              className: "subheader py-2 py-lg-4   ".concat(
                i.subheaderCssClasses
              ),
            },
            r.a.createElement(
              "div",
              {
                className: "".concat(
                  i.subheaderContainerCssClasses,
                  " d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap"
                ),
              },
              r.a.createElement(
                "div",
                { className: "d-flex align-items-center flex-wrap mr-1" },
                i.subheaderMobileToggle &&
                  r.a.createElement(
                    "button",
                    {
                      className:
                        "burger-icon burger-icon-left mr-4 d-inline-block d-lg-none",
                      id: "kt_subheader_mobile_toggle",
                    },
                    r.a.createElement("span", null)
                  ),
                r.a.createElement(
                  "div",
                  { className: "d-flex align-items-baseline mr-5" },
                  r.a.createElement(
                    "h5",
                    { className: "text-dark font-weight-bold my-2 mr-5" },
                    r.a.createElement(r.a.Fragment, null, a.title)
                  )
                ),
                r.a.createElement(La, { items: a.breadcrumbs })
              ),
              r.a.createElement(
                "div",
                { className: "d-flex align-items-center" },
                r.a.createElement(
                  "a",
                  {
                    href: "",
                    className: "btn btn-light btn-sm font-weight-bold",
                    id: "kt_dashboard_daterangepicker",
                    "data-toggle": "tooltip",
                    title: "Select dashboard daterange",
                    "data-placement": "left",
                  },
                  r.a.createElement(
                    "span",
                    {
                      className: "text-muted font-weight-bold mr-2",
                      id: "kt_dashboard_daterangepicker_title",
                    },
                    l
                  )
                ),
                r.a.createElement(ka, null)
              )
            )
          )
        );
      }
      function Ha() {
        var e = Object(Se.g)(),
          t = Object(Ne.e)(function(e) {
            return e.auth;
          }).user;
        return r.a.createElement(
          "div",
          {
            id: "kt_quick_user",
            className: "offcanvas offcanvas-right offcanvas p-10",
          },
          r.a.createElement(
            "div",
            {
              className:
                "offcanvas-header d-flex align-items-center justify-content-between pb-5",
            },
            r.a.createElement(
              "h3",
              { className: "font-weight-bold m-0" },
              "User Profile"
            ),
            r.a.createElement(
              "a",
              {
                href: "#",
                className: "btn btn-xs btn-icon btn-light btn-hover-primary",
                id: "kt_quick_user_close",
              },
              r.a.createElement("i", {
                className: "ki ki-close icon-xs text-muted",
              })
            )
          ),
          r.a.createElement(
            "div",
            { className: "offcanvas-content pr-5 mr-n5" },
            r.a.createElement(
              "div",
              { className: "d-flex align-items-center mt-5" },
              r.a.createElement(
                "div",
                { className: "d-flex flex-column" },
                r.a.createElement(
                  "a",
                  {
                    href: "#",
                    className:
                      "font-weight-bold font-size-h5 text-dark-75 text-hover-primary",
                  },
                  t.firstname,
                  " ",
                  t.lastname
                ),
                r.a.createElement(
                  "div",
                  { className: "navi mt-2" },
                  r.a.createElement(
                    "a",
                    { href: "#", className: "navi-item" },
                    r.a.createElement(
                      "span",
                      { className: "navi-link p-0 pb-2" },
                      r.a.createElement(
                        "span",
                        { className: "navi-icon mr-1" },
                        r.a.createElement(
                          "span",
                          { className: "svg-icon-lg svg-icon-primary" },
                          r.a.createElement(Fe.a, {
                            src: De(
                              "/media/svg/icons/Communication/Mail-notification.svg"
                            ),
                          })
                        )
                      ),
                      r.a.createElement(
                        "span",
                        {
                          className: "navi-text text-muted text-hover-primary",
                        },
                        t.email
                      )
                    )
                  )
                ),
                r.a.createElement(
                  "button",
                  {
                    className: "btn btn-light-primary btn-bold",
                    onClick: function() {
                      var t = document.getElementById("kt_quick_user_toggle");
                      t && t.click(), e.push("/logout");
                    },
                  },
                  "Sign out"
                )
              )
            ),
            r.a.createElement("div", {
              className: "separator separator-dashed mt-8 mb-5",
            }),
            r.a.createElement(
              "div",
              { className: "navi navi-spacer-x-0 p-0" },
              r.a.createElement(
                Te.b,
                { to: "/profile", className: "navi-item" },
                r.a.createElement(
                  "div",
                  { className: "navi-link" },
                  r.a.createElement(
                    "div",
                    { className: "symbol symbol-40 bg-light mr-3" },
                    r.a.createElement(
                      "div",
                      { className: "symbol-label" },
                      r.a.createElement(
                        "span",
                        { className: "svg-icon svg-icon-md svg-icon-success" },
                        r.a.createElement(Fe.a, {
                          src: De("/media/svg/icons/General/Notification2.svg"),
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "navi-text" },
                    r.a.createElement(
                      "div",
                      { className: "font-weight-bold" },
                      "My Profile"
                    ),
                    r.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "Account settings and more",
                      " ",
                      r.a.createElement(
                        "span",
                        {
                          className:
                            "label label-light-danger label-inline font-weight-bold",
                        },
                        "update"
                      )
                    )
                  )
                )
              ),
              r.a.createElement(
                "a",
                { href: "/user/profile", className: "navi-item" },
                r.a.createElement(
                  "div",
                  { className: "navi-link" },
                  r.a.createElement(
                    "div",
                    { className: "symbol symbol-40 bg-light mr-3" },
                    r.a.createElement(
                      "div",
                      { className: "symbol-label" },
                      r.a.createElement(
                        "span",
                        { className: "svg-icon svg-icon-md svg-icon-warning" },
                        r.a.createElement(Fe.a, {
                          src: De("/media/svg/icons/Shopping/Chart-bar1.svg"),
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "navi-text" },
                    r.a.createElement(
                      "div",
                      { className: "font-weight-bold" },
                      "My Messages"
                    ),
                    r.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "Inbox and tasks"
                    )
                  )
                )
              ),
              r.a.createElement(
                "a",
                { href: "/user/profile", className: "navi-item" },
                r.a.createElement(
                  "div",
                  { className: "navi-link" },
                  r.a.createElement(
                    "div",
                    { className: "symbol symbol-40 bg-light mr-3" },
                    r.a.createElement(
                      "div",
                      { className: "symbol-label" },
                      r.a.createElement(
                        "span",
                        { className: "svg-icon svg-icon-md svg-icon-danger" },
                        r.a.createElement(Fe.a, {
                          src: De("/media/svg/icons/Files/Selected-file.svg"),
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "navi-text" },
                    r.a.createElement(
                      "div",
                      { className: "font-weight-bold" },
                      "My Activities"
                    ),
                    r.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "Logs and notifications"
                    )
                  )
                )
              ),
              r.a.createElement(
                "a",
                { href: "/user/profile", className: "navi-item" },
                r.a.createElement(
                  "div",
                  { className: "navi-link" },
                  r.a.createElement(
                    "div",
                    { className: "symbol symbol-40 bg-light mr-3" },
                    r.a.createElement(
                      "div",
                      { className: "symbol-label" },
                      r.a.createElement(
                        "span",
                        { className: "svg-icon svg-icon-md svg-icon-primary" },
                        r.a.createElement(Fe.a, {
                          src: De(
                            "/media/svg/icons/Communication/Mail-opened.svg"
                          ),
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "navi-text" },
                    r.a.createElement(
                      "div",
                      { className: "font-weight-bold" },
                      "My Tasks"
                    ),
                    r.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "latest tasks and projects"
                    )
                  )
                )
              )
            ),
            r.a.createElement("div", {
              className: "separator separator-dashed my-7",
            })
          )
        );
      }
      function Ba() {
        return r.a.createElement(
          "div",
          { id: "kt_scrolltop", className: "scrolltop" },
          r.a.createElement(
            "span",
            { className: "svg-icon" },
            r.a.createElement(Fe.a, {
              src: De("/media/svg/icons/Navigation/Up-2.svg"),
            })
          ),
          " "
        );
      }
      a(1051);
      function qa(e) {
        var t = e.children,
          a = We(),
          i = Object(n.useMemo)(
            function() {
              return {
                layoutConfig: a.config,
                selfLayout: we.a.get(a.config, "self.layout"),
                asideDisplay: we.a.get(a.config, "aside.self.display"),
                subheaderDisplay: we.a.get(a.config, "subheader.display"),
                desktopHeaderDisplay: we.a.get(
                  a.config,
                  "header.self.fixed.desktop"
                ),
                contentCssClasses: a.getClasses("content", !0),
                contentContainerClasses: a.getClasses("content_container", !0),
                contentExtended: we.a.get(a.config, "content.extended"),
              };
            },
            [a]
          );
        return "blank" !== i.selfLayout
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(ta, null),
              r.a.createElement(
                "div",
                { className: "d-flex flex-column flex-root" },
                r.a.createElement(
                  "div",
                  { className: "d-flex flex-row flex-column-fluid page" },
                  i.asideDisplay && r.a.createElement(ia, null),
                  r.a.createElement(
                    "div",
                    {
                      className: "d-flex flex-column flex-row-fluid wrapper",
                      id: "kt_wrapper",
                    },
                    r.a.createElement(ea, null),
                    r.a.createElement(
                      "div",
                      {
                        id: "kt_content",
                        className: "content ".concat(
                          i.contentCssClasses,
                          " d-flex flex-column flex-column-fluid"
                        ),
                      },
                      i.subheaderDisplay && r.a.createElement(ja, null),
                      !i.contentExtended &&
                        r.a.createElement(
                          "div",
                          { className: "d-flex flex-column-fluid" },
                          r.a.createElement(
                            "div",
                            { className: i.contentContainerClasses },
                            t
                          )
                        ),
                      i.contentExtended && { children: t }
                    ),
                    r.a.createElement(la, null)
                  )
                )
              ),
              r.a.createElement(Ha, null),
              r.a.createElement(Ba, null),
              r.a.createElement(Aa, null)
            )
          : r.a.createElement(
              "div",
              { className: "d-flex flex-column flex-root" },
              t
            );
      }
      function za(e) {
        var t = e.children,
          a = Object(Se.i)() || {},
          i = Object(n.useState)([
            "grid-animateContent",
            "grid-animateContent-finished",
          ]),
          l = Object(Ye.a)(i, 2),
          o = l[0],
          s = l[1];
        return (
          Object(n.useEffect)(
            function() {
              var e = Object(c.a)(o),
                t = e.filter(function(e) {
                  return "grid-animateContent-finished" !== e;
                });
              s(t);
              var a = setTimeout(function() {
                s(e);
              }, 200);
              return function() {
                clearTimeout(a);
              };
            },
            [a.url]
          ),
          r.a.createElement(r.a.Fragment, null, t)
        );
      }
      var Ga = ["children", "component", "render"];
      function Va(e) {
        var t = e.children,
          a = e.component,
          n = e.render,
          i = Object(pt.a)(e, Ga);
        return r.a.createElement(Se.b, i, function(e) {
          return "function" === typeof t
            ? r.a.createElement(za, null, t(e))
            : e.match
            ? t
              ? r.a.createElement(za, null, t)
              : a
              ? r.a.createElement(za, null, r.a.createElement(a, e))
              : n
              ? r.a.createElement(za, null, n(e))
              : null
            : null;
        });
      }
      var Wa = Object(n.createContext)();
      function Qa(e) {
        var t = e.children,
          a = Object(n.useState)(0),
          i = Object(Ye.a)(a, 2),
          l = i[0],
          o = i[1],
          s = l > 0;
        return (
          Object(n.useEffect)(
            function() {
              var e,
                t = document.getElementById("splash-screen");
              return t && s
                ? (t.classList.remove("hidden"),
                  function() {
                    t.classList.add("hidden");
                  })
                : (t &&
                    !s &&
                    (e = setTimeout(function() {
                      t.classList.add("hidden");
                    }, 3e3)),
                  function() {
                    clearTimeout(e);
                  });
            },
            [s]
          ),
          r.a.createElement(Wa.Provider, { value: o }, t)
        );
      }
      function Ya(e) {
        var t = e.visible,
          a = void 0 === t || t,
          r = Object(n.useContext)(Wa);
        return (
          Object(n.useEffect)(
            function() {
              if (a)
                return (
                  r(function(e) {
                    return e + 1;
                  }),
                  function() {
                    r(function(e) {
                      return e - 1;
                    });
                  }
                );
            },
            [r, a]
          ),
          null
        );
      }
      var Ka = a(542),
        Za = a(1222),
        Xa = Object(Ka.a)({
          typography: { fontFamily: ["Poppins"].join(",") },
          palette: {
            primary: { main: "#17c191" },
            secondary: { main: "#3783e7" },
            error: { main: "#f018a6" },
          },
          props: {
            MuiButtonBase: { disableRipple: !0 },
            MuiPopover: { elevation: 1 },
          },
        });
      function Ja(e) {
        var t = e.children;
        return r.a.createElement(Za.a, { theme: Xa }, t);
      }
      var $a = a(16);
      a(1226), a(1231);
      function en() {}
      function tn() {
        return r.a.createElement("h1", null, "Hello Biggie!");
      }
      var an = a(186),
        nn = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            var e;
            Object(u.a)(this, a);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                data: "",
                books_published: "",
                publishers: "",
                customers: "",
                sales: "",
              }),
              (e.get_data = Object(an.a)(
                v.a.mark(function t() {
                  var a, n;
                  return v.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            s.a.get(
                              "".concat(
                                "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                                "/get_dashboard_params"
                              )
                            )
                          );
                        case 2:
                          return (
                            (a = t.sent),
                            e.setState({
                              books_published: a.data.data[2][0].books,
                              customers: a.data.data[0][0].users,
                              publishers: a.data.data[1][0].publishers,
                            }),
                            (t.next = 6),
                            s.a.get(
                              "".concat(
                                Object({
                                  NODE_ENV: "production",
                                  PUBLIC_URL: "",
                                  REACT_APP_BASE_URL:
                                    "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                                }).REACT_APP_BASE_URL_USER,
                                "/get_sales_by_period"
                              )
                            )
                          );
                        case 6:
                          (n = t.sent),
                            e.setState({ sales: n.data.data[0].sales });
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "componentDidMount",
                value: function() {
                  this.get_data();
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.customers,
                    t = this.state.sales,
                    a = this.state.publishers,
                    n = this.state.books_published;
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "row" },
                      r.a.createElement(
                        "div",
                        { className: "col-xl-3" },
                        r.a.createElement(
                          "div",
                          {
                            className:
                              "card card-custom bg-light-success card-stretch gutter-b",
                          },
                          r.a.createElement(
                            "div",
                            { className: "card-body" },
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "svg-icon svg-icon-2x svg-icon-success",
                              },
                              r.a.createElement(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                                  width: "24px",
                                  height: "24px",
                                  viewBox: "0 0 24 24",
                                  version: "1.1",
                                },
                                r.a.createElement(
                                  "g",
                                  {
                                    stroke: "none",
                                    strokeWidth: 1,
                                    fill: "none",
                                    fillRule: "evenodd",
                                  },
                                  r.a.createElement("rect", {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                  }),
                                  r.a.createElement("path", {
                                    d:
                                      "M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z",
                                    fill: "#000000",
                                    opacity: "0.3",
                                  }),
                                  r.a.createElement("path", {
                                    d:
                                      "M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z",
                                    fill: "#000000",
                                  })
                                )
                              ),
                              r.a.createElement(
                                "span",
                                {
                                  className:
                                    "card-title font-weight-bolder text-dark-75 font-size-h4 mb-5 mt-6 ml-4",
                                },
                                "Total Sales"
                              )
                            ),
                            t
                              ? r.a.createElement(
                                  r.a.Fragment,
                                  null,
                                  r.a.createElement(
                                    "span",
                                    {
                                      className:
                                        "font-weight-bold mt-5 font-size-h2 d-block",
                                    },
                                    "\u20a6 ",
                                    t
                                  )
                                )
                              : r.a.createElement("div", { className: "" })
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-xl-3" },
                        r.a.createElement(
                          "div",
                          {
                            className:
                              "card card-custom bg-light-danger card-stretch gutter-b",
                          },
                          r.a.createElement(
                            "div",
                            { className: "card-body" },
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "svg-icon svg-icon-2x svg-icon-danger",
                              },
                              r.a.createElement(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                                  width: "24px",
                                  height: "24px",
                                  viewBox: "0 0 24 24",
                                  version: "1.1",
                                },
                                r.a.createElement(
                                  "g",
                                  {
                                    stroke: "none",
                                    strokeWidth: 1,
                                    fill: "none",
                                    fillRule: "evenodd",
                                  },
                                  r.a.createElement("polygon", {
                                    points: "0 0 24 0 24 24 0 24",
                                  }),
                                  r.a.createElement("path", {
                                    d:
                                      "M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z",
                                    fill: "#000000",
                                    fillRule: "nonzero",
                                    opacity: "0.3",
                                  }),
                                  r.a.createElement("path", {
                                    d:
                                      "M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z",
                                    fill: "#000000",
                                    fillRule: "nonzero",
                                  })
                                )
                              )
                            ),
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block",
                              },
                              e || "0"
                            ),
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "font-weight-bold text-muted font-size-h5",
                              },
                              "Active Customers"
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-xl-3" },
                        r.a.createElement(
                          "div",
                          {
                            className:
                              "card card-custom bg-light-info card-stretch gutter-b",
                          },
                          r.a.createElement(
                            "div",
                            { className: "card-body" },
                            r.a.createElement(
                              "span",
                              {
                                className: "svg-icon svg-icon-2x svg-icon-info",
                              },
                              r.a.createElement(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                                  width: "24px",
                                  height: "24px",
                                  viewBox: "0 0 24 24",
                                  version: "1.1",
                                },
                                r.a.createElement(
                                  "g",
                                  {
                                    stroke: "none",
                                    strokeWidth: 1,
                                    fill: "none",
                                    fillRule: "evenodd",
                                  },
                                  r.a.createElement("polygon", {
                                    points: "0 0 24 0 24 24 0 24",
                                  }),
                                  r.a.createElement("path", {
                                    d:
                                      "M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z",
                                    fill: "#000000",
                                    fillRule: "nonzero",
                                    opacity: "0.3",
                                  }),
                                  r.a.createElement("path", {
                                    d:
                                      "M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z",
                                    fill: "#000000",
                                    fillRule: "nonzero",
                                  })
                                )
                              )
                            ),
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block",
                              },
                              a || "0"
                            ),
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "font-weight-bold text-muted font-size-h5",
                              },
                              "Active Supliers"
                            )
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-xl-3" },
                        r.a.createElement(
                          "div",
                          {
                            className:
                              "card card-custom bg-light-warning card-stretch gutter-b",
                          },
                          r.a.createElement(
                            "div",
                            { className: "card-body" },
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "svg-icon svg-icon-2x svg-icon-warning",
                              },
                              r.a.createElement(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                                  width: "24px",
                                  height: "24px",
                                  viewBox: "0 0 24 24",
                                  version: "1.1",
                                },
                                r.a.createElement(
                                  "g",
                                  {
                                    stroke: "none",
                                    strokeWidth: 1,
                                    fill: "none",
                                    fillRule: "evenodd",
                                  },
                                  r.a.createElement("rect", {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                  }),
                                  r.a.createElement("path", {
                                    d:
                                      "M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z",
                                    fill: "#000000",
                                  }),
                                  r.a.createElement("path", {
                                    d:
                                      "M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z",
                                    fill: "#000000",
                                    opacity: "0.3",
                                  })
                                )
                              )
                            ),
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "card-title font-weight-bolder text-dark-75 font-size-h2 mb-0 mt-6 d-block",
                              },
                              n || "0"
                            ),
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "font-weight-bold text-muted font-size-h5",
                              },
                              "Active Catalogues"
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        rn = a(295),
        ln = a.n(rn),
        on = a(296),
        sn = a.n(on),
        cn = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            var e;
            Object(u.a)(this, a);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                transactions: "",
                days: "",
              }),
              (e.get_data = Object(an.a)(
                v.a.mark(function t() {
                  var a;
                  return v.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            s.a.get(
                              "".concat(
                                Object({
                                  NODE_ENV: "production",
                                  PUBLIC_URL: "",
                                  REACT_APP_BASE_URL:
                                    "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                                }).REACT_APP_BASE_URL_USER,
                                "/get_transactions_by_period"
                              )
                            )
                          );
                        case 2:
                          (a = t.sent), e.get_series(a.data.data);
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "componentDidMount",
                value: function() {
                  this.get_data();
                },
              },
              {
                key: "get_series",
                value: function(e) {
                  var t = [],
                    a = [];
                  e.filter(function(e) {
                    var n = Number(e.amount_paid),
                      r = Fa()(e.updated_at).format("Do-MM-YYYY");
                    t.push(n), a.push(r);
                  }),
                    this.setState({ transactions: t, days: a });
                },
              },
              {
                key: "render",
                value: function() {
                  var e = {
                    chart: { zoomType: "x" },
                    title: { text: "Transactions" },
                    xAxis: { categories: this.state.days },
                    yAxis: { title: { text: "Amount" } },
                    rangeSelector: { enabled: !1 },
                    series: [
                      {
                        type: "line",
                        data: this.state.transactions,
                        allowPointSelect: !0,
                      },
                    ],
                    credits: { enabled: !1 },
                  };
                  return r.a.createElement(
                    "div",
                    { className: "mt-5 mb-5" },
                    r.a.createElement(sn.a, {
                      highcharts: ln.a,
                      constructorType: "stockChart",
                      options: e,
                    })
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        mn = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            var e;
            Object(u.a)(this, a);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = { books: [] }), e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  s.a
                    .get(
                      "".concat(
                        Object({
                          NODE_ENV: "production",
                          PUBLIC_URL: "",
                          REACT_APP_BASE_URL:
                            "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                        }).REACT_APP_BASE_URL_USER,
                        "/get_books?count=3"
                      )
                    )
                    .then(function(t) {
                      e.setState({ books: t.data.data });
                    });
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.books;
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "mt-5 mb-5" },
                      r.a.createElement(
                        "div",
                        { className: "card card-custom " },
                        r.a.createElement(
                          "div",
                          { className: "card-header border-0 pt-5" },
                          r.a.createElement(
                            "h3",
                            {
                              className:
                                "card-title align-items-start flex-column",
                            },
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "card-label font-weight-bolder text-dark",
                              },
                              "Latest Catalogues Uploaded"
                            )
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "card-body pt-3 pb-0" },
                          r.a.createElement(
                            "div",
                            { className: "table-responsive" },
                            r.a.createElement(
                              "table",
                              {
                                className:
                                  "table table-borderless table-vertical-center",
                              },
                              r.a.createElement(
                                "thead",
                                null,
                                r.a.createElement(
                                  "tr",
                                  null,
                                  r.a.createElement("th", {
                                    className: "p-0",
                                    style: { width: "50px" },
                                  }),
                                  r.a.createElement("th", {
                                    className: "p-0",
                                    style: { minWidth: "125px" },
                                  }),
                                  r.a.createElement("th", {
                                    className: "p-0",
                                    style: { minWidth: "100px" },
                                  }),
                                  r.a.createElement("th", {
                                    className: "p-0",
                                    style: { minWidth: "125px" },
                                  }),
                                  r.a.createElement("th", {
                                    className: "p-0",
                                    style: { minWidth: "110px" },
                                  })
                                )
                              ),
                              r.a.createElement(
                                "tbody",
                                null,
                                e &&
                                  e.map(function(e) {
                                    return r.a.createElement(
                                      "tr",
                                      null,
                                      r.a.createElement(
                                        "td",
                                        { className: "pl-0 py-4" },
                                        r.a.createElement(
                                          "div",
                                          { className: "symbol symbol-50" },
                                          r.a.createElement(
                                            "span",
                                            { className: "symbol-label" },
                                            r.a.createElement("img", {
                                              src: ""
                                                .concat(
                                                  Object({
                                                    NODE_ENV: "production",
                                                    PUBLIC_URL: "",
                                                    REACT_APP_BASE_URL:
                                                      "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                                                  }).REACT_APP_IMAGE_URL,
                                                  "/"
                                                )
                                                .concat(e.front_cover),
                                              className: "img-fluid symbol",
                                              style: { height: "70px" },
                                              alt: "",
                                            })
                                          )
                                        )
                                      ),
                                      r.a.createElement(
                                        "td",
                                        { className: "pl-0" },
                                        r.a.createElement(
                                          "span",
                                          {
                                            className:
                                              "text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg",
                                          },
                                          e.title ? e.title : "Untitled"
                                        )
                                      ),
                                      r.a.createElement(
                                        "td",
                                        { className: "text-right" },
                                        r.a.createElement(
                                          "span",
                                          {
                                            className:
                                              "text-muted font-weight-500",
                                          },
                                          e.firstname
                                        )
                                      ),
                                      r.a.createElement(
                                        "td",
                                        { className: "text-right" },
                                        r.a.createElement(
                                          "span",
                                          {
                                            className:
                                              "text-muted font-weight-500",
                                          },
                                          e.lastname
                                        )
                                      ),
                                      r.a.createElement(
                                        "td",
                                        { className: "text-right" },
                                        r.a.createElement(
                                          "span",
                                          {
                                            className:
                                              "text-dark-75 font-weight-bolder d-block font-size-lg",
                                          },
                                          e.price
                                        )
                                      ),
                                      r.a.createElement(
                                        "td",
                                        { className: "text-right" },
                                        r.a.createElement(
                                          "span",
                                          {
                                            className:
                                              "text-muted font-weight-500",
                                          },
                                          e.isbn
                                        )
                                      )
                                    );
                                  })
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        un = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(d.a)(a, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(cn, null)
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(mn, null)
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        dn = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            var e;
            Object(u.a)(this, a);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                customers: "",
                days: "",
              }),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "get_series",
                value: function(e) {
                  var t = [],
                    a = [];
                  e.filter(function(e) {
                    var n = e.user_signups,
                      r = e.curr_day;
                    t.push(n), a.push(r);
                  }),
                    this.setState({ customers: t, days: a });
                },
              },
              {
                key: "render",
                value: function() {
                  var e = {
                    chart: { zoomType: "x" },
                    title: { text: "Customers" },
                    xAxis: { categories: this.state.days },
                    yAxis: { title: { text: "Customers" } },
                    rangeSelector: { enabled: !1 },
                    series: [
                      {
                        type: "line",
                        data: this.state.customers,
                        allowPointSelect: !0,
                      },
                    ],
                    credits: { enabled: !1 },
                  };
                  return r.a.createElement(
                    "div",
                    { className: "mt-5 mb-5" },
                    r.a.createElement(sn.a, {
                      highcharts: ln.a,
                      constructorType: "stockChart",
                      options: e,
                    })
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        fn = a(50),
        En = a.n(fn);
      var pn = function(e) {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              Te.b,
              {
                title: "View Transaction",
                className:
                  "btn btn-icon btn-light btn-hover-primary btn-sm mx-3",
                to: "/subscriptions/requery/" + e,
              },
              r.a.createElement(
                "span",
                { className: "svg-icon svg-icon-md svg-icon-primary" },
                r.a.createElement(Fe.a, {
                  src: De("/media/svg/icons/General/Visible.svg"),
                })
              )
            )
          );
        },
        gn = function(e) {
          return e || "n/a";
        },
        bn = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            var e;
            Object(u.a)(this, a);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                transactions: [],
              }),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this;
                  s.a
                    .get(
                      "".concat(
                        "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                        "/all_transactions?count=3"
                      )
                    )
                    .then(function(t) {
                      e.setState({ transactions: t.data.data });
                    });
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.transactions,
                    t = [
                      {
                        dataField: "transaction_ref",
                        text: "TXN",
                        style: { minWidth: "150px" },
                      },
                      {
                        dataField: "payment_currency",
                        text: "currency",
                        formatter: gn,
                      },
                      {
                        dataField: "amount_paid",
                        text: "Amount",
                        formatter: gn,
                      },
                      { dataField: "created_at", text: "Date Initiated" },
                      {
                        dataField: "updated_at",
                        text: "Date Completed",
                        formatter: gn,
                      },
                      { dataField: "status", text: "Status" },
                      { dataField: "id", text: "Actions", formatter: pn },
                    ];
                  return r.a.createElement(
                    "div",
                    { className: "mt-5 mb-5" },
                    r.a.createElement(
                      "div",
                      { className: "card card-custom" },
                      r.a.createElement(
                        "div",
                        {
                          className: "card-header flex-wrap border-0 pt-6 pb-0",
                        },
                        r.a.createElement(
                          "div",
                          { className: "card-title" },
                          r.a.createElement(
                            "h3",
                            { className: "card-label" },
                            "Recent Transactions"
                          )
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "card-body" },
                        r.a.createElement(En.a, {
                          wrapperClasses: "table-responsive",
                          bordered: !1,
                          classes:
                            "table table-head-custom table-vertical-center mb-5",
                          id: "kt_datatable_2",
                          keyField: "transaction_ref",
                          bootstrap4: !0,
                          remote: !0,
                          data: e,
                          columns: t,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        hn = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(d.a)(a, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(dn, null)
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(bn, null)
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        vn =
          (a(1089),
          (function(e) {
            Object(xe.a)(a, e);
            var t = Object(Ae.a)(a);
            function a() {
              var e;
              Object(u.a)(this, a);
              for (
                var n = arguments.length, r = new Array(n), i = 0;
                i < n;
                i++
              )
                r[i] = arguments[i];
              return (
                ((e = t.call.apply(t, [this].concat(r))).state = { books: [] }),
                e
              );
            }
            return (
              Object(d.a)(a, [
                {
                  key: "componentDidMount",
                  value: function() {
                    var e = this;
                    s.a
                      .get(
                        "".concat(
                          Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            REACT_APP_BASE_URL:
                              "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                          }).REACT_APP_BASE_URL_USER,
                          "/explore/highest_sold?count=5"
                        )
                      )
                      .then(function(t) {
                        e.setState({ books: t.data.data });
                      });
                  },
                },
                {
                  key: "render",
                  value: function() {
                    var e = this.state.books;
                    return r.a.createElement(
                      "div",
                      { className: "" },
                      r.a.createElement(
                        "div",
                        { className: "card card-custom" },
                        r.a.createElement(
                          "div",
                          {
                            className:
                              "card-header flex-wrap border-0 pt-6 pb-0",
                          },
                          r.a.createElement(
                            "div",
                            { className: "card-title" },
                            r.a.createElement(
                              "h3",
                              { className: "card-label" },
                              "Best Selling Books"
                            )
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "card-body" },
                          r.a.createElement(En.a, {
                            wrapperClasses: "table-responsive",
                            bordered: !1,
                            classes:
                              "table table-head-custom table-head-bg table-borderless table-vertical-center mt-5 mb-5",
                            id: "kt_datatable_2",
                            keyField: "id",
                            bootstrap4: !0,
                            data: e,
                            columns: [
                              { dataField: "id", text: "S/N" },
                              { dataField: "title", text: "Title" },
                              { dataField: "firstname", text: "Firstname" },
                              { dataField: "lastname", text: "Lastname" },
                              { dataField: "isbn", text: "ISBN" },
                              {
                                dataField: "total_purchase",
                                text: "Total Purchase",
                              },
                            ],
                            pagination: zt()(),
                          })
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(r.a.Component)),
        yn =
          (n.Component,
          (function(e) {
            Object(xe.a)(a, e);
            var t = Object(Ae.a)(a);
            function a() {
              return Object(u.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(d.a)(a, [
                {
                  key: "render",
                  value: function() {
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(nn, null),
                      r.a.createElement(un, null),
                      r.a.createElement(hn, null)
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component));
      function Cn() {
        return r.a.createElement(yn, null);
      }
      function Nn() {
        var e = Object(Ne.e)(function(e) {
          return { isLoading: e.customers.listLoading };
        }, Ne.c).isLoading;
        return (
          Object(n.useEffect)(function() {}, [e]),
          r.a.createElement(Xt, { isLoading: e, text: "Loading ..." })
        );
      }
      var Tn = a(1224),
        On = "".concat("https://muntu-designs-api.herokuapp.com/api/v1/admin");
      var Sn = a(62),
        Mn = a.n(Sn),
        wn = G.actions,
        xn = function(e, t) {
          return function(a) {
            if (
              (a(wn.startCall({ callType: q })), console.log(e), "" == e.filter)
            )
              return s.a
                .get(On + "/get_all_users")
                .then(function(e) {
                  var t = e.data.data;
                  console.log(t);
                  var n = t.length;
                  a(wn.fetchCustomers({ totalCount: n, entities: t }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't find customers"),
                    a(wn.catchError({ error: e, callType: q }));
                });
            var n = new f();
            if ("" == e.filter.lastname && "" == e.filter.is_active) {
              var r = t.length,
                i = t;
              a(wn.customersFetched({ totalCount: r, entities: i }));
            } else {
              var l = n.baseFilter(t, e),
                o = l.totalCount,
                c = l.entities;
              a(wn.customersFetched({ totalCount: o, entities: c }));
            }
          };
        },
        An = function(e) {
          return function(t) {
            return e
              ? (t(wn.startCall({ callType: z })),
                ((a = e), s.a.get("".concat(On, "/").concat(a)))
                  .then(function(e) {
                    var a = e.data;
                    t(wn.customerFetched({ customerForEdit: a }));
                  })
                  .catch(function(e) {
                    (e.clientMessage = "Can't find customer"),
                      t(wn.catchError({ error: e, callType: z }));
                  }))
              : t(wn.customerFetched({ customerForEdit: void 0 }));
            var a;
          };
        },
        Dn = function(e) {
          return function(t) {
            return (
              t(wn.startCall({ callType: z })),
              ((a = e), s.a.post(On, { customer: a }))
                .then(function(e) {
                  var a = e.data.customer;
                  t(wn.customerCreated({ customer: a }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't create customer"),
                    t(wn.catchError({ error: e, callType: z }));
                })
            );
            var a;
          };
        },
        kn = function(e) {
          return function(t) {
            return (
              t(wn.startCall({ callType: z })),
              (function(e) {
                return s.a.put("".concat(On, "/").concat(e.id), {
                  customer: e,
                });
              })(e)
                .then(function() {
                  t(wn.customerUpdated({ customer: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't update customer"),
                    t(wn.catchError({ error: e, callType: z }));
                })
            );
          };
        },
        Ln = function(e, t) {
          return function(t) {
            return (
              t(wn.startCall({ callType: z })),
              (function(e) {
                return s.a.put("".concat(On, "/toggle_user/").concat(e));
              })(e)
                .then(function() {
                  Mn()("status changed successfully").then(function() {
                    window.location.reload(!1);
                  });
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't update customers status"),
                    t(wn.catchError({ error: e, callType: z }));
                })
            );
          };
        };
      function In(e) {
        var t = e.id,
          a = Object(Ne.e)(function(e) {
            return {
              customerForEdit: e.customers.customerForEdit,
              actionsLoading: e.customers.actionsLoading,
            };
          }, Ne.c),
          i = a.customerForEdit,
          l = a.actionsLoading,
          o = Object(n.useState)(""),
          s = Object(Ye.a)(o, 2),
          c = s[0],
          m = s[1];
        return (
          Object(n.useEffect)(
            function() {
              var e = t ? "" : "New Customer";
              i &&
                t &&
                (e = "Edit customer '"
                  .concat(i.firstName, " ")
                  .concat(i.lastName, "'")),
                m(e);
            },
            [i, l]
          ),
          r.a.createElement(
            r.a.Fragment,
            null,
            l && r.a.createElement($t, null),
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                c
              )
            )
          )
        );
      }
      var Rn = a(18),
        Un = Rn.d().shape({
          firstName: Rn.e()
            .min(3, "Minimum 3 symbols")
            .max(50, "Maximum 50 symbols")
            .required("Firstname is required"),
          lastName: Rn.e()
            .min(3, "Minimum 3 symbols")
            .max(50, "Maximum 50 symbols")
            .required("Lastname is required"),
          email: Rn.e()
            .email("Invalid email")
            .required("Email is required"),
          userName: Rn.e().required("Username is required"),
          dateOfBbirth: Rn.b()
            .nullable(!1)
            .required("Date of Birth is required"),
          ipAddress: Rn.e().required("IP Address is required"),
        });
      function Pn(e) {
        var t = e.saveCustomer,
          a = e.customer,
          n = e.actionsLoading,
          i = e.onHide;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              enableReinitialize: !0,
              initialValues: a,
              validationSchema: Un,
              onSubmit: function(e) {
                t(e);
              },
            },
            function(e) {
              var t = e.handleSubmit;
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  Tn.a.Body,
                  { className: "overlay overlay-block" },
                  n &&
                    r.a.createElement(
                      "div",
                      { className: "overlay-layer bg-transparent" },
                      r.a.createElement("div", {
                        className: "spinner spinner-lg spinner-success",
                      })
                    ),
                  r.a.createElement(
                    xt.b,
                    { className: "form form-label-right" },
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-4" },
                        r.a.createElement(xt.a, {
                          name: "firstName",
                          component: _t,
                          placeholder: "First Name",
                          label: "First Name",
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-4" },
                        r.a.createElement(xt.a, {
                          name: "lastName",
                          component: _t,
                          placeholder: "Last Name",
                          label: "Last Name",
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-4" },
                        r.a.createElement(xt.a, {
                          name: "userName",
                          component: _t,
                          placeholder: "Login",
                          label: "Login",
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-4" },
                        r.a.createElement(xt.a, {
                          type: "email",
                          name: "email",
                          component: _t,
                          placeholder: "Email",
                          label: "Email",
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-4" },
                        r.a.createElement(Lt, {
                          name: "dateOfBbirth",
                          label: "Date of Birth",
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-4" },
                        r.a.createElement(xt.a, {
                          name: "ipAddress",
                          component: _t,
                          placeholder: "IP Address",
                          label: "IP Address",
                          customFeedbackLabel:
                            "We'll never share customer IP Address with anyone else",
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-4" },
                        r.a.createElement(
                          Ht,
                          { name: "Gender", label: "Gender" },
                          r.a.createElement(
                            "option",
                            { value: "Female" },
                            "Female"
                          ),
                          r.a.createElement("option", { value: "Male" }, "Male")
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-4" },
                        r.a.createElement(
                          Ht,
                          { name: "type", label: "Type" },
                          r.a.createElement(
                            "option",
                            { value: "0" },
                            "Business"
                          ),
                          r.a.createElement(
                            "option",
                            { value: "1" },
                            "Individual"
                          )
                        )
                      )
                    )
                  )
                ),
                r.a.createElement(
                  Tn.a.Footer,
                  null,
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: i,
                      className: "btn btn-light btn-elevate",
                    },
                    "Cancel"
                  ),
                  r.a.createElement(r.a.Fragment, null, " "),
                  r.a.createElement(
                    "button",
                    {
                      type: "submit",
                      onClick: function() {
                        return t();
                      },
                      className: "btn btn-primary btn-elevate",
                    },
                    "Save"
                  )
                )
              );
            }
          )
        );
      }
      var _n = ["danger", "success", "info", ""],
        Fn = ["Inactive", "Active", "Pending", ""],
        jn = [{ dataField: "id", order: "asc" }],
        Hn = [
          { text: "3", value: 3 },
          { text: "5", value: 5 },
          { text: "10", value: 10 },
        ],
        Bn = {
          filter: "",
          sortOrder: "asc",
          sortField: "id",
          pageNumber: 1,
          pageSize: 10,
        },
        qn = Object(n.createContext)();
      function zn() {
        return Object(n.useContext)(qn);
      }
      qn.Consumer;
      function Gn(e) {
        var t = e.customersUIEvents,
          a = e.children,
          i = Object(n.useState)(Bn),
          l = Object(Ye.a)(i, 2),
          o = l[0],
          s = l[1],
          c = Object(n.useState)([]),
          m = Object(Ye.a)(c, 2),
          u = m[0],
          d = m[1],
          f = Object(n.useCallback)(function(e) {
            s(function(t) {
              return (
                Object($a.isFunction)(e) && (e = e(t)),
                Object($a.isEqual)(t, e) ? t : e
              );
            });
          }, []),
          E = {
            queryParams: o,
            setQueryParamsBase: s,
            ids: u,
            setIds: d,
            setQueryParams: f,
            initCustomer: {
              id: void 0,
              firstName: "",
              lastName: "",
              email: "",
              userName: "",
              gender: "Female",
              status: 0,
              dateOfBbirth: "",
              ipAddress: "",
              type: 1,
            },
            newCustomerButtonClick: t.newCustomerButtonClick,
            openEditCustomerDialog: t.openEditCustomerDialog,
            openDeleteCustomerDialog: t.openDeleteCustomerDialog,
            openDeleteCustomersDialog: t.openDeleteCustomersDialog,
            openFetchCustomersDialog: t.openFetchCustomersDialog,
            openUpdateCustomersStatusDialog: t.openUpdateCustomersStatusDialog,
          };
        return r.a.createElement(qn.Provider, { value: E }, a);
      }
      function Vn(e) {
        var t = e.id,
          a = e.show,
          i = e.onHide,
          l = zn(),
          o = Object(n.useMemo)(
            function() {
              return { initCustomer: l.initCustomer };
            },
            [l]
          ),
          s = Object(Ne.d)(),
          c = Object(Ne.e)(function(e) {
            return {
              actionsLoading: e.customers.actionsLoading,
              customerForEdit: e.customers.customerForEdit,
            };
          }, Ne.c),
          m = c.actionsLoading,
          u = c.customerForEdit;
        Object(n.useEffect)(
          function() {
            s(An(t));
          },
          [t, s]
        );
        return r.a.createElement(
          Tn.a,
          {
            size: "lg",
            show: a,
            onHide: i,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          r.a.createElement(In, { id: t }),
          r.a.createElement(Pn, {
            saveCustomer: function(e) {
              t
                ? s(kn(e)).then(function() {
                    return i();
                  })
                : s(Dn(e)).then(function() {
                    return i();
                  });
            },
            actionsLoading: m,
            customer: u || o.initCustomer,
            onHide: i,
          })
        );
      }
      var Wn = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function Qn(e) {
        var t = e.show,
          a = e.onHide,
          i = zn(),
          l = Object(n.useMemo)(
            function() {
              return { ids: i.ids };
            },
            [i]
          ),
          o = Object(Ne.e)(function(e) {
            return { customers: Wn(e.customers.entities, l.ids) };
          }, Ne.c).customers;
        return (
          Object(n.useEffect)(
            function() {
              (l.ids && 0 !== l.ids.length) || a();
            },
            [l.ids]
          ),
          r.a.createElement(
            Tn.a,
            {
              show: t,
              onHide: a,
              "aria-labelledby": "example-modal-sizes-title-lg",
            },
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                "Fetch selected elements"
              )
            ),
            r.a.createElement(
              Tn.a.Body,
              null,
              r.a.createElement(
                "div",
                { className: "timeline timeline-5 mt-3" },
                o.map(function(e) {
                  return r.a.createElement(
                    "div",
                    {
                      className: "timeline-item align-items-start",
                      key: "id".concat(e.id),
                    },
                    r.a.createElement("div", {
                      className:
                        "timeline-label font-weight-bolder text-dark-75 font-size-lg text-right pr-3",
                    }),
                    r.a.createElement(
                      "div",
                      { className: "timeline-badge" },
                      r.a.createElement("i", {
                        className: "fa fa-genderless text-".concat(
                          _n[e.status],
                          " icon-xxl"
                        ),
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "timeline-content text-dark-50 mr-5" },
                      r.a.createElement(
                        "span",
                        {
                          className: "label label-lg label-light-".concat(
                            _n[e.status],
                            " label-inline"
                          ),
                        },
                        "ID: ",
                        e.id
                      ),
                      r.a.createElement(
                        "span",
                        { className: "ml-3" },
                        e.lastname,
                        ", ",
                        e.firstname
                      )
                    )
                  );
                })
              )
            ),
            r.a.createElement(
              Tn.a.Footer,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: a,
                    className: "btn btn-light btn-elevate",
                  },
                  "Cancel"
                ),
                r.a.createElement(r.a.Fragment, null, " "),
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: a,
                    className: "btn btn-primary btn-elevate",
                  },
                  "Ok"
                )
              )
            )
          )
        );
      }
      var Yn = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function Kn(e) {
        var t = e.show,
          a = e.onHide,
          i = zn(),
          l = Object(n.useMemo)(
            function() {
              return {
                ids: i.ids,
                setIds: i.setIds,
                queryParams: i.queryParams,
              };
            },
            [i]
          ),
          o = Object(Ne.e)(function(e) {
            return {
              customers: Yn(e.customers.entities, l.ids),
              isLoading: e.customers.actionsLoading,
            };
          }, Ne.c),
          s = o.customers,
          c = o.isLoading;
        Object(n.useEffect)(
          function() {
            (l.ids && 0 !== l.ids.length) || a();
          },
          [l.ids]
        );
        var m = Object(n.useState)(0),
          u = Object(Ye.a)(m, 2),
          d = u[0],
          f = u[1],
          E = Object(Ne.d)();
        return r.a.createElement(
          Tn.a,
          {
            show: t,
            onHide: a,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Status has been updated for selected customers"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            { className: "overlay overlay-block" },
            c &&
              r.a.createElement(
                "div",
                { className: "overlay-layer" },
                r.a.createElement("div", {
                  className: "spinner spinner-lg spinner-primary",
                })
              ),
            r.a.createElement(
              "div",
              { className: "timeline timeline-5 mt-3" },
              s.map(function(e) {
                return r.a.createElement(
                  "div",
                  {
                    className: "timeline-item align-items-start",
                    key: "customersUpdate".concat(e.id),
                  },
                  r.a.createElement("div", {
                    className:
                      "timeline-label font-weight-bolder text-dark-75 font-size-lg text-right pr-3",
                  }),
                  r.a.createElement(
                    "div",
                    { className: "timeline-badge" },
                    r.a.createElement("i", {
                      className: "fa fa-genderless text-".concat(
                        _n[e.status],
                        " icon-xxl"
                      ),
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "timeline-content text-dark-50 mr-5" },
                    r.a.createElement(
                      "span",
                      {
                        className: "label label-lg label-light-".concat(
                          _n[e.status],
                          " label-inline"
                        ),
                      },
                      "ID: ",
                      e.id
                    ),
                    r.a.createElement(
                      "span",
                      { className: "ml-3" },
                      e.lastName,
                      ", ",
                      e.firstName
                    )
                  )
                );
              })
            )
          ),
          r.a.createElement(
            Tn.a.Footer,
            { className: "form" },
            r.a.createElement(
              "div",
              { className: "form-group" },
              r.a.createElement(
                "select",
                {
                  className: "form-control",
                  value: d,
                  onChange: function(e) {
                    return f(+e.target.value);
                  },
                },
                r.a.createElement("option", { value: "0" }, "Suspended"),
                r.a.createElement("option", { value: "1" }, "Active"),
                r.a.createElement("option", { value: "2" }, "Pending")
              )
            ),
            r.a.createElement(
              "div",
              { className: "form-group" },
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: a,
                  className: "btn btn-light btn-elevate mr-3",
                },
                "Cancel"
              ),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    E(Ln(l.ids)).then(function() {
                      l.setIds([]), a();
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Update Status"
              )
            )
          )
        );
      }
      function Zn(e) {
        e.listLoading;
        var t = zn(),
          a = Object(n.useMemo)(
            function() {
              return {
                queryParams: t.queryParams,
                setQueryParams: t.setQueryParams,
              };
            },
            [t]
          ),
          i = function(e) {
            var t = (function(e, t) {
              var a = t.status,
                n = (t.type, t.searchText),
                r = Object(m.a)({}, e),
                i = {};
              return (
                (i.is_active = "" !== a ? a : ""),
                (i.lastname = n),
                n && ((i.firstname = n), (i.email = n)),
                (r.filter = i),
                r
              );
            })(a.queryParams, e);
            Object($a.isEqual)(t, a.queryParams) ||
              ((t.pageNumber = 1), a.setQueryParams(t));
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              initialValues: { status: "", type: "", searchText: "" },
              onSubmit: function(e) {
                i(e);
              },
            },
            function(e) {
              var t = e.values,
                a = e.handleSubmit,
                n = e.handleBlur,
                i = (e.handleChange, e.setFieldValue);
              return r.a.createElement(
                "form",
                { onSubmit: a, className: "form form-label-right" },
                r.a.createElement(
                  "div",
                  { className: "form-group row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement(
                      "select",
                      {
                        className: "form-control",
                        name: "status",
                        placeholder: "Filter by Status",
                        onChange: function(e) {
                          i("status", e.target.value), a();
                        },
                        onBlur: n,
                        value: t.status,
                      },
                      r.a.createElement("option", { value: "" }, "All"),
                      r.a.createElement("option", { value: "0" }, "Susspended"),
                      r.a.createElement("option", { value: "1" }, "Active"),
                      r.a.createElement("option", { value: "2" }, "Pending")
                    ),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Filter"),
                      " by Status"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement("input", {
                      type: "text",
                      className: "form-control",
                      name: "searchText",
                      placeholder: "Search",
                      onBlur: n,
                      value: t.searchText,
                      onChange: function(e) {
                        i("searchText", e.target.value), a();
                      },
                    }),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Search"),
                      " in all fields"
                    )
                  )
                )
              );
            }
          )
        );
      }
      function Xn(e, t) {
        return r.a.createElement(
          "span",
          {
            className:
              1 == t.is_active
                ? "label label-lg label-light-".concat(_n[1], " label-inline")
                : "label label-lg label-light-".concat(_n[0], " label-inline"),
          },
          Fn[t.is_active]
        );
      }
      function Jn() {
        var e = zn(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                setIds: e.setIds,
                queryParams: e.queryParams,
                setQueryParams: e.setQueryParams,
                openEditCustomerDialog: e.openEditCustomerDialog,
                openDeleteCustomerDialog: e.openDeleteCustomerDialog,
              };
            },
            [e]
          ),
          a = Object(Ne.e)(function(e) {
            return { currentState: e.customers };
          }, Ne.c).currentState,
          i = a.totalCount,
          l = a.entities,
          o = a.listLoading,
          s = a.initial_entity,
          c = Object(Ne.d)();
        Object(n.useEffect)(
          function() {
            t.setIds([]), c(xn(t.queryParams, s));
          },
          [t.queryParams, c]
        );
        var m = [
            {
              dataField: "firstname",
              text: "Firstname",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "lastname",
              text: "Lastname",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "email",
              text: "Email",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "phone",
              text: "Phone",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "is_active",
              text: "Status",
              sort: !0,
              sortCaret: je,
              formatter: Xn,
              headerSortingClasses: He,
            },
          ],
          u = {
            custom: !0,
            totalSize: i,
            sizePerPageList: Hn,
            sizePerPage: t.queryParams.pageSize,
            page: t.queryParams.pageNumber,
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            qt.PaginationProvider,
            { pagination: zt()(u) },
            function(e) {
              var a = e.paginationProps,
                n = e.paginationTableProps;
              return r.a.createElement(
                Vt,
                { isLoading: o, paginationProps: a },
                r.a.createElement(
                  En.a,
                  Object.assign(
                    {
                      wrapperClasses: "table-responsive",
                      bordered: !1,
                      classes: "table table-head-custom table-vertical-center",
                      bootstrap4: !0,
                      remote: !0,
                      keyField: "id",
                      data: null === l ? [] : l,
                      columns: m,
                      defaultSorted: jn,
                      onTableChange: Le(t.setQueryParams),
                      selectRow: Pe({
                        entities: l,
                        ids: t.ids,
                        setIds: t.setIds,
                      }),
                    },
                    n
                  ),
                  r.a.createElement(Ie, { entities: l }),
                  r.a.createElement(Re, { entities: l })
                )
              );
            }
          )
        );
      }
      function $n() {
        var e = zn(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                setIds: e.setIds,
                openDeleteCustomersDialog: e.openDeleteCustomersDialog,
                openFetchCustomersDialog: e.openFetchCustomersDialog,
                openUpdateCustomersStatusDialog:
                  e.openUpdateCustomersStatusDialog,
              };
            },
            [e]
          );
        return r.a.createElement(
          "div",
          { className: "form" },
          r.a.createElement(
            "div",
            {
              className:
                "row align-items-center form-group-actions margin-top-20 margin-bottom-20",
            },
            r.a.createElement(
              "div",
              { className: "col-xl-12" },
              r.a.createElement(
                "div",
                { className: "form-group form-group-inline" },
                r.a.createElement(
                  "div",
                  { className: "form-label form-label-no-wrap" },
                  r.a.createElement(
                    "label",
                    { className: "font-bold font-danger" },
                    r.a.createElement(
                      "span",
                      null,
                      "Selected records count: ",
                      r.a.createElement("b", null, t.ids.length)
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  null,
                  "\xa0",
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-light-primary font-weight-bolder font-size-sm",
                      onClick: t.openFetchCustomersDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-stream" }),
                    " Fetch Selected"
                  ),
                  "\xa0",
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-light-primary font-weight-bolder font-size-sm",
                      onClick: t.openUpdateCustomersStatusDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-sync-alt" }),
                    " Update Status"
                  )
                )
              )
            )
          )
        );
      }
      function er() {
        var e = zn(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                newCustomerButtonClick: e.newCustomerButtonClick,
              };
            },
            [e]
          );
        return r.a.createElement(
          wt,
          null,
          r.a.createElement(
            St,
            { title: "Customers list" },
            r.a.createElement(Ot, null)
          ),
          r.a.createElement(
            Mt,
            null,
            r.a.createElement(Zn, null),
            t.ids.length > 0 && r.a.createElement($n, null),
            r.a.createElement(Jn, null)
          )
        );
      }
      function tr(e) {
        var t = e.history,
          a = {
            newCustomerButtonClick: function() {
              t.push("/management/customers/new");
            },
            openEditCustomerDialog: function(e) {
              t.push("/management/customers/".concat(e, "/edit"));
            },
            openDeleteCustomerDialog: function(e) {
              t.push("/management/customers/".concat(e, "/delete"));
            },
            openDeleteCustomersDialog: function() {
              t.push("/management/customers/deleteCustomers");
            },
            openFetchCustomersDialog: function() {
              t.push("/management/customers/fetch");
            },
            openUpdateCustomersStatusDialog: function() {
              t.push("/management/customers/updateStatus");
            },
          };
        return r.a.createElement(
          Gn,
          { customersUIEvents: a },
          r.a.createElement(Nn, null),
          r.a.createElement(
            Se.b,
            { path: "/management/customers/new" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(Vn, {
                show: null != a,
                onHide: function() {
                  t.push("/management/customers");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/customers/:id/edit" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(Vn, {
                show: null != a,
                id: a && a.params.id,
                onHide: function() {
                  t.push("/management/customers");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/customers/fetch" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(Qn, {
                show: null != a,
                onHide: function() {
                  t.push("/management/customers");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/customers/updateStatus" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(Kn, {
                show: null != a,
                onHide: function() {
                  t.push("/management/customers");
                },
              });
            }
          ),
          r.a.createElement(er, null)
        );
      }
      function ar() {
        var e = Object(Ne.e)(function(e) {
          return { isLoading: e.publishers.listLoading };
        }, Ne.c).isLoading;
        return (
          Object(n.useEffect)(function() {}, [e]),
          r.a.createElement(Xt, { isLoading: e, text: "Loading ..." })
        );
      }
      var nr = Object({
        NODE_ENV: "production",
        PUBLIC_URL: "",
        REACT_APP_BASE_URL:
          "https://muntu-designs-api.herokuapp.com/api/v1/admin",
      }).REACT_APP_BASE_URL_BUSINESS;
      var rr = Y.actions,
        ir = function(e, t) {
          return function(a) {
            if ((a(rr.startCall({ callType: W })), "" == e.filter))
              return s.a
                .get(nr + "/all_publishers")
                .then(function(e) {
                  var t = e.data.data,
                    n = t.length;
                  a(rr.fetchPublishers({ totalCount: n, entities: t }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't find Publishers"),
                    a(rr.catchError({ error: e, callType: W }));
                });
            var n = new f();
            if ("" == e.filter.lastname && "" == e.filter.is_active) {
              var r = t.length,
                i = t;
              a(rr.publishersFetched({ totalCount: r, entities: i }));
            } else {
              var l = n.baseFilter(t, e),
                o = l.totalCount,
                c = l.entities;
              a(rr.publishersFetched({ totalCount: o, entities: c }));
            }
          };
        },
        lr = function(e) {
          return function(t) {
            return e
              ? t(rr.publisherFetched({ publisherForEdit: void 0 }))
              : (t(rr.startCall({ callType: Q })),
                ((a = e), s.a.get("".concat(nr, "/get_publisher/").concat(a)))
                  .then(function(e) {
                    var a = e.data;
                    t(rr.publisherFetched({ publisherForEdit: a }));
                  })
                  .catch(function(e) {
                    (e.clientMessage = "Can't find publisher"),
                      t(rr.catchError({ error: e, callType: Q }));
                  }));
            var a;
          };
        },
        or = function(e) {
          return function(t) {
            return (
              t(rr.startCall({ callType: Q })),
              ((a = e), s.a.post(nr + "/create", a))
                .then(function(e) {
                  if (!1 === e.data.status) {
                    var a = e.data.message[0];
                    alert(a);
                  } else {
                    var n = e.data.data;
                    console.log(n),
                      t(rr.publisherCreated({ new_publisher: n }));
                  }
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't create publisher"),
                    t(rr.catchError({ error: e, callType: Q }));
                })
            );
            var a;
          };
        },
        sr = function(e) {
          return function(t) {
            return (
              t(rr.startCall({ callType: Q })),
              (function(e) {
                return s.a.post(
                  "".concat(nr + "/edit_publisher/").concat(e.id),
                  { publisher: e }
                );
              })(e)
                .then(function() {
                  t(rr.publisherUpdated({ publisher: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't update publisher"),
                    t(rr.catchError({ error: e, callType: Q }));
                })
            );
          };
        },
        cr = function(e) {
          return function(t) {
            return (
              t(rr.startCall({ callType: Q })),
              (function(e) {
                return s.a.put("".concat(nr, "/toggle_publisher/").concat(e));
              })(e)
                .then(function(e) {
                  Mn()(e.data.message).then(function() {
                    window.location.reload(!1);
                  });
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't update publishers status"),
                    t(rr.catchError({ error: e, callType: Q }));
                })
            );
          };
        };
      function mr(e) {
        var t = e.id,
          a = Object(Ne.e)(function(e) {
            return {
              publisherForEdit: e.publishers.publisherForEdit,
              actionsLoading: e.publishers.actionsLoading,
            };
          }, Ne.c),
          i = a.publisherForEdit,
          l = a.actionsLoading,
          o = Object(n.useState)(""),
          s = Object(Ye.a)(o, 2),
          c = s[0],
          m = s[1];
        return (
          Object(n.useEffect)(
            function() {
              var e = t ? "" : "New Publisher";
              i &&
                t &&
                (e = "Edit publisher '"
                  .concat(i.firstName, " ")
                  .concat(i.lastName, "'")),
                m(e);
            },
            [i, l]
          ),
          r.a.createElement(
            r.a.Fragment,
            null,
            l && r.a.createElement($t, null),
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                c
              )
            )
          )
        );
      }
      var ur = Rn.d().shape({
        firstname: Rn.e()
          .min(3, "Minimum 3 symbols")
          .max(50, "Maximum 50 symbols")
          .required("Firstname is required"),
        lastname: Rn.e()
          .min(3, "Minimum 3 symbols")
          .max(50, "Maximum 50 symbols")
          .required("Lastname is required"),
        email: Rn.e()
          .email("Invalid email")
          .required("Email is required"),
        phone: Rn.e()
          .min(10, "the phone number is invalid")
          .required("Phone number is required "),
        company_name: Rn.e()
          .min(3, "Minimum 3 symbols")
          .max(50, "Maximum 50 symbols"),
      });
      function dr(e) {
        var t = e.savePublisher,
          a = e.actionsLoading,
          n = e.onHide;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              enableReinitialize: !0,
              initialValues: {
                email: "",
                company_name: " ",
                firstname: "",
                lastname: "",
                phone: "",
              },
              validationSchema: ur,
              onSubmit: function(e) {
                t(e);
              },
            },
            function(e) {
              var t = e.handleSubmit;
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  Tn.a.Body,
                  { className: "overlay overlay-block" },
                  a &&
                    r.a.createElement(
                      "div",
                      { className: "overlay-layer bg-transparent" },
                      r.a.createElement("div", {
                        className: "spinner spinner-lg spinner-success",
                      })
                    ),
                  r.a.createElement(
                    xt.b,
                    { className: "form form-label-right" },
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(xt.a, {
                          name: "firstname",
                          component: _t,
                          placeholder: "First Name",
                          label: "First Name",
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(xt.a, {
                          name: "lastname",
                          component: _t,
                          placeholder: "Last Name",
                          label: "Last Name",
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(xt.a, {
                          type: "email",
                          name: "email",
                          component: _t,
                          placeholder: "Email",
                          label: "Email",
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(xt.a, {
                          type: "tel",
                          name: "phone",
                          component: _t,
                          placeholder: "phone",
                          label: "phone",
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(xt.a, {
                          name: "company_name",
                          component: _t,
                          placeholder: "Company Name",
                          label: "Company Name",
                        })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  Tn.a.Footer,
                  null,
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: n,
                      className: "btn btn-light btn-elevate",
                    },
                    "Cancel"
                  ),
                  r.a.createElement(r.a.Fragment, null, " "),
                  r.a.createElement(
                    "button",
                    {
                      type: "submit",
                      onClick: function() {
                        return t();
                      },
                      className: "btn btn-primary btn-elevate",
                    },
                    "Save"
                  )
                )
              );
            }
          )
        );
      }
      var fr = ["danger", "success", ""],
        Er = ["Inactive", "Active", ""],
        pr = [
          { text: "3", value: 3 },
          { text: "5", value: 5 },
          { text: "10", value: 10 },
        ],
        gr = {
          filter: "",
          sortOrder: "desc",
          sortField: "id",
          pageNumber: 1,
          pageSize: 10,
        },
        br = Object(n.createContext)();
      function hr() {
        return Object(n.useContext)(br);
      }
      br.Consumer;
      function vr(e) {
        var t = e.publishersUIEvents,
          a = e.children,
          i = Object(n.useState)(gr),
          l = Object(Ye.a)(i, 2),
          o = l[0],
          s = l[1],
          c = Object(n.useState)([]),
          m = Object(Ye.a)(c, 2),
          u = m[0],
          d = m[1],
          f = Object(n.useCallback)(function(e) {
            s(function(t) {
              return (
                Object($a.isFunction)(e) && (e = e(t)),
                Object($a.isEqual)(t, e) ? t : e
              );
            });
          }, []),
          E = {
            queryParams: o,
            setQueryParamsBase: s,
            ids: u,
            setIds: d,
            setQueryParams: f,
            initPublisher: {
              id: void 0,
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              role: 1,
            },
            newPublisherButtonClick: t.newPublisherButtonClick,
            openEditPublisherDialog: t.openEditPublisherDialog,
            openDeletePublisherDialog: t.openDeletePublisherDialog,
            openDeletePublishersDialog: t.openDeletePublishersDialog,
            openFetchPublishersDialog: t.openFetchPublishersDialog,
            openUpdatePublishersStatusDialog:
              t.openUpdatePublishersStatusDialog,
          };
        return r.a.createElement(br.Provider, { value: E }, a);
      }
      function yr(e) {
        var t = e.id,
          a = e.show,
          i = e.onHide,
          l = hr(),
          o = Object(n.useMemo)(
            function() {
              return { initPublisher: l.initPublisher };
            },
            [l]
          ),
          s = Object(Ne.d)(),
          c = Object(Ne.e)(function(e) {
            return {
              actionsLoading: e.publishers.actionsLoading,
              publisherForEdit: e.publishers.publisherForEdit,
            };
          }, Ne.c),
          m = c.actionsLoading,
          u = c.publisherForEdit;
        Object(n.useEffect)(
          function() {
            s(lr(t));
          },
          [t, s]
        );
        return r.a.createElement(
          Tn.a,
          {
            size: "lg",
            show: a,
            onHide: i,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          r.a.createElement(mr, { id: t }),
          r.a.createElement(dr, {
            savePublisher: function(e) {
              t
                ? s(sr(e)).then(function() {
                    return i();
                  })
                : s(or(e)).then(function() {
                    return i();
                  });
            },
            actionsLoading: m,
            publisher: u || o.initPublisher,
            onHide: i,
          })
        );
      }
      function Cr(e) {
        var t = e.id,
          a = e.show,
          i = e.onHide,
          l = hr(),
          o =
            (Object(n.useMemo)(
              function() {
                return { setIds: l.setIds, queryParams: l.queryParams };
              },
              [l]
            ),
            Object(Ne.d)()),
          s = Object(Ne.e)(function(e) {
            return { isLoading: e.publishers.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(
          function() {
            t || i();
          },
          [t]
        ),
          Object(n.useEffect)(function() {}, [s, o]);
        return r.a.createElement(
          Tn.a,
          {
            show: a,
            onHide: i,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          s && r.a.createElement($t, null),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Publisher Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !s &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete this publisher?"
              ),
            s && r.a.createElement("span", null, "Publisher is deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: i,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {},
                  className: "btn btn-primary btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      function Nr(e) {
        var t = e.show,
          a = e.onHide,
          i = hr(),
          l = Object(n.useMemo)(
            function() {
              return {
                ids: i.ids,
                setIds: i.setIds,
                queryParams: i.queryParams,
              };
            },
            [i]
          ),
          o = Object(Ne.d)(),
          s = Object(Ne.e)(function(e) {
            return { isLoading: e.publishers.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(function() {
          (l.ids || 0 === l.ids.length) && a();
        }, l.ids),
          Object(n.useEffect)(function() {}, [s, o]);
        return r.a.createElement(
          Tn.a,
          {
            show: t,
            onHide: a,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          s && r.a.createElement($t, null),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Publishers Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !s &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete selected publishers?"
              ),
            s && r.a.createElement("span", null, "Publisher are deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: a,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {},
                  className: "btn btn-primary btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      var Tr = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function Or(e) {
        var t = e.show,
          a = e.onHide,
          i = hr(),
          l = Object(n.useMemo)(
            function() {
              return { ids: i.ids };
            },
            [i]
          ),
          o = Object(Ne.e)(function(e) {
            return { publishers: Tr(e.publishers.entities, l.ids) };
          }, Ne.c).publishers;
        return (
          Object(n.useEffect)(
            function() {
              (l.ids && 0 !== l.ids.length) || a();
            },
            [l.ids]
          ),
          r.a.createElement(
            Tn.a,
            {
              show: t,
              onHide: a,
              "aria-labelledby": "example-modal-sizes-title-lg",
            },
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                "Fetch selected elements"
              )
            ),
            r.a.createElement(
              Tn.a.Body,
              null,
              r.a.createElement(
                "div",
                { className: "timeline timeline-5 mt-3" },
                o.map(function(e) {
                  return r.a.createElement(
                    "div",
                    {
                      className: "timeline-item align-items-start",
                      key: "id".concat(e.id),
                    },
                    r.a.createElement("div", {
                      className:
                        "timeline-label font-weight-bolder text-dark-75 font-size-lg text-right pr-3",
                    }),
                    r.a.createElement(
                      "div",
                      { className: "timeline-badge" },
                      r.a.createElement("i", {
                        className: "fa fa-genderless text-".concat(
                          fr[e.status],
                          " icon-xxl"
                        ),
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "timeline-content text-dark-50 mr-5" },
                      r.a.createElement(
                        "span",
                        {
                          className: "label label-lg label-light-".concat(
                            fr[e.status],
                            " label-inline"
                          ),
                        },
                        "ID: ",
                        e.id
                      ),
                      r.a.createElement(
                        "span",
                        { className: "ml-3" },
                        e.lastname,
                        ", ",
                        e.firstname
                      )
                    )
                  );
                })
              )
            ),
            r.a.createElement(
              Tn.a.Footer,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: a,
                    className: "btn btn-light btn-elevate",
                  },
                  "Cancel"
                ),
                r.a.createElement(r.a.Fragment, null, " "),
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: a,
                    className: "btn btn-primary btn-elevate",
                  },
                  "Ok"
                )
              )
            )
          )
        );
      }
      var Sr = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function Mr(e) {
        var t = e.show,
          a = e.onHide,
          i = hr(),
          l = Object(n.useMemo)(
            function() {
              return {
                ids: i.ids,
                setIds: i.setIds,
                queryParams: i.queryParams,
              };
            },
            [i]
          ),
          o = Object(Ne.e)(function(e) {
            return {
              publishers: Sr(e.publishers.entities, l.ids),
              isLoading: e.publishers.actionsLoading,
            };
          }, Ne.c),
          s = o.publishers,
          c = o.isLoading;
        Object(n.useEffect)(
          function() {
            (l.ids && 0 !== l.ids.length) || a();
          },
          [l.ids]
        );
        var m = Object(n.useState)(0),
          u = Object(Ye.a)(m, 2),
          d = (u[0], u[1], Object(Ne.d)());
        return r.a.createElement(
          Tn.a,
          {
            show: t,
            onHide: a,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Status would been updated for selected publisher"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            { className: "overlay overlay-block" },
            c &&
              r.a.createElement(
                "div",
                { className: "overlay-layer" },
                r.a.createElement("div", {
                  className: "spinner spinner-lg spinner-primary",
                })
              ),
            r.a.createElement(
              "div",
              { className: "timeline timeline-5 mt-3" },
              s.map(function(e) {
                return r.a.createElement(
                  "div",
                  {
                    className: "timeline-item align-items-start",
                    key: "publishersUpdate".concat(e.id),
                  },
                  r.a.createElement("div", {
                    className:
                      "timeline-label font-weight-bolder text-dark-75 font-size-lg text-right pr-3",
                  }),
                  r.a.createElement(
                    "div",
                    { className: "timeline-badge" },
                    r.a.createElement("i", {
                      className: "fa fa-genderless text-".concat(
                        fr[e.status],
                        " icon-xxl"
                      ),
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "timeline-content text-dark-50 mr-5" },
                    r.a.createElement(
                      "span",
                      {
                        className: "label label-lg label-light-".concat(
                          fr[e.status],
                          " label-inline"
                        ),
                      },
                      "ID: ",
                      e.id
                    ),
                    r.a.createElement(
                      "span",
                      { className: "ml-3" },
                      e.firstname,
                      " ",
                      e.lastname
                    )
                  )
                );
              })
            )
          ),
          r.a.createElement(
            Tn.a.Footer,
            { className: "form" },
            r.a.createElement(
              "div",
              { className: "form-group" },
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: a,
                  className: "btn btn-light btn-elevate mr-3",
                },
                "Cancel"
              ),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    d(cr(l.ids)).then(function() {
                      a();
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Update Status"
              )
            )
          )
        );
      }
      function wr(e) {
        e.listLoading;
        var t = hr(),
          a = Object(n.useMemo)(
            function() {
              return {
                queryParams: t.queryParams,
                setQueryParams: t.setQueryParams,
              };
            },
            [t]
          ),
          i = function(e) {
            var t = (function(e, t) {
              var a = t.status,
                n = (t.type, t.searchText),
                r = Object(m.a)({}, e),
                i = {};
              return (
                (i.is_active = "" !== a ? a : ""),
                (i.lastname = n),
                n && ((i.firstname = n), (i.email = n)),
                (r.filter = i),
                r
              );
            })(a.queryParams, e);
            Object($a.isEqual)(t, a.queryParams) ||
              ((t.pageNumber = 1), a.setQueryParams(t));
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              initialValues: { status: "", type: "", searchText: "" },
              onSubmit: function(e) {
                i(e);
              },
            },
            function(e) {
              var t = e.values,
                a = e.handleSubmit,
                n = e.handleBlur,
                i = (e.handleChange, e.setFieldValue);
              return r.a.createElement(
                "form",
                { onSubmit: a, className: "form form-label-right" },
                r.a.createElement(
                  "div",
                  { className: "form-group row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement(
                      "select",
                      {
                        className: "form-control",
                        name: "status",
                        placeholder: "Filter by Status",
                        onChange: function(e) {
                          i("status", e.target.value), a();
                        },
                        onBlur: n,
                        value: t.status,
                      },
                      r.a.createElement("option", { value: "" }, "All"),
                      r.a.createElement("option", { value: "0" }, "Inactive"),
                      r.a.createElement("option", { value: "1" }, "Active")
                    ),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Filter"),
                      " by Status"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement("input", {
                      type: "text",
                      className: "form-control",
                      name: "searchText",
                      placeholder: "Search",
                      onBlur: n,
                      value: t.searchText,
                      onChange: function(e) {
                        i("searchText", e.target.value), a();
                      },
                    }),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Search"),
                      " in all fields"
                    )
                  )
                )
              );
            }
          )
        );
      }
      function xr(e, t) {
        return r.a.createElement(
          "span",
          {
            className:
              1 === t.is_active
                ? "label label-lg label-light-".concat(fr[1], " label-inline")
                : "label label-lg label-light-".concat(fr[0], " label-inline"),
          },
          Er[t.is_active]
        );
      }
      function Ar() {
        var e = hr(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                setIds: e.setIds,
                queryParams: e.queryParams,
                setQueryParams: e.setQueryParams,
                openEditPublisherDialog: e.openEditPublisherDialog,
                openDeletePublisherDialog: e.openDeletePublisherDialog,
              };
            },
            [e]
          ),
          a = Object(Ne.e)(function(e) {
            return { currentState: e.publishers };
          }, Ne.c).currentState,
          i = a.totalCount,
          l = a.entities,
          o = a.listLoading,
          s = a.initial_entity,
          c = Object(Ne.d)();
        Object(n.useEffect)(
          function() {
            t.setIds([]), c(ir(t.queryParams, s));
          },
          [t.queryParams, c]
        );
        var m = [
            {
              dataField: "firstname",
              text: "Firstname",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "lastname",
              text: "Lastname",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "email",
              text: "Email",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "phone",
              text: "Phone",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "company_name",
              text: "Company Name",
              sort: !0,
              sortCaret: je,
              formatter: function(e) {
                return e || "N/A";
              },
            },
            {
              dataField: "is_active",
              text: "Status",
              sort: !0,
              sortCaret: je,
              formatter: xr,
              headerSortingClasses: He,
            },
          ],
          u = {
            custom: !0,
            totalSize: i,
            sizePerPageList: pr,
            sizePerPage: t.queryParams.pageSize,
            page: t.queryParams.pageNumber,
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            qt.PaginationProvider,
            { pagination: zt()(u) },
            function(e) {
              var a = e.paginationProps,
                n = e.paginationTableProps;
              return r.a.createElement(
                Vt,
                { isLoading: o, paginationProps: a },
                r.a.createElement(
                  En.a,
                  Object.assign(
                    {
                      wrapperClasses: "table-responsive",
                      bordered: !1,
                      classes: "table table-head-custom table-vertical-center",
                      bootstrap4: !0,
                      keyField: "id",
                      data: null === l ? [] : l,
                      columns: m,
                      onTableChange: Le(t.setQueryParams),
                      selectRow: Pe({
                        entities: l,
                        ids: t.ids,
                        setIds: t.setIds,
                      }),
                    },
                    n
                  ),
                  r.a.createElement(Ie, { entities: l }),
                  r.a.createElement(Re, { entities: l })
                )
              );
            }
          )
        );
      }
      function Dr() {
        var e = hr(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                setIds: e.setIds,
                openDeletePublishersDialog: e.openDeletePublishersDialog,
                openFetchPublishersDialog: e.openFetchPublishersDialog,
                openUpdatePublishersStatusDialog:
                  e.openUpdatePublishersStatusDialog,
              };
            },
            [e]
          );
        return r.a.createElement(
          "div",
          { className: "form" },
          r.a.createElement(
            "div",
            {
              className:
                "row align-items-center form-group-actions margin-top-20 margin-bottom-20",
            },
            r.a.createElement(
              "div",
              { className: "col-xl-12" },
              r.a.createElement(
                "div",
                { className: "form-group form-group-inline" },
                r.a.createElement(
                  "div",
                  { className: "form-label form-label-no-wrap" },
                  r.a.createElement(
                    "label",
                    { className: "font-bold font-danger" },
                    r.a.createElement(
                      "span",
                      null,
                      "Selected records count: ",
                      r.a.createElement("b", null, t.ids.length)
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  null,
                  "\xa0",
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-light-primary font-weight-bolder font-size-sm",
                      onClick: t.openFetchPublishersDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-stream" }),
                    " Fetch Selected"
                  ),
                  "\xa0",
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-light-primary font-weight-bolder font-size-sm",
                      onClick: t.openUpdatePublishersStatusDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-sync-alt" }),
                    " Update Status"
                  )
                )
              )
            )
          )
        );
      }
      function kr() {
        var e = hr(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                newpublisherButtonClick: e.newPublisherButtonClick,
              };
            },
            [e]
          );
        return r.a.createElement(
          wt,
          null,
          r.a.createElement(
            St,
            { title: "Publishers list" },
            r.a.createElement(
              Ot,
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: e.newPublisherButtonClick,
                },
                "New Publisher"
              )
            )
          ),
          r.a.createElement(
            Mt,
            null,
            r.a.createElement(wr, null),
            t.ids.length > 0 && r.a.createElement(Dr, null),
            r.a.createElement(Ar, null)
          )
        );
      }
      function Lr(e) {
        var t = e.history,
          a = {
            newPublisherButtonClick: function() {
              t.push("/management/publishers/new");
            },
            openEditPublisherDialog: function(e) {
              t.push("/management/publishers/".concat(e, "/edit"));
            },
            openDeletePublisherDialog: function(e) {
              t.push("/management/publishers/".concat(e, "/delete"));
            },
            openDeletePublishersDialog: function() {
              t.push("/management/publishers/deletePublishers");
            },
            openFetchPublishersDialog: function() {
              t.push("/management/publishers/fetch");
            },
            openUpdatePublishersStatusDialog: function() {
              t.push("/management/publishers/updateStatus");
            },
          };
        return r.a.createElement(
          vr,
          { publishersUIEvents: a },
          r.a.createElement(ar, null),
          r.a.createElement(
            Se.b,
            { path: "/management/publishers/new" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(yr, {
                show: null != a,
                onHide: function() {
                  t.push("/management/publishers");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/publishers/:id/edit" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(yr, {
                show: null != a,
                id: a && a.params.id,
                onHide: function() {
                  t.push("/management/publishers");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/publishers/deletePublishers" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(Nr, {
                show: null != a,
                onHide: function() {
                  t.push("/management/publishers");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/publishers/:id/delete" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(Cr, {
                show: null != a,
                id: a && a.params.id,
                onHide: function() {
                  t.push("/management/publishers");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/publishers/fetch" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(Or, {
                show: null != a,
                onHide: function() {
                  t.push("/management/publishers");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/publishers/updateStatus" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(Mr, {
                show: null != a,
                onHide: function() {
                  t.push("/management/publishers");
                },
              });
            }
          ),
          r.a.createElement(kr, null)
        );
      }
      function Ir() {
        var e = Object(Ne.e)(function(e) {
          return { isLoading: e.admins.listLoading };
        }, Ne.c).isLoading;
        return (
          Object(n.useEffect)(function() {}, [e]),
          r.a.createElement(Xt, { isLoading: e, text: "Loading ..." })
        );
      }
      var Rr = "".concat(
        "https://muntu-designs-api.herokuapp.com/api/v1/admin"
      );
      var Ur = H.actions,
        Pr = function(e, t) {
          return function(a) {
            if (
              (a(Ur.startCall({ callType: F })), console.log(t), "" == e.filter)
            )
              return s.a
                .get(Rr + "/get_all_admins")
                .then(function(e) {
                  console.log(e.data.data);
                  var t = e.data.data,
                    n = t.length;
                  a(Ur.fetchAdmins({ totalCount: n, entities: t }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't find admins"),
                    a(Ur.catchError({ error: e, callType: F }));
                });
            var n = new f();
            if ("" == e.filter.lastname && "" == e.filter.is_active) {
              var r = t.length,
                i = t;
              a(Ur.adminsFetched({ totalCount: r, entities: i }));
            } else {
              var l = n.baseFilter(t, e),
                o = l.totalCount,
                c = l.entities;
              a(Ur.adminsFetched({ totalCount: o, entities: c }));
            }
          };
        },
        _r = function(e) {
          return function(t) {
            return e
              ? t(Ur.adminFetched({ adminForEdit: void 0 }))
              : (t(Ur.startCall({ callType: j })),
                ((a = e), s.a.get("".concat(Rr, "/get_admin/").concat(a)))
                  .then(function(e) {
                    var a = e.data;
                    t(Ur.adminFetched({ adminForEdit: a }));
                  })
                  .catch(function(e) {
                    (e.clientMessage = "Can't find admin"),
                      t(Ur.catchError({ error: e, callType: j }));
                  }));
            var a;
          };
        },
        Fr = function(e) {
          return function(t) {
            return (
              t(Ur.startCall({ callType: j })),
              ((a = e), s.a.delete("".concat(Rr + "/delete/").concat(a)))
                .then(function(a) {
                  t(Ur.adminDeleted({ id: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't delete admin"),
                    t(Ur.catchError({ error: e, callType: j }));
                })
            );
            var a;
          };
        },
        jr = function(e) {
          return function(t) {
            return (
              t(Ur.startCall({ callType: j })),
              ((a = e), s.a.post(Rr + "/create_admin", a))
                .then(function(e) {
                  if ((console.log(e), !0 === e.data.error)) {
                    var a = e.data.message;
                    alert(a);
                  } else {
                    var n = e.data.data;
                    t(Ur.adminCreated({ new_Admin: n }));
                  }
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't create admin"),
                    t(Ur.catchError({ error: e, callType: j }));
                })
            );
            var a;
          };
        },
        Hr = function(e) {
          return function(t) {
            return (
              t(Ur.startCall({ callType: j })),
              (function(e) {
                return s.a.post("".concat(Rr + "/edit_admin/").concat(e.id), {
                  admin: e,
                });
              })(e)
                .then(function() {
                  t(Ur.adminUpdated({ admin: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't update admin"),
                    t(Ur.catchError({ error: e, callType: j }));
                })
            );
          };
        },
        Br = function(e) {
          return function(t) {
            return (
              t(Ur.startCall({ callType: j })),
              (function(e) {
                return s.a.put("".concat(Rr, "/toggle_admin/").concat(e));
              })(e)
                .then(function() {
                  Mn()("status changed successfully").then(function() {
                    window.location.reload(!1);
                  });
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't update admins status"),
                    t(Ur.catchError({ error: e, callType: j }));
                })
            );
          };
        },
        qr = function(e) {
          return function(t) {
            return (
              t(Ur.startCall({ callType: j })),
              (function(e) {
                return s.a.post("".concat(Rr, "deleteAdmins"), { ids: e });
              })(e)
                .then(function() {
                  t(Ur.adminsDeleted({ ids: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't delete admins"),
                    t(Ur.catchError({ error: e, callType: j }));
                })
            );
          };
        };
      function zr(e) {
        var t = e.id,
          a = Object(Ne.e)(function(e) {
            return {
              adminForEdit: e.admins.adminForEdit,
              actionsLoading: e.admins.actionsLoading,
            };
          }, Ne.c),
          i = a.adminForEdit,
          l = a.actionsLoading,
          o = Object(n.useState)(""),
          s = Object(Ye.a)(o, 2),
          c = s[0],
          m = s[1];
        return (
          Object(n.useEffect)(
            function() {
              var e = t ? "" : "New Admin";
              i &&
                t &&
                (e = "Edit admin '"
                  .concat(i.firstName, " ")
                  .concat(i.lastName, "'")),
                m(e);
            },
            [i, l]
          ),
          r.a.createElement(
            r.a.Fragment,
            null,
            l && r.a.createElement($t, null),
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                c
              )
            )
          )
        );
      }
      var Gr = Rn.d().shape({
        firstname: Rn.e()
          .min(3, "Minimum 3 symbols")
          .max(50, "Maximum 50 symbols")
          .required("Firstname is required"),
        lastname: Rn.e()
          .min(3, "Minimum 3 symbols")
          .max(50, "Maximum 50 symbols")
          .required("Lastname is required"),
        email: Rn.e()
          .email("Invalid email")
          .required("Email is required"),
        phone: Rn.e()
          .min(10, "the phone number is invalid")
          .required("Phone number is required "),
        role: Rn.e().required("please select a role"),
      });
      function Vr(e) {
        var t = e.saveAdmin,
          a = e.actionsLoading,
          n = e.onHide;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              enableReinitialize: !0,
              initialValues: {
                email: "",
                role: "",
                firstname: "",
                lastname: "",
                phone: "",
              },
              validationSchema: Gr,
              onSubmit: function(e) {
                t(e);
              },
            },
            function(e) {
              var t = e.handleSubmit;
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  Tn.a.Body,
                  { className: "overlay overlay-block" },
                  a &&
                    r.a.createElement(
                      "div",
                      { className: "overlay-layer bg-transparent" },
                      r.a.createElement("div", {
                        className: "spinner spinner-lg spinner-success",
                      })
                    ),
                  r.a.createElement(
                    xt.b,
                    { className: "form form-label-right" },
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(xt.a, {
                          name: "firstname",
                          component: _t,
                          placeholder: "First Name",
                          label: "First Name",
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(xt.a, {
                          name: "lastname",
                          component: _t,
                          placeholder: "Last Name",
                          label: "Last Name",
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(xt.a, {
                          type: "email",
                          name: "email",
                          component: _t,
                          placeholder: "Email",
                          label: "Email",
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(xt.a, {
                          type: "tel",
                          name: "phone",
                          component: _t,
                          placeholder: "phone",
                          label: "phone",
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-6" },
                        r.a.createElement(
                          xt.a,
                          {
                            as: "select",
                            className: "form-control",
                            name: "role",
                            label: "role",
                          },
                          r.a.createElement(
                            "option",
                            { value: "" },
                            "select a role"
                          ),
                          r.a.createElement(
                            "option",
                            { value: "admin" },
                            "Administrator"
                          ),
                          r.a.createElement(
                            "option",
                            { value: "auditor" },
                            "Auditor"
                          ),
                          r.a.createElement(
                            "option",
                            { value: "nerdc" },
                            "NERDC"
                          )
                        )
                      )
                    )
                  )
                ),
                r.a.createElement(
                  Tn.a.Footer,
                  null,
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: n,
                      className: "btn btn-light btn-elevate",
                    },
                    "Cancel"
                  ),
                  r.a.createElement(r.a.Fragment, null, " "),
                  r.a.createElement(
                    "button",
                    {
                      type: "submit",
                      onClick: function() {
                        return t();
                      },
                      className: "btn btn-primary btn-elevate",
                    },
                    "Save"
                  )
                )
              );
            }
          )
        );
      }
      var Wr = ["danger", "success", ""],
        Qr = ["Inactive", "Active", ""],
        Yr = ["success", "primary", "warning", "danger"],
        Kr = [
          "Super Administrator",
          "Administrator",
          "Sales Representative",
          "Auditor",
        ],
        Zr = [
          { text: "3", value: 3 },
          { text: "5", value: 5 },
          { text: "10", value: 10 },
        ],
        Xr = {
          filter: "",
          sortOrder: "desc",
          sortField: "id",
          pageNumber: 1,
          pageSize: 10,
        },
        Jr = Object(n.createContext)();
      function $r() {
        return Object(n.useContext)(Jr);
      }
      Jr.Consumer;
      function ei(e) {
        var t = e.adminsUIEvents,
          a = e.children,
          i = Object(n.useState)(Xr),
          l = Object(Ye.a)(i, 2),
          o = l[0],
          s = l[1],
          c = Object(n.useState)([]),
          m = Object(Ye.a)(c, 2),
          u = m[0],
          d = m[1],
          f = Object(n.useCallback)(function(e) {
            s(function(t) {
              return (
                Object($a.isFunction)(e) && (e = e(t)),
                Object($a.isEqual)(t, e) ? t : e
              );
            });
          }, []),
          E = {
            queryParams: o,
            setQueryParamsBase: s,
            ids: u,
            setIds: d,
            setQueryParams: f,
            initAdmin: {
              id: void 0,
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              role: 1,
            },
            newAdminButtonClick: t.newAdminButtonClick,
            openEditAdminDialog: t.openEditAdminDialog,
            openDeleteAdminDialog: t.openDeleteAdminDialog,
            openDeleteAdminsDialog: t.openDeleteAdminsDialog,
            openFetchAdminsDialog: t.openFetchAdminsDialog,
            openUpdateAdminsStatusDialog: t.openUpdateAdminsStatusDialog,
          };
        return r.a.createElement(Jr.Provider, { value: E }, a);
      }
      function ti(e) {
        var t = e.id,
          a = e.show,
          i = e.onHide,
          l = $r(),
          o = Object(n.useMemo)(
            function() {
              return { initAdmin: l.initAdmin };
            },
            [l]
          ),
          s = Object(Ne.d)(),
          c = Object(Ne.e)(function(e) {
            return {
              actionsLoading: e.admins.actionsLoading,
              adminForEdit: e.admins.adminForEdit,
            };
          }, Ne.c),
          m = c.actionsLoading,
          u = c.adminForEdit;
        Object(n.useEffect)(
          function() {
            s(_r(t));
          },
          [t, s]
        );
        return r.a.createElement(
          Tn.a,
          {
            size: "lg",
            show: a,
            onHide: i,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          r.a.createElement(zr, { id: t }),
          r.a.createElement(Vr, {
            saveAdmin: function(e) {
              t
                ? s(Hr(e)).then(function() {
                    return i();
                  })
                : s(jr(e)).then(function() {
                    return i();
                  });
            },
            actionsLoading: m,
            admin: u || o.initAdmin,
            onHide: i,
          })
        );
      }
      function ai(e) {
        var t = e.id,
          a = e.show,
          i = e.onHide,
          l = $r(),
          o = Object(n.useMemo)(
            function() {
              return { setIds: l.setIds, queryParams: l.queryParams };
            },
            [l]
          ),
          s = Object(Ne.d)(),
          c = Object(Ne.e)(function(e) {
            return { isLoading: e.admins.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(
          function() {
            t || i();
          },
          [t]
        ),
          Object(n.useEffect)(function() {}, [c, s]);
        return r.a.createElement(
          Tn.a,
          {
            show: a,
            onHide: i,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          c && r.a.createElement($t, null),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Admin Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !c &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete this admin?, You will not be able to create an admin with this details"
              ),
            c && r.a.createElement("span", null, "Admin is deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: i,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    s(Fr(t)).then(function() {
                      s(Pr(o.queryParams)), o.setIds([]), i();
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      function ni(e) {
        var t = e.show,
          a = e.onHide,
          i = $r(),
          l = Object(n.useMemo)(
            function() {
              return {
                ids: i.ids,
                setIds: i.setIds,
                queryParams: i.queryParams,
              };
            },
            [i]
          ),
          o = Object(Ne.d)(),
          s = Object(Ne.e)(function(e) {
            return { isLoading: e.admins.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(
          function() {
            (l.ids && 0 !== l.ids.length) || a();
          },
          [l.ids]
        ),
          Object(n.useEffect)(function() {}, [s, o]);
        return r.a.createElement(
          Tn.a,
          {
            show: t,
            onHide: a,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          s && r.a.createElement($t, null),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Admins Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !s &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete selected admins?"
              ),
            s && r.a.createElement("span", null, "Admin are deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: a,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    o(qr(l.ids)).then(function() {
                      o(Pr(l.queryParams)).then(function() {
                        l.setIds([]), a();
                      });
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      var ri = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function ii(e) {
        var t = e.show,
          a = e.onHide,
          i = $r(),
          l = Object(n.useMemo)(
            function() {
              return { ids: i.ids };
            },
            [i]
          ),
          o = Object(Ne.e)(function(e) {
            return { admins: ri(e.admins.entities, l.ids) };
          }, Ne.c).admins;
        return (
          Object(n.useEffect)(
            function() {
              (l.ids && 0 !== l.ids.length) || a();
            },
            [l.ids]
          ),
          r.a.createElement(
            Tn.a,
            {
              show: t,
              onHide: a,
              "aria-labelledby": "example-modal-sizes-title-lg",
            },
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                "Fetch selected elements"
              )
            ),
            r.a.createElement(
              Tn.a.Body,
              null,
              r.a.createElement(
                "div",
                { className: "timeline timeline-5 mt-3" },
                o.map(function(e) {
                  return r.a.createElement(
                    "div",
                    {
                      className: "timeline-item align-items-start",
                      key: "id".concat(e.id),
                    },
                    r.a.createElement("div", {
                      className:
                        "timeline-label font-weight-bolder text-dark-75 font-size-lg text-right pr-3",
                    }),
                    r.a.createElement(
                      "div",
                      { className: "timeline-badge" },
                      r.a.createElement("i", {
                        className: "fa fa-genderless text-".concat(
                          Wr[e.status],
                          " icon-xxl"
                        ),
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "timeline-content text-dark-50 mr-5" },
                      r.a.createElement(
                        "span",
                        {
                          className: "label label-lg label-light-".concat(
                            Wr[e.status],
                            " label-inline"
                          ),
                        },
                        "ID: ",
                        e.id
                      ),
                      r.a.createElement(
                        "span",
                        { className: "ml-3" },
                        e.lastname,
                        ", ",
                        e.firstname
                      )
                    )
                  );
                })
              )
            ),
            r.a.createElement(
              Tn.a.Footer,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: a,
                    className: "btn btn-light btn-elevate",
                  },
                  "Cancel"
                ),
                r.a.createElement(r.a.Fragment, null, " "),
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: a,
                    className: "btn btn-primary btn-elevate",
                  },
                  "Ok"
                )
              )
            )
          )
        );
      }
      var li = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function oi(e) {
        var t = e.show,
          a = e.onHide,
          i = $r(),
          l = Object(n.useMemo)(
            function() {
              return {
                ids: i.ids,
                setIds: i.setIds,
                queryParams: i.queryParams,
              };
            },
            [i]
          ),
          o = Object(Ne.e)(function(e) {
            return {
              admins: li(e.admins.entities, l.ids),
              isLoading: e.admins.actionsLoading,
            };
          }, Ne.c),
          s = o.admins,
          c = o.isLoading;
        Object(n.useEffect)(
          function() {
            (l.ids && 0 !== l.ids.length) || a();
          },
          [l.ids]
        );
        var m = Object(n.useState)(0),
          u = Object(Ye.a)(m, 2),
          d = (u[0], u[1], Object(Ne.d)());
        return r.a.createElement(
          Tn.a,
          {
            show: t,
            onHide: a,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Status would been updated for selected admin"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            { className: "overlay overlay-block" },
            c &&
              r.a.createElement(
                "div",
                { className: "overlay-layer" },
                r.a.createElement("div", {
                  className: "spinner spinner-lg spinner-primary",
                })
              ),
            r.a.createElement(
              "div",
              { className: "timeline timeline-5 mt-3" },
              s.map(function(e) {
                return r.a.createElement(
                  "div",
                  {
                    className: "timeline-item align-items-start",
                    key: "adminsUpdate".concat(e.id),
                  },
                  r.a.createElement("div", {
                    className:
                      "timeline-label font-weight-bolder text-dark-75 font-size-lg text-right pr-3",
                  }),
                  r.a.createElement(
                    "div",
                    { className: "timeline-badge" },
                    r.a.createElement("i", {
                      className: "fa fa-genderless text-".concat(
                        Wr[e.status],
                        " icon-xxl"
                      ),
                    })
                  ),
                  r.a.createElement(
                    "div",
                    { className: "timeline-content text-dark-50 mr-5" },
                    r.a.createElement(
                      "span",
                      {
                        className: "label label-lg label-light-".concat(
                          Wr[e.status],
                          " label-inline"
                        ),
                      },
                      "ID: ",
                      e.id
                    ),
                    r.a.createElement(
                      "span",
                      { className: "ml-3" },
                      e.firstname,
                      " ",
                      e.lastname
                    )
                  )
                );
              })
            )
          ),
          r.a.createElement(
            Tn.a.Footer,
            { className: "form" },
            r.a.createElement(
              "div",
              { className: "form-group" },
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: a,
                  className: "btn btn-light btn-elevate mr-3",
                },
                "Cancel"
              ),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    d(Br(l.ids)).then(function() {
                      a();
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Update Status"
              )
            )
          )
        );
      }
      function si(e) {
        e.listLoading;
        var t = $r(),
          a = Object(n.useMemo)(
            function() {
              return {
                queryParams: t.queryParams,
                setQueryParams: t.setQueryParams,
              };
            },
            [t]
          ),
          i = function(e) {
            var t = (function(e, t) {
              var a = t.status,
                n = (t.type, t.searchText),
                r = Object(m.a)({}, e),
                i = {};
              return (
                (i.is_active = "" !== a ? a : ""),
                (i.lastname = n),
                n && ((i.firstname = n), (i.email = n)),
                (r.filter = i),
                r
              );
            })(a.queryParams, e);
            Object($a.isEqual)(t, a.queryParams) ||
              ((t.pageNumber = 1), a.setQueryParams(t));
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              initialValues: { status: "", type: "", searchText: "" },
              onSubmit: function(e) {
                i(e);
              },
            },
            function(e) {
              var t = e.values,
                a = e.handleSubmit,
                n = e.handleBlur,
                i = (e.handleChange, e.setFieldValue);
              return r.a.createElement(
                "form",
                { onSubmit: a, className: "form form-label-right" },
                r.a.createElement(
                  "div",
                  { className: "form-group row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement(
                      "select",
                      {
                        className: "form-control",
                        name: "status",
                        placeholder: "Filter by Status",
                        onChange: function(e) {
                          i("status", e.target.value), a();
                        },
                        onBlur: n,
                        value: t.status,
                      },
                      r.a.createElement("option", { value: "" }, "All"),
                      r.a.createElement("option", { value: "0" }, "Inactive"),
                      r.a.createElement("option", { value: "1" }, "Active")
                    ),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Filter"),
                      " by Status"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement("input", {
                      type: "text",
                      className: "form-control",
                      name: "searchText",
                      placeholder: "Search",
                      onBlur: n,
                      value: t.searchText,
                      onChange: function(e) {
                        i("searchText", e.target.value), a();
                      },
                    }),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Search"),
                      " in all fields"
                    )
                  )
                )
              );
            }
          )
        );
      }
      function ci(e, t) {
        return r.a.createElement(
          "span",
          {
            className:
              1 == t.is_active
                ? "label label-lg label-light-".concat(Wr[1], " label-inline")
                : "label label-lg label-light-".concat(Wr[0], " label-inline"),
          },
          1 == t.is_active ? Qr[1] : Qr[0]
        );
      }
      function mi(e, t) {
        return 1 == t.is_super_admin
          ? r.a.createElement(
              "div",
              null,
              r.a.createElement("span", {
                className: "label label-dot label-".concat(Yr[0], " mr-2"),
              }),
              "\xa0",
              r.a.createElement(
                "span",
                { className: "font-bold font-".concat(Yr[0]) },
                Kr[0]
              )
            )
          : 1 == t.is_admin
          ? r.a.createElement(
              "div",
              null,
              r.a.createElement("span", {
                className: "label label-dot label-".concat(Yr[1], " mr-2"),
              }),
              "\xa0",
              r.a.createElement(
                "span",
                { className: "font-bold font-".concat(Yr[1]) },
                Kr[1]
              )
            )
          : 1 == t.is_sales_rep
          ? r.a.createElement(
              "div",
              null,
              r.a.createElement("span", {
                className: "label label-dot label-".concat(Yr[2], " mr-2"),
              }),
              "\xa0",
              r.a.createElement(
                "span",
                { className: "font-bold font-".concat(Yr[2]) },
                Kr[2]
              )
            )
          : r.a.createElement(
              "div",
              null,
              r.a.createElement("span", {
                className: "label label-dot label-".concat(Yr[3], " mr-2"),
              }),
              "\xa0",
              r.a.createElement(
                "span",
                { className: "font-bold font-".concat(Yr[3]) },
                Kr[3]
              )
            );
      }
      function ui(e, t, a, n) {
        n.openEditAdminDialog;
        var i = n.openDeleteAdminDialog;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(r.a.Fragment, null, " "),
          r.a.createElement(
            "a",
            {
              title: "Delete admin",
              className: "btn btn-icon btn-light btn-hover-danger btn-sm",
              onClick: function() {
                return i(t.id);
              },
            },
            r.a.createElement(
              "span",
              { className: "svg-icon svg-icon-md svg-icon-danger" },
              r.a.createElement(Fe.a, {
                src: De("/media/svg/icons/General/Trash.svg"),
              })
            )
          )
        );
      }
      function di() {
        var e = Object(Ne.e)(function(e) {
            return e.auth;
          }).user,
          t = $r(),
          a = Object(n.useMemo)(
            function() {
              return {
                ids: t.ids,
                setIds: t.setIds,
                queryParams: t.queryParams,
                setQueryParams: t.setQueryParams,
                openEditAdminDialog: t.openEditAdminDialog,
                openDeleteAdminDialog: t.openDeleteAdminDialog,
              };
            },
            [t]
          ),
          i = Object(Ne.e)(function(e) {
            return { currentState: e.admins };
          }, Ne.c).currentState,
          l = i.totalCount,
          o = i.entities,
          s = i.listLoading,
          c = i.initial_entity,
          m = Object(Ne.d)();
        Object(n.useEffect)(
          function() {
            a.setIds([]), m(Pr(a.queryParams, c));
          },
          [a.queryParams, m]
        );
        var u = [
            {
              dataField: "firstname",
              text: "Firstname",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "lastname",
              text: "Lastname",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "email",
              text: "Email",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "is_active",
              text: "Status",
              sort: !0,
              sortCaret: je,
              formatter: ci,
              headerSortingClasses: He,
            },
            {
              dataField: "admin_role",
              text: "Role",
              sort: !0,
              sortCaret: je,
              formatter: mi,
            },
          ],
          d = [
            {
              dataField: "firstname",
              text: "Firstname",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "lastname",
              text: "Lastname",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "email",
              text: "Email",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "phone",
              text: "Phone",
              sort: !0,
              sortCaret: je,
              headerSortingClasses: He,
            },
            {
              dataField: "is_active",
              text: "Status",
              sort: !0,
              sortCaret: je,
              formatter: ci,
              headerSortingClasses: He,
            },
            {
              dataField: "admin_role",
              text: "Role",
              sort: !0,
              sortCaret: je,
              formatter: mi,
            },
            {
              dataField: "action",
              text: "Actions",
              formatter: ui,
              formatExtraData: {
                openEditAdminDialog: a.openEditAdminDialog,
                openDeleteAdminDialog: a.openDeleteAdminDialog,
              },
              classes: "text-center pr-0",
              headerClasses: "text-right pr-3",
              style: { minWidth: "100px" },
            },
          ],
          f = {
            custom: !0,
            totalSize: l,
            sizePerPageList: Zr,
            sizePerPage: a.queryParams.pageSize,
            page: a.queryParams.pageNumber,
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            qt.PaginationProvider,
            { pagination: zt()(f) },
            function(t) {
              var n = t.paginationProps,
                i = t.paginationTableProps;
              return r.a.createElement(
                Vt,
                { isLoading: s, paginationProps: n },
                1 == e.is_super_admin
                  ? r.a.createElement(
                      En.a,
                      Object.assign(
                        {
                          wrapperClasses: "table-responsive",
                          bordered: !1,
                          classes:
                            "table table-head-custom table-vertical-center",
                          bootstrap4: !0,
                          keyField: "id",
                          data: null === o ? [] : o,
                          columns: d,
                          onTableChange: Le(a.setQueryParams),
                          selectRow: Pe({
                            entities: o,
                            ids: a.ids,
                            setIds: a.setIds,
                          }),
                        },
                        i
                      ),
                      " ",
                      r.a.createElement(Ie, { entities: o }),
                      r.a.createElement(Re, { entities: o })
                    )
                  : r.a.createElement(
                      En.a,
                      Object.assign(
                        {
                          wrapperClasses: "table-responsive",
                          bordered: !1,
                          classes:
                            "table table-head-custom table-vertical-center",
                          bootstrap4: !0,
                          keyField: "id",
                          data: null === o ? [] : o,
                          columns: u,
                          onTableChange: Le(a.setQueryParams),
                          selectRow: Pe({
                            entities: o,
                            ids: a.ids,
                            setIds: a.setIds,
                          }),
                        },
                        i
                      ),
                      r.a.createElement(Ie, { entities: o }),
                      r.a.createElement(Re, { entities: o })
                    )
              );
            }
          )
        );
      }
      function fi() {
        var e = $r(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                setIds: e.setIds,
                openDeleteAdminsDialog: e.openDeleteAdminsDialog,
                openFetchAdminsDialog: e.openFetchAdminsDialog,
                openUpdateAdminsStatusDialog: e.openUpdateAdminsStatusDialog,
              };
            },
            [e]
          );
        return r.a.createElement(
          "div",
          { className: "form" },
          r.a.createElement(
            "div",
            {
              className:
                "row align-items-center form-group-actions margin-top-20 margin-bottom-20",
            },
            r.a.createElement(
              "div",
              { className: "col-xl-12" },
              r.a.createElement(
                "div",
                { className: "form-group form-group-inline" },
                r.a.createElement(
                  "div",
                  { className: "form-label form-label-no-wrap" },
                  r.a.createElement(
                    "label",
                    { className: "font-bold font-danger" },
                    r.a.createElement(
                      "span",
                      null,
                      "Selected records count: ",
                      r.a.createElement("b", null, t.ids.length)
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  null,
                  "\xa0",
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-light-primary font-weight-bolder font-size-sm",
                      onClick: t.openUpdateAdminsStatusDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-sync-alt" }),
                    " Update Status"
                  )
                )
              )
            )
          )
        );
      }
      function Ei() {
        var e = $r(),
          t = Object(n.useMemo)(
            function() {
              return { ids: e.ids, newAdminButtonClick: e.newAdminButtonClick };
            },
            [e]
          );
        return r.a.createElement(
          wt,
          null,
          r.a.createElement(
            St,
            { title: "Admins list" },
            r.a.createElement(
              Ot,
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: t.newAdminButtonClick,
                },
                "New Admin"
              )
            )
          ),
          r.a.createElement(
            Mt,
            null,
            r.a.createElement(si, null),
            t.ids.length > 0 && r.a.createElement(fi, null),
            r.a.createElement(di, null)
          )
        );
      }
      function pi(e) {
        var t = e.history,
          a = {
            newAdminButtonClick: function() {
              t.push("/management/admins/new");
            },
            openEditAdminDialog: function(e) {
              t.push("/management/admins/".concat(e, "/edit"));
            },
            openDeleteAdminDialog: function(e) {
              t.push("/management/admins/".concat(e, "/delete"));
            },
            openDeleteAdminsDialog: function() {
              t.push("/management/admins/deleteAdmins");
            },
            openFetchAdminsDialog: function() {
              t.push("/management/admins/fetch");
            },
            openUpdateAdminsStatusDialog: function() {
              t.push("/management/admins/updateStatus");
            },
          };
        return r.a.createElement(
          ei,
          { adminsUIEvents: a },
          r.a.createElement(Ir, null),
          r.a.createElement(Se.b, { path: "/management/admins/new" }, function(
            e
          ) {
            var t = e.history,
              a = e.match;
            return r.a.createElement(ti, {
              show: null != a,
              onHide: function() {
                t.push("/management/admins");
              },
            });
          }),
          r.a.createElement(
            Se.b,
            { path: "/management/admins/:id/edit" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(ti, {
                show: null != a,
                id: a && a.params.id,
                onHide: function() {
                  t.push("/management/admins");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/admins/deleteAdmins" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(ni, {
                show: null != a,
                onHide: function() {
                  t.push("/management/admins");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/admins/:id/delete" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(ai, {
                show: null != a,
                id: a && a.params.id,
                onHide: function() {
                  t.push("/management/admins");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/admins/fetch" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(ii, {
                show: null != a,
                onHide: function() {
                  t.push("/management/admins");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/management/admins/updateStatus" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(oi, {
                show: null != a,
                onHide: function() {
                  t.push("/management/admins");
                },
              });
            }
          ),
          r.a.createElement(Ei, null)
        );
      }
      function gi() {
        var e = Object(Ne.e)(function(e) {
          return { isLoading: e.products.listLoading };
        }, Ne.c).isLoading;
        return (
          Object(n.useEffect)(function() {}, [e]),
          r.a.createElement(Xt, { isLoading: e, text: "Loading ..." })
        );
      }
      var bi = J.actions,
        hi = function(e) {
          return function(t) {
            return (
              t(bi.startCall({ callType: Z })),
              (function(e) {
                return s.a.post("".concat("api/products", "/find"), {
                  queryParams: e,
                });
              })(e)
                .then(function(e) {
                  var a = e.data,
                    n = a.totalCount,
                    r = a.entities;
                  t(bi.productsFetched({ totalCount: n, entities: r }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't find products"),
                    t(bi.catchError({ error: e, callType: Z }));
                })
            );
          };
        },
        vi = function(e) {
          return function(t) {
            return e
              ? (t(bi.startCall({ callType: X })),
                ((a = e), s.a.get("".concat("api/products", "/").concat(a)))
                  .then(function(e) {
                    var a = e.data;
                    t(bi.productFetched({ productForEdit: a }));
                  })
                  .catch(function(e) {
                    (e.clientMessage = "Can't find product"),
                      t(bi.catchError({ error: e, callType: X }));
                  }))
              : t(bi.productFetched({ productForEdit: void 0 }));
            var a;
          };
        },
        yi = function(e) {
          return function(t) {
            return (
              t(bi.startCall({ callType: X })),
              ((a = e), s.a.delete("".concat("api/products", "/").concat(a)))
                .then(function(a) {
                  t(bi.productDeleted({ id: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't delete product"),
                    t(bi.catchError({ error: e, callType: X }));
                })
            );
            var a;
          };
        },
        Ci = function(e) {
          return function(t) {
            return (
              t(bi.startCall({ callType: X })),
              ((a = e), s.a.post("api/products", { product: a }))
                .then(function(e) {
                  var a = e.data.product;
                  t(bi.productCreated({ product: a }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't create product"),
                    t(bi.catchError({ error: e, callType: X }));
                })
            );
            var a;
          };
        },
        Ni = function(e) {
          return function(t) {
            return (
              t(bi.startCall({ callType: X })),
              (function(e) {
                return s.a.put("".concat("api/products", "/").concat(e.id), {
                  product: e,
                });
              })(e)
                .then(function() {
                  t(bi.productUpdated({ product: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't update product"),
                    t(bi.catchError({ error: e, callType: X }));
                })
            );
          };
        },
        Ti = function(e, t) {
          return function(a) {
            return (
              a(bi.startCall({ callType: X })),
              (function(e, t) {
                return s.a.post(
                  "".concat("api/products", "/updateStatusForProducts"),
                  { ids: e, status: t }
                );
              })(e, t)
                .then(function() {
                  a(bi.productsStatusUpdated({ ids: e, status: t }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't update products status"),
                    a(bi.catchError({ error: e, callType: X }));
                })
            );
          };
        },
        Oi = function(e) {
          return function(t) {
            return (
              t(bi.startCall({ callType: X })),
              (function(e) {
                return s.a.post("".concat("api/products", "/deleteProducts"), {
                  ids: e,
                });
              })(e)
                .then(function() {
                  t(bi.productsDeleted({ ids: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't delete products"),
                    t(bi.catchError({ error: e, callType: X }));
                })
            );
          };
        },
        Si = ["success", "info", ""],
        Mi = ["Selling", "Sold"],
        wi = ["success", "danger", ""],
        xi = ["New", "Used"],
        Ai = [{ dataField: "id", order: "asc" }],
        Di = [
          { text: "3", value: 3 },
          { text: "5", value: 5 },
          { text: "10", value: 10 },
        ],
        ki = {
          filter: { model: "", manufacture: "", VINCode: "" },
          sortOrder: "asc",
          sortField: "VINCode",
          pageNumber: 1,
          pageSize: 10,
        },
        Li = [
          "Red",
          "CadetBlue",
          "Eagle",
          "Gold",
          "LightSlateGrey",
          "RoyalBlue",
          "Crimson",
          "Blue",
          "Sienna",
          "Indigo",
          "Green",
          "Violet",
          "GoldenRod",
          "OrangeRed",
          "Khaki",
          "Teal",
          "Purple",
          "Orange",
          "Pink",
          "Black",
          "DarkTurquoise",
        ],
        Ii = [
          "Pontiac",
          "Kia",
          "Lotus",
          "Subaru",
          "Jeep",
          "Isuzu",
          "Mitsubishi",
          "Oldsmobile",
          "Chevrolet",
          "Chrysler",
          "Audi",
          "Suzuki",
          "GMC",
          "Cadillac",
          "Infinity",
          "Mercury",
          "Dodge",
          "Ram",
          "Lexus",
          "Lamborghini",
          "Honda",
          "Nissan",
          "Ford",
          "Hyundai",
          "Saab",
          "Toyota",
        ],
        Ri = Object(n.createContext)();
      function Ui() {
        return Object(n.useContext)(Ri);
      }
      Ri.Consumer;
      function Pi(e) {
        var t = e.productsUIEvents,
          a = e.children,
          i = Object(n.useState)(ki),
          l = Object(Ye.a)(i, 2),
          o = l[0],
          s = l[1],
          c = Object(n.useState)([]),
          m = Object(Ye.a)(c, 2),
          u = m[0],
          d = m[1],
          f = Object(n.useCallback)(function(e) {
            s(function(t) {
              return (
                Object($a.isFunction)(e) && (e = e(t)),
                Object($a.isEqual)(t, e) ? t : e
              );
            });
          }, []),
          E = {
            queryParams: o,
            setQueryParamsBase: s,
            ids: u,
            setIds: d,
            setQueryParams: f,
            newProductButtonClick: t.newProductButtonClick,
            openEditProductPage: t.openEditProductPage,
            openDeleteProductDialog: t.openDeleteProductDialog,
            openDeleteProductsDialog: t.openDeleteProductsDialog,
            openFetchProductsDialog: t.openFetchProductsDialog,
            openUpdateProductsStatusDialog: t.openUpdateProductsStatusDialog,
          };
        return r.a.createElement(Ri.Provider, { value: E }, a);
      }
      function _i(e) {
        var t = e.id,
          a = e.show,
          i = e.onHide,
          l = Ui(),
          o = Object(n.useMemo)(
            function() {
              return { setIds: l.setIds, queryParams: l.queryParams };
            },
            [l]
          ),
          s = Object(Ne.d)(),
          c = Object(Ne.e)(function(e) {
            return { isLoading: e.products.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(
          function() {
            t || i();
          },
          [t]
        ),
          Object(n.useEffect)(function() {}, [c, s]);
        return r.a.createElement(
          Tn.a,
          {
            show: a,
            onHide: i,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          c && r.a.createElement($t, { variant: "query" }),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Product Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !c &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete this product?"
              ),
            c && r.a.createElement("span", null, "Product is deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: i,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    s(yi(t)).then(function() {
                      s(hi(o.queryParams)), o.setIds([]), i();
                    });
                  },
                  className: "btn btn-delete btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      function Fi(e) {
        var t = e.show,
          a = e.onHide,
          i = Ui(),
          l = Object(n.useMemo)(
            function() {
              return {
                ids: i.ids,
                setIds: i.setIds,
                queryParams: i.queryParams,
              };
            },
            [i]
          ),
          o = Object(Ne.d)(),
          s = Object(Ne.e)(function(e) {
            return { isLoading: e.products.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(function() {}, [s, o]),
          Object(n.useEffect)(
            function() {
              (l.ids && 0 !== l.ids.length) || a();
            },
            [l.ids]
          );
        return r.a.createElement(
          Tn.a,
          {
            show: t,
            onHide: a,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          s && r.a.createElement($t, null),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Products Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !s &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete selected products?"
              ),
            s && r.a.createElement("span", null, "Products are deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: a,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    o(Oi(l.ids)).then(function() {
                      o(hi(l.queryParams)).then(function() {
                        l.setIds([]), a();
                      });
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      var ji = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function Hi(e) {
        var t = e.show,
          a = e.onHide,
          i = Ui(),
          l = Object(n.useMemo)(
            function() {
              return { ids: i.ids, queryParams: i.queryParams };
            },
            [i]
          ),
          o = Object(Ne.e)(function(e) {
            return { products: ji(e.products.entities, l.ids) };
          }, Ne.c).products;
        return (
          Object(n.useEffect)(
            function() {
              (l.ids && 0 !== l.ids.length) || a();
            },
            [l.ids]
          ),
          r.a.createElement(
            Tn.a,
            {
              show: t,
              onHide: a,
              "aria-labelledby": "example-modal-sizes-title-lg",
            },
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                "Fetch selected elements"
              )
            ),
            r.a.createElement(
              Tn.a.Body,
              null,
              r.a.createElement(
                "div",
                {
                  className:
                    "list-timeline list-timeline-skin-light padding-30",
                },
                r.a.createElement(
                  "div",
                  { className: "list-timeline-items" },
                  o.map(function(e) {
                    return r.a.createElement(
                      "div",
                      { className: "list-timeline-item mb-3", key: e.id },
                      r.a.createElement(
                        "span",
                        { className: "list-timeline-text" },
                        r.a.createElement(
                          "span",
                          {
                            className: "label label-lg label-light-".concat(
                              Si[e.status],
                              " label-inline"
                            ),
                            style: { width: "60px" },
                          },
                          "ID: ",
                          e.id
                        ),
                        " ",
                        r.a.createElement(
                          "span",
                          { className: "ml-5" },
                          e.manufacture,
                          ", ",
                          e.model
                        )
                      )
                    );
                  })
                )
              )
            ),
            r.a.createElement(
              Tn.a.Footer,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: a,
                    className: "btn btn-light btn-elevate",
                  },
                  "Cancel"
                ),
                r.a.createElement(r.a.Fragment, null, " "),
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: a,
                    className: "btn btn-primary btn-elevate",
                  },
                  "Ok"
                )
              )
            )
          )
        );
      }
      var Bi = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function qi(e) {
        var t = e.show,
          a = e.onHide,
          i = Ui(),
          l = Object(n.useMemo)(
            function() {
              return {
                ids: i.ids,
                setIds: i.setIds,
                queryParams: i.queryParams,
              };
            },
            [i]
          ),
          o = Object(Ne.e)(function(e) {
            return {
              products: Bi(e.products.entities, l.ids),
              isLoading: e.products.actionsLoading,
            };
          }, Ne.c),
          s = o.products,
          c = o.isLoading;
        Object(n.useEffect)(
          function() {
            (l.ids || 0 === l.ids.length) && a();
          },
          [l.ids]
        );
        var m = Object(n.useState)(0),
          u = Object(Ye.a)(m, 2),
          d = u[0],
          f = u[1],
          E = Object(Ne.d)();
        return r.a.createElement(
          Tn.a,
          {
            show: t,
            onHide: a,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Status has been updated for selected products"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            { className: "overlay overlay-block" },
            c &&
              r.a.createElement(
                "div",
                { className: "overlay-layer bg-transparent" },
                r.a.createElement("div", {
                  className: "spinner spinner-lg spinner-warning",
                })
              ),
            r.a.createElement(
              "div",
              {
                className: "list-timeline list-timeline-skin-light padding-30",
              },
              r.a.createElement(
                "div",
                { className: "list-timeline-items" },
                s.map(function(e) {
                  return r.a.createElement(
                    "div",
                    { className: "list-timeline-item mb-3", key: e.id },
                    r.a.createElement(
                      "span",
                      { className: "list-timeline-text" },
                      r.a.createElement(
                        "span",
                        {
                          className: "label label-lg label-light-".concat(
                            Si[e.status],
                            " label-inline"
                          ),
                          style: { width: "60px" },
                        },
                        "ID: ",
                        e.id
                      ),
                      " ",
                      r.a.createElement(
                        "span",
                        { className: "ml-5" },
                        e.manufacture,
                        ", ",
                        e.model
                      )
                    )
                  );
                })
              )
            )
          ),
          r.a.createElement(
            Tn.a.Footer,
            { className: "form" },
            r.a.createElement(
              "div",
              { className: "form-group" },
              r.a.createElement(
                "select",
                {
                  className: "form-control ".concat(Si[d]),
                  value: d,
                  onChange: function(e) {
                    return f(+e.target.value);
                  },
                },
                r.a.createElement("option", { value: "0" }, "Selling"),
                r.a.createElement("option", { value: "1" }, "Sold")
              )
            ),
            r.a.createElement(
              "div",
              { className: "form-group" },
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: a,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    E(Ti(l.ids, d)).then(function() {
                      E(hi(l.queryParams)).then(function() {
                        l.setIds([]), a();
                      });
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Update Status"
              )
            )
          )
        );
      }
      function zi(e) {
        e.listLoading;
        var t = Ui(),
          a = Object(n.useMemo)(
            function() {
              return {
                setQueryParams: t.setQueryParams,
                queryParams: t.queryParams,
              };
            },
            [t]
          ),
          i = function(e) {
            var t = (function(e, t) {
              var a = t.status,
                n = t.condition,
                r = t.searchText,
                i = Object(m.a)({}, e),
                l = {};
              return (
                (l.status = "" !== a ? +a : void 0),
                (l.condition = "" !== n ? +n : void 0),
                (l.model = r),
                r && ((l.manufacture = r), (l.VINCode = r)),
                (i.filter = l),
                i
              );
            })(a.queryParams, e);
            Object($a.isEqual)(t, a.queryParams) ||
              ((t.pageNumber = 1), a.setQueryParams(t));
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              initialValues: { status: "", condition: "", searchText: "" },
              onSubmit: function(e) {
                i(e);
              },
            },
            function(e) {
              var t = e.values,
                a = e.handleSubmit,
                n = e.handleBlur,
                i = (e.handleChange, e.setFieldValue);
              return r.a.createElement(
                "form",
                { onSubmit: a, className: "form form-label-right" },
                r.a.createElement(
                  "div",
                  { className: "form-group row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement(
                      "select",
                      {
                        className: "form-control",
                        name: "status",
                        placeholder: "Filter by Status",
                        onChange: function(e) {
                          i("status", e.target.value), a();
                        },
                        onBlur: n,
                        value: t.status,
                      },
                      r.a.createElement("option", { value: "" }, "All"),
                      r.a.createElement("option", { value: "0" }, "Selling"),
                      r.a.createElement("option", { value: "1" }, "Sold")
                    ),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Filter"),
                      " by Status"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement(
                      "select",
                      {
                        className: "form-control",
                        placeholder: "Filter by Type",
                        name: "condition",
                        onBlur: n,
                        onChange: function(e) {
                          i("condition", e.target.value), a();
                        },
                        value: t.condition,
                      },
                      r.a.createElement("option", { value: "" }, "All"),
                      r.a.createElement("option", { value: "0" }, "New"),
                      r.a.createElement("option", { value: "1" }, "Used")
                    ),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Filter"),
                      " by Condition"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement("input", {
                      type: "text",
                      className: "form-control",
                      name: "searchText",
                      placeholder: "Search",
                      onBlur: n,
                      value: t.searchText,
                      onChange: function(e) {
                        i("searchText", e.target.value), a();
                      },
                    }),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Search"),
                      " in all fields"
                    )
                  )
                )
              );
            }
          )
        );
      }
      var Gi = function(e, t) {
          return r.a.createElement(
            "span",
            {
              className: "label label-lg label-light-".concat(
                Si[t.status],
                " label-inline"
              ),
            },
            Mi[t.status]
          );
        },
        Vi = function(e, t) {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement("span", {
              className: "badge badge-".concat(wi[t.condition], " badge-dot"),
            }),
            "\xa0",
            r.a.createElement(
              "span",
              { className: "font-bold font-".concat(wi[t.condition]) },
              xi[t.condition]
            )
          );
        },
        Wi = function(e, t) {
          return r.a.createElement(
            "span",
            { style: { color: t.color } },
            t.color
          );
        },
        Qi = function(e, t) {
          return r.a.createElement(r.a.Fragment, null, "$", t.price);
        },
        Yi = function(e, t, a, n) {
          var i = n.openEditProductPage,
            l = n.openDeleteProductDialog;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Xe.a,
              {
                overlay: r.a.createElement(
                  Je.a,
                  { id: "products-edit-tooltip" },
                  "Edit product"
                ),
              },
              r.a.createElement(
                "a",
                {
                  className:
                    "btn btn-icon btn-light btn-hover-primary btn-sm mx-3",
                  onClick: function() {
                    return i(t.id);
                  },
                },
                r.a.createElement(
                  "span",
                  { className: "svg-icon svg-icon-md svg-icon-primary" },
                  r.a.createElement(Fe.a, {
                    src: De("/media/svg/icons/Communication/Write.svg"),
                  })
                )
              )
            ),
            r.a.createElement(r.a.Fragment, null, " "),
            r.a.createElement(
              Xe.a,
              {
                overlay: r.a.createElement(
                  Je.a,
                  { id: "products-delete-tooltip" },
                  "Delete product"
                ),
              },
              r.a.createElement(
                "a",
                {
                  className: "btn btn-icon btn-light btn-hover-danger btn-sm",
                  onClick: function() {
                    return l(t.id);
                  },
                },
                r.a.createElement(
                  "span",
                  { className: "svg-icon svg-icon-md svg-icon-danger" },
                  r.a.createElement(Fe.a, {
                    src: De("/media/svg/icons/General/Trash.svg"),
                  })
                )
              )
            )
          );
        };
      function Ki() {
        var e = Ui(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                setIds: e.setIds,
                queryParams: e.queryParams,
                setQueryParams: e.setQueryParams,
                openEditProductPage: e.openEditProductPage,
                openDeleteProductDialog: e.openDeleteProductDialog,
              };
            },
            [e]
          ),
          a = Object(Ne.e)(function(e) {
            return { currentState: e.products };
          }, Ne.c).currentState,
          i = a.totalCount,
          l = a.entities,
          o = a.listLoading,
          s = Object(Ne.d)();
        Object(n.useEffect)(
          function() {
            t.setIds([]), s(hi(t.queryParams));
          },
          [t.queryParams, s]
        );
        var c = [
            {
              dataField: "VINCode",
              text: "VIN Code (ID)",
              sort: !0,
              sortCaret: je,
            },
            {
              dataField: "manufacture",
              text: "Manufacture",
              sort: !0,
              sortCaret: je,
            },
            { dataField: "model", text: "Model", sort: !0, sortCaret: je },
            {
              dataField: "modelYear",
              text: "Model Year",
              sort: !0,
              sortCaret: je,
            },
            {
              dataField: "color",
              text: "Color",
              sort: !0,
              sortCaret: je,
              formatter: Wi,
            },
            {
              dataField: "price",
              text: "Price",
              sort: !0,
              sortCaret: je,
              formatter: Qi,
            },
            {
              dataField: "status",
              text: "Status",
              sort: !0,
              sortCaret: je,
              formatter: Gi,
            },
            {
              dataField: "condition",
              text: "Condition",
              sort: !0,
              sortCaret: je,
              formatter: Vi,
            },
            {
              dataField: "action",
              text: "Actions",
              formatter: Yi,
              formatExtraData: {
                openEditProductPage: t.openEditProductPage,
                openDeleteProductDialog: t.openDeleteProductDialog,
              },
              classes: "text-right pr-0",
              headerClasses: "text-right pr-3",
              style: { minWidth: "100px" },
            },
          ],
          m = {
            custom: !0,
            totalSize: i,
            sizePerPageList: Di,
            sizePerPage: t.queryParams.pageSize,
            page: t.queryParams.pageNumber,
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            qt.PaginationProvider,
            { pagination: zt()(m) },
            function(e) {
              var a = e.paginationProps,
                n = e.paginationTableProps;
              return r.a.createElement(
                Vt,
                { isLoading: o, paginationProps: a },
                r.a.createElement(
                  En.a,
                  Object.assign(
                    {
                      wrapperClasses: "table-responsive",
                      classes: "table table-head-custom table-vertical-center",
                      bootstrap4: !0,
                      bordered: !1,
                      remote: !0,
                      keyField: "id",
                      data: null === l ? [] : l,
                      columns: c,
                      defaultSorted: Ai,
                      onTableChange: Le(t.setQueryParams),
                      selectRow: Pe({
                        entities: l,
                        ids: t.ids,
                        setIds: t.setIds,
                      }),
                    },
                    n
                  ),
                  r.a.createElement(Ie, { entities: l }),
                  r.a.createElement(Re, { entities: l })
                )
              );
            }
          )
        );
      }
      function Zi() {
        var e = Ui(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                setIds: e.setIds,
                openDeleteProductsDialog: e.openDeleteProductsDialog,
                openFetchProductsDialog: e.openFetchProductsDialog,
                openUpdateProductsStatusDialog:
                  e.openUpdateProductsStatusDialog,
              };
            },
            [e]
          );
        return r.a.createElement(
          "div",
          { className: "form" },
          r.a.createElement(
            "div",
            {
              className:
                "row align-items-center form-group-actions margin-top-20 margin-bottom-20",
            },
            r.a.createElement(
              "div",
              { className: "col-xl-12" },
              r.a.createElement(
                "div",
                { className: "form-group form-group-inline" },
                r.a.createElement(
                  "div",
                  { className: "form-label form-label-no-wrap" },
                  r.a.createElement(
                    "label",
                    { className: "-font-bold font-danger-" },
                    r.a.createElement(
                      "span",
                      null,
                      "Selected records count: ",
                      r.a.createElement("b", null, t.ids.length)
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-danger font-weight-bolder font-size-sm",
                      onClick: t.openDeleteProductsDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-trash" }),
                    " Delete All"
                  ),
                  "\xa0",
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-light-primary font-weight-bolder font-size-sm",
                      onClick: t.openFetchProductsDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-stream" }),
                    " Fetch Selected"
                  ),
                  "\xa0",
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-light-primary font-weight-bolder font-size-sm",
                      onClick: t.openUpdateProductsStatusDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-sync-alt" }),
                    " Update Status"
                  )
                )
              )
            )
          )
        );
      }
      function Xi() {
        var e = Ui(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                queryParams: e.queryParams,
                setQueryParams: e.setQueryParams,
                newProductButtonClick: e.newProductButtonClick,
                openDeleteProductsDialog: e.openDeleteProductsDialog,
                openEditProductPage: e.openEditProductPage,
                openUpdateProductsStatusDialog:
                  e.openUpdateProductsStatusDialog,
                openFetchProductsDialog: e.openFetchProductsDialog,
              };
            },
            [e]
          );
        return r.a.createElement(
          wt,
          null,
          r.a.createElement(
            St,
            { title: "Products list" },
            r.a.createElement(
              Ot,
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: t.newProductButtonClick,
                },
                "New Product"
              )
            )
          ),
          r.a.createElement(
            Mt,
            null,
            r.a.createElement(zi, null),
            t.ids.length > 0 &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(Zi, null)
              ),
            r.a.createElement(Ki, null)
          )
        );
      }
      function Ji(e) {
        var t = e.history,
          a = {
            newProductButtonClick: function() {
              t.push("/e-commerce/products/new");
            },
            openEditProductPage: function(e) {
              t.push("/e-commerce/products/".concat(e, "/edit"));
            },
            openDeleteProductDialog: function(e) {
              t.push("/e-commerce/products/".concat(e, "/delete"));
            },
            openDeleteProductsDialog: function() {
              t.push("/e-commerce/products/deleteProducts");
            },
            openFetchProductsDialog: function() {
              t.push("/e-commerce/products/fetch");
            },
            openUpdateProductsStatusDialog: function() {
              t.push("/e-commerce/products/updateStatus");
            },
          };
        return r.a.createElement(
          Pi,
          { productsUIEvents: a },
          r.a.createElement(gi, null),
          r.a.createElement(
            Se.b,
            { path: "/e-commerce/products/deleteProducts" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(Fi, {
                show: null != a,
                onHide: function() {
                  t.push("/e-commerce/products");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/e-commerce/products/:id/delete" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(_i, {
                show: null != a,
                id: a && a.params.id,
                onHide: function() {
                  t.push("/e-commerce/products");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/e-commerce/products/fetch" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(Hi, {
                show: null != a,
                onHide: function() {
                  t.push("/e-commerce/products");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/e-commerce/products/updateStatus" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(qi, {
                show: null != a,
                onHide: function() {
                  t.push("/e-commerce/products");
                },
              });
            }
          ),
          r.a.createElement(Xi, null)
        );
      }
      var $i = Rn.d().shape({
        model: Rn.e()
          .min(2, "Minimum 2 symbols")
          .max(50, "Maximum 50 symbols")
          .required("Model is required"),
        manufacture: Rn.e()
          .min(2, "Minimum 2 symbols")
          .max(50, "Maximum 50 symbols")
          .required("Manufacture is required"),
        modelYear: Rn.c()
          .min(1950, "1950 is minimum")
          .max(2020, "2020 is maximum")
          .required("Model year is required"),
        mileage: Rn.c()
          .min(0, "0 is minimum")
          .max(1e6, "1000000 is maximum")
          .required("Mileage is required"),
        color: Rn.e().required("Color is required"),
        price: Rn.c()
          .min(1, "$1 is minimum")
          .max(1e6, "$1000000 is maximum")
          .required("Price is required"),
        VINCode: Rn.e().required("VINCode is required"),
      });
      function el(e) {
        var t = e.product,
          a = e.btnRef,
          n = e.saveProduct;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              enableReinitialize: !0,
              initialValues: t,
              validationSchema: $i,
              onSubmit: function(e) {
                n(e);
              },
            },
            function(e) {
              var t = e.handleSubmit;
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  xt.b,
                  { className: "form form-label-right" },
                  r.a.createElement(
                    "div",
                    { className: "form-group row" },
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(xt.a, {
                        name: "model",
                        component: _t,
                        placeholder: "Model",
                        label: "Model",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(
                        Ht,
                        { name: "manufacture", label: "Color" },
                        Ii.map(function(e) {
                          return r.a.createElement(
                            "option",
                            { key: e, value: e },
                            e
                          );
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(xt.a, {
                        type: "number",
                        name: "modelYear",
                        component: _t,
                        placeholder: "Model year",
                        label: "Model year",
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-group row" },
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(xt.a, {
                        type: "number",
                        name: "mileage",
                        component: _t,
                        placeholder: "Mileage",
                        label: "Mileage",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(
                        Ht,
                        { name: "color", label: "Color" },
                        Li.map(function(e) {
                          return r.a.createElement(
                            "option",
                            { key: e, value: e },
                            e
                          );
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(xt.a, {
                        type: "number",
                        name: "price",
                        component: _t,
                        placeholder: "Price",
                        label: "Price ($)",
                        customFeedbackLabel: "Please enter Price",
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-group row" },
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(xt.a, {
                        name: "VINCode",
                        component: _t,
                        placeholder: "VIN code",
                        label: "VIN code",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(
                        Ht,
                        { name: "status", label: "Status" },
                        Mi.map(function(e, t) {
                          return r.a.createElement(
                            "option",
                            { key: e, value: t },
                            e
                          );
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(
                        Ht,
                        { name: "condition", label: "Condition" },
                        xi.map(function(e, t) {
                          return r.a.createElement(
                            "option",
                            { key: e, value: t },
                            e
                          );
                        })
                      )
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-group" },
                    r.a.createElement("label", null, "Description"),
                    r.a.createElement(xt.a, {
                      name: "description",
                      as: "textarea",
                      className: "form-control",
                    })
                  ),
                  r.a.createElement("button", {
                    type: "submit",
                    style: { display: "none" },
                    ref: a,
                    onSubmit: function() {
                      return t();
                    },
                  })
                )
              );
            }
          )
        );
      }
      var tl = [{ dataField: "id", order: "asc" }],
        al = [
          { text: "1", value: 1 },
          { text: "3", value: 3 },
          { text: "5", value: 5 },
        ],
        nl = {
          filter: { value: "" },
          sortOrder: "asc",
          sortField: "name",
          pageNumber: 1,
          pageSize: 5,
        },
        rl = [
          { id: 0, name: "Seats" },
          { id: 1, name: "Fuel Type" },
          { id: 2, name: "Stock" },
          { id: 3, name: "Door count" },
          { id: 4, name: "Engine" },
          { id: 5, name: "Transmission" },
          { id: 6, name: "Drivetrain" },
          { id: 7, name: "Combined MPG" },
          { id: 8, name: "Warranty" },
          { id: 9, name: "Wheels" },
        ],
        il = Object(n.createContext)();
      function ll() {
        return Object(n.useContext)(il);
      }
      il.Consumer;
      function ol(e) {
        var t = e.currentProductId,
          a = e.children,
          i = Object(n.useState)(t),
          l = Object(Ye.a)(i, 2),
          o = l[0],
          s = l[1],
          c = Object(n.useState)(nl),
          m = Object(Ye.a)(c, 2),
          u = m[0],
          d = m[1],
          f = Object(n.useState)([]),
          E = Object(Ye.a)(f, 2),
          p = E[0],
          g = E[1],
          b = Object(n.useCallback)(function(e) {
            d(function(t) {
              return (
                Object($a.isFunction)(e) && (e = e(t)),
                Object($a.isEqual)(t, e) ? t : e
              );
            });
          }, []),
          h = Object(n.useState)(null),
          v = Object(Ye.a)(h, 2),
          y = v[0],
          C = v[1],
          N = { id: void 0, value: "", specId: 0, carId: o };
        Object(n.useEffect)(
          function() {
            (N.carId = t), (N.productId = t), s(t);
          },
          [t]
        );
        var T = Object(n.useState)(!1),
          O = Object(Ye.a)(T, 2),
          S = O[0],
          M = O[1],
          w = Object(n.useState)(!1),
          x = Object(Ye.a)(w, 2),
          A = x[0],
          D = x[1],
          k = Object(n.useState)(!1),
          L = Object(Ye.a)(k, 2),
          I = L[0],
          R = L[1],
          U = Object(n.useState)(!1),
          P = Object(Ye.a)(U, 2),
          _ = P[0],
          F = P[1],
          j = {
            ids: p,
            setIds: g,
            productId: o,
            setProductId: s,
            queryParams: u,
            setQueryParams: b,
            initSpecification: N,
            selectedId: y,
            showEditSpecificationDialog: S,
            openEditSpecificationDialog: function(e) {
              C(e), M(!0);
            },
            openNewSpecificationDialog: function() {
              C(void 0), M(!0);
            },
            closeEditSpecificationDialog: function() {
              C(void 0), M(!1);
            },
            showDeleteSpecificationDialog: A,
            openDeleteSpecificationDialog: function(e) {
              C(e), D(!0);
            },
            closeDeleteSpecificationDialog: function() {
              C(void 0), D(!1);
            },
            showDeleteSpecificationsDialog: I,
            openDeleteSpecificationsDialog: function() {
              R(!0);
            },
            closeDeleteSpecificationsDialog: function() {
              R(!1);
            },
            showFetchSpecificationsDialog: _,
            openFetchSpecificationsDialog: function() {
              F(!0);
            },
            closeFetchSpecificationsDialog: function() {
              F(!1);
            },
          };
        return r.a.createElement(il.Provider, { value: j }, a);
      }
      function sl() {
        var e = ll(),
          t = Object(n.useMemo)(
            function() {
              return {
                openNewSpecificationDialog: e.openNewSpecificationDialog,
                setQueryParams: e.setQueryParams,
                queryParams: e.queryParams,
              };
            },
            [e]
          ),
          a = function(e) {
            var a = (function(e, t) {
              var a = t.searchText,
                n = Object(m.a)({}, e),
                r = {};
              return (r.value = a), a && (r.name = a), (n.filter = r), n;
            })(t.queryParams, e);
            Object($a.isEqual)(a, t.queryParams) ||
              ((a.pageNumber = 1), t.setQueryParams(a));
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            { className: "form-filtration" },
            r.a.createElement(
              "div",
              { className: "row align-items-center" },
              r.a.createElement(
                "div",
                { className: "col-md-2 margin-bottom-10-mobile" },
                r.a.createElement(
                  xt.c,
                  {
                    initialValues: { searchText: "" },
                    onSubmit: function(e) {
                      a(e);
                    },
                  },
                  function(e) {
                    var t = e.values,
                      a = e.handleSubmit,
                      n = e.handleBlur,
                      i = (e.handleChange, e.setFieldValue);
                    return r.a.createElement(
                      "form",
                      { onSubmit: a },
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement("input", {
                          type: "text",
                          className: "form-control",
                          name: "searchText",
                          placeholder: "Search",
                          onBlur: n,
                          value: t.searchText,
                          onChange: function(e) {
                            i("searchText", e.target.value), a();
                          },
                        }),
                        r.a.createElement(
                          "small",
                          { className: "form-text text-muted" },
                          r.a.createElement("b", null, "Search"),
                          " in all fields"
                        )
                      )
                    );
                  }
                )
              ),
              r.a.createElement("div", {
                className: "col-md-7 margin-bottom-10-mobile",
              }),
              r.a.createElement(
                "div",
                { className: "col-md-3 text-right margin-bottom-10-mobile" },
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    className: "btn btn-primary",
                    onClick: function() {
                      return t.openNewSpecificationDialog();
                    },
                  },
                  "Create new specification"
                )
              )
            )
          )
        );
      }
      var cl = le.actions,
        ml = function(e, t) {
          return function(a) {
            return (
              a(cl.startCall({ callType: re })),
              t
                ? (function(e, t) {
                    return s.a.post(
                      "".concat("api/specifications", "find/").concat(t),
                      { queryParams: e }
                    );
                  })(e, t)
                    .then(function(e) {
                      var t = e.data,
                        n = t.totalCount,
                        r = t.entities;
                      a(
                        cl.specificationsFetched({ totalCount: n, entities: r })
                      );
                    })
                    .catch(function(e) {
                      (e.clientMessage = "Can't find specifications"),
                        a(cl.catchError({ error: e, callType: re }));
                    })
                : a(cl.specificationsFetched({ totalCount: 0, entities: null }))
            );
          };
        },
        ul = function(e) {
          return function(t) {
            return e
              ? (t(cl.startCall({ callType: ie })),
                ((a = e),
                s.a.get("".concat("api/specifications", "/").concat(a)))
                  .then(function(e) {
                    var a = e.data;
                    t(cl.specificationFetched({ specificationForEdit: a }));
                  })
                  .catch(function(e) {
                    (e.clientMessage = "Can't find specification"),
                      t(cl.catchError({ error: e, callType: ie }));
                  }))
              : t(cl.specificationFetched({ specificationForEdit: void 0 }));
            var a;
          };
        },
        dl = function(e) {
          return function(t) {
            return (
              t(cl.startCall({ callType: ie })),
              ((a = e),
              s.a.delete("".concat("api/specifications", "/").concat(a)))
                .then(function(a) {
                  t(cl.specificationDeleted({ id: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't delete specification"),
                    t(cl.catchError({ error: e, callType: ie }));
                })
            );
            var a;
          };
        },
        fl = function(e) {
          return function(t) {
            return (
              t(cl.startCall({ callType: ie })),
              ((a = e), s.a.post("api/specifications", { specification: a }))
                .then(function(e) {
                  var a = e.data.specification;
                  t(cl.specificationCreated({ specification: a }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't create specification"),
                    t(cl.catchError({ error: e, callType: ie }));
                })
            );
            var a;
          };
        },
        El = function(e) {
          return function(t) {
            return (
              t(cl.startCall({ callType: ie })),
              (function(e) {
                return s.a.put(
                  "".concat("api/specifications", "/").concat(e.id),
                  { specification: e }
                );
              })(e)
                .then(function() {
                  t(cl.specificationUpdated({ specification: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't update specification"),
                    t(cl.catchError({ error: e, callType: ie }));
                })
            );
          };
        },
        pl = function(e) {
          return function(t) {
            return (
              t(cl.startCall({ callType: ie })),
              (function(e) {
                return s.a.post(
                  "".concat("api/specifications", "/deleteSpecifications"),
                  { ids: e }
                );
              })(e)
                .then(function() {
                  t(cl.specificationsDeleted({ ids: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't delete specifications"),
                    t(cl.catchError({ error: e, callType: ie }));
                })
            );
          };
        };
      function gl(e, t, a, n) {
        var i = n.openEditSpecificationDialog,
          l = n.openDeleteSpecificationDialog;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            Xe.a,
            {
              overlay: r.a.createElement(
                Je.a,
                { id: "specs-edit-tooltip" },
                "Edit specification"
              ),
            },
            r.a.createElement(
              "a",
              {
                className:
                  "btn btn-icon btn-light btn-hover-primary btn-sm mx-3",
                onClick: function() {
                  return i(t.id);
                },
              },
              r.a.createElement(
                "span",
                { className: "svg-icon svg-icon-md svg-icon-primary" },
                r.a.createElement(Fe.a, {
                  src: De("/media/svg/icons/Communication/Write.svg"),
                })
              )
            )
          ),
          r.a.createElement(r.a.Fragment, null, " "),
          r.a.createElement(
            Xe.a,
            {
              overlay: r.a.createElement(
                Je.a,
                { id: "spec-delete-tooltip" },
                "Delete specification"
              ),
            },
            r.a.createElement(
              "a",
              {
                className: "btn btn-icon btn-light btn-hover-danger btn-sm",
                onClick: function() {
                  return l(t.id);
                },
              },
              r.a.createElement(
                "span",
                { className: "svg-icon svg-icon-md svg-icon-danger" },
                r.a.createElement(Fe.a, {
                  src: De("/media/svg/icons/General/Trash.svg"),
                })
              )
            )
          )
        );
      }
      function bl() {
        var e = ll(),
          t = Object(n.useMemo)(
            function() {
              return {
                queryParams: e.queryParams,
                setQueryParams: e.setQueryParams,
                openEditSpecificationDialog: e.openEditSpecificationDialog,
                openDeleteSpecificationDialog: e.openDeleteSpecificationDialog,
                ids: e.ids,
                setIds: e.setIds,
                productId: e.productId,
              };
            },
            [e]
          ),
          a = Object(Ne.e)(function(e) {
            return { currentState: e.specifications };
          }, Ne.c).currentState,
          i = a.totalCount,
          l = a.entities,
          o = a.listLoading,
          s = Object(Ne.d)();
        Object(n.useEffect)(
          function() {
            t.setIds([]), s(ml(t.queryParams, t.productId));
          },
          [t.queryParams, s, t.productId]
        );
        var c = [
            {
              dataField: "name",
              text: "Specification Type",
              sort: !0,
              sortCaret: je,
            },
            { dataField: "value", text: "Value", sort: !0, sortCaret: je },
            {
              dataField: "action",
              text: "Actions",
              formatter: gl,
              formatExtraData: {
                openEditSpecificationDialog: t.openEditSpecificationDialog,
                openDeleteSpecificationDialog: t.openDeleteSpecificationDialog,
              },
              classes: "text-right pr-0",
              headerClasses: "text-right pr-3",
              style: { minWidth: "100px" },
            },
          ],
          m = {
            custom: !0,
            totalSize: i,
            sizePerPageList: al,
            sizePerPage: t.queryParams.pageSize,
            page: t.queryParams.pageNumber,
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            qt.PaginationProvider,
            { pagination: zt()(m) },
            function(e) {
              var a = e.paginationProps,
                n = e.paginationTableProps;
              return r.a.createElement(
                Vt,
                { isLoading: o, paginationProps: a },
                r.a.createElement(
                  En.a,
                  Object.assign(
                    {
                      wrapperClasses: "table-responsive",
                      classes: "table table-head-custom table-vertical-center",
                      bordered: !1,
                      bootstrap4: !0,
                      remote: !0,
                      keyField: "id",
                      data: null === l ? [] : l,
                      columns: c,
                      defaultSorted: tl,
                      onTableChange: Le(t.setQueryParams),
                      selectRow: Pe({
                        entities: l,
                        ids: t.ids,
                        setIds: t.setIds,
                      }),
                    },
                    n
                  ),
                  r.a.createElement(Ie, { entities: l }),
                  r.a.createElement(Re, { entities: l })
                )
              );
            }
          )
        );
      }
      function hl() {
        var e = Object(Ne.e)(function(e) {
          return { isLoading: e.specifications.listLoading };
        }, Ne.c).isLoading;
        return (
          Object(n.useEffect)(function() {}, [e]),
          r.a.createElement(Xt, { isLoading: e, text: "Loading ..." })
        );
      }
      function vl() {
        var e = ll(),
          t = Object(n.useMemo)(
            function() {
              return {
                productId: e.productId,
                ids: e.ids,
                show: e.showDeleteSpecificationsDialog,
                onHide: e.closeDeleteSpecificationsDialog,
                setIds: e.setIds,
                queryParams: e.queryParams,
              };
            },
            [e]
          ),
          a = Object(Ne.d)(),
          i = Object(Ne.e)(function(e) {
            return { isLoading: e.specifications.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(function() {}, [i, a]),
          Object(n.useEffect)(
            function() {
              (t.ids && 0 !== t.ids.length) || t.onHide();
            },
            [t.ids]
          );
        return r.a.createElement(
          Tn.a,
          {
            show: t.show,
            onHide: t.onHide,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          i && r.a.createElement($t, { variant: "query" }),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Specifications Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !i &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete selected specifications?"
              ),
            i &&
              r.a.createElement("span", null, "Specifications are deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: t.onHide,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    a(pl(t.ids)).then(function() {
                      a(ml(t.queryParams, t.productId)).then(function() {
                        t.setIds([]), t.onHide();
                      });
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      function yl() {
        var e = ll(),
          t = Object(n.useMemo)(
            function() {
              return {
                id: e.selectedId,
                productId: e.productId,
                show: e.showDeleteSpecificationDialog,
                onHide: e.closeDeleteSpecificationDialog,
                queryParams: e.queryParams,
                setIds: e.setIds,
              };
            },
            [e]
          ),
          a = Object(Ne.d)(),
          i = Object(Ne.e)(function(e) {
            return { isLoading: e.specifications.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(
          function() {
            t.id || t.onHide();
          },
          [t.id]
        ),
          Object(n.useEffect)(function() {}, [i, a]);
        return r.a.createElement(
          Tn.a,
          {
            show: t.show,
            onHide: t.onHide,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          i && r.a.createElement($t, { variant: "query" }),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Specification Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !i &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete this specification?"
              ),
            i && r.a.createElement("span", null, "Specification is deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: t.onHide,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    a(dl(t.id)).then(function() {
                      a(ml(t.queryParams, t.productId)),
                        t.setIds([]),
                        t.onHide();
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      var Cl = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function Nl() {
        var e = ll(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                show: e.showFetchSpecificationsDialog,
                onHide: e.closeFetchSpecificationsDialog,
                queryParams: e.queryParams,
              };
            },
            [e]
          ),
          a = Object(Ne.e)(function(e) {
            return { specifications: Cl(e.specifications.entities, t.ids) };
          }, Ne.c).specifications;
        return (
          Object(n.useEffect)(
            function() {
              (t.ids && 0 !== t.ids.length) || t.onHide();
            },
            [t.ids]
          ),
          r.a.createElement(
            Tn.a,
            {
              show: t.show,
              onHide: t.onHide,
              "aria-labelledby": "example-modal-sizes-title-lg",
            },
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                "Fetch selected elements"
              )
            ),
            r.a.createElement(
              Tn.a.Body,
              null,
              r.a.createElement(
                "div",
                {
                  className:
                    "list-timeline list-timeline-skin-light padding-30",
                },
                r.a.createElement(
                  "div",
                  { className: "list-timeline-items" },
                  a.map(function(e) {
                    return r.a.createElement(
                      "div",
                      { className: "list-timeline-item mb-3", key: e.id },
                      r.a.createElement(
                        "span",
                        { className: "list-timeline-text" },
                        r.a.createElement(
                          "span",
                          {
                            className:
                              "label label-lg label-light-success label-inline",
                            style: { width: "60px" },
                          },
                          "ID: ",
                          e.id
                        ),
                        " ",
                        r.a.createElement(
                          "span",
                          { className: "ml-5" },
                          e.name,
                          ": ",
                          e.value,
                          " "
                        )
                      )
                    );
                  })
                )
              )
            ),
            r.a.createElement(
              Tn.a.Footer,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: t.onHide,
                    className: "btn btn-light btn-elevate",
                  },
                  "Cancel"
                ),
                r.a.createElement(r.a.Fragment, null, " "),
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: t.onHide,
                    className: "btn btn-primary btn-elevate",
                  },
                  "Ok"
                )
              )
            )
          )
        );
      }
      function Tl() {
        var e = ll(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                openDeleteSpecificationsDialog:
                  e.openDeleteSpecificationsDialog,
                openFetchSpecificationsDialog: e.openFetchSpecificationsDialog,
              };
            },
            [e]
          );
        return r.a.createElement(
          "div",
          { className: "form" },
          r.a.createElement(
            "div",
            {
              className:
                "row align-items-center form-group-actions margin-top-20",
            },
            r.a.createElement(
              "div",
              { className: "col-xl-12" },
              r.a.createElement(
                "div",
                { className: "form-group form-group-inline" },
                r.a.createElement(
                  "div",
                  { className: "form-label form-label-no-wrap" },
                  r.a.createElement(
                    "label",
                    { className: "font-bold font-danger mt-5" },
                    r.a.createElement(
                      "span",
                      null,
                      "Selected records count: ",
                      t.ids.length
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "form-group-inline" },
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-danger font-weight-bolder font-size-sm",
                      onClick: t.openDeleteSpecificationsDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-trash" }),
                    " Delete All"
                  ),
                  "\xa0",
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-light-primary font-weight-bolder font-size-sm",
                      onClick: t.openFetchSpecificationsDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-stream" }),
                    " Fetch Selected"
                  )
                )
              )
            )
          )
        );
      }
      function Ol(e) {
        var t = e.id,
          a = Object(n.useState)(""),
          i = Object(Ye.a)(a, 2),
          l = i[0],
          o = i[1],
          s = Object(Ne.e)(function(e) {
            return {
              specificationForEdit: e.specifications.specificationForEdit,
              actionsLoading: e.specifications.actionsLoading,
            };
          }, Ne.c),
          c = s.specificationForEdit,
          m = s.actionsLoading;
        return (
          Object(n.useEffect)(
            function() {
              var e = t ? "" : "New Specification";
              c && t && (e = "Edit Specification"), o(e);
            },
            [c, m]
          ),
          r.a.createElement(
            r.a.Fragment,
            null,
            m && r.a.createElement($t, { variant: "query" }),
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                l
              )
            )
          )
        );
      }
      var Sl = Rn.d().shape({
        value: Rn.e()
          .min(2, "Minimum 2 symbols")
          .max(50, "Maximum 50 symbols")
          .required("Value is required"),
        specId: Rn.c().required("Specification type is required"),
      });
      function Ml(e) {
        var t = e.saveSpecification,
          a = e.specification,
          n = e.actionsLoading,
          i = e.onHide;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              enableReinitialize: !0,
              initialValues: a,
              validationSchema: Sl,
              onSubmit: function(e) {
                t(e);
              },
            },
            function(e) {
              var t = e.handleSubmit;
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  Tn.a.Body,
                  { className: "overlay overlay-block" },
                  n &&
                    r.a.createElement(
                      "div",
                      { className: "overlay-layer bg-transparent" },
                      r.a.createElement("div", {
                        className: "spinner spinner-lg spinner-success",
                      })
                    ),
                  r.a.createElement(
                    xt.b,
                    { className: "form form-label-right" },
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-12" },
                        r.a.createElement(
                          Ht,
                          { name: "specId", label: "Specification Type" },
                          rl.map(function(e) {
                            return r.a.createElement(
                              "option",
                              { key: e.id, value: e.id },
                              e.name
                            );
                          })
                        )
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-12" },
                        r.a.createElement(xt.a, {
                          name: "value",
                          component: _t,
                          placeholder: "Value",
                          label: "Value",
                        })
                      )
                    )
                  )
                ),
                r.a.createElement(
                  Tn.a.Footer,
                  null,
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: i,
                      className: "btn btn-light btn-elevate",
                    },
                    "Cancel"
                  ),
                  r.a.createElement(r.a.Fragment, null, " "),
                  r.a.createElement(
                    "button",
                    {
                      type: "submit",
                      onClick: function() {
                        return t();
                      },
                      className: "btn btn-primary btn-elevate",
                    },
                    "Save"
                  )
                )
              );
            }
          )
        );
      }
      function wl() {
        var e = ll(),
          t = Object(n.useMemo)(
            function() {
              return {
                id: e.selectedId,
                show: e.showEditSpecificationDialog,
                onHide: e.closeEditSpecificationDialog,
                productId: e.productId,
                queryParams: e.queryParams,
                initSpecification: e.initSpecification,
              };
            },
            [e]
          ),
          a = Object(Ne.d)(),
          i = Object(Ne.e)(function(e) {
            return {
              actionsLoading: e.specifications.actionsLoading,
              specificationForEdit: e.specifications.specificationForEdit,
            };
          }, Ne.c),
          l = i.actionsLoading,
          o = i.specificationForEdit;
        Object(n.useEffect)(
          function() {
            a(ul(t.id));
          },
          [t.id, a]
        );
        return r.a.createElement(
          Tn.a,
          {
            show: t.show,
            onHide: t.onHide,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          r.a.createElement(Ol, { id: t.id }),
          r.a.createElement(Ml, {
            saveSpecification: function(e) {
              t.id
                ? a(El(e)).then(function() {
                    a(ml(t.queryParams, t.productId)).then(function() {
                      return t.onHide();
                    });
                  })
                : a(fl(e)).then(function() {
                    a(ml(t.queryParams, t.productId)).then(function() {
                      return t.onHide();
                    });
                  });
            },
            actionsLoading: l,
            specification: o || t.initSpecification,
            onHide: t.onHide,
          })
        );
      }
      function xl() {
        var e = ll(),
          t = Object(n.useMemo)(
            function() {
              return { ids: e.ids };
            },
            [e]
          );
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(hl, null),
          r.a.createElement(wl, null),
          r.a.createElement(yl, null),
          r.a.createElement(vl, null),
          r.a.createElement(Nl, null),
          r.a.createElement(
            "div",
            { className: "form margin-b-30" },
            r.a.createElement(sl, null),
            t.ids.length > 0 &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(Tl, null),
                r.a.createElement("br", null)
              )
          ),
          r.a.createElement(bl, null)
        );
      }
      var Al = [{ dataField: "id", order: "asc" }],
        Dl = [
          { text: "1", value: 1 },
          { text: "3", value: 3 },
          { text: "5", value: 5 },
        ],
        kl = {
          filter: { text: "" },
          sortOrder: "asc",
          sortField: "id",
          pageNumber: 1,
          pageSize: 5,
        },
        Ll = Object(n.createContext)();
      function Il() {
        return Object(n.useContext)(Ll);
      }
      Ll.Consumer;
      function Rl(e) {
        var t = e.currentProductId,
          a = e.children,
          i = Object(n.useState)(t),
          l = Object(Ye.a)(i, 2),
          o = l[0],
          s = l[1],
          c = Object(n.useState)(kl),
          m = Object(Ye.a)(c, 2),
          u = m[0],
          d = m[1],
          f = Object(n.useState)([]),
          E = Object(Ye.a)(f, 2),
          p = E[0],
          g = E[1],
          b = Object(n.useCallback)(function(e) {
            d(function(t) {
              return (
                Object($a.isFunction)(e) && (e = e(t)),
                Object($a.isEqual)(t, e) ? t : e
              );
            });
          }, []),
          h = Object(n.useState)(null),
          v = Object(Ye.a)(h, 2),
          y = v[0],
          C = v[1],
          N = Object(n.useState)(!1),
          T = Object(Ye.a)(N, 2),
          O = T[0],
          S = T[1],
          M = {
            id: void 0,
            text: "",
            type: 0,
            dueDate: "01/07/2020",
            carId: o,
          };
        Object(n.useEffect)(
          function() {
            (M.productId = t), (M.carId = t), s(t);
          },
          [t]
        );
        var w = Object(n.useState)(!1),
          x = Object(Ye.a)(w, 2),
          A = x[0],
          D = x[1],
          k = Object(n.useState)(!1),
          L = Object(Ye.a)(k, 2),
          I = L[0],
          R = L[1],
          U = Object(n.useState)(!1),
          P = Object(Ye.a)(U, 2),
          _ = P[0],
          F = P[1],
          j = {
            ids: p,
            setIds: g,
            productId: o,
            setProductId: s,
            queryParams: u,
            setQueryParams: b,
            initRemark: M,
            selectedId: y,
            showEditRemarkDialog: O,
            openNewRemarkDialog: function() {
              C(void 0), S(!0);
            },
            openEditRemarkDialog: function(e) {
              C(e), S(!0);
            },
            closeEditRemarkDialog: function() {
              C(void 0), S(!1);
            },
            showDeleteRemarkDialog: A,
            openDeleteRemarkDialog: function(e) {
              C(e), D(!0);
            },
            closeDeleteRemarkDialog: function() {
              C(void 0), D(!1);
            },
            showDeleteRemarksDialog: I,
            openDeleteRemarksDialog: function() {
              R(!0);
            },
            closeDeleteRemarksDialog: function() {
              R(!1);
            },
            openFetchRemarksDialog: function() {
              F(!0);
            },
            closeFetchRemarksDialog: function() {
              F(!1);
            },
            showFetchRemarksDialog: _,
          };
        return r.a.createElement(Ll.Provider, { value: j }, a);
      }
      function Ul() {
        var e = Il(),
          t = Object(n.useMemo)(
            function() {
              return {
                setQueryParams: e.setQueryParams,
                openNewRemarkDialog: e.openNewRemarkDialog,
                queryParams: e.queryParams,
              };
            },
            [e]
          ),
          a = function(e) {
            var a = (function(e, t) {
              var a = t.searchText,
                n = Object(m.a)({}, e),
                r = {};
              return (r.text = a), (n.filter = r), n;
            })(t.queryParams, e);
            Object($a.isEqual)(a, t.queryParams) ||
              ((a.pageNumber = 1), t.setQueryParams(a));
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            { className: "form-filtration" },
            r.a.createElement(
              "div",
              { className: "row align-items-center" },
              r.a.createElement(
                "div",
                { className: "col-md-2 margin-bottom-10-mobile" },
                r.a.createElement(
                  xt.c,
                  {
                    initialValues: { searchText: "" },
                    onSubmit: function(e) {
                      a(e);
                    },
                  },
                  function(e) {
                    var t = e.values,
                      a = e.handleSubmit,
                      n = e.handleBlur,
                      i = (e.handleChange, e.setFieldValue);
                    return r.a.createElement(
                      "form",
                      { onSubmit: a },
                      r.a.createElement(
                        "div",
                        null,
                        r.a.createElement("input", {
                          type: "text",
                          className: "form-control",
                          name: "searchText",
                          placeholder: "Search",
                          onBlur: n,
                          value: t.searchText,
                          onChange: function(e) {
                            i("searchText", e.target.value), a();
                          },
                        }),
                        r.a.createElement(
                          "small",
                          { className: "form-text text-muted" },
                          r.a.createElement("b", null, "Search"),
                          " in all fields"
                        )
                      )
                    );
                  }
                )
              ),
              r.a.createElement("div", {
                className: "col-md-8 margin-bottom-10-mobile",
              }),
              r.a.createElement(
                "div",
                { className: "col-md-2 text-right margin-bottom-10-mobile" },
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    className: "btn btn-primary",
                    onClick: function() {
                      return t.openNewRemarkDialog();
                    },
                  },
                  "Create new remark"
                )
              )
            )
          )
        );
      }
      var Pl = ae.actions,
        _l = function(e, t) {
          return function(a) {
            return (
              a(Pl.startCall({ callType: ee })),
              t
                ? (function(e, t) {
                    return s.a.post(
                      "".concat("api/remarks", "find/").concat(t),
                      { queryParams: e }
                    );
                  })(e, t)
                    .then(function(e) {
                      var t = e.data,
                        n = t.totalCount,
                        r = t.entities;
                      a(Pl.remarksFetched({ totalCount: n, entities: r }));
                    })
                    .catch(function(e) {
                      (e.clientMessage = "Can't find remarks"),
                        a(Pl.catchError({ error: e, callType: ee }));
                    })
                : a(Pl.remarksFetched({ totalCount: 0, entities: null }))
            );
          };
        },
        Fl = function(e) {
          return function(t) {
            return e
              ? (t(Pl.startCall({ callType: te })),
                ((a = e), s.a.get("".concat("api/remarks", "/").concat(a)))
                  .then(function(e) {
                    var a = e.data;
                    t(Pl.remarkFetched({ remarkForEdit: a }));
                  })
                  .catch(function(e) {
                    (e.clientMessage = "Can't find remark"),
                      t(Pl.catchError({ error: e, callType: te }));
                  }))
              : t(Pl.remarkFetched({ remarkForEdit: void 0 }));
            var a;
          };
        },
        jl = function(e) {
          return function(t) {
            return (
              t(Pl.startCall({ callType: te })),
              ((a = e), s.a.delete("".concat("api/remarks", "/").concat(a)))
                .then(function(a) {
                  t(Pl.remarkDeleted({ id: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't delete remark"),
                    t(Pl.catchError({ error: e, callType: te }));
                })
            );
            var a;
          };
        },
        Hl = function(e) {
          return function(t) {
            return (
              t(Pl.startCall({ callType: te })),
              ((a = e), s.a.post("api/remarks", { remark: a }))
                .then(function(e) {
                  var a = e.data.remark;
                  t(Pl.remarkCreated({ remark: a }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't create remark"),
                    t(Pl.catchError({ error: e, callType: te }));
                })
            );
            var a;
          };
        },
        Bl = function(e) {
          return function(t) {
            return (
              t(Pl.startCall({ callType: te })),
              (function(e) {
                return s.a.put("".concat("api/remarks", "/").concat(e.id), {
                  remark: e,
                });
              })(e)
                .then(function() {
                  t(Pl.remarkUpdated({ remark: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't update remark"),
                    t(Pl.catchError({ error: e, callType: te }));
                })
            );
          };
        },
        ql = function(e) {
          return function(t) {
            return (
              t(Pl.startCall({ callType: te })),
              (function(e) {
                return s.a.post("".concat("api/remarks", "/deleteRemarks"), {
                  ids: e,
                });
              })(e)
                .then(function() {
                  console.log("delete return"),
                    t(Pl.remarksDeleted({ ids: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't delete remarks"),
                    t(Pl.catchError({ error: e, callType: te }));
                })
            );
          };
        },
        zl = function(e, t, a, n) {
          var i = n.openEditRemarkDialog,
            l = n.openDeleteRemarkDialog;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Xe.a,
              {
                overlay: r.a.createElement(
                  Je.a,
                  { id: "customers-edit-tooltip" },
                  "Edit remark"
                ),
              },
              r.a.createElement(
                "a",
                {
                  className:
                    "btn btn-icon btn-light btn-hover-primary btn-sm mx-3",
                  onClick: function() {
                    return i(t.id);
                  },
                },
                r.a.createElement(
                  "span",
                  { className: "svg-icon svg-icon-md svg-icon-primary" },
                  r.a.createElement(Fe.a, {
                    src: De("/media/svg/icons/Communication/Write.svg"),
                  })
                )
              )
            ),
            r.a.createElement(r.a.Fragment, null, " "),
            r.a.createElement(
              Xe.a,
              {
                overlay: r.a.createElement(
                  Je.a,
                  { id: "customers-delete-tooltip" },
                  "Delete remark"
                ),
              },
              r.a.createElement(
                "a",
                {
                  className: "btn btn-icon btn-light btn-hover-danger btn-sm",
                  onClick: function() {
                    return l(t.id);
                  },
                },
                r.a.createElement(
                  "span",
                  { className: "svg-icon svg-icon-md svg-icon-danger" },
                  r.a.createElement(Fe.a, {
                    src: De("/media/svg/icons/General/Trash.svg"),
                  })
                )
              )
            )
          );
        };
      function Gl() {
        var e = Il(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                setIds: e.setIds,
                queryParams: e.queryParams,
                setQueryParams: e.setQueryParams,
                productId: e.productId,
                openEditRemarkDialog: e.openEditRemarkDialog,
                openDeleteRemarkDialog: e.openDeleteRemarkDialog,
              };
            },
            [e]
          ),
          a = Object(Ne.e)(function(e) {
            return { currentState: e.remarks };
          }, Ne.c).currentState,
          i = a.totalCount,
          l = a.entities,
          o = a.listLoading,
          s = Object(Ne.d)();
        Object(n.useEffect)(
          function() {
            t.setIds([]), s(_l(t.queryParams, t.productId));
          },
          [t.queryParams, s, t.productId]
        );
        var c = [
            { dataField: "id", text: "ID", sort: !0, sortCaret: je },
            { dataField: "text", text: "Text", sort: !0, sortCaret: je },
            { dataField: "dueDate", text: "Due date", sort: !1 },
            {
              dataField: "action",
              text: "Actions",
              formatter: zl,
              formatExtraData: {
                openEditRemarkDialog: t.openEditRemarkDialog,
                openDeleteRemarkDialog: t.openDeleteRemarkDialog,
              },
              classes: "text-right pr-0",
              headerClasses: "text-right pr-3",
              style: { minWidth: "100px" },
            },
          ],
          m = {
            custom: !0,
            totalSize: i,
            sizePerPageList: Dl,
            sizePerPage: t.queryParams.pageSize,
            page: t.queryParams.pageNumber,
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            qt.PaginationProvider,
            { pagination: zt()(m) },
            function(e) {
              var a = e.paginationProps,
                n = e.paginationTableProps;
              return r.a.createElement(
                Vt,
                { isLoading: o, paginationProps: a },
                r.a.createElement(
                  En.a,
                  Object.assign(
                    {
                      wrapperClasses: "table-responsive",
                      classes: "table table-head-custom table-vertical-center",
                      bordered: !1,
                      bootstrap4: !0,
                      remote: !0,
                      keyField: "id",
                      data: null === l ? [] : l,
                      columns: c,
                      defaultSorted: Al,
                      onTableChange: Le(t.setQueryParams),
                      selectRow: Pe({
                        entities: l,
                        ids: t.ids,
                        setIds: t.setIds,
                      }),
                    },
                    n
                  ),
                  r.a.createElement(Ie, { entities: l }),
                  r.a.createElement(Re, { entities: l })
                )
              );
            }
          )
        );
      }
      function Vl() {
        var e = Object(Ne.e)(function(e) {
          return { isLoading: e.remarks.listLoading };
        }, Ne.c).isLoading;
        return (
          Object(n.useEffect)(function() {}, [e]),
          r.a.createElement(Xt, { isLoading: e, text: "Loading ..." })
        );
      }
      function Wl() {
        var e = Il(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                setIds: e.setIds,
                productId: e.productId,
                queryParams: e.queryParams,
                showDeleteRemarksDialog: e.showDeleteRemarksDialog,
                closeDeleteRemarksDialog: e.closeDeleteRemarksDialog,
              };
            },
            [e]
          ),
          a = Object(Ne.d)(),
          i = Object(Ne.e)(function(e) {
            return { isLoading: e.remarks.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(function() {}, [i, a]),
          Object(n.useEffect)(
            function() {
              (t.ids && 0 !== t.ids.length) || t.closeDeleteRemarksDialog();
            },
            [t.ids]
          );
        return r.a.createElement(
          Tn.a,
          {
            show: t.showDeleteRemarksDialog,
            onHide: t.closeDeleteRemarksDialog,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          i && r.a.createElement($t, { variant: "query" }),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Remarks Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !i &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete selected remarks?"
              ),
            i && r.a.createElement("span", null, "Remarks are deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: t.closeDeleteRemarksDialog,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    a(ql(t.ids)).then(function() {
                      a(_l(t.queryParams, t.productId)).then(function() {
                        t.setIds([]), t.closeDeleteRemarksDialog();
                      });
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      function Ql() {
        var e = Il(),
          t = Object(n.useMemo)(
            function() {
              return {
                id: e.selectedId,
                setIds: e.setIds,
                productId: e.productId,
                queryParams: e.queryParams,
                showDeleteRemarkDialog: e.showDeleteRemarkDialog,
                closeDeleteRemarkDialog: e.closeDeleteRemarkDialog,
              };
            },
            [e]
          ),
          a = Object(Ne.d)(),
          i = Object(Ne.e)(function(e) {
            return { isLoading: e.remarks.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(
          function() {
            t.id || t.closeDeleteRemarkDialog();
          },
          [t.id]
        ),
          Object(n.useEffect)(function() {}, [i, a]);
        return r.a.createElement(
          Tn.a,
          {
            show: t.showDeleteRemarkDialog,
            onHide: t.closeDeleteRemarkDialog,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          i && r.a.createElement($t, { variant: "query" }),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Remark Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !i &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete this remark?"
              ),
            i && r.a.createElement("span", null, "Remark is deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: t.closeDeleteRemarkDialog,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    a(jl(t.id)).then(function() {
                      a(_l(t.queryParams, t.productId)),
                        t.setIds([]),
                        t.closeDeleteRemarkDialog();
                    });
                  },
                  className: "btn btn-primary btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      var Yl = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function Kl() {
        var e = Il(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                queryParams: e.queryParams,
                showFetchRemarksDialog: e.showFetchRemarksDialog,
                closeFetchRemarksDialog: e.closeFetchRemarksDialog,
              };
            },
            [e]
          ),
          a = Object(Ne.e)(function(e) {
            return { remarks: Yl(e.remarks.entities, t.ids) };
          }, Ne.c).remarks;
        return (
          Object(n.useEffect)(
            function() {
              (t.ids && 0 !== t.ids.length) || t.closeFetchRemarksDialog();
            },
            [t.ids]
          ),
          r.a.createElement(
            Tn.a,
            {
              show: t.showFetchRemarksDialog,
              onHide: t.closeFetchRemarksDialog,
              "aria-labelledby": "example-modal-sizes-title-lg",
            },
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                "Fetch selected elements"
              )
            ),
            r.a.createElement(
              Tn.a.Body,
              null,
              r.a.createElement(
                "div",
                {
                  className:
                    "list-timeline list-timeline-skin-light padding-30",
                },
                r.a.createElement(
                  "div",
                  { className: "list-timeline-items" },
                  a.map(function(e) {
                    return r.a.createElement(
                      "div",
                      { className: "list-timeline-item mb-3", key: e.id },
                      r.a.createElement(
                        "span",
                        { className: "list-timeline-text" },
                        r.a.createElement(
                          "span",
                          {
                            className:
                              "label label-lg label-light-success label-inline",
                            style: { width: "60px" },
                          },
                          "ID: ",
                          e.id
                        ),
                        " ",
                        r.a.createElement(
                          "span",
                          { className: "ml-5" },
                          e.text,
                          " "
                        )
                      )
                    );
                  })
                )
              )
            ),
            r.a.createElement(
              Tn.a.Footer,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: t.closeFetchRemarksDialog,
                    className: "btn btn-light btn-elevate",
                  },
                  "Cancel"
                ),
                r.a.createElement(r.a.Fragment, null, " "),
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: t.closeFetchRemarksDialog,
                    className: "btn btn-primary btn-elevate",
                  },
                  "Ok"
                )
              )
            )
          )
        );
      }
      function Zl() {
        var e = Il(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                openDeleteRemarksDialog: e.openDeleteRemarksDialog,
                openFetchRemarksDialog: e.openFetchRemarksDialog,
              };
            },
            [e]
          );
        return r.a.createElement(
          "div",
          { className: "form" },
          r.a.createElement(
            "div",
            {
              className:
                "row align-items-center form-group-actions margin-top-20",
            },
            r.a.createElement(
              "div",
              { className: "col-xl-12" },
              r.a.createElement(
                "div",
                { className: "form-group form-group-inline" },
                r.a.createElement(
                  "div",
                  { className: "form-label form-label-no-wrap" },
                  r.a.createElement(
                    "label",
                    { className: "font-bold font-danger mt-5" },
                    r.a.createElement(
                      "span",
                      null,
                      "Selected records count: ",
                      t.ids.length
                    )
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "form-group-inline" },
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-danger font-weight-bolder font-size-sm",
                      onClick: t.openDeleteRemarksDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-trash" }),
                    " Delete All"
                  ),
                  "\xa0",
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      className:
                        "btn btn-light-primary font-weight-bolder font-size-sm",
                      onClick: t.openFetchRemarksDialog,
                    },
                    r.a.createElement("i", { className: "fa fa-stream" }),
                    " Fetch Selected"
                  )
                )
              )
            )
          )
        );
      }
      function Xl(e) {
        var t = e.id,
          a = Object(n.useState)(""),
          i = Object(Ye.a)(a, 2),
          l = i[0],
          o = i[1],
          s = Object(Ne.e)(function(e) {
            return {
              remarkForEdit: e.remarks.remarkForEdit,
              actionsLoading: e.remarks.actionsLoading,
            };
          }, Ne.c),
          c = s.remarkForEdit,
          m = s.actionsLoading;
        return (
          Object(n.useEffect)(
            function() {
              var e = t ? "" : "New Remark";
              c && t && (e = "Edit remark"), o(e);
            },
            [c, m]
          ),
          r.a.createElement(
            r.a.Fragment,
            null,
            m && r.a.createElement($t, { variant: "query" }),
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                l
              )
            )
          )
        );
      }
      var Jl = Rn.d().shape({
        text: Rn.e()
          .min(2, "Minimum 2 symbols")
          .max(50, "Maximum 50 symbols")
          .required("Text is required"),
        type: Rn.c().required("Type is required"),
        dueDate: Rn.b()
          .nullable(!1)
          .required("Due date is required"),
      });
      function $l(e) {
        var t = e.saveRemark,
          a = e.remark,
          n = e.actionsLoading,
          i = e.onHide;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              enableReinitialize: !0,
              initialValues: a,
              validationSchema: Jl,
              onSubmit: function(e) {
                return t(e);
              },
            },
            function(e) {
              var t = e.handleSubmit;
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  Tn.a.Body,
                  { className: "overlay overlay-block" },
                  n &&
                    r.a.createElement(
                      "div",
                      { className: "overlay-layer bg-transparent" },
                      r.a.createElement("div", {
                        className: "spinner spinner-lg spinner-success",
                      })
                    ),
                  r.a.createElement(
                    xt.b,
                    { className: "form form-label-right" },
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-12" },
                        r.a.createElement(xt.a, {
                          name: "text",
                          component: _t,
                          placeholder: "Text",
                          label: "Text",
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-12" },
                        r.a.createElement(Lt, {
                          name: "dueDate",
                          label: "Due date",
                        })
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "form-group row" },
                      r.a.createElement(
                        "div",
                        { className: "col-lg-12" },
                        r.a.createElement(
                          Ht,
                          { name: "type", label: "Type" },
                          r.a.createElement("option", { value: "0" }, "Info"),
                          r.a.createElement("option", { value: "1" }, "Note"),
                          r.a.createElement(
                            "option",
                            { value: "2" },
                            "Reminder"
                          )
                        )
                      )
                    )
                  )
                ),
                r.a.createElement(
                  Tn.a.Footer,
                  null,
                  r.a.createElement(
                    "button",
                    {
                      type: "button",
                      onClick: i,
                      className: "btn btn-light btn-elevate",
                    },
                    "Cancel"
                  ),
                  r.a.createElement(r.a.Fragment, null, " "),
                  r.a.createElement(
                    "button",
                    {
                      type: "submit",
                      onClick: function() {
                        return t();
                      },
                      className: "btn btn-primary btn-elevate",
                    },
                    "Save"
                  )
                )
              );
            }
          )
        );
      }
      function eo() {
        var e = Il(),
          t = Object(n.useMemo)(
            function() {
              return {
                id: e.selectedId,
                setIds: e.setIds,
                productId: e.productId,
                queryParams: e.queryParams,
                showEditRemarkDialog: e.showEditRemarkDialog,
                closeEditRemarkDialog: e.closeEditRemarkDialog,
                initRemark: e.initRemark,
              };
            },
            [e]
          ),
          a = Object(Ne.d)(),
          i = Object(Ne.e)(function(e) {
            return {
              actionsLoading: e.remarks.actionsLoading,
              remarkForEdit: e.remarks.remarkForEdit,
            };
          }, Ne.c),
          l = i.actionsLoading,
          o = i.remarkForEdit;
        Object(n.useEffect)(
          function() {
            a(Fl(t.id));
          },
          [t.id, a]
        );
        return r.a.createElement(
          Tn.a,
          {
            show: t.showEditRemarkDialog,
            onHide: t.closeEditRemarkDialog,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          r.a.createElement(Xl, { id: t.id }),
          r.a.createElement($l, {
            saveRemark: function(e) {
              (e.dueDate = (function(e) {
                if ("string" === typeof e) return e;
                var t = e.getFullYear(),
                  a = (1 + e.getMonth()).toString();
                a = a.length > 1 ? a : "0" + a;
                var n = e.getDate().toString();
                return a + "/" + (n = n.length > 1 ? n : "0" + n) + "/" + t;
              })(e.dueDate)),
                t.id
                  ? a(Bl(e)).then(function() {
                      a(_l(t.queryParams, t.productId)).then(function() {
                        t.setIds([]), t.closeEditRemarkDialog();
                      });
                    })
                  : a(Hl(e)).then(function() {
                      a(_l(t.queryParams, t.productId)).then(function() {
                        t.setIds([]), t.closeEditRemarkDialog();
                      });
                    });
            },
            actionsLoading: l,
            remark: o || t.initRemark,
            onHide: t.closeEditRemarkDialog,
          })
        );
      }
      function to() {
        var e = Il(),
          t = Object(n.useMemo)(
            function() {
              return { ids: e.ids };
            },
            [e]
          );
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(Vl, null),
          r.a.createElement(eo, null),
          r.a.createElement(Ql, null),
          r.a.createElement(Wl, null),
          r.a.createElement(Kl, null),
          r.a.createElement(
            "div",
            { className: "form margin-b-30" },
            r.a.createElement(Ul, null),
            t.ids.length > 0 && r.a.createElement(Zl, null)
          ),
          r.a.createElement(Gl, null)
        );
      }
      var ao = {
        id: void 0,
        model: "",
        manufacture: "Pontiac",
        modelYear: 2020,
        mileage: 0,
        description: "",
        color: "Red",
        price: 1e4,
        condition: 1,
        status: 0,
        VINCode: "",
      };
      function no(e) {
        var t = e.history,
          a = e.match.params.id,
          i = Ua(),
          l = Object(n.useState)("basic"),
          o = Object(Ye.a)(l, 2),
          s = o[0],
          c = o[1],
          m = Object(n.useState)(""),
          u = Object(Ye.a)(m, 2),
          d = u[0],
          f = u[1],
          E = Object(Ne.d)(),
          p = Object(Ne.e)(function(e) {
            return {
              actionsLoading: e.products.actionsLoading,
              productForEdit: e.products.productForEdit,
            };
          }, Ne.c),
          g = p.actionsLoading,
          b = p.productForEdit;
        Object(n.useEffect)(
          function() {
            E(vi(a));
          },
          [a, E]
        ),
          Object(n.useEffect)(
            function() {
              var e = a ? "" : "New Product";
              b &&
                a &&
                (e = "Edit product '"
                  .concat(b.manufacture, " ")
                  .concat(b.model, " - ")
                  .concat(b.modelYear, "'")),
                f(e),
                i.setTitle(e);
            },
            [b, a]
          );
        var h = Object(n.useRef)(),
          v = function() {
            t.push("/e-commerce/products");
          };
        return r.a.createElement(
          wt,
          null,
          g && r.a.createElement($t, null),
          r.a.createElement(
            St,
            { title: d },
            r.a.createElement(
              Ot,
              null,
              r.a.createElement(
                "button",
                { type: "button", onClick: v, className: "btn btn-light" },
                r.a.createElement("i", { className: "fa fa-arrow-left" }),
                "Back"
              ),
              "  ",
              r.a.createElement(
                "button",
                { className: "btn btn-light ml-2" },
                r.a.createElement("i", { className: "fa fa-redo" }),
                "Reset"
              ),
              "  ",
              r.a.createElement(
                "button",
                {
                  type: "submit",
                  className: "btn btn-primary ml-2",
                  onClick: function() {
                    h && h.current && h.current.click();
                  },
                },
                "Save"
              )
            )
          ),
          r.a.createElement(
            Mt,
            null,
            r.a.createElement(
              "ul",
              { className: "nav nav-tabs nav-tabs-line ", role: "tablist" },
              r.a.createElement(
                "li",
                {
                  className: "nav-item",
                  onClick: function() {
                    return c("basic");
                  },
                },
                r.a.createElement(
                  "a",
                  {
                    className: "nav-link ".concat("basic" === s && "active"),
                    "data-toggle": "tab",
                    role: "tab",
                    "aria-selected": ("basic" === s).toString(),
                  },
                  "Basic info"
                )
              ),
              a &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  " ",
                  r.a.createElement(
                    "li",
                    {
                      className: "nav-item",
                      onClick: function() {
                        return c("remarks");
                      },
                    },
                    r.a.createElement(
                      "a",
                      {
                        className: "nav-link ".concat(
                          "remarks" === s && "active"
                        ),
                        "data-toggle": "tab",
                        role: "button",
                        "aria-selected": ("remarks" === s).toString(),
                      },
                      "Product remarks"
                    )
                  ),
                  r.a.createElement(
                    "li",
                    {
                      className: "nav-item",
                      onClick: function() {
                        return c("specs");
                      },
                    },
                    r.a.createElement(
                      "a",
                      {
                        className: "nav-link ".concat(
                          "specs" === s && "active"
                        ),
                        "data-toggle": "tab",
                        role: "tab",
                        "aria-selected": ("specs" === s).toString(),
                      },
                      "Product specifications"
                    )
                  )
                )
            ),
            r.a.createElement(
              "div",
              { className: "mt-5" },
              "basic" === s &&
                r.a.createElement(el, {
                  actionsLoading: g,
                  product: b || ao,
                  btnRef: h,
                  saveProduct: function(e) {
                    a
                      ? E(Ni(e)).then(function() {
                          return v();
                        })
                      : E(Ci(e)).then(function() {
                          return v();
                        });
                  },
                }),
              "remarks" === s &&
                a &&
                r.a.createElement(
                  Rl,
                  { currentProductId: a },
                  r.a.createElement(to, null)
                ),
              "specs" === s &&
                a &&
                r.a.createElement(
                  ol,
                  { currentProductId: a },
                  r.a.createElement(xl, null)
                )
            )
          )
        );
      }
      var ro = a(90),
        io = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(d.a)(a, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "flex-row-fluid ml-lg-8" },
                      r.a.createElement(
                        "div",
                        { className: "card card-custom card-stretch" },
                        r.a.createElement(
                          "div",
                          { className: "card-header py-3" },
                          r.a.createElement(
                            "div",
                            {
                              className:
                                "card-title align-items-start flex-column",
                            },
                            r.a.createElement(
                              "h3",
                              {
                                className:
                                  "card-label font-weight-bolder text-dark",
                              },
                              "Customer Information"
                            ),
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "text-muted font-weight-bold font-size-sm mt-1",
                              },
                              "View Customer's information"
                            )
                          )
                        ),
                        r.a.createElement(
                          "form",
                          { className: "form" },
                          r.a.createElement(
                            "div",
                            { className: "card-body" },
                            r.a.createElement(
                              "div",
                              { className: "row" },
                              r.a.createElement("label", {
                                className: "col-xl-3",
                              }),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement(
                                  "h5",
                                  { className: "font-weight-bold mb-6" },
                                  "Customer Info"
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-group row" },
                              r.a.createElement(
                                "label",
                                {
                                  className:
                                    "col-xl-3 col-lg-3 col-form-label text-right",
                                },
                                "Avatar"
                              ),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "image-input image-input-outline",
                                    id: "kt_profile_avatar",
                                    style: {
                                      backgroundImage: "url(".concat(
                                        De("/media/users/blank.png"),
                                        ")"
                                      ),
                                    },
                                  },
                                  r.a.createElement("div", {
                                    className: "image-input-wrapper",
                                    style: {
                                      backgroundImage: "url(".concat(
                                        De("/media/users/300_21.jpg"),
                                        ")"
                                      ),
                                    },
                                  })
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-group row" },
                              r.a.createElement(
                                "label",
                                {
                                  className:
                                    "col-xl-3 col-lg-3 col-form-label text-right",
                                },
                                "First Name"
                              ),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement("input", {
                                  className:
                                    "form-control form-control-lg form-control-solid",
                                  type: "text",
                                  defaultValue: "Nick",
                                  disabled: !0,
                                })
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-group row" },
                              r.a.createElement(
                                "label",
                                {
                                  className:
                                    "col-xl-3 col-lg-3 col-form-label text-right",
                                },
                                "Last Name"
                              ),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement("input", {
                                  className:
                                    "form-control form-control-lg form-control-solid",
                                  type: "text",
                                  defaultValue: "Bold",
                                  disabled: !0,
                                })
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-group row" },
                              r.a.createElement(
                                "label",
                                {
                                  className:
                                    "col-xl-3 col-lg-3 col-form-label text-right",
                                },
                                "Role"
                              ),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement("input", {
                                  className:
                                    "form-control form-control-lg form-control-solid",
                                  type: "text",
                                  defaultValue: "Loop Inc. disabled",
                                  disabled: !0,
                                }),
                                r.a.createElement(
                                  "span",
                                  { className: "form-text text-muted" },
                                  "If you want your invoices addressed to a company. Leave blank to use your full name."
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "row" },
                              r.a.createElement("label", {
                                className: "col-xl-3",
                              }),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement(
                                  "h5",
                                  { className: "font-weight-bold mt-10 mb-6" },
                                  "Contact Info"
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-group row" },
                              r.a.createElement(
                                "label",
                                {
                                  className:
                                    "col-xl-3 col-lg-3 col-form-label text-right",
                                },
                                "Contact Phone"
                              ),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "input-group input-group-lg input-group-solid",
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "input-group-prepend" },
                                    r.a.createElement(
                                      "span",
                                      { className: "input-group-text" },
                                      r.a.createElement("i", {
                                        className: "fa fa-phone",
                                      })
                                    )
                                  ),
                                  r.a.createElement("input", {
                                    type: "text",
                                    className:
                                      "form-control form-control-lg form-control-solid",
                                    defaultValue: 35278953712,
                                    placeholder: "Phone",
                                    disabled: !0,
                                  })
                                ),
                                r.a.createElement(
                                  "span",
                                  { className: "form-text text-muted" },
                                  "We'll never share your email with anyone else."
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-group row" },
                              r.a.createElement(
                                "label",
                                {
                                  className:
                                    "col-xl-3 col-lg-3 col-form-label text-right",
                                },
                                "Email Address"
                              ),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "input-group input-group-lg input-group-solid",
                                  },
                                  r.a.createElement(
                                    "div",
                                    { className: "input-group-prepend" },
                                    r.a.createElement(
                                      "span",
                                      { className: "input-group-text" },
                                      r.a.createElement("i", {
                                        className: "fa fa-at",
                                      })
                                    )
                                  ),
                                  r.a.createElement(
                                    "input",
                                    Object(ro.a)(
                                      {
                                        type: "text",
                                        className:
                                          "form-control form-control-lg form-control-solid",
                                        defaultValue: "nick.bold@loop.com",
                                        placeholder: "Email",
                                        disabled: !0,
                                      },
                                      "disabled",
                                      !0
                                    )
                                  )
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-group row" },
                              r.a.createElement(
                                "label",
                                {
                                  className:
                                    "col-xl-3 col-lg-3 col-form-label text-right",
                                },
                                "Company Site"
                              ),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "input-group input-group-lg input-group-solid",
                                  },
                                  r.a.createElement("input", {
                                    type: "text",
                                    className:
                                      "form-control form-control-lg form-control-solid",
                                    placeholder: "Username",
                                    defaultValue: "loop",
                                    disabled: !0,
                                  }),
                                  r.a.createElement(
                                    "div",
                                    { className: "input-group-append" },
                                    r.a.createElement(
                                      "span",
                                      { className: "input-group-text" },
                                      ".com"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component);
      function lo() {
        return r.a.createElement(
          n.Suspense,
          { fallback: r.a.createElement(Ya, null) },
          r.a.createElement(
            Se.d,
            null,
            r.a.createElement(Se.a, {
              exact: !0,
              from: "/management",
              to: "/management/customers",
            }),
            r.a.createElement(Va, {
              path: "/management/customers",
              component: tr,
            }),
            r.a.createElement(Va, {
              path: "/management/publishers",
              component: Lr,
            }),
            r.a.createElement(Va, {
              path: "/management/customer/:id",
              component: io,
            }),
            r.a.createElement(Va, {
              path: "/management/admins",
              component: pi,
            }),
            r.a.createElement(Va, {
              path: "/management/products/new",
              component: no,
            }),
            r.a.createElement(Va, {
              path: "/management/products/:id/edit",
              component: no,
            }),
            r.a.createElement(Va, {
              path: "/management/products",
              component: Ji,
            })
          )
        );
      }
      function oo() {
        var e = Object(Ne.e)(function(e) {
          return { isLoading: e.promotions.listLoading };
        }, Ne.c).isLoading;
        return (
          Object(n.useEffect)(function() {}, [e]),
          r.a.createElement(Xt, { isLoading: e, text: "Loading ..." })
        );
      }
      var so = "http://phplaravel-348716-1117663.cloudwaysapps.com/api/admin/";
      var co = me.actions,
        mo = function(e, t) {
          return function(a) {
            if ((a(co.startCall({ callType: se })), "" == e.filter))
              return s.a
                .get(so + "promotions/get_all_promotions")
                .then(function(e) {
                  var t = e.data.data,
                    n = t.length;
                  console.log(t),
                    a(co.fetchPromos({ totalCount: n, entities: t }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't find promotions"),
                    a(co.catchError({ error: e, callType: se }));
                });
            var n = new f();
            if ("" == e.filter.promo_name && "" == e.filter.promo_status) {
              var r = t.length,
                i = t;
              a(co.promotionsFetched({ totalCount: r, entities: i }));
            } else {
              var l = n.baseFilter(t, e),
                o = l.totalCount,
                c = l.entities;
              a(co.promotionsFetched({ totalCount: o, entities: c }));
            }
          };
        },
        uo = function(e) {
          return function(t) {
            return e
              ? (t(co.startCall({ callType: ce })),
                ((a = e), s.a.get("".concat(so, "/").concat(a)))
                  .then(function(e) {
                    var a = e.data;
                    t(co.promotionFetched({ promotionForEdit: a }));
                  })
                  .catch(function(e) {
                    (e.clientMessage = "Can't find promotion"),
                      t(co.catchError({ error: e, callType: ce }));
                  }))
              : t(co.promotionFetched({ promotionForEdit: void 0 }));
            var a;
          };
        },
        fo = function(e) {
          return function(t) {
            return (
              t(co.startCall({ callType: ce })),
              ((a = e), s.a.delete("".concat(so, "/").concat(a)))
                .then(function(a) {
                  t(co.promotionDeleted({ id: e }));
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't delete promotion"),
                    t(co.catchError({ error: e, callType: ce }));
                })
            );
            var a;
          };
        },
        Eo = function(e) {
          return function(t) {
            return (
              t(co.startCall({ callType: ce })),
              ((a = e), s.a.post(so + "promotions/create_new_promotions", a))
                .then(function(e) {
                  e.data.promotion;
                  alert(e.data.message);
                })
                .then(function() {
                  window.location.reload(!1);
                })
                .catch(function(e) {
                  (e.clientMessage = "Can't create promotion"),
                    t(co.catchError({ error: e, callType: ce }));
                })
            );
            var a;
          };
        },
        po = ["danger", "success", "secondary", "info"],
        go = ["Expired", "In Progress", "Disabled", "Pending"],
        bo = [{ dataField: "id", order: "asc" }],
        ho = [
          { text: "3", value: 3 },
          { text: "5", value: 5 },
          { text: "10", value: 10 },
        ],
        vo = {
          filter: "",
          sortOrder: "asc",
          sortField: "ID",
          pageNumber: 1,
          pageSize: 10,
        },
        yo = Object(n.createContext)();
      function Co() {
        return Object(n.useContext)(yo);
      }
      yo.Consumer;
      function No(e) {
        var t = e.promotionsUIEvents,
          a = e.children,
          i = Object(n.useState)(vo),
          l = Object(Ye.a)(i, 2),
          o = l[0],
          s = l[1],
          c = Object(n.useState)([]),
          m = Object(Ye.a)(c, 2),
          u = m[0],
          d = m[1],
          f = Object(n.useCallback)(function(e) {
            s(function(t) {
              return (
                Object($a.isFunction)(e) && (e = e(t)),
                Object($a.isEqual)(t, e) ? t : e
              );
            });
          }, []),
          E = {
            queryParams: o,
            setQueryParamsBase: s,
            ids: u,
            setIds: d,
            setQueryParams: f,
            newPromotionButtonClick: t.newPromotionButtonClick,
            openDeletePromotionDialog: t.openDeletePromotionDialog,
            openFetchPromotionsDialog: t.openFetchPromotionsDialog,
          };
        return r.a.createElement(yo.Provider, { value: E }, a);
      }
      function To(e) {
        var t = e.id,
          a = e.show,
          i = e.onHide,
          l = Co(),
          o = Object(n.useMemo)(
            function() {
              return { setIds: l.setIds, queryParams: l.queryParams };
            },
            [l]
          ),
          s = Object(Ne.d)(),
          c = Object(Ne.e)(function(e) {
            return { isLoading: e.promotions.actionsLoading };
          }, Ne.c).isLoading;
        Object(n.useEffect)(
          function() {
            t || i();
          },
          [t]
        ),
          Object(n.useEffect)(function() {}, [c, s]);
        return r.a.createElement(
          Tn.a,
          {
            show: a,
            onHide: i,
            "aria-labelledby": "example-modal-sizes-title-lg",
          },
          c && r.a.createElement($t, { variant: "query" }),
          r.a.createElement(
            Tn.a.Header,
            { closeButton: !0 },
            r.a.createElement(
              Tn.a.Title,
              { id: "example-modal-sizes-title-lg" },
              "Promotion Delete"
            )
          ),
          r.a.createElement(
            Tn.a.Body,
            null,
            !c &&
              r.a.createElement(
                "span",
                null,
                "Are you sure to permanently delete this promotion?"
              ),
            c && r.a.createElement("span", null, "Promotion is deleting...")
          ),
          r.a.createElement(
            Tn.a.Footer,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: i,
                  className: "btn btn-light btn-elevate",
                },
                "Cancel"
              ),
              r.a.createElement(r.a.Fragment, null, " "),
              r.a.createElement(
                "button",
                {
                  type: "button",
                  onClick: function() {
                    s(fo(t)).then(function() {
                      s(mo(o.queryParams)), o.setIds([]), i();
                    });
                  },
                  className: "btn btn-delete btn-elevate",
                },
                "Delete"
              )
            )
          )
        );
      }
      var Oo = function(e, t) {
        var a = [];
        return (
          t.forEach(function(t) {
            var n = e.find(function(e) {
              return e.id === t;
            });
            n && a.push(n);
          }),
          a
        );
      };
      function So(e) {
        var t = e.show,
          a = e.onHide,
          i = Co(),
          l = Object(n.useMemo)(
            function() {
              return { ids: i.ids, queryParams: i.queryParams };
            },
            [i]
          ),
          o = Object(Ne.e)(function(e) {
            return { promotions: Oo(e.promotions.entities, l.ids) };
          }, Ne.c).promotions;
        return (
          Object(n.useEffect)(
            function() {
              (l.ids && 0 !== l.ids.length) || a();
            },
            [l.ids]
          ),
          r.a.createElement(
            Tn.a,
            {
              show: t,
              onHide: a,
              "aria-labelledby": "example-modal-sizes-title-lg",
            },
            r.a.createElement(
              Tn.a.Header,
              { closeButton: !0 },
              r.a.createElement(
                Tn.a.Title,
                { id: "example-modal-sizes-title-lg" },
                "Fetch selected elements"
              )
            ),
            r.a.createElement(
              Tn.a.Body,
              null,
              r.a.createElement(
                "div",
                {
                  className:
                    "list-timeline list-timeline-skin-light padding-30",
                },
                r.a.createElement(
                  "div",
                  { className: "list-timeline-items" },
                  o.map(function(e) {
                    return r.a.createElement(
                      "div",
                      { className: "list-timeline-item mb-3", key: e.id },
                      r.a.createElement(
                        "span",
                        { className: "list-timeline-text" },
                        r.a.createElement(
                          "span",
                          {
                            className: "label label-lg label-light-".concat(
                              po[e.status],
                              " label-inline"
                            ),
                            style: { width: "60px" },
                          },
                          "ID: ",
                          e.id
                        ),
                        " ",
                        r.a.createElement(
                          "span",
                          { className: "ml-5" },
                          e.manufacture,
                          ", ",
                          e.model
                        )
                      )
                    );
                  })
                )
              )
            ),
            r.a.createElement(
              Tn.a.Footer,
              null,
              r.a.createElement(
                "div",
                null,
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: a,
                    className: "btn btn-light btn-elevate",
                  },
                  "Cancel"
                ),
                r.a.createElement(r.a.Fragment, null, " "),
                r.a.createElement(
                  "button",
                  {
                    type: "button",
                    onClick: a,
                    className: "btn btn-primary btn-elevate",
                  },
                  "Ok"
                )
              )
            )
          )
        );
      }
      function Mo(e) {
        e.listLoading;
        var t = Co(),
          a = Object(n.useMemo)(
            function() {
              return {
                setQueryParams: t.setQueryParams,
                queryParams: t.queryParams,
              };
            },
            [t]
          ),
          i = function(e) {
            var t = (function(e, t) {
              var a = t.status,
                n = t.searchText,
                r = Object(m.a)({}, e),
                i = {};
              return (
                (i.promo_status = "" !== a ? a : ""),
                (i.promo_name = n),
                n && ((i.manufacture = n), (i.VINCode = n)),
                (r.filter = i),
                r
              );
            })(a.queryParams, e);
            Object($a.isEqual)(t, a.queryParams) ||
              ((t.pageNumber = 1), a.setQueryParams(t));
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              initialValues: { status: "", searchText: "" },
              onSubmit: function(e) {
                i(e);
              },
            },
            function(e) {
              var t = e.values,
                a = e.handleSubmit,
                n = e.handleBlur,
                i = (e.handleChange, e.setFieldValue);
              return r.a.createElement(
                "form",
                { onSubmit: a, className: "form form-label-right" },
                r.a.createElement(
                  "div",
                  { className: "form-group row" },
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement(
                      "select",
                      {
                        className: "form-control",
                        name: "status",
                        placeholder: "Filter by Status",
                        onChange: function(e) {
                          i("status", e.target.value), a();
                        },
                        onBlur: n,
                        value: t.status,
                      },
                      r.a.createElement("option", { value: "" }, "All"),
                      r.a.createElement(
                        "option",
                        { value: "expired" },
                        "expired"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "pending" },
                        "Pending"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "in progress" },
                        "In progress"
                      ),
                      r.a.createElement(
                        "option",
                        { value: "disabled" },
                        "Disabled"
                      )
                    ),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Filter"),
                      " by Status"
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "col-lg-2" },
                    r.a.createElement("input", {
                      type: "text",
                      className: "form-control",
                      name: "searchText",
                      placeholder: "Search",
                      onBlur: n,
                      value: t.searchText,
                      onChange: function(e) {
                        i("searchText", e.target.value), a();
                      },
                    }),
                    r.a.createElement(
                      "small",
                      { className: "form-text text-muted" },
                      r.a.createElement("b", null, "Search"),
                      " in all fields"
                    )
                  )
                )
              );
            }
          )
        );
      }
      var wo = function(e, t) {
          return "Expired" === t.promo_status
            ? r.a.createElement(
                "div",
                { className: "" },
                " ",
                r.a.createElement(
                  "span",
                  {
                    className: "label label-lg label-light-".concat(
                      po[0],
                      " label-inline"
                    ),
                  },
                  go[0]
                )
              )
            : "In Progress" === t.promo_status
            ? r.a.createElement(
                "div",
                { className: "" },
                " ",
                r.a.createElement(
                  "span",
                  {
                    className: "label label-lg label-light-".concat(
                      po[1],
                      " label-inline"
                    ),
                  },
                  go[1]
                )
              )
            : "Disabled" === t.promo_status
            ? r.a.createElement(
                "div",
                { className: "" },
                " ",
                r.a.createElement(
                  "span",
                  {
                    className: "label label-lg label-light-".concat(
                      po[2],
                      " label-inline"
                    ),
                  },
                  go[2]
                )
              )
            : r.a.createElement(
                "div",
                { className: "" },
                " ",
                r.a.createElement(
                  "span",
                  {
                    className: "label label-lg label-light-".concat(
                      po[3],
                      " label-inline"
                    ),
                  },
                  go[3]
                )
              );
        },
        xo = function(e) {
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              Xe.a,
              {
                overlay: r.a.createElement(
                  Je.a,
                  { id: "promotions-delete-tooltip" },
                  "Toggle promotion"
                ),
              },
              r.a.createElement(
                "a",
                {
                  className: "btn btn-icon btn-light btn-hover-danger btn-sm",
                  onClick: function() {
                    return (
                      (t = e),
                      void s.a
                        .get(
                          "http://phplaravel-348716-1117663.cloudwaysapps.com/api/admin/promotions/toggle_promotion/".concat(
                            t
                          )
                        )
                        .then(function(e) {
                          alert(e.data.message);
                        })
                    );
                    var t;
                  },
                },
                r.a.createElement(
                  "span",
                  { className: "svg-icon svg-icon-md svg-icon-danger" },
                  r.a.createElement("i", { className: "fa fa-toggle-on" })
                )
              )
            )
          );
        };
      function Ao() {
        var e = Co(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                setIds: e.setIds,
                queryParams: e.queryParams,
                setQueryParams: e.setQueryParams,
                openViewPromotionPage: e.openViewPromotionPage,
                openDeletePromotionDialog: e.openDeletePromotionDialog,
              };
            },
            [e]
          ),
          a = Object(Ne.e)(function(e) {
            return { currentState: e.promotions };
          }, Ne.c).currentState,
          i = a.totalCount,
          l = a.entities,
          o = a.listLoading,
          s = a.initial_entity,
          c = Object(Ne.d)();
        Object(n.useEffect)(
          function() {
            t.setIds([]), c(mo(t.queryParams, s));
          },
          [t.queryParams, c]
        );
        var m = [
            { dataField: "id", text: "(ID)", sort: !0, sortCaret: je },
            { dataField: "promo_name", text: "Name", sort: !0, sortCaret: je },
            {
              dataField: "promo_percent",
              text: "Percentage(%)",
              sort: !0,
              sortCaret: je,
            },
            {
              dataField: "start_date",
              text: "Start Date",
              sort: !0,
              sortCaret: je,
            },
            {
              dataField: "end_date",
              text: "End Date",
              sort: !0,
              sortCaret: je,
            },
            {
              dataField: "promo_status",
              text: "Status",
              sort: !0,
              sortCaret: je,
              formatter: wo,
            },
            {
              dataField: "id",
              text: "Actions",
              formatter: xo,
              classes: "text-center pr-0",
              style: { minWidth: "100px" },
            },
          ],
          u = {
            custom: !0,
            totalSize: i,
            sizePerPageList: ho,
            sizePerPage: t.queryParams.pageSize,
            page: t.queryParams.pageNumber,
          };
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            qt.PaginationProvider,
            { pagination: zt()(u) },
            function(e) {
              var a = e.paginationProps,
                n = e.paginationTableProps;
              return r.a.createElement(
                Vt,
                { isLoading: o, paginationProps: a },
                r.a.createElement(
                  En.a,
                  Object.assign(
                    {
                      wrapperClasses: "table-responsive",
                      classes: "table table-head-custom table-vertical-center",
                      bootstrap4: !0,
                      bordered: !1,
                      keyField: "id",
                      data: null === l ? [] : l,
                      columns: m,
                      defaultSorted: bo,
                      onTableChange: Le(t.setQueryParams),
                      selectRow: Pe({
                        entities: l,
                        ids: t.ids,
                        setIds: t.setIds,
                      }),
                    },
                    n
                  ),
                  r.a.createElement(Ie, { entities: l }),
                  r.a.createElement(Re, { entities: l })
                )
              );
            }
          )
        );
      }
      function Do() {
        var e = Co(),
          t = Object(n.useMemo)(
            function() {
              return {
                ids: e.ids,
                queryParams: e.queryParams,
                setQueryParams: e.setQueryParams,
                newPromotionButtonClick: e.newPromotionButtonClick,
                openDeletePromotionsDialog: e.openDeletePromotionsDialog,
                openFetchPromotionsDialog: e.openFetchPromotionsDialog,
              };
            },
            [e]
          );
        return r.a.createElement(
          wt,
          null,
          r.a.createElement(
            St,
            { title: "Promotions list" },
            r.a.createElement(
              Ot,
              null,
              r.a.createElement(
                "button",
                {
                  type: "button",
                  className: "btn btn-primary",
                  onClick: t.newPromotionButtonClick,
                },
                "New Promotion"
              )
            )
          ),
          r.a.createElement(
            Mt,
            null,
            r.a.createElement(Mo, null),
            r.a.createElement(Ao, null)
          )
        );
      }
      function ko(e) {
        var t = e.history,
          a = {
            newPromotionButtonClick: function() {
              t.push("/promotions/promotions/new");
            },
            openDeletePromotionDialog: function(e) {
              t.push("/promotions/promotions/".concat(e, "/delete"));
            },
            openFetchPromotionsDialog: function() {
              t.push("/promotions/promotions/fetch");
            },
          };
        return r.a.createElement(
          No,
          { promotionsUIEvents: a },
          r.a.createElement(oo, null),
          r.a.createElement(
            Se.b,
            { path: "/promotions/promotions/:id/delete" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(To, {
                show: null != a,
                id: a && a.params.id,
                onHide: function() {
                  t.push("/promotions/promotions");
                },
              });
            }
          ),
          r.a.createElement(
            Se.b,
            { path: "/promotions/promotions/fetch" },
            function(e) {
              var t = e.history,
                a = e.match;
              return r.a.createElement(So, {
                show: null != a,
                onHide: function() {
                  t.push("/promotions/promotions");
                },
              });
            }
          ),
          r.a.createElement(Do, null)
        );
      }
      var Lo = Rn.d().shape({
        promotion_name: Rn.e()
          .min(3, "Minimum 3 letters")
          .max(50, "Maximum 50 letters")
          .required("Name is required"),
        start_date: Rn.a()
          .min(new Date(), "Please enter a valid date")
          .required("Start Date is required"),
        end_date: Rn.a()
          .min(new Date(), "Please enter a valid date")
          .required("End Date is required"),
        promotion_percent: Rn.c()
          .min(1, "1% is minimum")
          .max(100, "100% is maximum")
          .required("Percentage is required"),
      });
      function Io(e) {
        var t = e.promotion,
          a = e.savePromotion;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            xt.c,
            {
              enableReinitialize: !0,
              initialValues: t,
              validationSchema: Lo,
              onSubmit: function(e) {
                var t = JSON.parse(JSON.stringify(e));
                a(t), console.log(e), console.log(t);
              },
            },
            function(e) {
              e.handleSubmit;
              return r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  xt.b,
                  { className: "form " },
                  r.a.createElement(
                    "div",
                    { className: "form-group row" },
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(xt.a, {
                        name: "promotion_name",
                        component: _t,
                        placeholder: "Name",
                        label: "Name",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(xt.a, {
                        type: "number",
                        name: "promotion_percent",
                        component: _t,
                        placeholder: "Percentage",
                        label: "Percentage",
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-group row mt-5" },
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(Lt, {
                        name: "start_date",
                        placeholder: "Start Date",
                        label: "Start Date",
                      })
                    ),
                    r.a.createElement(
                      "div",
                      { className: "col-lg-4" },
                      r.a.createElement(Lt, {
                        name: "end_date",
                        placeholder: "End Date",
                        label: "End Date",
                      })
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-group", style: { float: "right" } },
                    r.a.createElement(
                      "button",
                      { type: "reset", className: "btn btn-light ml-2" },
                      r.a.createElement("i", { className: "fa fa-redo" }),
                      "Reset"
                    ),
                    r.a.createElement(r.a.Fragment, null),
                    r.a.createElement(
                      "button",
                      {
                        type: "submit",
                        className: "btn btn-primary btn-elevate",
                      },
                      "Save"
                    )
                  )
                )
              );
            }
          )
        );
      }
      var Ro = {
        promotion_name: "",
        start_date: "",
        end_date: "",
        promotion_percent: "",
      };
      function Uo(e) {
        var t = e.history,
          a = e.match.params.id,
          i = Ua(),
          l = Object(n.useState)("basic"),
          o = Object(Ye.a)(l, 2),
          s = o[0],
          c = o[1],
          m = Object(n.useState)(""),
          u = Object(Ye.a)(m, 2),
          d = u[0],
          f = u[1],
          E = Object(Ne.d)(),
          p = Object(Ne.e)(function(e) {
            return {
              actionsLoading: e.promotions.actionsLoading,
              promotionForEdit: e.promotions.promotionForEdit,
            };
          }, Ne.c),
          g = p.actionsLoading,
          b = p.promotionForEdit;
        Object(n.useEffect)(
          function() {
            E(uo(a));
          },
          [a, E]
        ),
          Object(n.useEffect)(
            function() {
              var e = a ? "" : "New Promotion";
              b &&
                a &&
                (e = "Edit promotion '"
                  .concat(b.manufacture, " ")
                  .concat(b.model, " - ")
                  .concat(b.modelYear, "'")),
                f(e),
                i.setTitle(e);
            },
            [b, a]
          );
        var h = function() {
          t.push("/promotions/promotions");
        };
        return r.a.createElement(
          "div",
          { className: "" },
          r.a.createElement(
            wt,
            null,
            g && r.a.createElement($t, null),
            r.a.createElement(
              St,
              { title: d },
              r.a.createElement(
                Ot,
                null,
                r.a.createElement(
                  "button",
                  { type: "button", onClick: h, className: "btn btn-light" },
                  r.a.createElement("i", { className: "fa fa-arrow-left" }),
                  "Back"
                ),
                "  "
              )
            ),
            r.a.createElement(
              Mt,
              null,
              r.a.createElement(
                "ul",
                { className: "nav nav-tabs nav-tabs-line ", role: "tablist" },
                r.a.createElement(
                  "li",
                  {
                    className: "nav-item",
                    onClick: function() {
                      return c("basic");
                    },
                  },
                  r.a.createElement(
                    "a",
                    {
                      className: "nav-link ".concat("basic" === s && "active"),
                      "data-toggle": "tab",
                      role: "tab",
                      "aria-selected": ("basic" === s).toString(),
                    },
                    "Basic info"
                  )
                )
              ),
              r.a.createElement(
                "div",
                { className: "mt-5" },
                "basic" === s &&
                  r.a.createElement(Io, {
                    actionsLoading: g,
                    promotion: b || Ro,
                    savePromotion: function(e) {
                      E(Eo(e)).then(function() {
                        return h();
                      });
                    },
                  })
              )
            )
          )
        );
      }
      fe.actions;
      Rn.d().shape({
        discount_code: Rn.e()
          .min(5, "Minimum 5 symbols")
          .max(50, "Maximum 50 symbols")
          .required("Discount Code is required"),
        start_date: Rn.a()
          .min(new Date(), "Please enter a valid date")
          .required("Start Date is required"),
        end_date: Rn.a()
          .min(new Date(), "Please enter a valid date")
          .required("End Date is required"),
        amount: Rn.c()
          .min(1, "1 is minimum")
          .required("Discount is required"),
      });
      var Po = Object(n.createContext)();
      Po.Consumer;
      a(489);
      function _o() {
        return r.a.createElement(
          n.Suspense,
          { fallback: r.a.createElement(Ya, null) },
          r.a.createElement(
            Se.d,
            null,
            r.a.createElement(Se.a, {
              exact: !0,
              from: "/promotions",
              to: "/promotions/promotions",
            }),
            r.a.createElement(Se.b, {
              exact: !0,
              path: "/promotions/promotions",
              component: ko,
            }),
            r.a.createElement(Va, {
              path: "/promotions/promotions/new",
              component: Uo,
            })
          )
        );
      }
      var Fo = a(122),
        jo = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            var e;
            return (
              Object(u.a)(this, a),
              ((e = t.call(this)).handleUpdate = function(t) {
                e.setState(Object(ro.a)({}, t.target.name, t.target.value));
              }),
              (e.onSubmit = function(t) {
                t.preventDefault();
                var a = {
                  password: e.state.old_password,
                  new_password: e.state.confirm_new_password,
                };
                e.state.new_password == e.state.confirm_new_password
                  ? s.a
                      .post(
                        "".concat(
                          "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                          "/update_password"
                        ),
                        a
                      )
                      .then(function(e) {
                        Mn()(e.data.message);
                      })
                      .catch(function(e) {
                        Mn()(e.response.data.message);
                      })
                  : Mn()("passwords do not match please rectify");
              }),
              (e.state = {
                old_password: "",
                new_password: "",
                confirm_new_password: "",
              }),
              (e.onChange = e.handleUpdate.bind(Object(Fo.a)(e))),
              (e.onSubmit = e.onSubmit.bind(Object(Fo.a)(e))),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    { className: "flex-row-fluid ml-lg-8" },
                    r.a.createElement(
                      "form",
                      { className: "form", onSubmit: this.onSubmit },
                      r.a.createElement(
                        "div",
                        { className: "card card-custom" },
                        r.a.createElement(
                          "div",
                          { className: "card-header py-3" },
                          r.a.createElement(
                            "div",
                            {
                              className:
                                "card-title align-items-start flex-column",
                            },
                            r.a.createElement(
                              "h3",
                              {
                                className:
                                  "card-label font-weight-bolder text-dark",
                              },
                              "Update Password"
                            ),
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "text-muted font-weight-bold font-size-sm mt-1",
                              },
                              "Update your account password"
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: "card-toolbar" },
                            r.a.createElement(
                              "button",
                              {
                                type: "submit",
                                className: "btn btn-success mr-2",
                              },
                              "Save Changes"
                            ),
                            r.a.createElement(
                              "button",
                              { type: "reset", className: "btn btn-secondary" },
                              "Cancel"
                            )
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "card-body" },
                          r.a.createElement(
                            "div",
                            { className: "form-group row" },
                            r.a.createElement(
                              "label",
                              {
                                className:
                                  "col-xl-3 col-lg-3 col-form-label text-alert",
                              },
                              "Current Password"
                            ),
                            r.a.createElement(
                              "div",
                              { className: "col-lg-9 col-xl-6" },
                              r.a.createElement("input", {
                                type: "password",
                                name: "old_password",
                                className:
                                  "form-control form-control-lg form-control-solid mb-2",
                                placeholder: "Current password",
                                onChange: this.handleUpdate,
                              })
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: "form-group row" },
                            r.a.createElement(
                              "label",
                              {
                                className:
                                  "col-xl-3 col-lg-3 col-form-label text-alert",
                              },
                              "New Password"
                            ),
                            r.a.createElement(
                              "div",
                              { className: "col-lg-9 col-xl-6" },
                              r.a.createElement("input", {
                                type: "password",
                                name: "new_password",
                                className:
                                  "form-control form-control-lg form-control-solid",
                                placeholder: "New password",
                                onChange: this.handleUpdate,
                              })
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: "form-group row" },
                            r.a.createElement(
                              "label",
                              {
                                className:
                                  "col-xl-3 col-lg-3 col-form-label text-alert",
                              },
                              "Confirm Password"
                            ),
                            r.a.createElement(
                              "div",
                              { className: "col-lg-9 col-xl-6" },
                              r.a.createElement("input", {
                                type: "password",
                                name: "confirm_new_password",
                                className:
                                  "form-control form-control-lg form-control-solid",
                                placeholder: "Confirm password",
                                onChange: this.handleUpdate,
                              })
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Ho = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            var e;
            Object(u.a)(this, a);
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                me: "",
                firstname: "",
                lastname: "",
                phone: "",
              }),
              (e.get_data = Object(an.a)(
                v.a.mark(function t() {
                  var a;
                  return v.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            s.a.get(
                              "".concat(
                                "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                                "/me"
                              )
                            )
                          );
                        case 2:
                          (a = t.sent), e.setState({ me: a.data.data });
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )),
              (e.handleChange = function(t) {
                e.setState(Object(ro.a)({}, t.target.name, t.target.value));
              }),
              (e.onSubmit = function(t) {
                t.preventDefault();
                var a = e.state.firstname;
                "" == a && (a = e.state.me.firstname);
                var n = e.state.lastname;
                "" == n && (n = e.state.me.lastname);
                var r = e.state.phone;
                "" == r && (r = e.state.me.phone);
                var i = { firstname: a, lastname: n, phone: r };
                s.a
                  .put(
                    "".concat(
                      "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                      "/update_admin"
                    ),
                    i
                  )
                  .then(function(e) {
                    Mn()(e.data.message);
                  });
              }),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: "componentDidMount",
                value: function() {
                  this.get_data();
                },
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.me;
                  return r.a.createElement(
                    "div",
                    { className: "flex-row-fluid ml-lg-8" },
                    r.a.createElement(
                      "form",
                      { onSubmit: this.onSubmit, style: { left: "auto" } },
                      r.a.createElement(
                        "div",
                        { className: "card card-custom card-stretch" },
                        r.a.createElement(
                          "div",
                          { className: "card-header py-3" },
                          r.a.createElement(
                            "div",
                            {
                              className:
                                "card-title align-items-start flex-column",
                            },
                            r.a.createElement(
                              "h3",
                              {
                                className:
                                  "card-label font-weight-bolder text-dark",
                              },
                              "Personal Information"
                            ),
                            r.a.createElement(
                              "span",
                              {
                                className:
                                  "text-muted font-weight-bold font-size-sm mt-1",
                              },
                              "Update your personal information"
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: "card-toolbar" },
                            r.a.createElement(
                              "button",
                              {
                                type: "submit",
                                className: "btn btn-success mr-2",
                              },
                              "Save Changes"
                            ),
                            r.a.createElement(
                              "button",
                              { type: "reset", className: "btn btn-secondary" },
                              "Cancel"
                            )
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "card-body" },
                          r.a.createElement(
                            "div",
                            { className: "row" },
                            r.a.createElement("label", {
                              className: "col-xl-3",
                            }),
                            r.a.createElement(
                              "div",
                              { className: "col-lg-9 col-xl-6" },
                              r.a.createElement(
                                "h5",
                                { className: "font-weight-bold mb-6" },
                                "My Info"
                              )
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: "form-group row" },
                            r.a.createElement(
                              "label",
                              {
                                className:
                                  "col-xl-3 col-lg-3 col-form-label text-right",
                              },
                              "First Name"
                            ),
                            r.a.createElement(
                              "div",
                              { className: "col-lg-9 col-xl-6" },
                              r.a.createElement("input", {
                                className:
                                  "form-control form-control-lg form-control-solid",
                                type: "text",
                                name: "firstname",
                                defaultValue: e.firstname,
                                onChange: this.handleChange,
                              })
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: "form-group row" },
                            r.a.createElement(
                              "label",
                              {
                                className:
                                  "col-xl-3 col-lg-3 col-form-label text-right",
                              },
                              "Last Name"
                            ),
                            r.a.createElement(
                              "div",
                              { className: "col-lg-9 col-xl-6" },
                              r.a.createElement("input", {
                                className:
                                  "form-control form-control-lg form-control-solid",
                                type: "text",
                                name: "lastname",
                                defaultValue: e.lastname,
                                onChange: this.handleChange,
                              })
                            )
                          ),
                          e
                            ? r.a.createElement(
                                "div",
                                { className: "form-group row" },
                                r.a.createElement(
                                  "label",
                                  {
                                    className:
                                      "col-xl-3 col-lg-3 col-form-label text-right",
                                  },
                                  "Role"
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "col-lg-9 col-xl-6" },
                                  r.a.createElement("input", {
                                    className:
                                      "form-control form-control-lg form-control-solid",
                                    type: "text",
                                    defaultValue:
                                      "true" === e.is_audit
                                        ? "Auditor"
                                        : "true" == e.is_admin
                                        ? "Administrator"
                                        : "true" == e.is_sales_rep
                                        ? "Sales Representative"
                                        : "Super Administrator",
                                    disabled: !0,
                                  })
                                )
                              )
                            : r.a.createElement("div", { className: "" }),
                          r.a.createElement(
                            "div",
                            { className: "row" },
                            r.a.createElement("label", {
                              className: "col-xl-3",
                            }),
                            r.a.createElement(
                              "div",
                              { className: "col-lg-9 col-xl-6" },
                              r.a.createElement(
                                "h5",
                                { className: "font-weight-bold mt-10 mb-6" },
                                "Contact Info"
                              )
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: "form-group row" },
                            r.a.createElement(
                              "label",
                              {
                                className:
                                  "col-xl-3 col-lg-3 col-form-label text-right",
                              },
                              "Contact Phone"
                            ),
                            r.a.createElement(
                              "div",
                              { className: "col-lg-9 col-xl-6" },
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "input-group input-group-lg input-group-solid",
                                },
                                r.a.createElement(
                                  "div",
                                  { className: "input-group-prepend" },
                                  r.a.createElement(
                                    "span",
                                    { className: "input-group-text" },
                                    r.a.createElement("i", {
                                      className: "fa fa-phone",
                                    })
                                  )
                                ),
                                r.a.createElement("input", {
                                  type: "text",
                                  className:
                                    "form-control form-control-lg form-control-solid",
                                  defaultValue: e.phone,
                                  placeholder: "Phone",
                                  name: "phone",
                                  onChange: this.handleChange,
                                })
                              ),
                              r.a.createElement(
                                "span",
                                { className: "form-text text-muted" },
                                "We'll never share your email with anyone else."
                              )
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: "form-group row" },
                            r.a.createElement(
                              "label",
                              {
                                className:
                                  "col-xl-3 col-lg-3 col-form-label text-right",
                              },
                              "Email Address"
                            ),
                            r.a.createElement(
                              "div",
                              { className: "col-lg-9 col-xl-6" },
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "input-group input-group-lg input-group-solid",
                                },
                                r.a.createElement(
                                  "div",
                                  { className: "input-group-prepend" },
                                  r.a.createElement(
                                    "span",
                                    { className: "input-group-text" },
                                    r.a.createElement("i", {
                                      className: "fa fa-at",
                                    })
                                  )
                                ),
                                r.a.createElement("input", {
                                  type: "text",
                                  className:
                                    "form-control form-control-lg form-control-solid",
                                  defaultValue: e.email,
                                  placeholder: "Email",
                                  disabled: !0,
                                })
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        Bo = a(540);
      var qo = function() {
          var e = Object(n.useState)("personal_information"),
            t = Object(Ye.a)(e, 2),
            a = t[0],
            i = t[1],
            l = Object(Ne.e)(function(e) {
              return e.auth;
            }).user,
            o = window.matchMedia("(max-width: 500px)").matches;
          return r.a.createElement(
            "div",
            null,
            o
              ? r.a.createElement(
                  "div",
                  { className: "mobile-tabs" },
                  r.a.createElement(
                    Bo.a,
                    {
                      defaultActiveKey: "home",
                      id: "uncontrolled-tab-example",
                    },
                    r.a.createElement(
                      tt.a,
                      { eventKey: "home", title: "Personal Info" },
                      r.a.createElement(Ho, null)
                    ),
                    r.a.createElement(
                      tt.a,
                      { eventKey: "password", title: "Change Password" },
                      r.a.createElement(jo, null)
                    )
                  )
                )
              : r.a.createElement(
                  "div",
                  { className: "d-flex flex-column-fluid" },
                  r.a.createElement(
                    "div",
                    { className: "container" },
                    r.a.createElement(
                      "div",
                      { className: "d-flex flex-row" },
                      r.a.createElement(
                        "div",
                        {
                          className:
                            "flex-row-auto offcanvas-mobile w-250px w-xxl-350px",
                          id: "kt_profile_aside",
                        },
                        r.a.createElement(
                          "div",
                          { className: "card card-custom card-stretch" },
                          r.a.createElement(
                            "div",
                            { className: "card-body pt-4" },
                            r.a.createElement(
                              "div",
                              { className: "d-flex align-items-center" },
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center",
                                },
                                r.a.createElement(
                                  "a",
                                  {
                                    href: "#",
                                    className:
                                      "font-weight-bolder font-size-h5 text-dark-75 text-hover-primary",
                                  },
                                  l.firstname,
                                  " ",
                                  l.lastname
                                ),
                                r.a.createElement(
                                  "div",
                                  { className: "text-muted" },
                                  "1" == l.is_super_admin
                                    ? "Super Administrator"
                                    : "1" == l.is_admin
                                    ? "Administrator"
                                    : "Auditor"
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "py-9" },
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "d-flex align-items-center justify-content-between mb-2",
                                },
                                r.a.createElement(
                                  "span",
                                  { className: "font-weight-bold mr-2" },
                                  "Email:"
                                ),
                                r.a.createElement(
                                  "a",
                                  {
                                    href: "#",
                                    className: "text-muted text-hover-primary",
                                  },
                                  l.email
                                )
                              ),
                              r.a.createElement(
                                "div",
                                {
                                  className:
                                    "d-flex align-items-center justify-content-between mb-2",
                                },
                                r.a.createElement(
                                  "span",
                                  { className: "font-weight-bold mr-2" },
                                  "Phone:"
                                ),
                                r.a.createElement(
                                  "span",
                                  { className: "text-muted" },
                                  l.phone
                                )
                              )
                            ),
                            r.a.createElement(
                              "div",
                              {
                                className:
                                  "navi navi-bold navi-hover navi-active navi-link-rounded",
                              },
                              r.a.createElement(
                                "div",
                                { className: "navi-item mb-2" },
                                r.a.createElement(
                                  "a",
                                  {
                                    href: "#",
                                    className: "navi-link py-4 ".concat(
                                      "personal_information" === a && "active"
                                    ),
                                    onClick: function() {
                                      return i("personal_information");
                                    },
                                  },
                                  r.a.createElement(
                                    "span",
                                    { className: "navi-icon mr-2" },
                                    r.a.createElement(
                                      "span",
                                      { className: "svg-icon" },
                                      r.a.createElement(
                                        "svg",
                                        {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          xmlnsXlink:
                                            "http://www.w3.org/1999/xlink",
                                          width: "24px",
                                          height: "24px",
                                          viewBox: "0 0 24 24",
                                          version: "1.1",
                                        },
                                        r.a.createElement(
                                          "g",
                                          {
                                            stroke: "none",
                                            strokeWidth: 1,
                                            fill: "none",
                                            fillRule: "evenodd",
                                          },
                                          r.a.createElement("polygon", {
                                            points: "0 0 24 0 24 24 0 24",
                                          }),
                                          r.a.createElement("path", {
                                            d:
                                              "M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z",
                                            fill: "#000000",
                                            fillRule: "nonzero",
                                            opacity: "0.3",
                                          }),
                                          r.a.createElement("path", {
                                            d:
                                              "M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z",
                                            fill: "#000000",
                                            fillRule: "nonzero",
                                          })
                                        )
                                      )
                                    )
                                  ),
                                  r.a.createElement(
                                    "span",
                                    { className: "navi-text font-size-lg" },
                                    "Personal Information"
                                  )
                                )
                              ),
                              r.a.createElement(
                                "div",
                                { className: "navi-item mb-2" },
                                r.a.createElement(
                                  "a",
                                  {
                                    href: "#",
                                    className: "navi-link py-4 ".concat(
                                      "change_password" === a && "active"
                                    ),
                                    onClick: function() {
                                      return i("change_password");
                                    },
                                  },
                                  r.a.createElement(
                                    "span",
                                    { className: "navi-icon mr-2" },
                                    r.a.createElement(
                                      "span",
                                      { className: "svg-icon" },
                                      r.a.createElement(
                                        "svg",
                                        {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          xmlnsXlink:
                                            "http://www.w3.org/1999/xlink",
                                          width: "24px",
                                          height: "24px",
                                          viewBox: "0 0 24 24",
                                          version: "1.1",
                                        },
                                        r.a.createElement(
                                          "g",
                                          {
                                            stroke: "none",
                                            strokeWidth: 1,
                                            fill: "none",
                                            fillRule: "evenodd",
                                          },
                                          r.a.createElement("rect", {
                                            x: 0,
                                            y: 0,
                                            width: 24,
                                            height: 24,
                                          }),
                                          r.a.createElement("path", {
                                            d:
                                              "M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z",
                                            fill: "#000000",
                                            opacity: "0.3",
                                          }),
                                          r.a.createElement("path", {
                                            d:
                                              "M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z",
                                            fill: "#000000",
                                            opacity: "0.3",
                                          }),
                                          r.a.createElement("path", {
                                            d:
                                              "M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z",
                                            fill: "#000000",
                                            opacity: "0.3",
                                          })
                                        )
                                      )
                                    )
                                  ),
                                  r.a.createElement(
                                    "span",
                                    { className: "navi-text font-size-lg" },
                                    "Change Password"
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      "personal_information" === a &&
                        r.a.createElement(Ho, null),
                      "change_password" === a && r.a.createElement(jo, null)
                    )
                  )
                )
          );
        },
        zo = a(541),
        Go =
          (a(1091),
          (function(e) {
            Object(xe.a)(a, e);
            var t = Object(Ae.a)(a);
            function a(e) {
              var n;
              return (
                Object(u.a)(this, a),
                ((n = t.call(this, e)).handleChange = function(e) {
                  n.setState(Object(ro.a)({}, e.target.name, e.target.value));
                }),
                (n.handleUpdate = function() {
                  n.setState({ loading: !0 });
                  var e = [];
                  n.state.tags.map(function(t) {
                    e.push(t.text.toLocaleLowerCase());
                  });
                  var t = {
                    name: n.state.product_type.toLocaleLowerCase(),
                    sub_features: e,
                  };
                  s.a
                    .post(
                      "".concat(
                        "https://muntu-designs-api.herokuapp.com/api/v1/admin",
                        "/create_product_type"
                      ),
                      t
                    )
                    .then(function(e) {
                      Mn()(e.data.message);
                    })
                    .then(function() {
                      (document.getElementById("product_type").value = ""),
                        n.setState({ tags: [], loading: !1 });
                    });
                }),
                (n.state = { tags: [], product_type: "", loading: !1 }),
                (n.handleDelete = n.handleDelete.bind(Object(Fo.a)(n))),
                (n.handleAddition = n.handleAddition.bind(Object(Fo.a)(n))),
                (n.handleDrag = n.handleDrag.bind(Object(Fo.a)(n))),
                n
              );
            }
            return (
              Object(d.a)(a, [
                {
                  key: "handleDelete",
                  value: function(e) {
                    var t = this.state.tags;
                    this.setState({
                      tags: t.filter(function(t, a) {
                        return a !== e;
                      }),
                    });
                  },
                },
                {
                  key: "handleAddition",
                  value: function(e) {
                    this.setState(function(t) {
                      return { tags: [].concat(Object(c.a)(t.tags), [e]) };
                    });
                  },
                },
                {
                  key: "handleDrag",
                  value: function(e, t, a) {
                    var n = Object(c.a)(this.state.tags).slice();
                    n.splice(t, 1),
                      n.splice(a, 0, e),
                      this.setState({ tags: n });
                  },
                },
                {
                  key: "render",
                  value: function() {
                    var e = this.state.tags,
                      t = this.state.loading;
                    return r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(
                        "div",
                        { className: "card card-custom" },
                        r.a.createElement(
                          "div",
                          {
                            className:
                              "card-header flex-wrap border-0 pt-6 pb-0",
                          },
                          r.a.createElement(
                            "div",
                            { className: "card-title" },
                            r.a.createElement(
                              "h3",
                              { className: "card-label" },
                              "New Product Type"
                            )
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "card-body" },
                          r.a.createElement(
                            "div",
                            { className: "mt-5 mb-5 pb-5" },
                            r.a.createElement(
                              "div",
                              { className: "form-group text-center row" },
                              r.a.createElement(
                                "label",
                                {
                                  className:
                                    "col-xl-3 col-lg-3 col-form-label text-alert",
                                },
                                "Product type"
                              ),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement("input", {
                                  type: "text",
                                  id: "product_type",
                                  name: "product_type",
                                  className:
                                    "form-control form-control-lg form-control-solid mb-2",
                                  placeholder: "Product type",
                                  onChange: this.handleChange,
                                })
                              )
                            ),
                            r.a.createElement(
                              "div",
                              { className: "form-group  row" },
                              r.a.createElement(
                                "label",
                                {
                                  className:
                                    "col-xl-3 col-lg-3 text-center col-form-label text-alert",
                                },
                                "Other features"
                              ),
                              r.a.createElement(
                                "div",
                                { className: "col-lg-9 col-xl-6" },
                                r.a.createElement(zo.WithContext, {
                                  tags: e,
                                  handleDelete: this.handleDelete,
                                  handleAddition: this.handleAddition,
                                  handleDrag: this.handleDrag,
                                })
                              ),
                              r.a.createElement(
                                "div",
                                { className: "col-9 ml-auto mt-5" },
                                r.a.createElement(
                                  "button",
                                  {
                                    className: "btn btn-light-primary mt-lg-2",
                                    onClick: this.handleUpdate,
                                    disable: t,
                                  },
                                  t &&
                                    r.a.createElement("i", {
                                      className: "fa fa-spinner fa-spin ",
                                    }),
                                  (t &&
                                    r.a.createElement(
                                      "span",
                                      null,
                                      "Updating..."
                                    )) ||
                                    r.a.createElement("span", null, "Update")
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component));
      function Vo() {
        Object(Ne.e)(function(e) {
          return e.auth;
        }).user;
        return r.a.createElement(
          n.Suspense,
          { fallback: r.a.createElement(Ya, null) },
          r.a.createElement(
            Se.d,
            null,
            r.a.createElement(Se.a, { exact: !0, from: "/", to: "/dashboard" }),
            r.a.createElement(Va, { path: "/dashboard", component: Cn }),
            r.a.createElement(Va, { path: "/profile", component: qo }),
            r.a.createElement(Se.b, { path: "/producttype", component: Go }),
            r.a.createElement(Va, { path: "/builder", component: en }),
            r.a.createElement(Va, { path: "/my-page", component: tn }),
            r.a.createElement(Se.b, { path: "/management", component: lo }),
            r.a.createElement(Se.b, { path: "/promotions", component: _o }),
            r.a.createElement(Se.a, { to: "error/error-v1" })
          )
        );
      }
      var Wo = a(1223),
        Qo = a(272),
        Yo = { email: "debaryour@gmail.com", password: "password" };
      var Ko = Object(Qo.c)(
          Object(Ne.b)(null, U)(function(e) {
            var t = e.intl,
              a = Object(n.useState)(!1),
              i = Object(Ye.a)(a, 2),
              l = i[0],
              o = i[1],
              c = Rn.d().shape({
                email: Rn.e()
                  .email("Wrong email format")
                  .min(3, "Minimum 3 symbols")
                  .max(50, "Maximum 50 symbols")
                  .required(
                    t.formatMessage({ id: "AUTH.VALIDATION.REQUIRED_FIELD" })
                  ),
                password: Rn.e()
                  .min(3, "Minimum 3 symbols")
                  .max(50, "Maximum 50 symbols")
                  .required(
                    t.formatMessage({ id: "AUTH.VALIDATION.REQUIRED_FIELD" })
                  ),
              }),
              m = function() {
                o(!1);
              },
              u = function(e) {
                return d.touched[e] && d.errors[e]
                  ? "is-invalid"
                  : d.touched[e] && !d.errors[e]
                  ? "is-valid"
                  : "";
              },
              d = Object(xt.e)({
                initialValues: Yo,
                validationSchema: c,
                onSubmit: function(a, n) {
                  var r = n.setStatus,
                    i = n.setSubmitting;
                  o(!0),
                    setTimeout(function() {
                      var n, l;
                      ((n = a.email),
                      (l = a.password),
                      s.a.post(S, { email: n, password: l }))
                        .then(function(t) {
                          "true" == t.data.error
                            ? (m(), i(!1), Mn()(t.data.message))
                            : (m(), e.login(t.data));
                        })
                        .catch(function() {
                          m(),
                            i(!1),
                            r(
                              t.formatMessage({
                                id: "AUTH.VALIDATION.INVALID_LOGIN",
                              })
                            );
                        });
                    }, 1e3);
                },
              });
            return r.a.createElement(
              "div",
              {
                className: "login-form login-signin",
                id: "kt_login_signin_form",
              },
              r.a.createElement(
                "div",
                { className: "text-center mb-10 mb-lg-20" },
                r.a.createElement(
                  "h3",
                  { className: "font-size-h1" },
                  r.a.createElement(Wo.a, { id: "AUTH.LOGIN.TITLE" })
                ),
                r.a.createElement(
                  "p",
                  { className: "text-muted font-weight-bold" },
                  "Enter your username and password"
                )
              ),
              r.a.createElement(
                "form",
                {
                  onSubmit: d.handleSubmit,
                  className: "form fv-plugins-bootstrap fv-plugins-framework",
                },
                d.status
                  ? r.a.createElement(
                      "div",
                      {
                        className:
                          "mb-10 alert alert-custom alert-light-danger alert-dismissible",
                      },
                      r.a.createElement(
                        "div",
                        { className: "alert-text font-weight-bold" },
                        d.status
                      )
                    )
                  : r.a.createElement(
                      "div",
                      {
                        className:
                          "mb-10 alert alert-custom alert-light-danger alert-dismissible",
                      },
                      r.a.createElement(
                        "div",
                        { className: "alert-text " },
                        "Use account ",
                        r.a.createElement("strong", null, "Email"),
                        " and ",
                        r.a.createElement("strong", null, "password"),
                        " ",
                        "to continue."
                      )
                    ),
                r.a.createElement(
                  "div",
                  { className: "form-group fv-plugins-icon-container" },
                  r.a.createElement(
                    "input",
                    Object.assign(
                      {
                        placeholder: "Email",
                        type: "email",
                        className: "form-control form-control-solid h-auto py-5 px-6 ".concat(
                          u("email")
                        ),
                        name: "email",
                      },
                      d.getFieldProps("email")
                    )
                  ),
                  d.touched.email && d.errors.email
                    ? r.a.createElement(
                        "div",
                        { className: "fv-plugins-message-container" },
                        r.a.createElement(
                          "div",
                          { className: "fv-help-block" },
                          d.errors.email
                        )
                      )
                    : null
                ),
                r.a.createElement(
                  "div",
                  { className: "form-group fv-plugins-icon-container" },
                  r.a.createElement(
                    "input",
                    Object.assign(
                      {
                        placeholder: "Password",
                        type: "password",
                        className: "form-control form-control-solid h-auto py-5 px-6 ".concat(
                          u("password")
                        ),
                        name: "password",
                      },
                      d.getFieldProps("password")
                    )
                  ),
                  d.touched.password && d.errors.password
                    ? r.a.createElement(
                        "div",
                        { className: "fv-plugins-message-container" },
                        r.a.createElement(
                          "div",
                          { className: "fv-help-block" },
                          d.errors.password
                        )
                      )
                    : null
                ),
                r.a.createElement(
                  "div",
                  {
                    className:
                      "form-group d-flex flex-wrap justify-content-between align-items-center",
                  },
                  r.a.createElement(
                    Te.b,
                    {
                      to: "/auth/forgot-password",
                      className: "text-dark-50 text-hover-primary my-3 mr-2",
                      id: "kt_login_forgot",
                    },
                    r.a.createElement(Wo.a, {
                      id: "AUTH.GENERAL.FORGOT_BUTTON",
                    })
                  ),
                  r.a.createElement(
                    "button",
                    {
                      id: "kt_login_signin_submit",
                      type: "submit",
                      disabled: d.isSubmitting,
                      className:
                        "btn btn-success font-weight-bold px-9 py-4 my-3",
                    },
                    r.a.createElement("span", null, "Sign In"),
                    l &&
                      r.a.createElement("span", {
                        className: "ml-3 spinner spinner-white",
                      })
                  )
                )
              )
            );
          })
        ),
        Zo = { email: "" };
      var Xo = Object(Qo.c)(
        Object(Ne.b)(null, U)(function(e) {
          var t,
            a = e.intl,
            i = Object(n.useState)(!1),
            l = Object(Ye.a)(i, 2),
            o = l[0],
            c = l[1],
            m = Rn.d().shape({
              email: Rn.e()
                .email("Wrong email format")
                .min(3, "Minimum 3 symbols")
                .max(50, "Maximum 50 symbols")
                .required(
                  a.formatMessage({ id: "AUTH.VALIDATION.REQUIRED_FIELD" })
                ),
            }),
            u = Object(xt.e)({
              initialValues: Zo,
              validationSchema: m,
              onSubmit: function(e, t) {
                var n,
                  r = t.setStatus,
                  i = t.setSubmitting;
                ((n = e.email), s.a.post(M, { email: n }))
                  .then(function() {
                    Mn()(
                      "password reset was successful, please check your email for the new password"
                    ).then(function() {
                      c(!0);
                    });
                  })
                  .catch(function() {
                    c(!1),
                      i(!1),
                      r(
                        a.formatMessage(
                          { id: "AUTH.VALIDATION.NOT_FOUND" },
                          { name: e.email }
                        )
                      );
                  });
              },
            });
          return r.a.createElement(
            r.a.Fragment,
            null,
            o && r.a.createElement(Se.a, { to: "/auth" }),
            !o &&
              r.a.createElement(
                "div",
                {
                  className: "login-form login-forgot",
                  style: { display: "block" },
                },
                r.a.createElement(
                  "div",
                  { className: "text-center mb-10 mb-lg-20" },
                  r.a.createElement(
                    "h3",
                    { className: "font-size-h1" },
                    "Forgotten Password ?"
                  ),
                  r.a.createElement(
                    "div",
                    { className: "text-muted font-weight-bold" },
                    "Enter your email to reset your password"
                  )
                ),
                r.a.createElement(
                  "form",
                  {
                    onSubmit: u.handleSubmit,
                    className:
                      "form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp",
                  },
                  u.status &&
                    r.a.createElement(
                      "div",
                      {
                        className:
                          "mb-10 alert alert-custom alert-light-danger alert-dismissible",
                      },
                      r.a.createElement(
                        "div",
                        { className: "alert-text font-weight-bold" },
                        u.status
                      )
                    ),
                  r.a.createElement(
                    "div",
                    { className: "form-group fv-plugins-icon-container" },
                    r.a.createElement(
                      "input",
                      Object.assign(
                        {
                          type: "email",
                          className: "form-control form-control-solid h-auto py-5 px-6 ".concat(
                            ((t = "email"),
                            u.touched[t] && u.errors[t]
                              ? "is-invalid"
                              : u.touched[t] && !u.errors[t]
                              ? "is-valid"
                              : "")
                          ),
                          name: "email",
                        },
                        u.getFieldProps("email")
                      )
                    ),
                    u.touched.email && u.errors.email
                      ? r.a.createElement(
                          "div",
                          { className: "fv-plugins-message-container" },
                          r.a.createElement(
                            "div",
                            { className: "fv-help-block" },
                            u.errors.email
                          )
                        )
                      : null
                  ),
                  r.a.createElement(
                    "div",
                    { className: "form-group d-flex flex-wrap flex-center" },
                    r.a.createElement(
                      "button",
                      {
                        id: "kt_login_forgot_submit",
                        type: "submit",
                        className:
                          "btn btn-primary font-weight-bold px-9 py-4 my-3 mx-4",
                        disabled: u.isSubmitting,
                      },
                      "Submit"
                    ),
                    r.a.createElement(
                      Te.b,
                      { to: "/auth" },
                      r.a.createElement(
                        "button",
                        {
                          type: "button",
                          id: "kt_login_forgot_cancel",
                          className:
                            "btn btn-light-primary font-weight-bold px-9 py-4 my-3 mx-4",
                        },
                        "Cancel"
                      )
                    )
                  )
                )
              )
          );
        })
      );
      a(1175);
      function Jo() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            { className: "d-flex flex-column flex-root" },
            r.a.createElement(
              "div",
              {
                className:
                  "login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white",
                id: "kt_login",
              },
              r.a.createElement(
                "div",
                {
                  className:
                    "login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10",
                  style: {
                    backgroundImage: "url(".concat(
                      De("/media/bg/bg-8.jpg"),
                      ")"
                    ),
                  },
                },
                r.a.createElement(
                  "div",
                  {
                    className:
                      "d-flex flex-row-fluid flex-column justify-content-between",
                  },
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "flex-column-fluid d-flex flex-column justify-content-center",
                    },
                    r.a.createElement(
                      "h3",
                      {
                        className: "font-size-h1 m-5 p-2 text-center",
                        style: { fontWeight: "bold", color: "#fff" },
                      },
                      "Muntu Admin!"
                    )
                  )
                )
              ),
              r.a.createElement(
                "div",
                {
                  className:
                    "flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden",
                },
                r.a.createElement(
                  "div",
                  {
                    className:
                      "d-flex flex-column-fluid flex-center mt-30 mt-lg-0",
                  },
                  r.a.createElement(
                    Se.d,
                    null,
                    r.a.createElement(Va, {
                      path: "/auth/login",
                      component: Ko,
                    }),
                    r.a.createElement(Va, {
                      path: "/auth/forgot-password",
                      component: Xo,
                    }),
                    r.a.createElement(Se.a, {
                      from: "/auth",
                      exact: !0,
                      to: "/auth/login",
                    }),
                    r.a.createElement(Se.a, { to: "/auth/login" })
                  )
                )
              )
            )
          )
        );
      }
      var $o = (function(e) {
          Object(xe.a)(a, e);
          var t = Object(Ae.a)(a);
          function a() {
            return Object(u.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(d.a)(a, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.logout();
                },
              },
              {
                key: "render",
                value: function() {
                  return this.props.hasAuthToken
                    ? r.a.createElement(Ya, null)
                    : r.a.createElement(Se.a, { to: "/auth/login" });
                },
              },
            ]),
            a
          );
        })(n.Component),
        es = Object(Ne.b)(function(e) {
          var t = e.auth;
          return { hasAuthToken: Boolean(t.authToken) };
        }, U)($o);
      function ts() {
        return r.a.createElement(
          "div",
          { className: "d-flex flex-column flex-root" },
          r.a.createElement(
            "div",
            {
              className:
                "d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30",
              style: {
                backgroundImage: "url(".concat(De("/media/error/bg1.jpg"), ")"),
              },
            },
            r.a.createElement(
              "h1",
              {
                className:
                  "font-size-sm-100 font-weight-boldest text-dark-75 mt-15",
                style: { fontSize: "150px" },
              },
              "404"
            ),
            r.a.createElement(
              "p",
              { className: "font-size-h3 font-weight-light" },
              "OOPS! Something went wrong here"
            )
          )
        );
      }
      function as() {
        return r.a.createElement(
          "div",
          { className: "d-flex flex-column flex-root" },
          r.a.createElement(
            "div",
            {
              className:
                "d-flex flex-row-fluid bgi-size-cover bgi-position-center",
              style: {
                backgroundImage: "url(".concat(De("/media/error/bg2.jpg"), ")"),
              },
            },
            r.a.createElement(
              "div",
              {
                className:
                  "d-flex flex-row-fluid flex-column justify-content-end align-items-center text-center text-white pb-40",
              },
              r.a.createElement(
                "h1",
                { className: "display-1 font-weight-bold" },
                "OOPS!"
              ),
              r.a.createElement(
                "span",
                { className: "display-4 font-weight-boldest mb-8" },
                "Something went wrong here"
              )
            )
          )
        );
      }
      a(1176);
      function ns() {
        return r.a.createElement(
          "div",
          { className: "d-flex flex-column flex-root" },
          r.a.createElement(
            "div",
            {
              className:
                "error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center",
              style: {
                backgroundImage: "url(".concat(De("/media/error/bg3.jpg"), ")"),
              },
            },
            r.a.createElement(
              "div",
              {
                className:
                  "px-10 px-md-30 py-10 py-md-0 d-flex flex-column justify-content-md-center",
              },
              r.a.createElement(
                "h1",
                { className: "error-title text-stroke text-transparent" },
                "404"
              ),
              r.a.createElement(
                "p",
                { className: "display-4 font-weight-boldest text-white mb-12" },
                "How did you get here"
              ),
              r.a.createElement(
                "p",
                { className: "font-size-h1 font-weight-boldest text-dark-75" },
                "Sorry we can't seem to find the page you're looking for."
              ),
              r.a.createElement(
                "p",
                { className: "font-size-h4 line-height-md" },
                "There may be a misspelling in the URL entered,",
                r.a.createElement("br", null),
                "or the page you are looking for may no longer exist."
              )
            )
          )
        );
      }
      a(1177);
      function rs() {
        return r.a.createElement(
          "div",
          { className: "d-flex flex-column flex-root" },
          r.a.createElement(
            "div",
            {
              className:
                "error error-4 d-flex flex-row-fluid bgi-size-cover bgi-position-center",
              style: {
                backgroundImage: "url(".concat(De("/media/error/bg4.jpg"), ")"),
              },
            },
            r.a.createElement(
              "div",
              {
                className:
                  "d-flex flex-column flex-row-fluid align-items-center align-items-md-start justify-content-md-center text-center text-md-left px-10 px-md-30 py-10 py-md-0 line-height-xs",
              },
              r.a.createElement(
                "h1",
                {
                  className:
                    "error-title text-success font-weight-boldest line-height-sm",
                },
                "404"
              ),
              r.a.createElement(
                "p",
                {
                  className:
                    "error-subtitle text-success font-weight-boldest mb-10",
                },
                "ERROR"
              ),
              r.a.createElement(
                "p",
                {
                  className:
                    "display-4 text-danger font-weight-boldest mt-md-0 line-height-md",
                },
                "Nothing left to do here."
              )
            )
          )
        );
      }
      a(1178);
      function is() {
        return r.a.createElement(
          "div",
          { className: "d-flex flex-column flex-root" },
          r.a.createElement(
            "div",
            {
              className:
                "error error-5 d-flex flex-row-fluid bgi-size-cover bgi-position-center",
              style: {
                backgroundImage: "url(".concat(De("/media/error/bg5.jpg"), ")"),
              },
            },
            r.a.createElement(
              "div",
              {
                className:
                  "container d-flex flex-row-fluid flex-column justify-content-md-center p-12",
              },
              r.a.createElement(
                "h1",
                {
                  className:
                    "error-title font-weight-boldest text-info mt-10 mt-md-0 mb-12",
                },
                "Oops!"
              ),
              r.a.createElement(
                "p",
                { className: "font-weight-boldest display-4" },
                "Something went wrong here."
              ),
              r.a.createElement(
                "p",
                { className: "font-size-h3" },
                "We're working on it and we'll get it fixed",
                r.a.createElement("br", null),
                "as soon possible.",
                r.a.createElement("br", null),
                "You can back or use our Help Center."
              )
            )
          )
        );
      }
      a(1179);
      function ls() {
        return r.a.createElement(
          "div",
          { className: "d-flex flex-column flex-root" },
          r.a.createElement(
            "div",
            {
              className:
                "error error-6 d-flex flex-row-fluid bgi-size-cover bgi-position-center",
              style: {
                backgroundImage: "url(".concat(De("/media/error/bg6.jpg"), ")"),
              },
            },
            r.a.createElement(
              "div",
              { className: "d-flex flex-column flex-row-fluid text-center" },
              r.a.createElement(
                "h1",
                {
                  className: "error-title font-weight-boldest text-white mb-12",
                  style: { marginTop: "12rem;" },
                },
                "Oops..."
              ),
              r.a.createElement(
                "p",
                { className: "display-4 font-weight-bold text-white" },
                "Looks like something went wrong.",
                r.a.createElement("br", null),
                "We're working on it"
              )
            )
          )
        );
      }
      function os() {
        return r.a.createElement(
          Se.d,
          null,
          r.a.createElement(Se.a, {
            from: "/error",
            exact: !0,
            to: "/error/error-v1",
          }),
          r.a.createElement(Se.b, { path: "/error/error-v1", component: ts }),
          r.a.createElement(Se.b, { path: "/error/error-v2", component: as }),
          r.a.createElement(Se.b, { path: "/error/error-v3", component: ns }),
          r.a.createElement(Se.b, { path: "/error/error-v4", component: rs }),
          r.a.createElement(Se.b, { path: "/error/error-v5", component: is }),
          r.a.createElement(Se.b, { path: "/error/error-v6", component: ls })
        );
      }
      function ss() {
        var e = Object(Ne.e)(function(e) {
          return { isAuthorized: null != e.auth.user };
        }, Ne.c).isAuthorized;
        return r.a.createElement(
          Se.d,
          null,
          e
            ? r.a.createElement(Se.a, { from: "/auth", to: "/" })
            : r.a.createElement(Se.b, null, r.a.createElement(Jo, null)),
          r.a.createElement(Se.b, { path: "/error", component: os }),
          r.a.createElement(Se.b, { path: "/logout", component: es }),
          e
            ? r.a.createElement(qa, null, r.a.createElement(Vo, null))
            : r.a.createElement(Se.a, { to: "/auth/login" })
        );
      }
      function cs(e) {
        var t = e.store,
          a = e.persistor,
          n = e.basename;
        return r.a.createElement(
          Ne.a,
          { store: t },
          r.a.createElement(
            Oe.a,
            { persistor: a, loading: r.a.createElement(Ya, null) },
            r.a.createElement(
              r.a.Suspense,
              { fallback: r.a.createElement(Ya, null) },
              r.a.createElement(
                Te.a,
                { basename: n },
                r.a.createElement(
                  Ja,
                  null,
                  r.a.createElement(ut, null, r.a.createElement(ss, null))
                )
              )
            )
          )
        );
      }
      var ms, us;
      a(1180), a(1181), a(1182), a(1183), a(1184), a(1185), a(1186);
      (ms = s.a),
        (us = Ce),
        ms.interceptors.request.use(
          function(e) {
            var t = us.getState().auth.authToken;
            return (
              t && (e.headers.Authorization = "Bearer ".concat(t.token)), e
            );
          },
          function(e) {
            return Promise.reject(e);
          }
        ),
        l.a.render(
          r.a.createElement(
            st,
            null,
            r.a.createElement(
              Qe,
              null,
              r.a.createElement(
                Pa,
                null,
                r.a.createElement(
                  Qa,
                  null,
                  r.a.createElement(cs, {
                    store: Ce,
                    persistor: ye,
                    basename: "",
                  })
                )
              )
            )
          ),
          document.getElementById("root")
        );
    },
    139: function(e, t, a) {
      "use strict";
      (function(e) {
        var n = a(1);
        e.exports,
          (t.a = function(e, t) {
            var a = this,
              r = n.a.getById(e),
              i = n.a.getBody();
            if (r) {
              var l = { attrCustom: "" },
                o = {
                  construct: function(e) {
                    return (
                      n.a.data(r).has("offcanvas")
                        ? (a = n.a.data(r).get("offcanvas"))
                        : (o.init(e),
                          o.build(),
                          n.a.data(r).set("offcanvas", a)),
                      a
                    );
                  },
                  init: function(e) {
                    (a.events = []),
                      (a.options = n.a.deepExtend({}, l, e)),
                      (a.classBase = a.options.baseClass),
                      (a.attrCustom = a.options.attrCustom),
                      (a.classShown = a.classBase + "-on"),
                      (a.classOverlay = a.classBase + "-overlay"),
                      a.target,
                      (a.state = n.a.hasClass(r, a.classShown)
                        ? "shown"
                        : "hidden");
                  },
                  build: function() {
                    if (a.options.toggleBy)
                      if ("string" === typeof a.options.toggleBy)
                        n.a.addEvent(
                          n.a.getById(a.options.toggleBy),
                          "click",
                          function(e) {
                            e.preventDefault(), (a.target = this), o.toggle();
                          }
                        );
                      else if (a.options.toggleBy && a.options.toggleBy[0])
                        if (a.options.toggleBy[0].target)
                          for (var e in a.options.toggleBy)
                            n.a.addEvent(
                              n.a.getById(a.options.toggleBy[e].target),
                              "click",
                              function(e) {
                                e.preventDefault(),
                                  (a.target = this),
                                  o.toggle();
                              }
                            );
                        else
                          for (var e in a.options.toggleBy)
                            n.a.addEvent(
                              n.a.getById(a.options.toggleBy[e]),
                              "click",
                              function(e) {
                                e.preventDefault(),
                                  (a.target = this),
                                  o.toggle();
                              }
                            );
                      else
                        a.options.toggleBy &&
                          a.options.toggleBy.target &&
                          n.a.addEvent(
                            n.a.getById(a.options.toggleBy.target),
                            "click",
                            function(e) {
                              e.preventDefault(), (a.target = this), o.toggle();
                            }
                          );
                    var t = n.a.getById(a.options.closeBy);
                    t &&
                      n.a.addEvent(t, "click", function(e) {
                        e.preventDefault(), (a.target = this), o.hide();
                      });
                  },
                  isShown: function() {
                    return "shown" == a.state;
                  },
                  toggle: function() {
                    o.eventTrigger("toggle"),
                      "shown" == a.state ? o.hide() : o.show();
                  },
                  show: function() {
                    "shown" != a.state &&
                      (o.eventTrigger("beforeShow"),
                      o.toggleClass("show"),
                      n.a.attr(i, "data-offcanvas-" + a.classBase, "on"),
                      n.a.addClass(r, a.classShown),
                      a.attrCustom.length > 0 &&
                        n.a.attr(i, "data-offcanvas-" + a.classCustom, "on"),
                      (a.state = "shown"),
                      a.options.overlay &&
                        ((a.overlay = n.a.insertAfter(
                          document.createElement("DIV"),
                          r
                        )),
                        n.a.addClass(a.overlay, a.classOverlay),
                        n.a.addEvent(a.overlay, "click", function(e) {
                          e.preventDefault(), o.hide(a.target);
                        })),
                      o.eventTrigger("afterShow"));
                  },
                  hide: function() {
                    "hidden" != a.state &&
                      (o.eventTrigger("beforeHide"),
                      o.toggleClass("hide"),
                      n.a.removeAttr(i, "data-offcanvas-" + a.classBase),
                      n.a.removeClass(r, a.classShown),
                      a.attrCustom.length > 0 &&
                        n.a.removeAttr(i, "data-offcanvas-" + a.attrCustom),
                      (a.state = "hidden"),
                      a.options.overlay && a.overlay && n.a.remove(a.overlay),
                      o.eventTrigger("afterHide"));
                  },
                  toggleClass: function(e) {
                    var t,
                      r = n.a.attr(a.target, "id");
                    if (
                      a.options.toggleBy &&
                      a.options.toggleBy[0] &&
                      a.options.toggleBy[0].target
                    )
                      for (var i in a.options.toggleBy)
                        a.options.toggleBy[i].target === r &&
                          (t = a.options.toggleBy[i]);
                    else
                      a.options.toggleBy &&
                        a.options.toggleBy.target &&
                        (t = a.options.toggleBy);
                    if (t) {
                      var l = n.a.getById(t.target);
                      "show" === e && n.a.addClass(l, t.state),
                        "hide" === e && n.a.removeClass(l, t.state);
                    }
                  },
                  eventTrigger: function(e, t) {
                    for (var n = 0; n < a.events.length; n++) {
                      var r = a.events[n];
                      if (r.name == e) {
                        if (1 != r.one) return r.handler.call(this, a, t);
                        if (0 == r.fired)
                          return (
                            (a.events[n].fired = !0), r.handler.call(this, a, t)
                          );
                      }
                    }
                  },
                  addEvent: function(e, t, n) {
                    a.events.push({ name: e, handler: t, one: n, fired: !1 });
                  },
                };
              return (
                (a.setDefaults = function(e) {
                  l = e;
                }),
                (a.isShown = function() {
                  return o.isShown();
                }),
                (a.hide = function() {
                  return o.hide();
                }),
                (a.show = function() {
                  return o.show();
                }),
                (a.on = function(e, t) {
                  return o.addEvent(e, t);
                }),
                (a.one = function(e, t) {
                  return o.addEvent(e, t, !0);
                }),
                o.construct.apply(a, [t]),
                !0,
                a
              );
            }
          });
      }.call(this, a(101)(e)));
    },
    231: function(e, t, a) {
      "use strict";
      (function(e) {
        a.d(t, "a", function() {
          return n;
        });
        var n = {
          getCookie: function(e) {
            var t = document.cookie.match(
              new RegExp(
                "(?:^|; )" +
                  e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                  "=([^;]*)"
              )
            );
            return t ? decodeURIComponent(t[1]) : void 0;
          },
          setCookie: function(e, t, a) {
            a || (a = {}),
              (a = Object.assign({}, { path: "/" }, a)).expires instanceof
                Date && (a.expires = a.expires.toUTCString());
            var n = encodeURIComponent(e) + "=" + encodeURIComponent(t);
            for (var r in a)
              if (a.hasOwnProperty(r)) {
                n += "; " + r;
                var i = a[r];
                !0 !== i && (n += "=" + i);
              }
            document.cookie = n;
          },
          deleteCookie: function(e) {
            setCookie(e, "", { "max-age": -1 });
          },
        };
        e.exports;
      }.call(this, a(101)(e)));
    },
    292: function(e, t, a) {
      "use strict";
      (function(e) {
        var n = a(1);
        e.exports,
          document.addEventListener("click", function(e) {
            var t;
            if (
              (t = n.a
                .getByTagName("body")[0]
                .querySelectorAll(
                  '.menu-nav .menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)[data-menu-toggle="click"]'
                ))
            )
              for (var a = 0, r = t.length; a < r; a++) {
                var i = t[a].closest(".menu-nav").parentNode;
                if (i) {
                  var l = n.a.data(i).get("menu");
                  if (!l) break;
                  if (!l || "dropdown" !== l.getSubmenuMode()) break;
                  e.target !== i &&
                    !1 === i.contains(e.target) &&
                    l.hideDropdowns();
                }
              }
          }),
          (t.a = function(e, t) {
            var a = this,
              r = !1,
              i = n.a.getById(e),
              l = n.a.getBody();
            if (i) {
              var o = {
                  scroll: { rememberPosition: !1 },
                  accordion: {
                    slideSpeed: 200,
                    autoScroll: !1,
                    autoScrollSpeed: 1200,
                    expandAll: !0,
                  },
                  dropdown: { timeout: 500 },
                },
                s = {
                  construct: function(e) {
                    return (
                      n.a.data(i).has("menu")
                        ? (a = n.a.data(i).get("menu"))
                        : (s.init(e),
                          s.reset(),
                          s.build(),
                          n.a.data(i).set("menu", a)),
                      a
                    );
                  },
                  init: function(e) {
                    (a.events = []),
                      (a.eventHandlers = {}),
                      (a.options = n.a.deepExtend({}, o, e)),
                      (a.pauseDropdownHoverTime = 0),
                      (a.uid = n.a.getUniqueID());
                  },
                  update: function(e) {
                    (a.options = n.a.deepExtend({}, o, e)),
                      (a.pauseDropdownHoverTime = 0),
                      s.reset(),
                      (a.eventHandlers = {}),
                      s.build(),
                      n.a.data(i).set("menu", a);
                  },
                  reload: function() {
                    s.reset(), s.build(), s.resetSubmenuProps();
                  },
                  build: function() {
                    (a.eventHandlers.event_1 = n.a.on(
                      i,
                      ".menu-toggle",
                      "click",
                      s.handleSubmenuAccordion
                    )),
                      ("dropdown" === s.getSubmenuMode() ||
                        s.isConditionalSubmenuDropdown()) &&
                        ((a.eventHandlers.event_2 = n.a.on(
                          i,
                          '[data-menu-toggle="hover"]',
                          "mouseover",
                          s.handleSubmenuDrodownHoverEnter
                        )),
                        (a.eventHandlers.event_3 = n.a.on(
                          i,
                          '[data-menu-toggle="hover"]',
                          "mouseout",
                          s.handleSubmenuDrodownHoverExit
                        )),
                        (a.eventHandlers.event_4 = n.a.on(
                          i,
                          '[data-menu-toggle="click"] > .menu-toggle, [data-menu-toggle="click"] > .menu-link .menu-toggle',
                          "click",
                          s.handleSubmenuDropdownClick
                        )),
                        (a.eventHandlers.event_5 = n.a.on(
                          i,
                          '[data-menu-toggle="tab"] > .menu-toggle, [data-menu-toggle="tab"] > .menu-link .menu-toggle',
                          "click",
                          s.handleSubmenuDropdownTabClick
                        ))),
                      (a.eventHandlers.event_6 = n.a.on(
                        i,
                        ".menu-item > .menu-link:not(.menu-toggle):not(.menu-link-toggle-skip)",
                        "click",
                        s.handleLinkClick
                      )),
                      a.options.scroll &&
                        a.options.scroll.height &&
                        s.scrollInit();
                  },
                  reset: function() {
                    n.a.off(i, "click", a.eventHandlers.event_1),
                      n.a.off(i, "mouseover", a.eventHandlers.event_2),
                      n.a.off(i, "mouseout", a.eventHandlers.event_3),
                      n.a.off(i, "click", a.eventHandlers.event_4),
                      n.a.off(i, "click", a.eventHandlers.event_5),
                      n.a.off(i, "click", a.eventHandlers.event_6);
                  },
                  scrollInit: function() {
                    a.options.scroll && a.options.scroll.height
                      ? (n.a.scrollDestroy(i, !0),
                        n.a.scrollInit(i, {
                          mobileNativeScroll: !0,
                          windowScroll: !1,
                          resetHeightOnDestroy: !0,
                          handleWindowResize: !0,
                          height: a.options.scroll.height,
                          rememberPosition: a.options.scroll.rememberPosition,
                        }))
                      : n.a.scrollDestroy(i, !0);
                  },
                  scrollUpdate: function() {
                    a.options.scroll &&
                      a.options.scroll.height &&
                      n.a.scrollUpdate(i);
                  },
                  scrollTop: function() {
                    a.options.scroll &&
                      a.options.scroll.height &&
                      n.a.scrollTop(i);
                  },
                  getSubmenuMode: function(e) {
                    return n.a.isBreakpointUp("lg")
                      ? e &&
                        n.a.hasAttr(e, "data-menu-toggle") &&
                        "hover" == n.a.attr(e, "data-menu-toggle")
                        ? "dropdown"
                        : n.a.isset(a.options.submenu, "desktop.state.body")
                        ? n.a.hasClasses(
                            l,
                            a.options.submenu.desktop.state.body
                          )
                          ? a.options.submenu.desktop.state.mode
                          : a.options.submenu.desktop.default
                        : n.a.isset(a.options.submenu, "desktop")
                        ? a.options.submenu.desktop
                        : void 0
                      : n.a.isBreakpointUp("md") &&
                        n.a.isBreakpointDown("lg") &&
                        n.a.isset(a.options.submenu, "tablet")
                      ? a.options.submenu.tablet
                      : !(
                          !n.a.isBreakpointDown("md") ||
                          !n.a.isset(a.options.submenu, "mobile")
                        ) && a.options.submenu.mobile;
                  },
                  isConditionalSubmenuDropdown: function() {
                    return !(
                      !n.a.isBreakpointUp("lg") ||
                      !n.a.isset(a.options.submenu, "desktop.state.body")
                    );
                  },
                  resetSubmenuProps: function(e) {
                    var t = n.a.findAll(i, ".menu-submenu");
                    if (t)
                      for (var a = 0, r = t.length; a < r; a++) {
                        var l = t[0];
                        n.a.css(l, "display", ""),
                          n.a.css(l, "overflow", ""),
                          l.hasAttribute("data-hor-direction") &&
                            (n.a.removeClass(l, "menu-submenu-left"),
                            n.a.removeClass(l, "menu-submenu-right"),
                            n.a.addClass(
                              l,
                              l.getAttribute("data-hor-direction")
                            ));
                      }
                  },
                  handleSubmenuDrodownHoverEnter: function(e) {
                    if (
                      "accordion" !== s.getSubmenuMode(this) &&
                      !1 !== a.resumeDropdownHover()
                    ) {
                      "1" == this.getAttribute("data-hover") &&
                        (this.removeAttribute("data-hover"),
                        clearTimeout(this.getAttribute("data-timeout")),
                        this.removeAttribute("data-timeout")),
                        s.showSubmenuDropdown(this);
                    }
                  },
                  handleSubmenuDrodownHoverExit: function(e) {
                    if (
                      !1 !== a.resumeDropdownHover() &&
                      "accordion" !== s.getSubmenuMode(this)
                    ) {
                      var t = this,
                        n = a.options.dropdown.timeout,
                        r = setTimeout(function() {
                          "1" == t.getAttribute("data-hover") &&
                            s.hideSubmenuDropdown(t, !0);
                        }, n);
                      t.setAttribute("data-hover", "1"),
                        t.setAttribute("data-timeout", r);
                    }
                  },
                  handleSubmenuDropdownClick: function(e) {
                    if ("accordion" !== s.getSubmenuMode(this)) {
                      var t = this.closest(".menu-item");
                      !1 !== s.eventTrigger("submenuToggle", this, e) &&
                        "accordion" !=
                          t.getAttribute("data-menu-submenu-mode") &&
                        (!1 === n.a.hasClass(t, "menu-item-hover")
                          ? (n.a.addClass(t, "menu-item-open-dropdown"),
                            s.showSubmenuDropdown(t))
                          : (n.a.removeClass(t, "menu-item-open-dropdown"),
                            s.hideSubmenuDropdown(t, !0)),
                        e.preventDefault());
                    }
                  },
                  handleSubmenuDropdownTabClick: function(e) {
                    if ("accordion" !== s.getSubmenuMode(this)) {
                      var t = this.closest(".menu-item");
                      !1 !== s.eventTrigger("submenuToggle", this, e) &&
                        "accordion" !=
                          t.getAttribute("data-menu-submenu-mode") &&
                        (0 == n.a.hasClass(t, "menu-item-hover") &&
                          (n.a.addClass(t, "menu-item-open-dropdown"),
                          s.showSubmenuDropdown(t)),
                        e.preventDefault());
                    }
                  },
                  handleLinkClick: function(e) {
                    var t = this.closest(".menu-item.menu-item-submenu");
                    !1 !== s.eventTrigger("linkClick", this, e) &&
                      t &&
                      "dropdown" === s.getSubmenuMode(t) &&
                      s.hideSubmenuDropdowns();
                  },
                  handleSubmenuDropdownClose: function(e, t) {
                    if ("accordion" !== s.getSubmenuMode(t)) {
                      var a = i.querySelectorAll(
                        ".menu-item.menu-item-submenu.menu-item-hover:not(.menu-item-tabs)"
                      );
                      if (
                        a.length > 0 &&
                        !1 === n.a.hasClass(t, "menu-toggle") &&
                        0 === t.querySelectorAll(".menu-toggle").length
                      )
                        for (var r = 0, l = a.length; r < l; r++)
                          s.hideSubmenuDropdown(a[0], !0);
                    }
                  },
                  handleSubmenuAccordion: function(e, t) {
                    var r,
                      i = t || this;
                    if (!1 !== s.eventTrigger("submenuToggle", this, e))
                      if (
                        "dropdown" === s.getSubmenuMode(t) &&
                        (r = i.closest(".menu-item")) &&
                        "accordion" != r.getAttribute("data-menu-submenu-mode")
                      )
                        e.preventDefault();
                      else {
                        var l = i.closest(".menu-item"),
                          o = n.a.child(l, ".menu-submenu, .menu-inner");
                        if (
                          !n.a.hasClass(
                            i.closest(".menu-item"),
                            "menu-item-open-always"
                          ) &&
                          l &&
                          o
                        ) {
                          e.preventDefault();
                          var c = a.options.accordion.slideSpeed;
                          if (!1 === n.a.hasClass(l, "menu-item-open")) {
                            if (!1 === a.options.accordion.expandAll) {
                              var m = i.closest(".menu-nav, .menu-subnav"),
                                u = n.a.children(
                                  m,
                                  ".menu-item.menu-item-open.menu-item-submenu:not(.menu-item-here):not(.menu-item-open-always)"
                                );
                              if (m && u)
                                for (var d = 0, f = u.length; d < f; d++) {
                                  var E = u[0],
                                    p = n.a.child(E, ".menu-submenu");
                                  p &&
                                    n.a.slideUp(p, c, function() {
                                      s.scrollUpdate(),
                                        n.a.removeClass(E, "menu-item-open");
                                    });
                                }
                            }
                            n.a.slideDown(o, c, function() {
                              s.scrollToItem(i),
                                s.scrollUpdate(),
                                s.eventTrigger("submenuToggle", o, e);
                            }),
                              n.a.addClass(l, "menu-item-open");
                          } else
                            n.a.slideUp(o, c, function() {
                              s.scrollToItem(i),
                                s.eventTrigger("submenuToggle", o, e);
                            }),
                              n.a.removeClass(l, "menu-item-open");
                        }
                      }
                  },
                  scrollToItem: function(e) {
                    n.a.isBreakpointUp("lg") &&
                      a.options.accordion.autoScroll &&
                      "1" !== i.getAttribute("data-menu-scroll") &&
                      n.a.scrollTo(e, a.options.accordion.autoScrollSpeed);
                  },
                  hideSubmenuDropdown: function(e, t) {
                    t &&
                      (n.a.removeClass(e, "menu-item-hover"),
                      n.a.removeClass(e, "menu-item-active-tab")),
                      e.removeAttribute("data-hover"),
                      e.getAttribute("data-menu-toggle-class") &&
                        n.a.removeClass(
                          l,
                          e.getAttribute("data-menu-toggle-class")
                        );
                    var a = e.getAttribute("data-timeout");
                    e.removeAttribute("data-timeout"), clearTimeout(a);
                  },
                  hideSubmenuDropdowns: function() {
                    var e;
                    if (
                      (e = i.querySelectorAll(
                        '.menu-item-submenu.menu-item-hover:not(.menu-item-tabs):not([data-menu-toggle="tab"])'
                      ))
                    )
                      for (var t = 0, a = e.length; t < a; t++)
                        s.hideSubmenuDropdown(e[t], !0);
                  },
                  showSubmenuDropdown: function(e) {
                    var t = i.querySelectorAll(
                      ".menu-item-submenu.menu-item-hover, .menu-item-submenu.menu-item-active-tab"
                    );
                    if (t)
                      for (var a = 0, r = t.length; a < r; a++) {
                        var o = t[a];
                        e !== o &&
                          !1 === o.contains(e) &&
                          !1 === e.contains(o) &&
                          s.hideSubmenuDropdown(o, !0);
                      }
                    n.a.addClass(e, "menu-item-hover");
                    var c = n.a.find(e, ".menu-submenu");
                    c &&
                      !1 === c.hasAttribute("data-hor-direction") &&
                      (n.a.hasClass(c, "menu-submenu-left")
                        ? c.setAttribute(
                            "data-hor-direction",
                            "menu-submenu-left"
                          )
                        : n.a.hasClass(c, "menu-submenu-right") &&
                          c.setAttribute(
                            "data-hor-direction",
                            "menu-submenu-right"
                          )),
                      c && !0 === n.a.isOffscreen(c, "left", 15)
                        ? (n.a.removeClass(c, "menu-submenu-left"),
                          n.a.addClass(c, "menu-submenu-right"))
                        : c &&
                          !0 === n.a.isOffscreen(c, "right", 15) &&
                          (n.a.removeClass(c, "menu-submenu-right"),
                          n.a.addClass(c, "menu-submenu-left")),
                      e.getAttribute("data-menu-toggle-class") &&
                        n.a.addClass(
                          l,
                          e.getAttribute("data-menu-toggle-class")
                        );
                  },
                  createSubmenuDropdownClickDropoff: function(e) {
                    var t,
                      a =
                        (t = n.a.child(e, ".menu-submenu")
                          ? n.a.css(t, "z-index")
                          : 0) - 1,
                      r = document.createElement(
                        '<div class="menu-dropoff" style="background: transparent; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: ' +
                          a +
                          '"></div>'
                      );
                    l.appendChild(r),
                      n.a.addEvent(r, "click", function(t) {
                        t.stopPropagation(),
                          t.preventDefault(),
                          n.a.remove(this),
                          s.hideSubmenuDropdown(e, !0);
                      });
                  },
                  pauseDropdownHover: function(e) {
                    var t = new Date();
                    a.pauseDropdownHoverTime = t.getTime() + e;
                  },
                  resumeDropdownHover: function() {
                    return new Date().getTime() > a.pauseDropdownHoverTime;
                  },
                  resetActiveItem: function(e) {
                    for (
                      var t,
                        r,
                        l = 0,
                        o = (t = i.querySelectorAll(".menu-item-active"))
                          .length;
                      l < o;
                      l++
                    ) {
                      var s = t[0];
                      n.a.removeClass(s, "menu-item-active"),
                        n.a.hide(n.a.child(s, ".menu-submenu"));
                      for (
                        var c = 0,
                          m = (r = n.a.parents(s, ".menu-item-submenu") || [])
                            .length;
                        c < m;
                        c++
                      ) {
                        var u = r[l];
                        n.a.removeClass(u, "menu-item-open"),
                          n.a.hide(n.a.child(u, ".menu-submenu"));
                      }
                    }
                    if (
                      !1 === a.options.accordion.expandAll &&
                      (t = i.querySelectorAll(".menu-item-open"))
                    )
                      for (l = 0, o = t.length; l < o; l++)
                        n.a.removeClass(r[0], "menu-item-open");
                  },
                  setActiveItem: function(e) {
                    s.resetActiveItem();
                    for (
                      var t = n.a.parents(e, ".menu-item-submenu") || [],
                        a = 0,
                        r = t.length;
                      a < r;
                      a++
                    )
                      n.a.addClass(t[a], "menu-item-open");
                    n.a.addClass(e, "menu-item-active");
                  },
                  getBreadcrumbs: function(e) {
                    var t,
                      a = [],
                      r = n.a.child(e, ".menu-link");
                    a.push({
                      text: (t = n.a.child(r, ".menu-text") ? t.innerHTML : ""),
                      title: r.getAttribute("title"),
                      href: r.getAttribute("href"),
                    });
                    for (
                      var i = n.a.parents(e, ".menu-item-submenu"),
                        l = 0,
                        o = i.length;
                      l < o;
                      l++
                    ) {
                      var s = n.a.child(i[l], ".menu-link");
                      a.push({
                        text: (t = n.a.child(s, ".menu-text")
                          ? t.innerHTML
                          : ""),
                        title: s.getAttribute("title"),
                        href: s.getAttribute("href"),
                      });
                    }
                    return a.reverse();
                  },
                  getPageTitle: function(e) {
                    var t;
                    return n.a.child(e, ".menu-text") ? t.innerHTML : "";
                  },
                  eventTrigger: function(e, t, n) {
                    for (var r = 0; r < a.events.length; r++) {
                      var i = a.events[r];
                      if (i.name == e) {
                        if (1 != i.one) return i.handler.call(this, t, n);
                        if (0 == i.fired)
                          return (
                            (a.events[r].fired = !0), i.handler.call(this, t, n)
                          );
                      }
                    }
                  },
                  addEvent: function(e, t, n) {
                    a.events.push({ name: e, handler: t, one: n, fired: !1 });
                  },
                  removeEvent: function(e) {
                    a.events[e] && delete a.events[e];
                  },
                };
              return (
                (a.setDefaults = function(e) {
                  o = e;
                }),
                (a.scrollUpdate = function() {
                  return s.scrollUpdate();
                }),
                (a.scrollReInit = function() {
                  return s.scrollInit();
                }),
                (a.scrollTop = function() {
                  return s.scrollTop();
                }),
                (a.setActiveItem = function(e) {
                  return s.setActiveItem(e);
                }),
                (a.reload = function() {
                  return s.reload();
                }),
                (a.update = function(e) {
                  return s.update(e);
                }),
                (a.getBreadcrumbs = function(e) {
                  return s.getBreadcrumbs(e);
                }),
                (a.getPageTitle = function(e) {
                  return s.getPageTitle(e);
                }),
                (a.getSubmenuMode = function(e) {
                  return s.getSubmenuMode(e);
                }),
                (a.hideDropdown = function(e) {
                  s.hideSubmenuDropdown(e, !0);
                }),
                (a.hideDropdowns = function() {
                  s.hideSubmenuDropdowns();
                }),
                (a.pauseDropdownHover = function(e) {
                  s.pauseDropdownHover(e);
                }),
                (a.resumeDropdownHover = function() {
                  return s.resumeDropdownHover();
                }),
                (a.on = function(e, t) {
                  return s.addEvent(e, t);
                }),
                (a.off = function(e) {
                  return s.removeEvent(e);
                }),
                (a.one = function(e, t) {
                  return s.addEvent(e, t, !0);
                }),
                s.construct.apply(a, [t]),
                n.a.addResizeHandler(function() {
                  r && a.reload();
                }),
                (r = !0),
                a
              );
            }
          });
      }.call(this, a(101)(e)));
    },
    293: function(e, t, a) {
      "use strict";
      (function(e) {
        var n = a(1);
        e.exports,
          (t.a = function(e, t) {
            var a = this,
              r = n.a.getById(e);
            if (r) {
              var i = { targetToggleMode: "class" },
                l = {
                  construct: function(e) {
                    return (
                      n.a.data(r).has("toggle")
                        ? (a = n.a.data(r).get("toggle"))
                        : (l.init(e), l.build(), n.a.data(r).set("toggle", a)),
                      a
                    );
                  },
                  init: function(e) {
                    (a.element = r),
                      (a.events = []),
                      (a.options = n.a.deepExtend({}, i, e)),
                      (a.target = n.a.getById(e.target)),
                      (a.targetState = a.options.targetState),
                      (a.toggleState = a.options.toggleState),
                      "class" == a.options.targetToggleMode
                        ? (a.state = n.a.hasClasses(a.target, a.targetState)
                            ? "on"
                            : "off")
                        : (a.state = n.a.hasAttr(
                            a.target,
                            "data-" + a.targetState
                          )
                            ? n.a.attr(a.target, "data-" + a.targetState)
                            : "off");
                  },
                  build: function() {
                    n.a.addEvent(r, "mouseup", l.toggle);
                  },
                  toggle: function(e) {
                    return (
                      l.eventTrigger("beforeToggle"),
                      "off" == a.state ? l.toggleOn() : l.toggleOff(),
                      l.eventTrigger("afterToggle"),
                      e.preventDefault(),
                      a
                    );
                  },
                  toggleOn: function() {
                    return (
                      l.eventTrigger("beforeOn"),
                      "class" == a.options.targetToggleMode
                        ? n.a.addClass(a.target, a.targetState)
                        : n.a.attr(a.target, "data-" + a.targetState, "on"),
                      a.toggleState && n.a.addClass(r, a.toggleState),
                      (a.state = "on"),
                      l.eventTrigger("afterOn"),
                      l.eventTrigger("toggle"),
                      a
                    );
                  },
                  toggleOff: function() {
                    return (
                      l.eventTrigger("beforeOff"),
                      "class" == a.options.targetToggleMode
                        ? n.a.removeClass(a.target, a.targetState)
                        : n.a.removeAttr(a.target, "data-" + a.targetState),
                      a.toggleState && n.a.removeClass(r, a.toggleState),
                      (a.state = "off"),
                      l.eventTrigger("afterOff"),
                      l.eventTrigger("toggle"),
                      a
                    );
                  },
                  eventTrigger: function(e) {
                    for (var t = 0; t < a.events.length; t++) {
                      var n = a.events[t];
                      if (n.name == e) {
                        if (1 != n.one) return n.handler.call(this, a);
                        if (0 == n.fired)
                          return (
                            (a.events[t].fired = !0), n.handler.call(this, a)
                          );
                      }
                    }
                  },
                  addEvent: function(e, t, n) {
                    return (
                      a.events.push({ name: e, handler: t, one: n, fired: !1 }),
                      a
                    );
                  },
                };
              return (
                (a.setDefaults = function(e) {
                  i = e;
                }),
                (a.getState = function() {
                  return a.state;
                }),
                (a.toggle = function() {
                  return l.toggle();
                }),
                (a.toggleOn = function() {
                  return l.toggleOn();
                }),
                (a.toggleOff = function() {
                  return l.toggleOff();
                }),
                (a.on = function(e, t) {
                  return l.addEvent(e, t);
                }),
                (a.one = function(e, t) {
                  return l.addEvent(e, t, !0);
                }),
                l.construct.apply(a, [t]),
                a
              );
            }
          });
      }.call(this, a(101)(e)));
    },
    489: function(e, t) {},
    518: function(e) {
      e.exports = JSON.parse(
        '{"TRANSLATOR.SELECT":"W\xe4hle deine Sprache","MENU.NEW":"Neu","MENU.ACTIONS":"Aktionen","MENU.CREATE_POST":"Erstellen Sie einen neuen Beitrag","MENU.PAGES":"Pages","MENU.FEATURES":"Eigenschaften","MENU.APPS":"Apps","MENU.DASHBOARD":"Instrumententafel","AUTH.GENERAL.OR":"Oder","AUTH.GENERAL.SUBMIT_BUTTON":"einreichen","AUTH.GENERAL.NO_ACCOUNT":"Hast du kein Konto?","AUTH.GENERAL.SIGNUP_BUTTON":"Anmelden","AUTH.GENERAL.FORGOT_BUTTON":"Passwort vergessen","AUTH.GENERAL.BACK_BUTTON":"Zur\xfcck","AUTH.GENERAL.PRIVACY":"Privatsph\xe4re","AUTH.GENERAL.LEGAL":"Legal","AUTH.GENERAL.CONTACT":"Kontakt","AUTH.LOGIN.TITLE":"Create Account","AUTH.LOGIN.BUTTON":"Sign In","AUTH.FORGOT.TITLE":"Forgotten Password?","AUTH.FORGOT.DESC":"Enter your email to reset your password","AUTH.FORGOT.SUCCESS":"Your account has been successfully reset.","AUTH.REGISTER.TITLE":"Sign Up","AUTH.REGISTER.DESC":"Enter your details to create your account","AUTH.REGISTER.SUCCESS":"Your account has been successfuly registered.","AUTH.INPUT.EMAIL":"Email","AUTH.INPUT.FULLNAME":"Fullname","AUTH.INPUT.PASSWORD":"Password","AUTH.INPUT.CONFIRM_PASSWORD":"Confirm Password","AUTH.INPUT.USERNAME":"Nutzername","AUTH.VALIDATION.INVALID":"{name} is not valid","AUTH.VALIDATION.REQUIRED":"{name} is required","AUTH.VALIDATION.MIN_LENGTH":"{name}} minimum length is {{min}","AUTH.VALIDATION.AGREEMENT_REQUIRED":"Accepting terms & conditions are required","AUTH.VALIDATION.NOT_FOUND":"The requested {name} is not found","AUTH.VALIDATION.INVALID_LOGIN":"The login detail is incorrect","AUTH.VALIDATION.REQUIRED_FIELD":"Required field","AUTH.VALIDATION.MIN_LENGTH_FIELD":"Minimum field length:","AUTH.VALIDATION.MAX_LENGTH_FIELD":"Maximum field length:","AUTH.VALIDATION.INVALID_FIELD":"Field is not valid","ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT":"Selected records count: ","ECOMMERCE.COMMON.ALL":"All","ECOMMERCE.COMMON.SUSPENDED":"Suspended","ECOMMERCE.COMMON.ACTIVE":"Active","ECOMMERCE.COMMON.FILTER":"Filter","ECOMMERCE.COMMON.BY_STATUS":"by Status","ECOMMERCE.COMMON.BY_TYPE":"by Type","ECOMMERCE.COMMON.BUSINESS":"Business","ECOMMERCE.COMMON.INDIVIDUAL":"Individual","ECOMMERCE.COMMON.SEARCH":"Search","ECOMMERCE.COMMON.IN_ALL_FIELDS":"in all fields","ECOMMERCE.ECOMMERCE":"eCommerce","ECOMMERCE.CUSTOMERS.CUSTOMERS":"Customers","ECOMMERCE.CUSTOMERS.CUSTOMERS_LIST":"Customers list","ECOMMERCE.CUSTOMERS.NEW_CUSTOMER":"New Customer","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.TITLE":"Customer Delete","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.DESCRIPTION":"Are you sure to permanently delete this customer?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.WAIT_DESCRIPTION":"Customer is deleting...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.MESSAGE":"Customer has been deleted","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.TITLE":"Customers Delete","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.DESCRIPTION":"Are you sure to permanently delete selected customers?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.WAIT_DESCRIPTION":"Customers are deleting...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.MESSAGE":"Selected customers have been deleted","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.TITLE":"Status has been updated for selected customers","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.MESSAGE":"Selected customers status have successfully been updated","ECOMMERCE.CUSTOMERS.EDIT.UPDATE_MESSAGE":"Customer has been updated","ECOMMERCE.CUSTOMERS.EDIT.ADD_MESSAGE":"Customer has been created"}'
      );
    },
    519: function(e) {
      e.exports = JSON.parse(
        '{"TRANSLATOR.SELECT":"Select your language","MENU.NEW":"new","MENU.ACTIONS":"Actions","MENU.CREATE_POST":"Create New Post","MENU.PAGES":"Pages","MENU.FEATURES":"Features","MENU.APPS":"Apps","MENU.DASHBOARD":"Dashboard","AUTH.GENERAL.OR":"Or","AUTH.GENERAL.SUBMIT_BUTTON":"Submit","AUTH.GENERAL.NO_ACCOUNT":"Don\'t have an account?","AUTH.GENERAL.SIGNUP_BUTTON":"Sign Up","AUTH.GENERAL.FORGOT_BUTTON":"Forgot Password","AUTH.GENERAL.BACK_BUTTON":"Back","AUTH.GENERAL.PRIVACY":"Privacy","AUTH.GENERAL.LEGAL":"Legal","AUTH.GENERAL.CONTACT":"Contact","AUTH.LOGIN.TITLE":"Login Account","AUTH.LOGIN.BUTTON":"Sign In","AUTH.FORGOT.TITLE":"Forgotten Password?","AUTH.FORGOT.DESC":"Enter your email to reset your password","AUTH.FORGOT.SUCCESS":"Your account has been successfully reset.","AUTH.REGISTER.TITLE":"Sign Up","AUTH.REGISTER.DESC":"Enter your details to create your account","AUTH.REGISTER.SUCCESS":"Your account has been successfuly registered.","AUTH.INPUT.EMAIL":"Email","AUTH.INPUT.FULLNAME":"Fullname","AUTH.INPUT.PASSWORD":"Password","AUTH.INPUT.CONFIRM_PASSWORD":"Confirm Password","AUTH.INPUT.USERNAME":"Username","AUTH.VALIDATION.INVALID":"{name} is not valid","AUTH.VALIDATION.REQUIRED":"{name} is required","AUTH.VALIDATION.MIN_LENGTH":"{name}} minimum length is {{min}","AUTH.VALIDATION.AGREEMENT_REQUIRED":"Accepting terms & conditions are required","AUTH.VALIDATION.NOT_FOUND":"The requested {name} is not found","AUTH.VALIDATION.INVALID_LOGIN":"The login detail is incorrect","AUTH.VALIDATION.REQUIRED_FIELD":"Required field","AUTH.VALIDATION.MIN_LENGTH_FIELD":"Minimum field length:","AUTH.VALIDATION.MAX_LENGTH_FIELD":"Maximum field length:","AUTH.VALIDATION.INVALID_FIELD":"Field is not valid","ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT":"Selected records count: ","ECOMMERCE.COMMON.ALL":"All","ECOMMERCE.COMMON.SUSPENDED":"Suspended","ECOMMERCE.COMMON.ACTIVE":"Active","ECOMMERCE.COMMON.FILTER":"Filter","ECOMMERCE.COMMON.BY_STATUS":"by Status","ECOMMERCE.COMMON.BY_TYPE":"by Type","ECOMMERCE.COMMON.BUSINESS":"Business","ECOMMERCE.COMMON.INDIVIDUAL":"Individual","ECOMMERCE.COMMON.SEARCH":"Search","ECOMMERCE.COMMON.IN_ALL_FIELDS":"in all fields","ECOMMERCE.ECOMMERCE":"eCommerce","ECOMMERCE.CUSTOMERS.CUSTOMERS":"Customers","ECOMMERCE.CUSTOMERS.CUSTOMERS_LIST":"Customers list","ECOMMERCE.CUSTOMERS.NEW_CUSTOMER":"New Customer","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.TITLE":"Customer Delete","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.DESCRIPTION":"Are you sure to permanently delete this customer?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.WAIT_DESCRIPTION":"Customer is deleting...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.MESSAGE":"Customer has been deleted","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.TITLE":"Customers Delete","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.DESCRIPTION":"Are you sure to permanently delete selected customers?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.WAIT_DESCRIPTION":"Customers are deleting...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.MESSAGE":"Selected customers have been deleted","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.TITLE":"Status has been updated for selected customers","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.MESSAGE":"Selected customers status have successfully been updated","ECOMMERCE.CUSTOMERS.EDIT.UPDATE_MESSAGE":"Customer has been updated","ECOMMERCE.CUSTOMERS.EDIT.ADD_MESSAGE":"Customer has been created"}'
      );
    },
    520: function(e) {
      e.exports = JSON.parse(
        '{"TRANSLATOR.SELECT":"Elige tu idioma","MENU.NEW":"nuevo","MENU.ACTIONS":"Comportamiento","MENU.CREATE_POST":"Crear nueva publicaci\xf3n","MENU.PAGES":"Pages","MENU.FEATURES":"Caracteristicas","MENU.APPS":"Aplicaciones","MENU.DASHBOARD":"Tablero","AUTH.GENERAL.OR":"O","AUTH.GENERAL.SUBMIT_BUTTON":"Enviar","AUTH.GENERAL.NO_ACCOUNT":"No tienes una cuenta?","AUTH.GENERAL.SIGNUP_BUTTON":"Reg\xedstrate","AUTH.GENERAL.FORGOT_BUTTON":"Se te olvid\xf3 tu contrase\xf1a","AUTH.GENERAL.BACK_BUTTON":"Espalda","AUTH.GENERAL.PRIVACY":"Intimidad","AUTH.GENERAL.LEGAL":"Legal","AUTH.GENERAL.CONTACT":"Contacto","AUTH.LOGIN.TITLE":"Crear una cuenta","AUTH.LOGIN.BUTTON":"Registrarse","AUTH.FORGOT.TITLE":"Contrase\xf1a olvidada?","AUTH.FORGOT.DESC":"Ingrese su correo electr\xf3nico para restablecer su contrase\xf1a","AUTH.FORGOT.SUCCESS":"Your account has been successfully reset.","AUTH.REGISTER.TITLE":"Sign Up","AUTH.REGISTER.DESC":"Enter your details to create your account","AUTH.REGISTER.SUCCESS":"Your account has been successfuly registered.","AUTH.INPUT.EMAIL":"Email","AUTH.INPUT.FULLNAME":"Fullname","AUTH.INPUT.PASSWORD":"Password","AUTH.INPUT.CONFIRM_PASSWORD":"Confirm Password","AUTH.INPUT.USERNAME":"Usuario","AUTH.VALIDATION.INVALID":"{name} is not valid","AUTH.VALIDATION.REQUIRED":"{name} is required","AUTH.VALIDATION.MIN_LENGTH":"{name}} minimum length is {{min}","AUTH.VALIDATION.AGREEMENT_REQUIRED":"Accepting terms & conditions are required","AUTH.VALIDATION.NOT_FOUND":"The requested {name} is not found","AUTH.VALIDATION.INVALID_LOGIN":"The login detail is incorrect","AUTH.VALIDATION.REQUIRED_FIELD":"Required field","AUTH.VALIDATION.MIN_LENGTH_FIELD":"Minimum field length:","AUTH.VALIDATION.MAX_LENGTH_FIELD":"Maximum field length:","AUTH.VALIDATION.INVALID_FIELD":"Field is not valid","ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT":"Selected records count: ","ECOMMERCE.COMMON.ALL":"All","ECOMMERCE.COMMON.SUSPENDED":"Suspended","ECOMMERCE.COMMON.ACTIVE":"Active","ECOMMERCE.COMMON.FILTER":"Filter","ECOMMERCE.COMMON.BY_STATUS":"by Status","ECOMMERCE.COMMON.BY_TYPE":"by Type","ECOMMERCE.COMMON.BUSINESS":"Business","ECOMMERCE.COMMON.INDIVIDUAL":"Individual","ECOMMERCE.COMMON.SEARCH":"Search","ECOMMERCE.COMMON.IN_ALL_FIELDS":"in all fields","ECOMMERCE.ECOMMERCE":"eCommerce","ECOMMERCE.CUSTOMERS.CUSTOMERS":"Customers","ECOMMERCE.CUSTOMERS.CUSTOMERS_LIST":"Customers list","ECOMMERCE.CUSTOMERS.NEW_CUSTOMER":"New Customer","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.TITLE":"Customer Delete","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.DESCRIPTION":"Are you sure to permanently delete this customer?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.WAIT_DESCRIPTION":"Customer is deleting...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.MESSAGE":"Customer has been deleted","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.TITLE":"Customers Delete","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.DESCRIPTION":"Are you sure to permanently delete selected customers?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.WAIT_DESCRIPTION":"Customers are deleting...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.MESSAGE":"Selected customers have been deleted","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.TITLE":"Status has been updated for selected customers","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.MESSAGE":"Selected customers status have successfully been updated","ECOMMERCE.CUSTOMERS.EDIT.UPDATE_MESSAGE":"Customer has been updated","ECOMMERCE.CUSTOMERS.EDIT.ADD_MESSAGE":"Customer has been created"}'
      );
    },
    521: function(e) {
      e.exports = JSON.parse(
        '{"TRANSLATOR.SELECT":"choisissez votre langue","MENU.NEW":"Nouveau","MENU.ACTIONS":"Actes","MENU.CREATE_POST":"Cr\xe9er un nouveau Post","MENU.PAGES":"Pages","MENU.FEATURES":"Fonctionnalit\xe9s","MENU.APPS":"Applications","MENU.DASHBOARD":"Tableau de Bord","AUTH.GENERAL.OR":"Ou","AUTH.GENERAL.SUBMIT_BUTTON":"Soumettre","AUTH.GENERAL.NO_ACCOUNT":"Ne pas avoir de compte?","AUTH.GENERAL.SIGNUP_BUTTON":"Registre","AUTH.GENERAL.FORGOT_BUTTON":"Mot de passe oubli\xe9","AUTH.GENERAL.BACK_BUTTON":"Back","AUTH.GENERAL.PRIVACY":"Privacy","AUTH.GENERAL.LEGAL":"Legal","AUTH.GENERAL.CONTACT":"Contact","AUTH.LOGIN.TITLE":"Cr\xe9er un compte","AUTH.LOGIN.BUTTON":"Sign In","AUTH.FORGOT.TITLE":"Forgotten Password?","AUTH.FORGOT.DESC":"Enter your email to reset your password","AUTH.FORGOT.SUCCESS":"Your account has been successfully reset.","AUTH.REGISTER.TITLE":"Sign Up","AUTH.REGISTER.DESC":"Enter your details to create your account","AUTH.REGISTER.SUCCESS":"Your account has been successfuly registered.","AUTH.INPUT.EMAIL":"Email","AUTH.INPUT.FULLNAME":"Fullname","AUTH.INPUT.PASSWORD":"Mot de passe","AUTH.INPUT.CONFIRM_PASSWORD":"Confirm Password","AUTH.INPUT.USERNAME":"Nom d\'utilisateur","AUTH.VALIDATION.INVALID":"{name} n\'est pas valide","AUTH.VALIDATION.REQUIRED":"{name} est requis","AUTH.VALIDATION.MIN_LENGTH":"{name}} minimum length is {{min}","AUTH.VALIDATION.AGREEMENT_REQUIRED":"Accepting terms & conditions are required","AUTH.VALIDATION.NOT_FOUND":"The requested {name} is not found","AUTH.VALIDATION.INVALID_LOGIN":"The login detail is incorrect","AUTH.VALIDATION.REQUIRED_FIELD":"Required field","AUTH.VALIDATION.MIN_LENGTH_FIELD":"Minimum field length:","AUTH.VALIDATION.MAX_LENGTH_FIELD":"Maximum field length:","AUTH.VALIDATION.INVALID_FIELD":"Field is not valid","ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT":"Nombre d\'enregistrements s\xe9lectionn\xe9s: ","ECOMMERCE.COMMON.ALL":"All","ECOMMERCE.COMMON.SUSPENDED":"Suspended","ECOMMERCE.COMMON.ACTIVE":"Active","ECOMMERCE.COMMON.FILTER":"Filter","ECOMMERCE.COMMON.BY_STATUS":"by Status","ECOMMERCE.COMMON.BY_TYPE":"by Type","ECOMMERCE.COMMON.BUSINESS":"Business","ECOMMERCE.COMMON.INDIVIDUAL":"Individual","ECOMMERCE.COMMON.SEARCH":"Search","ECOMMERCE.COMMON.IN_ALL_FIELDS":"in all fields","ECOMMERCE.ECOMMERCE":"\xe9Commerce","ECOMMERCE.CUSTOMERS.CUSTOMERS":"Les clients","ECOMMERCE.CUSTOMERS.CUSTOMERS_LIST":"Liste des clients","ECOMMERCE.CUSTOMERS.NEW_CUSTOMER":"Nouveau client","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.TITLE":"Suppression du client","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.DESCRIPTION":"\xcates-vous s\xfbr de supprimer d\xe9finitivement ce client?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.WAIT_DESCRIPTION":"Le client est en train de supprimer ...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.MESSAGE":"Le client a \xe9t\xe9 supprim\xe9","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.TITLE":"Supprimer les clients","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.DESCRIPTION":"\xcates-vous s\xfbr de supprimer d\xe9finitivement les clients s\xe9lectionn\xe9s?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.WAIT_DESCRIPTION":"Les clients suppriment ...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.MESSAGE":"Les clients s\xe9lectionn\xe9s ont \xe9t\xe9 supprim\xe9s","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.TITLE":"Le statut a \xe9t\xe9 mis \xe0 jour pour les clients s\xe9lectionn\xe9s","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.MESSAGE":"Le statut des clients s\xe9lectionn\xe9s a \xe9t\xe9 mis \xe0 jour avec succ\xe8s","ECOMMERCE.CUSTOMERS.EDIT.UPDATE_MESSAGE":"Le client a \xe9t\xe9 mis \xe0 jour","ECOMMERCE.CUSTOMERS.EDIT.ADD_MESSAGE":"Le client a \xe9t\xe9 cr\xe9\xe9"}'
      );
    },
    522: function(e) {
      e.exports = JSON.parse(
        '{"TRANSLATOR.SELECT":"\u3042\u306a\u305f\u304c\u4f7f\u3046\u8a00\u8a9e\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044","MENU.NEW":"\u65b0\u3057\u3044","MENU.ACTIONS":"\u884c\u52d5","MENU.CREATE_POST":"\u65b0\u3057\u3044\u6295\u7a3f\u3092\u4f5c\u6210","MENU.PAGES":"Pages","MENU.FEATURES":"\u7279\u5fb4","MENU.APPS":"\u30a2\u30d7\u30ea","MENU.DASHBOARD":"\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9","AUTH.GENERAL.OR":"\u307e\u305f\u306f","AUTH.GENERAL.SUBMIT_BUTTON":"\u63d0\u51fa\u3059\u308b","AUTH.GENERAL.NO_ACCOUNT":"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6301\u3063\u3066\u3044\u306a\u3044\uff1f","AUTH.GENERAL.SIGNUP_BUTTON":"\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7","AUTH.GENERAL.FORGOT_BUTTON":"\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u304a\u5fd8\u308c\u3067\u3059\u304b","AUTH.GENERAL.BACK_BUTTON":"\u30d0\u30c3\u30af","AUTH.GENERAL.PRIVACY":"\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc","AUTH.GENERAL.LEGAL":"\u6cd5\u7684","AUTH.GENERAL.CONTACT":"\u63a5\u89e6","AUTH.LOGIN.TITLE":"Create Account","AUTH.LOGIN.BUTTON":"Sign In","AUTH.FORGOT.TITLE":"Forgotten Password?","AUTH.FORGOT.DESC":"Enter your email to reset your password","AUTH.FORGOT.SUCCESS":"Your account has been successfully reset.","AUTH.REGISTER.TITLE":"Sign Up","AUTH.REGISTER.DESC":"Enter your details to create your account","AUTH.REGISTER.SUCCESS":"Your account has been successfuly registered.","AUTH.INPUT.EMAIL":"Email","AUTH.INPUT.FULLNAME":"Fullname","AUTH.INPUT.PASSWORD":"Password","AUTH.INPUT.CONFIRM_PASSWORD":"Confirm Password","AUTH.INPUT.USERNAME":"\u30e6\u30fc\u30b6\u30fc\u540d","AUTH.VALIDATION.INVALID":"{name} is not valid","AUTH.VALIDATION.REQUIRED":"{name} is required","AUTH.VALIDATION.MIN_LENGTH":"{name}} minimum length is {{min}","AUTH.VALIDATION.AGREEMENT_REQUIRED":"Accepting terms & conditions are required","AUTH.VALIDATION.NOT_FOUND":"The requested {name} is not found","AUTH.VALIDATION.INVALID_LOGIN":"The login detail is incorrect","AUTH.VALIDATION.REQUIRED_FIELD":"Required field","AUTH.VALIDATION.MIN_LENGTH_FIELD":"Minimum field length:","AUTH.VALIDATION.MAX_LENGTH_FIELD":"Maximum field length:","AUTH.VALIDATION.INVALID_FIELD":"Field is not valid","ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT":"Selected records count: ","ECOMMERCE.COMMON.ALL":"All","ECOMMERCE.COMMON.SUSPENDED":"Suspended","ECOMMERCE.COMMON.ACTIVE":"Active","ECOMMERCE.COMMON.FILTER":"Filter","ECOMMERCE.COMMON.BY_STATUS":"by Status","ECOMMERCE.COMMON.BY_TYPE":"by Type","ECOMMERCE.COMMON.BUSINESS":"Business","ECOMMERCE.COMMON.INDIVIDUAL":"Individual","ECOMMERCE.COMMON.SEARCH":"Search","ECOMMERCE.COMMON.IN_ALL_FIELDS":"in all fields","ECOMMERCE.ECOMMERCE":"eCommerce","ECOMMERCE.CUSTOMERS.CUSTOMERS":"Customers","ECOMMERCE.CUSTOMERS.CUSTOMERS_LIST":"Customers list","ECOMMERCE.CUSTOMERS.NEW_CUSTOMER":"New Customer","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.TITLE":"Customer Delete","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.DESCRIPTION":"Are you sure to permanently delete this customer?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.WAIT_DESCRIPTION":"Customer is deleting...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.MESSAGE":"Customer has been deleted","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.TITLE":"Customers Delete","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.DESCRIPTION":"Are you sure to permanently delete selected customers?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.WAIT_DESCRIPTION":"Customers are deleting...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.MESSAGE":"Selected customers have been deleted","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.TITLE":"Status has been updated for selected customers","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.MESSAGE":"Selected customers status have successfully been updated","ECOMMERCE.CUSTOMERS.EDIT.UPDATE_MESSAGE":"Customer has been updated","ECOMMERCE.CUSTOMERS.EDIT.ADD_MESSAGE":"Customer has been created"}'
      );
    },
    523: function(e) {
      e.exports = JSON.parse(
        '{"TRANSLATOR.SELECT":"\u9009\u62e9\u4f60\u7684\u8bed\u8a00","MENU.NEW":"\u65b0","MENU.ACTIONS":"\u884c\u52a8","MENU.CREATE_POST":"\u521b\u5efa\u65b0\u5e16\u5b50","MENU.PAGES":"Pages","MENU.FEATURES":"\u7279\u5f81","MENU.APPS":"\u5e94\u7528","MENU.DASHBOARD":"\u4eea\u8868\u677f","AUTH.GENERAL.OR":"\u8981\u4e48","AUTH.GENERAL.SUBMIT_BUTTON":"\u63d0\u4ea4","AUTH.GENERAL.NO_ACCOUNT":"\u6ca1\u6709\u8d26\u53f7\uff1f","AUTH.GENERAL.SIGNUP_BUTTON":"\u6ce8\u518c","AUTH.GENERAL.FORGOT_BUTTON":"\u5fd8\u8bb0\u5bc6\u7801","AUTH.GENERAL.BACK_BUTTON":"\u80cc\u90e8","AUTH.GENERAL.PRIVACY":"\u9690\u79c1","AUTH.GENERAL.LEGAL":"\u6cd5\u5f8b","AUTH.GENERAL.CONTACT":"\u8054\u7cfb","AUTH.LOGIN.TITLE":"\u521b\u5efa\u5e10\u53f7","AUTH.LOGIN.BUTTON":"\u7b7e\u5230","AUTH.FORGOT.TITLE":"Forgotten Password?","AUTH.FORGOT.DESC":"Enter your email to reset your password","AUTH.FORGOT.SUCCESS":"Your account has been successfully reset.","AUTH.REGISTER.TITLE":"Sign Up","AUTH.REGISTER.DESC":"Enter your details to create your account","AUTH.REGISTER.SUCCESS":"Your account has been successfuly registered.","AUTH.INPUT.EMAIL":"Email","AUTH.INPUT.FULLNAME":"Fullname","AUTH.INPUT.PASSWORD":"Password","AUTH.INPUT.CONFIRM_PASSWORD":"Confirm Password","AUTH.INPUT.USERNAME":"\u7528\u6236\u540d","AUTH.VALIDATION.INVALID":"{name} is not valid","AUTH.VALIDATION.REQUIRED":"{name} is required","AUTH.VALIDATION.MIN_LENGTH":"{name}} minimum length is {{min}","AUTH.VALIDATION.AGREEMENT_REQUIRED":"Accepting terms & conditions are required","AUTH.VALIDATION.NOT_FOUND":"The requested {name} is not found","AUTH.VALIDATION.INVALID_LOGIN":"The login detail is incorrect","AUTH.VALIDATION.REQUIRED_FIELD":"Required field","AUTH.VALIDATION.MIN_LENGTH_FIELD":"Minimum field length:","AUTH.VALIDATION.MAX_LENGTH_FIELD":"Maximum field length:","AUTH.VALIDATION.INVALID_FIELD":"Field is not valid","ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT":"Selected records count: ","ECOMMERCE.COMMON.ALL":"All","ECOMMERCE.COMMON.SUSPENDED":"Suspended","ECOMMERCE.COMMON.ACTIVE":"Active","ECOMMERCE.COMMON.FILTER":"Filter","ECOMMERCE.COMMON.BY_STATUS":"by Status","ECOMMERCE.COMMON.BY_TYPE":"by Type","ECOMMERCE.COMMON.BUSINESS":"Business","ECOMMERCE.COMMON.INDIVIDUAL":"Individual","ECOMMERCE.COMMON.SEARCH":"Search","ECOMMERCE.COMMON.IN_ALL_FIELDS":"in all fields","ECOMMERCE.ECOMMERCE":"eCommerce","ECOMMERCE.CUSTOMERS.CUSTOMERS":"\u987e\u5ba2","ECOMMERCE.CUSTOMERS.CUSTOMERS_LIST":"\u5ba2\u6237\u540d\u5355","ECOMMERCE.CUSTOMERS.NEW_CUSTOMER":"New Customer","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.TITLE":"Customer Delete","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.DESCRIPTION":"Are you sure to permanently delete this customer?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.WAIT_DESCRIPTION":"Customer is deleting...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_SIMPLE.MESSAGE":"Customer has been deleted","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.TITLE":"Customers Delete","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.DESCRIPTION":"Are you sure to permanently delete selected customers?","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.WAIT_DESCRIPTION":"Customers are deleting...","ECOMMERCE.CUSTOMERS.DELETE_CUSTOMER_MULTY.MESSAGE":"Selected customers have been deleted","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.TITLE":"Status has been updated for selected customers","ECOMMERCE.CUSTOMERS.UPDATE_STATUS.MESSAGE":"Selected customers status have successfully been updated","ECOMMERCE.CUSTOMERS.EDIT.UPDATE_MESSAGE":"Customer has been updated","ECOMMERCE.CUSTOMERS.EDIT.ADD_MESSAGE":"Customer has been created"}'
      );
    },
    526: function(e, t) {},
    537: function(e, t, a) {
      "use strict";
      (function(e) {
        var n = a(1);
        e.exports,
          (t.a = function(e, t) {
            var a = this,
              r = n.a.getById(e),
              i = n.a.getBody();
            if (r) {
              var l = {
                  toggleSpeed: 400,
                  sticky: { releseOnReverse: !1, offset: 300, zIndex: 101 },
                },
                o = {
                  construct: function(e) {
                    return (
                      n.a.data(r).has("card")
                        ? (a = n.a.data(r).get("card"))
                        : (o.init(e), o.build(), n.a.data(r).set("card", a)),
                      a
                    );
                  },
                  init: function(e) {
                    (a.element = r),
                      (a.events = []),
                      (a.options = n.a.deepExtend({}, l, e)),
                      (a.header = n.a.child(r, ".card-header")),
                      (a.footer = n.a.child(r, ".card-footer")),
                      n.a.child(r, ".card-body")
                        ? (a.body = n.a.child(r, ".card-body"))
                        : n.a.child(r, ".form") &&
                          (a.body = n.a.child(r, ".form"));
                  },
                  build: function() {
                    var e = n.a.find(a.header, "[data-card-tool=remove]");
                    e &&
                      n.a.addEvent(e, "click", function(e) {
                        e.preventDefault(), o.remove();
                      });
                    var t = n.a.find(a.header, "[data-card-tool=reload]");
                    t &&
                      n.a.addEvent(t, "click", function(e) {
                        e.preventDefault(), o.reload();
                      });
                    var r = n.a.find(a.header, "[data-card-tool=toggle]");
                    r &&
                      n.a.addEvent(r, "click", function(e) {
                        e.preventDefault(), o.toggle();
                      });
                  },
                  initSticky: function() {
                    a.options.sticky.offset;
                    a.header &&
                      window.addEventListener("scroll", o.onScrollSticky);
                  },
                  onScrollSticky: function(e) {
                    var t = a.options.sticky.offset;
                    if (!isNaN(t)) {
                      var r = n.a.getScrollTop();
                      r >= t && !1 === n.a.hasClass(i, "card-sticky-on")
                        ? (o.eventTrigger("stickyOn"),
                          n.a.addClass(i, "card-sticky-on"),
                          o.updateSticky())
                        : 1.5 * r <= t &&
                          n.a.hasClass(i, "card-sticky-on") &&
                          (o.eventTrigger("stickyOff"),
                          n.a.removeClass(i, "card-sticky-on"),
                          o.resetSticky());
                    }
                  },
                  updateSticky: function() {
                    var e, t, r;
                    a.header &&
                      n.a.hasClass(i, "card-sticky-on") &&
                        ((e =
                          a.options.sticky.position.top instanceof Function
                            ? parseInt(
                                a.options.sticky.position.top.call(this, a)
                              )
                            : parseInt(a.options.sticky.position.top)),
                        (t =
                          a.options.sticky.position.left instanceof Function
                            ? parseInt(
                                a.options.sticky.position.left.call(this, a)
                              )
                            : parseInt(a.options.sticky.position.left)),
                        (r =
                          a.options.sticky.position.right instanceof Function
                            ? parseInt(
                                a.options.sticky.position.right.call(this, a)
                              )
                            : parseInt(a.options.sticky.position.right)),
                        n.a.css(a.header, "z-index", a.options.sticky.zIndex),
                        n.a.css(a.header, "top", e + "px"),
                        n.a.css(a.header, "left", t + "px"),
                        n.a.css(a.header, "right", r + "px"));
                  },
                  resetSticky: function() {
                    a.header &&
                      !1 === n.a.hasClass(i, "card-sticky-on") &&
                      (n.a.css(a.header, "z-index", ""),
                      n.a.css(a.header, "top", ""),
                      n.a.css(a.header, "left", ""),
                      n.a.css(a.header, "right", ""));
                  },
                  remove: function() {
                    !1 !== o.eventTrigger("beforeRemove") &&
                      (n.a.remove(r), o.eventTrigger("afterRemove"));
                  },
                  setContent: function(e) {
                    e && (a.body.innerHTML = e);
                  },
                  getBody: function() {
                    return a.body;
                  },
                  getSelf: function() {
                    return r;
                  },
                  reload: function() {
                    o.eventTrigger("reload");
                  },
                  toggle: function() {
                    n.a.hasClass(r, "card-collapse") ||
                    n.a.hasClass(r, "card-collapsed")
                      ? o.expand()
                      : o.collapse();
                  },
                  collapse: function() {
                    !1 !== o.eventTrigger("beforeCollapse") &&
                      (n.a.slideUp(a.body, a.options.toggleSpeed, function() {
                        o.eventTrigger("afterCollapse");
                      }),
                      n.a.addClass(r, "card-collapse"));
                  },
                  expand: function() {
                    !1 !== o.eventTrigger("beforeExpand") &&
                      (n.a.slideDown(a.body, a.options.toggleSpeed, function() {
                        o.eventTrigger("afterExpand");
                      }),
                      n.a.removeClass(r, "card-collapse"),
                      n.a.removeClass(r, "card-collapsed"));
                  },
                  eventTrigger: function(e) {
                    for (var t = 0; t < a.events.length; t++) {
                      var n = a.events[t];
                      if (n.name == e) {
                        if (1 != n.one) return n.handler.call(this, a);
                        if (0 == n.fired)
                          return (
                            (a.events[t].fired = !0), n.handler.call(this, a)
                          );
                      }
                    }
                  },
                  addEvent: function(e, t, n) {
                    return (
                      a.events.push({ name: e, handler: t, one: n, fired: !1 }),
                      a
                    );
                  },
                };
              return (
                (a.setDefaults = function(e) {
                  l = e;
                }),
                (a.remove = function() {
                  return o.remove(html);
                }),
                (a.initSticky = function() {
                  return o.initSticky();
                }),
                (a.updateSticky = function() {
                  return o.updateSticky();
                }),
                (a.resetSticky = function() {
                  return o.resetSticky();
                }),
                (a.destroySticky = function() {
                  o.resetSticky(),
                    window.removeEventListener("scroll", o.onScrollSticky);
                }),
                (a.reload = function() {
                  return o.reload();
                }),
                (a.setContent = function(e) {
                  return o.setContent(e);
                }),
                (a.toggle = function() {
                  return o.toggle();
                }),
                (a.collapse = function() {
                  return o.collapse();
                }),
                (a.expand = function() {
                  return o.expand();
                }),
                (a.getBody = function() {
                  return o.getBody();
                }),
                (a.getSelf = function() {
                  return o.getSelf();
                }),
                (a.on = function(e, t) {
                  return o.addEvent(e, t);
                }),
                (a.one = function(e, t) {
                  return o.addEvent(e, t, !0);
                }),
                o.construct.apply(a, [t]),
                a
              );
            }
          });
      }.call(this, a(101)(e)));
    },
    538: function(e, t, a) {
      "use strict";
      (function(e) {
        var n = a(1);
        e.exports,
          (t.a = function(e, t) {
            var a = this,
              r = n.a.getById(e),
              i = n.a.getBody();
            if (r) {
              var l = { offset: 300, speed: 6e3 },
                o = {
                  construct: function(e) {
                    return (
                      n.a.data(r).has("scrolltop")
                        ? (a = n.a.data(r).get("scrolltop"))
                        : (o.init(e),
                          o.build(),
                          n.a.data(r).set("scrolltop", a)),
                      a
                    );
                  },
                  init: function(e) {
                    (a.events = []), (a.options = n.a.deepExtend({}, l, e));
                  },
                  build: function() {
                    window.addEventListener("scroll", function() {
                      n.a.throttle(
                        void 0,
                        function() {
                          o.handle();
                        },
                        200
                      );
                    }),
                      n.a.addEvent(r, "click", o.scroll);
                  },
                  handle: function() {
                    n.a.getScrollTop() > a.options.offset
                      ? !1 === i.hasAttribute("data-scrolltop") &&
                        i.setAttribute("data-scrolltop", "on")
                      : !0 === i.hasAttribute("data-scrolltop") &&
                        i.removeAttribute("data-scrolltop");
                  },
                  scroll: function(e) {
                    e.preventDefault(), n.a.scrollTop(0, a.options.speed);
                  },
                  eventTrigger: function(e, t) {
                    for (var n = 0; n < a.events.length; n++) {
                      var r = a.events[n];
                      if (r.name == e) {
                        if (1 != r.one) return r.handler.call(this, a, t);
                        if (0 == r.fired)
                          return (
                            (a.events[n].fired = !0), r.handler.call(this, a, t)
                          );
                      }
                    }
                  },
                  addEvent: function(e, t, n) {
                    a.events.push({ name: e, handler: t, one: n, fired: !1 });
                  },
                };
              return (
                (a.setDefaults = function(e) {
                  l = e;
                }),
                (a.on = function(e, t) {
                  return o.addEvent(e, t);
                }),
                (a.one = function(e, t) {
                  return o.addEvent(e, t, !0);
                }),
                o.construct.apply(a, [t]),
                !0,
                a
              );
            }
          });
      }.call(this, a(101)(e)));
    },
    549: function(e, t, a) {
      e.exports = a(1187);
    },
  },
  [[549, 1, 2]],
]);
//# sourceMappingURL=main.4ef86def.chunk.js.map
