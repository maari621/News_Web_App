package com.news.springboot.model;

import jakarta.persistence.*;

@Entity
public class UserModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
	private String userRole;
	private String username;
	private String mobileNumber;
	private String email;
	private String password;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUserRole() {
		return userRole;
	}
	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public UserModel(long id, String userRole, String username, String mobileNumber, String email, String password) {
		this.id = id;
		this.userRole = userRole;
		this.username = username;
		this.mobileNumber = mobileNumber;
		this.email = email;
		this.password = password;
	}
	public UserModel() {
	}
}
