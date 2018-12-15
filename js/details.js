//发送ajax请求获取商品信息
$(function(){
	//在上一个页面选中商品后就把商品的goodsId保存到cookie中，所有商品都用同一个cookie名，后面的覆盖前面的
	
	//从cookie获取goodsId
	let $goodsId = getCookie("goodsId");
	$.ajax({
		type:"get",
		url:"php/getGoodsInfo.php",
		async:true,
		data:{
			"goodsId":$goodsId
		},
		success:function(data){
			//data就是找到的商品详情obj   console.log(data.goodsId);console.log(data.goodsName);console.log(data.goodsType);console.log(data.goodsPrice);console.log(data.goodsCount);console.log(data.goodsDesc);
			
			//动态获取商品详情小图，并放到#smallImgBox
			for(let i=1;i<8;i++){
				//创建li，放在ul里
				var $liDom = $("<li></li>");
				$("#ulImg").append($liDom);
				
				//创建li小箭头放到li里
				var $arrowDom = $("<i class='jiantou'></i>");
				$liDom.append($arrowDom);
				
				//创建img放到li里
				var $ImgBoxDom = $("<img src="+data.goodsType+"listImg"+i+".jpg alt='' />");
				$liDom.append($ImgBoxDom);

				//动态获取商品名称
				$(".Hvalue").html(data.goodsName);
				
				//动态获取商品价格
				if(i>0 && i<2){
					var $newPriceDom = $("<strong>￥"+data.goodsPrice+"</strong>");
					$(".Discount").append($newPriceDom);
					var $oldPriceDom = $("<span>￥"+data.goodsPrice+"</span>");
					$(".Discount").append($oldPriceDom);
				}
				
				//获取商品颜色图片
				if(i>0 && i<5){
					var $colImgDom = $("<a href=''><img src="+data.goodsType+"sImg"+i+".jpg alt='黑色' /><i></i></a>");
					$(".goods-color").append($colImgDom);
				}
				
			}
			
				//动态获取商品大图，并放到#sourceImg中  (只需要获取一个，不用放在循环里)
				var $ImgDom = $("<img src="+data.goodsType+"showImg1.jpg alt='' />");
				$("#sourceImg").append($ImgDom);
				let SRc = $("#sourceImg").children("img").attr("src");
				$("#showBox").css({
					background:"url("+SRc+") no-repeat",
					backgroundSize: "1200px 1200px"
				});
				
				//创建img放到添加到.xiangqing中(9-11张大图)
				for(let j=0;j<12;j++){
					var $PicDom = $("<img src="+data.goodsType+"big"+j+".jpg alt='' />");
					$(".xiangqing").append($PicDom);
				}

				//创建P放到添加到.pinpai中
				var $goodsPDom = $("<p></p>");
				$(".pinpai").append($goodsPDom);
				//获取商品logo，添加到P中
				var $LogoDom = $("<img src="+data.goodsType+"biglogo.jpg alt='' />");
				$goodsPDom.append($LogoDom);
				//创建P放到添加到.pinpai中
				var $GPDom = $("<p></p>");
				$(".pinpai").append($GPDom);
				//获取商品介绍，添加到P中
				$GPDom.html(data.beiyong1);
		},
		dataType:"json"     
	});
	
	//添加到购车
	$("#addshopingCar").click(function(){
		$.ajax({
			type:"get",
			url:"php/addShoppingCart.php",
			async:true,
			data:{
				"vipName":"wzhudongsheng",
				"goodsId":$goodsId,
				"goodsCount":$("#shop-number").val()
			},
			success:function(dd){
				alert(dd);
			}
		});
	});
});		

//$(function(){
//	//动态改变放大镜背景图部分
//	$(".smallImgBox ul li").hover(function(){
//		//获取到该商品的图片文件夹
//		let i = $("li").index($(this))+1;
//		let $src =data.goodsType+"showImg"+i+".jpg";
//		
//		
//		//赋给showbox
//		$("#sourceImg").children("img").attr({src:$src});
//		$("#showBox").css('background-image','url('+$src+')');
//		//.css('background-image','url("$src")');
//		
//		$("li:not(this)").css({border:"1px solid #ddd"});
//		$(this).css({border:"1px solid black"});
//	});
//});



//获取cookie封装函数
function getCookie(key){
	var str = unescape(document.cookie);
	
	//1、分割成数组
	var arr=str.split("; ");
	
	//2、循环数组，查找键，并得到对应的值
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	return null;
}



//放大镜效果部分
	$(function(){
		//鼠标进入大图
		$("#sourceImg").mousemove(function(event){
			$("#showBox").css({display:"block"});
			$("#mirrorBox").css({display:"block"});
			let eve = event || window.event;
			//放大倍数
			let n=2.5;
			//1、数据
			let left1 = eve.pageX-$("#sourceImg").offset().left-$("#mirrorBox").width()/2;
			let top1 = eve.pageY-$("#sourceImg").offset().top-$("#mirrorBox").height()/2;
			//2)、边界
			if(left1<=0){
				left1=0;
			}else if(left1>$("#sourceImg").width()-$("#mirrorBox").width()){
				left1 = $("#sourceImg").width()-$("#mirrorBox").width();
			}
			
			if(top1<=0){
				top1=0;
			}else if(top1>$("#sourceImg").height()-$("#mirrorBox").height()){
				top1 = $("#sourceImg").height()-$("#mirrorBox").height();
			}
			
			//3、外观
			$("#mirrorBox").css({left :left1+"px",top:top1+"px"});
			$("#showBox").css({backgroundPosition:(-1*n*left1)+"px "+(-1*n*top1)+"px"});
		});	
		//鼠标离开大图
		$("#sourceImg").mouseleave(function(){
			$("#showBox").css({display:"none"});
			$("#mirrorBox").css({display:"none"});
		});
	});

