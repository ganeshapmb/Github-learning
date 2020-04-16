var myview = new Vue({
    el: "#our-app",
    data: {
       character:"",
       name:"",
       email:""
    },
    methods:{
    	keyfunction: function (event) {
    		console.log(event);
    		this.character= event.key;
    	}
    }
});