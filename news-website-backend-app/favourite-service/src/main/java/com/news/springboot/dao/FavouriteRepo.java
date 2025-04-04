package com.news.springboot.dao;

import com.news.springboot.model.Articles;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface FavouriteRepo extends MongoRepository<Articles, Integer> {

}
