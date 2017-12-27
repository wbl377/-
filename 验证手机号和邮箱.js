/*
* @Author: wangbaolong
* @Date:   2017-12-27 15:10:46
* @Last Modified by:   wangbaolong
* @Last Modified time: 2017-12-27 15:12:01
*/
/**
 * Created by Administrator on 2017/10/30.
 */
function setResult(tag, content, color) {
    if(tag && typeof tag == 'object') {
        tag.innerHTML = content;
        tag.style.color = color;
    }
}

var validateEmail = function (e) {
    // 邮箱正则
    var reg = /^[a-z0-9]+(\w|_)+@+([a-z0-9]){2,4}.[a-z]{2,4}$/;
    var currentValue = e.target.value;
    var resultTag = document.getElementById('resultEmail'),
        content = reg.test(currentValue) ? '邮箱正确' : '请输入正确的邮箱',
        color = reg.test(currentValue) ? 'green' : 'red';
    setResult(resultTag, content, color);
}

var validateMobile = function (e) {
    // 手机号正则
    var reg = /^1(3|4|5|7|8){1}[0-9]{9}$/
    var currentValue = e.target.value;
    var resultTag = document.getElementById('resultMobile'),
        content = reg.test(currentValue) ? '手机号正确' : '请输入正确的手机号',
        color = reg.test(currentValue) ? 'green' : 'red';
    setResult(resultTag, content, color);
}

// 防抖
function debounce(func, wait) {
    var timeOut;

    return function () {
        if(timeOut) {
            clearTimeout(timeOut);
        }
        // 保存this上下文，参数
        var that = this, args = arguments;
        timeOut = setTimeout(function () {
            func.apply(that, args);
        }, wait)
    }
}

document.getElementById('emailIpt').onkeyup = debounce(validateEmail, 1000);
document.getElementById('mobileIpt').onkeyup = debounce(validateMobile, 1000);




