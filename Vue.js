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