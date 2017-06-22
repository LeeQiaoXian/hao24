(function(a) {
	a.fn.jqueryzoom = function(b) {
		var d = {
			xzoom: 200,
			yzoom: 200,
			offset: 10,
			position: "right",
			lens: 1,
			preload: 1
		};
		if (b) {
			a.extend(d, b)
		}
		var c = "";
		a(this).hover(function() {
			var f = this.offsetLeft;
			var g = this.offsetRight;
			var j = a(this).get(0).offsetTop;
			var i = a(this).children("img").get(0).offsetWidth;
			var e = a(this).children("img").get(0).offsetHeight;
			c = a(this).children("img").attr("alt");
			var h = a(this).children("img").attr("jqimg");
			a(this).children("img").attr("alt", "");
			if (a("div.zoomdiv").get().length == 0) {
				a(this).after("<div class='zoomdiv'><img class='bigimg' src='" + h + "'/></div>");
				a(this).append("<div class='jqZoomPup'>&nbsp;</div>")
			}
			if (d.position == "right") {
				if (f + i + d.offset + d.xzoom > screen.width) {
					leftpos = f - d.offset - d.xzoom
				} else {
					leftpos = f + i + d.offset
				}
			} else {
				leftpos = f - d.xzoom - d.offset;
				if (leftpos < 0) {
					leftpos = f + i + d.offset
				}
			}
			a("div.zoomdiv").css({
				top: j,
				left: leftpos
			});
			a("div.zoomdiv").width(d.xzoom + 20);
			a("div.zoomdiv").height(d.yzoom - 10);
			a("div.zoomdiv").show();
			if (!d.lens) {
				a(this).css("cursor", "crosshair")
			}
			a(document.body).mousemove(function(n) {
				mouse = new MouseEvent(n);
				var o = a(".bigimg").get(0).offsetWidth;
				var m = a(".bigimg").get(0).offsetHeight;
				var k = "x";
				var l = "y";
				if (isNaN(l) | isNaN(k)) {
					var l = (o / i);
					var k = (m / e);
					l = l > 1 ? l : 1.1;
					k = k > 1 ? k : 1.2;
					a("div.jqZoomPup").width((d.xzoom) / l);
					a("div.jqZoomPup").height((d.yzoom) / k);
					if (d.lens) {
						a("div.jqZoomPup").css("visibility", "visible")
					}
				}
				xpos = mouse.x - a("div.jqZoomPup").width() / 2 - f;
				ypos = mouse.y - a("div.jqZoomPup").height() / 2 - j;
				if (d.lens) {
					xpos = (mouse.x - a("div.jqZoomPup").width() / 2 < f) ? 0 : (mouse.x + a("div.jqZoomPup").width() / 2 > i + f) ? (i - a("div.jqZoomPup").width() - 2) : xpos;
					ypos = (mouse.y - a("div.jqZoomPup").height() / 2 < j) ? 0 : (mouse.y + a("div.jqZoomPup").height() / 2 > e + j) ? (e - a("div.jqZoomPup").height() - 2) : ypos
				}
				if (d.lens) {
					a("div.jqZoomPup").css({
						top: ypos,
						left: xpos
					})
				}
				scrolly = ypos;
				a("div.zoomdiv").get(0).scrollTop = scrolly * k;
				scrollx = xpos;
				a("div.zoomdiv").get(0).scrollLeft = (scrollx) * l
			})
		}, function() {
			a(this).children("img").attr("alt", c);
			a(document.body).unbind("mousemove");
			if (d.lens) {
				a("div.jqZoomPup").remove()
			}
			a("div.zoomdiv").remove()
		});
		count = 0;
		if (d.preload) {
			a("body").append("<div style='display:none;' class='jqPreload" + count + "'>sdsdssdsd</div>");
			a(this).each(function() {
				var f = a(this).children("img").attr("jqimg");
				var e = jQuery("div.jqPreload" + count + "").html();
				jQuery("div.jqPreload" + count + "").html(e + '<img src="' + f + '">')
			})
		}
	}
})(jQuery);

function MouseEvent(a) {
	this.x = a.pageX;
	this.y = a.pageY
};