package com.xoriant.BankPOC.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.BankPOC.dto.LoginRequest;
import com.xoriant.BankPOC.exception.InvalidCredentialsException;
import com.xoriant.BankPOC.exception.UserNotFoundException;
import com.xoriant.BankPOC.model.Customer;
import com.xoriant.BankPOC.model.Manager;
import com.xoriant.BankPOC.repository.ManagerRepository;

@Service
public class ManagerServiceImpl implements ManagerService{

	@Autowired
	ManagerRepository managerRepository;
	
	@Override
	public Manager addManager(Manager manager) {
		return managerRepository.save(manager);
	}

	@Override
	public Manager getByManagerId(int managerId) {
		return managerRepository.getByManagerId(managerId);
	}

	@Override
	public Manager updateManager(Manager manager) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean removeManagerById(int managerId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<Manager> getAllManagers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isManagerValid(int managerId) {
		Manager manager = managerRepository.getByManagerId(managerId);
		if(manager!=null) {
			return true;
		}		
		return false;
	}

	@Override
	public Manager login(LoginRequest loginRequest) {
		Manager manager = managerRepository.getByManagerId(loginRequest.getId());
		
		if (manager == null)
			throw new UserNotFoundException();
		
		if (!manager.getUser().getPassword().equals(loginRequest.getPassword()))
			throw new InvalidCredentialsException();
		
		return manager;
	}

}
