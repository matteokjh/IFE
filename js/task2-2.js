var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];
var newData = Array();
(function () {

    /*
    在注释下方编写代码
    遍历读取aqiData中各个城市的数据
    将空气质量指数大于60的城市显示到aqi-list的列表中
    */

    //for (i = 0,j = 0; i <= 5; i++){
    //    if (aqiData[i][1] > 60) {
    //        newData[j] = aqiData[i];
    //        j++;
    //    }
    //}//挑合格的出来。
    newData = aqiData.filter(aqi => aqi[1] > 60);
    //newData.sort(function (a, b) {
    //    return b[1] - a[1];
    //});//sort
    newData.sort((a,b) => b[1]-a[1]);
    var number = ["一", "二", "三", "四"];
    
    var ul = document.getElementById("aqi-list");
    //for (var i = 0; i < newData.length; i++) {
        
    //    ul.appendChild(li);
    //    li.innerHTML = "第" + number[i] + "名" + ":" + newData[i][0] + "," + newData[i][1];
    //    console.log(newData[i]);
    //}
    
    newData.forEach( (data, idx) => {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = "第" + number[idx] + "名" + ":" + data[0] + "," + data[1];
        console.log(data);
    })

})();
