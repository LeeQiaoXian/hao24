$("#brandCarousel").on("slid.bs.carousel", function() {
	var a = $("#brandCarousel .carousel-inner .active").index();
	var b = __BASE_SERVER__ + "/channel/brand-b" + a + "-p" + parseInt(_PAGE_NO_) + ".html";
	try {
		var c = {
			time: new Date().getTime()
		};
		window.history.pushState(c, "", b)
	} catch (d) {}
});
$(document).ready(function() {
	var a = parseInt($("#brandPage").data("index"));
	var d = parseInt($("#brandPage").data("total"));
	var c = $("#brand-template").html();
	var b = Handlebars.compile(c);
	$("#next,#prev").bind("click", function() {
		if ($(this).attr("id") == "next") {
			if (a < d) {
				a += 1
			} else {
				a = d
			}
		} else {
			if (a > 1) {
				a -= 1
			} else {
				a = 1
			}
		}
		var e = {
			brandPageIndex: a
		};
		postAjaxRequest(__BASE_SERVER__ + "/channel/brandSwitch.do", e, function(g) {
			var f = b(g.data);
			$("#brandList").html(f)
		})
	})
});