var myview = new Vue({
    el: "#our-app",
    data: {
       
    },
    methods:{
        keypressfunc: function (event) {
            console.log(event.keyCode)
        },
        keydownfunc: function (event) {
            console.log("Key...")
        },
        keyupfunc: function (event) {
            console.log(event)
        }
    }
});