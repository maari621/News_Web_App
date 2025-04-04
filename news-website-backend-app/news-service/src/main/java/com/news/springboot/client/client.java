package com.news.springboot.client;

import com.news.springboot.model.News;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@FeignClient(name = "news-api", url = "https://newsapi.org/v2")
public interface client {

    @GetMapping("/everything")
    News searchNews(@RequestParam("q") String query,
                    @RequestParam("apiKey") String apiKey);
}