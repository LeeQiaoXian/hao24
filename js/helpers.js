Handlebars.registerHelper("addOne", function(a) {
	return a + 1
});
Handlebars.registerHelper("eachInMap", function(b, c) {
	var a = "";
	if (typeof b != "undefined") {
		Object.keys(b).map(function(d) {
			a += c.fn({
				key: d,
				value: b[d]
			})
		})
	}
	return a
});
Handlebars.registerHelper("moneyFormat", function(b, a) {
	return moneyFormart(b)
});
Handlebars.registerHelper("ifCond", function(d, a, c, b) {
	switch (a) {
		case "==":
			return (d == c) ? b.fn(this) : b.inverse(this);
		case "!=":
			return (d != c) ? b.fn(this) : b.inverse(this);
		case "===":
			return (d === c) ? b.fn(this) : b.inverse(this);
		case "<":
			return (d < c) ? b.fn(this) : b.inverse(this);
		case "<=":
			return (d <= c) ? b.fn(this) : b.inverse(this);
		case ">":
			return (d > c) ? b.fn(this) : b.inverse(this);
		case ">=":
			return (d >= c) ? b.fn(this) : b.inverse(this);
		case "&&":
			return (d && c) ? b.fn(this) : b.inverse(this);
		case "||":
			return (d || c) ? b.fn(this) : b.inverse(this);
		default:
			return b.inverse(this)
	}
});
Handlebars.registerHelper("ifMod", function(d, c, a, b) {
	if (d % c == a) {
		return b.fn(this)
	}
	return b.inverse(this)
});
Handlebars.registerHelper("expression", function() {
	var exps = [];
	try {
		var arg_len = arguments.length;
		var len = arg_len - 1;
		for (var j = 0; j < len; j++) {
			exps.push(arguments[j])
		}
		var result = eval(exps.join(" "));
		if (result) {
			return arguments[len].fn(this)
		} else {
			return arguments[len].inverse(this)
		}
	} catch (e) {
		throw new Error('Handlerbars Helper "expression" can not deal with wrong expression:' + exps.join(" ") + ".")
	}
});