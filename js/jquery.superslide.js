/*!
 * SuperSlide v2.1.1 
 * 轻松解决网站大部分特效展示问题
 * 详尽信息请看官网：http://www.SuperSlide2.com/
 *
 * Copyright 2011-2013, 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途

 * v2.1.1：修复当调用多个SuperSlide，并设置returnDefault:true 时返回defaultIndex索引错误

 */
! function(b) {
	b.fn.slide = function(a) {
		return b.fn.slide.defaults = {
			type: "slide",
			effect: "fade",
			autoPlay: !1,
			delayTime: 500,
			interTime: 2500,
			triggerTime: 150,
			defaultIndex: 0,
			titCell: ".hd li",
			mainCell: ".bd",
			targetCell: null,
			trigger: "mouseover",
			scroll: 1,
			vis: 1,
			titOnClassName: "on",
			autoPage: !1,
			prevCell: ".prev",
			nextCell: ".next",
			pageStateCell: ".pageState",
			opp: !1,
			pnLoop: !0,
			easing: "swing",
			startFun: null,
			endFun: null,
			switchLoad: null,
			playStateCell: ".playState",
			mouseOverStop: !0,
			defaultPlay: !0,
			returnDefault: !1
		}, this.each(function() {
			var a8 = b.extend({}, b.fn.slide.defaults, a),
				a7 = b(this),
				a6 = a8.effect,
				a5 = b(a8.prevCell, a7),
				a4 = b(a8.nextCell, a7),
				a3 = b(a8.pageStateCell, a7),
				a2 = b(a8.playStateCell, a7),
				a1 = b(a8.titCell, a7),
				a0 = a1.size(),
				aZ = b(a8.mainCell, a7),
				aY = aZ.children().size(),
				aX = a8.switchLoad,
				aW = b(a8.targetCell, a7),
				aV = parseInt(a8.defaultIndex),
				aU = parseInt(a8.delayTime),
				aT = parseInt(a8.interTime);
			parseInt(a8.triggerTime);
			var am, aS = parseInt(a8.scroll),
				aR = parseInt(a8.vis),
				aQ = "false" == a8.autoPlay || 0 == a8.autoPlay ? !1 : !0,
				aP = "false" == a8.opp || 0 == a8.opp ? !1 : !0,
				aO = "false" == a8.autoPage || 0 == a8.autoPage ? !1 : !0,
				aN = "false" == a8.pnLoop || 0 == a8.pnLoop ? !1 : !0,
				aM = "false" == a8.mouseOverStop || 0 == a8.mouseOverStop ? !1 : !0,
				aE = "false" == a8.defaultPlay || 0 == a8.defaultPlay ? !1 : !0,
				aC = "false" == a8.returnDefault || 0 == a8.returnDefault ? !1 : !0,
				aB = 0,
				aA = 0,
				az = 0,
				ay = 0,
				ax = a8.easing,
				aw = null,
				av = null,
				au = null,
				at = a8.titOnClassName,
				ar = a1.index(a7.find("." + at)),
				aq = aV = -1 == ar ? aV : ar,
				ap = aV,
				ao = aV,
				an = aY >= aR ? 0 != aY % aS ? aY % aS : aS : 0,
				al = "leftMarquee" == a6 || "topMarquee" == a6 ? !0 : !1,
				ak = function() {
					b.isFunction(a8.startFun) && a8.startFun(aV, a0, a7, b(a8.titCell, a7), aZ, aW, a5, a4)
				},
				aj = function() {
					b.isFunction(a8.endFun) && a8.endFun(aV, a0, a7, b(a8.titCell, a7), aZ, aW, a5, a4)
				},
				ai = function() {
					a1.removeClass(at), aE && a1.eq(ap).addClass(at)
				};
			if ("menu" == a8.type) {
				return aE && a1.removeClass(at).eq(aV).addClass(at), a1.hover(function() {
					am = b(this).find(a8.targetCell);
					var c = a1.index(b(this));
					av = setTimeout(function() {
						switch (aV = c, a1.removeClass(at).eq(aV).addClass(at), ak(), a6) {
							case "fade":
								am.stop(!0, !0).animate({
									opacity: "show"
								}, aU, ax, aj);
								break;
							case "slideDown":
								am.stop(!0, !0).animate({
									height: "show"
								}, aU, ax, aj)
						}
					}, a8.triggerTime)
				}, function() {
					switch (clearTimeout(av), a6) {
						case "fade":
							am.animate({
								opacity: "hide"
							}, aU, ax);
							break;
						case "slideDown":
							am.animate({
								height: "hide"
							}, aU, ax)
					}
				}), aC && a7.hover(function() {
					clearTimeout(au)
				}, function() {
					au = setTimeout(ai, aU)
				}), void 0
			}
			if (0 == a0 && (a0 = aY), al && (a0 = 2), aO) {
				if (aY >= aR) {
					if ("leftLoop" == a6 || "topLoop" == a6) {
						a0 = 0 != aY % aS ? (0 ^ aY / aS) + 1 : aY / aS
					} else {
						var ah = aY - aR;
						a0 = 1 + parseInt(0 != ah % aS ? ah / aS + 1 : ah / aS), 0 >= a0 && (a0 = 1)
					}
				} else {
					a0 = 1
				}
				a1.html("");
				var ag = "";
				if (1 == a8.autoPage || "true" == a8.autoPage) {
					for (var af = 0; a0 > af; af++) {
						ag += "<li>" + (af + 1) + "</li>"
					}
				} else {
					for (var af = 0; a0 > af; af++) {
						ag += a8.autoPage.replace("$", af + 1)
					}
				}
				a1.html(ag);
				var a1 = a1.children()
			}
			if (aY >= aR) {
				aZ.children().each(function() {
					b(this).width() > az && (az = b(this).width(), aA = b(this).outerWidth(!0)), b(this).height() > ay && (ay = b(this).height(), aB = b(this).outerHeight(!0))
				});
				var ae = aZ.children(),
					ad = function() {
						for (var c = 0; aR > c; c++) {
							ae.eq(c).clone().addClass("clone").appendTo(aZ)
						}
						for (var c = 0; an > c; c++) {
							ae.eq(aY - c - 1).clone().addClass("clone").prependTo(aZ)
						}
					};
				switch (a6) {
					case "fold":
						aZ.css({
							position: "relative",
							width: aA,
							height: aB
						}).children().css({
							position: "absolute",
							width: az,
							left: 0,
							top: 0,
							display: "none"
						});
						break;
					case "top":
						aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + aR * aB + 'px"></div>').css({
							top: -(aV * aS) * aB,
							position: "relative",
							padding: "0",
							margin: "0"
						}).children().css({
							height: ay
						});
						break;
					case "left":
						aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + aR * aA + 'px"></div>').css({
							width: aY * aA,
							left: -(aV * aS) * aA,
							position: "relative",
							overflow: "hidden",
							padding: "0",
							margin: "0"
						}).children().css({
							"float": "left",
							width: az
						});
						break;
					case "leftLoop":
					case "leftMarquee":
						ad(), aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + aR * aA + 'px"></div>').css({
							width: (aY + aR + an) * aA,
							position: "relative",
							overflow: "hidden",
							padding: "0",
							margin: "0",
							left: -(an + aV * aS) * aA
						}).children().css({
							"float": "left",
							width: az
						});
						break;
					case "topLoop":
					case "topMarquee":
						ad(), aZ.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + aR * aB + 'px"></div>').css({
							height: (aY + aR + an) * aB,
							position: "relative",
							padding: "0",
							margin: "0",
							top: -(an + aV * aS) * aB
						}).children().css({
							height: ay
						})
				}
			}
			var aI = function(d) {
					var c = d * aS;
					return d == a0 ? c = aY : -1 == d && 0 != aY % aS && (c = -aY % aS), c
				},
				ba = function(e) {
					var m = function(g) {
						for (var f = g; aR + g > f; f++) {
							e.eq(f).find("img[" + aX + "]").each(function() {
								var h = b(this);
								if (h.attr("src", h.attr(aX)).removeAttr(aX), aZ.find(".clone")[0]) {
									for (var o = aZ.children(), n = 0; n < o.size(); n++) {
										o.eq(n).find("img[" + aX + "]").each(function() {
											b(this).attr(aX) == h.attr("src") && b(this).attr("src", b(this).attr(aX)).removeAttr(aX)
										})
									}
								}
							})
						}
					};
					switch (a6) {
						case "fade":
						case "fold":
						case "top":
						case "left":
						case "slideDown":
							m(aV * aS);
							break;
						case "leftLoop":
						case "topLoop":
							m(an + aI(ao));
							break;
						case "leftMarquee":
						case "topMarquee":
							var l = "leftMarquee" == a6 ? aZ.css("left").replace("px", "") : aZ.css("top").replace("px", ""),
								k = "leftMarquee" == a6 ? aA : aB,
								j = an;
							if (0 != l % k) {
								var i = Math.abs(0 ^ l / k);
								j = 1 == aV ? an + i : an + i - 1
							}
							m(j)
					}
				},
				aD = function(f) {
					if (!aE || aq != aV || f || al) {
						if (al ? aV >= 1 ? aV = 1 : 0 >= aV && (aV = 0) : (ao = aV, aV >= a0 ? aV = 0 : 0 > aV && (aV = a0 - 1)), ak(), null != aX && ba(aZ.children()), aW[0] && (am = aW.eq(aV), null != aX && ba(aW), "slideDown" == a6 ? (aW.not(am).stop(!0, !0).slideUp(aU), am.slideDown(aU, ax, function() {
								aZ[0] || aj()
							})) : (aW.not(am).stop(!0, !0).hide(), am.animate({
								opacity: "show"
							}, aU, function() {
								aZ[0] || aj()
							}))), aY >= aR) {
							switch (a6) {
								case "fade":
									aZ.children().stop(!0, !0).eq(aV).animate({
										opacity: "show"
									}, aU, ax, function() {
										aj()
									}).siblings().hide();
									break;
								case "fold":
									aZ.children().stop(!0, !0).eq(aV).animate({
										opacity: "show"
									}, aU, ax, function() {
										aj()
									}).siblings().animate({
										opacity: "hide"
									}, aU, ax);
									break;
								case "top":
									aZ.stop(!0, !1).animate({
										top: -aV * aS * aB
									}, aU, ax, function() {
										aj()
									});
									break;
								case "left":
									aZ.stop(!0, !1).animate({
										left: -aV * aS * aA
									}, aU, ax, function() {
										aj()
									});
									break;
								case "leftLoop":
									var e = ao;
									aZ.stop(!0, !0).animate({
										left: -(aI(ao) + an) * aA
									}, aU, ax, function() {
										-1 >= e ? aZ.css("left", -(an + (a0 - 1) * aS) * aA) : e >= a0 && aZ.css("left", -an * aA), aj()
									});
									break;
								case "topLoop":
									var e = ao;
									aZ.stop(!0, !0).animate({
										top: -(aI(ao) + an) * aB
									}, aU, ax, function() {
										-1 >= e ? aZ.css("top", -(an + (a0 - 1) * aS) * aB) : e >= a0 && aZ.css("top", -an * aB), aj()
									});
									break;
								case "leftMarquee":
									var h = aZ.css("left").replace("px", "");
									0 == aV ? aZ.animate({
										left: ++h
									}, 0, function() {
										aZ.css("left").replace("px", "") >= 0 && aZ.css("left", -aY * aA)
									}) : aZ.animate({
										left: --h
									}, 0, function() {
										aZ.css("left").replace("px", "") <= -(aY + an) * aA && aZ.css("left", -an * aA)
									});
									break;
								case "topMarquee":
									var g = aZ.css("top").replace("px", "");
									0 == aV ? aZ.animate({
										top: ++g
									}, 0, function() {
										aZ.css("top").replace("px", "") >= 0 && aZ.css("top", -aY * aB)
									}) : aZ.animate({
										top: --g
									}, 0, function() {
										aZ.css("top").replace("px", "") <= -(aY + an) * aB && aZ.css("top", -an * aB)
									})
							}
						}
						a1.removeClass(at).eq(aV).addClass(at), aq = aV, aN || (a4.removeClass("nextStop"), a5.removeClass("prevStop"), 0 == aV && a5.addClass("prevStop"), aV == a0 - 1 && a4.addClass("nextStop")), a3.html("<span>" + (aV + 1) + "</span>/" + a0)
					}
				};
			aE && aD(!0), aC && a7.hover(function() {
				clearTimeout(au)
			}, function() {
				au = setTimeout(function() {
					aV = ap, aE ? aD() : "slideDown" == a6 ? am.slideUp(aU, ai) : am.animate({
						opacity: "hide"
					}, aU, ai), aq = aV
				}, 300)
			});
			var a9 = function(c) {
					aw = setInterval(function() {
						aP ? aV-- : aV++, aD()
					}, c ? c : aT)
				},
				aJ = function(c) {
					aw = setInterval(aD, c ? c : aT)
				},
				aF = function() {
					aM || (clearInterval(aw), a9())
				},
				s = function() {
					(aN || aV != a0 - 1) && (aV++, aD(), al || aF())
				},
				aK = function() {
					(aN || 0 != aV) && (aV--, aD(), al || aF())
				},
				aG = function() {
					clearInterval(aw), al ? aJ() : a9(), a2.removeClass("pauseState")
				},
				aa = function() {
					clearInterval(aw), a2.addClass("pauseState")
				};
			if (aQ ? al ? (aP ? aV-- : aV++, aJ(), aM && aZ.hover(aa, aG)) : (a9(), aM && a7.hover(aa, aG)) : (al && (aP ? aV-- : aV++), a2.addClass("pauseState")), a2.click(function() {
					a2.hasClass("pauseState") ? aG() : aa()
				}), "mouseover" == a8.trigger ? a1.hover(function() {
					var c = a1.index(this);
					av = setTimeout(function() {
						aV = c, aD(), aF()
					}, a8.triggerTime)
				}, function() {
					clearTimeout(av)
				}) : a1.click(function() {
					aV = a1.index(this), aD(), aF()
				}), al) {
				if (a4.mousedown(s), a5.mousedown(aK), aN) {
					var aL, aH = function() {
							aL = setTimeout(function() {
								clearInterval(aw), aJ(0 ^ aT / 10)
							}, 150)
						},
						ac = function() {
							clearTimeout(aL), clearInterval(aw), aJ()
						};
					a4.mousedown(aH), a4.mouseup(ac), a5.mousedown(aH), a5.mouseup(ac)
				}
				"mouseover" == a8.trigger && (a4.hover(s, function() {}), a5.hover(aK, function() {}))
			} else {
				a4.click(s), a5.click(aK)
			}
		})
	}
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(g, f, j, i, h) {
		return jQuery.easing[jQuery.easing.def](g, f, j, i, h)
	},
	easeInQuad: function(g, f, j, i, h) {
		return i * (f /= h) * f + j
	},
	easeOutQuad: function(g, f, j, i, h) {
		return -i * (f /= h) * (f - 2) + j
	},
	easeInOutQuad: function(g, f, j, i, h) {
		return (f /= h / 2) < 1 ? i / 2 * f * f + j : -i / 2 * (--f * (f - 2) - 1) + j
	},
	easeInCubic: function(g, f, j, i, h) {
		return i * (f /= h) * f * f + j
	},
	easeOutCubic: function(g, f, j, i, h) {
		return i * ((f = f / h - 1) * f * f + 1) + j
	},
	easeInOutCubic: function(g, f, j, i, h) {
		return (f /= h / 2) < 1 ? i / 2 * f * f * f + j : i / 2 * ((f -= 2) * f * f + 2) + j
	},
	easeInQuart: function(g, f, j, i, h) {
		return i * (f /= h) * f * f * f + j
	},
	easeOutQuart: function(g, f, j, i, h) {
		return -i * ((f = f / h - 1) * f * f * f - 1) + j
	},
	easeInOutQuart: function(g, f, j, i, h) {
		return (f /= h / 2) < 1 ? i / 2 * f * f * f * f + j : -i / 2 * ((f -= 2) * f * f * f - 2) + j
	},
	easeInQuint: function(g, f, j, i, h) {
		return i * (f /= h) * f * f * f * f + j
	},
	easeOutQuint: function(g, f, j, i, h) {
		return i * ((f = f / h - 1) * f * f * f * f + 1) + j
	},
	easeInOutQuint: function(g, f, j, i, h) {
		return (f /= h / 2) < 1 ? i / 2 * f * f * f * f * f + j : i / 2 * ((f -= 2) * f * f * f * f + 2) + j
	},
	easeInSine: function(g, f, j, i, h) {
		return -i * Math.cos(f / h * (Math.PI / 2)) + i + j
	},
	easeOutSine: function(g, f, j, i, h) {
		return i * Math.sin(f / h * (Math.PI / 2)) + j
	},
	easeInOutSine: function(g, f, j, i, h) {
		return -i / 2 * (Math.cos(Math.PI * f / h) - 1) + j
	},
	easeInExpo: function(g, f, j, i, h) {
		return 0 == f ? j : i * Math.pow(2, 10 * (f / h - 1)) + j
	},
	easeOutExpo: function(g, f, j, i, h) {
		return f == h ? j + i : i * (-Math.pow(2, -10 * f / h) + 1) + j
	},
	easeInOutExpo: function(g, f, j, i, h) {
		return 0 == f ? j : f == h ? j + i : (f /= h / 2) < 1 ? i / 2 * Math.pow(2, 10 * (f - 1)) + j : i / 2 * (-Math.pow(2, -10 * --f) + 2) + j
	},
	easeInCirc: function(g, f, j, i, h) {
		return -i * (Math.sqrt(1 - (f /= h) * f) - 1) + j
	},
	easeOutCirc: function(g, f, j, i, h) {
		return i * Math.sqrt(1 - (f = f / h - 1) * f) + j
	},
	easeInOutCirc: function(g, f, j, i, h) {
		return (f /= h / 2) < 1 ? -i / 2 * (Math.sqrt(1 - f * f) - 1) + j : i / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + j
	},
	easeInElastic: function(j, i, p, o, n) {
		var m = 1.70158,
			l = 0,
			k = o;
		if (0 == i) {
			return p
		}
		if (1 == (i /= n)) {
			return p + o
		}
		if (l || (l = 0.3 * n), k < Math.abs(o)) {
			k = o;
			var m = l / 4
		} else {
			var m = l / (2 * Math.PI) * Math.asin(o / k)
		}
		return -(k * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l)) + p
	},
	easeOutElastic: function(j, i, p, o, n) {
		var m = 1.70158,
			l = 0,
			k = o;
		if (0 == i) {
			return p
		}
		if (1 == (i /= n)) {
			return p + o
		}
		if (l || (l = 0.3 * n), k < Math.abs(o)) {
			k = o;
			var m = l / 4
		} else {
			var m = l / (2 * Math.PI) * Math.asin(o / k)
		}
		return k * Math.pow(2, -10 * i) * Math.sin((i * n - m) * 2 * Math.PI / l) + o + p
	},
	easeInOutElastic: function(j, i, p, o, n) {
		var m = 1.70158,
			l = 0,
			k = o;
		if (0 == i) {
			return p
		}
		if (2 == (i /= n / 2)) {
			return p + o
		}
		if (l || (l = n * 0.3 * 1.5), k < Math.abs(o)) {
			k = o;
			var m = l / 4
		} else {
			var m = l / (2 * Math.PI) * Math.asin(o / k)
		}
		return 1 > i ? -0.5 * k * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l) + p : 0.5 * k * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * n - m) * 2 * Math.PI / l) + o + p
	},
	easeInBack: function(h, g, l, k, j, i) {
		return void 0 == i && (i = 1.70158), k * (g /= j) * g * ((i + 1) * g - i) + l
	},
	easeOutBack: function(h, g, l, k, j, i) {
		return void 0 == i && (i = 1.70158), k * ((g = g / j - 1) * g * ((i + 1) * g + i) + 1) + l
	},
	easeInOutBack: function(h, g, l, k, j, i) {
		return void 0 == i && (i = 1.70158), (g /= j / 2) < 1 ? k / 2 * g * g * (((i *= 1.525) + 1) * g - i) + l : k / 2 * ((g -= 2) * g * (((i *= 1.525) + 1) * g + i) + 2) + l
	},
	easeInBounce: function(g, f, j, i, h) {
		return i - jQuery.easing.easeOutBounce(g, h - f, 0, i, h) + j
	},
	easeOutBounce: function(g, f, j, i, h) {
		return (f /= h) < 1 / 2.75 ? i * 7.5625 * f * f + j : 2 / 2.75 > f ? i * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + j : 2.5 / 2.75 > f ? i * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + j : i * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + j
	},
	easeInOutBounce: function(g, f, j, i, h) {
		return h / 2 > f ? 0.5 * jQuery.easing.easeInBounce(g, 2 * f, 0, i, h) + j : 0.5 * jQuery.easing.easeOutBounce(g, 2 * f - h, 0, i, h) + 0.5 * i + j
	}
});