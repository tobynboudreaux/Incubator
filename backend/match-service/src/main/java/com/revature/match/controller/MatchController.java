package com.revature.match.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.match.model.Match;
import com.revature.match.model.Swipe;
import com.revature.match.service.SwipeService;

@RestController
@CrossOrigin
@RequestMapping("/matches")
public class MatchController {

	@Autowired
	private SwipeService serv;
	
	@PostMapping("/swipe")
	public boolean swipe(@RequestBody Map<String,String> json)
	{
		return serv.swipe(Integer.parseInt(json.get("sentId")), 
				Integer.parseInt(json.get("recieveId")), 
				json.get("direction").toLowerCase().charAt(0));
	}
	
	@PostMapping("/getSwipes")
	public List<Swipe> getSwipes(@RequestBody Map<String,String> json)
	{
		return serv.getSwipes(Integer.parseInt(json.get("sentId")));
	}
	
	@PostMapping("/getMatches")
	public List<Match> getMatches(@RequestBody Map<String,String> json)
	{
		return serv.getMatches(Integer.parseInt(json.get("id1")));
	}
}
