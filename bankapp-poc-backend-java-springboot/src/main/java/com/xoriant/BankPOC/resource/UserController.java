package com.xoriant.BankPOC.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.BankPOC.model.User;
import com.xoriant.BankPOC.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	UserService userService;

	@PostMapping("/add")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}

	@GetMapping("/get/{userId}")
	public User getUserById(@PathVariable int userId) {
		return userService.getUserById(userId);
	}

	@PostMapping("/update")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@DeleteMapping("/delete/{userId}")
	public boolean removeUserById(@PathVariable int userId) {
//		return false;
		return userService.removeUserById(userId);
	}

	@GetMapping("/getAll")
	public List<User> GetAllUsers() {	
		return userService.getAllUsers();
	}
	
}
