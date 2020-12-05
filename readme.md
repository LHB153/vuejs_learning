#### html代码
~~~
    <div id="app-2">
        <span v-bind:title="message">
            鼠标悬停几秒钟查看此处动态绑定的提示消息
        </span>
    </div>
~~~
#### js的代码
~~~
    var app2 = new Vue({
        el: "#app-2",
        data:{
            message:'页面加载于' + new Date().toLocaleString()
        }
    })
~~~
#### 得到的结果
![](https://github.com/LHB153/vuejs_learning/blob/main/img/1607000997(1).png)

#### 条件与循环
控制切换一个元素
~~~
    <div id = "app">
        <p v-if="seen">现在你可以看到我了</p>
    </div>
    <div id = "app1">
        <p v-if="seen">现在你不可以看到我了</p>
    </div>
    <div id = "app-2">
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
    </div>
~~~
~~~
    var app = new Vue({
        el: "#app",
        data:{
            seen: true
        }
    })
    var app1 = new Vue({
        el: "#app1",
        data:{
            seen: false
        }
    })
    var app = new Vue({
        el : "#app-2",
        data:{
            todos: [
                { text: '明天要早起'},
                { text: '明天要做月计划'},
                { text: '等下要看一下数电'}
            ]
        }
    })
~~~
#### 得到的结果
![](https://github.com/LHB153/vuejs_learning/blob/main/img/3.PNG)


#### 处理用户输入
> 为了让用户和应用进行交互，可以使用v-on指令添加一个事件监听器
~~~
    <div id = "app">
        <p>{{message}}</p>
        <button v-on:click="reverseMessage">反转消息</button>
    </div>
~~~
~~~
    var app = new Vue({
    el: "#app",
    data:{
        message: 'hello world！！！'
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})
~~~
> Vue中还有v-model指令，能够实现输入和应用状态之间的双向绑定
~~~
    <div id = "app2">
        <p>{{message}}</p>
        <input v-model="message">
    </div>
~~~
~~~
    var app2 = new Vue({
        el: '#app2',
        data:{
            message:'你输入什么我就显示什么！！'
        }
    })
~~~
####显示的效果
![](https://github.com/LHB153/vuejs_learning/blob/main/img/Rec 0002.mp4)