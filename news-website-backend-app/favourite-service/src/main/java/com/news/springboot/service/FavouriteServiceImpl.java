package com.news.springboot.service;

import com.news.springboot.Exception.UserNotFoundException;
import com.news.springboot.dao.FavouriteRepo;
import com.news.springboot.model.Articles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;


@Service
public class FavouriteServiceImpl implements FavouriteService {


    @Autowired
    public FavouriteRepo favouriteRepo;

    public List<Articles> getAllArticles() {
        return favouriteRepo.findAll();
    }

    public Articles createArticle(Articles detail) {
        favouriteRepo.save(detail);
        return detail;
    }

}