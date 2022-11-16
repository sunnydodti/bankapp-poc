package com.xoriant.BankPOC.dto;

import com.xoriant.BankPOC.model.Customer;
import com.xoriant.BankPOC.model.Manager;

import lombok.Data;

@Data
public class LoginResponse {
	private boolean isManager;
	private int id;
	private String firstName;
	private String lastName;
	
	public static LoginResponse setAndGetCustomerData(Customer customer) {
		LoginResponse loginResponse = new LoginResponse();
		loginResponse.setManager(false);
		loginResponse.setId(customer.getCustomerId());
		loginResponse.setFirstName(customer.getUser().getFirstName());
		loginResponse.setLastName(customer.getUser().getLastName());
		return loginResponse;
	}
	
	public static LoginResponse setAndGetManagerData(Manager manager) {
		LoginResponse loginResponse = new LoginResponse();
		loginResponse.setManager(true	);
		loginResponse.setId(manager.getManagerId());
		loginResponse.setFirstName(manager.getUser().getFirstName());
		loginResponse.setLastName(manager.getUser().getLastName());
		return loginResponse;
	}
}
