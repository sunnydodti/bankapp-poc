package com.xoriant.BankPOC.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.xoriant.BankPOC.model.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Integer> {
	public Manager getByManagerId(int managerId);

}
