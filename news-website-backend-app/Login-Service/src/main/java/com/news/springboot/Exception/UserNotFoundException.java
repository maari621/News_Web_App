package com.news.springboot.Exception;

public class UserNotFoundException extends RuntimeException{

    private String message;
    private String errorCode;

    public UserNotFoundException(String message, String errorCode) {
        this.message = message;
        this.errorCode = errorCode;
    }

    @Override
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
}
