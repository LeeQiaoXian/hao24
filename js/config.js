require.config({
	baseUrl: __STATIC_SERVER__ + "/js",
	paths: {
		verification: "common/verification",
		scrollLoading: "common/scrollLoading",
		"select.area": "common/select_area",
		smscheck: "common/smscheck",
		"modal.login": "common/login_modal",
		"modal.uc": "common/uc_modal",
		ntkfstat: "https://dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9888&XNform=t2d2",
		onlineService: "common/online_service"
	},
	shim: {
		verification: [],
		scrollLoading: {},
		"select.area": [],
		smscheck: ["verification"],
		"modal.login": {
			deps: ["verification", "smscheck"]
		},
		"modal.uc": {
			deps: ["verification", "smscheck"]
		},
		onlineService: {
			deps: ["ntkfstat"]
		}
	}
});