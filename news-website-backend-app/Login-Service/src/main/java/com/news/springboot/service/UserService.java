package com.news.springboot.service;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.ResponseEntity;

import com.news.springboot.model.UserModel;



public interface UserService {
	
	public List<UserModel> getAllEmployee();

    public UserModel createEmployee(UserModel detail) throws JsonProcessingException;
    
    public UserModel getDetailById(Long id);
	
	public UserModel updateDeatil(Long id,UserModel detail);
	
	public String existsByemail(String email);
	
	public String existsByemailAndpassword(String email, String password);
	
	public UserModel getDetailByemail(String email);
	
	public String deleteById(Long id);

	public String existsByemailandusername(String email, String username);

	public UserModel getDetailByusername(String username);
}
