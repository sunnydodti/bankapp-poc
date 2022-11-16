package com.xoriant.BankPOC.service;

import java.util.List;

import com.xoriant.BankPOC.dto.LoginRequest;
import com.xoriant.BankPOC.model.Customer;

public interface CustomerService {
	
	public Customer addCustomer(Customer customer);
	public Customer getByCustomerId(int customerId);
	public Customer updateCustomer(Customer customer);
	public boolean removeCustomerById(int customerId);
	public List<Customer> getAllCustomers();
	
	public boolean isCustomerValid(int customerId);
	public Customer login(LoginRequest loginRequest);
}
