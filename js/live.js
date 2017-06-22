$(function() {
	$(".living_channel_nav li a").on("click", function() {
		var b = $(this).data("channel");
		$.cookie("areaCd", b, {
			path: "/"
		});
		window.location.reload()
	});
	$.cookie("areaCd", "", {
		expires: -1
	});
	$.cookie("areaCd", $("input[name=channel]").val(), {
		path: "/"
	});
	$(".program_left").hover(function() {
		$(this).removeClass("active").addClass("active")
	}, function() {
		$(this).removeClass("active")
	});
	$("#myCarousel").on("slid.bs.carousel", function() {
		var b = $("#myCarousel .carousel-inner div.active li:first").data("index");
		var d = $("#myCarousel .carousel-inner div.active li:last").data("index");
		var c = $("#myCarousel .carousel-inner li:last").data("index");
		if (b == 0) {
			$(this).find(".left").css("opacity", "0.2");
			$(this).find(".right").css("opacity", "0.5");
			$(this).find(".left").off()
		} else {
			a($(this).find(".left"))
		}
		if (c == d) {
			$(this).find(".right").css("opacity", "0.2");
			$(this).find(".left").css("opacity", "0.5");
			$(this).find(".right").off()
		} else {
			a($(this).find(".right"))
		}
	});

	function a(b) {
		b.hover(function() {
			$(this).css("opacity", "0.9")
		}, function() {
			$(this).css("opacity", "0.5")
		})
	}
});