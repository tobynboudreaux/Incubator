package com.revature.user.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.user.model.User;
import com.revature.user.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userServ;
	
	@PostMapping("/login")
	public User login(@RequestBody Map<String, String> json)
	{
		return userServ.login(json.get("username"), json.get("password"));
	}
	
	@PostMapping("/new")
	public boolean newUser(@RequestBody Map<String, String> json)
	{
		return userServ.newUser(json.get("username"), json.get("email"), json.get("password"),
				json.get("url"), Integer.parseInt(json.get("years")), json.get("tech"),
				json.get("bio"));
	}
}
