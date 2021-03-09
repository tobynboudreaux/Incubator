package com.revature.user.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@Column(name="photo_url")
	private String photoUrl;
	
	@Column(name="years")
	private int years;
	
	@Column(name="tech_stack")
	private String techStack;
	
	@Column(name="bio")
	private String bio;
	
	@Column(name="verified")
	private boolean isVerified;
	
	private User[] matches;
}
