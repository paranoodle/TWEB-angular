var app = angular.module("twebApp", ['chart.js', 'btford.socket-io']);

app.factory("socket", function(socketFactory) {
    socket = socketFactory();
    socket.forward('hi');
    return socket;
});

app.controller("TextController", ["$scope", function($scope) {
    $scope.text = "Check!";
    
    $scope.on_text = function(text) {
        $scope.text = text;
    }
}]);

app.controller("ChartController", function($scope) {
    $scope.labels = [":3", ":)"];
    $scope.data = [10,8];
});

app.controller("SocketController", function($scope, socket) {
    console.log("entering socket controller");
    
    socket.on('hi', function(data) {
        console.log(data);
        $scope.stext = "Check!";
    });
});