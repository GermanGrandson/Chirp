var app = angular.module('chirpApp', []);

app.controller('mainController', function($scope){

  $scope.posts = [];
  $scope.newPosts = {create_by: '', text: '', create_at: ''};

  $scope.post = function(){
    $scope.newPost.created_at = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost = {create_by: '', text: '', create_at: ''};
  };


});
