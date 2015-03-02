'use strict';

/**
 * @ngdoc function
 * @name javaScriptEqualityApp.controller:EqualsCtrl
 * @description
 * # EqualsCtrl
 * Controller of the javaScriptEqualityApp
 */
angular.module('javaScriptEqualityApp')
  .controller('EqualsCtrl', function ($scope) {
    
  	var values = [
  		{ 'label': 'true', 'value': true },
  		{ 'label': 'false', 'value': false },
  		{ 'label': '1', 'value': 1 },
  		{ 'label': '0', 'value': 0 },
  		{ 'label': '-1', 'value': -1 },
  		{ 'label': '"true"', 'value': 'true' },
  		{ 'label': '"false"', 'value': 'false' },
  		{ 'label': '"1"', 'value': '1' },
  		{ 'label': '"0"', 'value': '0' },
  		{ 'label': '"-1"', 'value': '-1' },
  		{ 'label': '""', 'value': '' },
  		{ 'label': 'null', 'value': null },
  		{ 'label': 'undefined', 'value': undefined },
  		{ 'label': 'Infinity', 'value': Infinity },
  		{ 'label': '-Infinity', 'value': -Infinity },
  		{ 'label': '[]', 'value': [] },
  		{ 'label': '{}', 'value': {} },
  		{ 'label': '[[]]', 'value': [[]] },
  		{ 'label': '[0]', 'value': [0] },
  		{ 'label': '[1]', 'value': [1] },
  		{ 'label': 'NaN', 'value': NaN },
  	];

    var todo = [];
    var lastTask;
    $scope.history = [];

  	$scope.stats = {
  		'right': 0,
  		'wrong': 0,
  		'rightPercent': function() {
  			var percent = this.right / this.total() * 100;
  			return this.total() !== 0 ? percent : 100;
  		},
  		'wrongPercent': function() {
  			var percent = this.wrong / this.total() * 100;
			return this.total() !== 0 ? percent : 0;
  		},
  		total: function() {
  			return this.right + this.wrong;
  		}
  	};

  	$scope.newRound = function() {
      var task = getRandomTask();
  		$scope.a = task.a;
  		$scope.b = task.b;
  	};

    $scope.remaining = function() {
      return todo.length;
    };

  	$scope.result = function(answer) {
      // check result
  		var result = ($scope.a.value == $scope.b.value); // jshint ignore:line


      // save last
  		$scope.last = {};
  		$scope.last.a = $scope.a;
  		$scope.last.b = $scope.b;
  		$scope.last.result = result;
  		$scope.last.answer = answer;

      $scope.history.push($scope.last);

      // update stats
  		if (result === answer) {
  			$scope.stats.right++;
  		} else {
  			$scope.stats.wrong++;
  		}

      // remove last
      todo.splice(lastTask, 1);

      // initialize next
  		$scope.newRound();

  	};

  	function getRandomTask() {
  		var rand  = Math.floor(Math.random() * todo.length);
      lastTask = rand;
  		return todo[rand];
  	}

    function initialize() {
      var seen = [];
      for (var i in values) {
        for (var j in values) {
          var left = values[i];
          var right = values[j];
          var key = left.label + ':'  + right.label;
          var keyrev = right.label + ':'  + left.label;
          if (seen.indexOf(key) < 0 && seen.indexOf(keyrev) < 0) {
            todo.push({
              'a': left,
              'b': right
            }); 
            seen.push(key);
          }
        }
      }
    }

    // initialize
    initialize();
    $scope.newRound();

  });
