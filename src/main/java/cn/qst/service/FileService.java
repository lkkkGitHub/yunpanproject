package cn.qst.service;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import cn.qst.pojo.TbFile;
import cn.qst.pojo.TbUser;

public interface FileService {

	List<TbFile> fundFileByType(String type , String uid,String groupBy);

	List<TbFile> funFileByParentId(String parentId , String uid,String groupBy);

	List<TbFile> fundFileParentsById(String parentId);
	
    TbFile findFileByFid(String fid);

	TbFile createFile(String fname,String uid,String parentid);
	
	String selectNameByFid(String fid);
	
	TbFile selectById(String id);
	
	TbFile saveFile(TbFile file);
	
	boolean rename(String fname,String fid,String uid);

	void deleteFile(String fid);
	

	List<TbFile> treeFiles(String uid);
	
	List<String> fundChildren(String pid);
	
	
	void copyFile(String fid,String pid);
	
	boolean moveFile(String fid,String pid);



	int downFile(String fileurl, String fileName,  String savePath) throws Exception;

	Integer downDir(String fid , String savePath);

	
	List<TbFile> searchByName(String searchName,String uid,String groupBy);
	
	String capacity(String uid);


	Integer downFiles(String[] fids, String savePath);

	TbFile saveDir(List<MultipartFile> files, TbUser user, String parentId) throws Exception;
	
	List<TbFile> getTbFiles(String uid);

}
