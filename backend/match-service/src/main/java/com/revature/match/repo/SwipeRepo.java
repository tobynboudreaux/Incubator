package com.revature.match.repo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.match.model.Swipe;

@Repository
@Transactional
public interface SwipeRepo extends JpaRepository<Swipe,Integer>{

	public List<Swipe> findBySentId(int sentId);
	
	public Swipe findByRecieveIdAndSentIdAndDirection(int recieveId, int sentId, char direction);
}
