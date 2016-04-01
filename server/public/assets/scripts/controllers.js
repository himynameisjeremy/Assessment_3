myApp.controller("AddController", ["$scope", "$http", "heroService", "$location", function($scope, $http, heroService, $location){
  $scope.heroes = {};
  $scope.data = [];

  $scope.addHero = function(data){
    console.log("controller addHero:", data);
    var postObject = {};
    postObject.alias = data.alias;
    postObject.first_name = data.first_name;
    postObject.last_name = data.last_name;
    postObject.city = data.city;
    postObject.power_name = data.power_name;
    heroService.postHero(postObject);
    $location.url('/view');
  };
}]);

myApp.controller("ShowController", ["$scope", "heroService", function($scope, heroService){
  console.log("All is well in ShowController");

  $scope.deleteHero = function(heroID){
    console.log("Sending hero to Valhalla", heroID);
    var deletebyID = {"heroID" : heroID};
    heroService.deleteHero(deletebyID);
  };
  heroService.getHeroes();
  $scope.data = heroService.data;
}]);
