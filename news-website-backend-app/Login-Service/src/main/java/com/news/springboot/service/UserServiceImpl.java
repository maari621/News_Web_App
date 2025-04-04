package com.news.springboot.service;

import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.news.springboot.Exception.UserNotFoundException;
import com.news.springboot.model.AuthRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.kafka.core.KafkaTemplate;

import com.news.springboot.dao.UserRepo;
import com.news.springboot.model.UserModel;


@Service
public class UserServiceImpl implements UserService {

    @Value("${kafka.topic.name}")
    private static String TOPIC;

    @Autowired
    public UserRepo userrepo;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    ObjectMapper objectMapper = new ObjectMapper();

    public UserServiceImpl(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    //to print all users
    @Override
    public List<UserModel> getAllEmployee() {
        return userrepo.findAll();
    }

    // add new users
    public UserModel createEmployee(UserModel detail) throws JsonProcessingException {
        detail.setPassword(passwordEncoder.encode(detail.getPassword()));
        userrepo.save(detail);
        AuthRequest authRequest = new AuthRequest(detail.getUsername(), detail.getPassword());
        String json = objectMapper.writeValueAsString(authRequest);

        kafkaTemplate.send("news_user_detail", json);
        return detail;
    }

    //get by id
    public UserModel getDetailById(Long id) {
		UserModel userDetail =userrepo.findById(id).orElseThrow(null);
		if(Objects.nonNull(userDetail)){
			return userDetail;
		}
		else{
			throw new UserNotFoundException("User Id not available "+ id,"404");
		}
    }

    //updateDetail
    public UserModel updateDeatil(Long id, UserModel detail) {
        UserModel user = userrepo.findById(id)
                .orElseThrow(null);

		if(Objects.nonNull(user)){
			user.setUsername(detail.getUsername());
			user.setEmail(detail.getEmail());
			user.setMobileNumber(detail.getMobileNumber());
			user.setUserRole(detail.getUserRole());
			user.setPassword(detail.getPassword());
			return userrepo.save(user);
		}
		else{
			throw new UserNotFoundException("User Id not available "+ id,"404");
		}


    }

    public String existsByemail(String email) {
        return ((userrepo.existsByemail(email)) ? "true" : "false");
    }

    public String existsByemailAndpassword(String email, String password) {
        return ((userrepo.existsByemailAndPassword(email, password)) ? "true" : "false");
    }

    public UserModel getDetailByemail(String email) {

        return userrepo.getDetailByemail(email);

    }

    public String deleteById(Long id) {
		UserModel user = userrepo.findById(id)
				.orElseThrow(null);

		if(Objects.nonNull(user)){
			 userrepo.deleteById(id);
			return "deleted";
		}
		else{
			throw new UserNotFoundException("User Id not available "+ id,"404");
		}
    }

    @Override
    public String existsByemailandusername(String email, String username) {
        // TODO Auto-generated method stub
        String b = userrepo.existsByemailAndUsername(email, username) ? "true" : "false";
        System.out.println(b);
        return (b);

    }

    @Override
    public UserModel getDetailByusername(String username) {
        // TODO Auto-generated method stub
        return userrepo.getDetailByusername(username);
    }
}