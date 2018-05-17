# teacher_evaluation
HDU 杭电 正方选课系统 快速学评教

## 使用

### 书签方式

添加chrome书签，在网址一栏粘贴下列代码。然后打开学评教页面，点击书签即可。

```
javascript:!function(){function e(e){var n=(t.contentDocument.getElementById("pjkc"),t.contentDocument.getElementById("DataGrid1")),c=n.querySelectorAll("select"),l=(c.length,0);c.forEach(function(e){e.options[1].selected=!0,++l%9==0&&(e.options[2].selected=!0)});for(var u=t.contentDocument.getElementById("Button1"),a=0;a<o;a++)u.click()}var t=document.getElementById("iframeautoheight"),n=t.contentDocument||t.contentWindow.document,o=n.querySelectorAll("#pjkc option").length,c=0;e(0),t.onload=function(){++c<o?e(c):console.log("Already evaluate"+c+"classes!")}}();
```

![](http://ww1.sinaimg.cn/large/789d050dly1fregju9cf3j20e6070q39.jpg)

### 控制台方式

F12打开控制台后，粘贴如下代码并回车(稍等几秒)。
```
var script = document.createElement("script");
script.type = "text/javascript";
script.src = 'https://rawcdn.githack.com/RenkoQ/teacher_evaluation/master/evaluate.min.js';
document.getElementsByTagName("head")[0].appendChild(script);
```

或者直接粘贴`evaluate.min.js`，回车即可。