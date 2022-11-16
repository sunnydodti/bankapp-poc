package com.xoriant.BankPOC.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xoriant.BankPOC.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{
	public Customer getByCustomerId(int customerId);
}
