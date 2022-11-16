package com.xoriant.BankPOC.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.BankPOC.dto.LoginRequest;
import com.xoriant.BankPOC.dto.LoginResponse;
import com.xoriant.BankPOC.service.LoginService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/")
public class LoginController {
	
	
	@Autowired
	LoginService loginService;
	
	@PostMapping("/login")
	public LoginResponse login(@RequestBody LoginRequest loginRequest) {
		return loginService.login(loginRequest);
	}
	
	@GetMapping("/validateUser/{userId}")
	public boolean validateUser(@PathVariable int userId) {
		return loginService.validateUser(userId);
	}
	
}
