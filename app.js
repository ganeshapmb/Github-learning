var myapp = new Vue({
			el:"#my-app",
			data:{
				name:"Online Web Tutor",
				playlist:"VueJs"
			},
			methods:{
				run : function (message) {
					return "I am running "+message;
				}
			}
		});