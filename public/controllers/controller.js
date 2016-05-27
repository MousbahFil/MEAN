var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("Hello World from controller");
    var refresh = function () {
        $http.get("/contactlist").success(function (response) {
            console.log("Received data from server");
            $scope.contactlist = response;
            $scope.contact = "";
        })
    };
    refresh();
    $scope.addcontact = function () {
        console.log($scope.contact)
        $http.post("/contactlist", $scope.contact).success(function (response) {
            console.log(response);
            refresh();
        })
    }
    $scope.remove = function (id) {
        console.log(id);
        $http.delete("/contactlist/" + id).success(function (res) {
            refresh();
        })
    }

    $scope.edit = function (id) {
        console.log(id);
        $http.get("/contactlist/" + id).success(function (res) {
            $scope.contact = res;
        })
    }

    $scope.update = function () {
        console.log($scope.contact._id);
        $http.put("/contactlist/" + $scope.contact._id, $scope.contact).success(function (res) {
            refresh();
        })
    }

    $scope.deselect = function () {
        $scope.contact = "";
    }
}]);