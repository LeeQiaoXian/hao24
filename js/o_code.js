(function() {
	var g = "0";
	var a = "0";
	var e = "0";
	var b = "";
	var f = "ozrec";
	var d = "__COUNT__";
	var c = undefined;
	c = {
		eV: function() {
			this.cV = "1648.oadz.com";
			this.cs = "s.oadz.com";
			this.dK = "cnt;C1;1648;.hao24.cn:.hao24.com;KigLBbDfarAtCBT+lFToJIa1NhM=;";
			this.dg = "jcnt;C1;1648;.hao24.cn:.hao24.com;1h7cbxSeA+5K/aN0r9AGF4/PLqw=;";
			this.cC = "event;E1;1648;.hao24.cn:.hao24.com;IJn19SFh61SY6oAx/qE7nBJfeuw=;";
			this.fD = "10615";
			this.eu = "10619";
			this.dJ = 50;
			if (d == 1) {
				this.dJ = 5
			}
			this.v = window;
			this.cO = this.v.top;
			this.bY = this.v.screen;
			this.aC = this.v.document;
			this.cf = navigator;
			this.ep = (this.cf.appName == "Microsoft Internet Explorer");
			this.cY = new Image();
			this.bW = new Image();
			this.cw = new Image();
			this.bp = this.dK.split(";")[2];
			this.aK = undefined;
			this.bI = undefined;
			this.bc = undefined;
			this.t = undefined;
			this.aw = undefined;
			this.ae = undefined;
			this.ai = undefined;
			this.au = undefined;
			this.aW = undefined;
			this.bC = undefined;
			this.aM = undefined;
			this.aR = undefined;
			this.bv = undefined;
			this.V = 0;
			this.aN = 0;
			this.aE = 768;
			this.am = 512;
			this.dQ = 1536;
			this.dn = 1024;
			this.cu = 2048;
			this.cv = 3;
			this.aG = undefined;
			this.dq = "\x49\x4e\x50\x55\x54";
			this.cP = "\x62\x75\x74\x74\x6f\x6e";
			this.db = "\x69\x6d\x61\x67\x65";
			this.dA = "\x73\x75\x62\x6d\x69\x74";
			this.dI = "\x62\x6f\x64\x79";
			this.dm = "\x68\x74\x6d\x6c";
			this.eA = "\x46\x4c\x41\x53\x48";
			this.bf = "\x4f\x5a\x5f\x30\x61\x5f" + this.bp;
			this.bi = "\x4f\x5a\x5f\x31\x55\x5f" + this.bp;
			this.ar = "\x4f\x5a\x5f\x31\x59\x5f" + this.bp;
			this.cn = "\x4f\x5a\x5f\x31\x4b\x5f" + this.bp;
			this.ct = "\x4f\x5a\x5f\x31\x53\x5f" + this.bp;
			this.bH = "\x4f\x5a\x5f\x53\x49\x5f" + this.bp
		},
		dG: function() {
			if (!this.aK) {
				if (this.ak(0).indexOf("https") == 0) {
					this.aK = "https://" + this.cs + "/" + this.dK
				} else {
					this.aK = "http://" + this.cV + "/" + this.dK
				}
			}
			return this.aK
		},
		bP: function() {
			if (!this.bI) {
				if (this.ak(0).indexOf("https") == 0) {
					this.bI = "https://" + this.cs + "/" + this.dg
				} else {
					this.bI = "http://" + this.cV + "/" + this.dg
				}
			}
			return this.bI
		},
		dv: function() {
			if (!this.bc) {
				if (this.ak(0).indexOf("https") == 0) {
					this.bc = "https://" + this.cs + "/" + this.cC
				} else {
					this.bc = "http://" + this.cV + "/" + this.cC
				}
			}
			return this.bc
		},
		bD: function(i, l, k, j) {
			var h = "";
			if (k && k > 0) {
				h = i + "=" + l + ";expires=" + k.toGMTString() + ";path=/;domain=" + j
			} else {
				h = i + "=" + l + ";path=/;domain=" + j
			}
			this.aC.cookie = h
		},
		bF: function(j) {
			var i = this.aC.cookie,
				h, l, k = i.indexOf(j + "=");
			if (k != -1) {
				h = k + j.length + 1;
				l = i.indexOf(";", h);
				if (l == -1) {
					l = i.length
				}
				return i.substring(h, l)
			}
			return null
		},
		ac: function() {
			var i = undefined;
			if (!this.aW) {
				this.aW = this.aC.domain;
				if (this.aW.indexOf(".") > -1) {
					var h = this.aW.split(".");
					this.aW = h[h.length - 2] + "." + h[h.length - 1];
					if (h.length > 2 && h[h.length - 3] != "www") {
						i = h[h.length - 2];
						if (i.length <= 2 || (i == "com" || i == "edu" || i == "gov" || i == "net" || i == "org" || i == "mil")) {
							this.aW = h[h.length - 3] + "." + i + "." + h[h.length - 1]
						}
					}
				}
			}
			return this.aW
		},
		ak: function(k) {
			var i = this.am;
			if (typeof(k) != "undefined" && k == 1) {
				i = this.dn
			}
			var h = "";
			try {
				try {
					h = this.cO.location.href
				} catch (j) {
					h = this.v.location.href
				}
			} catch (j) {}
			if (!h) {
				h = "-"
			}
			if (h.length > i) {
				h = h.substring(0, i)
			}
			h = escape(h);
			return h
		},
		cc: function(k) {
			var h = this.am;
			if (typeof(k) != "undefined" && k == 1) {
				h = this.dn
			}
			var j = "";
			try {
				j = this.v.location.href
			} catch (i) {}
			if (!j) {
				j = "-"
			}
			if (j.length > h) {
				j = j.substring(0, h)
			}
			j = escape(j);
			return j
		},
		bS: function(j) {
			var h = this.dQ;
			if (typeof(j) != "undefined" && j == 1) {
				h = this.cu
			}
			if (!this.t) {
				try {
					try {
						this.t = this.cO.document.referrer
					} catch (i) {
						this.t = this.aC.referrer
					}
					if (!this.t) {
						this.t = this.cO.opener.location.href
					}
				} catch (i) {}
				if (!this.t) {
					this.t = "-"
				}
				if (this.t.length > h) {
					this.t = this.t.substring(0, h)
				}
				this.t = escape(this.t)
			}
			return this.t
		},
		bV: function(i, j) {
			try {
				if (i && j && i.getAttribute(j)) {
					return i.getAttribute(j).toString()
				}
			} catch (h) {}
			return null
		},
		bk: function(h) {
			if (h && h.name) {
				return h.name.toString()
			} else {
				if (this.bV(h, "name")) {
					return this.bV(h, "name")
				} else {
					if (h && h.id) {
						return h.id.toString()
					} else {
						return "-"
					}
				}
			}
		},
		dh: function(j) {
			var i = 1,
				h = 0;
			while (j && i <= 50) {
				j = j.parentNode;
				i++;
				if (j && j.tagName == "DIV") {
					var k = this.bk(j);
					if (k && k.indexOf("__") == 0 && k.length > 2) {
						h = 1;
						break
					}
				}
			}
			if (h == 1) {
				return j
			} else {
				return null
			}
		},
		cF: function(h, i) {
			if (!h.onclick) {
				h.onclick = i
			} else {
				if (this.ep) {
					h.attachEvent("onclick", i)
				} else {
					h.addEventListener("click", i, false)
				}
			}
		},
		dS: function() {
			var i = 0;
			if (typeof(c.v.frames) != "undefined" && c.v.frames) {
				for (i = 0; i < c.v.frames.length; i++) {
					try {
						c.cF(c.v.frames[i].document, c.bB)
					} catch (h) {}
				}
			}
			if (c.v.__99_670_pageonload) {
				c.v.__99_670_pageonload()
			}
		},
		eY: function(i) {
			var h = 1;
			while (i && i.tagName != "A" && i.tagName != "AREA" && h <= 10) {
				i = i.parentNode;
				h++
			}
			if (i && (i.tagName == "A" || i.tagName == "AREA")) {
				return i
			} else {
				return null
			}
		},
		cW: function(k) {
			var i = 1;
			var j = undefined;
			if (g == 1) {
				var h = this.bk(k);
				while (k && i <= 5 && !(h && h.indexOf("__") == 0 && h.length > 2 && k.onclick)) {
					k = k.parentNode;
					h = this.bk(k);
					i++
				}
				if (k && k.onclick && h && h.indexOf("__") == 0 && h.length > 2) {
					return k
				}
			} else {
				if (k && k.tagName) {
					j = k.tagName.toLowerCase()
				}
				while (k && !k.onclick && i <= 5 && j != this.dI && j != this.dm) {
					if (k.parentNode && k.parentNode.tagName) {
						k = k.parentNode;
						j = k.tagName.toLowerCase();
						i++
					} else {
						return null
					}
				}
				if (k && k.onclick && j != this.dI && j != this.dm) {
					return k
				}
			}
			return null
		},
		eZ: function(i) {
			var h = /^\d*$/;
			if (h.test(i)) {
				return true
			} else {
				return false
			}
		},
		dH: function() {
			var l = Math.floor(new Date().getTime() / 1000);
			var i = 0;
			var n = "-";
			try {
				var j = this.bF(this.bH);
				if (j) {
					n = j;
					var k = n.indexOf("sTime=");
					var p = n.indexOf("&sIndex=");
					var o = "-";
					if (k < 0) {
						i++;
						o = "sTime=" + l
					} else {
						o = n.substring(0, p)
					}
					var q = 0;
					if (p < 0) {
						i++;
						q = 999999
					} else {
						q = n.substring(n.indexOf("&sIndex=") + 8);
						if (!this.eZ(q)) {
							q = 999999
						} else {
							q++
						}
					}
					n = o + "&sIndex=" + q;
					this.bD(this.bH, n, 0, this.ac())
				} else {
					n = "sTime=" + l + "&sIndex=1";
					this.bD(this.bH, n, 0, this.ac())
				}
			} catch (m) {}
			return n + "&sret=" + i
		},
		bB: function(q) {
			if (c.V < c.dJ) {
				c.aG = c.dH();
				var v = null;
				var p = "-";
				var k = null;
				var l = "-";
				if (!q) {
					if (c.v.event) {
						q = c.v.event;
						v = q.srcElement
					} else {
						try {
							var m = 0;
							for (m = 0; m < c.v.frames.length; m++) {
								if (c.v.frames[m].event) {
									q = c.v.frames[m].event;
									v = q.srcElement
								}
							}
						} catch (o) {}
					}
				} else {
					if (q.target) {
						v = q.target
					} else {
						if (q.srcElement) {
							v = q.srcElement
						}
					}
				}
				if (q && v) {
					var w = null;
					var h = c.eY(v);
					if (h && h.href) {
						w = h;
						k = "A";
						l = escape(c.bk(w));
						p = escape(w.href);
						if (!p) {
							p = "-"
						}
					} else {
						if (v.tagName == c.dq && (v.type == c.cP || v.type == c.db || v.type == c.dA)) {
							w = v;
							k = c.dq;
							l = escape(c.bk(w))
						} else {
							w = c.cW(v);
							if (w) {
								k = w.tagName;
								l = escape(c.bk(w))
							}
						}
					}
					if (w) {
						var u = undefined;
						if (k && k != "-") {
							var j = c.dh(w);
							c.bv = c.bV(w, b);
							c.aR = c.bV(w, f);
							var t = 0;
							var s = 0;
							if (typeof(q.pageX) != "undefined") {
								t = q.pageX;
								s = q.pageY
							} else {
								if (typeof(q.x) != "undefined") {
									t = q.x;
									s = q.y
								}
							}
							if (j) {
								var n = escape(c.bk(j));
								u = k + "*" + l + "*" + t + "*" + s + "*" + n
							} else {
								u = k + "*" + l + "*" + t + "*" + s
							}
							var r = Math.floor((new Date()).getTime() / 1000);
							if (l.toLowerCase().indexOf("__ad_") == 0 || l.toLowerCase().indexOf("__zntg_") == 0) {
								c.dz(l, r, p)
							} else {
								if (j) {
									l = escape(c.bk(j));
									if (l.toLowerCase().indexOf("__ad_") == 0 || l.toLowerCase().indexOf("__zntg_") == 0) {
										c.dz(l, r, p)
									}
								}
							}
						}
						if (k && c.bP() != "") {
							try {
								if (c.V == 0 && c.aN == 1) {
									c.V = 1;
									c.aN = c.V + 1
								} else {
									if (c.aN == 1) {
										c.V = 2
									} else {
										c.V = c.aN
									}
									c.aN = c.V + 1
								}
							} catch (o) {
								c.V = 99
							}
							c.bZ(u, c.V, p);
							c.cZ(100)
						}
					}
				}
			}
		},
		cZ: function(i) {
			var h = (new Date()).getTime();
			while (((new Date()).getTime() - h) < i) {}
		},
		cL: function(h) {
			var i = (new Date()).getTime();
			if (h == 1) {
				i = Math.floor(i / 1000)
			}
			return "ozrand=" + i
		},
		bZ: function(i, h, j) {
			if (this.bP() != "" && this.ak(1) && this.aw && this.au && i && h > 0 && j) {
				this.bW.src = this.bP() + "?" + h + "&" + this.ak(1) + "&" + this.aw + "&" + this.au + "&" + i + "&" + j + "&" + this.dr() + "&" + this.cL(1)
			}
		},
		fz: function(i, h, j, k) {
			if (this.bP() != "" && k && this.aw && i && h > 0 && j) {
				this.bW.src = this.bP() + "?" + h + "&" + k + "&" + this.aw + "&-&" + i + "&" + j + "&" + this.dr() + "&" + this.cL(1)
			}
		},
		ej: function(j, h, k, i, l) {
			if (this.bP() != "" && l && this.aw && j && h > 0 && k) {
				this.bW.src = this.bP() + "?" + h + "&" + l + "&" + this.aw + "&-&" + j + "&" + k + "&" + this.dr() + "&" + i + "&" + this.cL(1)
			}
		},
		fg: function(h) {
			var j;
			try {
				if (typeof(h) != "undefined") {
					if (h.length > this.aE) {
						h = h.substring(0, this.aE)
					}
					j = escape("&" + h)
				}
			} catch (i) {}
			if (typeof(j) == "undefined") {
				j = "-"
			}
			this.bC = j;
			this.aM = 1
		},
		co: function(i, k) {
			var h;
			try {
				if (typeof(i) != "undefined") {
					if (i.length > this.aE) {
						i = i.substring(0, this.aE)
					}
					h = escape("&" + i)
				}
			} catch (j) {}
			if (typeof(h) == "undefined") {
				h = "-"
			}
			if (k) {
				this.ai = h
			}
			return h
		},
		dp: function(k, j) {
			var h;
			try {
				if (typeof(k) != "undefined" && k.indexOf("#") == 0 && k.length > 1) {
					h = escape(k)
				}
			} catch (i) {}
			if (typeof(h) == "undefined") {
				h = "-"
			}
			if (j) {
				this.au = h
			}
			return h
		},
		cQ: function(j) {
			try {
				var i = /^\d+$/;
				return i.test(j)
			} catch (h) {}
			return false
		},
		fE: function() {
			var h = undefined;
			try {
				h = this.cf.userAgent;
				if (h && h.toLowerCase().indexOf("alexa") > -1) {
					return 1
				}
			} catch (i) {}
			return 0
		},
		dE: function() {
			var h = 0,
				i = 0;
			if (this.bY) {
				h = this.bY.width;
				i = this.bY.height;
				if (h && i && this.cQ(h) && this.cQ(i)) {
					return h + "*" + i
				}
			}
			return "0*0"
		},
		cU: function() {
			var o = "-";
			try {
				o = escape(this.aC.title.substring(0, 30))
			} catch (r) {}
			if (!o) {
				o = "-"
			}
			var p = undefined;
			try {
				if (_ozuid) {
					p = escape(_ozuid)
				}
			} catch (r) {}
			if (!p) {
				p = "-"
			}
			var s = undefined;
			try {
				if (_ozvid) {
					s = escape(_ozvid)
				}
			} catch (r) {}
			if (!s) {
				s = "-"
			}
			var m = this.df();
			if (!m) {
				m = "-"
			}
			var u = 0;
			try {
				var i = new Date().getTime();
				if (_oztime && i > _oztime) {
					u = i - _oztime
				}
			} catch (r) {}
			var l = undefined;
			try {
				if (_oznvs) {
					l = escape(_oznvs)
				}
			} catch (r) {}
			if (!l) {
				l = "-"
			}
			if (!this.aG) {
				this.aG = "-"
			}
			var n = Math.floor(new Date().getTime() / 1000);
			var t = this.da(n);
			var q = "0";
			if (t.indexOf("&ltime=") != -1) {
				q = t.substr(t.indexOf("&ltime=") + 7)
			}
			var v = this.cX(true, n);
			var j = this.cK();
			var k = this.cd();
			return "ozlvd=" + q + "&ozept=" + o + "&ozsru=" + p + "&ozsat=" + escape("-") + "&ozver=" + escape("-") + "&ozscr=" + this.dE() + "&ozplt=" + u + "&ozos=" + escape("-") + "&ozalx=" + this.fE() + "&oznvs=" + l + "&ozsac=" + m + "&ozccu=" + escape(t) + "&ozccy=" + escape(v) + "&ozcck=" + escape(j) + "&ozccs=" + escape(k) + "&ozvid=" + s + "&ozsi=" + escape(this.aG)
		},
		dr: function() {
			var m = undefined;
			try {
				if (_ozuid) {
					m = escape(_ozuid)
				}
			} catch (n) {}
			if (!m) {
				m = "-"
			}
			var o = undefined;
			try {
				if (_ozvid) {
					o = escape(_ozvid)
				}
			} catch (n) {}
			if (!o) {
				o = "-"
			}
			if (!this.bv) {
				this.bv = "-"
			}
			if (!this.aR) {
				this.aR = "-"
			}
			if (!this.ai) {
				this.ai = "-"
			}
			if (!this.aG) {
				this.aG = "-"
			}
			if (!this.bC) {
				this.bC = "-"
			}
			if (!this.aM || this.aM != 1) {
				this.bC = "-"
			}
			this.aM = 2;
			var k = undefined;
			try {
				if (_oznvs) {
					k = escape(_oznvs)
				}
			} catch (n) {}
			if (!k) {
				k = "-"
			}
			var l = Math.floor(new Date().getTime() / 1000);
			var p = this.da(l);
			var q = this.cX(false, l);
			var i = this.cK();
			var j = this.cd();
			return "ozsru=" + m + "&ozscr=" + this.dE() + "&ozpoc=" + escape(this.bv) + "&ozprm=" + this.ai + "&oznvs=" + k + "&ozrec=" + escape(this.aR) + "&ozccu=" + escape(p) + "&ozccy=" + escape(q) + "&ozcck=" + escape(i) + "&ozccs=" + escape(j) + "&ozvid=" + o + "&ozsi=" + escape(this.aG) + "&ozclickprm=" + this.bC
		},
		ec: function(m, h) {
			var i = undefined;
			if (a == 0) {
				i = this.ak(1)
			} else {
				i = this.cc(1)
			}
			if (this.ae && this.ae != "-") {
				this.aw = this.ae
			} else {
				this.aw = this.bS(1)
			}
			var j = i;
			var k = this.aw;
			j = this.bb(j, "ozs");
			k = this.bb(k, "ozs");
			this.cY.src = this.dG() + "?1&" + j + "&" + k + "&" + m + "&" + h + "&" + this.cU();
			if (m == "-") {
				this.ae = i
			} else {
				this.ae = i + m
			}
		},
		fa: function(m, h) {
			var i = undefined;
			if (a == 0) {
				i = this.ak(1)
			} else {
				i = this.cc(1)
			}
			if (this.ae && this.ae != "-") {
				this.aw = this.ae
			} else {
				this.aw = this.bS(1)
			}
			var j = i;
			var k = this.aw;
			this.cY.src = this.dG() + "?1&" + j + "&" + k + "&" + m + "&" + h + "&" + this.cU();
			if (m == "-") {
				this.ae = i
			} else {
				this.ae = i + m
			}
		},
		bb: function(i, k) {
			var j;
			var h = 0;
			while (h < this.cv) {
				j = new RegExp("%26" + k + "%3D(.+?)%26", "g");
				if (i.match(j)) {
					i = i.replace(j, "%26");
					h++
				} else {
					break
				}
			}
			j = new RegExp("%26" + k + "%3D(.+?)$", "i");
			i = i.replace(j, "");
			j = new RegExp("%3F" + k + "%3D(.+?)%26");
			i = i.replace(j, "%3F");
			j = new RegExp("%3F" + k + "%3D(.+?)$");
			i = i.replace(j, "");
			return i
		},
		cj: function(i) {
			var h = 1;
			try {
				if (i.eventPhase && i.eventPhase == 0) {
					h = 0
				}
			} catch (j) {}
			if (h) {
				if (!this.v.event) {
					this.bB(i)
				} else {
					this.bB()
				}
			}
		},
		ev: function(h, n, m, k) {
			var j = "";
			var o = "-";
			var i = "-";
			var l = "-";
			if (h && h != "") {
				if (this.V < this.dJ) {
					this.V++;
					if (typeof(n) != "undefined" && n != "") {
						i = n
					}
					if (typeof(m) != "undefined" && m != "") {
						o = m;
						j = i + "*" + h + "*0*0*" + m
					} else {
						j = i + "*" + h + "*0*0"
					}
					if (typeof(k) != "undefined" && k != "") {
						if (k.length > this.am) {
							k = k.substring(0, this.am)
						}
						l = k
					}
					this.bZ(j, this.V, l);
					this.cZ(100)
				}
			}
		},
		eL: function(i, k) {
			var l = 0;
			if (typeof(e) != "undefined" && e == 1) {
				l = 1;
				this.V = 0;
				this.aN = 1
			}
			var j = this.co(i, l);
			var h = this.dp(k, l);
			this.ec(h, j)
		},
		cD: function() {
			var o = undefined;
			try {
				if (_ozuid) {
					o = escape(_ozuid)
				}
			} catch (l) {}
			if (!o) {
				o = "-"
			}
			var n = Math.floor(new Date().getTime() / 1000);
			var j = this.da(n);
			var m = this.cX(false, n);
			var i = this.cK();
			var k = this.cd();
			return "ozsru=" + o + "&ozscr=" + this.dE() + "&ozprm=" + this.ai + "&ozccu=" + escape(j) + "&ozccy=" + escape(m) + "&ozcck=" + escape(i) + "&ozccs=" + escape(k)
		},
		ft: function(m, i) {
			var h = undefined;
			if (a == 0) {
				h = this.ak(1)
			} else {
				h = this.cc(1)
			}
			var j = h;
			var k = this.bS(1);
			j = this.bb(j, "ozs");
			k = this.bb(k, "ozs");
			this.cw.src = this.dv() + "?" + j + "&" + k + "&" + m + "&" + i + "&" + this.cD()
		},
		dZ: function(l, i) {
			var h = "-";
			var k = "-";
			if (typeof(l) != "undefined" && l != "") {
				h = escape(l);
				try {
					if (typeof(i) != "undefined" && i != "") {
						if (i.length > this.aE) {
							i = i.substring(0, this.aE)
						}
						k = escape("&" + i)
					}
				} catch (j) {}
				this.ft(h, k);
				this.cZ(100)
			}
		},
		dz: function(k, j, o) {
			k = escape(k);
			var i = this.ak(0);
			var h = this.bF(this.bf);
			if (h) {
				var m = 0,
					n = 0,
					p = 0;
				for (m = 0; m < h.length; m++) {
					if (h.charAt(m) == "&") {
						n++;
						if (n == 1) {
							p = m + 1
						}
					}
				}
				if (n < 4) {
					h = h + "&" + k + "*" + j + "*" + i + "*" + o
				} else {
					if (n == 4 && p > 0) {
						h = h.substr(p) + "&" + k + "*" + j + "*" + i + "*" + o
					}
				}
			} else {
				h = k + "*" + j + "*" + i + "*" + o
			}
			this.bD(this.bf, h, 0, this.ac())
		},
		df: function() {
			var o = undefined;
			var n = Math.floor((new Date()).getTime() / 1000);
			try {
				var j = "";
				var m = this.bF(this.bf).split("&");
				for (var l = 0; l < m.length; l++) {
					var i = m[l].split("*");
					if ((n - i[1]) < 900 && i[2] == escape(this.bS(0)) && i[3] == this.ak(0)) {
						o = i[0]
					} else {
						j += (j == "" ? "" : "&") + m[l]
					}
				}
				this.bD(this.bf, j, 0, this.ac())
			} catch (k) {}
			return o
		},
		da: function(o) {
			var s = "-";
			try {
				s = this.bF(this.bi);
				var r = new Date();
				var v = 0;
				if (!s) {
					var q = Math.round(r.getTime() / 1000);
					var j = q.toString(16);
					var k = j.length;
					j = j.substring(k - 7, k);
					var w = "";
					for (var u = 0; u < 3; u++) {
						var i = Math.floor(Math.random() * 255);
						var l = i.toString(16);
						w += (l.length == 1 ? "0" : "") + l
					}
					var t = "v" + j + w + ".0";
					s = "vid=" + t + "&ctime=" + o + "&ltime=" + v
				} else {
					if (s && s.indexOf("ctime=") != -1) {
						var n = s.substr(s.indexOf("ctime=") + 6);
						var m = n.indexOf("&");
						if (m != -1) {
							n = n.substring(0, m)
						}
						if (n.match(/^\d*$/)) {
							v = new Number(n)
						}
					}
					s = s.substring(0, s.lastIndexOf("&ctime")) + "&ctime=" + o + "&ltime=" + v
				}
				this.bD(this.bi, s, new Date(r.getTime() + 252288000000), this.ac())
			} catch (p) {}
			return s
		},
		cX: function(y, D) {
			var o = "-";
			try {
				var q = this.bF(this.ar);
				var r = this.bF(this.bi);
				if (q) {
					o = q;
					o = o.substring(0, o.lastIndexOf("&ctime")) + r.substring(r.lastIndexOf("&ctime")) + "&compid=" + this.bp;
					this.bD(this.ar, o, 0, this.ac())
				}
				if (y) {
					var A = 0;
					var j = "-";
					var B = "-";
					var z = this.ak(0);
					var w = this.bS(0);
					var u = 1;
					var G = 0;
					if (w != "-") {
						var i = this.dG().split(";")[3].split(":");
						for (var s = 0; s < i.length; s++) {
							if (w.indexOf(i[s]) != -1) {
								u = 0
							}
						}
						if (u == 1) {
							A = 1
						}
					}
					var F = z.lastIndexOf("%3Fozu_sid%3D");
					if (F == -1) {
						F = z.lastIndexOf("%26ozu_sid%3D")
					}
					var x = z.lastIndexOf("%3Fozs%3D");
					if (x == -1) {
						x = z.lastIndexOf("%26ozs%3D")
					}
					if (F != -1 && F > x) {
						A = 1;
						var I = z.split(/%3Fozu_sid%3D|%26ozu_sid%3D/);
						if (I.length > 1) {
							var t = I[1];
							var k = t.indexOf("%26");
							if (k != -1) {
								t = t.substr(0, k)
							}
							j = t;
							G = 1
						}
					}
					if (x != -1 && x > F) {
						A = 1;
						var C = z.split(/%3Fozs%3D|%26ozs%3D/);
						for (var s = 1; s < C.length && s < 4; s++) {
							var n = C[s];
							var k = n.indexOf("%26");
							if (k != -1) {
								n = n.substr(0, k)
							}
							if (n.indexOf("-") == -1) {
								B = n;
								G = 2;
								break
							} else {
								var m = n.split("-");
								if (m.length == 2 && m[1] == this.bp) {
									B = m[0];
									G = 2;
									break
								}
							}
						}
					}
					if (!q && w == "-") {
						A = 1
					}
					if (A) {
						o = "erefer=" + w + "&eurl=" + z + "&etime=" + D + r.substring(r.lastIndexOf("&ctime")) + "&compid=" + this.bp;
						this.bD(this.ar, o, 0, this.ac());
						if (j != "-" || B != "-") {
							var v = "";
							var p = o.indexOf("&etime=");
							if (p != -1) {
								v = "etime=" + D + "&ozu_sid=" + j + "&ozs=" + B + "&flag=" + G + "&compid=" + this.bp;
								this.bD(this.cn, v, new Date(new Date().getTime() + 30 * 86400 * 1000), this.ac());
								this.bD(this.ct, v, 0, this.ac())
							}
						}
					}
				}
			} catch (E) {}
			return o
		},
		cK: function() {
			var h = "-";
			try {
				var j = this.bF(this.cn);
				if (j) {
					h = j
				}
			} catch (i) {}
			return h
		},
		cd: function() {
			var i = "-";
			try {
				var j = this.bF(this.ct);
				if (j) {
					i = j
				}
			} catch (h) {}
			return i
		},
		cG: function() {
			try {
				if (typeof(this.cE) == "undefined") {
					this.eV();
					this.cE = 1;
					this.aN = 1;
					this.dO = 1
				} else {
					this.cE = 2;
					this.dO = 2
				}
				this.aG = this.dH();
				if (this.dO == 1) {
					this.co(this.v._ozprm, 1);
					this.dp(this.v._ozurltail, 1);
					if (this.v.onload) {
						this.v.__99_670_pageonload = this.v.onload
					}
					this.v.onload = this.dS;
					this.cF(this.aC, this.bB);
					this.fa(this.au, this.ai)
				}
			} catch (h) {}
			return this
		}
	};
	if (typeof(_99_670) == "undefined") {
		_99_670 = c.cG();
		__ozclk = function() {
			try {
				var h = _99_670.v.event || arguments.callee.caller.arguments[0];
				_99_670.cj(h)
			} catch (i) {}
		};
		__ozEvent = function(i, h) {
			_99_670.dZ(i, h)
		};
		__ozfac2 = function(h, i) {
			_99_670.eL(h, i)
		};
		__ozfaj2 = function(h, k, j, i) {
			_99_670.ev(h, k, j, i)
		};
		__setClickPrm = function(h) {
			_99_670.fg(h)
		}
	}
})();