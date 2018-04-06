$(function(){
	function tab(obj){
		obj.addClass("active").siblings().removeClass("active");
	}
	$(".imgList img").each(function(){
		var index=$(this).index();
		$(this).mousemove(function(){
			$(".img img").eq(index).show().siblings().hide();
			$(".prev img").eq(index).show().siblings().hide();
			tab($(this));
		})
	})
	
//--------------------------------------------------------------------------
	//bug 鼠标移入与点击冲突 index i 
	var i=0;
	var length=$(".imgList img").length;
	$(".nextBtn").click(function(){
		i++;
		if(i==length){i=0};
		tab($(".imgList img").eq(i));
	})
	$(".prevBtn").click(function(){
		i--;
		if(i==-length){i=0};
		tab($(".imgList img").eq(i));
	})
	
	
	$(".img").mousemove(function(ev){
		var l=ev.pageX-$(this).offset().left-$(".img span").width()/2;
		var t=ev.pageY-$(this).offset().top-$(".img span").height()/2;
		if(l<0){l=0};
		if(t<0){t=0};
		var maxW=$(this).width()-$(".img span").width();
		var maxH=$(this).height()-$(".img span").height();
		if(l>maxW){l=maxW};
		if(t>maxH){t=maxH};
		$(".img span").show().css({"left":l,"top":t});
		$(".prev").show();
		$(".prev img").css({"left":-l*2,"top":-t*2});
	})
	$(".img").mouseleave(function(ev){
		$(".img span").hide();
		$(".prev").hide();
	})
//-------------------------------------------------------------------------------------	

	function click(obj){
		obj.each(function(){
			$(this).click(function(){
				var index=$(this).index();
				obj.eq(index).addClass("active").siblings().removeClass("active");
				obj.eq(index).css({"background-image":"url(images/duigou_03.jpg)"}).siblings().css({"background-image":"none"});
			})
		})
	}
	$(".select p").each(function(){
		click($(".select p"));
	})
	$(".select .p").each(function(){
		click($(".select .p"));
	})
	
	var m=1;
	$(".add").click(function(){
		m++;
		$(".n").val(m);
	})
	$(".sub").click(function(){
		m--;
		if(m==0){m=1}
		$(".n").val(m);

	})
})
