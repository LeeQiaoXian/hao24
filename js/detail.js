var commtype = "99",
	page = 1;
var provinceHtml, cityHtml, provinceName;
var _is_not_first_ = false;
$(function() {
	var i = 0;
	var k = 5;
	var a = 1;
	var e = 300;
	var d = $(".spec-scroll .items ul");
	var l = $(".spec-scroll .items ul li");
	var h = l.eq(0).width() * a;
	var g = (l.length - k) * l.eq(0).width();
	$(".spec-scroll .next").bind("click", function() {
		if (i < g) {
			if ((g - i) > h) {
				d.animate({
					left: "-=" + h + "px"
				}, e);
				i += h
			} else {
				d.animate({
					left: "-=" + (g - i) + "px"
				}, e);
				i += (g - i)
			}
		}
	});
	$(".spec-scroll .prev").bind("click", function() {
		if (i > 0) {
			if (i > h) {
				d.animate({
					left: "+=" + h + "px"
				}, e);
				i -= h
			} else {
				d.animate({
					left: "+=" + i + "px"
				}, e);
				i = 0
			}
		}
	});
	$(".jqzoom").jqueryzoom({
		xzoom: 380,
		yzoom: 410
	});
	if ($(".sales_info_main .promList").length == 1) {
		var j = $(".sales_info_main .text_line").data("size");
		if (j >= 1) {
			$(".sales_info").hover(function() {
				var n = $(this).find(".promList_other:eq(0)");
				var m = n.text().substr(0, n.text().length - 1) + "^";
				n.text("");
				n.text(m);
				$(".promList_other:eq(0)").siblings().show()
			}, function() {
				$(".promList_other:eq(0)").show().siblings(".promList_other").hide();
				var n = $(this).find(".promList_other:eq(0)");
				var m = n.text().substr(0, n.text().length - 1) + "v";
				n.text("");
				n.text(m)
			})
		}
	}
	setFavoriteStyle("10");
	var f = true;
	$(".collect_text").click(function() {
		doAfterLogin(function() {
			if (f == true) {
				f = false;
				addGoodsFavorite("10", _GOODS_ID_)
			}
			setTimeout(function() {
				f = true
			}, 1000)
		})
	});
	setFavoriteStyle("30");
	var b = true;
	$(".brand_collect").click(function() {
		var m = $(this).data("brandid");
		doAfterLogin(function() {
			if (b == true) {
				b = false;
				addGoodsFavorite("30", m)
			}
			setTimeout(function() {
				b = true
			}, 1000)
		})
	});
	setFavoriteStyle("20");
	var c = true;
	$(".come_shop span").click(function() {
		var m = $(this).data("shopid");
		doAfterLogin(function() {
			if (c == true) {
				c = false;
				addGoodsFavorite("20", m)
			}
			setTimeout(function() {
				c = true
			}, 1000)
		})
	});
	if (parseInt($(".table_rf li").length - 1) % 3 == 0) {
		if (parseInt($(".table_rf li").length) == 1) {
			$(".table_rf  li").css("border-right", "0")
		}
		$(".table_rf  li:nth-child(3n)").css("border-right", "0");
		$(".table_rf  li:nth-last-child(1)").css("border-bottom", "0")
	} else {
		if (parseInt($(".table_rf li").length) % 3 == 0) {
			$(".table_rf  li:nth-child(3n)").css("border-right", "0");
			$(".table_rf  li:nth-last-child(1)").css("border-bottom", "0");
			$(".table_rf  li:nth-last-child(2)").css("border-bottom", "0");
			$(".table_rf  li:nth-last-child(3)").css("border-bottom", "0")
		} else {
			if (parseInt($(".table_rf li").length + 1) % 3 == 0) {
				if (parseInt($(".table_rf li").length) == 2) {
					$(".table_rf  li:last-of-type").css("border-right", "0")
				}
				$(".table_rf  li:nth-child(3n)").css("border-right", "0");
				$(".table_rf  li:nth-last-child(1)").css("border-bottom", "0");
				$(".table_rf  li:nth-last-child(2)").css("border-bottom", "0")
			}
		}
	}
	$(".adds_tabs li").click(function() {
		$(".adds_tabs li").removeClass("on");
		$(this).addClass("on");
		var m = $(this).index();
		$(".tabs_botwrap ul").hide().eq(m).show()
	});
	_PROVINCE_ = $.cookie("_province");
	_CITY_ = $.cookie("_city");
	if (_PROVINCE_ === undefined || _CITY_ === undefined || _PROVINCE_ == "" || _CITY_ == "") {
		postAjaxRequest("/areainfo.do", {}, function(m) {
			if (m.state) {
				_PROVINCE_ = m.province;
				_CITY_ = m.city;
				$(".adds_area span").html(m.province + m.city);
				$(".adds_tabs li").eq(0).html(m.province);
				$(".adds_tabs li").eq(1).html(m.city);
				provinceHtml = provinceName = m.province;
				choosedStyle(true)
			}
		})
	} else {
		$(".adds_tabs li").eq(0).html(_PROVINCE_);
		provinceHtml = provinceName = _PROVINCE_;
		if (_PROVINCE_ == _CITY_) {
			$(".adds_area span").html(_PROVINCE_);
			choosedStyle(false)
		} else {
			$(".adds_area span").html(_PROVINCE_ + _CITY_);
			$(".adds_tabs li").eq(1).html(_CITY_);
			choosedStyle(true, _PROVINCE_)
		}
	}
	$(".province_list .sec_item").click(function() {
		$(".det_area").unbind("mouseout");
		_is_not_first_ = true;
		provinceHtml = $(this).html();
		$(".province_list .sec_item").removeClass("on");
		$(this).addClass("on");
		provinceName = $(this).data("value");
		if (provinceName != provinceHtml) {
			$(".adds_tabs li").eq(1).addClass("on").html("请选择");
			getCityInfo(false)
		} else {
			$.cookie("_province", provinceHtml, {
				path: "/",
				expires: 1
			});
			$.cookie("_city", provinceHtml, {
				path: "/",
				expires: 1
			});
			_PROVINCE_ = provinceHtml;
			_CITY_ = provinceHtml;
			$(".adds_tabs li").eq(0).html(provinceHtml);
			$(".adds_tabs li").eq(1).hide();
			$(".adds_area span").html(provinceHtml);
			$(".hide_adds").hide();
			$(".adds_area").removeClass("det_hover");
			getGoodstock()
		}
	});
	$(".det_area").mouseover(function() {
		$(".hide_adds").show();
		$(".adds_area").addClass("det_hover");
		$(".adds_area").addClass("address_open");
		$(".hide_adds").addClass("block");
		$(".hide_adds").addClass("address_open");
		if (!_is_not_first_) {
			$(".address_open").off().on("mouseout", function() {
				$(".hide_adds").hide();
				$(".adds_area").removeClass("det_hover");
				$(".adds_area").removeClass("address_open");
				$(".hide_adds").removeClass("block");
				$(".hide_adds").removeClass("address_open")
			})
		} else {
			$(".address_open").off();
			$(".adds_area").removeClass("address_open");
			$(".hide_adds").removeClass("address_open")
		}
	});
	$(".detail_close").click(function() {
		$(".hide_adds").hide();
		$(".adds_area").removeClass("det_hover");
		$(".hide_adds").removeClass("block")
	});
	$(".add_item_main1 ul li").hover(function() {
		var m = $(this).find("a");
		var p = m.find(".servicedesc").text().length / 2 * 15;
		var n = $(".add_item_main1 ul li").eq(0).find("a").offset().left;
		$(this).addClass("hover");
		var o = m.offset().left;
		$(this).find(".add_detail_main").css({
			left: (o - n) + "px"
		});
		$(this).find(".add_detail_main .arrow").css({
			left: p + "px"
		})
	}, function() {
		$(this).removeClass("hover")
	});
	$(".add_item_main input").focus(function() {
		if ($(this).hasClass("checked")) {
			return
		}
		$(this).addClass("checked");
		$(this).siblings("input").removeClass("checked");
		var o = [];
		$(".add_item_main .checked").each(function() {
			o.push($(this).data("id"))
		});
		var m = null;
		$.each(skuList, function(r, q) {
			var p = true;
			$.each(o, function(s, t) {
				if ($.inArray(t + "", q) == -1) {
					p = false
				}
			});
			if (p == true) {
				m = r
			}
		});
		if (m == null) {
			_GOODS_QTY_ = 0;
			setGoodsStatusByQty()
		} else {
			var n = __BASE_SERVER__ + "/goods/" + m + ".html";
			window.location.replace(n)
		}
	});
	$(".goods_info_tit li").click(function() {
		$(".goods_info_tit li").removeClass("on");
		$(this).addClass("on");
		$(this).css({
			"border-left": "none",
		})
	});
	$(".ad_car .btn-primary").click(function() {
		doAfterLogin(function() {
			addToCart()
		})
	});
	$(".ad_car .btn-warning").click(function() {
		doAfterLogin(function() {
			submitOrder()
		})
	})
});

function commTypeChange(a) {
	$(a).tab("show");
	commtype = $(a).data("type");
	pageAjax("1")
}

function choosedStyle(a) {
	$(".province_list a").each(function() {
		if (_PROVINCE_.indexOf($(this).html()) >= 0) {
			$(this).addClass("on");
			return false
		}
	});
	$(".adds_tabs li").eq(1).hide();
	if (a) {
		getCityInfo(true);
		$(".adds_tabs li").eq(1).show();
		$(".adds_tabs li").eq(1).addClass("on")
	}
	getGoodstock()
}

function getCityInfo(a) {
	$(".province_list").hide();
	$(".city_list").show();
	$(".adds_tabs li").eq(1).show();
	$(".adds_tabs li").eq(0).removeClass("on").html(provinceHtml);
	postAjaxRequest("/address/search.do", {
		province: provinceName
	}, function(e) {
		if (e.state) {
			var d = e.results;
			var b = "";
			for (var c = 0; c < d.length; c++) {
				b += " <li onclick='chooseCity(this)'>" + d[c] + "</li>"
			}
			$(".tabs_botwrap .city_list").show();
			$(".tabs_botwrap .city_list").html(b);
			if (a) {
				$(".city_list li").each(function() {
					if (_CITY_.indexOf($(this).html()) >= 0) {
						$(this).addClass("on hover");
						return false
					}
				})
			}
		}
	})
}

function getGoodstock() {
	_PROVINCE_ = $.cookie("_province");
	_CITY_ = $.cookie("_city");
	_GOODS_QTY_ = 0;
	if (_GOODS_OFF_) {
		setGoodsStatusByQty()
	}
	if (_PROVINCE_ == null || _CITY_ == null) {
		return
	}
	if (_PROVINCE_ == _CITY_ && _PROVINCE_.indexOf("市") < 0) {
		_GOODS_QTY_ = 0;
		$("#postage").html("该地区暂不支持配送").css("color", "red");
		setGoodsStatusByQty();
		return
	}
	var a = $(".goods_qty").html();
	postAjaxRequest("/goods/stock.do", {
		skuId: _SKUID_,
		shopId: _SHOPID_,
		province: _PROVINCE_,
		city: _CITY_,
		qty: a
	}, function(c) {
		if (c.state) {
			_GOODS_QTY_ = c.data.goodsQty;
			_GOODS_VIRTUAL_ = c.data.isVirtual;
			_POST_AGE_ = c.data.postage;
			if (_GOODS_TYPE_ == "21") {
				_POST_AGE_ = "实际结算运费请以提交订单时的应付款项明细为准"
			} else {
				if (_POST_AGE_ == "0" || _POST_AGE_ == null) {
					_POST_AGE_ = "免运费"
				} else {
					_POST_AGE_ = moneyFormart(_POST_AGE_) + "元"
				}
			}
			if (c.data.isDeliv == "0") {
				_POST_AGE_ = "该地区暂不支持配送"
			}
			$("#postage").html(_POST_AGE_);
			_GOODS_DELIV_ = !!(typeof(c.data.isDeliv) != "undefined" && c.data.isDeliv == "1");
			if (_GOODS_DELIV_ == false) {
				$("#postage").css("color", "red")
			} else {
				$("#postage").css("color", "")
			}
			_GOODS_VIRTUAL_ = !!(typeof(c.data.isVirtual) != "undefined" && c.data.isVirtual == "1");
			var b = _GOODS_QTY_ > 10 ? 10 : _GOODS_QTY_;
			$(".goods_qty").data("max", b);
			setGoodsStatusByQty()
		}
	})
}

function chooseCity(a) {
	_is_not_first_ = true;
	$(".adds_area").removeClass("det_hover");
	cityHtml = $(a).html();
	$.cookie("_province", provinceName, {
		path: "/",
		expires: 1
	});
	$.cookie("_city", cityHtml, {
		path: "/",
		expires: 1
	});
	_PROVINCE_ = provinceName;
	_CITY_ = cityHtml;
	$(".adds_tabs li").eq(2).addClass("on").html("请选择");
	$(".adds_tabs li").eq(1).html(cityHtml);
	$(".city_list li").removeClass("hover");
	$(a).addClass("hover");
	$(".adds_area span").html(provinceHtml + cityHtml);
	$(".hide_adds").hide();
	getGoodstock()
}

function setGoodsStatusByQty() {
	if (_GOODS_OFF_) {
		$(".wuhuo").html("无库存");
		$(".ad_car .grey_none").show();
		$(".ad_car .btn-primary").hide();
		$(".ad_car .btn-warning").hide();
		$(".ad_car .grey_none").html("敬请期待");
		return
	} else {
		if (_GOODS_QTY_ < 1) {
			$(".wuhuo").html("无库存");
			$(".ad_car .btn-primary").hide();
			$(".ad_car .btn-warning").hide();
			$(".ad_car .grey_none").show();
			$(".ad_car .grey_none").html("卖完了")
		} else {
			$(".wuhuo").html("");
			$(".ad_car .btn-primary").show();
			$(".ad_car .btn-primary").removeClass("grey_car");
			$(".ad_car .btn-warning").show();
			$(".ad_car .btn-warning").removeClass("grey_sales");
			$(".ad_car .grey_none").hide();
			if (!_GOODS_DELIV_ && !_GOODS_VIRTUAL_) {
				$(".ad_car .grey_none").show();
				$(".ad_car .btn-primary").hide();
				$(".ad_car .btn-warning").hide();
				$(".ad_car .grey_none").html("加入购物车")
			} else {
				if (_GOODS_TYPE_ == "20" || _GOODS_TYPE_ == "21") {
					$(".ad_car .btn-warning").hide()
				} else {
					if (_GOODS_VIRTUAL_ == true) {
						$(".ad_car .btn-primary").hide()
					} else {
						$(".ad_car .btn-primary").show()
					}
					if (_GOODS_TYPE_ == "12") {
						$(".ad_car .btn-primary").hide()
					}
				}
			}
		}
	}
}

function changeQty(b, d) {
	var a = parseInt($("#itemqty" + d).data("max"));
	var c = parseInt($("#itemqty" + d).html());
	if (_GOODS_TYPE_ == 12) {
		a = 1
	}
	c += b;
	if (c < 1) {
		ConfirmBox.alert("受不了了，宝贝不能再减少了哦!");
		return
	} else {
		if (_LIMITGOODSQTY_ > 0 && c > _LIMITGOODSQTY_) {
			ConfirmBox.alert("好东西留点给别人噢！");
			return
		} else {
			if (c > a && _GOODS_TYPE_ == 12) {
				ConfirmBox.alert("商品数量订购不可超过1件!");
				return
			} else {
				if (c > 10) {
					ConfirmBox.alert("商品数量订购不可超过10件!");
					return
				} else {
					if (c > a) {
						ConfirmBox.alert("诚诚家没有余粮了噢!");
						return
					}
				}
			}
		}
	}
	$("#itemqty" + d).html(c);
	getGoodstock()
}

function addGoodsFavorite(a, d) {
	if (__IS_AUTH__ == false) {
		return false
	}
	var c = {
		favType: a,
		linkId: d
	};
	var b;
	if (a == "10") {
		if (_GOODS_FAVORITE_ == true) {
			b = "/favorite/cancel.do"
		} else {
			b = "/favorite/add.do"
		}
	} else {
		if (a == "20") {
			if (_SHOP_FAVORITE_ == true) {
				b = "/favorite/cancel.do"
			} else {
				b = "/favorite/add.do"
			}
		} else {
			if (_BRAND_FAVORITE_ == true) {
				b = "/favorite/cancel.do"
			} else {
				b = "/favorite/add.do"
			}
		}
	}
	postAjaxRequest(b, c, function(e) {
		if (e.state == false) {
			if (e.message == "您已收藏过哦") {
				if (a == "10" && _GOODS_FAVORITE_ == false) {
					_GOODS_FAVORITE_ = true
				} else {
					if (a == "30" && _BRAND_FAVORITE_ == false) {
						_BRAND_FAVORITE_ = true
					} else {
						if (a == "20" && _SHOP_FAVORITE_ == false) {
							_SHOP_FAVORITE_ = true
						}
					}
				}
				setFavoriteStyle(a)
			} else {
				ConfirmBox.alert(e.message)
			}
		} else {
			if (a == "10") {
				_GOODS_FAVORITE_ = !_GOODS_FAVORITE_
			} else {
				if (a == "30") {
					_BRAND_FAVORITE_ = !_BRAND_FAVORITE_
				} else {
					_SHOP_FAVORITE_ = !_SHOP_FAVORITE_
				}
			}
			setFavoriteStyle(a)
		}
	})
}

function setFavoriteStyle(a) {
	if (a == "10") {
		if (_GOODS_FAVORITE_ == true) {
			$(".collect_text i").addClass("collect_icon_ok");
			$(".collect_text font").html("已收藏")
		} else {
			$(".collect_text i").removeClass("collect_icon_ok");
			$(".collect_text font").html("收藏")
		}
	} else {
		if (a == "20") {
			if (_SHOP_FAVORITE_) {
				$(".come_shop span font").html("已收藏");
				$(".come_shop .collect_shop_icon").addClass("collect_shop_ok")
			} else {
				$(".come_shop span font").html("收藏店铺");
				$(".come_shop .collect_shop_icon").removeClass("collect_shop_ok")
			}
		} else {
			if (_BRAND_FAVORITE_) {
				$(".brand_collect").html("已收藏")
			} else {
				$(".brand_collect").html("收藏品牌")
			}
		}
	}
}

function initgGoodsComm() {
	expImg();
	$(".pagination li a").each(function() {
		if ($(this).parents("li").attr("class") != "disabled") {
			$(this).attr("onclick", "pageHtml(this)")
		}
		$(this).attr("href", "javaScript:void(0)")
	});
	$(".page_go a").on("click", function() {
		pageAjax($("#pageing_no").val())
	})
}

function pageHtml(a) {
	page = $(a).html();
	if (page.indexOf("下一页") >= 0 || page.indexOf("上一页") >= 0) {
		page = $(a).data("page")
	}
	pageAjax(page)
}

function pageAjax(b) {
	var c = parseInt($("#all_page_size").html());
	b = parseInt(b);
	b = b > c ? c : b;
	getAjaxRequest("/goods/comm-" + commtype + "-" + _SKUID_ + "-p" + b + ".html", "", function(d) {
		$("#myTabContent").html(d);
		initgGoodsComm()
	}, function() {}, "html");
	var a = window.location.href.split("#")[0] + "#evaluate";
	window.location.href = a
}

function preview(a) {
	$("#preview .jqzoom .jqimg").attr("src", $(a).attr("src"));
	$("#preview .jqzoom .jqimg").attr("jqimg", $(a).attr("bimg"))
}

function addToCart() {
	if (__IS_AUTH__ == false) {
		return false
	}
	var a = parseInt($(".goods_qty").html());
	if (isNaN(a)) {
		a = "1"
	}
	var b = {
		skuId: _SKUID_,
		qty: a,
		province: _PROVINCE_,
		city: _CITY_,
		orderType: _GOODS_TYPE_
	};
	postAjaxRequest("/cart/add.do", b, function(c) {
		if (c.state === false) {
			ConfirmBox.alert(c.message);
			return false
		} else {
			ConfirmBox.confirm("提示", "成功加入购物车", function() {
				window.location.href = "/cart/"
			}, function() {
				updateCartCount();
				updateHeaderCart();
				return true
			}, {
				icon: "success",
				okBtn: "去结算",
				cancelBtn: "再看看"
			})
		}
	})
}

function updateCartCount() {
	postAjaxRequest("/cart/qty.do", null, function(a) {
		if (a.state == true) {
			if (a.message > 0) {
				$(".toolbar .tbar-tab-cart .tab-text").html("购物车(<font></font>)");
				$(".i_cart .i_c_icon .ic_count").show();
				$(".i_cart .i_c_icon .ic_count").html(a.message);
				$(".tbar-tab-cart .tab-text font").html(a.message);
				$(".smb .p-total b").html(a.message)
			}
		}
	})
}

function submitOrder() {
	if (__IS_AUTH__ == false) {
		return false
	}
	if (_GOODS_TYPE_ == "20") {
		return
	}
	var a = parseInt($(".goods_qty").html());
	if (isNaN(a)) {
		a = "1"
	}
	if (a > parseInt($(".goods_qty").data("max"))) {
		ConfirmBox.alert("单一商品数量订购不可超过" + $(".goods_qty").data("max") + "件");
		return
	}
	if (_GOODS_TYPE_ == "12" && a > 1) {
		ConfirmBox.alert("全球购商品目前只支持买1件");
		return
	}
	var c = "/order/settle.do?rnd=" + getRandomStr();
	var b = _GOODS_TYPE_ == "11" ? "10" : _GOODS_TYPE_;
	var d = {
		skuIds: _SKUID_,
		promIds: "",
		orderType: b,
		orderQty: a
	};
	formSubmission("form_order", c, d)
}

function updateGoodsPrice() {
	postAjaxRequest("/goods/info.do", {
		goodsId: _GOODS_ID_
	}, function(a) {
		if (a.state) {
			$(".sales_price span").html(a.data.prcName);
			$(".sales_price strong").html(moneyFormart(a.data.realPrc));
			$(".sales_price em").html("￥" + moneyFormart(a.data.comparePrc));
			$(".sales_price .time_youhui").html("限时优惠" + a.data.jianPrc + "元")
		}
	})
}
$(".contact_service").on("click", function() {
	postAjaxRequest("/uc/userinfo.do", null, function(a) {
		var b = {
			itemid: _GOODS_NUM_
		};
		if (!$.isEmptyObject(a.data)) {
			b = $.extend({}, b, {
				uid: a.data.custId,
				uname: a.data.custName
			})
		}
		require(["onlineService"], function(c) {
			c.onlineCall(b)
		})
	})
});