package com.xoriant.BankPOC.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Data
@Entity
public class User {
	
	@Id
	@GenericGenerator(name = "userIdGenerator", strategy = "com.xoriant.BankPOC.generator.UserIdGenerator")
	@GeneratedValue(generator = "userIdGenerator")	
	private int userId;
	
	private String firstName;
	private String lastName;
	
	private String email;
	private String address;
	private String city;
	private String state;
	private int pincode;
	private int phone;
	private String password;
	private String gender;
	private Date dateOfBirth;
	
	private boolean isManager = false;

}
