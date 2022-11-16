package com.xoriant.BankPOC.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xoriant.BankPOC.model.User;
import com.xoriant.BankPOC.repository.UserRepository;


@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User addUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	
	@Override
	public boolean removeUserById(int userId) {
		
		boolean isDeleted = false;
		try {
			userRepository.deleteById(userId);
			isDeleted = true;
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return isDeleted;		
	}

	@Override
	public User getUserById(int userId) {
		return userRepository.getByUserId(userId);
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

}
