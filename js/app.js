(function() {
	var app = angular.module('main',[]);

	app.controller("MainController", function ($scope) {
		$scope.movies = [];

		var $Form = $('#movieForm'), $Container = $('#movieInfo'), $Center=$('.center'), $Heading=$('#headingSearch');
		this.search = function() {

			$(".center").removeClass();
			$Heading.hide();
			var sUrl, sMovie, oData;
			sMovie = $Form.find('#title').val();

			sUrl = 'http://www.omdbapi.com/?s=' + sMovie + '&type=movie';

			$.ajax(sUrl, {
				complete: function(p_oXHR, p_sStatus){
					oData = $.parseJSON(p_oXHR.responseText);

					for ( var i = 0; i < oData.Search.length; i++ ) {
						$scope.movies.push(oData.Search[i]);
						$scope.$apply();
					}

				}
			});
			$scope.movies = [];

			console.log($scope.movies);

		};

	});

})();
