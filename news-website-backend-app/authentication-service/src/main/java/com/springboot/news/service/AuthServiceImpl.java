package com.springboot.news.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.springboot.news.dao.AuthRepo;
import com.springboot.news.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private AuthRepo authRepo;

    ObjectMapper objectMapper = new ObjectMapper();

    private final List<UserModel> messages = new ArrayList<>();

    @KafkaListener(topics = "news_user_detail", groupId = "user_group")
    public void listen(String message) throws JsonProcessingException {
        UserModel data = objectMapper.readValue(message, UserModel.class);

        synchronized (messages) {
            messages.add(data);
        }
        messages.forEach(System.out::println);
        authRepo.save(messages.get(messages.size()-1));

        System.out.println("Received Kafka message: " + messages.get(messages.size()-1));
    }

}