package com.xoriant.BankPOC.service;

import java.util.List;

import com.xoriant.BankPOC.model.User;

public interface UserService {
	
	public User addUser(User user);
	public User getUserById(int userId);
	public User updateUser(User user);
	public boolean removeUserById(int userId);
	public List<User> getAllUsers();
}
