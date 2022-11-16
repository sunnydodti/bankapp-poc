package com.xoriant.BankPOC.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;


@Data
@Entity
public class Manager {
	
	@Id
	@GenericGenerator(name = "managerIdGenerator", strategy = "com.xoriant.BankPOC.generator.ManagerIdGenerator")
	@GeneratedValue(generator = "managerIdGenerator")	
	private int managerId;
	
	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "user_id")
	private User user;
		
	@OneToMany
	@JoinColumn(name = "manager_id")
	private List<Customer> customers;

	private String branch;	
	
}
