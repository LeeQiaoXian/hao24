window._ty_rum && window._ty_rum.server || function(t) {
	function r(t) {
		switch (typeof t) {
			case "object":
				if (!t) {
					return "null"
				}
				if (t instanceof Array) {
					for (var e = "[", n = 0; n < t.length; n++) {
						e += (n > 0 ? "," : "") + r(t[n])
					}
					return e + "]"
				}
				var e = "{",
					n = 0;
				for (var a in t) {
					if ("function" != typeof t[a]) {
						var o = r(t[a]);
						e += (n > 0 ? "," : "") + r(a) + ":" + o, n++
					}
				}
				return e + "}";
			case "string":
				return '"' + t.replace(/([\"\\])/g, "\\$1").replace(/\n/g, "\\n") + '"';
			case "number":
				return t.toString();
			case "boolean":
				return t ? "true" : "false";
			case "function":
				return r(t.toString());
			case "undefined":
			default:
				return '"undefined"'
		}
	}

	function e(t) {
		return O ? O(t) : t
	}

	function n() {
		return Date.now ? Date.now() : (new Date).valueOf()
	}

	function a(t, r, e) {
		function n() {
			var t = N.args.apply(this, arguments);
			return r(o, t, e)
		}
		var a, o = t[t.length - 1];
		if ("function" == typeof o) {
			switch (o.length) {
				case 0:
					a = function() {
						return n.apply(this, arguments)
					};
					break;
				case 1:
					a = function(t) {
						return n.apply(this, arguments)
					};
					break;
				case 2:
					a = function(t, r) {
						return n.apply(this, arguments)
					};
					break;
				case 3:
					a = function(t, r, e) {
						return n.apply(this, arguments)
					};
					break;
				case 4:
					a = function(t, r, e, a) {
						return n.apply(this, arguments)
					};
					break;
				case 5:
					a = function(t, r, e, a, o) {
						return n.apply(this, arguments)
					};
					break;
				default:
					for (var i = [], s = 0, u = o.length; u > s; s++) {
						i.push("_" + s)
					}
					a = eval("(function(){return function(" + i.join(",") + "){var args = [].slice.call(arguments, 0);return r(o, args, e);};})();")
			}
			t[t.length - 1] = a
		}
		return t
	}

	function o(t, r) {
		return t && r && (t.moduleName = r), t
	}

	function i(t, r, e) {
		return function() {
			try {
				E = r, e && s(r), t.apply(this, arguments), e && u()
			} catch (n) {
				throw e && u(), o(n, r)
			}
		}
	}

	function s(r) {
		N.each(["setTimeout", "setInterval"], function(e) {
			N.wrap(!0, t, e, function(t) {
				return function() {
					var e, n = N.args.apply(this, arguments),
						a = n[0];
					return "function" == typeof a && (e = i(a, r, !0)), e && (n[0] = e), t.apply ? t.apply(this, n) : Function.prototype.apply.apply(t, [t, n])
				}
			})
		})
	}

	function u() {
		N.each(["setTimeout", "setInterval"], function(r) {
			N.unwrap(t, r)
		})
	}

	function c(t) {
		P && N.wrap(!1, P.prototype, "addEventListener", function(r) {
			return function() {
				var e, n = N.args.apply(this, arguments),
					a = n[1];
				return "function" == typeof a && (e = i(a, t, !0)), e && (n[1] = e), r.apply(this, n)
			}
		}), s(t)
	}

	function f() {
		P && N.unwrap(P.prototype, "addEventListener"), u()
	}

	function l(t) {
		return function(t, r) {}
	}

	function p() {
		if (this.errors.length) {
			var t = function(t) {
					var r = [],
						e = {};
					N.each(t, function(t) {
						var r = _(t[1], t[2], t[3], t[6]);
						e[r] ? e[r][4] += 1 : e[r] = [t[1], t[2], t[3], "#" == t[4] ? x.URL : t[4], 1, t[5], t[6], t[7]]
					});
					for (var n in e) {
						r.push(e[n])
					}
					return r
				}(this.errors),
				r = this;
			N.POST(N.mkurl(D.server.beacon, "err", {
				fu: q ? q : q++,
				os: parseInt((n() - (B || D.st)) / 1000)
			}), N.stringify({
				datas: t
			}), {}, function(t, e) {
				t || (r.errors = [])
			})
		}
	}

	function d() {
		U.initend()
	}

	function h() {
		"complete" === x.readyState && U.initend()
	}

	function m(t) {
		function r() {
			U.send()
		}
		return D.load_time ? !0 : (U.initend(), D.load_time = n(), void(9 === t ? r() : setTimeout(r, 0)))
	}

	function y() {
		X || m(9), N.bind(p, U)(), X = 1
	}

	function v() {
		U.touch || (U.touch = n())
	}

	function g(t) {
		if (t[6]) {
			var r = t[4],
				e = t[5];
			if (e && "string" == typeof e && r) {
				e = e.split(/\n/);
				var n = C.exec(e[0]);
				n || (n = C.exec(e[1])), n && n[1] != r && (t[4] = n[1] || r, t[2] = n[2] || t[2], t[3] = n[3] || t[3])
			}
		}
	}

	function _(t, r, e, n) {
		return t + r + e + (n ? n : "")
	}

	function w(r) {
		var e = arguments,
			a = "unknown",
			o = [n()];
		if (0 != e.length) {
			if ("string" == typeof r) {
				var i = e.length < 4 ? e.length : 4;
				o[1] = e[0], i > 2 && (o[2] = e[2], o[3] = 0, o[4] = e[1]), i > 3 && e[3] && (o[3] = e[3])
			} else {
				if (r instanceof Event || t.ErrorEvent && r instanceof ErrorEvent) {
					if (o[1] = r.message || (r.error && r.error.constructor.name) + (r.error && r.error.message) || "", o[2] = r.lineno ? r.lineno : 0, o[3] = r.colno ? r.colno : 0, o[4] = r.filename || r.error && r.error.fileName || r.target && r.target.baseURI || "", o[4] == x.URL && (o[4] = "#"), r.error) {
						o[5] = r.error.stack, o[6] = r.error.moduleName;
						var s = _(o[1], o[2], o[3], o[6]);
						o[7] = j[s] ? 0 : 1, j[s] = !0
					} else {
						o[5] = null, o[6] = null, o[7] = 0
					}
					if (o[1] === a && o[4] === a) {
						return
					}
					g(o)
				}
			}
			U.errors.push(o)
		}
	}

	function S(t) {
		return function() {
			var r = arguments;
			if (!this._ty_wrap) {
				var e = N.args.apply(this, r);
				this._ty_rum = {
					method: e[0],
					url: e[1],
					start: n()
				}
			}
			try {
				return t.apply(this, r)
			} catch (a) {
				return Function.prototype.apply.call(t, this, r)
			}
		}
	}

	function T(r) {
		return "string" == typeof r ? r.length : t.ArrayBuffer && r instanceof ArrayBuffer ? r.byteLength : t.Blob && r instanceof Blob ? r.size : r && r.length ? r.length : 0
	}

	function b(r) {
		return function() {
			function e(t) {
				var r, e, a = p._ty_rum;
				if (a) {
					if (4 !== a.readyState && (a.end = n()), a.s = p.status, "" == p.responseType || "text" == p.responseType) {
						a.res = T(p.responseText)
					} else {
						if (p.response) {
							a.res = T(p.response)
						} else {
							try {
								a.res = T(p.responseText)
							} catch (o) {
								a.res = 0
							}
						}
					}
					if (a.readyState = p.readyState, a.cb_time = d, r = [a.method + " " + a.url, a.s > 0 ? a.end - a.start : 0, d, a.s, a.s > 0 ? 0 : t, a.res, a.req], a.r && (e = i(p), e && (e = e.xData) && (r.push(e.id), r.push(e.action), r.push(e.time && e.time.duration), r.push(e.time && e.time.qu))), D.aa.push(r), D.server.custom_urls && D.server.custom_urls.length && !U.ct) {
						if (!D.pattern) {
							D.pattern = [];
							for (var s = 0; s < D.server.custom_urls.length; s++) {
								D.pattern.push(new RegExp(D.server.custom_urls[s]))
							}
						}
						for (var s = 0; s < D.pattern.length; s++) {
							if (a.url.match(D.pattern[s])) {
								U.ct = a.end + d;
								break
							}
						}
					}
					U.sa(), p._ty_rum = null
				}
			}

			function a() {
				4 == p.readyState && e(0)
			}

			function i(r) {
				var e;
				if (r.getResponseHeader) {
					var n = N.parseJSON(r.getResponseHeader("X-Tingyun-Tx-Data"));
					n && n.r && r._ty_rum && n.r + "" == r._ty_rum.r + "" && (e = {
						name: r._ty_rum.url,
						xData: n
					}, $ && t._ty_rum.c_ra.push(e))
				}
				return e
			}

			function c(t) {
				return function() {
					var r, e;
					4 == p.readyState && p._ty_rum && (p._ty_rum.end = r = n(), p._ty_rum.readyState = 4);
					try {
						E && s(E), e = t.apply(this, arguments), E && u()
					} catch (i) {
						throw i = o(i, E), E && u(), E = null, i
					}
					return 4 == p.readyState && (d = n() - r), a(), e
				}
			}

			function f(t) {
				return function() {
					var r = p._ty_rum;
					return r ? "progress" == t ? !0 : ("abort" == t ? e(905) : "loadstart" == t ? r.start = n() : "error" == t ? e(990) : "timeout" == t && e(903), !0) : !0
				}
			}

			function l(t, r) {
				r instanceof Array || (r = [r]);
				for (var e = 0; e < r.length; e++) {
					var n = r[e];
					N.sh(t, n, f(n), !1)
				}
			}
			if (!this._ty_wrap) {
				this._ty_rum.start = n(), this._ty_rum.req = arguments[0] ? T(arguments[0]) : 0;
				var p = this,
					d = 0,
					h = N.wrap(!1, this, "onreadystatechange", c);
				h || N.sh(this, "readystatechange", a, !1), l(this, ["error", "progress", "abort", "load", "loadstart", "loadend", "timeout"]), h || setTimeout(function() {
					N.wrap(!1, p, "onreadystatechange", c)
				}, 0)
			}
			var m = function() {
					function t(t) {
						var r = {},
							e = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?/.exec(t);
						return e && (r.protocol = e[1] ? e[1] + ":" : "http:", r.hostname = e[3], r.port = e[4] || ""), r
					}
					return function(r) {
						var e = location;
						if (r = N.trim(r)) {
							if (r = r.toLowerCase(), r.startsWith("//") && (r = e.protocol + r), !r.startsWith("http")) {
								return !0
							}
							var n = t(r),
								a = n.protocol === e.protocol && n.hostname === e.hostname;
							return a && (a = n.port === e.port ? !0 : !e.port && ("http:" === e.protocol && "80" === n.port || "https:" === e.protocol && "443" === n.port)), a
						}
						return !1
					}
				}(),
				y = arguments;
			try {
				var v = D.server;
				v && v.id && this._ty_rum && m(this._ty_rum.url) && (this._ty_rum.r = (new Date).getTime() % 100000000, this.setRequestHeader && this.setRequestHeader("X-Tingyun-Id", v.id + ";r=" + this._ty_rum.r))
			} catch (g) {}
			try {
				return r.apply(this, y)
			} catch (_) {
				return Function.prototype.apply.call(r, this, y)
			}
		}
	}
	var E, k = t.XMLHttpRequest,
		x = document,
		R = Object.defineProperty,
		L = t.define,
		P = t.EventTarget,
		q = 0,
		C = new RegExp("([a-z]+:/{2,3}.*):(\\d+):(\\d+)"),
		O = t.encodeURIComponent,
		B = null,
		N = {
			wrap: function(t, r, e, n, a) {
				try {
					var o = r[e]
				} catch (i) {
					if (!t) {
						return !1
					}
				}
				if (!o && !t) {
					return !1
				}
				if (o && o._ty_wrap) {
					return !1
				}
				try {
					r[e] = n(o, a)
				} catch (i) {
					return !1
				}
				return r[e]._ty_wrap = [o], !0
			},
			unwrap: function(t, r) {
				try {
					var e = t[r]._ty_wrap;
					e && (t[r] = e[0])
				} catch (n) {}
			},
			each: function(t, r) {
				if (t) {
					var e;
					for (e = 0; e < t.length && (!t[e] || !r(t[e], e, t)); e += 1) {}
				}
			},
			mkurl: function(r, a) {
				var o = arguments,
					i = /^https/i.test(x.URL) ? "https" : "http";
				if (i = i + "://" + r + "/" + a + "?av=1.0.0&v=1.3.2&key=" + e(D.server.key) + "&ref=" + e(x.URL) + "&rand=" + n() + "&pvid=" + F, "pf" !== a && D && (D.agent = D.agent || t._ty_rum.agent, D.agent && D.agent.n && (i += "&n=" + e(D.agent.n))), o.length > 2) {
					var s = o[2];
					for (var u in s) {
						i += "&" + u + "=" + s[u]
					}
				}
				return A.host && (i += "&cshst=" + e(A.host)), A.url && (i += "&csurl=" + e(A.url)), i
			},
			GET: function(t, r) {
				function e() {
					r && r.apply(this, arguments), n.parentNode && n.parentNode.removeChild(n)
				}
				if (navigator && navigator.sendBeacon && M.test(t)) {
					return navigator.sendBeacon(t, null)
				}
				var n = x.createElement("img");
				return n.setAttribute("src", t), n.setAttribute("style", "display:none"), this.sh(n, "readystatechange", function() {
					("loaded" == n.readyState || 4 == n.readyState) && e("loaded")
				}, !1), this.sh(n, "load", function() {
					return e("load"), !0
				}, !1), this.sh(n, "error", function() {
					return e("error"), !0
				}, !1), x.body.appendChild(n)
			},
			fpt: function(t, r, e) {
				function n(t, r, e) {
					var n = x.createElement(t);
					try {
						for (var a in r) {
							n[a] = r[a]
						}
					} catch (o) {
						var i = "<" + t;
						for (var a in r) {
							i += " " + a + '="' + r[a] + '"'
						}
						i += ">", e || (i += "</" + t + ">"), n = x.createElement(i)
					}
					return n
				}
				var a = n("div", {
						style: "display:none"
					}, !1),
					o = n("iframe", {
						name: "_ty_rum_frm",
						width: 0,
						height: 0,
						style: "display:none"
					}, !1),
					i = n("form", {
						style: "display:none",
						action: t,
						enctype: "application/x-www-form-urlencoded",
						method: "post",
						target: "_ty_rum_frm"
					}, !1),
					s = n("input", {
						name: "data",
						type: "hidden"
					}, !0);
				return s.value = r, i.appendChild(s), a.appendChild(o), a.appendChild(i), x.body.appendChild(a), i.submit(), o.onreadystatechange = function() {
					("complete" === o.readyState || 4 === o.readyState) && (e(null, o.innerHTML), x.body.removeChild(a))
				}, !0
			},
			POST: function(r, e, n, a) {
				if (this.ie) {
					return this.fpt(r, e, a)
				}
				if (navigator && navigator.sendBeacon && M.test(r)) {
					var o = navigator.sendBeacon(r, e);
					return a(!o), o
				}
				var i;
				if (t.XDomainRequest) {
					return i = new XDomainRequest, i.open("POST", r), i.onload = function() {
						a(null, i.responseText)
					}, this.sh(i, "load", function() {
						a(null, i.responseText)
					}, !1), this.sh(i, "error", function() {
						a("POST(" + r + ")error")
					}, !1), this.wrap(!0, i, "onerror", function(t) {
						return function() {
							return a && a("post error", i.responseText), !0
						}
					}), i.send(e), !0
				}
				if (!k) {
					return !1
				}
				i = new k, i.overrideMimeType && i.overrideMimeType("text/html");
				try {
					i._ty_wrap = 1
				} catch (s) {}
				var u = 0;
				i.onreadystatechange = function() {
					4 == i.readyState && 200 == i.status && (0 == u && a(null, i.responseText), u++)
				}, i.onerror && this.wrap(!0, i, "onerror", function(t) {
					return function() {
						return a("post error", i.responseText), "function" == typeof t ? t.apply(this, arguments) : !0
					}
				});
				try {
					i.open("POST", r, !0)
				} catch (s) {
					return this.fpt(r, e, a)
				}
				for (var c in n) {
					i.setRequestHeader(c, n[c])
				}
				return i.send(e), !0
			},
			sh: function(t, r, e, n) {
				return t.addEventListener ? t.addEventListener(r, e, n) : t.attachEvent ? t.attachEvent("on" + r, e) : !1
			},
			args: function() {
				for (var t = [], r = 0; r < arguments.length; r++) {
					t.push(arguments[r])
				}
				return t
			},
			stringify: r,
			parseJSON: function(r) {
				if (r && "string" == typeof r) {
					var e = t.JSON ? t.JSON.parse : function(t) {
						return new Function("return " + t)()
					};
					return e(r)
				}
				return null
			},
			trim: I ? function(t) {
				return null == t ? "" : I.call(t)
			} : function(t) {
				return null == t ? "" : t.toString().replace(/^\s+/, "").replace(/\s+$/, "")
			},
			extend: function(t, r) {
				if (t && r) {
					for (var e in r) {
						r.hasOwnProperty(e) && (t[e] = r[e])
					}
				}
				return t
			},
			bind: function(t, r) {
				return function() {
					t.apply(r, arguments)
				}
			}
		},
		A = {},
		D = t._ty_rum = N.extend({
			st: n(),
			ra: [],
			c_ra: [],
			aa: [],
			snd_du: function() {
				return this.server.adu ? 1000 * this.server.adu : 10000
			},
			cc: function() {
				return this.server.ac ? this.server.ac : 10
			},
			config: function(t, r) {
				var e;
				if ("object" == typeof t) {
					e = t
				} else {
					if ("string" != typeof t || void 0 === r) {
						throw new Error("illegal arguments")
					}
					e = {}, e[t] = r
				}
				for (var n in e) {
					A[n] = e[n]
				}
				return this
			}
		}, t._ty_rum || {});
	var ty_rum = D;
	ty_rum.server = {
		id: "lEHSakkujqU",
		beacon: "beacon.tingyun.com",
		beacon_err: "beacon-err.tingyun.com",
		key: "x_Ndllsgv6U",
		trace_threshold: 7000,
		custom_urls: [],
		sr: 1
	};
	if (D.server && !(D.server.sr && Math.random() >= D.server.sr)) {
		var I = String.prototype.trim;
		String.prototype.startsWith || (String.prototype.startsWith = function(t, r) {
			return r = r || 0, this.indexOf(t, r) === r
		});
		var M = /^http/i,
			F = function() {
				function t() {
					return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
				}
				return t() + "-" + t() + t()
			}();
		try {
			R && R(t, "define", {
				get: function() {
					return L
				},
				set: function(t) {
					"function" == typeof t && (t.amd || t.cmd) ? (L = function() {
						var r = N.args.apply(this, arguments);
						if (3 !== r.length) {
							return t.apply(this, r)
						}
						var e = "string" == typeof r[0] ? r[0] : "anonymous";
						return t.apply(this, a(r, function(t, r, e) {
							var n;
							try {
								E = e, c(e), n = t.apply(this, r), f()
							} catch (a) {
								throw f(), o(a, e)
							}
							return n
						}, e))
					}, N.extend(L, t)) : L = t
				},
				configurable: !0
			})
		} catch (H) {}
		var $ = t.performance ? t.performance : t.Performance;
		$ && (N.sh($, "resourcetimingbufferfull", function() {
			var t = $.getEntriesByType("resource");
			t && (D.ra = D.ra.concat(t), $.clearResourceTimings())
		}, !1), N.sh($, "webkitresourcetimingbufferfull", function() {
			var t = $.getEntriesByType("resource");
			t && (D.ra = D.ra.concat(t), $.webkitClearResourceTimings())
		}, !1));
		for (var U = D.metric = {
				ready: function() {
					return D.load_time
				},
				initend: function() {
					function t() {
						U.sa()
					}
					D.end_time || (D.end_time = n(), this._h = setInterval(t, 2000))
				},
				send: function() {
					function r() {
						function r(t) {
							return a[t] > 0 ? a[t] - i : 0
						}
						var n = {};
						if ($ && $.timing) {
							var a = $.timing;
							i = a.navigationStart;
							var o = r("domainLookupStart"),
								s = r("domainLookupEnd"),
								u = r("redirectStart"),
								c = r("redirectEnd"),
								f = r("connectStart"),
								l = r("connectEnd");
							n = {
								f: r("fetchStart"),
								qs: r("requestStart"),
								rs: r("responseStart"),
								re: r("responseEnd"),
								os: r("domContentLoadedEventStart"),
								oe: r("domContentLoadedEventEnd"),
								oi: r("domInteractive"),
								oc: r("domComplete"),
								ls: r("loadEventStart"),
								le: r("loadEventEnd"),
								tus: r("unloadEventStart"),
								tue: r("unloadEventEnd")
							}, l - f > 0 && (n.cs = f, n.ce = l), s - o > 0 && (n.ds = o, n.de = s), (c - u > 0 || c > 0) && (n.es = u, n.ee = c), 0 == n.le && (n.ue = D.load_time - i);
							var p;
							if (a.msFirstPaint) {
								p = a.msFirstPaint
							} else {
								if (t.chrome && chrome.loadTimes) {
									var d = chrome.loadTimes();
									d && d.firstPaintTime && (p = 1000 * d.firstPaintTime)
								} else {
									D.firstPaint && (p = D.firstPaint)
								}
							}
							p && (n.fp = Math.round(p - i)), a.secureConnectionStart && (n.sl = r("secureConnectionStart"))
						} else {
							n = {
								t: i,
								os: D.end_time - i,
								ls: D.load_time - i
							}
						}
						n.je = U.errors.length, U.ct && (n.ct = U.ct - i), U.touch && (n.fi = U.touch - i);
						var h = D.agent || t._ty_rum && t._ty_rum.agent;
						return h && (n.id = e(h.id), n.a = h.a, n.q = h.q, n.tid = e(h.tid), n.n = e(h.n)), n.sh = t.screen && t.screen.height, n.sw = t.screen && t.screen.width, n
					}

					function a(r) {
						var e = t._ty_rum.c_ra;
						if (r) {
							for (var n = e.length - 1; n >= 0; n--) {
								if (r.indexOf(e[n].name) > -1) {
									return e[n].xData
								}
							}
						}
						return null
					}

					function o(t) {
						function r(t) {
							return f[t] > 0 ? f[t] : 0
						}
						if (t < D.server.trace_threshold) {
							return null
						}
						var n = $;
						if (n && n.getEntriesByType) {
							var o = {
									tr: !0,
									tt: e(x.title),
									charset: x.characterSet
								},
								s = D.ra,
								u = n.getEntriesByType("resource");
							u && (s = s.concat(u), n.webkitClearResourceTimings && n.webkitClearResourceTimings(), n.clearResourceTimings && n.clearResourceTimings()), o.res = [];
							for (var c = 0; c < s.length; c++) {
								var f = s[c],
									l = {
										o: r("startTime"),
										rt: f.initiatorType,
										n: f.name,
										f: r("fetchStart"),
										ds: r("domainLookupStart"),
										de: r("domainLookupEnd"),
										cs: r("connectStart"),
										ce: r("connectEnd"),
										sl: r("secureConnectionStart"),
										qs: r("requestStart"),
										rs: r("responseStart"),
										re: r("responseEnd")
									},
									p = a(f.name);
								p && (l.aid = p.id, l.atd = p.trId, l.an = p.action, l.aq = p.time && p.time.qu, l.as = p.time && p.time.duration), o.res.push(l)
							}
							if (U.errors.length) {
								o.err = [];
								for (var c = 0, d = U.errors, h = d.length; h > c; c++) {
									o.err.push({
										o: Math.round(d[c][0] - i),
										e: d[c][1],
										l: d[c][2],
										c: d[c][3],
										r: d[c][4],
										ec: h,
										s: d[c][5],
										m: d[c][6],
										ep: d[c][7]
									})
								}
							}
							return o
						}
						return null
					}
					if (this.sended) {
						return !1
					}
					if (!this.ready()) {
						return !1
					}
					var i = D.st,
						s = {};
					try {
						pf = r(), s = o(pf.ls > 0 ? pf.ls : D.load_time - i)
					} catch (u) {}
					s = s ? N.stringify(s) : "";
					var c = N.mkurl(D.server.beacon, "pf", pf);
					B = n(), 0 != s.length && N.POST(c, s, {}, l("POST")) || N.GET(c);
					var f = N.bind(p, this);
					return f(), setInterval(f, 10000), this.sended = !0, this.sa(1), !0
				},
				sa: function(t) {
					(this.ready() || t) && (t || (t = !this._last_send || n() - this._last_send > D.snd_du() || D.aa.length >= D.cc()), D.aa.length > 0 && t && (this._last_send = n(), N.POST(N.mkurl(D.server.beacon, "xhr"), N.stringify({
						xhr: D.aa
					}), {}, l("POST")), D.aa = []))
				},
				errors: []
			}, X = null, j = {}, z = [
				["load", m],
				["beforeunload", y],
				["pagehide", y],
				["unload", y]
			], J = 0; J < z.length; J++) {
			N.sh(t, z[J][0], z[J][1], !1)
		}
		t.addEventListener ? N.sh(t, "error", w, !1) : t.onerror = function(t, r, e, n, a) {
			var o = [t, e, n, r == x.URL ? "#" : r];
			if (a) {
				var i = _(t, e, n, a.moduleName);
				o = o.concat([1, a.stack, a.moduleName, j[i] ? 0 : 1]), j[i] = !0
			}
			g(o), U.errors.push(o)
		};
		for (var W = [
				["scroll", v],
				["keypress", v],
				["click", v],
				["DOMContentLoaded", d],
				["readystatechange", h]
			], J = 0; J < W.length; J++) {
			N.sh(x, W[J][0], W[J][1], !1)
		}
		if (N.wrap(!1, t, "requestAnimationFrame", function(r) {
				return function() {
					return D.firstPaint = n(), t.requestAnimationFrame = r, r.apply(this, arguments)
				}
			}), k) {
			if (k.prototype) {
				N.wrap(!1, k.prototype, "open", S), N.wrap(!1, k.prototype, "send", b)
			} else {
				N.ie = 7;
				var G = k;
				t.XMLHttpRequest = function() {
					var t = new G;
					return N.wrap(!1, t, "open", S), N.wrap(!1, t, "send", b), t
				}
			}
		} else {
			t.ActiveXObject && (N.ie = 6)
		}
	}
}(window);