package com.revature.message.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.message.model.Message;
import com.revature.message.service.MessageService;

@RestController
@CrossOrigin
@RequestMapping("/messages")
public class MessageController {

	@Autowired
	private MessageService msgServ;
	
	@PostMapping("/get")
	public List<Message> getMessages(@RequestBody Map<String,String> json)
	{
		return msgServ.getMessages(Integer.parseInt(json.get("sentId")), 
				Integer.parseInt(json.get("recieveId")));
	}
	
	@PostMapping("/create")
	public boolean createMessage(@RequestBody Map<String,String> json)
	{
		DateTimeFormatter format = DateTimeFormatter.ofPattern("HH:mm MM/dd/yyyy");
		
		return msgServ.createMessage(Integer.parseInt(json.get("sentId")), 
				Integer.parseInt(json.get("recieveId")), json.get("message"), 
				LocalDateTime.parse(json.get("time"),format));
	}
}
