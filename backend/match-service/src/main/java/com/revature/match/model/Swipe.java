package com.revature.match.model;

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
public class Swipe {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="swipe_id")
	private int id;
	
	@Column(name="sent_id")
	private int sentId;
	
	@Column(name="recieve_id")
	private int recieveId;
	
	@Column(name="direction")
	private char direction;
}
