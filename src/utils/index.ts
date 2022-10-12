/**
* 判断是否为安卓
*/
export const isAndroid = ()=>{
    var u = navigator.userAgent.toLowerCase();
    var isAndroid = u.indexOf('android') > -1 || u.indexOf('adr') > -1;//android终端
    return isAndroid;  
}
/**
* 判断是否为安卓
*/
export const isIPhone = ()=>{
    var u = navigator.userAgent.toLowerCase();
    var isIOS = u.indexOf('iphone') > -1; //ios终端
    return isIOS;
}
/**
* 获取地址字段
*/
export const getQueryString = (name:string)=>{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}
/**
 * 判读是否含有表情包
 * @param value 
 * @returns 
 */
export const isEmoticon = function(value:string){
    let emoticonReg = /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g
    return emoticonReg.test(value)
}
/**
 * 手机验证码
 * @param value 
 * @returns 
 */
export const phoneReg = function(value:string){
    let reg = /^1\d{10}$/
    return reg.test(value)
}