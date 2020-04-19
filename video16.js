var data={
    name:"Banda",
    Hobby:"Watching Webseries" 
}
Vue.component("mb",{
    template:"<div><h2>This is component, Name:{{name}} and Hobby:{{Hobby}}, Method:{{method1()}}, Compued:{{fas}}</h2><p><button @click='seeme'>Clickit</button></p></div>",
    data: function () {
        return data;
    },
    methods:{
        method1: function () {
            return "This is component"
        },
        seeme: function () {
            this.name = "Mounika";
        }
    },

    computed:{
        fas: function () {
            return "This is why"
        }
    }
});


var myview1 = new Vue({
    el: "#our-app1",
    data: {
        
    },
    methods:{
    },
    computed:{
    }
});

var myview2 = new Vue({
    el: "#our-app2",
    data: {
    },
    methods:{
    }
    
});