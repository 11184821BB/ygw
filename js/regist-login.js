window.onload = function(){    
	 //《一》验证用户名是否可用
	$("#usernameId").onblur = function(){
		//1、创建对象
		let request = new XMLHttpRequest();
		//2、设置请求参数
		request.open("get","php/zhuceconfirm.php?username="+this.value,true);
		//3、设置回调函数
		request.onreadystatechange = function(){
			if(request.readyState==4 && request.status==200){
				if(request.responseText=="0"){
					 $("#userNameSpan").innerHTML="亲，用户名输入有误，请重新输入。";
				}else{
					 $("#userNameSpan").innerHTML="亲，请输入密码！";
				}
			}
		}
		//4、发送请求
		request.send();
	}
	
	//《二》验证是否完成注册
	$("#submit").onclick = function(){
		//1、创建对象
		let request = new XMLHttpRequest();
		//2、设置请求参数
		//let sendStr = "username="+$("#username").value+"&userpass="+$("#userpass").value;
		let sendStr = "username="+$("#usernameId").value+"&userpass="+$("#userpassId").value;
		request.open("get","php/addnew.php?"+sendStr,true);
		//3、设置回调函数
		request.onreadystatechange = function(){
			if(request.readyState==4 && request.status==200){
				console.log(request.responseText);
				if(request.responseText=="1"){
					 $("#message").innerHTML="亲，恭喜您注册成功";
				}else{
					 $("#message").innerHTML="注册失败";
				}
			}
		}
		//4、发送请求
		request.send();
	}
	
	
	 //《三》登录验证
	$("#btnReg").onclick = function(){
		let xhr= new XMLHttpRequest();
		let sendStr = "username="+$("#usernameId").value+"&userpass="+$("#userpassId").value;
		xhr.open("get","php/dengluconconfirm.php?"+sendStr,true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="0"){
					$("#message").innerHTML="亲，用户名或者密码不正确";
				}else{
					//保存cookie
					//跳转到首页
					location.href="index.html";
				}
			}
		}
		xhr.send();
	}
	
	
}


function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}