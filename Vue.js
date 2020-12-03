var vm = new Vue({
    el : '#app',
    data: {
        message : 'hello world, I am aec'
    }
})
var Message = Vue.extend({
    props : ['content'],
    template : '<h1>{{content}}</h1>'
})
Vue.component('message',Message);
var vm1 = new Vue({
    el: '#app2',
})

var app2 = new Vue({
    el: "#app-2",
    data:{
        message:'页面加载于' + new Date().toLocaleString()
    }
})