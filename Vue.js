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
var app2 = new Vue({
    el: '#app2',
    data:{
        message:'你输入什么我就显示什么！！'
    }
})