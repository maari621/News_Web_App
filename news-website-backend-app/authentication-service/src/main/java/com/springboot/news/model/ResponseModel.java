package com.springboot.news.model;

import java.time.LocalDateTime;

public class ResponseModel {

    private String message;

    private String errorCode;

    private LocalDateTime timeStamp;
    public ResponseModel() {
    }

    public ResponseModel(String message, String errorCode, LocalDateTime timeStamp) {
        this.message = message;
        this.errorCode = errorCode;
        this.timeStamp = timeStamp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(String errorCode) {
        this.errorCode = errorCode;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }
}
