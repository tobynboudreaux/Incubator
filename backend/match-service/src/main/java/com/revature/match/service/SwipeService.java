package com.revature.match.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.match.model.Match;
import com.revature.match.model.Swipe;
import com.revature.match.repo.MatchRepo;
import com.revature.match.repo.SwipeRepo;

@Service
public class SwipeService {

	@Autowired
	private SwipeRepo sRepo;
	
	@Autowired
	private MatchRepo mRepo;
	
	public boolean swipe(int sentId, int recieveId, char direction)
	{
		Swipe newSwipe = new Swipe(0,sentId,recieveId,direction);
		sRepo.save(newSwipe);
		
		//if swiped right
		if(direction == 'r')
		{
			//if a Swipe object is returned then the other person must've wiped right on them as well
			if(sRepo.findByRecieveIdAndSentIdAndDirection(sentId, recieveId, 'r') != null)
			{
				Match match = new Match(0,sentId,recieveId,LocalDateTime.now());
				mRepo.save(match);
				return true;
			}
			else
			{
				return false;
			}
			
		}
		//for now there are only two directions, but we could have a super like feature at some point later
		else
		{
			return false;
		}
	}
	
	public List<Swipe> getSwipes(int sentId)
	{
		return sRepo.findBySentId(sentId);
	}
	
	public List<Match> getMatches(int id1)
	{
		return mRepo.findById1(id1);
	}
}
