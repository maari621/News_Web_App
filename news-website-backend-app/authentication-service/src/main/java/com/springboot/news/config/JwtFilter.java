package com.springboot.news.config;

import java.io.IOException;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.springboot.news.model.ResponseModel;
import com.springboot.news.service.CustomUserDetailsService;
import com.springboot.news.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;


@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtService;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String requestURI = request.getRequestURI();
        if (requestURI.equals("/api/auth/authenticate") ) {
            filterChain.doFilter(request, response);
        }
    }

    private void handleUnAuthorizedException(HttpServletResponse response, String message) throws IOException {
        ResponseModel errorResponse = new ResponseModel();
        errorResponse.setErrorCode(String.valueOf(HttpStatus.UNAUTHORIZED.value()));
        errorResponse.setMessage(message);
//        errorResponse.setTimeStamp(LocalDateTime.now());

        response.setStatus(HttpStatus.UNAUTHORIZED.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().write(new ObjectMapper().writeValueAsString(errorResponse));
        response.getWriter().flush();
    }
}
