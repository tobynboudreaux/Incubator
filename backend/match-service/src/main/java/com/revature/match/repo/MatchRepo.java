package com.revature.match.repo;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.match.model.Match;

@Repository
@Transactional
public interface MatchRepo extends JpaRepository<Match,Integer>{

	public List<Match> findById1(int id1);
}
