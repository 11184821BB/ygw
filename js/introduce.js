//introduce.html调用2342432432432
$(function(){
	$("#head-swiper").load("nav.html");
	$("#footer").load("footer.html");
	
});

$(function(){

	$.ajax({
		type:"get",
		url:"php/getGoodsList.php",
		async:true,
		success:function(Data){
			let DATA = JSON.parse(Data);
			for(let i=0;i<DATA.length;i++){
				//DATA[i]["goodsId"];
				//DATA[i]["goodsName"]; 
				//DATA[i]["goodsType"];
				//DATA[i]["goodsPrice"];
				//DATA[i]["goodsCount"];
				//DATA[i]["goodsDesc"];
				//console.log(DATA[i]["goodsImg"]);
				let  $Price = Number(DATA[i]["goodsPrice"]);
				let  $Price1 = $Price+300;
				//动态创建
					//创建li放在ul中
				var $lisDom = $("<li gId=00"+(i+1)+"></li>");
				$("#goodsUl").append($lisDom);
				
					//创建div放在li中
				var $DivDom =$("<div class='box-img'></div>");
				$lisDom.append($DivDom);
					//创建a放在div中
				var $ADom =$("<a href='details.html' alt=''></a>")
				$DivDom.append($ADom);
					//创建img并放在a中
				var $ImgDom = $("<img src="+DATA[i]["goodsImg"]+" alt="+DATA[i]["goodsDesc"]+" />");
				$($ADom).append($ImgDom);
					//创建p放在a中
				var $PDom = $("<p>限时抢<strong>￥"+$Price+"</strong></p>");
				$($ADom).append($PDom);
					//创建第二个div放在li中
				var $DivDom1 =$("<div class='box-name'>");
				$lisDom.append($DivDom1);
					//创建a放在第二个div中
				var $ADom1 =$("<a href='details.html'>"+DATA[i]["goodsName"]+"</a>")
				$DivDom1.append($ADom1);
					//创建p和里面的内容 放在第二个div中
				var $PDom1 =$("<p><span>￥<strong>"+$Price+"</strong></span><span class='old-price'>￥"+$Price1+"</span></p>");
				$DivDom1.append($PDom1);
		
			}
			//点击商品存商品cookie   
			$("#goodsUl li").click(function(){
				let value = $(this).attr("gid");
				addCookie("goodsId",value,7);
			});
			
		},

	});
});



//保存cookie函数
function addCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();
}





	


	

