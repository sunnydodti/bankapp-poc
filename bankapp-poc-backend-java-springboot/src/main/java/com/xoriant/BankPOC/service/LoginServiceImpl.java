package com.xoriant.BankPOC.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.BankPOC.dto.LoginRequest;
import com.xoriant.BankPOC.dto.LoginResponse;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	CustomerService customerService;

	@Autowired
	ManagerService managerService;
	
	@Override
	public LoginResponse login(LoginRequest loginRequest) {
		
		LoginResponse loginResponse = null;
		if (customerService.isCustomerValid(loginRequest.getId()))
			loginResponse = LoginResponse.setAndGetCustomerData(customerService.login(loginRequest));

		if (managerService.isManagerValid(loginRequest.getId()))
			loginResponse = LoginResponse.setAndGetManagerData(managerService.login(loginRequest));
		
		return loginResponse;
	}

	@Override
	public boolean validateUser(int userId) {
		if (customerService.isCustomerValid(userId))
			return true;
		if (managerService.isManagerValid(userId))
			return true;
		
		return false;
	}	
	
}
