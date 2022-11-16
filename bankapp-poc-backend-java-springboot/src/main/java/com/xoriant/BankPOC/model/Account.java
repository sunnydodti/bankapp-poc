package com.xoriant.BankPOC.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.GenericGenerator;

import com.xoriant.BankPOC.modelTypes.AccountType;

import lombok.Data;

@Data
@Entity
public class Account {
	
	@Id
	@GenericGenerator(name = "accountNumberGenerator", strategy = "com.xoriant.BankPOC.generator.AccountNumberGenerator")
	@GeneratedValue(generator = "accountNumberGenerator")	
	private int accountNumber;
	
	private AccountType accountType;
	private float balance;
		
//	@JoinColumn(name = "manager_id")
//	private String manager_id;
	
//	@JoinColumn(name = "customer_id")
//	private int customer_id;
	
	@ManyToOne
	private Customer customer;
	
//	@ManyToOne(cascade=CascadeType.PERSIST)
//	@JoinColumn(name="customer_id")
//	private Customer customer;
}