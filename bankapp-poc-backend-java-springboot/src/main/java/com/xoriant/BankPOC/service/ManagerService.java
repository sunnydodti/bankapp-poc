package com.xoriant.BankPOC.service;

import java.util.List;

import com.xoriant.BankPOC.dto.LoginRequest;
import com.xoriant.BankPOC.model.Manager;

public interface ManagerService {

	public Manager addManager(Manager manager);
	public Manager getByManagerId(int managerId);
	public Manager updateManager(Manager manager);
	public boolean removeManagerById(int managerId);
	public List<Manager> getAllManagers();
	public boolean isManagerValid(int managerId);
	public Manager login(LoginRequest loginRequest);
}
