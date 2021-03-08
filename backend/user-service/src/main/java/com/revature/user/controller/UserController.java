package com.revature.user.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.user.model.User;
import com.revature.user.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService userServ;
	
	@PostMapping("/login/")
	public User login(@RequestBody Map<String, String> json)
	{
		return userServ.login(json.get("username"), json.get("password"));
	}
}
