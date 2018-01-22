VLApp.directive('chartDirective', function($timeout) {
	return {
		restrict: "EA",
		templateUrl: "templates/chart.html",
		controller: "chartCtrl",
		scope: {
			data: "=data",
			width: "=width",
			height: "=height"
		},
		link: function(scope, element, attrs) {
			scope.barId = attrs.id
			var barCanvas, barChart;

			Chart.defaults.global.tooltips.enabled = false;

			$timeout(function() {
				barCanvas = document.getElementById("barCanvas-" + scope.barId);
				barChart = new Chart(barCanvas.getContext("2d"), scope.data);
			}, 10);

			$timeout(function() {
				barCanvas.style.width = scope.width + "px"
				barCanvas.style.height = scope.height + "px"
			}, 1000)

			scope.$on("UPDATE_CHART_" + scope.barId, function() {
				barChart.update();
			})
		}
	}
})
