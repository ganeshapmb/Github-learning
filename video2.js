var myview = new Vue({
	el:"#our-app",
	data:{
		message:"Hi, Everyone",
		fname:"Banda",
		hobby:"Cooking"
	},
	methods:{
		gym : function (component, message) {
			return "Gym Time " + component + " " + message;
		},
		greetings: function (dayTime) {
			return dayTime;
		},
		access: function () {
			return this.fname + " "+ this.hobby;
		}
	}
});

