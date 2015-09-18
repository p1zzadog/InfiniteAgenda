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

	$scope.submitAppointment = function(index, what, when, who) {
		if ((what != undefined || when != undefined || who != undefined) && (what != '' || when != '' || who != '')) {
			$scope.dateArray[index].appointment.push({
				whatKey  : what,
				whenKey  : when,
				whoKey   : who,
				editKey  : false,
			});
		}
		$scope.dateArray[index].showValue = !$scope.dateArray[index].showValue;
		// console.log($scope.dateArray)
	}

	$scope.editAppointmentClick = function(outerIndex, innerIndex) {
		$scope.dateArray[outerIndex].appointment[innerIndex].editKey = true;
	}

	$scope.submitAppointmentEdit = function(outerIndex, innerIndex) {
		$scope.dateArray[outerIndex].appointment[innerIndex].editKey = false;
		console.log($scope.dateArray[outerIndex].appointment[innerIndex])
	}

}]);