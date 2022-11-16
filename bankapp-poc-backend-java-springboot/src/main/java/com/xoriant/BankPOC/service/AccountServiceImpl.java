package com.xoriant.BankPOC.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.BankPOC.model.Account;
import com.xoriant.BankPOC.repository.AccountRepository;

@Service
public class AccountServiceImpl implements AccountService {
	
	@Autowired
	AccountRepository accountRepository;


	@Override
	public Account createAccount(Account account) {
		return accountRepository.save(account);
	}

	@Override
	public Account updateAccount(Account account) {
		return accountRepository.save(account);
	}

	@Override
	public boolean removeAccount(int accountNumber) {
		boolean isDeleted = false;
		try {
			accountRepository.deleteById(accountNumber);
			isDeleted = true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return isDeleted;
	}

	@Override
	public Account getAccountByNumber(int accountNumber) {
		return accountRepository.getByAccountNumber(accountNumber);
	}

	@Override
	public List<Account> getAllCustomerAccounts(int customerId) {
		return accountRepository.findAll();
	}

	@Override
	public boolean isAccountValid(int accountNumber) {
		Account account = accountRepository.getByAccountNumber(accountNumber);
		if(account != null) {
			return true;
		}		
		return false;
	}

}
