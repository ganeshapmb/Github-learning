var myview = new Vue({
    el: "#our-app",
    data: {
      fname:"",
      lname:"",
      celsius:0
    },
    methods:{
      watchmee: function () {
        console.log("This is why");
        return ("This is why");

      }
    },
    computed:{
      getFullName: function () {
        return this.fname + " " + this.lname;
      },
      ConvertToFahrenheit: function () {
        return parseFloat(this.celsius*1.8)+ parseFloat(32)
      }
    }

});