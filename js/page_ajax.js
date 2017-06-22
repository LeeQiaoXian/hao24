$.fn.ajax_data = function(b) {
	var f = $(this);
	var e = {
		current: "",
		size: "",
		object: "",
		ajaxurl: ""
	};
	var d = $.extend(e, b);
	var a = "";
	if (d.size > 1) {
		a += '<nav><ul class="pagination left"><li ';
		if (d.current == 1) {
			a += 'class="disabled"'
		}
		a += '><a href="javaScript:void(0)" aria-label="Previous" onclick="pageAjax(' + (parseInt(d.current) - 1) + ')" data-page="><span aria-hidden="true"><i class="prev_jt"></i>上一页</span></li>';
		for (var c = 1; c <= d.size; c++) {
			if (d.current <= 4) {
				if (d.size <= parseInt(d.current) + 3) {
					if (c == d.current) {
						a += '<li class="active"><a href="javaScript:void(0)" onclick="pageAjax(' + c + ')">' + c + "</a></li>"
					} else {
						a += '<li><a href="javaScript:void(0)" onclick="pageAjax(' + c + ')">' + c + "</a></li>"
					}
				} else {
					if (c <= parseInt(d.current) + 1) {
						a += "<li ";
						if (c == d.current) {
							a += 'class="active"'
						}
						a += '><a href="javaScript:void(0)" onclick="pageAjax(' + c + ')">' + c + "</a></li>"
					} else {
						if (c == d.size) {
							a += '<li><font>...</font></li><li><a href="javaScript:void(0)" onclick="pageAjax(' + d.size + ')">' + d.size + "</a></li>"
						}
					}
				}
			} else {
				if (c == 1) {
					a += '<li><a href="javaScript:void(0)" onclick="pageAjax(1)">1</a></li><li><font>...</font></li>'
				} else {
					if (parseInt(size) - 4 < d.current && c >= parseInt(current) - 1) {
						a += "<li ";
						if (c == d.current) {
							a += 'class="active"'
						}
						a += '><a href="javaScript:void(0)" onclick="pageAjax(' + c + ')">' + c + "</a></li>"
					} else {
						if (parseInt(size) - 4 >= d.current) {
							if (c >= parseInt(d.current) - 1 && c <= parseInt(current) - 1) {
								a += "<li ";
								if (c == d.current) {
									a += 'class="active"'
								}
								a += '><a href="javaScript:void(0)" onclick="pageAjax(' + c + ')">' + c + "</a></li>"
							} else {
								if (d.size == c) {
									a += '<li><font>...</font></li> <li><a href="javaScript:void(0)" onclick="pageAjax(' + d.size + ')">' + d.size + "</a></li>"
								}
							}
						}
					}
				}
			}
		}
		a += "<li ";
		if (d.current == d.size) {
			a += 'class="disabled"'
		}
		a += '><a href="javaScript:void(0)" aria-label="Next" onclick="pageAjax(' + d.current + ')" data-page="' + (parseInt(d.current) + 1) + '"><span aria-hidden="true">下一页<i class="next_jt"></i></span></a></li></ul><div class="page_go left"><span>共<font id="all_page_size">' + d.size + '</font>页</span>到第<input class="go" id="pageing_no" type="text" value="' + d.current + '">页 <a class="sure" onclick="pageAjax(document.getElementById(\'pageing_no\').value)">确定</a></nav>';
		$(".pageajax").html(a)
	}
};