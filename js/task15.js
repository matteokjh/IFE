
var source = document.getElementById("source");
var lis = source.getElementsByTagName("li");
var hans = [];
var text = [];
var nums = [];
var data = [];
var resort = document.getElementById("resort");
var number = ['一', '二', '三', '四', '五', '六', '七'];
var btn = document.getElementById("sort-btn");
var aqiData = [];

/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
    /*
    coding here
    */

    data = [];
    for (var i = 0; i < lis.length; i++) {
        hans = lis[i].innerText.split("");
        text.push(hans[0] + hans[1]);
        nums.push(lis[i].childNodes[1].innerText);
        data.push([text[i], nums[i]]);
    }
    // for (i = 0; i < lis.length; i++) {
    //     data.push([text[i], nums[i]]);
    // }

    /*
    data = [
      ["北京", 90],
      ["北京", 90]
      ……
    ]
    */

    return data;

}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
    data.sort(abc);
    function abc(a,b) {
        return a[1] - b[1];
    }
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
    data.forEach(function (item,idx) {
        var li = document.createElement("li");
        resort.appendChild(li);
        li.innerHTML = "第" + number[idx] + "名" + ":" + item[0] + "," + item[1];
    })
}

function btnHandle() {
    if(resort.innerText == ""){

        aqiData = getData();
        sortAqiData(aqiData);
        render(aqiData);
    }
}


function init() {

    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    btn.addEventListener('click', btnHandle);
}
init();