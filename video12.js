var myview = new Vue({
    el: "#our-app",
    data: {
      isActive:true,
      count:0
    },
    methods:{
    	countn: function () {
    		this.count++;
    	}
    }


    

});