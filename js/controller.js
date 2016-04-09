var app = angular.module('uneApp', []);

app.controller("uneFonctionCtrl", function ($scope, $rootScope,$timeout, WebSocketService) {
	
//Mise en place du Socket
	$rootScope.ws = new SocketManager.SocketManager($scope,$rootScope);
	
	$scope.foo = [
	              {username: "rbeck", content:"bienvenue"},
	              {username: "sthomas", content:"WTF"}];
	
	$scope.fireWStest = function(){
//		$rootScope.ws.send("test");
		var unObjetJson = {
				name:"kiki",
				firstname:"zelad"
		}
		WebSocketService.sendObject("login",unObjetJson);
	};

});

app.factory("Post", function(){
	var factory = {
		posts : false,
		getPosts : function(){
			return factory.posts;
		},
		getPost : function(id){
			var post = {};
			angular.forEach(factory.posts,function(){});
			return post;
		}
	};
	return factory;
})
/**
 * Apparition d'�l�ments suite � une "event"
 */
//MAJ des listes de cat�gorie
//	$scope.majCatego = function (list) {
//		$timeout(function () {
//			$scope.categories = list;
//		}, 100);
//	}
var SocketManager = {
	ws:{},
	
	SocketManager: function (scope,rootScope){
        this.ws = new WebSocket("ws://localhost:9999/");
//        this.ws = new WebSocket("ws://localhost:80/");
//        this.ws = new WebSocket("ws://172.28.50.187/");//ne fonctionne pas chez Ali le: 28/1/2016
        
        this.ws.onopen = function(){
        	console.log("Socket has been opened!");
        };
        
    	this.ws.onmessage = function(message) {
//console.log(message);
    	    var messageObj = JSON.parse(message.data);
    	    
  console.log("Received data from websocket: ", messageObj);
    	    rxTools.rxRouting(scope,rootScope,messageObj);
    	};
        
        return this.ws;
    }
	
};
//TODO @ICI: vid�o n�7 � 0:02:00 pour commencer � tester "$http" et "$q"