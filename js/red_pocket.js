var eleBack = null,
	eleFront = null,
	eleList = $(".list");
var funBackOrFront = function() {
	eleList.each(function() {
		if ($(this).hasClass("out")) {
			eleBack = $(this)
		} else {
			eleFront = $(this)
		}
	})
};
funBackOrFront();
$(".evlope_list").bind("click", function() {
	if (__IS_AUTH__ == false) {
		doAfterLogin(function() {
			window.location.reload()
		});
		return false
	}
	$("#open").hide();
	$("#animation").show();
	$(this).find(".open").hide();
	eleFront.addClass("out").removeClass("in");
	setTimeout(function() {
		eleBack.addClass("in").removeClass("out")
	}, 100);
	setTimeout(function() {
		eleBack.removeClass("in").addClass("out")
	}, 200);
	setTimeout(function() {
		eleBack.addClass("in").removeClass("out")
	}, 300);
	setTimeout(function() {
		postAjaxRequest("/redpocket.do", "", function(a) {
			if (a.state) {
				var c = a.data.accmAmt;
				var b = a.data.validDay;
				$(".evlope").removeClass("evlope_bg").addClass("evlope_bg_has");
				$("#red_pocket_result").show();
				$("#red_pocket_result span").html("<strong>" + c + "</strong>元");
				$("#red_pocket_msg").html("恭喜您获得<strong>" + c + "</strong>元购物金红包！");
				$("#red_validday").html(b);
				$(".evlope_msg").show();
				$(".evlope_list,.evlope_list #open,.animation a").css("cursor", "default");
				$(".evlope_list").unbind("click")
			} else {
				ConfirmBox.alert(a.message, function() {
					window.location.reload()
				})
			}
		})
	}, 500)
});
$(".curs").on("click", function() {
	var a = $(this);
	var d = $(this).children(".collect_coupon");
	if (__IS_AUTH__ == false) {
		doAfterLogin(function() {
			window.location.reload()
		});
		return false
	}
	var b = function(e, h, g) {
		var f = "shop_rece";
		if (g == "-3") {
			f = "shop_empty"
		}
		$(".coupon_" + h.data("cpid")).addClass(f);
		e.removeClass("curs");
		e.off();
		h.hide()
	};
	var c = {
		ptId: d.data("ptid"),
		cpId: d.data("cpid"),
		cpType: d.data("type")
	};
	postAjaxRequest("/cart/cpevent.do", c, function(e) {
		if (!e.state) {
			ConfirmBox.error("优惠券领取失败: " + e.data.rtnMsg);
			if (e.data.rtnCode == "-2" || e.data.rtnCode == "-3") {
				b(a, d, e.data.rtnCode)
			}
		} else {
			ConfirmBox.success("优惠券领取成功", function() {
				b(a, d)
			})
		}
	}, function() {
		ConfirmBox.alert(NETWORK_ERROR)
	})
});