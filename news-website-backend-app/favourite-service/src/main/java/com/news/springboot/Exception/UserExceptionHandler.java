package com.news.springboot.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;


@ControllerAdvice
public class UserExceptionHandler extends ResponseEntityExceptionHandler {


//    @ExceptionHandler(UserNotFoundException.class)
//    private ResponseEntity<ResponseModel> handelUserIdNotFoundException(UserNotFoundException ex){
//
//        ResponseModel response= new ResponseModel();
//
//        response.setErrorCode(ex.getErrorCode());
//        response.setMessage(ex.getMessage());
//        response.setTimeStamp(LocalDateTime.now());
//
//        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
//    }
//
//    @ExceptionHandler(UserAuthenticationException.class)
//    private ResponseEntity<ResponseModel> handelAuthenticationException(UserAuthenticationException ex){
//        ResponseModel response= new ResponseModel();
//
//        response.setErrorCode(ex.getErrorCode());
//        response.setMessage(ex.getMessage());
//        response.setTimeStamp(LocalDateTime.now());
//
//        return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
//    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Object> handleGeneralException(Exception ex) {
        Map<String, Object> response = new HashMap<>();
        response.put("timestamp", LocalDateTime.now());
        response.put("message", ex.getMessage());
        response.put("status", HttpStatus.INTERNAL_SERVER_ERROR.value());

        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
