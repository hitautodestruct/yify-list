var yify = angular.module('yify',[]);

yify.controller('MainCtrl',['$scope','$http', function( $scope, $http ){
  
  $http.get('http://yts.re/api/list.json')
    .success(function(data){
      
        console.log(data);
        
      $scope.data = data;
      $scope.MovieList = data.MovieList;
      
    });
  
}]);