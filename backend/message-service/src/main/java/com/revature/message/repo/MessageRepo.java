package com.revature.message.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.message.model.Message;

public interface MessageRepo extends JpaRepository<Message, Integer>{

	public List<Message> findAllBySentIdAndRecieveId (int sentId, int recieveId);
}
