
//已知 BUG 点击图片按钮再次开定时器时 顺序错乱
//第一次点击 next 按钮动画没效果

$(function(){
	$(".mod1 .nav_list li").each(function(i){
		$(this).prop("index",i)
		$(this).hover(
			function(){
				$(this).addClass("active").siblings().removeClass("active");			
				$(".popup").show();
				$(".section").eq(i).show().siblings().hide();
			},
			function(){
				$(this).removeClass("active")
				$(".popup").mousemove(function(){
					$(".popup").show();
				})
				if($(this).index()==i){$(".nav_list li").eq(i).addClass("active")};
				$(".popup").hide();
				$(".popup").mouseleave(function(){
					$(".popup").hide();
					$(".nav_list li").eq(i).removeClass("active")
				})
			}
		)
	})
	
//------------------------------------------------------------------------------------------------------	
	$(window).scroll(function(){
		$(".navFloor").each(function(i){
			$(this).prop("index",i)
		})
		var scrollTop=$(window).scrollTop();	
		scrollTop>1200 ? $(".asideNav").show() : $(".asideNav").hide();
		$(".navFloor").each(function(){
			var t=$(this).offset().top-$(window).scrollTop();
			var index=$(this).prop("index");
			if(t<500){
				$(".asideNav li").removeClass("active").eq(index).addClass("active");
			}
		})
	})
	$(".asideNav li").click(function(){
		var index=$(this).index();
		var scrollTop=$(".navFloor").eq(index).offset().top;
		$("body,html").animate({"scrollTop":scrollTop},1000);
	})
//---------------------轮播图---------------------------------------------------------------------------	
	var timer;
	var i=0;

	//鼠标移入移出事件
	$(".tabBtn").hover(function(){
		$(this).css({"opacity":.7});
	},function(){
		$(this).css({"opacity":.3});
	})
	$(".banner").hover(function(){
			$(".prevBtn").show();
			$(".nextBtn").show();
			clearInterval(timer);
	},function(){
			$(".prevBtn").hide();
			$(".nextBtn").hide();
			runAuto();
	})
	//点击切换
	$(".tabBtn li").each(function(){
		var index=$(this).index();
		$(this).click(function(){
			$(".tab li").eq(index).animate({opacity:"show"},300).siblings().hide();
			$(".tabBtn li").eq(index).addClass("active").siblings().removeClass("active");
			
		})
	})
	//前后切换
	$(".nextBtn").click(function(){
		i++;
		if(i==$(".tab li").length){i=0}
		$(".tab li").eq(i).animate({opacity:"show"},300).siblings().hide();
		$(".tabBtn li").eq(i).addClass("active").siblings().removeClass("active");
	})
	$(".prevBtn").click(function(){
		i--;
		if(i==-$(".tab li").length){i=0};
		console.log(i)
		$(".tab li").eq(i).animate({opacity:"show"},300).siblings().hide();
		$(".tabBtn li").eq(i).addClass("active").siblings().removeClass("active");
	})
	function runAuto(){
		var j=1;
		timer=setInterval(function(){
			$(".tab li").eq(j).animate({opacity:"show"},300).siblings().hide();
			$(".tabBtn li").eq(j).addClass("active").siblings().removeClass("active");
			j++;
			if(j==$(".tab li").length){j=0}
		},1000)
	}	
	runAuto();
//---------------------选项卡---------------------------------------------------------------------------	
	$(".navFloor").each(function(){
		var $right=$(this).children(".content").children(".wrap").children(".right")
		var $nav=$(this).children(".mod_nav").children(".mod_nav_ul").children("li")
		$nav.hover(function(){
			$(this).each(function(){
				var index=$(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				$right.eq(index).show().siblings().hide();
			})
		})
	})
})









	


































