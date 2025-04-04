package com.news.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Articles {

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
