var speed= 1000;
var wait=500;
var page=1;
var position = 0;
var pageNumber = 12;

$("document").ready(function() { 

	$('#page').css("background-image", "none"); 
	function goIn(){
		$('.title').animate({'margin-left' : '-40px'}, speed)
		$('.description').animate({'margin-left' : '0px'}, speed)
		$('.imagery').animate({'margin-right' : '0px'}, speed);
	}
	
	
	function clearVideos(){
		var	prevImg = "<img src='video/p"+(page-1)+"/p"+(page-1)+".png' width='500'>";
		var	nextImg = "<img src='video/p"+(page+1)+"/p"+(page+1)+".png' width='500'>";
	//alert(prevImg);
		
		$( pageStart +(page-1) + ' .imagery .video').html(prevImg);
		$( pageStart +(page+1) + ' .imagery .video').html(nextImg);	
	}
	
	$("#allPages").swipe( {
 
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
 if(page<31){  
 position -=980;
		page+=1;
		swapPageUp();
		animatePages()			   		
		fwdAnim();
  }
  },
 swipeRight:function(event, direction, distance, duration, fingerCount) {
if(page>1){
   	position +=980;
		page-=1;
		swapPageDown();
		animatePages()	
		bckAnim();
		}
  },
  threshold:1
});
$("#next").click(function () {
if(page<30){
		position -=980;
		page+=1;
		swapPageUp();
		animatePages()			   		
		fwdAnim();
}
	});
$("#previous").click(function () {
if(page>1){
		position +=980;
		page-=1;
		swapPageDown();
		animatePages()	
		bckAnim();
}
	});
			
	function swapPageUp() {
		$('#allPages').animate({'margin-left' : position}, speed)	
	}
	function swapPageDown() {	
		$('#allPages').animate({'margin-left' : position}, speed)
	}				
	
		function pageNumber(){
			if(page<10){
		return pageStart = '#allPages #p0';
		} else{
		return pageStart = '#allPages #p';
		}
	}			
	function fwdAnim(){
	pageNumber();
	$('#pageNumber').html(page).delay(0);
		//alert ( pageStart + page+' .title');
		$( pageStart + page+' .title').css({'margin-left' : '800px'})
		$( pageStart + page+' .title').animate({'margin-left' : '0px'}, speed)
		$( pageStart + page+' .description').css({'margin-left' : '500px'}, speed)
		$( pageStart + page+' .description').animate({'margin-left' : '0px'}, speed*1.1).delay(3000);
		$( pageStart + page+' .imagery').css({'margin-right' : '-1800px'});
		$( pageStart + page+' .imagery').animate({'margin-right' : '0px'}, speed*1.2);
		
	}
	function bckAnim(){
	pageNumber();
	$('#pageNumber').html(page).delay(0);
		$( pageStart +page+' .title').css({'margin-left' : '-800px'})
		$( pageStart +page+' .title').animate({'margin-left' : '0px'}, speed)
		$( pageStart +page+' .description').css({'margin-left' : '-500px'}, speed)
		$( pageStart +page+' .description').animate({'margin-left' : '0px'}, speed*1.1)
		$( pageStart +page+' .imagery').css({'margin-right' : '-2000px'});
		$( pageStart +page+' .imagery').animate({'margin-right' : '0px'}, speed*1.2);
	}

			function getVideo(width, height, property){
				
			return		"<object width='"+width+"' height='"+height+"'>" +
						"<param name='movie' value='https://www.youtube.com/v/"+property+"?autoplay=1&controls=0&rel=0&showinfo=0&autohide=1&color=white&iv_load_policy=3&version=3&rel=0'></param>" +
						"<param name='allowFullScreen' value='true'></param>" +
						"<param name='allowScriptAccess' value='always'></param>" +
						"<embed src='https://www.youtube.com/v/"+property+"?autoplay=1&controls=0&rel=0&showinfo=0&autohide=1&color=white&iv_load_policy=3&version=3&rel=0' type='application/x-shockwave-flash' allowfullscreen='true' allowScriptAccess='always' width='"+width+"' height='"+height+"'></embed>" +
						"</object>";
	}			
			
	function animatePages(){
	
		//PAGE SPECIFIC ANIMATION PROPERTIES IN HERE
			
			pageNumber();

			
		if(page==2){
			$('#page').css("background-image", "url(img/bgLogo.jpg)").delay(1000); 
			$( pageStart +page+' .listings').fadeOut(0).delay(1000).fadeIn(400);
			//$( pageStart +page+' .bt-heading').fadeOut(0).delay(2000).fadeIn(400);

		}
		if(page==3){
			$( pageStart +page+' .category').fadeOut(0).delay(1000).fadeIn(1200);

		}
		if(page==4){
			$( pageStart +page+' .bt-text').fadeOut(0).delay(1000).fadeIn(1200);

		}
		
		if(page==6){
			$( pageStart +page+' .p6img2').fadeOut(0).delay(1500).fadeIn(1200);
			$( pageStart +page+' .p6img3').fadeOut(0).delay(2000).fadeIn(1200);

		}
			if(page==7){
			$( pageStart +page+' .p7img2').fadeOut(0).delay(1500).fadeIn(1200);
			$( pageStart +page+' .p7img3').fadeOut(0).delay(2000).fadeIn(1200);

		}
			if(page==8){
			$( pageStart +page+' .p8img2').fadeOut(0).delay(1500).fadeIn(1200);
			$( pageStart +page+' .p8img3').fadeOut(0).delay(2000).fadeIn(1200);

		}
		
		if(page==10){
			$( pageStart +page+' .p10img2').fadeOut(0).delay(1000).fadeIn(1200);
			$( pageStart +page+' .p10img3').fadeOut(0).delay(1500).fadeIn(1200);
			$( pageStart +page+' .p10img4').fadeOut(0).delay(2000).fadeIn(1200);

		}
		if(page==11){
			$( pageStart +page+' .p11img2').fadeOut(0).delay(1000).fadeIn(1200);
			$( pageStart +page+' .p11img3').fadeOut(0).delay(1500).fadeIn(1200);
			$( pageStart +page+' .p11img4').fadeOut(0).delay(2000).fadeIn(1200);
			$( pageStart +page+' .p11img5').fadeOut(0).delay(2500).fadeIn(1200);

		}
		if(page==12){
			$( pageStart +page+' .p12img2').fadeOut(0).delay(1000).fadeIn(1200);
			$( pageStart +page+' .p12img3').fadeOut(0).delay(1500).fadeIn(1200);
			$( pageStart +page+' .p12img4').fadeOut(0).delay(2000).fadeIn(1200);
			$( pageStart +page+' .p12img5').fadeOut(0).delay(2500).fadeIn(1200);
			$( pageStart +page+' .p12img6').fadeOut(0).delay(3000).fadeIn(1200);

		}
		if(page==14){
			clearVideos()
			$( pageStart +page + ' .imagery .video').html(getVideo(500, 378, "VxQ_WHOzYxg"));

		}
		if(page==15){
			clearVideos()
			
			$( pageStart +page + ' .imagery .video').html(getVideo(500, 378, "wwKQ40DzjOo"));

 			$( pageStart +page+' .p15img2').fadeOut(0).delay(1000).fadeIn(1200);
			$( pageStart +page+' .p15img3').fadeOut(0).delay(1500).fadeIn(1200);
			$( pageStart +page+' .p15img4').fadeOut(0).delay(2000).fadeIn(1200);

		}
		if(page==16){
			clearVideos()
			$( pageStart +page + ' .imagery .video').html(getVideo(500, 378, "K-3eCbXdRqo"));
			movHeight = 345;
		}
		if(page==17){
			clearVideos()
			$( pageStart +page + ' .imagery .video').html(getVideo(500, 378, "RBPlDXyBwyM"));
			movHeight = 303;

		}
			if(page==18){
			clearVideos()
		}
		if(page==19){
			clearVideos()
			$( pageStart +page+' .p19img2').fadeOut(0).delay(1000).fadeIn(1200);
			$( pageStart +page+' .p19img3').fadeOut(0).delay(1500).fadeIn(1200);

		}
		if(page==20){
			clearVideos()
			$( pageStart +page + ' .imagery .video').html(getVideo(500, 378, "l_1XuPD8A1I"));
			movHeight = 351;
	
		}
		if(page==21){
			clearVideos()
			$( pageStart +page+' .p21img2').fadeOut(0).delay(1000).fadeIn(1200);

		}
		if(page==22){
			$( pageStart +page+' .p22img2').fadeOut(0).delay(1000).fadeIn(1200);

		}
		if(page==24){
			$( pageStart +page+' .p24img2').fadeOut(0).delay(1000).fadeIn(1200);
			$( pageStart +page+' .p24img3').fadeOut(0).delay(1500).fadeIn(1200);

		}
		if(page==25){
			$( pageStart +page+' .p25img2').fadeOut(0).delay(1000).fadeIn(1200);

		}
		if(page==26){
			$( pageStart +page+' .p26img2').fadeOut(0).delay(1000).fadeIn(1200);

		}
		if(page==27){
			clearVideos()
			$( pageStart +page + ' .imagery .video').html(getVideo(500, 378, "86Deyb_Q7g4"));
			movHeight = 353;
		}
		if(page==28){
			clearVideos()
			$( pageStart +page+' .p28img2').fadeOut(0).delay(1000).fadeIn(1200);
			$( pageStart +page+' .p28img3').fadeOut(0).delay(1500).fadeIn(1200);
			$( pageStart +page+' .p28img4').fadeOut(0).delay(2000).fadeIn(1200);

		}

	}	
});	

