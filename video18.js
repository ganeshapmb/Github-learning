var myview1 = new Vue({
    el: "#our-app1",
    data: {
    },
    methods:{
        btnSubmit:function () {
            console.log(this.$refs);
            console.log("Name:"+this.$refs.txtname.value);
            console.log("Email:"+this.$refs.txtemail.value);
            console.log("Paragraph:"+this.$refs.para.innerHTML);
        }
    },
    computed:{
    }

});

