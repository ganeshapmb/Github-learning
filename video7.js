var myview = new Vue({
    el: "#our-app",
    data: {
       counter:0
    },
    methods:{
        incrementby1: function () {
            this.counter++;
        },
        submitClick: function () {
            console.log("clicking");
        },
        parentclass: function () {
            console.log("Parent class");
        },
        btnClick: function () {
            console.log("Button click");
        }

    }
});