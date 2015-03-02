'use strict';

/**
 * @ngdoc function
 * @name javaScriptEqualityApp.controller:IfCtrl
 * @description
 * # IfCtrl
 * Controller of the javaScriptEqualityApp
 */
angular.module('javaScriptEqualityApp')
  .controller('IfCtrl', function ($scope) {
    
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
  		$scope.a = getRandomOperand();
  	};

    $scope.remaining = function() {
      return values.length;
    };

  	$scope.result = function(answer) {
      // check result
  		var result;
      if ($scope.a.value) {
        result = true;
      } else {
        result = false;
      }

      // save last
  		$scope.last = {};
  		$scope.last.a = $scope.a;
  		$scope.last.result = result;
  		$scope.last.answer = answer;

      // update stats
  		if (result === answer) {
  			$scope.stats.right++;
  		} else {
  			$scope.stats.wrong++;
  		}

      // remove last
      values.splice(values.indexOf($scope.a), 1);

      // initialize next
  		$scope.newRound();
  	};

  	function getRandomOperand() {
  		var rand  = Math.floor(Math.random() * values.length);
  		return values[rand];
  	}

  	// initialize
  	$scope.newRound();

  });
