$(document).ready(function(){
  	$(".info-links").hide();
    $(".infoBlock").hover(function(){
  			$(this).animate({'top': '-=42px'},'fast');
        	$(".info-links").slideDown('fast');
        }, function(){
 			$(this).animate({'top': '+=42px'},'fast');
        	$(".info-links").slideUp('fast');
  		});
});
