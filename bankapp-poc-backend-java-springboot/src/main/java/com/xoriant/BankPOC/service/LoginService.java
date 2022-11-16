package com.xoriant.BankPOC.service;

import com.xoriant.BankPOC.dto.LoginRequest;
import com.xoriant.BankPOC.dto.LoginResponse;

public interface LoginService {
	public LoginResponse login(LoginRequest loginRequest);
	public boolean validateUser(int userId);
}
