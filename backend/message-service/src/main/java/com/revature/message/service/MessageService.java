package com.revature.message.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.message.model.Message;
import com.revature.message.repo.MessageRepo;

@Service
public class MessageService {

	@Autowired
	private MessageRepo msgRepo;
	
	public List<Message> getMessages(int sent, int recieve)
	{
		List<Message> list = msgRepo.findAllBySentIdAndRecieveId(sent, recieve);
		
		list.addAll(msgRepo.findAllBySentIdAndRecieveId(recieve, sent)); //adds the other persons messages as well
		
		return list;
	}
	
	public boolean createMessage(int sent, int recieved, String msg,
			LocalDateTime time)
	{
		try
		{
			Message message = new Message(0,sent,recieved,msg,time,false);
			msgRepo.save(message);
			return true;
		}catch(Exception e)
		{
			return false;
		}
	}
}
