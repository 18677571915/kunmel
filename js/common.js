$(function(){
	var WinW = $(window).width();
		 if($('.slides02 .images').size()>1 && WinW>480){
          $('.slides02').slidesjs({
          width:1500,
          height:464,
		  play: {
	      effect: "slide",
	      interval: 3000,
		  auto: true,
		  swap: true,
	      restartDelay: 2500,
		  pauseOnHover:true	  		      	
	    }
      })
	   var w=$('.slides02 ul').width()/2;
	   $('.slides02 ul').css('margin-left',-w);
    } else if(WinW<481){
    	$('.slides02').slidesjs({
          width:480,
          height:270,
		  play: {
	      effect: "slide",
	      interval: 3000,
		  auto: true,
		  swap: true,
	      restartDelay: 2500,
		  pauseOnHover:true	  		      	
	    }
      })
	   var w=$('.slides02 ul').width()/2;
	   $('.slides02 ul').css('margin-left',-w);
    }
  //回到顶部
    $(".returnTop").click(
        function() {
            $('body').animate({
                scrollTop: 0
            }, 300);
        }
    );
   /*手机端导航*/
  $(".topMoblie .navIcon").click(function(){
  	$(".mobileNav").toggle();
  	$(this).toggleClass("on");
  })
  /*手机端二级导航*/
  $(".mobileNav>ul>li>a").click(function(){
  	$(this).siblings(".twoNavWrap").slideToggle();
  })

		// 咨询热线
	$(".consultation_tab").on("click",function(){
		$(this).fadeOut();
		$(".consultation_detail").fadeIn();
	})
	$(".close img").on("click",function(){
		$(".consultation_detail").fadeOut();
		$(".consultation_tab").fadeIn();
	})



	//公共分页的宽度
		var pagerWidth = $("#pager a").width()+10;//单个宽度
		var pagerLength = $("#pager a").length;//tab的个数
		var pagerWidth_together = pagerWidth * pagerLength //所有的宽度
		$("#pager").width(pagerWidth_together);
});
       /*客户轮播插件启动*/
	   function start(){
	       var ul = $('.clides ul.parterns').eq(0);
	       var lib=parseFloat(ul.children('li').css('margin-bottom'));
		   if($(window).width()<750){
		   var lis =Math.ceil(ul.children('li').size()/2);
		   var h=ul.children('li').children('a').children('img').width()*108/190;
		   lib=3;
		   }else{
			var lis =Math.ceil(ul.children('li').size()/6);  
			var h=ul.children('li').children('a').children('img').width()*109/191;
		   }
		   var hs=lis*(h+lib);
		   var w = $('.clides').width(); 
	     if($('.clides ul').size()>1){ 
          $('.clides').slidesjs({
          width:w,
          height:hs
        })
        }
	   $('.clides').css('height',hs);	 
	  var w=$('.slides ul').width()/2;
	  $('.slides ul').css('margin-left',-w);
	 }
	 
	  setTimeout(function(){
		  var ul = $('.clides ul.parterns').eq(0);
		   if($(window).width()<750){
		   var lis =Math.ceil(ul.children('li').size()/2);
		   }else{
			var lis =Math.ceil(ul.children('li').size()/6);  
		   }
		   var lib=parseFloat(ul.children('li').css('margin-bottom'));
		   var h=ul.children('li').children('a').children('img').width()*109/191;
		   var hs=lis*(h+lib+4);   
		   $('.clides').css('height',hs);
	   },2000);