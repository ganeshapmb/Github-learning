var myview1 = new Vue({
    el: "#our-app1",
    data: {
        Name: "Banda"
    },
    methods:{
        secondApp: function () {
            return "This is why"
        }
    },
    computed:{
        fullname: function () {
            return this.Name;
        }
    }
});

var myview2 = new Vue({
    el: "#our-app2",
    data: {
        Food:"Quinoa",
        name:myview1.Name
    },
    methods:{
        thirdApp: function () {
            return myview1.secondApp()
        },
        accessComputed2: function () {
        return myview1.fullname;
    }
    }   
});