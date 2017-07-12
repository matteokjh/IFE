window.onload = function() {
    /*	
    在注释下方写下代码
    给按钮button绑定一个点击事件
    在事件处理函数中
    获取aqi-input输入的值，并显示在aqi-display中
    */
    var input = document.getElementById("aqi-input");
    var button = document.getElementsByTagName("button");
    var display= document.getElementById("aqi-display");
    button[0].addEventListener('click', function () {
        console.log(input.value);
        display.innerHTML = input.value;
    })
}
