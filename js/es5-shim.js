/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */
(function(a, b) {
	if (typeof define === "function" && define.amd) {
		define(b)
	} else {
		if (typeof exports === "object") {
			module.exports = b()
		} else {
			a.returnExports = b()
		}
	}
}(this, function() {
	var av = Array.prototype;
	var aT = Object.prototype;
	var aN = Function.prototype;
	var ak = String.prototype;
	var T = Number.prototype;
	var aw = av.slice;
	var D = av.splice;
	var aj = av.push;
	var ai = av.unshift;
	var U = aN.call;
	var ag = aT.toString;
	var c = Array.isArray || function c(aV) {
		return ag.call(aV) === "[object Array]"
	};
	var w = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
	var I;
	var a = Function.prototype.toString,
		al = function al(aV) {
			try {
				a.call(aV);
				return true
			} catch (aW) {
				return false
			}
		},
		aG = "[object Function]",
		q = "[object GeneratorFunction]";
	I = function I(aV) {
		if (typeof aV !== "function") {
			return false
		}
		if (w) {
			return al(aV)
		}
		var aW = ag.call(aV);
		return aW === aG || aW === q
	};
	var t;
	var Y = RegExp.prototype.exec,
		u = function u(aV) {
			try {
				Y.call(aV);
				return true
			} catch (aW) {
				return false
			}
		},
		G = "[object RegExp]";
	t = function t(aV) {
		if (typeof aV !== "object") {
			return false
		}
		return w ? u(aV) : ag.call(aV) === G
	};
	var aM;
	var y = String.prototype.valueOf,
		aR = function aR(aV) {
			try {
				y.call(aV);
				return true
			} catch (aW) {
				return false
			}
		},
		X = "[object String]";
	aM = function aM(aV) {
		if (typeof aV === "string") {
			return true
		}
		if (typeof aV !== "object") {
			return false
		}
		return w ? aR(aV) : ag.call(aV) === X
	};
	var d = function d(aW) {
		var aX = ag.call(aW);
		var aV = aX === "[object Arguments]";
		if (!aV) {
			aV = !c(aW) && aW !== null && typeof aW === "object" && typeof aW.length === "number" && aW.length >= 0 && I(aW.callee)
		}
		return aV
	};
	var j = (function(aX) {
		var aY = Object.defineProperty && (function() {
			try {
				Object.defineProperty({}, "x", {});
				return true
			} catch (aZ) {
				return false
			}
		}());
		var aV;
		if (aY) {
			aV = function(a0, aZ, a2, a1) {
				if (!a1 && (aZ in a0)) {
					return
				}
				Object.defineProperty(a0, aZ, {
					configurable: true,
					enumerable: false,
					writable: true,
					value: a2
				})
			}
		} else {
			aV = function(a0, aZ, a2, a1) {
				if (!a1 && (aZ in a0)) {
					return
				}
				a0[aZ] = a2
			}
		}
		return function aW(a0, a2, a1) {
			for (var aZ in a2) {
				if (aX.call(a2, aZ)) {
					aV(a0, aZ, a2[aZ], a1)
				}
			}
		}
	}(aT.hasOwnProperty));

	function aa(aV) {
		var aW = typeof aV;
		return aV === null || aW === "undefined" || aW === "boolean" || aW === "number" || aW === "string"
	}
	var O = {
		ToInteger: function aC(aV) {
			var aW = +aV;
			if (aW !== aW) {
				aW = 0
			} else {
				if (aW !== 0 && aW !== (1 / 0) && aW !== -(1 / 0)) {
					aW = (aW > 0 || -1) * Math.floor(Math.abs(aW))
				}
			}
			return aW
		},
		ToPrimitive: function o(aW) {
			var aY, aV, aX;
			if (aa(aW)) {
				return aW
			}
			aV = aW.valueOf;
			if (I(aV)) {
				aY = aV.call(aW);
				if (aa(aY)) {
					return aY
				}
			}
			aX = aW.toString;
			if (I(aX)) {
				aY = aX.call(aW);
				if (aa(aY)) {
					return aY
				}
			}
			throw new TypeError()
		},
		ToObject: function(aV) {
			if (aV == null) {
				throw new TypeError("can't convert " + aV + " to object")
			}
			return Object(aV)
		},
		ToUint32: function ad(aV) {
			return aV >>> 0
		}
	};
	var aH = function aH() {};
	j(aN, {
		bind: function aJ(a0) {
			var a1 = this;
			if (!I(a1)) {
				throw new TypeError("Function.prototype.bind called on incompatible " + a1)
			}
			var aX = aw.call(arguments, 1);
			var aZ;
			var aW = function() {
				if (this instanceof aZ) {
					var a3 = a1.apply(this, aX.concat(aw.call(arguments)));
					if (Object(a3) === a3) {
						return a3
					}
					return this
				} else {
					return a1.apply(a0, aX.concat(aw.call(arguments)))
				}
			};
			var aV = Math.max(0, a1.length - aX.length);
			var a2 = [];
			for (var aY = 0; aY < aV; aY++) {
				a2.push("$" + aY)
			}
			aZ = Function("binder", "return function (" + a2.join(",") + "){ return binder.apply(this, arguments); }")(aW);
			if (a1.prototype) {
				aH.prototype = a1.prototype;
				aZ.prototype = new aH();
				aH.prototype = null
			}
			return aZ
		}
	});
	var ao = U.bind(aT.hasOwnProperty);
	var f = (function() {
		var aW = [1, 2];
		var aV = aW.splice();
		return aW.length === 2 && c(aV) && aV.length === 0
	}());
	j(av, {
		splice: function au(aW, aV) {
			if (arguments.length === 0) {
				return []
			} else {
				return D.apply(this, arguments)
			}
		}
	}, !f);
	var ax = (function() {
		var aV = {};
		av.splice.call(aV, 0, 0, 1);
		return aV.length === 1
	}());
	j(av, {
		splice: function au(aX, aW) {
			if (arguments.length === 0) {
				return []
			}
			var aV = arguments;
			this.length = Math.max(O.ToInteger(this.length), 0);
			if (arguments.length > 0 && typeof aW !== "number") {
				aV = aw.call(arguments);
				if (aV.length < 2) {
					aV.push(this.length - aX)
				} else {
					aV[1] = O.ToInteger(aW)
				}
			}
			return D.apply(this, aV)
		}
	}, !ax);
	var aO = [].unshift(0) !== 1;
	j(av, {
		unshift: function() {
			ai.apply(this, arguments);
			return this.length
		}
	}, aO);
	j(Array, {
		isArray: c
	});
	var J = Object("a");
	var aU = J[0] !== "a" || !(0 in J);
	var aA = function ab(aX) {
		var aW = true;
		var aV = true;
		if (aX) {
			aX.call("foo", function(aY, a0, aZ) {
				if (typeof aZ !== "object") {
					aW = false
				}
			});
			aX.call([1], function() {
				aV = typeof this === "string"
			}, "x")
		}
		return !!aX && aW && aV
	};
	j(av, {
		forEach: function ay(aV) {
			var aX = O.ToObject(this),
				aW = aU && aM(this) ? this.split("") : aX,
				aZ = arguments[1],
				aY = -1,
				a0 = aW.length >>> 0;
			if (!I(aV)) {
				throw new TypeError()
			}
			while (++aY < a0) {
				if (aY in aW) {
					aV.call(aZ, aW[aY], aY, aX)
				}
			}
		}
	}, !aA(av.forEach));
	j(av, {
		map: function E(aW) {
			var aY = O.ToObject(this),
				aX = aU && aM(this) ? this.split("") : aY,
				a1 = aX.length >>> 0,
				aV = Array(a1),
				a0 = arguments[1];
			if (!I(aW)) {
				throw new TypeError(aW + " is not a function")
			}
			for (var aZ = 0; aZ < a1; aZ++) {
				if (aZ in aX) {
					aV[aZ] = aW.call(a0, aX[aZ], aZ, aY)
				}
			}
			return aV
		}
	}, !aA(av.map));
	j(av, {
		filter: function M(aW) {
			var aY = O.ToObject(this),
				aX = aU && aM(this) ? this.split("") : aY,
				a1 = aX.length >>> 0,
				aV = [],
				a2, a0 = arguments[1];
			if (!I(aW)) {
				throw new TypeError(aW + " is not a function")
			}
			for (var aZ = 0; aZ < a1; aZ++) {
				if (aZ in aX) {
					a2 = aX[aZ];
					if (aW.call(a0, a2, aZ, aY)) {
						aV.push(a2)
					}
				}
			}
			return aV
		}
	}, !aA(av.filter));
	j(av, {
		every: function ap(aV) {
			var aX = O.ToObject(this),
				aW = aU && aM(this) ? this.split("") : aX,
				a0 = aW.length >>> 0,
				aZ = arguments[1];
			if (!I(aV)) {
				throw new TypeError(aV + " is not a function")
			}
			for (var aY = 0; aY < a0; aY++) {
				if (aY in aW && !aV.call(aZ, aW[aY], aY, aX)) {
					return false
				}
			}
			return true
		}
	}, !aA(av.every));
	j(av, {
		some: function L(aV) {
			var aX = O.ToObject(this),
				aW = aU && aM(this) ? this.split("") : aX,
				a0 = aW.length >>> 0,
				aZ = arguments[1];
			if (!I(aV)) {
				throw new TypeError(aV + " is not a function")
			}
			for (var aY = 0; aY < a0; aY++) {
				if (aY in aW && aV.call(aZ, aW[aY], aY, aX)) {
					return true
				}
			}
			return false
		}
	}, !aA(av.some));
	var ae = false;
	if (av.reduce) {
		ae = typeof av.reduce.call("es5", function(aW, aX, aV, aY) {
			return aY
		}) === "object"
	}
	j(av, {
		reduce: function m(aW) {
			var aY = O.ToObject(this),
				aX = aU && aM(this) ? this.split("") : aY,
				a0 = aX.length >>> 0;
			if (!I(aW)) {
				throw new TypeError(aW + " is not a function")
			}
			if (!a0 && arguments.length === 1) {
				throw new TypeError("reduce of empty array with no initial value")
			}
			var aZ = 0;
			var aV;
			if (arguments.length >= 2) {
				aV = arguments[1]
			} else {
				do {
					if (aZ in aX) {
						aV = aX[aZ++];
						break
					}
					if (++aZ >= a0) {
						throw new TypeError("reduce of empty array with no initial value")
					}
				} while (true)
			}
			for (; aZ < a0; aZ++) {
				if (aZ in aX) {
					aV = aW.call(void 0, aV, aX[aZ], aZ, aY)
				}
			}
			return aV
		}
	}, !ae);
	var an = false;
	if (av.reduceRight) {
		an = typeof av.reduceRight.call("es5", function(aW, aX, aV, aY) {
			return aY
		}) === "object"
	}
	j(av, {
		reduceRight: function af(aW) {
			var aY = O.ToObject(this),
				aX = aU && aM(this) ? this.split("") : aY,
				a0 = aX.length >>> 0;
			if (!I(aW)) {
				throw new TypeError(aW + " is not a function")
			}
			if (!a0 && arguments.length === 1) {
				throw new TypeError("reduceRight of empty array with no initial value")
			}
			var aV, aZ = a0 - 1;
			if (arguments.length >= 2) {
				aV = arguments[1]
			} else {
				do {
					if (aZ in aX) {
						aV = aX[aZ--];
						break
					}
					if (--aZ < 0) {
						throw new TypeError("reduceRight of empty array with no initial value")
					}
				} while (true)
			}
			if (aZ < 0) {
				return aV
			}
			do {
				if (aZ in aX) {
					aV = aW.call(void 0, aV, aX[aZ], aZ, aY)
				}
			} while (aZ--);
			return aV
		}
	}, !an);
	var am = Array.prototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
	j(av, {
		indexOf: function r(aW) {
			var aV = aU && aM(this) ? this.split("") : O.ToObject(this),
				aY = aV.length >>> 0;
			if (!aY) {
				return -1
			}
			var aX = 0;
			if (arguments.length > 1) {
				aX = O.ToInteger(arguments[1])
			}
			aX = aX >= 0 ? aX : Math.max(0, aY + aX);
			for (; aX < aY; aX++) {
				if (aX in aV && aV[aX] === aW) {
					return aX
				}
			}
			return -1
		}
	}, am);
	var aP = Array.prototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
	j(av, {
		lastIndexOf: function aB(aW) {
			var aV = aU && aM(this) ? this.split("") : O.ToObject(this),
				aY = aV.length >>> 0;
			if (!aY) {
				return -1
			}
			var aX = aY - 1;
			if (arguments.length > 1) {
				aX = Math.min(aX, O.ToInteger(arguments[1]))
			}
			aX = aX >= 0 ? aX : aY - Math.abs(aX);
			for (; aX >= 0; aX--) {
				if (aX in aV && aW === aV[aX]) {
					return aX
				}
			}
			return -1
		}
	}, aP);
	var Z = !({
			toString: null
		}).propertyIsEnumerable("toString"),
		ac = function() {}.propertyIsEnumerable("prototype"),
		B = !ao("x", "0"),
		l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
		Q = l.length;
	j(Object, {
		keys: function P(aY) {
			var a3 = I(aY),
				aW = d(aY),
				a6 = aY !== null && typeof aY === "object",
				a4 = a6 && aM(aY);
			if (!a6 && !a3 && !aW) {
				throw new TypeError("Object.keys called on a non-object")
			}
			var a1 = [];
			var a7 = ac && a3;
			if ((a4 && B) || aW) {
				for (var a2 = 0; a2 < aY.length; ++a2) {
					a1.push(String(a2))
				}
			}
			if (!aW) {
				for (var aV in aY) {
					if (!(a7 && aV === "prototype") && ao(aY, aV)) {
						a1.push(String(aV))
					}
				}
			}
			if (Z) {
				var a5 = aY.constructor,
					aX = a5 && a5.prototype === aY;
				for (var a0 = 0; a0 < Q; a0++) {
					var aZ = l[a0];
					if (!(aX && aZ === "constructor") && ao(aY, aZ)) {
						a1.push(aZ)
					}
				}
			}
			return a1
		}
	});
	var aS = Object.keys && (function() {
		return Object.keys(arguments).length === 2
	}(1, 2));
	var p = Object.keys;
	j(Object, {
		keys: function P(aV) {
			if (d(aV)) {
				return p(av.slice.call(aV))
			} else {
				return p(aV)
			}
		}
	}, !aS);
	var C = -62198755200000;
	var x = "-000001";
	var N = Date.prototype.toISOString && new Date(C).toISOString().indexOf(x) === -1;
	j(Date.prototype, {
		toISOString: function aq() {
			var aV, aX, aY, aW, aZ;
			if (!isFinite(this)) {
				throw new RangeError("Date.prototype.toISOString called on non-finite value.")
			}
			aW = this.getUTCFullYear();
			aZ = this.getUTCMonth();
			aW += Math.floor(aZ / 12);
			aZ = (aZ % 12 + 12) % 12;
			aV = [aZ + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
			aW = ((aW < 0 ? "-" : (aW > 9999 ? "+" : "")) + ("00000" + Math.abs(aW)).slice((0 <= aW && aW <= 9999) ? -4 : -6));
			aX = aV.length;
			while (aX--) {
				aY = aV[aX];
				if (aY < 10) {
					aV[aX] = "0" + aY
				}
			}
			return (aW + "-" + aV.slice(0, 2).join("-") + "T" + aV.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z")
		}
	}, N);
	var i = (function() {
		try {
			return Date.prototype.toJSON && new Date(NaN).toJSON() === null && new Date(C).toJSON().indexOf(x) !== -1 && Date.prototype.toJSON.call({
				toISOString: function() {
					return true
				}
			})
		} catch (aV) {
			return false
		}
	}());
	if (!i) {
		Date.prototype.toJSON = function H(aX) {
			var aY = Object(this);
			var aW = O.ToPrimitive(aY);
			if (typeof aW === "number" && !isFinite(aW)) {
				return null
			}
			var aV = aY.toISOString;
			if (!I(aV)) {
				throw new TypeError("toISOString property is not callable")
			}
			return aV.call(aY)
		}
	}
	var az = Date.parse("+033658-09-27T01:46:40.000Z") === 1000000000000000;
	var n = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z"));
	var K = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
	if (!Date.parse || K || n || !az) {
		Date = (function(aZ) {
			function aW(a5, ba, a3, a9, a8, bb, a4) {
				var a6 = arguments.length;
				if (this instanceof aZ) {
					var a7 = a6 === 1 && String(a5) === a5 ? new aZ(aW.parse(a5)) : a6 >= 7 ? new aZ(a5, ba, a3, a9, a8, bb, a4) : a6 >= 6 ? new aZ(a5, ba, a3, a9, a8, bb) : a6 >= 5 ? new aZ(a5, ba, a3, a9, a8) : a6 >= 4 ? new aZ(a5, ba, a3, a9) : a6 >= 3 ? new aZ(a5, ba, a3) : a6 >= 2 ? new aZ(a5, ba) : a6 >= 1 ? new aZ(a5) : new aZ();
					j(a7, {
						constructor: aW
					}, true);
					return a7
				}
				return aZ.apply(this, arguments)
			}
			var a1 = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");
			var aV = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

			function a0(a4, a5) {
				var a3 = a5 > 1 ? 1 : 0;
				return (aV[a5] + Math.floor((a4 - 1969 + a3) / 4) - Math.floor((a4 - 1901 + a3) / 100) + Math.floor((a4 - 1601 + a3) / 400) + 365 * (a4 - 1970))
			}

			function aX(a3) {
				return Number(new aZ(1970, 0, 1, 0, 0, 0, a3))
			}
			for (var aY in aZ) {
				aW[aY] = aZ[aY]
			}
			aW.now = aZ.now;
			aW.UTC = aZ.UTC;
			aW.prototype = aZ.prototype;
			aW.prototype.constructor = aW;
			aW.parse = function a2(bb) {
				var ba = a1.exec(bb);
				if (ba) {
					var bd = Number(ba[1]),
						bc = Number(ba[2] || 1) - 1,
						be = Number(ba[3] || 1) - 1,
						a7 = Number(ba[4] || 0),
						a6 = Number(ba[5] || 0),
						a3 = Number(ba[6] || 0),
						bg = Math.floor(Number(ba[7] || 0) * 1000),
						a5 = Boolean(ba[4] && !ba[8]),
						a9 = ba[9] === "-" ? 1 : -1,
						a4 = Number(ba[10] || 0),
						a8 = Number(ba[11] || 0),
						bf;
					if (a7 < (a6 > 0 || a3 > 0 || bg > 0 ? 24 : 25) && a6 < 60 && a3 < 60 && bg < 1000 && bc > -1 && bc < 12 && a4 < 24 && a8 < 60 && be > -1 && be < (a0(bd, bc + 1) - a0(bd, bc))) {
						bf = ((a0(bd, bc) + be) * 24 + a7 + a4 * a9) * 60;
						bf = ((bf + a6 + a8 * a9) * 60 + a3) * 1000 + bg;
						if (a5) {
							bf = aX(bf)
						}
						if (-8640000000000000 <= bf && bf <= 8640000000000000) {
							return bf
						}
					}
					return NaN
				}
				return aZ.parse.apply(this, arguments)
			};
			return aW
		}(Date))
	}
	if (!Date.now) {
		Date.now = function aL() {
			return new Date().getTime()
		}
	}
	var h = T.toFixed && ((0.00008).toFixed(3) !== "0.000" || (0.9).toFixed(0) !== "1" || (1.255).toFixed(2) !== "1.25" || (1000000000000000100).toFixed(0) !== "1000000000000000128");
	var A = {
		base: 10000000,
		size: 6,
		data: [0, 0, 0, 0, 0, 0],
		multiply: function b(aY, aX) {
			var aW = -1;
			var aV = aX;
			while (++aW < A.size) {
				aV += aY * A.data[aW];
				A.data[aW] = aV % A.base;
				aV = Math.floor(aV / A.base)
			}
		},
		divide: function aD(aX) {
			var aV = A.size,
				aW = 0;
			while (--aV >= 0) {
				aW += A.data[aV];
				A.data[aV] = Math.floor(aW / aX);
				aW = (aW % aX) * A.base
			}
		},
		numToString: function v() {
			var aW = A.size;
			var aX = "";
			while (--aW >= 0) {
				if (aX !== "" || aW === 0 || A.data[aW] !== 0) {
					var aV = String(A.data[aW]);
					if (aX === "") {
						aX = aV
					} else {
						aX += "0000000".slice(0, 7 - aV.length) + aV
					}
				}
			}
			return aX
		},
		pow: function aF(aV, aX, aW) {
			return (aX === 0 ? aW : (aX % 2 === 1 ? aF(aV, aX - 1, aW * aV) : aF(aV * aV, aX / 2, aW)))
		},
		log: function g(aV) {
			var aX = 0;
			var aW = aV;
			while (aW >= 4096) {
				aX += 12;
				aW /= 4096
			}
			while (aW >= 2) {
				aX += 1;
				aW /= 2
			}
			return aX
		}
	};
	j(T, {
		toFixed: function V(a2) {
			var aY, a1, a3, aV, aZ, a0, aX, aW;
			aY = Number(a2);
			aY = aY !== aY ? 0 : Math.floor(aY);
			if (aY < 0 || aY > 20) {
				throw new RangeError("Number.toFixed called with invalid number of decimals")
			}
			a1 = Number(this);
			if (a1 !== a1) {
				return "NaN"
			}
			if (a1 <= -1e+21 || a1 >= 1e+21) {
				return String(a1)
			}
			a3 = "";
			if (a1 < 0) {
				a3 = "-";
				a1 = -a1
			}
			aV = "0";
			if (a1 > 1e-21) {
				aZ = A.log(a1 * A.pow(2, 69, 1)) - 69;
				a0 = (aZ < 0 ? a1 * A.pow(2, -aZ, 1) : a1 / A.pow(2, aZ, 1));
				a0 *= 4503599627370496;
				aZ = 52 - aZ;
				if (aZ > 0) {
					A.multiply(0, a0);
					aX = aY;
					while (aX >= 7) {
						A.multiply(10000000, 0);
						aX -= 7
					}
					A.multiply(A.pow(10, aX, 1), 0);
					aX = aZ - 1;
					while (aX >= 23) {
						A.divide(1 << 23);
						aX -= 23
					}
					A.divide(1 << aX);
					A.multiply(1, 1);
					A.divide(2);
					aV = A.numToString()
				} else {
					A.multiply(0, a0);
					A.multiply(1 << (-aZ), 0);
					aV = A.numToString() + "0.00000000000000000000".slice(2, 2 + aY)
				}
			}
			if (aY > 0) {
				aW = aV.length;
				if (aW <= aY) {
					aV = a3 + "0.0000000000000000000".slice(0, aY - aW + 2) + aV
				} else {
					aV = a3 + aV.slice(0, aW - aY) + "." + aV.slice(aW - aY)
				}
			} else {
				aV = a3 + aV
			}
			return aV
		}
	}, h);
	var at = ak.split;
	if ("ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || "tesst".split(/(s)*/)[1] === "t" || "test".split(/(?:)/, -1).length !== 4 || "".split(/.?/).length || ".".split(/()()/).length > 1) {
		(function() {
			var aV = typeof(/()??/).exec("")[1] === "undefined";
			ak.split = function(a2, a0) {
				var a5 = this;
				if (typeof a2 === "undefined" && a0 === 0) {
					return []
				}
				if (!t(a2)) {
					return at.call(this, a2, a0)
				}
				var aY = [];
				var aZ = (a2.ignoreCase ? "i" : "") + (a2.multiline ? "m" : "") + (a2.extended ? "x" : "") + (a2.sticky ? "y" : ""),
					aW = 0,
					aX, a3, a4, a6;
				var a1 = new RegExp(a2.source, aZ + "g");
				a5 += "";
				if (!aV) {
					aX = new RegExp("^" + a1.source + "$(?!\\s)", aZ)
				}
				var a7 = typeof a0 === "undefined" ? -1 >>> 0 : O.ToUint32(a0);
				a3 = a1.exec(a5);
				while (a3) {
					a4 = a3.index + a3[0].length;
					if (a4 > aW) {
						aY.push(a5.slice(aW, a3.index));
						if (!aV && a3.length > 1) {
							a3[0].replace(aX, function() {
								for (var a8 = 1; a8 < arguments.length - 2; a8++) {
									if (typeof arguments[a8] === "undefined") {
										a3[a8] = void 0
									}
								}
							})
						}
						if (a3.length > 1 && a3.index < a5.length) {
							aj.apply(aY, a3.slice(1))
						}
						a6 = a3[0].length;
						aW = a4;
						if (aY.length >= a7) {
							break
						}
					}
					if (a1.lastIndex === a3.index) {
						a1.lastIndex++
					}
					a3 = a1.exec(a5)
				}
				if (aW === a5.length) {
					if (a6 || !a1.test("")) {
						aY.push("")
					}
				} else {
					aY.push(a5.slice(aW))
				}
				return aY.length > a7 ? aY.slice(0, a7) : aY
			}
		}())
	} else {
		if ("0".split(void 0, 0).length) {
			ak.split = function z(aW, aV) {
				if (typeof aW === "undefined" && aV === 0) {
					return []
				}
				return at.call(this, aW, aV)
			}
		}
	}
	var e = ak.replace;
	var ar = (function() {
		var aV = [];
		"x".replace(/x(.)?/g, function(aW, aX) {
			aV.push(aX)
		});
		return aV.length === 1 && typeof aV[0] === "undefined"
	}());
	if (!ar) {
		ak.replace = function W(aZ, aX) {
			var aW = I(aX);
			var aV = t(aZ) && (/\)[*?]/).test(aZ.source);
			if (!aW || !aV) {
				return e.call(this, aZ, aX)
			} else {
				var aY = function(a2) {
					var a3 = arguments.length;
					var a0 = aZ.lastIndex;
					aZ.lastIndex = 0;
					var a1 = aZ.exec(a2) || [];
					aZ.lastIndex = a0;
					a1.push(arguments[a3 - 2], arguments[a3 - 1]);
					return aX.apply(this, a1)
				};
				return e.call(this, aZ, aY)
			}
		}
	}
	var aI = ak.substr;
	var ah = "".substr && "0b".substr(-1) !== "b";
	j(ak, {
		substr: function R(aX, aV) {
			var aW = aX;
			if (aX < 0) {
				aW = Math.max(this.length + aX, 0)
			}
			return aI.call(this, aW, aV)
		}
	}, ah);
	var k = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
	var s = "\u200b";
	var F = "[" + k + "]";
	var aK = new RegExp("^" + F + F + "*");
	var S = new RegExp(F + F + "*$");
	var aQ = ak.trim && (k.trim() || !s.trim());
	j(ak, {
		trim: function aE() {
			if (typeof this === "undefined" || this === null) {
				throw new TypeError("can't convert " + this + " to object")
			}
			return String(this).replace(aK, "").replace(S, "")
		}
	}, aQ);
	if (parseInt(k + "08") !== 8 || parseInt(k + "0x16") !== 22) {
		parseInt = (function(aV) {
			var aW = /^0[xX]/;
			return function aX(a1, a0) {
				var aZ = String(a1).trim();
				var aY = Number(a0) || (aW.test(aZ) ? 16 : 10);
				return aV(aZ, aY)
			}
		}(parseInt))
	}
}));