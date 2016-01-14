(function() {
	var app = angular.module('main',[]);

	app.controller("MainController", function ($scope) {
		$scope.movies = [];

		var $Form = $('#movieForm'), $Container = $('#movieInfo'), $Center=$('.center'), $Heading=$('#headingSearch');
		$Container.hide();
		this.search = function() {
			// $("#center").css("position", "relative");
  			// $("#center").remove('center');
			$(".center").removeClass();
			$Heading.hide();
			var sUrl, sMovie, oData;
			sMovie = $Form.find('#title').val();

			// sUrl = 'http://www.omdbapi.com/?t=' + sMovie + '&type=movie&tomatoes=true'
			sUrl = 'http://www.omdbapi.com/?s=' + sMovie + '&type=movie';

			$.ajax(sUrl, {
				complete: function(p_oXHR, p_sStatus){
					oData = $.parseJSON(p_oXHR.responseText);
					console.log(oData.Search.length);

					for ( var i = 0; i < oData.Search.length; i++ ) {
						
						$scope.movies.push(oData.Search[i]);

						// $Container.append('<div id="movieInfo">');
						// $Container.append('<div class="poster">Poster</div>');
						// $Container.find('.poster').html('<img src="' +oData.Search[i].Poster + '"/>');
						// // $Container.append('<img src="' + oData.Search[i].Poster + '"/>');
						// $Container.append('</div>');
						// $Container.append('</div>');


					}
					console.log($scope.movies)
					// console.log(movies)
					// $Container.find('.title').text(oData.Search[0].Title + " ("+oData.Year + ")");
					// $Container.find('.title').text(oData.Title + " ("+oData.Year + ")");
					$Container.find('.plot').text(oData.Plot);
					// $Container.find('.poster').html('<img src="' +oData.Search[1].Poster + '"/>');
					$Container.find('.rating').text("IMDB Rating " + oData.imdbRating);
					$Container.find('.runtime').text("Running time " + oData.Runtime);
					$Container.show();

				}
			});
							$scope.movies = [];


		};

	});

})();
