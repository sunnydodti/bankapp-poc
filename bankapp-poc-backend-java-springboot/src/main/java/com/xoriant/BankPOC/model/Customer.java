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
public class Customer{
	
	@Id
	@GenericGenerator(name = "customerIdGenerator", strategy = "com.xoriant.BankPOC.generator.CustomerIdGenerator")
	@GeneratedValue(generator = "customerIdGenerator")
	private int customerId;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "user_id")
	private User user;
	
//	@OneToMany
//	@JoinColumn(name = "manager_id")
//	private Set<Customer> customers;
	
	@OneToMany(mappedBy = "customer", cascade = CascadeType.PERSIST)
	private List<Account> accounts;

	// works with this
	@JoinColumn(name = "manager_id")
	private String manager_id;
	
	private String branch;
	
	
}
