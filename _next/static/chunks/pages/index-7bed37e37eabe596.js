(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8581: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(182)
            }])
        },
        2369: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var a = n(5893);
            n(4184);

            function i(e) {
                var t = e.children,
                    n = e.type;
                return (0, a.jsx)("div", {
                    className: n ? "container-" + n : "container",
                    children: t
                })
            }
        },
        3165: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return p
                }
            });
            var a = n(5893),
                i = n(5988),
                r = n.n(i),
                o = n(4184),
                s = n.n(o),
                l = n(9920),
                c = n(1043),
                d = n(1645),
                _ = "/_next/static/media/preloader.bf354460.svg";

            function h() {
                var e, t, n, i = (0, c.I0)(),
                    o = (0, c.v9)((function(e) {
                        return e.common.isLoading
                    })),
                    h = (0, c.v9)((function(e) {
                        return e.common.loadingSteps
                    })),
                    u = 100 / h[1] * h[0],
                    m = s()("preloader", (n = o, (t = "preloader_none") in(e = {}) ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e)),
                    f = (0, l.useSpring)({
                        from: {
                            number: 0
                        },
                        number: u,
                        delay: 200,
                        config: {
                            duration: 600
                        },
                        onRest: function() {
                            return h[0] === h[1] && !o && i(d.K4(!0))
                        }
                    }).number;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: "jsx-3da9ad706526d3c9 " + (m || ""),
                        children: [(0, a.jsx)("img", {
                            width: "120",
                            height: "120",
                            src: _,
                            alt: "preloader",
                            title: "preloader",
                            className: "jsx-3da9ad706526d3c9 preloader__img"
                        }), (0, a.jsxs)("div", {
                            className: "jsx-3da9ad706526d3c9 preloader__text",
                            children: [(0, a.jsx)(l.animated.span, {
                                children: f.to((function(e) {
                                    return parseInt(e)
                                }))
                            }), "%"]
                        })]
                    }), (0, a.jsx)(r(), {
                        id: "3da9ad706526d3c9",
                        children: '.preloader.jsx-3da9ad706526d3c9{height:100vh;\nz-index:9999;\nposition:fixed;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\nwidth:100%;\ncontent:"";\nbackground-color:#FFEC00;\n-webkit-transition:opacity .4s ease-out .6s;\ntransition:opacity .4s ease-out .6s}\n.preloader_none.jsx-3da9ad706526d3c9{opacity:0;\npointer-events:none}\n.preloader__text.jsx-3da9ad706526d3c9{font-weight:700;\nfont-size:12px;\nline-height:20px;\ntext-align:center;\ntext-transform:uppercase}\n.preloader__img.jsx-3da9ad706526d3c9{-webkit-animation:preloaderImg 3s ease-in infinite;\nanimation:preloaderImg 3s ease-in infinite;\ndisplay:block;\nmargin-bottom:40px}\n@keyframes preloaderImg {0% {opacity:1}40% {opacity:.2}70% {opacity:1}100% {opacity:1}}'
                    })]
                })
            }
            var u = n(7294),
                m = n(7139),
                f = n.n(m);
            n(933), n(8056);

            function p(e) {
                var t = e.children,
                    n = e.header,
                    i = e.footer,
                    r = (0, c.I0)(),
                    o = (0, u.useRef)(null),
                    s = (0, u.useRef)([]),
                    l = (0, c.v9)((function(e) {
                        return e.common.sections
                    })),
                    _ = function() {
                        r(d.ic())
                    },
                    m = function() {
                        f().map(s.current, (function(e) {
                            var t = window.scrollY,
                                n = e.target.offsetTop - 200,
                                a = e.target.offsetTop + e.target.offsetHeight - 200;
                            t >= n && t < a && o.current !== e.target.getAttribute("id") && (o.current = e.target.getAttribute("id"), r(d.oC(o.current)))
                        }))
                    };
                return (0, u.useEffect)((function() {
                    s.current = l, m()
                }), [l]), (0, u.useEffect)((function() {
                    return m(), window.addEventListener("scroll", m), window.addEventListener("load", _),
                        function() {
                            window.removeEventListener("scroll", m), window.removeEventListener("load", _)
                        }
                }), []), (0, a.jsxs)("div", {
                    id: "site",
                    children: [(0, a.jsx)(h, {}), n && n, (0, a.jsx)("main", {
                        id: "site-main",
                        children: t
                    }), i && i]
                })
            }
        },
        182: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Ut
                }
            });
            var a = n(5893),
                i = n(9008),
                r = n(3165),
                o = n(7294),
                s = n(4184),
                l = n.n(s),
                c = n(3737),
                d = n(1043),
                _ = n(1645),
                h = n(2369),
                u = n(5988),
                m = n.n(u),
                f = n(217),
                p = n.n(f);

            function A(e) {
                var t = e.icon,
                    n = e.href,
                    i = e.alt;
                return (0, a.jsx)("li", {
                    className: p().item,
                    children: (0, a.jsx)("a", {
                        href: n,
                        className: p().link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: i,
                        children: t
                    })
                })
            }
            var g = [{
                    icon: (0, a.jsx)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, a.jsx)("path", {
                            d: "M20 3.92393C19.2563 4.25018 18.4638 4.46643 17.6375 4.57143C18.4875 4.06393 19.1363 3.26643 19.4413 2.30518C18.6488 2.77768 17.7738 3.11143 16.8413 3.29768C16.0888 2.49643 15.0163 2.00018 13.8463 2.00018C11.5763 2.00018 9.74875 3.84268 9.74875 6.10143C9.74875 6.42643 9.77625 6.73893 9.84375 7.03643C6.435 6.87018 3.41875 5.23643 1.3925 2.74768C-0.0565001 5.35843 1.5625 7.49893 2.6525 8.22768C1.99375 8.21518 1.3475 8.02393 0.8 7.72268C0.8 9.75793 2.22125 11.4152 4.085 11.7964C3.6775 11.9317 2.78725 12.0052 2.23375 11.8614C2.765 13.4852 4.2725 14.6789 6.065 14.7177C4.67 15.8089 2.61425 16.6984 0 16.4102C1.81625 17.5814 3.96875 18.2502 6.29 18.2502C13.835 18.2502 17.96 12.0002 17.96 6.58268C17.96 6.40143 17.9538 6.22643 17.945 6.05268C18.7588 5.47518 19.4425 4.75393 20 3.92393Z"
                        })
                    }),
                    link: "https://twitter.com/boxmints",
                    alt: "Twitter"
                }],
                x = "https://discord.gg/Ar2NPdkPC8";

            function b(e) {
                var t = e.list,
                    n = void 0 === t ? g : t,
                    i = e.className;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("ul", {
                        className: m().dynamic([
                            ["84e0ec6f0782fa4a", [n.length]]
                        ]) + " " + (l()(p().list, "social-list", i) || ""),
                        children: n.map((function(e, t) {
                            return (0, a.jsx)(A, {
                                href: e.link,
                                icon: e.icon,
                                alt: e.alt
                            }, t)
                        }))
                    }), (0, a.jsx)(m(), {
                        id: "84e0ec6f0782fa4a",
                        dynamic: [n.length],
                        children: ".social-list.__jsx-style-dynamic-selector{grid-template-columns:repeat(".concat(n.length, ", 1fr)}")
                    })]
                })
            }
            var w = n(5675),
                v = n(1664),
                y = 1280,
                j = 992,
                C = 768,
                N = 576,
                M = 360,
                k = {
                    src: "/_next/static/media/logo_second.c192a797.svg",
                    height: 60,
                    width: 181
                };

            function T() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(v.default, {
                        href: "/",
                        children: (0, a.jsx)("a", {
                            className: m().dynamic([
                                ["be45da7d193bc27c", [y, j, N, M]]
                            ]) + " logo",
                            children: (0, a.jsx)(w.default, {
                                src: k,
                                width: "180",
                                height: "60",
                                alt: "BoxMints",
                                title: "BoxMints"
                            })
                        })
                    }), (0, a.jsx)(m(), {
                        id: "be45da7d193bc27c",
                        dynamic: [y, j, N, M],
                        children: ".logo.__jsx-style-dynamic-selector{pointer-events:all}\n@media screen and (max-width:".concat(y, "px) {.logo.__jsx-style-dynamic-selector{width:150px;\nheight:50px}}\n@media screen and (max-width:").concat(j, "px) {.logo.__jsx-style-dynamic-selector{width:180px;\nheight:60px}}\n@media screen and (max-width:").concat(N, "px) {.logo.__jsx-style-dynamic-selector{width:150px;\nheight:50px}}\n@media screen and (max-width:").concat(M, "px) {.logo.__jsx-style-dynamic-selector{width:130px;\nheight:43px}}")
                    })]
                })
            }
            var S = n(7139),
                E = n.n(S),
                B = n(3768),
                R = n.n(B);

            function L(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        a = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), a.forEach((function(t) {
                        L(e, t, n[t])
                    }))
                }
                return e
            }

            function I(e) {
                var t = e.tagName,
                    n = void 0 === t ? "a" : t,
                    i = e.children,
                    r = e.href,
                    s = e.type,
                    c = e.icon,
                    d = e.alt,
                    _ = e.textStyle,
                    h = void 0 === _ ? "text-bold text-small text-uppercase" : _,
                    u = e.onClick,
                    m = void 0 === u ? function() {} : u,
                    f = n,
                    p = (0, o.useState)(!1),
                    A = p[0],
                    g = p[1],
                    x = (0, o.useState)(!1),
                    b = x[0],
                    v = x[1],
                    y = (0, o.useRef)(),
                    j = (0, o.useRef)(!1),
                    C = (0, o.useRef)(!1),
                    N = (0, o.useRef)(0).current,
                    M = {
                        className: l()(R().button, L({}, R().active, b)),
                        onMouseEnter: function() {
                            return !A && g(!0)
                        },
                        onMouseLeave: function() {
                            return A && g(!1)
                        },
                        onClick: m
                    },
                    k = {
                        className: l()(R().wrap, L({}, R()["wrap--icon"], c))
                    },
                    T = {
                        className: l()(h, R().text)
                    };
                return (0, o.useEffect)((function() {
                    j.current = A;
                    var e = function() {
                        var t = y.current,
                            n = null === t || void 0 === t ? void 0 : t.querySelectorAll("path");
                        n.length && (E().map(n, (function(e, t) {
                            var n = e.getTotalLength();
                            j.current ? N += 2 : N -= 2, N < 0 && (N = 0), N > 100 && (N = 100),
                                function(t) {
                                    t < 5 && (t = 0);
                                    var a = n - t / 100 * n;
                                    e.style.strokeDashoffset = a
                                }(N)
                        })), 100 === N ? C.current || v(!0) : C.current && v(!1), (j.current || 0 !== N) && requestAnimationFrame(e))
                    };
                    j.current && e()
                }), [A]), (0, o.useEffect)((function() {
                    C.current = b
                }), [b]), (0, o.useEffect)((function() {
                    var e = y.current.querySelectorAll("path");
                    E().map(e, (function(e, t) {
                        var n = e.getTotalLength();
                        e.style.strokeDasharray = "".concat(n, " ").concat(n), e.style.strokeDashoffset = n
                    }))
                }), []), r && (M.href = r), s && (M.type = s), (0, a.jsxs)(f, F({}, M, {
                    children: [(0, a.jsxs)("span", F({}, k, {
                        children: [(0, a.jsx)("span", F({}, T, {
                            children: i
                        })), c && (0, a.jsx)(w.default, {
                            width: "24",
                            height: "24",
                            src: c,
                            alt: d || "clockwise button icon"
                        })]
                    })), (0, a.jsx)("span", {
                        className: R().animations,
                        children: (0, a.jsxs)("svg", {
                            className: R().svg,
                            ref: y,
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, a.jsx)("path", {
                                className: R().svg__path_large,
                                d: "M90 1H135H150C166.016 1 179 13.9837 179 30C179 46.0163 166.016 59 150 59H30C13.9837 59 1 46.0163 1 30C1 13.9837 13.9837 1 30 1H45H90Z",
                                strokeWidth: "2"
                            }), (0, a.jsx)("path", {
                                className: R().svg__path_less,
                                d: "M90 1H155C168.255 1 179 11.7452 179 25C179 38.2548 168.255 49 155 49H25C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1H45H90Z",
                                strokeWidth: "2"
                            })]
                        })
                    })]
                }))
            }
            var O = n(6867),
                D = n(6155),
                H = n.n(D);

            function U(e) {
                var t = e.delay,
                    n = void 0 === t ? 200 : t,
                    i = e.minDuration,
                    r = void 0 === i ? 140 : i,
                    s = e.maxDuration,
                    l = void 0 === s ? 290 : s,
                    c = e.easing,
                    d = void 0 === c ? "linear" : c,
                    _ = (0, o.useRef)();
                return (0, o.useEffect)((function() {
                    var e = setInterval((function() {
                        var e, t = 70,
                            n = (null === (e = _.current) || void 0 === e ? void 0 : e.offsetHeight) || window.innerHeight,
                            a = Math.trunc(r * (n / 70)),
                            i = Math.trunc(l * (n / 70)),
                            o = O.ZP.float(a, i);
                        NaN !== o && (t = o);
                        var s = function(e) {
                            var t, n, a = 100,
                                i = (null === (t = _.current) || void 0 === t ? void 0 : t.offsetWidth) - 40,
                                r = O.ZP.float(a, i);
                            window.innerWidth <= N && (a = 40), NaN === r && (r = a);
                            var o = document.createElement("div");
                            return o.classList.add(H().banana), o.style.transition = "all ".concat(e, "ms ").concat(d), o.style.left = r + "px", null === (n = _.current) || void 0 === n || n.append(o), o
                        }(t);
                        setTimeout((function() {
                            return function(e, t) {
                                var n;
                                e.style.cssText = "\n      --next-step-position: ".concat(null === (n = _.current) || void 0 === n ? void 0 : n.offsetHeight, "px;\n      left: ").concat(e.style.left, ";\n      transition: ").concat(e.style.transition, ";\n    "), e.classList.add(H().banana_active), setTimeout((function() {
                                    return e.remove()
                                }), t)
                            }(s, t)
                        }), 0)
                    }), n);
                    return function() {
                        clearInterval(e)
                    }
                }), []), (0, a.jsx)("div", {
                    className: H().wrap,
                    ref: _
                })
            }

            function Z() {
                var e = (0, o.useState)([0, 0]),
                    t = e[0],
                    n = e[1];
                return o.useLayoutEffect((function() {
                    var e = function() {
                        n([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), t
            }
            o.useLayoutEffect = o.useEffect;
            var q = n(1063),
                V = n.n(q),
                W = {
                    src: "/_next/static/media/logout.62272109.svg",
                    height: 24,
                    width: 24
                };

            function G(e) {
                var t, n, i, r = e.section,
                    o = e.close,
                    s = (0, d.v9)((function(e) {
                        return e.common.currentSection
                    })),
                    c = l()(V()["table-dropdown__button"], (t = {}, n = V()["table-dropdown__button_active"], i = r.target.getAttribute("id") === s, n in t ? Object.defineProperty(t, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = i, t));
                return (0, a.jsx)("li", {
                    children: (0, a.jsx)("button", {
                        onClick: function(e) {
                            e.preventDefault(), window.scrollTo({
                                top: r.target.offsetTop - document.querySelector("header").offsetHeight,
                                behavior: "smooth"
                            }), o()
                        },
                        className: c,
                        children: r.name
                    })
                })
            }

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, i, r = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (l) {
                            s = !0, i = l
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return Y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e) {
                var t, n, i, r = e.toggled,
                    o = void 0 !== r && r,
                    s = e.close,
                    c = (0, d.v9)((function(e) {
                        return e.common.currentType
                    })),
                    _ = (0, d.v9)((function(e) {
                        return e.common.sections
                    })),
                    u = P(Z(), 2),
                    m = u[0],
                    f = (u[1], l()(V()["table-dropdown"], (t = {}, n = V()["table-dropdown_active"], i = o, n in t ? Object.defineProperty(t, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = i, t)));
                return (0, a.jsxs)("div", {
                    className: f,
                    children: [(0, a.jsx)(U, {}), (0, a.jsx)("div", {
                        className: V()["table-dropdown__wrap"],
                        children: (0, a.jsxs)(h.Z, {
                            children: [m <= N && (0, a.jsx)(a.Fragment, {
                                children: "connect" === c ? (0, a.jsx)(I, {
                                    href: "#",
                                    onClick: function(e) {
                                        return e.preventDefault()
                                    },
                                    children: "connect wallet"
                                }) : (0, a.jsx)(I, {
                                    icon: W,
                                    alt: "Logout",
                                    href: "#",
                                    onClick: function(e) {
                                        return e.preventDefault()
                                    },
                                    children: ""
                                })
                            }), (0, a.jsx)("ul", {
                                className: V()["table-dropdown__list"],
                                children: _.map((function(e, t) {
                                    return (0, a.jsx)(G, {
                                        close: s,
                                        section: e
                                    }, t)
                                }))
                            })]
                        })
                    })]
                })
            }
            var Q = n(5729),
                K = n.n(Q);

            function X(e) {
                var t, n, i, r = e.section,
                    o = (0, d.v9)((function(e) {
                        return e.common.currentSection
                    })),
                    s = l()(["text-small", "text-uppercase", "text-bold", K().button], (t = {}, n = K().button_active, i = r.target.getAttribute("id") === o, n in t ? Object.defineProperty(t, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = i, t));
                return (0, a.jsx)("li", {
                    children: (0, a.jsx)("button", {
                        onClick: function(e) {
                            e.preventDefault(), window.scrollTo({
                                top: r.target.offsetTop - document.querySelector("header").offsetHeight,
                                behavior: "smooth"
                            })
                        },
                        className: s,
                        children: (0, a.jsxs)("span", {
                            className: K().button__box,
                            children: [(0, a.jsx)("span", {
                                className: K().button__black,
                                children: r.name
                            }), (0, a.jsx)("span", {
                                className: K().button__cherry,
                                children: r.name
                            })]
                        })
                    })
                })
            }

            function J(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function $() {
                var e = (0, d.v9)((function(e) {
                        return e.common.sections
                    })),
                    t = {
                        className: l()(K().list, "main-menu")
                    };
                return !!e.length && (0, a.jsxs)("ul", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), a.forEach((function(t) {
                            J(e, t, n[t])
                        }))
                    }
                    return e
                }({}, t, {
                    className: m().dynamic([
                        ["a333e3ec93636d7a", [e.length]]
                    ]) + " " + (t && null != t.className && t.className || ""),
                    children: [e.map((function(e, t) {
                        return (0, a.jsx)(X, {
                            section: e
                        }, t)
                    })), (0, a.jsx)(m(), {
                        id: "a333e3ec93636d7a",
                        dynamic: [e.length],
                        children: ".main-menu.__jsx-style-dynamic-selector{grid-template-columns:repeat(".concat(e.length, ", max-content)}")
                    })]
                }))
            }
            var ee = n(3245),
                te = n.n(ee);

            function ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function ae(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, i, r = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (l) {
                            s = !0, i = l
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return ne(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ne(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ie() {
                var e = (0, d.I0)(),
                    t = (0, d.v9)((function(e) {
                        return e.common.currentType
                    })),
                    n = (0, o.useState)(!1),
                    i = n[0],
                    r = n[1],
                    s = ae(Z(), 2),
                    u = s[0],
                    m = (s[1], l()(te().header)),
                    f = function() {
                        document.body.style.overflow = i ? "visible" : "hidden", r(!i)
                    };
                return (0, o.useEffect)((function() {
                    e(_.K0(i))
                }), [i]), (0, a.jsxs)("header", {
                    className: m,
                    children: [(0, a.jsx)(h.Z, {
                        type: "fluid",
                        children: (0, a.jsxs)("div", {
                            className: te().header__row,
                            children: [u <= j && u > N && (0, a.jsx)("button", {
                                onClick: f,
                                className: te().header__ham,
                                children: (0, a.jsx)(c.o, {
                                    direction: "right",
                                    toggled: i,
                                    size: 24
                                })
                            }), (0, a.jsx)("div", {
                                className: te().header__column_logo,
                                children: (0, a.jsx)(T, {})
                            }), u > j && (0, a.jsx)("div", {
                                className: te().header__column_menu,
                                children: (0, a.jsx)($, {})
                            }), (0, a.jsx)("div", {
                                className: te().header__column_contacts,
                                children: (0, a.jsxs)("div", {
                                    className: te().header__contacts,
                                    children: [(0, a.jsx)(b, {}), u > N && (0, a.jsx)(a.Fragment, {
                                        children: "connect" === t ? (0, a.jsx)(I, {
                                            href: "#",
                                            onClick: function(e) {
                                                return e.preventDefault()
                                            },
                                            children: "connect wallet"
                                        }) : (0, a.jsx)(I, {
                                            icon: W,
                                            alt: "Logout",
                                            href: "#",
                                            onClick: function(e) {
                                                return e.preventDefault()
                                            },
                                            children: ""
                                        })
                                    })]
                                })
                            }), u <= N && (0, a.jsx)("button", {
                                onClick: f,
                                className: te().header__ham,
                                children: (0, a.jsx)(c.o, {
                                    direction: "left",
                                    toggled: i,
                                    size: 24
                                })
                            })]
                        })
                    }), u <= j && (0, a.jsx)(z, {
                        toggled: i,
                        close: f
                    })]
                })
            }

            function re(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function oe(e) {
                var t = e.id,
                    n = e.menuTitle,
                    i = e.children,
                    r = e.className,
                    s = e.color,
                    c = void 0 === s ? "transparent" : s,
                    h = e.tagName,
                    u = void 0 === h ? "section" : h,
                    m = e.onMouseDown,
                    f = void 0 === m ? function() {} : m,
                    p = e.onMouseMove,
                    A = void 0 === p ? function() {} : p,
                    g = u,
                    x = (0, o.useRef)(),
                    b = (0, d.I0)(),
                    w = (0, d.v9)((function(e) {
                        return e.common.sections
                    })),
                    v = {
                        className: l()(r, "section"),
                        id: t,
                        onMouseDown: f,
                        onMouseMove: A,
                        style: {
                            backgroundColor: c
                        }
                    };
                return (0, o.useEffect)((function() {
                    ! function() {
                        var e = !1,
                            t = {
                                target: x.current,
                                name: n
                            };
                        w.map((function(n, a) {
                            n.menuTitle === t.menuTitle && (e = !0)
                        })), n && !e && b(_.by(t))
                    }()
                }), []), (0, a.jsx)(g, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), a.forEach((function(t) {
                            re(e, t, n[t])
                        }))
                    }
                    return e
                }({}, v, {
                    ref: x,
                    children: i
                }))
            }

            function se(e) {
                var t, n, i, r = e.className,
                    s = e.to,
                    c = e.children,
                    d = e.hoverClass,
                    _ = void 0 === d ? "scroll-to-button_active" : d,
                    h = (0, o.useState)(!1),
                    u = h[0],
                    m = h[1],
                    f = l()(r, (i = u, (n = _) in(t = {}) ? Object.defineProperty(t, n, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = i, t)),
                    p = function() {
                        return m(!u)
                    };
                return (0, a.jsx)("button", {
                    className: f,
                    onClick: function() {
                        var e = document.getElementById(s);
                        window.scrollTo({
                            top: e.offsetTop,
                            behavior: "smooth"
                        })
                    },
                    onMouseEnter: p,
                    onMouseLeave: p,
                    children: c
                })
            }
            var le = n(9238),
                ce = n.n(le);

            function de(e) {
                var t = e.size,
                    n = void 0 === t ? 40 : t,
                    i = e.color,
                    r = void 0 === i ? "#B0692B" : i,
                    o = e.children,
                    s = e.className;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("span", {
                        className: m().dynamic([
                            ["b6faf4361f0e8c26", [n, n]]
                        ]) + " " + (l()(ce().wrap, "polyhedron", s) || ""),
                        children: [(0, a.jsx)("span", {
                            className: m().dynamic([
                                ["b6faf4361f0e8c26", [n, n]]
                            ]) + " " + (ce().box || ""),
                            children: o
                        }), (0, a.jsx)("svg", {
                            width: n,
                            height: n,
                            viewBox: "0 0 300 300",
                            fill: r,
                            xmlns: "http://www.w3.org/2000/svg",
                            className: m().dynamic([
                                ["b6faf4361f0e8c26", [n, n]]
                            ]) + " " + (l()(ce().polyhedron, "polyhedron__icon") || ""),
                            children: (0, a.jsx)("path", {
                                d: "M150 0L225 20.0962L279.904 75L300 150L279.904 225L225 279.904L150 300L75 279.904L20.0962 225L0 150L20.0962 75L75 20.0962L150 0Z",
                                className: m().dynamic([
                                    ["b6faf4361f0e8c26", [n, n]]
                                ])
                            })
                        })]
                    }), (0, a.jsx)(m(), {
                        id: "b6faf4361f0e8c26",
                        dynamic: [n, n],
                        children: ".polyhedron.__jsx-style-dynamic-selector{width:".concat(n, "px;\nheight:").concat(n, "px}")
                    })]
                })
            }
            var _e = {
                    src: "/_next/static/media/plus.3cc2437a.svg",
                    height: 20,
                    width: 20
                },
                he = {
                    src: "/_next/static/media/minus.e20a8438.svg",
                    height: 20,
                    width: 20
                },
                ue = n(9791),
                me = n.n(ue);

            function fe(e) {
                var t = e.onClick,
                    n = e.icon,
                    i = e.alt,
                    r = e.className,
                    s = (0, o.useState)(!1),
                    l = s[0],
                    c = s[1],
                    d = l ? "#121212" : "#B0692B",
                    _ = function() {
                        return c(!l)
                    },
                    h = i.replace(" ", "-").toLowerCase();
                return (0, a.jsx)("a", {
                    href: "#" + h,
                    onClick: function(e) {
                        e.preventDefault(), t(e)
                    },
                    className: r,
                    onMouseEnter: _,
                    onMouseLeave: _,
                    children: (0, a.jsx)(de, {
                        color: d,
                        children: (0, a.jsx)(w.default, {
                            width: "20",
                            height: "20",
                            src: n,
                            alt: i
                        })
                    })
                })
            }

            function pe(e) {
                var t = e.min,
                    n = void 0 === t ? 1 : t,
                    i = e.max,
                    r = void 0 === i ? 10 : i,
                    s = e.value,
                    l = void 0 === s ? 1 : s,
                    c = e.onChange,
                    d = e.required,
                    _ = e.name,
                    h = (0, o.useState)(l),
                    u = h[0],
                    m = h[1];
                return (0, o.useEffect)((function() {
                    "function" === typeof c && c(u)
                }), [u]), (0, a.jsxs)("span", {
                    className: me().wrap,
                    children: [u > n && (0, a.jsx)(fe, {
                        icon: he,
                        onClick: function() {
                            return u > n && m(u - 1)
                        },
                        className: me().button__minus,
                        alt: "Minus"
                    }), (0, a.jsx)(de, {
                        color: "#fff",
                        size: "130",
                        children: (0, a.jsx)("input", {
                            type: "number",
                            autoComplete: "off",
                            value: u,
                            name: _,
                            required: d,
                            onChange: function(e) {
                                var t = e.target.value;
                                return t > r && "" !== t ? m(r) : t < n && "" !== t ? m(n) : void m(t)
                            },
                            className: me().field
                        })
                    }), u < r && (0, a.jsx)(fe, {
                        icon: _e,
                        onClick: function() {
                            return u < r && m(u + 1)
                        },
                        className: me().button__plus,
                        alt: "Plus"
                    })]
                })
            }
            var Ae = n(9436),
                ge = n.n(Ae);

            function xe(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function be(e) {
                var t = e.title,
                    n = e.description,
                    i = e.image,
                    r = void 0 === i ? "/img/button-ape.png" : i,
                    o = e.onClick,
                    s = e.tagName,
                    c = void 0 === s ? "button" : s,
                    d = e.href,
                    _ = e.type,
                    h = e.alt,
                    u = void 0 === h ? "Ape button" : h,
                    m = e.className,
                    f = c,
                    p = {
                        onClick: o,
                        className: l()(ge().button, m)
                    },
                    A = l()(ge().button__title, xe({}, ge().button__title_alone, !n)),
                    g = l()(ge().button__content, xe({}, ge().button__content_alone, !n));
                return d && (p.href = d), _ && (p.type = _), (0, a.jsxs)(f, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" === typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        })))), a.forEach((function(t) {
                            xe(e, t, n[t])
                        }))
                    }
                    return e
                }({}, p, {
                    children: [(0, a.jsxs)("span", {
                        className: g,
                        children: [(0, a.jsx)("span", {
                            className: A,
                            children: t
                        }), n && (0, a.jsx)("span", {
                            className: ge().button__desc,
                            children: n
                        })]
                    }), (0, a.jsx)("span", {
                        className: ge().button__img,
                        children: (0, a.jsx)(w.default, {
                            width: "190",
                            height: "160",
                            src: r,
                            alt: u
                        })
                    }), (0, a.jsx)("span", {
                        className: ge().button__bg
                    })]
                }))
            }
            var we = n(9530),
                ve = n.n(we);

            function ye() {
                return (0, a.jsx)("div", {
                    className: ve().hero__content,
                    children: (0, a.jsxs)("form", {
                        className: ve()["hero-box"],
                        children: [(0, a.jsx)("div", {
                            className: ve()["hero-box__flex-end"],
                            children: (0, a.jsxs)("h2", {
                                className: l()(["h2", "text-uppercase", ve()["hero-box__title"]]),
                                children: ["mint live", (0, a.jsx)("span", {
                                    className: "text-cherry",
                                    children: " now!"
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_one"],
                            children: (0, a.jsx)("svg", {
                                width: "216",
                                height: "62",
                                viewBox: "0 0 216 62",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M140.998 41.7661C109.736 39.6474 77.4839 39.0928 62.9376 40.0019L63.0624 41.9981C77.48 41.097 109.631 41.6449 140.863 43.7615L140.998 41.7661ZM62.9376 40.0019C47.077 40.9932 32.4835 44.5153 21.3419 48.5483C15.7715 50.5647 11.0478 52.7147 7.45082 54.7504C3.90214 56.7589 1.30972 58.7326 0.16795 60.4453L1.83205 61.5547C2.69028 60.2674 4.90863 58.4873 8.43592 56.491C11.9149 54.522 16.5324 52.4163 22.0227 50.4289C33.0027 46.4543 47.4092 42.9764 63.0624 41.9981L62.9376 40.0019ZM214 0C214 8.82996 211.672 15.9582 207.668 21.6646C203.658 27.3789 197.927 31.7245 191.038 34.9125C177.236 41.2998 158.911 42.98 140.998 41.7661L140.863 43.7615C158.931 44.986 177.641 43.316 191.878 36.7276C199.009 33.4278 205.049 28.8792 209.305 22.8134C213.567 16.7396 216 9.20171 216 0H214Z",
                                    fill: "#121212"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: ve().hero__desc,
                            children: "The core team is born in Los Angeles, CA - a team of human beans with backgrounds in crypto, technology, and gaming working to build a decentralized brand of the future."
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_two"],
                            children: (0, a.jsx)("svg", {
                                width: "203",
                                height: "50",
                                viewBox: "0 0 203 50",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M104 25L104.191 25.9816L104 25ZM0.156842 1.53767C11.368 19.1188 29.1297 26.8333 48.1547 29.3524C67.1624 31.8693 87.5397 29.2193 104.191 25.9816L103.809 24.0184C87.2228 27.2435 67.1001 29.8436 48.4172 27.3697C29.7516 24.8982 12.632 17.3812 1.84316 0.462334L0.156842 1.53767ZM104.191 25.9816C122.016 22.5157 145.117 23.9964 164.393 28.5977C174.026 30.8973 182.653 33.9644 189.158 37.5478C195.716 41.16 199.9 45.1763 201.036 49.2676L202.964 48.7324C201.6 43.8237 196.784 39.465 190.123 35.796C183.41 32.0981 174.599 28.9777 164.857 26.6523C145.383 22.0036 121.984 20.4843 103.809 24.0184L104.191 25.9816Z",
                                    fill: "#121212"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__flex-end"],
                            children: (0, a.jsxs)("div", {
                                className: ve()["hero-box__number-wrap"],
                                children: [(0, a.jsx)(pe, {}), (0, a.jsxs)("span", {
                                    className: ve()["hero-box__number-text"],
                                    children: [(0, a.jsx)("span", {
                                        className: "text-semibold",
                                        children: "1 NFT BoxMints costs 0.1 ETH "
                                    }), "(Max 10)"]
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_three"],
                            children: (0, a.jsx)("svg", {
                                width: "15",
                                height: "26",
                                viewBox: "0 0 15 26",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M14 0.5C10.5 15 7.5 19 1.5 24.5",
                                    stroke: "#121212",
                                    strokeWidth: "2"
                                })
                            })
                        }), (0, a.jsx)(be, {
                            title: "connect wallet",
                            description: "You need a MetaMask wallet to mint the BoxMints",
                            tagName: "a",
                            href: "#",
                            onClick: function(e) {
                                return e.preventDefault()
                            }
                        })]
                    })
                })
            }

            function je() {
                return (0, a.jsx)("div", {
                    className: ve().hero__content,
                    children: (0, a.jsxs)("form", {
                        className: ve()["hero-box"],
                        children: [(0, a.jsx)("div", {
                            className: ve()["hero-box__flex-end"],
                            children: (0, a.jsxs)("h2", {
                                className: l()(["h2", "text-uppercase", ve()["hero-box__title"]]),
                                children: ["mint live", (0, a.jsx)("span", {
                                    className: "text-cherry",
                                    children: " now!"
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_one"],
                            children: (0, a.jsx)("svg", {
                                width: "216",
                                height: "62",
                                viewBox: "0 0 216 62",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M140.998 41.7661C109.736 39.6474 77.4839 39.0928 62.9376 40.0019L63.0624 41.9981C77.48 41.097 109.631 41.6449 140.863 43.7615L140.998 41.7661ZM62.9376 40.0019C47.077 40.9932 32.4835 44.5153 21.3419 48.5483C15.7715 50.5647 11.0478 52.7147 7.45082 54.7504C3.90214 56.7589 1.30972 58.7326 0.16795 60.4453L1.83205 61.5547C2.69028 60.2674 4.90863 58.4873 8.43592 56.491C11.9149 54.522 16.5324 52.4163 22.0227 50.4289C33.0027 46.4543 47.4092 42.9764 63.0624 41.9981L62.9376 40.0019ZM214 0C214 8.82996 211.672 15.9582 207.668 21.6646C203.658 27.3789 197.927 31.7245 191.038 34.9125C177.236 41.2998 158.911 42.98 140.998 41.7661L140.863 43.7615C158.931 44.986 177.641 43.316 191.878 36.7276C199.009 33.4278 205.049 28.8792 209.305 22.8134C213.567 16.7396 216 9.20171 216 0H214Z",
                                    fill: "#121212"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: ve().hero__desc,
                            children: "The core team is born in Los Angeles, CA - a team of human beans with backgrounds in crypto, technology, and gaming working to build a decentralized brand of the future."
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_two"],
                            children: (0, a.jsx)("svg", {
                                width: "203",
                                height: "50",
                                viewBox: "0 0 203 50",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M104 25L104.191 25.9816L104 25ZM0.156842 1.53767C11.368 19.1188 29.1297 26.8333 48.1547 29.3524C67.1624 31.8693 87.5397 29.2193 104.191 25.9816L103.809 24.0184C87.2228 27.2435 67.1001 29.8436 48.4172 27.3697C29.7516 24.8982 12.632 17.3812 1.84316 0.462334L0.156842 1.53767ZM104.191 25.9816C122.016 22.5157 145.117 23.9964 164.393 28.5977C174.026 30.8973 182.653 33.9644 189.158 37.5478C195.716 41.16 199.9 45.1763 201.036 49.2676L202.964 48.7324C201.6 43.8237 196.784 39.465 190.123 35.796C183.41 32.0981 174.599 28.9777 164.857 26.6523C145.383 22.0036 121.984 20.4843 103.809 24.0184L104.191 25.9816Z",
                                    fill: "#121212"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__flex-end"],
                            children: (0, a.jsxs)("div", {
                                className: ve()["hero-box__number-wrap"],
                                children: [(0, a.jsx)(pe, {}), (0, a.jsxs)("span", {
                                    className: ve()["hero-box__number-text"],
                                    children: [(0, a.jsx)("span", {
                                        className: "text-semibold",
                                        children: "1 NFT BoxMints costs 0.1 ETH "
                                    }), "(Max 10)"]
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_three"],
                            children: (0, a.jsx)("svg", {
                                width: "15",
                                height: "26",
                                viewBox: "0 0 15 26",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M14 0.5C10.5 15 7.5 19 1.5 24.5",
                                    stroke: "#121212",
                                    strokeWidth: "2"
                                })
                            })
                        }), (0, a.jsx)(be, {
                            title: "click buy to mint",
                            description: "Available 3, 546 Ape\u2019s",
                            tagName: "a",
                            href: "#",
                            onClick: function(e) {
                                return e.preventDefault()
                            }
                        })]
                    })
                })
            }

            function Ce() {
                return (0, a.jsx)("div", {
                    className: ve().hero__content,
                    children: (0, a.jsxs)("form", {
                        className: ve()["hero-box"],
                        children: [(0, a.jsx)("div", {
                            className: ve()["hero-box__flex-end"],
                            children: (0, a.jsxs)("h2", {
                                className: l()(["h2", "text-uppercase", ve()["hero-box__title"]]),
                                children: ["mint live", (0, a.jsx)("span", {
                                    className: "text-cherry",
                                    children: " now!"
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_one"],
                            children: (0, a.jsx)("svg", {
                                width: "216",
                                height: "62",
                                viewBox: "0 0 216 62",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M140.998 41.7661C109.736 39.6474 77.4839 39.0928 62.9376 40.0019L63.0624 41.9981C77.48 41.097 109.631 41.6449 140.863 43.7615L140.998 41.7661ZM62.9376 40.0019C47.077 40.9932 32.4835 44.5153 21.3419 48.5483C15.7715 50.5647 11.0478 52.7147 7.45082 54.7504C3.90214 56.7589 1.30972 58.7326 0.16795 60.4453L1.83205 61.5547C2.69028 60.2674 4.90863 58.4873 8.43592 56.491C11.9149 54.522 16.5324 52.4163 22.0227 50.4289C33.0027 46.4543 47.4092 42.9764 63.0624 41.9981L62.9376 40.0019ZM214 0C214 8.82996 211.672 15.9582 207.668 21.6646C203.658 27.3789 197.927 31.7245 191.038 34.9125C177.236 41.2998 158.911 42.98 140.998 41.7661L140.863 43.7615C158.931 44.986 177.641 43.316 191.878 36.7276C199.009 33.4278 205.049 28.8792 209.305 22.8134C213.567 16.7396 216 9.20171 216 0H214Z",
                                    fill: "#121212"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: ve().hero__desc,
                            children: "The core team is born in Los Angeles, CA - a team of human beans with backgrounds in crypto, technology, and gaming working to build a decentralized brand of the future."
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_two"],
                            children: (0, a.jsx)("svg", {
                                width: "203",
                                height: "50",
                                viewBox: "0 0 203 50",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M104 25L104.191 25.9816L104 25ZM0.156842 1.53767C11.368 19.1188 29.1297 26.8333 48.1547 29.3524C67.1624 31.8693 87.5397 29.2193 104.191 25.9816L103.809 24.0184C87.2228 27.2435 67.1001 29.8436 48.4172 27.3697C29.7516 24.8982 12.632 17.3812 1.84316 0.462334L0.156842 1.53767ZM104.191 25.9816C122.016 22.5157 145.117 23.9964 164.393 28.5977C174.026 30.8973 182.653 33.9644 189.158 37.5478C195.716 41.16 199.9 45.1763 201.036 49.2676L202.964 48.7324C201.6 43.8237 196.784 39.465 190.123 35.796C183.41 32.0981 174.599 28.9777 164.857 26.6523C145.383 22.0036 121.984 20.4843 103.809 24.0184L104.191 25.9816Z",
                                    fill: "#121212"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__flex-end"],
                            children: (0, a.jsxs)("div", {
                                className: ve()["hero-box__number-wrap"],
                                children: [(0, a.jsx)(pe, {}), (0, a.jsxs)("span", {
                                    className: ve()["hero-box__number-text"],
                                    children: [(0, a.jsx)("span", {
                                        className: "text-semibold",
                                        children: "1 NFT BoxMints costs 0.1 ETH "
                                    }), "(Max 10)"]
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_three"],
                            children: (0, a.jsx)("svg", {
                                width: "15",
                                height: "26",
                                viewBox: "0 0 15 26",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M14 0.5C10.5 15 7.5 19 1.5 24.5",
                                    stroke: "#121212",
                                    strokeWidth: "2"
                                })
                            })
                        }), (0, a.jsx)(be, {
                            title: "Confirm transaction in wallet",
                            tagName: "a",
                            href: "#",
                            onClick: function(e) {
                                return e.preventDefault()
                            }
                        })]
                    })
                })
            }
            n(3751);

            function Ne(e) {
                e.time, e.date;
                return (0, a.jsx)("div", {
                    className: ve().hero__content,
                    children: (0, a.jsxs)("div", {
                        className: ve()["hero-box"],
                        children: [(0, a.jsx)("div", {
                            className: ve()["hero-box__flex-end"],
                            children: (0, a.jsxs)("h2", {
                                className: l()(["h2", "text-uppercase", ve()["hero-box__title"]]),
                                children: ["Mint", (0, a.jsx)("span", {
                                    className: "text-cherry cherryry",
                                    children: " soon!"
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_one"],
                            children: (0, a.jsx)("svg", {
                                width: "216",
                                height: "62",
                                viewBox: "0 0 216 62",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M140.998 41.7661C109.736 39.6474 77.4839 39.0928 62.9376 40.0019L63.0624 41.9981C77.48 41.097 109.631 41.6449 140.863 43.7615L140.998 41.7661ZM62.9376 40.0019C47.077 40.9932 32.4835 44.5153 21.3419 48.5483C15.7715 50.5647 11.0478 52.7147 7.45082 54.7504C3.90214 56.7589 1.30972 58.7326 0.16795 60.4453L1.83205 61.5547C2.69028 60.2674 4.90863 58.4873 8.43592 56.491C11.9149 54.522 16.5324 52.4163 22.0227 50.4289C33.0027 46.4543 47.4092 42.9764 63.0624 41.9981L62.9376 40.0019ZM214 0C214 8.82996 211.672 15.9582 207.668 21.6646C203.658 27.3789 197.927 31.7245 191.038 34.9125C177.236 41.2998 158.911 42.98 140.998 41.7661L140.863 43.7615C158.931 44.986 177.641 43.316 191.878 36.7276C199.009 33.4278 205.049 28.8792 209.305 22.8134C213.567 16.7396 216 9.20171 216 0H214Z",
                                    fill: "#121212"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: ve().hero__desc,
                            children: "The BoxLabz will be releasing the BoxMints NFT on an undisclosed date. $HEADZ token which will be the community token of the BoxLabz."
                        })]
                    })
                })
            }

            function Me() {
                return (0, a.jsx)("div", {
                    className: ve().hero__content,
                    children: (0, a.jsxs)("div", {
                        className: ve()["hero-box"],
                        children: [(0, a.jsx)("div", {
                            className: ve()["hero-box__flex-end"],
                            children: (0, a.jsxs)("h2", {
                                className: l()(["h2", "text-uppercase", ve()["hero-box__title"], ve()["hero-box__title_fluid"]]),
                                children: ["sold", (0, a.jsx)("span", {
                                    className: "text-cherry",
                                    children: " out!"
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_one"],
                            children: (0, a.jsx)("svg", {
                                width: "216",
                                height: "62",
                                viewBox: "0 0 216 62",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M140.998 41.7661C109.736 39.6474 77.4839 39.0928 62.9376 40.0019L63.0624 41.9981C77.48 41.097 109.631 41.6449 140.863 43.7615L140.998 41.7661ZM62.9376 40.0019C47.077 40.9932 32.4835 44.5153 21.3419 48.5483C15.7715 50.5647 11.0478 52.7147 7.45082 54.7504C3.90214 56.7589 1.30972 58.7326 0.16795 60.4453L1.83205 61.5547C2.69028 60.2674 4.90863 58.4873 8.43592 56.491C11.9149 54.522 16.5324 52.4163 22.0227 50.4289C33.0027 46.4543 47.4092 42.9764 63.0624 41.9981L62.9376 40.0019ZM214 0C214 8.82996 211.672 15.9582 207.668 21.6646C203.658 27.3789 197.927 31.7245 191.038 34.9125C177.236 41.2998 158.911 42.98 140.998 41.7661L140.863 43.7615C158.931 44.986 177.641 43.316 191.878 36.7276C199.009 33.4278 205.049 28.8792 209.305 22.8134C213.567 16.7396 216 9.20171 216 0H214Z",
                                    fill: "#121212"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: ve().hero__desc,
                            children: "The core team is born in Los Angeles, CA - a team of human beans with backgrounds in crypto, technology, and gaming working to build a decentralized brand of the future."
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_two"],
                            children: (0, a.jsx)("svg", {
                                width: "203",
                                height: "50",
                                viewBox: "0 0 203 50",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M104 25L104.191 25.9816L104 25ZM0.156842 1.53767C11.368 19.1188 29.1297 26.8333 48.1547 29.3524C67.1624 31.8693 87.5397 29.2193 104.191 25.9816L103.809 24.0184C87.2228 27.2435 67.1001 29.8436 48.4172 27.3697C29.7516 24.8982 12.632 17.3812 1.84316 0.462334L0.156842 1.53767ZM104.191 25.9816C122.016 22.5157 145.117 23.9964 164.393 28.5977C174.026 30.8973 182.653 33.9644 189.158 37.5478C195.716 41.16 199.9 45.1763 201.036 49.2676L202.964 48.7324C201.6 43.8237 196.784 39.465 190.123 35.796C183.41 32.0981 174.599 28.9777 164.857 26.6523C145.383 22.0036 121.984 20.4843 103.809 24.0184L104.191 25.9816Z",
                                    fill: "#121212"
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__flex-end"],
                            children: (0, a.jsxs)("div", {
                                className: l()(ve()["hero-box__number-wrap"], ve()["hero-box__number-wrap_sold"]),
                                children: [(0, a.jsx)("span", {
                                    className: ve()["hero-box__poly"],
                                    children: (0, a.jsxs)(de, {
                                        color: "#fff",
                                        size: 130,
                                        children: [(0, a.jsx)("span", {
                                            className: ve()["hero-box__poly-title"],
                                            children: "5k"
                                        }), (0, a.jsx)("span", {
                                            className: ve()["hero-box__poly-desc"],
                                            children: "minted"
                                        })]
                                    })
                                }), (0, a.jsx)("span", {
                                    className: ve()["hero-box__number-text"]
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: ve()["hero-box__line_three"],
                            children: (0, a.jsx)("svg", {
                                width: "15",
                                height: "26",
                                viewBox: "0 0 15 26",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, a.jsx)("path", {
                                    d: "M14 0.5C10.5 15 7.5 19 1.5 24.5",
                                    stroke: "#121212",
                                    strokeWidth: "2"
                                })
                            })
                        }), (0, a.jsx)(be, {
                            title: "buy on opensea",
                            description: "Sold Out",
                            tagName: "a",
                            href: "#",
                            onClick: function(e) {
                                return e.preventDefault()
                            }
                        })]
                    })
                })
            }
            var ke = {
                src: "/_next/static/media/arrow-down.5e217d21.svg",
                height: 30,
                width: 20
            };

            function Te() {
                var e = (0, d.v9)((function(e) {
                        return e.common.currentType
                    })),
                    t = l()(["h1", "h1--large", "text-white", "text-uppercase", ve().hero__title]);
                return (0, a.jsxs)(oe, {
                    className: ve().hero,
                    menuTitle: "presale",
                    color: "#FFEC00",
                    id: "hero",
                    children: [(0, a.jsxs)("h1", {
                        className: t,
                        children: [(0, a.jsx)("span", {
                            children: "this is"
                        }), (0, a.jsx)("span", {
                            children: "$BoxMints"
                        })]
                    }), (0, a.jsx)(U, {}), (0, a.jsx)(h.Z, {
                        type: "large",
                        children: (0, a.jsxs)("div", {
                            className: ve().hero__row,
                            children: [(0, a.jsx)("div", {
                                className: ve().hero__img,
                                children: (0, a.jsx)(w.default, {
                                    width: "870",
                                    height: "980",
                                    src: "/_next/static/media/bottom.svg",
                                    alt: "This is $BoxMints"
                                })
                            }), "connect" === e && (0, a.jsx)(ye, {}), "buy" === e && (0, a.jsx)(je, {}), "confirm" === e && (0, a.jsx)(Ce, {}), "soon" === e && (0, a.jsx)(Ne, {
                                date: new Date("3 September 2022 10:00:00"),
                                time: "10:00 AM"
                            }), "sold" === e && (0, a.jsx)(Me, {})]
                        })
                    }), (0, a.jsx)(se, {
                        to: "about",
                        className: ve()["hero-scroll"],
                        hoverClass: ve()["hero-scroll_active"],
                        children: (0, a.jsx)("span", {
                            className: ve()["hero-scroll__img"],
                            children: (0, a.jsx)(w.default, {
                                height: "30",
                                width: "20",
                                src: ke,
                                alt: "Scroll down"
                            })
                        })
                    })]
                })
            }
            var Se = n(8352),
                Ee = n(965),
                Be = n(3893),
                Re = n.n(Be);

            function Le(e) {
                var t = e.img,
                    n = e.alt,
                    i = e.number,
                    r = "var(--position-y-last)",
                    o = l()("swiper-lazy", Re()["about-slider__img"], "about-slider-image"),
                    s = i % 4;
                return 1 !== s && 3 !== s || (r = "var(--position-y-middle)"), 2 === s && (r = "var(--position-y-initial)"), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("img", {
                        width: "345",
                        height: "345",
                        "data-src": t,
                        alt: n,
                        className: m().dynamic([
                            ["1512cd89b9e1ec5c", [r, C]]
                        ]) + " " + (o || "")
                    }), (0, a.jsx)("div", {
                        className: m().dynamic([
                            ["1512cd89b9e1ec5c", [r, C]]
                        ]) + " " + (l()("swiper-lazy-preloader", Re()["about-slider__loader"]) || "")
                    }), (0, a.jsx)(m(), {
                        id: "1512cd89b9e1ec5c",
                        dynamic: [r, C],
                        children: ".swiper-lazy-loaded.__jsx-style-dynamic-selector{opacity:1}\n.about-slider-image.__jsx-style-dynamic-selector{--position-y-last: 40px;\n--position-y-middle: 20px;\n--position-y-initial: 0px;\n-webkit-transform:translateY(".concat(r, ");\n-moz-transform:translateY(").concat(r, ");\n-ms-transform:translateY(").concat(r, ");\ntransform:translateY(").concat(r, ")}\n@media screen and (max-width:").concat(C, "px) {.about-slider-image.__jsx-style-dynamic-selector{--position-y-last: 30px;\n--position-y-middle: 15px}}")
                    })]
                })
            }

            function Fe(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function Ie(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Oe(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, i, r = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (l) {
                            s = !0, i = l
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return Fe(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Fe(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var De = [{
                
            }];

            function He(e) {
                var t, n = e.list,
                    i = void 0 === n ? De : n,
                    r = 4.5,
                    o = Oe(Z(), 2),
                    s = o[0];
                o[1];
                return s >= C && (r = 9), s >= y && (r = 11), (0, a.jsx)(Se.tq, {
                    
                  
                })
            }
            var Ue = {
                    src: "/_next/static/media/glasses.svg",
                    height: 140,
                    width: 140,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXFiSF3GIKJuQGJfOVleNVR8L22WQH96O3KFNnqhN4ZmPGJ6NGdENUA3PDhYO1FPQE/Lptb9AAAADnRSTlMA+A+PwahcJlZ8Qeg14pSEDEMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAzSURBVAiZY2Bg52GAABZ+LjDNxMvHyAZmsTJyc7JDxBjY+FkhTGY+AU4wg4OFA6oTSAEAIPcA13gcJmsAAAAASUVORK5CYII="
                },
                Ze = {
                    src: "/_next/static/media/neck.51f19b50.svg",
                    height: 177,
                    width: 260,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEVMaXF+ZTltVjJ0XzmHbT6xjkzAmFJwWTJ1XTa5kk5zXDWtjk+nhkpVOB7PddGGAAAADnRSTlMAJ28TgqLoQlu3qzWtC1Ir1fgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAApSURBVAiZHcfJAQAgCMTALKB49V+v4msS3BJQAMOkcGpt7RJOb1/NFxcIhQBpK0ddNQAAAABJRU5ErkJggg=="
                },
                qe = {
                    src: "/_next/static/media/smoke.svg",
                    height: 160,
                    width: 160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXGVkY6IWjiRZkJqRC17enmtpaJWTkuZkYeHc2V+Vj/BwsSSj46+vr1xPBOinZyzq6ksGMw8AAAAEXRSTlMAdltuFjrEB2UsRmxGinyC9vSGl20AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVAiZY2BgYGflYQADVkZ+djCDl4MRwmBjE+AGM1g4OTggihj4WCA0MxeE5mQCUQAexgDAjoZWiAAAAABJRU5ErkJggg=="
                };

            function Ve() {
                return (0, a.jsxs)(oe, {
                    menuTitle: "About",
                    id: "about",
                    className: Re().about,
                    children: [(0, a.jsx)("div", {
                        className: Re().about__glases,
                        children: (0, a.jsx)(w.default, {
                            width: "140",
                            height: "140",
                            src: "/_next/static/media/glasses.svg",
                            alt: "Glases"
                        })
                    }), (0, a.jsx)("div", {
                        className: Re().about__neck,
                        children: (0, a.jsx)(w.default, {
                            width: "260",
                            height: "177",
                            src: Ze,
                            alt: "Neck"
                        })
                    }), (0, a.jsx)("div", {
                        className: Re().about__smoke,
                        children: (0, a.jsx)(w.default, {
                            width: "160",
                            height: "160",
                            src: qe,
                            alt: "Smoke"
                        })
                    }), (0, a.jsxs)(h.Z, {
                        children: [(0, a.jsxs)("h2", {
                            className: Re().about__title,
                            children: [(0, a.jsx)("span", {
                                className: "text-cherry",
                                children: "WHAT IS"
                            }), " Box vision?"]
                        }), (0, a.jsxs)("div", {
                            className: "entry-content text-center",
                            children: [(0, a.jsxs)("p", {
                                children: ["The BoxMints envision a web3 bundled tools that helps drives community and engagement. The BoxLabz solutions will help to solves the problems of the everyday web3 hopheads. ", ""]
                            }), (0, a.jsxs)("p", {
                                children: ["The first generation array of tools of the BoxMint will help creators to build communities, drive engagement and incentivize their collectors and communities. The ThinkJobs will be integrated into the BoxMints tools and transform HR and productivity on the Blockchain skill market.", " "]
                            })]
                        })]
                    }), (0, a.jsx)(He, {})]
                })
            }
            var We = n(8716),
                Ge = n(9920),
                Ye = n(963),
                Pe = n.n(Ye);

            function ze(e) {
                var t, n, i, r, s = e.heading,
                    c = e.body,
                    d = e.index,
                    _ = (0, o.useState)(!1),
                    h = _[0],
                    u = _[1],
                    m = (0, o.useRef)(),
                    f = (0, Ge.useSpring)({
                        reverse: h,
                        height: 0,
                        from: {
                            height: null === m || void 0 === m || null === (t = m.current) || void 0 === t ? void 0 : t.offsetHeight
                        }
                    }),
                    p = (0, We.romanize)(d + 1),
                    A = h ? "rgba(18, 18, 18, .2)" : "#B0692B",
                    g = l()(Pe().faq__item, (n = {}, i = Pe().faq__item_active, r = h, i in n ? Object.defineProperty(n, i, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[i] = r, n)),
                    x = l()(Pe().faq__heading, "h3"),
                    b = l()(Pe().faq__wrap, "entry-content");
                return (0, a.jsxs)("li", {
                    className: g,
                    children: [(0, a.jsxs)("button", {
                        onClick: function() {
                            return u(!h)
                        },
                        className: Pe().faq__button,
                        children: [(0, a.jsxs)("h3", {
                            className: x,
                            children: [(0, a.jsxs)("span", {
                                className: "text-lighter text-center",
                                children: [p, "."]
                            }), (0, a.jsx)("span", {
                                children: s
                            })]
                        }), (0, a.jsx)(de, {
                            color: A,
                            className: Pe().faq__icon,
                            children: (0, a.jsx)(w.default, {
                                width: 20,
                                height: 20,
                                src: _e,
                                alt: "Plus"
                            })
                        })]
                    }), (0, a.jsx)(Ge.animated.div, {
                        style: f,
                        className: b,
                        children: (0, a.jsx)("div", {
                            className: Pe().faq__body,
                            ref: m,
                            dangerouslySetInnerHTML: {
                                __html: c.toString()
                            }
                        })
                    })]
                })
            }
            var Qe = [{
                    heading: "How To Get BoxHeadz NFT Whitelist?",
                    body: "The BoxHeadz NFT Whitelist requirements will be/is released on our official discord and/or twitter. "
                }, {
                    heading: "What’s BoxHeadz NFT Mint Price and Date?",
                    body: 'TBA'
                }, {
                    heading: "Will There Be A $HEADZ Token Presale?",
                    body: "No, However, methods of redeeming the $HEADZ Token will available after the BoxHeadz Mint."
                }, {
                    heading: "When Contract Address?",
                    body: "The contract has not been deployed. Details will be available soon."
                }, {
                    heading: "$HEADZ Tokenomics and BoxHeadz Supply?",
                    body: 'Only 2222 BoxHeadz will exist. Details about the $HEADZ tokenomics will be released on our offical discord and twitter.'
                }, {
                    heading: "DAO Membership?",
                    body: "Members will only be indoctrinated into the DAO when they verify that they hold a BoxHeadz NFT."
                }, {
                    heading: "BoxMints and ThinkJobs Setup?",
                    body: "The BoxMints and ThinkJobswill be open for public use. Users will be however able to setup profiles and access but free and premium services and options."
                }, {
                    heading: "How To Use Near?",
                    body: "To understand how to buy and trade NFTs and Tokens on NEAR ecosystem click here."
                }, {
                    heading: "Collaboration and Partnerships?",
                    body: "Collaboration and Partnership requests can be made via Twitter DM or by opening a Collab Ticket on our Discord (Not a guarantee). Collaborations and Partnerships will only be an official team member gives an authorization."
                }],
                Ke = {
                    src: "/_next/static/media/coffee.cb0cc1cc.png",
                    height: 160,
                    width: 160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEVMaXG/mJyvf4msratzS0CUZEyMX110UEkqHhNNNijDsqude2iWdGCIc2fNt6qBWEOzgovizL94TU6tfYSfeGSOZ1DJnZ6shW2tjHrBOWEOAAAAEnRSTlMAK1IYTfv3eAgeZb6/LvbZs/2S4DdJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVQImWNgYGDg4ORgAFHs/ELsIAa7qIiwAIjByycoxsYJYnGLswmxgBgsrKwQRQw8EsJMYAYzFyMDAwA+cQGhIRqNIwAAAABJRU5ErkJggg=="
                },
                Xe = {
                    src: "/_next/static/media/ice.cd1f1ccb.png",
                    height: 160,
                    width: 160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXHac6psRjZUNS9CKSHgc61cOy5PIDAbFxs7ISWwUoRkQjFHMB3Ofqr5nNKQU2FySjrKZJklReWqAAAADnRSTlMAwt3FPP7wIggfupxfekvaKTwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA0SURBVAiZJYtJDgAwCALpotbu/f9nG/XCTAIAALRZAmsnN6FNYjLP696MW2KTWZ3KNT4S/CRNAOfMMlFNAAAAAElFTkSuQmCC"
                },
                Je = {
                    src: "/_next/static/media/shot.c9d7488b.png",
                    height: 160,
                    width: 160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEVMaXGCYAYvGgZAGQmBUgh3NhKggAivkQbCmAiXYwxOHUlBAAAACHRSTlMAdwo73YpHdDmOhQAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAeSURBVAiZY2DAApiYoQxWTkYIg5mFgx0qx8iGTQsABx4ANFzGAMAAAAAASUVORK5CYII="
                };

                function $e(e) {
                    var t = e.list,
                        n = void 0 === t ? Qe : t,
                        i = l()(Pe().faq__title, "h2", "text-uppercase", "text-center");
                    return (0, a.jsxs)(oe, {
                        menuTitle: "faq",
                        id: "faq",
                        className: Pe().faq,
                        children: [(0, a.jsx)("div", {
                            className: Pe().faq__ice,
                            children: (0, a.jsx)(w.default, {
                                width: "160",
                                height: "160",
                                src: Xe,
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: Pe().faq__coffee,
                            children: (0, a.jsx)(w.default, {
                                width: "160",
                                height: "160",
                                src: Ke,
                                alt: ""
                            })
                        }), (0, a.jsx)("div", {
                            className: Pe().faq__shot,
                            children: (0, a.jsx)(w.default, {
                                width: "160",
                                height: "160",
                                src: Je,
                                alt: ""
                            })
                        }), (0, a.jsxs)(h.Z, {
                            children: [(0, a.jsx)("h2", {
                                className: i,
                                children: (0, a.jsx)("span", {
                                    className: "text-cherry",
                                    children: "FREQUENTLY ASKED QUESTIONS"
                                })
                            }), (0, a.jsx)("ul", {
                                className: Pe().faq__list,
                                children: n.map((function(e, t) {
                                    return (0, a.jsx)(ze, {
                                        heading: e.heading,
                                        body: e.body,
                                        index: t
                                    }, t)
                                }))
                            })]
                        })]
                    })
                }
            var et = n(590),
                tt = n.n(et),
                nt = {
                    src: "/_next/static/media/arrow-up.afda6d51.svg",
                    height: 30,
                    width: 20
                },
                at = {
                    src: "/_next/static/media/discord.0e9d2c32.svg",
                    height: 30,
                    width: 30
                },
                it = {
                    src: "/_next/static/media/discord-text.181049f0.svg",
                    height: 110,
                    width: 110
                };

            function rt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function ot(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function st(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, i, r = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (l) {
                            s = !0, i = l
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return rt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return rt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function lt() {
                var e, t, n = (0, o.useState)(!1),
                    i = n[0],
                    r = n[1],
                    s = st(Z(), 2),
                    c = s[0],
                    _ = (s[1], (0, d.v9)((function(e) {
                        return e.common.currentSection
                    }))),
                    u = (0, d.v9)((function(e) {
                        return e.common.sections
                    })),
                    m = (0, d.v9)((function(e) {
                        return e.common.menu
                    })),
                    f = l()(["text-semibold", "text-center", "text-small", "text-underline"], tt().footer__link),
                    p = l()(tt()["footer-discord"], (ot(t = {}, tt()["footer-discord_active"], i), ot(t, tt()["footer-discord_disabled"], c <= N && _ === (null === (e = u[u.length - 1]) || void 0 === e ? void 0 : e.target.getAttribute("id")) && !m), t)),
                    A = l()(tt().footer__wrap, ot({}, tt().footer__wrap_disabled, m)),
                    g = function() {
                        return r(!i)
                    };
                return (0, a.jsxs)("footer", {
                    className: tt().footer,
                    children: [(0, a.jsx)("a", {
                        href: x,
                        className: p,
                        onMouseEnter: g,
                        onMouseLeave: g,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0, a.jsxs)(de, {
                            size: 130,
                            className: tt()["footer-discord__wrap"],
                            color: "#5865F2",
                            children: [(0, a.jsx)("div", {
                                className: tt()["footer-discord__text"],
                                children: (0, a.jsx)(w.default, {
                                    width: "110",
                                    height: "110",
                                    src: it,
                                    alt: "Discord"
                                })
                            }), (0, a.jsx)(w.default, {
                                width: "40",
                                height: "40",
                                src: at,
                                alt: "Discord"
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        className: A,
                        children: (0, a.jsx)(h.Z, {
                            type: "fluid",
                            children: (0, a.jsxs)("div", {
                                className: tt().footer__row,
                                children: [(0, a.jsx)("div", {}), (0, a.jsx)("div", {
                                    className: tt().footer__desc,
                                    children: (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("div", {
                                            className: "text-small text-center",
                                            children: "\xa9 2023 BoxMints."
                                        }), (0, a.jsx)("a", {
                                            href: "#",
                                            className: f,
                                         
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: tt()["footer-scroll-wrap"],
                                    children: (0, a.jsx)(se, {
                                        to: "hero",
                                        className: tt()["footer-scroll"],
                                        hoverClass: tt()["footer-scroll_active"],
                                        children: (0, a.jsx)("span", {
                                            className: tt()["footer-scroll__img"],
                                            children: (0, a.jsx)(w.default, {
                                                height: "30",
                                                width: "20",
                                                src: nt,
                                                alt: "Scroll up"
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
            var ct = n(6051),
                dt = n.n(ct),
                _t = {
                    src: "/_next/static/media/arrow-right.83e000e8.svg",
                    height: 20,
                    width: 30
                };

            function ht() {
                var e, t, n, i = (0, o.useState)(!1),
                    r = i[0],
                    s = i[1],
                    c = l()(dt()["community-btn"], "community-btn", (n = r, (t = "community-btn_active") in(e = {}) ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e)),
                    d = r ? "#5865F2" : "#262626",
                    _ = function() {
                        return s(!r)
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("a", {
                        href: x,
                        onMouseEnter: _,
                        onMouseLeave: _,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: m().dynamic([
                            ["8450a6aed28e1ba7", [j]]
                        ]) + " " + (c || ""),
                        children: (0, a.jsx)(de, {
                            color: d,
                            size: 300,
                            children: (0, a.jsxs)("span", {
                                className: m().dynamic([
                                    ["8450a6aed28e1ba7", [j]]
                                ]) + " " + (dt()["community-btn__wrap"] || ""),
                                children: [(0, a.jsx)("span", {
                                    className: m().dynamic([
                                        ["8450a6aed28e1ba7", [j]]
                                    ]) + " " + (dt()["community-btn__arrow"] || ""),
                                    children: (0, a.jsx)(w.default, {
                                        width: 30,
                                        height: 20,
                                        src: _t,
                                        alt: "Discord button arrow"
                                    })
                                }), (0, a.jsx)("span", {
                                    className: m().dynamic([
                                        ["8450a6aed28e1ba7", [j]]
                                    ]) + " " + (dt()["community-btn__title"] || ""),
                                    children: "join to community"
                                }), (0, a.jsx)("span", {
                                    className: m().dynamic([
                                        ["8450a6aed28e1ba7", [j]]
                                    ]) + " " + (dt()["community-btn__desc"] || ""),
                                    children: ""
                                }), (0, a.jsx)("span", {
                                    className: m().dynamic([
                                        ["8450a6aed28e1ba7", [j]]
                                    ]) + " " + (dt()["community-btn__icon"] || ""),
                                    children: (0, a.jsx)(w.default, {
                                        width: 30,
                                        height: 30,
                                        src: at,
                                        alt: "Discord"
                                    })
                                })]
                            })
                        })
                    }), (0, a.jsx)(m(), {
                        id: "8450a6aed28e1ba7",
                        dynamic: [j],
                        children: "@media screen and (min-width:".concat(j, "px) {.community-btn_active.__jsx-style-dynamic-selector .polyhedron__icon{-webkit-animation:spin 4s linear infinite;\nanimation:spin 4s linear infinite}}\n@keyframes spin {from {transform:rotate(0deg)}to {transform:rotate(360deg)}}")
                    })]
                })
            }

            function ut(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function mt(e) {
                return function(e) {
                    if (Array.isArray(e)) return ut(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return ut(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ut(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ft(e) {
                var t = e.children,
                    n = e.className,
                    i = e.tagName,
                    r = void 0 === i ? "div" : i,
                    o = e.count,
                    s = void 0 === o ? 3 : o,
                    c = e.duration,
                    d = void 0 === c ? "3000ms" : c,
                    _ = e.reverse,
                    h = r,
                    u = l()(n, "infinite-component"),
                    f = l()("infinite-component__box"),
                    p = l()("infinite-component__item"),
                    A = 100 / s,
                    g = _ ? 0 : -1 * A,
                    x = _ ? -1 * A : 0;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(h, {
                        className: m().dynamic([
                            ["7f854ad584d2e85e", [g, x, g, d]]
                        ]) + " " + (u || ""),
                        children: (0, a.jsx)("div", {
                            className: m().dynamic([
                                ["7f854ad584d2e85e", [g, x, g, d]]
                            ]) + " " + (f || ""),
                            children: mt(Array(s).keys()).map((function(e, n) {
                                return (0, a.jsx)("div", {
                                    className: m().dynamic([
                                        ["7f854ad584d2e85e", [g, x, g, d]]
                                    ]) + " " + (p || ""),
                                    children: t
                                }, n)
                            }))
                        })
                    }), (0, a.jsx)(m(), {
                        id: "7f854ad584d2e85e",
                        dynamic: [g, x, g, d],
                        children: "@keyframes loopInfiniteComponent {from {transform: translateX(".concat(g, "%)}to {transform: translateX(").concat(x, "%)}}\n.infinite-component.__jsx-style-dynamic-selector{overflow:hidden}\n.infinite-component__box.__jsx-style-dynamic-selector{display:-webkit-inline-box;\ndisplay:-webkit-inline-flex;\ndisplay:-ms-inline-flexbox;\ndisplay:inline-flex;\ntransform: translateX(").concat(g, "%);\n-webkit-animation:loopInfiniteComponent ").concat(d, " linear infinite;\nanimation:loopInfiniteComponent ").concat(d, " linear infinite}\n.infinite-component__item.__jsx-style-dynamic-selector{display:inline-block}")
                    })]
                })
            }
            var pt = {
                    src: "/_next/static/media/banana.eb458833.svg",
                    height: 160,
                    width: 160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXH8lpbb0NCrqqpQRESFf3/e5+dCi4u4T0+bn59zoKDIamq+mJiptLTS3d2wtbWFj4+zurqyeHjKQ0PCt7fKXl7JQED0v7//4eH////ewMC8o6OsiYnIenq6TmXsAAAAFXRSTlMA/f2QFC3pCv0/JfFRbNMVW8G0/F0QvT5HAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVQImRXKRxaAIBDA0FCGIig2sN//mj42+ZsAYKUXb5yz3fU+jxEwNSk1eYbUgr60EL8tPItArC28c3/3nGOBH0NgAkdMFkwdAAAAAElFTkSuQmCC"
                },
                At = {
                    src: "/_next/static/media/banana.eb458833.svg",
                    height: 160,
                    width: 160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXG0ih3BpwrI1ACffi2FbTNzXSRzay6fiCRPNByjgiekikOlij/KsmOxlBOjjkqVfju3mk7TsxPas1mrkD7PhVsaAAAAEnRSTlMA1vYfoJBqBlEP9K9pxLDfRYGOQzMoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVQImWNggAN2QQ4oi1eYmwdEC/CLcLGwMTBwsnIwMTKwMzCwMzALsUDUcPBxIrQyMAAAJpUA/vqDypcAAAAASUVORK5CYII="
                },
                gt = {
                    src: "/_next/static/media/glases06ae.4caf2f1e.png",
                    height: 160,
                    width: 160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVMaXGLNBHpYjDHRg/JUSToXyn1bDbZVCHhVhvIRRDxZCyz/HIeAAAAC3RSTlMAC7IeP3PTYptT+U4NFeEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAkSURBVAiZY2BABYxQmpUFQrNzMTMwMDCzsnGABTiZmGAqUAEACcwARzE99N0AAAAASUVORK5CYII="
                },
                xt = {
                    src: "/_next/static/media/smoke.84c4b90f.png",
                    height: 160,
                    width: 160,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXGVkY6IWjiRZkJqRC17enmtpaJWTkuZkYeHc2V+Vj/BwsSSj46+vr1xPBOinZyzq6ksGMw8AAAAEXRSTlMAdltuFjrEB2UsRmxGinyC9vSGl20AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVAiZY2BgYGflYQADVkZ+djCDl4MRwmBjE+AGM1g4OTggihj4WCA0MxeE5mQCUQAexgDAjoZWiAAAAABJRU5ErkJggg=="
                },
                bt = {
                    src: "/_next/static/media/img.86ba75e8.png",
                    height: 734,
                    width: 860,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAXVBMVEVMaXGge5wSAAD///8NlIOOqZl/2Nr///////8WNmL+//+oj36tc2yVla69mXH////cn4aFqp4+r6hgkYFCi5Ffwsc1o6ebvtDo5uObjH7U1s232dprVmZyV281MWm8o+W9AAAAGHRSTlMA3A8+EP78K09ZpV79+/uP/bZq/SvXb/jl20oqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVQImRXKRxaAIBDA0KACIjZQmu3+x/RNVn8RAOs7pO1qEzCEu821h6iN3usI2ZRjFZzpe5/FyuSUcvADQuoCQ0SQeaEAAAAASUVORK5CYII="
                },
                wt = {
                    src: "/_next/static/media/title.baf79bff.svg",
                    height: 190,
                    width: 560
                };

            function vt() {
                var e = l()(["text-white", "text-nowrap", "h1", "h1--large", dt().community__title]);
                return (0, a.jsxs)(oe, {
                    id: "community",
                    menuTitle: "community",
                    color: "#FFEC00",
                    className: dt().community,
                    children: [(0, a.jsx)(ft, {
                        className: dt().community__alphapes,
                        reverse: !0,
                        children: (0, a.jsx)("h1", {
                            className: e,
                            children: "BoxMints"
                        })
                    }), (0, a.jsx)(U, {}), (0, a.jsx)("div", {
                        className: dt().community__yar,
                        children: (0, a.jsx)(w.default, {
                            width: "560",
                            height: "190",
                            src: wt,
                            alt: "You are resady?"
                        })
                    }), (0, a.jsx)("div", {
                        className: dt().community__img_cards,
                        children: (0, a.jsx)(w.default, {
                            width: "160",
                            height: "160",
                            src: "/_next/static/media/cards.svg",
                            alt: "Cards"
                        })
                    }), (0, a.jsx)("div", {
                        className: dt().community__img_smoke,
                        children: (0, a.jsx)(w.default, {
                            width: "160",
                            height: "160",
                            src: "/_next/static/media/smoke.svg",
                            alt: "smoke"
                        })
                    }), (0, a.jsx)("div", {
                        className: dt().community__img_glasses,
                        children: (0, a.jsx)(w.default, {
                            width: "160",
                            height: "160",
                            src: "/_next/static/media/glasses.svg",
                            alt: "glasses"
                        })
                    }), (0, a.jsx)("div", {
                        className: dt().community__img_banana,
                        children: (0, a.jsx)(w.default, {
                            width: "160",
                            height: "160",
                            src: "/_next/static/media/banana.eb458833.svg",
                            alt: "banana"
                        })
                    }), (0, a.jsx)(h.Z, {
                        children: (0, a.jsxs)("div", {
                            className: dt().community__wrap,
                            children: [(0, a.jsx)(w.default, {
                                width: "860",
                                height: "734",
                                src: "/_next/static/media/bottom.svg",
                                alt: "BoxMints"
                            }), (0, a.jsx)(ht, {})]
                        })
                    })]
                })
            }
            var yt = n(4589),
                jt = n.n(yt),
                Ct = {
                    src: "/_next/static/media/line-0.3ff68014.svg",
                    height: 12,
                    width: 226
                },
                Nt = {
                    src: "/_next/static/media/line-0.56c85cf9.svg",
                    height: 10,
                    width: 72
                };

            function Mt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function kt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Tt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, i, r = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (l) {
                            s = !0, i = l
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return Mt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function St(e) {
                var t = e.imgClass,
                    n = e.line,
                    i = e.lineWidth,
                    r = e.lineHeight,
                    s = e.lineTable,
                    l = e.lineTableWidth,
                    c = e.lineTableHeight,
                    d = e.index,
                    _ = e.addItemRef,
                    h = (0, o.useRef)(),
                    u = Tt(Z(), 2),
                    m = u[0];
                u[1];
                return (0, o.useEffect)((function() {
                    _(h.current)
                }), []), (0, a.jsxs)("div", {
                    className: jt()["roadmap-item__line-wrap"],
                    children: [(0, a.jsx)("div", {
                        className: jt()["roadmap-item__circle-box"],
                        ref: h,
                        children: (0, a.jsx)("div", {
                            className: jt()["roadmap-item__circle"]
                        })
                    }), 0 === d && (0, a.jsx)("div", {
                        className: jt()["roadmap-item__line_first"],
                        children: m > y ? (0, a.jsx)(w.default, {
                            width: "225",
                            height: "15",
                            alt: "First line",
                            src: "/_next/static/media/line-1.3d582569.svg"
                        }) : (0, a.jsx)(w.default, {
                            width: "72",
                            height: "10",
                            alt: "First line",
                            src: Nt
                        })
                    }), (0, a.jsx)("div", {
                        className: jt()[t],
                        children: m > y ? (0, a.jsx)(w.default, {
                            width: i,
                            height: r,
                            alt: "Inner line",
                            src: "/_next/static/media/line-1.3d582569.svg"
                        }) : (0, a.jsx)(w.default, {
                            width: l,
                            height: c,
                            alt: "Inner line",
                            src: s
                        })
                    })]
                })
            }

            function Et(e) {
                var t = e.heading,
                    n = e.desc,
                    i = e.icon,
                    r = e.color,
                    o = e.line,
                    s = e.lineWidth,
                    c = e.lineHeight,
                    d = e.lineTable,
                    _ = e.lineTableWidth,
                    h = e.lineTableHeight,
                    u = e.index,
                    m = e.addItemRef,
                    f = kt({}, "--current-color", r),
                    p = l()(jt()["roadmap-item"], kt({}, jt()["roadmap-item_even"], u % 2 === 1)),
                    A = l()([jt()["roadmap-item__title"], "h3"]),
                    g = l()([jt()["roadmap-item__desc"], "entry-content"]),
                    x = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: jt()["roadmap-item__icon-wrap"],
                            children: (0, a.jsx)("div", {
                                className: jt()["roadmap-item__icon"],
                                children: (0, a.jsx)(w.default, {
                                    width: "40",
                                    height: "40",
                                    src: i,
                                    alt: "icon"
                                })
                            })
                        }), (0, a.jsx)(St, {
                            imgClass: "roadmap-item__line_odd",
                            line: o,
                            lineWidth: s,
                            lineHeight: c,
                            lineTable: d,
                            lineTableWidth: _,
                            lineTableHeight: h,
                            index: u,
                            addItemRef: m
                        })]
                    }),
                    b = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(St, {
                            imgClass: "roadmap-item__line_even",
                            line: o,
                            lineWidth: s,
                            lineHeight: c,
                            lineTable: d,
                            lineTableWidth: _,
                            lineTableHeight: h,
                            index: u,
                            addItemRef: m
                        }), (0, a.jsx)("div", {
                            className: jt()["roadmap-item__icon-wrap"],
                            children: (0, a.jsx)("div", {
                                className: jt()["roadmap-item__icon"],
                                children: (0, a.jsx)(w.default, {
                                    width: "40",
                                    height: "40",
                                    src: i,
                                    alt: "icon"
                                })
                            })
                        })]
                    });
                return (0, a.jsxs)("div", {
                    style: f,
                    className: p,
                    children: [u % 2 === 1 && b, (0, a.jsxs)("div", {
                        className: jt()["roadmap-item__content"],
                        children: [(0, a.jsx)("h3", {
                            className: A,
                            children: t
                        }), (0, a.jsx)("div", {
                            className: g,
                            children: n
                        })]
                    }), u % 2 === 0 && x]
                })
            }
            var Bt = [{
                    img: {
                        src: "/_next/static/media/line-1.a2d88aa3.svg",
                        height: 149,
                        width: 354
                    },
                    imgTable: {
                        src: "/_next/static/media/line-1.3d582569.svg",
                        height: 127,
                        width: 265
                    },
                    tableWidth: 265,
                    tableHeight: 125,
                    width: 354,
                    height: 149,
                    heading: "Decisions",
                    desc: "The conceptualisation of the first set of BoxMints’ Ideas.",
                    color: "#B0692B",
                    icon: {
                        src: "/_next/static/media/flask.d18ffc0a.svg",
                        height: 40,
                        width: 40
                    }
                }, {
                    img: {
                        src: "/_next/static/media/line-2.8a6683bb.svg",
                        height: 145,
                        width: 354
                    },
                    imgTable: {
                        src: "/_next/static/media/line-2.8a6683bb.svg",
                        height: 125,
                        width: 262
                    },
                    tableWidth: 262,
                    tableHeight: 125,
                    width: 354,
                    height: 145,
                    heading: "Governance",
                    desc: "The creation of a DAO will be completed and Custodians rules will be formulate via a DAO concensus.",
                    color: "#00B669",
                    icon: {
                        src: "/_next/static/media/destination.f0437548.svg",
                        height: 40,
                        width: 40
                    }
                }, {
                    img: {
                        src: "/_next/static/media/line-3.696594fe.svg",
                        height: 146,
                        width: 354
                    },
                    imgTable: {
                        src: "/_next/static/media/line-3.696594fe.svg",
                        height: 127,
                        width: 265
                    },
                    tableWidth: 265,
                    tableHeight: 127,
                    width: 354,
                    height: 146,
                    heading: "Mints",
                    desc: "The BoxHeadz NFT will be citizens of the BOX DNA strand. This box - head - like NFT will be stakable and will also be a key to access utilities and the DAO. Minting Soon.",
                    color: "#ECDB0C",
                    icon: {
                        src: "/_next/static/media/gorilla.d36b9e00.svg",
                        height: 40,
                        width: 40
                    }
                }, {
                    img: {
                        src: "/_next/static/media/line-4.4da9a963.svg",
                        height: 142,
                        width: 354
                    },
                    imgTable: {
                        src: "/_next/static/media/line-4.4da9a963.svg",
                        height: 124,
                        width: 262
                    },
                    tableWidth: 262,
                    tableHeight: 124,
                    width: 354,
                    height: 142,
                    heading: "Tools",
                    desc: "The first generation array of tools in the BoxMints will help creators to build communities, drive engagement and incentivize their collectors and communities.",
                    color: "#00E6DC",
                    icon: {
                        src: "/_next/static/media/block-scheme.44d463a8.svg",
                        height: 40,
                        width: 40
                    }
                }, {
                    img: {
                        src: "/_next/static/media/line-5.21a2e1d1.svg",
                        height: 141,
                        width: 351
                    },
                    imgTable: {
                        src: "/_next/static/media/line-5.c4da37d6.svg",
                        height: 120,
                        width: 263
                    },
                    tableWidth: 263,
                    tableHeight: 120,
                    width: 351,
                    height: 141,
                    heading: "Tokenomics",
                    desc: "The $HEADZ Token will be released and it will exist as the governance and community token of the BoxLabz.",
                    color: "#7C5DFA",
                    icon: {
                        src: "/_next/static/media/cubes.8a6dbfd1.svg",
                        height: 40,
                        width: 40
                    }
                }, {
                    img: {
                        src: "/_next/static/media/line-6.0c3b9dff.svg",
                        height: 139,
                        width: 352
                    },
                    imgTable: {
                        src: "/_next/static/media/line-6.9473d3bb.svg",
                        height: 123,
                        width: 264
                    },
                    tableWidth: 264,
                    tableHeight: 123,
                    width: 352,
                    height: 139,
                    heading: "Ideas",
                    desc: "The DAO Idea hub will build and it will allow and facilitate more useful and sophisticated utilities to be built on Near Chain.",
                    color: "#B0692B",
                    icon: {
                        src: "/_next/static/media/infographic.d1bbd1b7.svg",
                        height: 40,
                        width: 40
                    }
                }, {
                    img: {
                        src: "/_next/static/media/line-7.b5e61e36.svg",
                        height: 80,
                        width: 293
                    },
                    imgTable: {
                        src: "/_next/static/media/line-7.aa4cd49e.svg",
                        height: 69,
                        width: 213
                    },
                    tableWidth: 213,
                    tableHeight: 69,
                    width: 293,
                    height: 80,
                    heading: "Revolution",
                    desc: "The Future is endless and the team at BoxLabz hopes to adequately secure our place web3 revolution. We will facilitate and pioneer the Near experience.",
                    color: "#ECDB0C",
                    icon: {
                        src: "/_next/static/media/worldwide.49dd1050.svg",
                        height: 40,
                        width: 40
                    }
                }],
                Rt = {
                    src: "/_next/ape-07450.png",
                    height: 565,
                    width: 451,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAMFBMVEVMaXGOg36DYEF6eF5WHSGDSFKNdl6XVmSBREJjbmhuVkzHj59sWkz0isbmuaezh5VpOmJKAAAADnRSTlMA+/WfKnjc2NCdWWrOS2d+W9wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVAiZLYq3EQAwDISQnPP+2/rubRoKgEdZUqoegOnWgLNzBGyo9b+KCw8nAHwHbeR2AAAAAElFTkSuQmCC"
                },
                Lt = {
                    src: "/_next/static/media/ape-1.353ca190.png",
                    height: 701,
                    width: 532,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAALVBMVEVMaXGtUiaMWUKGb0lgbmZMbYVeYGSsj3NedGiSXWqTl4e1lGaHi32NcG3XxqJfoPKOAAAAC3RSTlMAhueJMp4Uy/pXa9NVsyIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAkSURBVAiZY2DADhiZWFkYGBiYuXk4GBgY2Nj5uMHCXLwQaU4AB+oAdV2a8TAAAAAASUVORK5CYII="
                },
                Ft = {
                    src: "/_next/static/media/touch.172a790c.svg",
                    height: 40,
                    width: 40
                };

            function It(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function Ot(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Dt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, i, r = [],
                            o = !0,
                            s = !1;
                        try {
                            for (n = n.call(e); !(o = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); o = !0);
                        } catch (l) {
                            s = !0, i = l
                        } finally {
                            try {
                                o || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return r
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return It(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return It(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ht(e) {
                var t = e.list,
                    n = void 0 === t ? Bt : t,
                    i = "road-map",
                    r = Dt(Z(), 2),
                    s = r[0],
                    c = (r[1], (0, o.useState)(!1)),
                    _ = c[0],
                    h = c[1],
                    u = (0, d.v9)((function(e) {
                        return e.common.currentSection
                    })),
                    m = (0, o.useRef)(),
                    f = (0, o.useRef)(),
                    p = (0, o.useRef)(!1),
                    A = (0, o.useRef)(0),
                    g = (0, o.useRef)([]),
                    x = function(e) {
                        return g.current.push(e)
                    },
                    b = u === i,
                    v = l()(jt().roadmap, Ot({}, jt().roadmap_active, _)),
                    y = l()(["h2", "text-center", "text-uppercase", jt().roadmap__title]),
                    C = l()(jt().roadmap__drag, Ot({}, jt().roadmap__drag_active, b)),
                    N = function() {
                        var e, t, n = g.current[0].getBoundingClientRect(),
                            a = g.current[g.current.length - 1].getBoundingClientRect().top - n.top;
                        (null === f || void 0 === f || null === (e = f.current) || void 0 === e || null === (t = e.style) || void 0 === t ? void 0 : t.cssText) && (f.current.style.cssText = "--wrap-line-height: ".concat(a, "px;"))
                    };
                return (0, o.useEffect)((function() {
                    p.current = _
                }), [_]), (0, o.useEffect)((function() {
                    N()
                }), [s]), (0, o.useEffect)((function() {
                    var e = function() {
                            p.current && h(!1)
                        },
                        t = function() {
                            window.innerWidth <= j && (m.current.style.transform = "matrix(1, 0, 0, 1, 0, 0)")
                        };
                    return t(), N(), window.addEventListener("mouseup", e), window.addEventListener("resize", t),
                        function() {
                            window.removeEventListener("mouseup", e), window.removeEventListener("resize", t)
                        }
                }), []), (0, a.jsxs)(oe, {
                    id: i,
                    menuTitle: "road map",
                    color: "#F8F8F8",
                    className: v,
                    onMouseDown: function() {
                        return h(!0)
                    },
                    onMouseMove: function(e) {
                        if (p.current && window.innerWidth > j) {
                            var t, n, a = e.movementX,
                                i = window.getComputedStyle(m.current),
                                r = parseInt(i.transform.replace("matrix(1, 0, 0, 1, ", "").replace(", 0)")),
                                o = -1 * (m.current.offsetWidth - window.innerWidth);
                            a > 0 && ((n = e.pageX - A.current) < 5 && (n = 5), n > 90 && (n = 90), t = r + n), a < 0 && ((n = A.current - e.pageX) < 5 && (n = 5), n > 90 && (n = 90), t = r - n), t < o && (t = o), t > 0 && (t = 0), m.current.style.transform = "matrix(1, 0, 0, 1, ".concat(t, ", 0)"), A.current = e.pageX
                        }
                    },
                    children: [(0, a.jsxs)("div", {
                        className: jt().roadmap__container,
                        ref: m,
                        children: [(0, a.jsxs)("h2", {
                            className: y,
                            children: [(0, a.jsx)("span", {
                                className: "text-cherry",
                                children: "road map"
                            }), " for BoxMints"]
                        }), (0, a.jsx)("div", {
                            className: jt().roadmap__wrap,
                            ref: f,
                            children: n.map((function(e, t) {
                                return (0, a.jsx)(Et, {
                                    line: e.img,
                                    lineWidth: e.width,
                                    lineHeight: e.height,
                                    lineTable: e.imgTable,
                                    lineTableWidth: e.tableWidth,
                                    lineTableHeight: e.tableHeight,
                                    heading: e.heading,
                                    desc: e.desc,
                                    index: t,
                                    icon: e.icon,
                                    color: e.color,
                                    addItemRef: x
                                }, t)
                            }))
                        }), (0, a.jsx)("div", {
                            className: jt().roadmap__ape_first,
                            children: (0, a.jsx)(w.default, {
                                width: "461",
                                height: "565",
                                alt: "",
                                src: Rt
                            })
                        }), (0, a.jsx)("div", {
                            className: jt().roadmap__ape_second,
                            children: (0, a.jsx)(w.default, {
                                width: "532",
                                height: "701",
                                alt: "Ape",
                                src: "/_next/static/media/bottom.svg"
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: C,
                        children: [(0, a.jsx)(w.default, {
                            width: "40",
                            height: "40",
                            alt: "Drag to move",
                            src: Ft
                        }), (0, a.jsx)("div", {
                            className: "text-semibold text-small",
                            children: "Navigate the RoadMap using Drag"
                        })]
                    })]
                })
            }

            function Ut() {
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i.default, {
                        children: [(0, a.jsx)("title", {
                            children: "BoxMints"
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: "BoxMints"
                        }), (0, a.jsx)("meta", {
                            charSet: "UTF-8"
                        }), (0, a.jsx)("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }), (0, a.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0"
                        }), (0, a.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/favicon/apple-touch-icon.png"
                        }), (0, a.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon/favicon-32x32.png"
                        }), (0, a.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon/favicon-16x16.png"
                        }), (0, a.jsx)("link", {
                            rel: "manifest",
                            href: "/favicon/site.webmanifest"
                        })]
                    }), (0, a.jsxs)(r.Z, {
                        header: (0, a.jsx)(ie, {}),
                        footer: (0, a.jsx)(lt, {}),
                        children: [(0, a.jsx)(Te, {}), (0, a.jsx)(Ve, {}), (0, a.jsx)(Ht, {}), (0, a.jsx)($e, {}), (0, a.jsx)(vt, {})]
                    })]
                })
            }
        },
        1645: function(e, t, n) {
            "use strict";
            n.d(t, {
                K4: function() {
                    return i
                },
                by: function() {
                    return r
                },
                oC: function() {
                    return o
                },
                ic: function() {
                    return s
                },
                K0: function() {
                    return l
                }
            });
            var a = n(4867),
                i = function(e) {
                    return {
                        type: a.cS,
                        payload: e
                    }
                },
                r = function(e) {
                    return {
                        type: a.A_,
                        payload: e
                    }
                },
                o = function(e) {
                    return {
                        type: a.wm,
                        payload: e
                    }
                },
                s = function(e) {
                    return {
                        type: a.CQ,
                        payload: e
                    }
                },
                l = function(e) {
                    return {
                        type: a.O5,
                        payload: e
                    }
                }
        },
        9436: function(e) {
            e.exports = {
                button: "ApeButton_button__EqxVA",
                button__title: "ApeButton_button__title__t1v6X",
                button__title_alone: "ApeButton_button__title_alone__lbbTS",
                button__desc: "ApeButton_button__desc__O61Bm",
                button__content: "ApeButton_button__content__T4h7h",
                button__content_alone: "ApeButton_button__content_alone__fJN_a",
                button__img: "ApeButton_button__img__FBrsS",
                button__bg: "ApeButton_button__bg__bBY3G"
            }
        },
        3768: function(e) {
            e.exports = {
                button: "ClockwiseButton_button__izAE9",
                active: "ClockwiseButton_active__sYxDO",
                text: "ClockwiseButton_text__BD31W",
                wrap: "ClockwiseButton_wrap__ezT_o",
                "wrap--icon": "ClockwiseButton_wrap--icon__idCtg",
                animations: "ClockwiseButton_animations__SetyD",
                svg: "ClockwiseButton_svg__z9Z_Q",
                svg__path_large: "ClockwiseButton_svg__path_large___JvO_",
                svg__path_less: "ClockwiseButton_svg__path_less__y4e4J"
            }
        },
        9791: function(e) {
            e.exports = {
                field: "NumberField_field__f6ccG",
                button__minus: "NumberField_button__minus__uSBhE",
                button__plus: "NumberField_button__plus__DNmuK",
                wrap: "NumberField_wrap__9eknv"
            }
        },
        590: function(e) {
            e.exports = {
                footer: "Footer_footer__Ksopt",
                footer__wrap: "Footer_footer__wrap__KhufH",
                footer__wrap_disabled: "Footer_footer__wrap_disabled__2cxzo",
                "footer-discord": "Footer_footer-discord__FHtfd",
                "footer-discord__wrap": "Footer_footer-discord__wrap__BepKV",
                "footer-discord_disabled": "Footer_footer-discord_disabled__8bat2",
                "footer-discord_active": "Footer_footer-discord_active__xnK5a",
                "footer-discord__text": "Footer_footer-discord__text__Jyk7M",
                rotate: "Footer_rotate__6yv8j",
                footer__link: "Footer_footer__link__yc6Xt",
                footer__row: "Footer_footer__row__Q8_DM",
                footer__desc: "Footer_footer__desc__fNGGm",
                "footer-scroll": "Footer_footer-scroll__UK_bv",
                "footer-scroll-wrap": "Footer_footer-scroll-wrap__peUjq",
                "footer-scroll__img": "Footer_footer-scroll__img__6nMZj",
                "footer-scroll_active": "Footer_footer-scroll_active__A6EWR",
                scrollUp: "Footer_scrollUp__36wv6"
            }
        },
        3245: function(e) {
            e.exports = {
                header: "Header_header__dVzXK",
                header__ham: "Header_header__ham__sM4lR",
                header__row: "Header_header__row__iScFq",
                header__column_logo: "Header_header__column_logo__pzRTO",
                header__column_menu: "Header_header__column_menu__ybCSE",
                header__column_contacts: "Header_header__column_contacts__Ccsbc",
                header__contacts: "Header_header__contacts__XdSwM"
            }
        },
        5729: function(e) {
            e.exports = {
                list: "MainMenu_list__xRcW2",
                button: "MainMenu_button____p1u",
                button_active: "MainMenu_button_active__ePNhA",
                button__box: "MainMenu_button__box__Y_gNK",
                button__black: "MainMenu_button__black__Q6ahZ",
                button__cherry: "MainMenu_button__cherry__aNrz6"
            }
        },
        1063: function(e) {
            e.exports = {
                "table-dropdown": "TableDropdown_table-dropdown___qG1e",
                "table-dropdown_active": "TableDropdown_table-dropdown_active__YwOWC",
                "table-dropdown__list": "TableDropdown_table-dropdown__list__aX_FH",
                "table-dropdown__wrap": "TableDropdown_table-dropdown__wrap__5nPnW",
                "table-dropdown__button": "TableDropdown_table-dropdown__button__8Os2o",
                "table-dropdown__button_active": "TableDropdown_table-dropdown__button_active__ggkYj"
            }
        },
        3893: function(e) {
            e.exports = {
                about: "About_about__xW7IT",
                about__title: "About_about__title__GhLnX",
                "about-slider": "About_about-slider__P_h8a",
                "about-slider__loader": "About_about-slider__loader__6Pq18",
                "about-slider__slide": "About_about-slider__slide__Bgnre",
                "about-slider__img": "About_about-slider__img__Bne4C",
                about__neck: "About_about__neck__z_HAm",
                about__smoke: "About_about__smoke__BXiNH",
                about__glases: "About_about__glases__yqodJ"
            }
        },
        6051: function(e) {
            e.exports = {
                community: "Community_community__YFEbU",
                community__wrap: "Community_community__wrap__LFZ09",
                community__yar: "Community_community__yar__5PHcQ",
                community__img_cards: "Community_community__img_cards__HWIZV",
                community__img_smoke: "Community_community__img_smoke__aMIV0",
                community__img_banana: "Community_community__img_banana__FLJ_f",
                community__img_glasses: "Community_community__img_glasses__0De9g",
                community__title: "Community_community__title__mM3ww",
                community__alphapes: "Community_community__alphapes__x5x4_",
                "community-btn": "Community_community-btn__2nneF",
                "community-btn__wrap": "Community_community-btn__wrap__JTdWm",
                "community-btn__arrow": "Community_community-btn__arrow__8Jhes",
                "community-btn__title": "Community_community-btn__title__i_jcm",
                "community-btn__desc": "Community_community-btn__desc__QWwZ_"
            }
        },
        963: function(e) {
            e.exports = {
                faq: "Faq_faq__A9dqv",
                faq__title: "Faq_faq__title__Dur2X",
                faq__list: "Faq_faq__list__30w_U",
                faq__item: "Faq_faq__item__7ulaL",
                faq__item_active: "Faq_faq__item_active__taYvw",
                faq__icon: "Faq_faq__icon__X2_br",
                faq__button: "Faq_faq__button__sB_CI",
                faq__heading: "Faq_faq__heading__cvU7W",
                faq__wrap: "Faq_faq__wrap__fuYH3",
                faq__body: "Faq_faq__body__m_Str",
                faq__ice: "Faq_faq__ice__87eHR",
                faq__shot: "Faq_faq__shot__ilQXe",
                faq__coffee: "Faq_faq__coffee__BUYsc"
            }
        },
        9530: function(e) {
            e.exports = {
                hero: "Hero_hero__klrF4",
                hero__desc: "Hero_hero__desc__7pHez",
                hero__title: "Hero_hero__title__WzDXG",
                hero__img: "Hero_hero__img__mdwTc",
                hero__row: "Hero_hero__row__8H93F",
                hero__content: "Hero_hero__content__eZNj8",
                "hero-box": "Hero_hero-box__1j6eL",
                "hero-box__poly": "Hero_hero-box__poly__L__lk",
                "hero-box__poly-title": "Hero_hero-box__poly-title__dnZjv",
                "hero-box__poly-desc": "Hero_hero-box__poly-desc__qkG4O",
                "hero-box__title": "Hero_hero-box__title__jw53n",
                "hero-box__title_fluid": "Hero_hero-box__title_fluid__7yDFX",
                "hero-box__flex-end": "Hero_hero-box__flex-end__hygki",
                "hero-box__number-wrap": "Hero_hero-box__number-wrap__YrRBm",
                "hero-box__number-wrap_sold": "Hero_hero-box__number-wrap_sold__owKRP",
                "hero-box__number-text": "Hero_hero-box__number-text__REKdN",
                "hero-box__line_one": "Hero_hero-box__line_one__RgYNK",
                "hero-box__line_two": "Hero_hero-box__line_two__fukZv",
                "hero-box__line_three": "Hero_hero-box__line_three__ImyRX",
                "hero-scroll": "Hero_hero-scroll__SoeZd",
                "hero-scroll__img": "Hero_hero-scroll__img__28yxC",
                "hero-scroll_active": "Hero_hero-scroll_active__jYazN",
                scrollDown: "Hero_scrollDown__bFnqw"
            }
        },
        4589: function(e) {
            e.exports = {
                roadmap: "RoadMap_roadmap__q8Sc1",
                roadmap_active: "RoadMap_roadmap_active__cQleG",
                roadmap__wrap: "RoadMap_roadmap__wrap__yhF9U",
                roadmap__container: "RoadMap_roadmap__container__F1ubv",
                roadmap__drag: "RoadMap_roadmap__drag__k8gl_",
                roadmap__drag_active: "RoadMap_roadmap__drag_active__EbPfe",
                roadmap__ape_first: "RoadMap_roadmap__ape_first__3YV7F",
                roadmap__ape_second: "RoadMap_roadmap__ape_second__xxFX_",
                roadmap__title: "RoadMap_roadmap__title__zPt9X",
                "roadmap-item": "RoadMap_roadmap-item__QAmzw",
                "roadmap-item_even": "RoadMap_roadmap-item_even__CxmPB",
                "roadmap-item__content": "RoadMap_roadmap-item__content__zeLGT",
                "roadmap-item__icon-wrap": "RoadMap_roadmap-item__icon-wrap__7W_56",
                "roadmap-item__title": "RoadMap_roadmap-item__title__wioVG",
                "roadmap-item__circle": "RoadMap_roadmap-item__circle__LUfUh",
                "roadmap-item__circle-box": "RoadMap_roadmap-item__circle-box__Gy_Eo",
                "roadmap-item__line-wrap": "RoadMap_roadmap-item__line-wrap__nmkeZ",
                "roadmap-item__line_first": "RoadMap_roadmap-item__line_first__dMBf2",
                "roadmap-item__line_odd": "RoadMap_roadmap-item__line_odd__Qw5__",
                "roadmap-item__line_even": "RoadMap_roadmap-item__line_even__8daMi",
                "roadmap-item__icon": "RoadMap_roadmap-item__icon__De0CK"
            }
        },
        217: function(e) {
            e.exports = {
                list: "SocialList_list__DtJ5v",
                link: "SocialList_link__a3LME"
            }
        },
        6155: function(e) {
            e.exports = {
                wrap: "FallBananas_wrap__XYjsG",
                banana: "FallBananas_banana__LL7vm",
                banana_active: "FallBananas_banana_active___GOHQ"
            }
        },
        9238: function(e) {
            e.exports = {
                wrap: "Polyhedron_wrap__uBr_R",
                box: "Polyhedron_box__dkrsU",
                polyhedron: "Polyhedron_polyhedron__iSEJO"
            }
        },
        5042: function() {}
    },
    function(e) {
        e.O(0, [981, 93, 155, 774, 888, 179], (function() {
            return t = 8581, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);