package com.xoriant.BankPOC.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.BankPOC.model.Account;
import com.xoriant.BankPOC.service.AccountService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/account")
public class AccountController {

	@Autowired
	AccountService accountService;

	@PostMapping("/add")
	public Account createAccount(@RequestBody Account account) {
		return accountService.createAccount(account);
	}

	@GetMapping("/get/{accountNumber}")
	public Account getAccountByNumber(@PathVariable int accountNumber) {
		return accountService.getAccountByNumber(accountNumber);
	}

	@GetMapping("/get/customerAccounts/{customerId}")
	public List<Account> getAllAccounts(@PathVariable int customerId) {
		return accountService.getAllCustomerAccounts(customerId);
	}

	@PutMapping("/update")
	public Account updateAccount(@RequestBody Account account) {
		return accountService.updateAccount(account);
	}

	@PutMapping("/delete/{accountNumber}")
	public boolean deleteAccount(@PathVariable int accountNumber) {
		return accountService.removeAccount(accountNumber);
	}

	@PutMapping("/validateAccount/{accountNumber}")
	public boolean isAccountValid(@PathVariable int accountNumber) {
		return accountService.isAccountValid(accountNumber);
	}
}
