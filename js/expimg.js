function expImg() {
	var b = false;
	$(".gallery img").off().click(function() {
		$(".focus ul").empty();
		var e = $(this).parent().siblings().length + 1;
		$(".wrapper").show();
		$(".focus").show();
		var g = $(this).data("index") || $(this).parent().prevAll().length;
		var d = [];
		$(this).parents(".gallery").find("img").each(function(h) {
			if (d.length < e) {
				var i = $(this).attr("src");
				var h = $(this).data("index") || h;
				d.push("<img src ='" + i + "' data-index='" + h + "'/>")
			}
		});
		for (var c = 0; c < d.length; c++) {
			var f = "<li>" + d[c] + "</li>";
			$(".container .focus ul ").append(f)
		}
		$(".focus ul li img[data-index=" + g + "]").parent("li").show().siblings().hide();
		a();
		$(".wrapper .left-img").css("opacity", "1");
		if (e === 1) {
			$("#left,#right").hide().off("hover")
		} else {
			$("#left,#right").show().hover(function() {
				b = true
			}, function() {
				b = false
			});
			if (g == 0) {
				$(".wrapper .left-img").css("opacity", "0.2")
			} else {
				if (g == e - 1) {
					$(".wrapper .right-img").css("opacity", "0.2")
				} else {
					$(".wrapper .left-img,.wrapper .right-img").css("opacity", "1")
				}
			}
		}
		$(".wrapper").off("click").click(function() {
			if (!b) {
				$(this).hide()
			}
		});
		$(document).keypress(function(h) {
			if (h.keyCode == "27" || h.keyCode == "13") {
				$(".wrapper").hide()
			}
		})
	});
	$("#left").off("click").on("click", function() {
		var d = $(".focus ul li").filter(":visible");
		var c = d.prevAll().length;
		if (c == 0) {
			return
		}
		$(".wrapper .left-img,.wrapper .right-img").css("opacity", "1");
		if (c == 1) {
			$(".wrapper .left-img").css("opacity", "0.2")
		}
		d.prev().show();
		d.hide();
		a()
	});
	$("#right").off("click").on("click", function() {
		var d = $(".focus ul li").filter(":visible");
		var c = d.nextAll().length;
		console.log(c);
		if (c == 0) {
			return
		}
		$(".wrapper .left-img,.wrapper .right-img").css("opacity", "1");
		if (c == 1) {
			$(".wrapper .right-img").css("opacity", "0.2")
		}
		d.next().show();
		d.hide();
		a()
	});
	$(".picclose").off("click").click(function() {
		$(".wrapper").hide()
	});

	function a() {
		$(".focus img").off("hover").filter(":visible").hover(function() {
			b = true
		}, function() {
			b = false
		})
	}
};