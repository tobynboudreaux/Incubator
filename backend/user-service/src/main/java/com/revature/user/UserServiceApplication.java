package com.revature.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class UserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}
	
//	@Bean
//	public WebMvcConfigurer corsConfigurer()
//	{
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//		        System.out.println("idk bro");
//		        registry.addMapping("/**")
//		        .allowedOrigins("*")
//		        .allowedHeaders("*")
//		        .allowedMethods("OPTIONS", "GET", "PUT", "POST", "DELETE");
//		        System.out.println("dats right bro");
//		    }
//		};
//	}
	

}
