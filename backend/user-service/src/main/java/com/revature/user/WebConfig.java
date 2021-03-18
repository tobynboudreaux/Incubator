package com.revature.user;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration
//@EnableWebMvc
//public class WebConfig implements WebMvcConfigurer{
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//    	System.out.println("idk bro");
//        registry.addMapping("/**")
//        .allowedOrigins("*")
//        .allowedHeaders("*")
//        .allowedMethods("OPTIONS", "GET", "PUT", "POST", "DELETE");
//        System.out.println("dats right bro");
//    }
//}

//@Component
//public class WebConfig implements Filter{
//
//	@Override
//	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
//			throws IOException, ServletException {
//		
//	    HttpServletRequest request = (HttpServletRequest) req;
//	    HttpServletResponse response = (HttpServletResponse) res;
//
//	    response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
//	    response.setHeader("Access-Control-Allow-Credentials", "true");
//	    response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
//	    response.setHeader("Access-Control-Max-Age", "3600");
//	    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me");
//
//	    chain.doFilter(req, res);	
//		
//	}
//}
