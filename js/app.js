var app = angular.module("aboutMe", []);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});