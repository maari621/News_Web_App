package com.news.springboot.service;

import com.news.springboot.model.Articles;

import java.util.List;



public interface FavouriteService {

	List<Articles> getAllArticles();

	Articles createArticle(Articles detail);
	}
