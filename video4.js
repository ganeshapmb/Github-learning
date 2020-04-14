var myview = new Vue({
    el: "#our-app",
    data: {
       count:0 
    },
    methods:{
        increment: function (inc) {
            this.count += inc;
        },
        decrement: function (des) {
            this.count -= des;
        }
    }

    

});