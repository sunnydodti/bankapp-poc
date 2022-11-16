package com.xoriant.BankPOC.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.BankPOC.dto.LoginRequest;
import com.xoriant.BankPOC.model.Customer;
import com.xoriant.BankPOC.service.CustomerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@PostMapping("/add")
	public Customer addCustomer(@RequestBody Customer customer) {
		
		return customerService.addCustomer(customer);
	}
	
	@GetMapping("/get/{customerId}")
	public Customer getByCustomerId(@PathVariable int customerId) {
		return customerService.getByCustomerId(customerId);
	}

	@PutMapping("/update")
	public Customer updateCustomer(@RequestBody Customer customer) {
		return customerService.updateCustomer(customer);
	}
	
	@DeleteMapping("/delete/{customerId}")
	public boolean removeCustomerById(@PathVariable int customerId) {
//		return true;
		return customerService.removeCustomerById(customerId);
	}

	@PostMapping("/getAll")
	public List<Customer> getAllCustomers() {
		return customerService.getAllCustomers();
	}
	
	@GetMapping("/validateUser/{customerId}")
	public boolean validateCustomerId(@PathVariable int customerId) {
		return customerService.isCustomerValid(customerId);
	}
	
	@PostMapping("/login")
	public Customer login(@RequestBody LoginRequest loginRequest) {
		return customerService.login(loginRequest);
	}
}	
