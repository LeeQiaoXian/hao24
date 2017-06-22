$(document).ready(function() {
	Date.prototype.format = function(b) {
		var d = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			S: this.getMilliseconds()
		};
		if (/(y+)/.test(b)) {
			b = b.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
		}
		for (var c in d) {
			if (new RegExp("(" + c + ")").test(b)) {
				b = b.replace(RegExp.$1, (RegExp.$1.length == 1) ? (d[c]) : (("00" + d[c]).substr(("" + d[c]).length)))
			}
		}
		return b
	};
	if ($(".toolbar-tab").length > 0) {
		$(".toolbar-tab").hover(function() {
			$(this).find(".tab-text").addClass("tbar-tab-hover");
			$(this).find(".footer-tab-text").addClass("tbar-tab-footer-hover");
			$(this).addClass("tbar-tab-selected")
		}, function() {
			$(this).find(".tab-text").removeClass("tbar-tab-hover");
			$(this).find(".footer-tab-text").removeClass("tbar-tab-footer-hover");
			$(this).removeClass("tbar-tab-selected")
		});
		$(".tbar-tab-sevice").on("click", function() {
			var b = {};
			postAjaxRequest("/uc/userinfo.do", null, function(c) {
				if (!$.isEmptyObject(c.data)) {
					b = {
						uid: c.data.custId,
						uname: c.data.custName
					}
				}
				require(["onlineService"], function(d) {
					d.onlineCall(b)
				})
			})
		})
	}
	if ($(".lazy-template").length > 0 || $("img.lazy-image").length > 0) {
		require(["scrollLoading"], function() {
			$(".lazy-template").scrollLoading();
			$("img.lazy-image").scrollLoading()
		})
	}
	afterCustLogin();
	if ($(".search_input input[name='keyword']").length > 0) {
		bindSearchAction()
	}
	$("img").on("error", function() {
		$(this).attr("src", __STATIC_SERVER__ + "/image/nopic.jpg")
	});
	var a = new Date().format("MMdd");
	if (a == "1213") {
		$("img.replace_img").attr("src", "https://image.hao24.com/wwwhao24/image/logo_grey.jpg?v=" + new Date().getTime())
	}
	supportPlaceholder = "placeholder" in document.createElement("input"), placeholder = function(c) {
		var d = c.attr("placeholder"),
			b = c.defaultValue;
		if (!b) {
			c.val(d).addClass("phcolor")
		}
		c.focus(function() {
			if (c.val() == d) {
				$(this).val("")
			}
		});
		c.blur(function() {
			if (c.val() == "") {
				$(this).val(d).addClass("phcolor")
			}
		});
		c.keydown(function() {
			$(this).removeClass("phcolor")
		})
	};
	if (!supportPlaceholder) {
		$("input").each(function() {
			text = $(this).attr("placeholder");
			if ($(this).attr("type") == "text") {
				placeholder($(this))
			}
		})
	}
});

function afterCustLogin() {
	updateCustInfo();
	updateHeaderCart()
}

function updateCustInfo() {
	if (__IS_AUTH__ == false) {
		return
	}
	if ($(".box_top .top_right").length == 0) {
		return
	}
	postAjaxRequest("/uc/userinfo.do", null, function(a) {
		if (a.state == false) {
			__IS_AUTH__ = false;
			$.cookie("auth", false, {
				path: "/"
			});
			return
		}
		if (a.data.custTypeCd == "20") {
			$(".box_top .top_right li:eq(0)").html('您好，<a href="' + __BASE_SERVER__ + '/myhao24/home.html" target="_blank">' + a.data.custName + "</a>！欢迎光临江苏广电总台员工商城")
		} else {
			$(".box_top .top_right li:eq(0)").html('您好，<a href="' + __BASE_SERVER__ + '/myhao24/home.html" target="_blank">' + a.data.custName + "</a>！欢迎光临好享购物商城")
		}
		$(".box_top .top_right li:eq(0) a").css({
			margin: "0 -10px",
			color: "#ed415b"
		});
		$(".box_top .top_right li:eq(1)").hide();
		$(".box_top .top_right li:eq(2)").hide();
		$(".box_top .top_right li:eq(3)").hide();
		$(".box_top .top_right li:eq(4)").html('<a class="external" href="' + __BASE_SERVER__ + '/uc/logout/">退出</a>');
		$(".box_top .top_right li.subnav ul li:eq(0)").html('<a href="' + __BASE_SERVER__ + '/myhao24/accmrec-1.html" target="_blank">我的购物金<span class="hao24_num">' + a.data.accmAmt + "</span>元</a>");
		$(".box_top .top_right li.subnav ul li:eq(1)").html('<a href="' + __BASE_SERVER__ + '/myhao24/coupon-10.html" target="_blank">我的优惠券<span class="hao24_num">' + a.data.totalCpQty + "</span>张</a>");
		$(".box_top .top_right li.subnav ul li:eq(2)").html('<a href="' + __BASE_SERVER__ + '/myhao24/pcard.html" target="_blank">我的积分卡<span class="hao24_num">' + a.data.pcardAmt + "</span>元</a>");
		$(".box_top .top_right li.subnav ul li:eq(3)").html('<a href="' + __BASE_SERVER__ + '/myhao24/crdlt.html" target="_blank">我的暂存款<span class="hao24_num">' + a.data.crdtAmt + "</span>元</a>")
	}, function() {
		__IS_AUTH__ = false;
		$.cookie("auth", false, {
			path: "/"
		})
	})
}

function updateHeaderCart() {
	if ($(".i_cart").length == 0) {
		return
	}
	if (__IS_AUTH__ == false) {
		emptyHeaderCart();
		return
	}
	$(".i_cart .i_menu").html('<div class=""><b></b>数据加载中请稍后</div>');
	var a = $(".i_cart i_menu").is(":hidden");
	postAjaxRequest("/cart/info.do", null, function(e) {
		if (e.state == false || e.totalQty == 0) {
			emptyHeaderCart();
			return
		}
		var b = $("#tmp_topcart").html();
		var d = Handlebars.compile(b);
		var c = d(e);
		$(".i_cart .i_menu").html(c);
		$(".i_cart .i_c_icon .ic_count").html(e.totalQty);
		$(".toolbar .tbar-tab-cart .tab-text font").html(e.totalQty);
		$(".i_cart .i_menu .btn-delete").on("click", function() {
			var f = $(this).parents("li").data("sku_id");
			deleteCartGoods(f)
		})
	}, function() {
		__IS_AUTH__ = false;
		$.cookie("auth", false, {
			path: "/"
		})
	})
}

function deleteCartGoods(a) {
	areaInfo = getAreaInfo();
	var b = {
		skuId: a,
		province: areaInfo[0],
		city: areaInfo[1]
	};
	postAjaxRequest("/cart/del.do", b, function(c) {
		if (c.state == false) {
			ConfirmBox.error(c.message, null, {
				title: "提示信息"
			})
		} else {
			ConfirmBox.autoClose("购物车成功删除商品!", function() {
				updateHeaderCart()
			}, 3000, {
				icon: "success"
			})
		}
	})
}

function emptyHeaderCart() {
	$(".i_cart .i_menu").html('<div class="nogoods"><b></b>您的购物车已经饿扁了，快去逛逛吧</div>');
	$(".i_cart .i_c_icon .ic_count").html("0");
	$(".toolbar .tbar-tab-cart .tab-text").html("购物车");
	$(".i_cart .i_c_icon .ic_count").hide()
}

function bindSearchAction() {
	var b = $(".search_input input[name='keyword']").typeahead({
		source: function(c, d) {
			if (c == "") {
				d([]);
				return
			}
			var e = {
				text: c,
				size: 8
			};
			$.ajax({
				contentType: "application/json; charset=utf-8",
				url: __BASE_SERVER__ + "/goods/keyword.do",
				data: JSON.stringify(e),
				type: "POST",
				dataType: "JSON",
				cache: false,
				success: function(f, g) {
					if (f.state == false || f.list.length == 0) {
						d([]);
						return
					}
					d(f.list)
				},
				error: function(f, h, g) {}
			})
		},
		autoSelect: false,
		items: 8,
		minLength: 1,
		highlighter: function(e) {
			var c = $(".search_input input[name='keyword']").val();
			var d = e.replace("<strong>" + c, '<strong><span style="color:red">' + c + "</span>");
			return d
		},
		matcher: function(c) {
			return true
		},
		updater: function(c) {
			return c
		},
		displayText: function(c) {
			return '<div class="search-item"><strong>' + c.text + '</strong></div><div class="search-count">约' + c.count + "个商品</div>"
		},
		afterSelect: function(c) {
			$(".search_input input[name='keyword']").val(c.text);
			$(".search_input .btn-default").click()
		},
		delay: 500
	});
	$(".search_input .btn-default").on("click", function() {
		var c = $(".search_input input[name='keyword']").val().trim();
		if (c == "") {
			return
		}
		var d = __BASE_SERVER__ + "/goods/search.do?k=" + encodeURIComponent(c);
		if (new RegExp("^[9]?\\d{6}$").test(c)) {
			if (c.substr(0, 1) == "9") {
				c = c.substr(1)
			}
			var e = {
				goodsSn: c,
				shopId: "24"
			};
			postAjaxRequest("/goods/searchsn.do", e, function(f) {
				if (f.state == true) {
					d = __BASE_SERVER__ + "/goods/" + c + ".html"
				}
				window.location.href = d
			})
		} else {
			if (new RegExp("^[D]?\\d{7}|\\d{9}$").test(c)) {
				if (c.substr(0, 1) == "D") {
					c = c.substr(1)
				}
				var e = {
					id: c
				};
				postAjaxRequest("/goods/searchid.do", e, function(f) {
					if (f.state == true) {
						d = __BASE_SERVER__ + "/goods/" + c + ".html"
					}
					window.location.href = d
				})
			} else {
				window.location.href = d
			}
		}
	});
	$(".search_input .btn-shop").on("click", function() {
		var c = $(".search_input input[name='keyword']").val();
		var e = $(this).data("shop_id");
		var d = __BASE_SERVER__ + "/shop/search-" + e + ".do?k=" + encodeURIComponent(c);
		window.location.href = d
	});
	$(".search_input input[name='keyword']").bind("keydown", function(c) {
		if (c.keyCode == 13) {
			c.preventDefault();
			$(".search_input .btn-default").click()
		}
	});
	var a = getQueryString("k");
	$(".search_input input[name='keyword']").val(decodeURIComponent(a))
};