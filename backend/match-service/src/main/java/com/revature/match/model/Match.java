package com.revature.match.model;

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
public class Match {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="match_id")
	private int id;
	
	@Column(name="first_id")
	private int id1;
	
	@Column(name="second_id")
	private int id2;
	
	@Column(name="time_matched")
	private LocalDateTime time;
}
