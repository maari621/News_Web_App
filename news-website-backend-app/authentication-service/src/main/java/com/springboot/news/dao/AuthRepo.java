package com.springboot.news.dao;

import com.springboot.news.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;





@Repository
public interface AuthRepo extends JpaRepository<UserModel, Long>{

	UserModel findByUsername(String username);

}
