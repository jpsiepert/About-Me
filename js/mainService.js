var app = angular.module("aboutMe");

app.service = ("mainService", function($http, $q){

  this.postData = function(message){
      return $http({
        method: "POST",
        url: "https://api.parse.com/1/blog/",
        data: {text: message}
      })


    this.getData = function(){
    	return $http({
    		method: "GET",
    		url: "https://api.parse.com/1/blog/post"
    	})
    }
})

