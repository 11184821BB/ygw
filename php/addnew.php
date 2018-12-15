<?php
	header("Content-type:text/html;charset=utf-8");
	//1、接收数据
	$username = $_GET['username'];
	$userpass = $_GET['userpass'];
	
	//2、处理（连接数据库，插入）
	//1)、搭桥（建立连接）
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败！");		
	}else{
		//2)、选择目的地（选择数据库）
		mysql_select_db("db201822",$conn);
		
		//3)、传输数据（执行SQL语句）
		$sqlstr="insert into peoples(name,pass) values('".$username."','".$userpass."')";   //注册用 
		
		$table = mysql_query($sqlstr);    //$table  注意 ：在此处是布尔值
		//4)拆桥
		mysql_close($conn);
		
		if($table){
			echo "1";		 //注册成功	
		}else{
			echo "0";		//注册失败
		}
	}
?>