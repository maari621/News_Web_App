package com.news.springboot.model;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
class Source{
    private String name;
    private String id;

    public Source(String name, String id) {
        this.name = name;
        this.id = id;
    }

    @Override
    public String toString() {
        return "Source{" +
                "name='" + name + '\'' +
                ", id='" + id + '\'' +
                '}';
    }
}