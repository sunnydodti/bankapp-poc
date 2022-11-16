package com.xoriant.BankPOC.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xoriant.BankPOC.model.Account;

public interface AccountRepository extends JpaRepository<Account, Integer>{
	public Account getByAccountNumber(int accountNumber);
}
