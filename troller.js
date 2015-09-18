angular.module('infiniteApp', []);

angular.module('infiniteApp').controller('troller', ['$scope', function($scope){
	$scope.dateArray = [];
	dateArrayIndex = 0;
	
	var populateDateArray = function(indexSeed) {
		index = indexSeed;
		for (var i=index; i<(index+7); i++) {
			var todaysDate = new Date();
			futureDate = todaysDate.setDate(todaysDate.getDate() + i);
			futureDateObject = {
				date        : new Date(futureDate).toDateString(),
				showValue   : false,
				appointment : [],
			}
			$scope.dateArray.push(futureDateObject);
			dateArrayIndex++;
		}
	}

	$scope.loadMore = function() {
		populateDateArray(dateArrayIndex);
	};

	$scope.showForm = function(index) {

		$scope.dateArray[index].showValue = !$scope.dateArray[index].showValue;
	}

	$scope.submitAppointment = function(index) {
		$scope.dateArray[index].appointment.push({
			whatKey  : $scope.what,
			whenKey  : $scope.when,
			whereKey : $scope.where,
		});
		$scope.dateArray[index].showValue = !$scope.dateArray[index].showValue;
		console.log($scope.dateArray)
	}

}]);