package com.news.springboot.controller;

import com.news.springboot.client.client;
import com.news.springboot.model.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    @Autowired
    private client newsApiClient;

    @Value("${news.api.key}")
    private String apiKey;

    @GetMapping("/search/{topic}")
    public ResponseEntity<News> getNews(@PathVariable String topic){
        return ResponseEntity.ok(newsApiClient.searchNews(topic,apiKey));
    }

}
