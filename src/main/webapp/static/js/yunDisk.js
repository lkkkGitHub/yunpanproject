function fundFileByParentId(parentId,isdir){
	if(isdir){
		$.ajax({
		    url : "/file/fundFileByParentId", 
			type: "post", 
			async:true,
			contentType:"application/x-www-form-urlencoded",
			data: {"parentId":parentId},
	        success: function(data){//如果调用servlet成功，响应200。请求成功后回调函数。这个方法有两个参数：服务器返回数据，返回状态(可以缺省)。
	        	document.getElementById('allChecks').checked = false;
	        	$(".filesListRoute").find("a").remove();
	        	$(".filesListRoute").find("span").remove();
	        	//路径链
	        	var link="";
	        	$.each(data.parent,function(i,file){
	        		if(i==(data.parent.length-1)){
	        			link+="<span>"+file.fname+"</span>";
	        		}else{
	        			link+="<a onclick=\"fundFileByParentId("+file.fid+","+file.isdir+")\" href=\"javascript:void(0);\"><span>"+file.fname+"</span></a>"
	        			link+="<span>></span>";
	        		}
	        	});
	        	$(".filesListRoute").append(link);
	        	$("#filesTab").find("tr").remove();
	        	$(".filesListCount").find("span").remove();
	        	$(".filesListCount").append("<span>已加载"+data.files.length+"个</span>");
	        	$.each(data.files,function(i,file){
	        		var str="<tr data-file-id=\"1\" class=\"active\">";
	        		str+="<td><input type=\"checkbox\" class=\"checkstyle\" value="+file.fid+" onclick=\"allcheck(),display()\"/>";
	        		if(file.isdir){
	        			str+="<i class=\"fileIcon\"></i>";
	        		}else if(file.suffix == "jpg"){
	        			str+="<i class=\"imgIcon\"></i>";
	        		}else if(file.suffix == "txt"){
	        			str+="<i class=\"txtIcon\"></i>";
	        		}else if(file.suffix == "mp4"){
	        			str+="<i class=\"videoIcon\"></i>";
	        		}else if(file.suffix == "seed"){
	        			str+="<i class=\"seedIcon\"></i>";
	        		}else if(file.suffix == "mp3"){
	        			str+="<i class=\"musicIcon\"></i>";
	        		}else{
	        			str+="<i class=\"otherIcon\"></i>";
	        		}
	        		str+="<a onclick=\"fundFileByParentId("+file.fid+","+file.isdir+")\" href=\"javascript:void(0);\"><span class=\"fileTitle\">"+file.fname+"</span></a>";
	        		str+="<div class=\"filesFns right\">";
	        		str+="<a class=\"icon icon-share\" href=\"javascript:;\">分享</a>";
	        		str+="<a class=\"icon icon-download\" href=\"javascript:;\">下载</a>";
	        		str+="<a class=\"icon icon-more\" href=\"javascript:;\">更多</a>";
	        		str+="</div></td><td><span>"
	        		if(file.fsize){
	        			str+=file.fsize+"</span></td>";
	        		}else{
	        			str+="-</span></td>";
	        		}
	        		str+="<td><span class=\"fileChangeDate\">"+dateFmt("yyyy-MM-dd",new Date(file.updatetime))+"</span></td></tr>";
	        		$("#filesTab").append(str);
	        	});
	        }
		});
	}else{
		
	}
}