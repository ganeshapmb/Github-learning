Vue.directive('custom-mbs',{
    bind: function (el,binding,vnode) {
        console.log(el);
        el.style.backgroundColor="blue";
        el.style.fontSize="20px";
        console.log(binding);
        console.log("Name:"+binding.value.name);
    },
    update:function (object1,object2) {
        console.log("watching");
        var data= JSON.parse(JSON.stringify(object2));
        console.log(data);
    },
    unbind: function () {
        // body...
    }
});
var myview1 = new Vue({
    el: "#our-app1",
    data: {
        message: "This is custom call"
    },
    methods:{
        updateValue:function () {
            console.log("update...");
            this.message="Value has been updated"
        }
    },
    computed:{
    }

});

