package com.news.springboot.controller;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import com.news.springboot.model.AuthRequest;
import com.news.springboot.model.UserModel;
import com.news.springboot.service.UserService;
import com.news.springboot.util.JwtUtil;


@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/user")
public class UserController {

	@Autowired
	public UserService userservice;

	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private AuthenticationManager authenticationManager;


	@PostMapping("/authenticate")
	public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
			);

		} catch (Exception ex) {
			throw new Exception("inavalid username/password");
		}
		return jwtUtil.generateToken(authRequest.getUsername());
	}

	@GetMapping("/UserView")
	public ResponseEntity<List<UserModel>> getAllEmployee() {

		return new ResponseEntity<>(userservice.getAllEmployee(), HttpStatus.OK);
	}

	//add
	@PostMapping("/UserAdd")
	public ResponseEntity<UserModel> createEmployee(@RequestBody UserModel detail) throws JsonProcessingException {
		return new ResponseEntity<>( userservice.createEmployee(detail), HttpStatus.CREATED);
	}

	//find by id
	@GetMapping("/UserFind/{id}")
	public ResponseEntity<UserModel> getDetailById(@PathVariable Long id) {

		return new ResponseEntity<>(userservice.getDetailById(id), HttpStatus.OK);
	}

	//update
	@PutMapping("UserUpdate/{id}")
	public ResponseEntity<UserModel> updateDetail(@PathVariable Long id, @RequestBody UserModel detail) {
		return new ResponseEntity<>(userservice.updateDeatil(id, detail),HttpStatus.OK);
	}

	//Find mail id is already exixts or not
	@GetMapping("/getByMailId/{email}&{username}")
	public ResponseEntity<String> existsByemail(@PathVariable String email, @PathVariable String username) {
		return new ResponseEntity<>(userservice.existsByemailandusername(email, username), HttpStatus.OK);

	}

	//check email and password is exixts or not
	@GetMapping("/getByEmailandpassword/{email}&{password}")
	public ResponseEntity<String> existsByemailAndPassword(@PathVariable String email, @PathVariable String password) {
		return new ResponseEntity<>(userservice.existsByemailAndpassword(email, password), HttpStatus.OK);

	}

	//find by emailId
	@GetMapping("/getByemail/{email}")
	public ResponseEntity<UserModel> getDetailByemail(@PathVariable String email) {
		return new ResponseEntity<>(userservice.getDetailByemail(email),HttpStatus.OK);

	}

	@GetMapping("/getByusername/{username}")
	public ResponseEntity<UserModel> getDetailByusername(@PathVariable String username) {
		return new ResponseEntity<>(userservice.getDetailByusername(username),HttpStatus.OK);

	}

	@DeleteMapping("/Userdelete/{id}")
	public ResponseEntity<String> deleteById(@PathVariable("id") Long id) {
		userservice.deleteById(id);
		return new ResponseEntity<>("User deleted successfully!.", HttpStatus.OK);
	}

	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome this endpoint is not secure";
	}


}
