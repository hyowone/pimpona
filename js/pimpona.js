$(function(){//메누 마우스 오버시 하위메뉴 슬라이드 다운
	$(".nav ul li").mouseover(function(){
		$(this).find(".sub").stop().slideDown();
	});
	$(".nav ul li").mouseout(function(){//메뉴 마우스아웃시 하위메뉴 슬라이드 업
		$(this).find(".sub").stop().slideUp();	
	});
	
/*main*/
	$(".main .img li a img").each(function(tt){// 메인 이미지 슬라이드
		$(this).css("left",1200*tt);
	});
	setInterval(function(){
		$(".main .img li a img").each(function(){
			var nowL = parseInt($(this).css("left"));
			var moveL=nowL - 1200;
			$(this).animate({left:moveL},1000,function(){
				if(moveL <= -1200){
					$(this).css("left",2400);
				}
			});
		});
	},3500);
	
/*section 1*/
	$(".bestImg>li").mouseover(function(){//section1 이미지 마우스오버시 opacity:1
		$(this).css("opacity","1");	
	});
	$(".bestImg li").mouseout(function(){//section1 이미지 마우스아웃시 opacity:0.6
		$(this).css("opacity","0.6");	
	});
	
/*collection*/
	$(".collection .coll").mouseover(function(){//.coll 마우스오버시 스케일 값 주기
		$(this).css({transform:"scale(1.2)"});
	});
	$(".collection .coll").mouseout(function(){//.coll 마우스 아웃시 스케일 값 원래대로하기.
		$(this).css({transform:"scale(1)"});
	});

/*sale*/
	$(".sale a").mouseover(function(){// 마우스 오버시 이미지의 opacity가 0.6이되고 p태그가 나타난다.
		$(this).children().css("opacity","0.6");
		$(this).next("p").show();
	});
	$(".sale a").mouseout(function(){//마우스 아웃시 이미지의 opacity 는 1이 되고 p태그가 사라진다.
		$(this).children().css("opacity","1");
		$(this).next("p").hide();
	});
	
	
});