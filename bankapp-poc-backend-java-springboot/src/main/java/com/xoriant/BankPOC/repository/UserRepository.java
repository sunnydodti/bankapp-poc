package com.xoriant.BankPOC.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xoriant.BankPOC.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	public User getByUserId(int userId);
}