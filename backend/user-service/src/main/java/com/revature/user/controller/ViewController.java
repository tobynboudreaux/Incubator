package com.revature.user.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/")
public class ViewController {

	@GetMapping
	public String welcome()
	{
		return "Ayy this is the user service home page. To access user data, use our gateway at port 6969.";
	}
	
}
