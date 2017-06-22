$(function() {
	var e = "02";
	postAjaxRequest("/areainfo.do", {}, function(f) {
		if (f.state) {
			e = (f.province).indexOf("江苏") < 0 ? "03" : "02"
		}
		updateCurrentHtml(e)
	});
	$(".ic_count span").click(function() {
		$(this).parent().parent().remove()
	});
	if (config != "") {
		if (config.bpic != $.cookie("config.bpic") || config.spic != $.cookie("config.spic") || $.cookie("bpicShow") != "true") {
			new Adev().init(config);
			$.cookie("config.bpic", config.bpic, {
				path: "/",
				expires: 30
			});
			$.cookie("config.spic", config.spic, {
				path: "/",
				expires: 30
			});
			var b = new Date();
			b.setTime(b.getTime() + 86400000 - (b.getHours() * 60 * 60 + b.getMinutes() * 60 + b.getSeconds()) * 1000);
			$.cookie("bpicShow", "true", {
				path: "/",
				expires: b
			});
			$(".h_top_img a:last").attr("href", "javascript:void(0)").removeAttr("target")
		} else {
			var c = '<div id="E_top" style="height:auto;background:' + config.bground + ';"><div class="E_top" style="height:auto; margin:auto auto;"><div id="adimage" style="width:1196px; margin:0 auto"><div style="width:1196px; margin:0 auto;position:relative;"><a target="_blank" href="' + config.url + '"><img src="' + config.spic + '" title="" alt=""></a><a class="close" style="position:absolute;top:15px;right:10px;" href="javascript:"><img src="' + __STATIC_SERVER__ + '/image/tai_close.png"></a></div></div></div></div></div></div>';
			$(".wrap").prepend(c)
		}
		$("#E_top .close").bind("click", function() {
			$("#E_top").hide()
		})
	}
	var d = $.cookie("AppDown");
	if (d != "true") {
		if (bottomPic != "") {
			$(".fix_mask").show();
			$(".fix_mask .mask_content_img img").attr("src", bottomPic);
			$(".mask_close").bind("click", function() {
				$(".fix_mask").hide();
				var f = new Date();
				f.setTime(f.getTime() + 86400000 - (f.getHours() * 60 * 60 + f.getMinutes() * 60 + f.getSeconds()) * 1000);
				$.cookie("AppDown", "true", {
					path: "/",
					expires: f
				})
			})
		}
	}
	var a = "0.3";
	$("img.index_lazy").lazyload({
		event: "mouseover"
	});
	$(".banner_box").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		effect: "fold",
		delayTime: 1000,
		interTime: 3000,
		autoPlay: true,
		autoPage: true,
		trigger: "click"
	})
});

function updateCurrentHtml(a) {
	postAjaxRequest("/index/live.do", {
		areaCd: a
	}, function(c) {
		$("#live").html(c);
		var b = a == "02" ? "0" : "1";
		$("#myTabContent_zb .tab-pane").removeClass("active in");
		$("#myTabContent_zb .tab-pane").eq(b).addClass("active in")
	}, "", "html")
}

function floorHoverEvent(b, a) {
	a.preventDefault();
	$(b).tab("show")
}
pl = {
	write: function(a) {
		if (a.css) {
			$(a.css).each(function(b, f) {
				try {
					document.write('<link type="text/css" rel="stylesheet" href="' + f + '">')
				} catch (d) {}
			})
		}
		$("#" + a.container).html(a.html);
		if (a.js) {
			$(a.js).each(function(b, f) {
				try {
					$.getScript(f)
				} catch (d) {}
			})
		}
	}
};
Adev = function() {
	this.init = function(a) {
		$(".wrap").prepend(this.creatShowHtml(a));
		setTimeout(function() {
			$("#adBig").slideUp(1000, function() {
				$("#adSmall").slideDown(1000)
			})
		}, 2000)
	};
	this.creatShowHtml = function(c) {
		var b = ' <div id="E_top" style="height:auto;background:' + c.bground + ';"><div class="E_top" style="height:auto; margin:auto auto;">';
		var a = '<div><div style="width:1196px; margin:0 auto;position:relative;"><a href="' + c.url + '" target="_blank"><img alt="' + c.title + '" title="' + c.title + '" src="' + c.spic + '" /></a><a href="javascript:" class="close" style="position:absolute;top:15px;right:10px;"><img src="' + __STATIC_SERVER__ + '/image/tai_close.png"></a></div></div>';
		b += '<div id="adimage" style="width:1196px; margin:0 auto"><div id="adBig"><a href="' + c.url + '" target=_blank><img alt="' + c.title + '" title="' + c.title + '"  src="' + c.bpic + '" border=0></a></div><div id=adSmall style="display:none">';
		b += a;
		b += "</div></div>";
		return b
	}
};