var myview1 = new Vue({
    el: "#our-app1",
    data: {
       fname: "",
       lname : "",
       Hobby: "Watching TV"
    },
    methods:{
    },
    computed:{
        fullname: {
            get: function () {
                return this.fname+ " "+ this.lname;
            },
            set: function () {
                this.Hobby="Watching Web Series";
            }
            
        }
    }
});

