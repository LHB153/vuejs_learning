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