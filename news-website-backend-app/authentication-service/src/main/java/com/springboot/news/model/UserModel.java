package com.springboot.news.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity(name ="credentials")
public class UserModel {
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
    private long id;

	private String username;

	private String password;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public UserModel( String username, String password) {
		this.username = username;
		this.password = password;
	}

	public UserModel() {
	}

	@Override
	public String toString() {
		return "UserModel{" +
				"id=" + id +
				", username='" + username + '\'' +
				", password='" + password + '\'' +
				'}';
	}
}
