angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
    //});

// Form data for the login modal
$scope.loginData = {};

// Create the login modal that we will use later
$ionicModal.fromTemplateUrl('templates/login.html', {
  scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    });

// Triggered in the login modal to close it
$scope.closeLogin = function() {
  $scope.modal.hide();
};

// Open the login modal
$scope.login = function() {
  $scope.modal.show();
};

// Perform the login action when the user submits the login form
$scope.doLogin = function() {
  console.log('Doing login', $scope.loginData);

  // Simulate a login delay. Remove this and replace with your login
  // code if using a login system
  $timeout(function() {
    $scope.closeLogin();
    }, 1000);
};
})

// .controller('PlaylistsCtrl', function($scope) {
//   // $scope.playlists = [
//   //   { title: 'Reggae', id: 1 },
//   //   { title: 'Chill', id: 2 },
//   //   { title: 'Dubstep', id: 3 },
//   //   { title: 'Indie', id: 4 },
//   //   { title: 'Rap', id: 5 },
//   //   { title: 'Cowbell', id: 6 }
//   // ];
//
// })

.controller('PlaylistsCtrl', function($scope, $stateParams,$http,$q) {

  console.log('PlaylistCtrl');

  $scope.init = function(){
    $scope.getImages()
    // .then(function(res){
    //   //success
    //   $scope.imageList = res;
    //   },function(status){
    //     //error
    //     $scope.pageError = status;0
    //     })
}

$scope.getImages = function(){
  // var defer = $q.defer();
  $http({
  method: 'GET',
  url: 'https://api.unsplash.com/users/ross_sokolovski/photos?client_id=4539a679b414e2f495204ee109b2e1ed828983e2ce521920a7a04030f4befd82'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
  console.log(response);
    $scope.imageList = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  console.log('getImages called');

//   $http.jsonp('api.unsplash.com/photos/?client_id=4539a679b414e2f495204ee109b2e1ed828983e2ce521920a7a04030f4befd82')
//   .success(function(res){
//       console.log(res);
//     defer.resolve(res)
//     })
// .error(function(status, err){
//     console.log(err);
//   defer.reject(status)
//   })
// return defer.promise;
// }
}

$scope.init();
});
