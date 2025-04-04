package com.news.springboot.controller;

import com.news.springboot.model.Articles;
import com.news.springboot.service.FavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/favourite")
public class FavouriteController {

	@Autowired
	public FavouriteService favouriteService;

	@GetMapping()
	public ResponseEntity<List<Articles>> getAllNews() {
		return new ResponseEntity<>(favouriteService.getAllArticles(), HttpStatus.OK);
	}

	@PostMapping("/addFavourite")
	public ResponseEntity<Articles> createArticle(@RequestBody Articles detail) {
		return new ResponseEntity<>( favouriteService.createArticle(detail), HttpStatus.CREATED);
	}

	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome this endpoint is not secure";
	}


}
