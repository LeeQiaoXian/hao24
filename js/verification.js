var validateRegExp = {
	decmal: "^([+-]?)\\d*\\.\\d+$",
	decmal1: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*$",
	decmal2: "^-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*)$",
	decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$",
	decmal4: "^[1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0$",
	decmal5: "^(-([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*))|0?.0+|0$",
	intege: "^-?[1-9]\\d*$",
	intege1: "^[1-9]\\d*$",
	intege2: "^-[1-9]\\d*$",
	num: "^([+-]?)\\d*\\.?\\d+$",
	num1: "^\\d*$",
	num2: "^-[1-9]\\d*|0$",
	chinese: "^[\\u4e00-\\u9fa5]+$",
	realname: "^[\\u4e00-\\u9fa5]{1,5}$",
	date: "^\\d{4}(\\-|\\/|.)\\d{1,2}\\1\\d{1,2}$",
	email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$",
	idcard: "^[1-9]([0-9]{13}|[0-9]{16})([\\dxX])$",
	letter: "^[A-Za-z]+$",
	letter_l: "^[a-z]+$",
	letter_u: "^[A-Z]+$",
	mobile: "^0?(13|15|18|14|17)[0-9]{9}$",
	notempty: "^\\S+$",
	password: "^.*[A-Za-z0-9\\w_-]+.*$",
	hao24pwd: "^((?=.*\d)(?=.*D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,20}$",
	hao24pwdLength: "^.{6,20}$",
	smsCode: "^[0-9]{6}$",
	fullNumber: "^[0-9]+$",
	username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$",
	zipcode: "^\\d{6}$",
	validcode: "^\\d{6}$",
	bankno: "^(\\d{16}|\\d{18}|\\d{19})$",
	expressCode: "^\\w+$",
	captcha: "^[A-Za-z0-9]{5}$",
	gender: "^[M|F|N]$",
	telDCode: "^0[0-9]{2,3}$",
	telCode: "^[0-9]{6,8}$",
	nickNm: "^[\u4e00-\u9fa5a-zA-Z0-9_-]{1,20}$"
};
var VALIDATERULES = {
	isNullSelector: function(b) {
		for (var a = 0; a < b.length; a++) {
			if (VALIDATERULES.isNull($("#" + b[a]).val())) {
				return true
			}
		}
		return false
	},
	isNegative: function(a) {
		return new RegExp(validateRegExp.decmal4).test(a) || new RegExp(validateRegExp.num1).test(a)
	},
	isNull: function(a) {
		return (typeof(a) != "string" || a == "")
	},
	isHaoPwd: function(a) {
		return new RegExp(validateRegExp.hao24pwd).test(a)
	},
	isHaoPwdLength: function(a) {
		return new RegExp(validateRegExp.hao24pwdLength).test(a)
	},
	isMobile: function(a) {
		return new RegExp(validateRegExp.mobile).test(a)
	},
	isNum: function(a) {
		return new RegExp(validateRegExp.num1).test(a)
	},
	isRealName: function(a) {
		return new RegExp(validateRegExp.realname).test(a)
	},
	isValidCode: function(a) {
		return new RegExp(validateRegExp.validcode).test(a)
	},
	isIdcard: function(a) {
		return new RegExp(validateRegExp.idcard).test(a)
	},
	isBankNo: function(a) {
		return new RegExp(validateRegExp.bankno).test(a)
	},
	isExpressCode: function(a) {
		return new RegExp(validateRegExp.expressCode).test(a)
	},
	isExist: function(a) {
		return typeof(a) != "undefined"
	},
	isSMSCode: function(a) {
		return new RegExp(validateRegExp.smsCode).test(a)
	},
	isCaptcha: function(a) {
		return new RegExp(validateRegExp.captcha).test(a)
	},
	isGender: function(a) {
		return new RegExp(validateRegExp.gender).test(a)
	},
	isTelD: function(a) {
		return new RegExp(validateRegExp.telDCode).test(a)
	},
	isTel: function(a) {
		return new RegExp(validateRegExp.telCode).test(a)
	},
	isNickNm: function(a) {
		return new RegExp(validateRegExp.nickNm).test(a)
	},
	decode: function(b) {
		var f = b.split(",");
		var g = "";
		if (f.length > 1) {
			for (var d = 0; d < f.length; d += 2) {
				var c = parseInt(f[d]) << 4 & 255;
				var a = parseInt(f[d + 1]) >> 4 & 255;
				var e = c + a - 48;
				g += e
			}
		} else {
			return b
		}
		return g
	}
};
var NOT_LOGIN_ERROR = "您还没有登录，或登录超时";
var NETWORK_ERROR = "请检查您的网络连接是否正常";
var MOBILE_ERROR = "请检查您填写的手机号";
var MOBILE_EMPTY_ERROR = "手机号不能为空";
var MOBILE_FORMAT_ERROR = "请检查您填写的手机号格式是否正确";
var VALID_CODE_FORMAT_ERROR = "短信验证码输入错误！请确认后重新输入，您也可以重新获取验证码！";
var CAPTCHA_FORMAT_ERROR = "图片验证码输入错误！";
var AGREEMENT_ERROR = "您需同意用户协议";
var ACCOUNT_ERROR = "手机号或用户名填写错误";
var ACCOUNT_FORMAT_ERROR = "手机号或用户名不能为空";
var PASSWORD_FORMAT = "密码由6-20位字符组成，包含至少两种以上字母、数字或者半角字符，区分大小写";
var PASSWORD_ERROR = "密码填写错误";
var PASSWORD_EMPTY_ERROR = "请填写密码";
var PASSWORD_LENGTH_ERROR = "密码长度不正确，请重新设置";
var PASSWORD_FORMAT_ERROR = "请至少输入两种字符组成的复杂密码";
var PASSWORD_MATCH_ERROR = "两次输入的密码不一致";
var INPUT_FORMAT_ERROR = "请检查您填写的信息格式是否正确";
var RECIVNM_EMPTY_ERROR = "收货人姓名不能为空";
var RECIVNM_FORMAT_ERROR = "收货人姓名只能是汉字";
var RECIVE_AREA_EMPTY_ERROR = "请重新编辑所在地区";
var RECIVE_ADDR_EMPTY_ERROR = "详细地址不能为空";
var RECIVE_ADDR_LENGTH_ERROR = "详细地址不能超过30个字";
var EXPRESS_ID_ERROR = "请选择物流公司";
var EXPRESS_CODE_ERROR = "运单编号不能为空";
var EXPRESS_CODE_ERROR1 = "输入的运单编号不合法";
var BANK_ACCOUNT_ERROR = "开户名不能为空";
var BANK_NM_ERROR = "开户银行不能为空";
var BRANCH_BANK_NM_ERROR = "开户支行不能为空";
var BANK_NO_EMPTY_ERROR = "银行账号不能为空";
var BANK_NO_ERROR = "输入的银行账号不合法";
var EXPRESS_DESC_ERROR = "备注不能超过250字";
var EXPRESS_FEE_ERROE = "运费应该为正整数";
var EXPRESS_FEE_INPUT = "请填写您的运费";