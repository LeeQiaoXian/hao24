function postAjaxRequest(e, d, a, c, b, f, g) {
	if (d == null || (typeof(d) != "object" && typeof(d) != "string")) {
		d = {}
	}
	if (typeof(b) != "string") {
		b = "json"
	}
	if (typeof(g) != "boolean") {
		g = true
	}
	if (typeof(f) != "string") {
		f = "POST"
	}
	if (typeof(d) == "object") {
		d = JSON.stringify(d)
	}
	if (e.substr(0, 7) != "http://" && e.substr(0, 8) != "https://") {
		e = __BASE_SERVER__ + e
	}
	$.ajax({
		contentType: "application/json; charset=utf-8",
		type: f,
		url: e,
		cache: false,
		async: g,
		data: d,
		dataType: b,
		success: function(h) {
			if (typeof(a) == "function") {
				a(h)
			}
		},
		error: function(h) {
			if (typeof(c) == "function") {
				c()
			} else {
				if (h.status == 403) {
					if (typeof(doAfterLogin) == "function") {
						doAfterLogin(function() {
							postAjaxRequest(e, d, a, c, b, f, g)
						})
					} else {
						var j = __BASE_SERVER__ + "/uc/login.html";
						window.location.href = j
					}
				}
			}
		}
	})
}

function getAjaxRequest(f, e, a, d, c) {
	if (typeof(e) == "object") {
		var h = "";
		var b = 0;
		for (var g in e) {
			if (b > 0) {
				h += "&"
			}
			h += g + "=" + e[g].toString();
			b++
		}
		e = h
	}
	postAjaxRequest(f, e, a, d, c, "GET")
}

function formSubmission(b, a, d) {
	a = __BASE_SERVER__ + a;
	var c = '<form action="' + a + '" name="' + b + '" method="post">';
	$.each(d, function(e, f) {
		c += '<input type="hidden" name="' + e + '" value="' + f + '" />'
	});
	c += "</form>";
	$("body").append($(c));
	$("form[name='" + b + "']").submit()
}

function getAreaInfo() {
	var b = $.cookie("_province");
	var a = $.cookie("_city");
	if (typeof(b) == "undefined" || typeof(a) == "undefined" || b == "" || a == "") {
		postAjaxRequest("/areainfo.do", null, function(c) {
			if (c.state) {
				b = c.province;
				a = c.city;
				$.cookie("_province", b, {
					path: "/",
					expires: 1
				});
				$.cookie("_city", a, {
					path: "/",
					expires: 1
				})
			}
		}, null, "JSON", "POST", false)
	}
	return [b, a]
}

function doAfterLogin(a) {
	if ($.cookie("auth") == "true") {
		if (typeof(a) == "function") {
			a()
		}
		return
	}
	require(["modal.login"], function() {
		LoginModal.expressLogin({
			callback: a
		})
	})
}
var ConfirmBox = {
	zIndex: 1050,
	success: function(b, c, a) {
		ConfirmBox.alert(b, c, a, "success")
	},
	error: function(b, c, a) {
		ConfirmBox.alert(b, c, a, "error")
	},
	info: function(b, c, a) {
		ConfirmBox.alert(b, c, a, "success")
	},
	remove: function(b, c, a) {
		ConfirmBox.alert(b, c, a, "delete")
	},
	alert: function(d, e, c, b) {
		if (typeof(c) == "undefined") {
			c = {}
		}
		if (typeof(b) != "string") {
			b = "warning"
		}
		var a = $.extend({
			title: "提示",
			cancelBtn: "",
			backdrop: true,
			icon: b,
			checkReturn: false
		}, c);
		ConfirmBox.confirm(a.title, d, e, null, a)
	},
	confirm: function(e, h, a, g, b) {
		e = typeof(e) == "undefined" ? "提示" : e;
		if (typeof(b) == "undefined") {
			b = {}
		}
		var j = $.extend({
			okBtn: "确定",
			cancelBtn: "取消",
			backdrop: true,
			icon: "question",
			html: "",
			width: 0,
			fontSize: 18,
			color: "default",
			checkReturn: true,
			blur_callback: ""
		}, b);
		if ($(".confirm-modal").length == 0) {
			var d = '<div class="modal fade confirm-modal " tabindex="-1" role="dialog"  aria-labelledby="mySmallModalLabel"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><button class="close" aria-label="Close" data-dismiss="modal" type="button"><span class="btn-close" aria-hidden="true"></span></button><h4 id="mySmallModalLabel" class="modal-title">' + e + '</h4></div><div class="modal-body"><div class="modal-block"><i class="' + j.icon + '"></i><div class="modal-message">' + h + '</div></div><div class="modal-extend"></div></div><div class="modal-footer btns"><button type="button" class="btn btn-sm btn-success">' + j.cancelBtn + '</button><button type="button" class="btn btn-sm btn-warning">' + j.okBtn + "</button></div></div></div></div>";
			$("body").append($(d))
		} else {
			$(".confirm-modal .modal-message").html(h);
			$(".confirm-modal .modal-title").html(e);
			$(".confirm-modal .btn-success").html(j.cancelBtn);
			$(".confirm-modal .btn-warning").html(j.okBtn);
			$(".confirm-modal .modal-block i").attr("class", j.icon);
			$(".confirm-modal .btn-success").unbind("click");
			$(".confirm-modal .btn-warning").unbind("click")
		}
		if (j.cancelBtn == "") {
			$(".confirm-modal .modal-footer").removeClass("btns")
		} else {
			$(".confirm-modal .modal-footer").addClass("btns")
		}
		var f = j.width;
		if (f < 420) {
			f = Math.ceil(textLength(h) / 2) * 18
		}
		if (f < 420) {
			f = 420
		} else {
			if (f > 720) {
				f = 720
			}
		}
		var c = f - 2 - 60 - 45;
		$(".confirm-modal .modal-dialog").css("width", f + "px");
		$(".confirm-modal .modal-message").css("width", c + "px");
		$(".confirm-modal .modal-message").css("font-size", j.fontSize + "px");
		$(".modal-backdrop").remove();
		$(".confirm-modal").on("show.bs.modal", function() {
			var k = parseInt($(this).css("z-index"));
			ConfirmBox.zIndex = Math.max(k, ConfirmBox.zIndex);
			ConfirmBox.zIndex += 1;
			$(this).css("z-index", ConfirmBox.zIndex)
		});
		$(".confirm-modal").modal({
			show: true,
			backdrop: j.backdrop
		});
		if (j.html == "") {
			$(".confirm-modal .modal-extend").hide()
		} else {
			$(".confirm-modal .modal-extend").show();
			$(".confirm-modal .modal-extend").html(j.html)
		}
		if (j.color == "default") {
			$(".confirm-modal .modal-dialog").attr("class", "modal-dialog modal-sm")
		} else {
			$(".confirm-modal .modal-dialog").addClass("modal-" + j.color)
		}
		$window.bind("keydown", function(l) {
			if (l.keyCode == 13) {
				if ($(".off_keydown").length > 0) {
					return
				}
				l.preventDefault();
				var k = false;
				if (typeof(a) == "function") {
					k = a()
				}
				if (k || j.checkReturn == false) {
					ConfirmBox.closeModal()
				}
			}
		});
		$(".confirm-modal .btn-warning").bind("click", function() {
			var k = false;
			if (typeof(a) == "function") {
				k = a()
			}
			if (k || j.checkReturn == false) {
				ConfirmBox.closeModal()
			}
		});
		$(".confirm-modal .btn-success").bind("click", function() {
			var k = false;
			if (typeof(g) == "function") {
				k = g()
			}
			if (k || j.checkReturn == false) {
				ConfirmBox.closeModal(b.blur_callback)
			}
		})
	},
	autoClose: function(c, d, e, b) {
		if (typeof(e) == "undefined") {
			e = 3
		} else {
			e = Math.ceil(e / 1000)
		}
		if (typeof(b) == "undefined") {
			b = {}
		}
		var a = $.extend({
			html: '<div class="countdown"><span class="seconds">' + e + "</span> 秒后自动关闭</div>",
			width: 420
		}, b);
		ConfirmBox.alert(c, d, a);
		ConfirmBox.timer = setInterval(function() {
			var f = parseInt($(".confirm-modal .seconds").html());
			if (f > 1) {
				$(".confirm-modal .seconds").html(f - 1)
			} else {
				if (typeof(d) == "function") {
					d()
				}
				ConfirmBox.closeModal(b.blur_callback)
			}
		}, 1000)
	},
	timer: null,
	closeModal: function(a) {
		if (ConfirmBox.timer != null) {
			clearInterval(ConfirmBox.timer);
			ConfirmBox.timer = null
		}
		if ($(".confirm-modal").length > 0) {
			$(".confirm-modal").modal("hide");
			$(".modal-backdrop").remove()
		}
		$window.unbind("keydown");
		$(".confirm-modal").on("hidden.bs.modal", function() {
			$("body").removeAttr("style");
			if (typeof(a) == "function") {
				a()
			}
		})
	},
	showLoading: function(b) {
		if ($(".grey_layer").length == 0) {
			var a = '<div class="grey_layer"><div class="load_pic"><img src="' + __STATIC_SERVER__ + '/image/loading2.gif" style=" height: auto;width: 50px;"></div></div>';
			$("body").append($(a))
		}
		$(".grey_layer").show()
	},
	closeLoading: function(a) {
		if ($(".grey_layer").length > 0) {
			$(".grey_layer").hide()
		}
	}
};

function idsToList(a) {
	var b = /^[\s,]+|[\s,]+$/g;
	a = a.replace(b, "");
	idList = a.split(",");
	return idList
}

function maskMobileCode(a) {
	a = new String(a);
	if (!VALIDATERULES.isMobile(a)) {
		return a
	}
	a = a.substr(0, 3) + "****" + a.substr(7, 11);
	return a
}

function moneyFormart(b) {
	b = parseFloat((b + "").replace(/[^\d\.-]/g, "")).toFixed(2) + "";
	var a = b.split(".")[0].split("").reverse(),
		c = b.split(".")[1];
	space = "";
	for (i = 0; i < a.length; i++) {
		space += a[i] + ((i + 1) % 3 == 0 && (i + 1) != a.length ? "," : "")
	}
	return space.split("").reverse().join("") + "." + c
}

function goPage(c, a) {
	var e = parseInt($("#all_page_size").html());
	a = parseInt(a);
	a = a > e ? e : a;
	var d;
	if (c.indexOf(".html") > -1) {
		var b = /\-p\d+/i;
		d = c.replace(b, "-p" + a)
	} else {
		var b = /p=\d+/;
		if (b.test(c)) {
			d = c.replace(b, "p=" + a)
		} else {
			if (c.indexOf("?") > -1) {
				d = c + "&p=" + a
			} else {
				d = c + "?p=" + a
			}
		}
	}
	window.location.href = d
}

function getQueryString(a) {
	var c = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i");
	var d = window.location.search.substr(1).match(c);
	var b = "";
	if (d != null) {
		b = d[2]
	}
	c = null;
	d = null;
	return b == null || b == "" || b == "undefined" ? "" : b
}

function textLength(b) {
	var c = 0;
	for (var a = 0; a < b.length; a++) {
		charCode = b.charCodeAt(a);
		if (charCode >= 0 && charCode <= 128) {
			c += 1
		} else {
			c += 2
		}
	}
	return c
}

function textSubstring(b, a) {
	while (b.length > a) {
		b = b.substr(0, b.length - 1)
	}
	return b
}

function getRandomStr() {
	var c = 9999;
	var a = 1000;
	var d = c - a;
	var b = Math.random();
	return (a + Math.round(b * d))
}

function rmoney(a) {
	return parseFloat(a.replace(/[^\d\.-]/g, ""))
}

function pageHref(c, b) {
	var a = parseInt($("#pageing_no").val());
	var d = parseInt($("#all_page_size").html());
	a = a > d ? d : a;
	window.location.href = c + a + ".html" + b
};