var myview = new Vue({
    el: "#our-app",
    data: {
       x:0 ,
       y:0
    },
    methods:{
        movefunction : function (event) {
            
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        overfunc: function (event) {
            console.log("Aaa gayaa");
        },
        outfunc: function (event) {
            console.log(" Jaane valee ko gaanee dooo");
        }
        
    }
});