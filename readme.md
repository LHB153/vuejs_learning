####html代码
~~~
    <div id="app-2">
        <span v-bind:title="message">
            鼠标悬停几秒钟查看此处动态绑定的提示消息
        </span>
    </div>
~~~
####js的代码
~~~
    var app2 = new Vue({
        el: "#app-2",
        data:{
            message:'页面加载于' + new Date().toLocaleString()
        }
    })
~~~
得到的结果
![my-logo.png](https://github.com/LHB153/vuejs_learning/blob/main/img/1607000997(1).png "my-logo")