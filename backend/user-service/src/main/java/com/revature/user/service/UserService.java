package com.revature.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.user.model.User;
import com.revature.user.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo repo;
	
	public User login(String username, String password)
	{
		User user = repo.findByUsernameAndPassword(username,password);
		
		if(user != null)
		{
			user.setPassword("");
			user.setEmail("");
		}
		
		return user;
	}
	
	public boolean newUser(String username, String email, String password, 
			String photoUrl, int years, String techStack, String bio)
	{
		try 
		{
			User user = new User(0, username, email, password, photoUrl,
					years, techStack, bio, false, null);
			
			repo.save(user);
			return true;
			
		}catch(Exception e)
		{
			return false;
		}
	}
}
