(function() {
	var app = angular.module('main',[]);

	app.controller("MainController", function() {

		var $Form = $('#movieForm'), $Container = $('#movieInfo'), $Center=$('.center'), $Heading=$('#headingSearch');
		$Container.hide();

		this.search = function() {
			// $("#center").css("position", "relative");
  			// $("#center").remove('center');
			$(".center").removeClass();
			$Heading.hide();



			var sUrl, sMovie, oData;
			sMovie = $Form.find('#title').val();

			sUrl = 'http://www.omdbapi.com/?t=' + sMovie + '&type=movie&tomatoes=true'
			// sUrl = 'http://www.omdbapi.com/?s=' + sMovie 

			$.ajax(sUrl, {
				complete: function(p_oXHR, p_sStatus){
					oData = $.parseJSON(p_oXHR.responseText);
					// console.log(oData.Search[0]);
					// $Container.find('.title').text(oData.Search[0].Title + " ("+oData.Year + ")");

					$Container.find('.title').text(oData.Title + " ("+oData.Year + ")");
					$Container.find('.plot').text(oData.Plot);
					$Container.find('.poster').html('<img src="' + oData.Poster + '"/>');
					$Container.find('.rating').text("IMDB Rating " + oData.imdbRating);
					$Container.find('.runtime').text("Running time " + oData.Runtime);

					$Container.show();
				}
			}); 
		};
	});
})();
