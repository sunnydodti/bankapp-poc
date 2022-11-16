package com.xoriant.BankPOC.service;

import java.util.List;

import com.xoriant.BankPOC.model.Account;

public interface AccountService {
	public Account createAccount(Account account);
	public Account updateAccount(Account account);
	public boolean removeAccount(int accountNumber);
	
	public Account getAccountByNumber(int accountNumber);
	public List<Account> getAllCustomerAccounts(int customerId);
	
	public boolean isAccountValid(int accountNumber);
}
