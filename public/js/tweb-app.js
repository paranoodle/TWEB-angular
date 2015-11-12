var app = angular.module("twebApp", ['chart.js', 'btford.socket-io']);

app.factory("socket", function(socketFactory) {
    return socketFactory();
});

app.controller("TextController", ["$scope", function($scope) {
    $scope.text = "text";
    
    $scope.on_text = function(text) {
        $scope.text = text;
    }
}]);

app.controller("ChartController", function($scope) {
    $scope.labels = [":3", ":)"];
    $scope.data = [10,8];
});