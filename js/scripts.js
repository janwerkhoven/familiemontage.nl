
Cufon.replace('h1');
Cufon.replace('h2');

$(document).ready(function(){
	
	$(".infos").hide();
	$("#slogan").show();
	
	var fadeout = 0.3;
	var fadein = 1;
	var tfadeout = 500;
	var tfadein = 400;
	var clickedOnStep = false;
	var wSlogan = "340px";
	var wInfo1 = "590px";
	var wInfo2 = "570px";
	var wInfo3 = "400px";
	var wInfo4 = "350px";
	
	$("#info").css("width",wSlogan);
	
	// HOVER ------------------------------------------------------------
	
	$("#step1").hover(
		function () {
				$(".infos").hide();
				$("#info1").show();
				$("#info").css("width",wInfo1);
				$(".steps").not(this).stop();
				$(".steps").not(this).fadeTo(tfadeout,fadeout);
		}, function () {
				$(".infos").hide();
				$("#slogan").show();
				$("#info").css("width",wSlogan);
				$(".steps").not(this).stop();  
				$(".steps").not(this).fadeTo(tfadein,fadein);
		}
	);
	$("#step2").hover(
		function () {
				$(".infos").hide();
				$("#info2").show();
				$("#info").css("width",wInfo2);
				$(".steps").not(this).stop();  
				$(".steps").not(this).fadeTo(tfadeout,fadeout);
		}, function () {
				$(".infos").hide();
				$("#slogan").show();
				$("#info").css("width",wSlogan);
				$(".steps").not(this).stop();  
				$(".steps").not(this).fadeTo(tfadein,fadein);
		}
	);
	$("#step3").hover(
		function () {
				$(".infos").hide();
				$("#info3").show();
				$("#info").css("width",wInfo3);
				$(".steps").not(this).stop();  
				$(".steps").not(this).fadeTo(tfadeout,fadeout);
		}, function () {
				$(".infos").hide();
				$("#slogan").show();
				$("#info").css("width",wSlogan);
				$(".steps").not(this).stop();  
				$(".steps").not(this).fadeTo(tfadein,fadein);
		}
	);
	$("#step4").hover(
		function () {
				$(".infos").hide();
				$("#info4").show();
				$("#info").css("width",wInfo4);
				$(".steps").not(this).stop();  
				$(".steps").not(this).fadeTo(tfadeout,fadeout);
		}, function () {
				$(".infos").hide();
				$("#slogan").show();
				$("#info").css("width",wSlogan);
				$(".steps").not(this).stop();
				$(".steps").not(this).fadeTo(tfadein,fadein);
		}
	);
	
	$("#polaroids img").fadeOut(0);
	$("#polaroid-1").delay(1000).fadeIn(900);
	$("#polaroid-2").delay(12000).fadeIn(900);
	$("#polaroid-3").delay(24000).fadeIn(900);
	
});