package com.xoriant.BankPOC.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.BankPOC.dto.LoginRequest;
import com.xoriant.BankPOC.exception.InvalidCredentialsException;
import com.xoriant.BankPOC.exception.UserNotFoundException;
import com.xoriant.BankPOC.model.Customer;
import com.xoriant.BankPOC.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public Customer addCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public Customer getByCustomerId(int customerId) {
		return customerRepository.getByCustomerId(customerId);
	}

	@Override
	public Customer updateCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	public boolean removeCustomerById(int customerId) {
		boolean isDeleted = false;
		try {
			customerRepository.deleteById(customerId);
			isDeleted = true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return isDeleted;
	}

	@Override
	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}

	@Override
	public boolean isCustomerValid(int customerId) {
		Customer customer = customerRepository.getByCustomerId(customerId);
		if(customer != null) {
			return true;
		}		
		return false;
	}

	@Override
	public Customer login(LoginRequest loginRequest) {
		Customer customer = customerRepository.getByCustomerId(loginRequest.getId());
		
		if(customer == null) 
			throw new UserNotFoundException();			
		
		if (!customer.getUser().getPassword().equals(loginRequest.getPassword()))
//			return customer;
			throw new InvalidCredentialsException();
		return customer;
		
	}
}
