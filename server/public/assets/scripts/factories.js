myApp.factory("heroService", ["$http", function($http){
  var data = {};

  var postHero = function(data){
    $http.post("/hero", data).then(function(response){
      console.log("Hero has been listed", response);
      getHeroes();
    });
  };

  var getHeroes = function(){
    $http.get("/hero").then(function(response){
      console.log("Getting hero", response.data);
      data.response = response.data;
    });
  };

  var deleteHero = function(heroID){
    console.log("Deleting inside factory", heroID.heroID);
    $http.delete("/hero" + heroID.heroID).then(function(response){
      getHeroes();
    });
  };

  return{
    deleteHero:deleteHero,
    postHero: postHero,
    getHeroes: getHeroes,
    data: data
  };
}]);
