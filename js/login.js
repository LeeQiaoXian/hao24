$(document).ready(function() {
	require(["modal.login"], function() {
		LoginModal.expressLogin({
			modal: false,
			container: ".login_box .con",
			callback: function() {
				if (typeof(__RETURNURL__) == "undefined" || __RETURNURL__ == "") {
					window.location.href = __BASE_SERVER__ + "/myhao24/"
				} else {
					window.location.href = __RETURNURL__
				}
			}
		})
	})
});