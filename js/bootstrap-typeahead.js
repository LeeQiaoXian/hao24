(function(a, b) {
	if (typeof module !== "undefined" && module.exports) {
		module.exports = b(require("jquery"))
	} else {
		if (typeof define === "function" && define.amd) {
			define(["jquery"], function(c) {
				return b(c)
			})
		} else {
			b(a.jQuery)
		}
	}
}(this, function(b) {
	var c = function(e, d) {
		this.$element = b(e);
		this.options = b.extend({}, b.fn.typeahead.defaults, d);
		this.matcher = this.options.matcher || this.matcher;
		this.sorter = this.options.sorter || this.sorter;
		this.select = this.options.select || this.select;
		this.autoSelect = typeof this.options.autoSelect == "boolean" ? this.options.autoSelect : true;
		this.highlighter = this.options.highlighter || this.highlighter;
		this.render = this.options.render || this.render;
		this.updater = this.options.updater || this.updater;
		this.displayText = this.options.displayText || this.displayText;
		this.source = this.options.source;
		this.delay = this.options.delay;
		this.$menu = b(this.options.menu);
		this.$appendTo = this.options.appendTo ? b(this.options.appendTo) : null;
		this.shown = false;
		this.listen();
		this.showHintOnFocus = typeof this.options.showHintOnFocus == "boolean" ? this.options.showHintOnFocus : false;
		this.afterSelect = this.options.afterSelect;
		this.addItem = false
	};
	c.prototype = {
		constructor: c,
		select: function() {
			var e = this.$menu.find(".active").data("value");
			this.$element.data("active", e);
			if (this.autoSelect || e) {
				var d = this.updater(e);
				if (!d) {
					d = ""
				}
				this.$element.val(this.displayText(d) || d).change();
				this.afterSelect(d)
			}
			return this.hide()
		},
		updater: function(d) {
			return d
		},
		setSource: function(d) {
			this.source = d
		},
		show: function() {
			var f = b.extend({}, this.$element.position(), {
					height: this.$element[0].offsetHeight
				}),
				e;
			e = typeof this.options.scrollHeight == "function" ? this.options.scrollHeight.call() : this.options.scrollHeight;
			var d;
			if (this.shown) {
				d = this.$menu
			} else {
				if (this.$appendTo) {
					d = this.$menu.appendTo(this.$appendTo)
				} else {
					d = this.$menu.insertAfter(this.$element)
				}
			}
			d.css({
				top: f.top + f.height + e,
				left: f.left
			}).show();
			this.shown = true;
			return this
		},
		hide: function() {
			this.$menu.hide();
			this.shown = false;
			return this
		},
		lookup: function(e) {
			var d;
			if (typeof(e) != "undefined" && e !== null) {
				this.query = e
			} else {
				this.query = this.$element.val() || ""
			}
			if (this.query.length < this.options.minLength && !this.options.showHintOnFocus) {
				return this.shown ? this.hide() : this
			}
			var f = b.proxy(function() {
				if (b.isFunction(this.source)) {
					this.source(this.query, b.proxy(this.process, this))
				} else {
					if (this.source) {
						this.process(this.source)
					}
				}
			}, this);
			clearTimeout(this.lookupWorker);
			this.lookupWorker = setTimeout(f, this.delay)
		},
		process: function(d) {
			var e = this;
			d = b.grep(d, function(f) {
				return e.matcher(f)
			});
			d = this.sorter(d);
			if (!d.length && !this.options.addItem) {
				return this.shown ? this.hide() : this
			}
			if (d.length > 0) {
				this.$element.data("active", d[0])
			} else {
				this.$element.data("active", null)
			}
			if (this.options.addItem) {
				d.push(this.options.addItem)
			}
			if (this.options.items == "all") {
				return this.render(d).show()
			} else {
				return this.render(d.slice(0, this.options.items)).show()
			}
		},
		matcher: function(e) {
			var d = this.displayText(e);
			return ~d.toLowerCase().indexOf(this.query.toLowerCase())
		},
		sorter: function(f) {
			var g = [],
				e = [],
				d = [],
				i;
			while ((i = f.shift())) {
				var h = this.displayText(i);
				if (!h.toLowerCase().indexOf(this.query.toLowerCase())) {
					g.push(i)
				} else {
					if (~h.indexOf(this.query)) {
						e.push(i)
					} else {
						d.push(i)
					}
				}
			}
			return g.concat(e, d)
		},
		highlighter: function(m) {
			var g = b("<div></div>");
			var j = this.query;
			var f = m.toLowerCase().indexOf(j.toLowerCase());
			var h, d, e, k, l;
			h = j.length;
			if (h === 0) {
				return g.text(m).html()
			}
			while (f > -1) {
				d = m.substr(0, f);
				e = m.substr(f, h);
				k = m.substr(f + h);
				l = b("<strong></strong>").text(e);
				g.append(document.createTextNode(d)).append(l);
				m = k;
				f = m.toLowerCase().indexOf(j.toLowerCase())
			}
			return g.append(document.createTextNode(m)).html()
		},
		render: function(e) {
			var h = this;
			var d = this;
			var g = false;
			var j = [];
			var i = h.options.separator;
			b.each(e, function(k, l) {
				if (k > 0 && l[i] !== e[k - 1][i]) {
					j.push({
						__type: "divider"
					})
				}
				if (l[i] && (k === 0 || l[i] !== e[k - 1][i])) {
					j.push({
						__type: "category",
						name: l[i]
					})
				}
				j.push(l)
			});
			e = b(j).map(function(k, l) {
				if ((l.__type || false) == "category") {
					return b(h.options.headerHtml).text(l.name)[0]
				}
				if ((l.__type || false) == "divider") {
					return b(h.options.headerDivider)[0]
				}
				var m = d.displayText(l);
				k = b(h.options.item).data("value", l);
				k.html(h.highlighter(m, l));
				if (m == d.$element.val()) {
					k.addClass("active");
					d.$element.data("active", l);
					g = true
				}
				return k[0]
			});
			if (this.autoSelect && !g) {
				e.filter(":not(.dropdown-header)").first().addClass("active");
				this.$element.data("active", e.first().data("value"))
			}
			this.$menu.html(e);
			var f = '<li class="search_close">关闭</li>';
			this.$menu.append(f);
			return this
		},
		displayText: function(d) {
			return typeof d !== "undefined" && typeof d.name != "undefined" && d.name || d
		},
		next: function(e) {
			var f = this.$menu.find(".active").removeClass("active"),
				d = f.next();
			if (!d.length || d.hasClass("search_close")) {
				d = b(this.$menu.find("li")[0])
			}
			d.addClass("active")
		},
		prev: function(e) {
			var f = this.$menu.find(".active").removeClass("active"),
				d = f.prev();
			if (!d.length) {
				d = this.$menu.find("li").last()
			}
			d.addClass("active")
		},
		listen: function() {
			this.$element.on("focus", b.proxy(this.focus, this)).on("blur", b.proxy(this.blur, this)).on("keypress", b.proxy(this.keypress, this)).on("input", b.proxy(this.input, this)).on("keyup", b.proxy(this.keyup, this));
			if (this.eventSupported("keydown")) {
				this.$element.on("keydown", b.proxy(this.keydown, this))
			}
			this.$menu.on("click", b.proxy(this.click, this)).on("mouseenter", "li", b.proxy(this.mouseenter, this)).on("mouseleave", "li", b.proxy(this.mouseleave, this))
		},
		destroy: function() {
			this.$element.data("typeahead", null);
			this.$element.data("active", null);
			this.$element.off("focus").off("blur").off("keypress").off("input").off("keyup");
			if (this.eventSupported("keydown")) {
				this.$element.off("keydown")
			}
			this.$menu.remove()
		},
		eventSupported: function(d) {
			var e = d in this.$element;
			if (!e) {
				this.$element.setAttribute(d, "return;");
				e = typeof this.$element[d] === "function"
			}
			return e
		},
		move: function(d) {
			if (!this.shown) {
				return
			}
			switch (d.keyCode) {
				case 9:
				case 13:
				case 27:
					d.preventDefault();
					break;
				case 38:
					if (d.shiftKey) {
						return
					}
					d.preventDefault();
					this.prev();
					break;
				case 40:
					if (d.shiftKey) {
						return
					}
					d.preventDefault();
					this.next();
					break
			}
		},
		keydown: function(d) {
			this.suppressKeyPressRepeat = ~b.inArray(d.keyCode, [40, 38, 9, 13, 27]);
			if (!this.shown && d.keyCode == 40) {
				this.lookup()
			} else {
				this.move(d)
			}
		},
		keypress: function(d) {
			if (this.suppressKeyPressRepeat) {
				return
			}
			this.move(d)
		},
		input: function(d) {
			this.lookup();
			d.preventDefault()
		},
		keyup: function(d) {
			switch (d.keyCode) {
				case 40:
				case 38:
				case 16:
				case 17:
				case 18:
					break;
				case 9:
				case 13:
					if (!this.shown) {
						return
					}
					this.select();
					break;
				case 27:
					if (!this.shown) {
						return
					}
					this.hide();
					break
			}
			d.preventDefault()
		},
		focus: function(d) {
			if (!this.focused) {
				this.focused = true;
				if (this.options.showHintOnFocus) {
					this.lookup("")
				}
			}
		},
		blur: function(d) {
			this.focused = false;
			if (!this.mousedover && this.shown) {
				this.hide()
			}
		},
		click: function(d) {
			d.preventDefault();
			this.select();
			this.$element.focus();
			this.hide()
		},
		mouseenter: function(d) {
			this.mousedover = true;
			this.$menu.find(".active").removeClass("active");
			b(d.currentTarget).addClass("active")
		},
		mouseleave: function(d) {
			this.mousedover = false;
			if (!this.focused && this.shown) {
				this.hide()
			}
		}
	};
	var a = b.fn.typeahead;
	b.fn.typeahead = function(e) {
		var d = arguments;
		if (typeof e == "string" && e == "getActive") {
			return this.data("active")
		}
		return this.each(function() {
			var h = b(this),
				g = h.data("typeahead"),
				f = typeof e == "object" && e;
			if (!g) {
				h.data("typeahead", (g = new c(this, f)))
			}
			if (typeof e == "string" && g[e]) {
				if (d.length > 1) {
					g[e].apply(g, Array.prototype.slice.call(d, 1))
				} else {
					g[e]()
				}
			}
		})
	};
	b.fn.typeahead.defaults = {
		source: [],
		items: 8,
		menu: '<ul class="typeahead search_main" role="listbox"></ul>',
		item: "<li></li>",
		minLength: 1,
		scrollHeight: 0,
		autoSelect: true,
		afterSelect: b.noop,
		addItem: false,
		delay: 0,
		separator: "category",
		headerHtml: '<li class="dropdown-header"></li>',
		headerDivider: '<li class="divider" role="separator"></li>'
	};
	b.fn.typeahead.Constructor = c;
	b.fn.typeahead.noConflict = function() {
		b.fn.typeahead = a;
		return this
	};
	b(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(f) {
		var d = b(this);
		if (d.data("typeahead")) {
			return
		}
		d.typeahead(d.data())
	})
}));