package com.revature.message.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Message {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="msg_id")
	private int id;
	
	@Column(name="sent_id")
	private int sentId;
	
	@Column(name="recieve_id")
	private int recieveId;
	
	@Column(name="message")
	private String message;
	
	@Column(name="time_sent")
	private LocalDateTime timeSent;
	
	@Column(name="read")
	private boolean read;
	
}
