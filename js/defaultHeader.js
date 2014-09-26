var app = angular.module("aboutMe");

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'nMmRCJ78m27HyG3d49ApOlHribPTqMKC12U7407I', 'X-Parse-REST-API-Key': '5JdpUecWuyGTnkdgXUfclbKKiRBffwGsivlxzUQk'}
      return config;
    }
  };

});