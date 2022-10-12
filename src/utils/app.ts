import { isIPhone } from '@/utils/index'
/**
 * h5交互规则
 * @author panpan
 */
 (function (object) {

	/***********************************************业务规则***********************************************/

	/**
	 * 通用app登录
	 */
	object.toAppLogin = function () {
		var callback = "window.App.loginCallback";
		window.App.gotoLogin(callback);
	}

     /**
	 * 打开登录界面
	 */
	object.gotoLogin = function (callback:string) {
		var params = _func.params("gotoLogin", {callback});
		_func.callApp(params);
	};

	/***********************************************基类方法***********************************************/
	/**
	 * 虚方法，供个业务界面定义
	 */
	object.gotoBack = function () {
		if (isIPhone()) {
			return "true";
		} else {
			window.App.historyBack();
		}
	};

	//内部方法
	var _func = {
		callApp: function (params:any) {
			if (isIPhone()) {
				window.webkit.messageHandlers.app.postMessage(params); //苹果
			} else {
				window.androidCall.app(JSON.stringify(params)); //安卓
			}
		},
		params: function (action: any, param:any) {
			var params = {
				"action": action, //调到某个方法,例如路由
				"params": param //参数
			};
			return params;
		}
	};
})(window.App = window.App || {});
export {}