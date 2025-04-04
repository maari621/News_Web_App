package com.news.springboot.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "Articles")
public class Articles {

    @Id
    private String id;
    private Source source;
    private String title;
    private String description;
    private String author;
    private String content;
    private String url;
    private String urlToImage;
    private LocalDateTime publishedAt;

    @Override
    public String toString() {
        return "Articles{" +
                "source=" + source +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", author='" + author + '\'' +
                ", content='" + content + '\'' +
                ", url='" + url + '\'' +
                ", urlToImage='" + urlToImage + '\'' +
                ", publishedAt=" + publishedAt +
                '}';
    }
}
