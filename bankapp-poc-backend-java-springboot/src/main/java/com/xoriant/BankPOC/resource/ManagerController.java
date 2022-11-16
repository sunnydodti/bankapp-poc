package com.xoriant.BankPOC.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xoriant.BankPOC.model.Manager;
import com.xoriant.BankPOC.service.ManagerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/manager")
public class ManagerController {
	
	@Autowired
	ManagerService managerService;

	@PostMapping("/add")
	public Manager addManager(@RequestBody Manager manager) {
		return managerService.addManager(manager);
	}

	@GetMapping("/get/{managerId}")
	public Manager getManagerById(@PathVariable int managerId) {
		System.out.println("manager : " + managerService.getByManagerId(managerId));
		return managerService.getByManagerId(managerId);
	}

	@PostMapping("/update")
	public Manager updateManager(@RequestBody Manager manager) {
		return managerService.updateManager(manager);
	}
	
	@GetMapping("/delete")
	public boolean removeManagerById(@RequestBody int managerId) {
		return managerService.removeManagerById(managerId);
	}

	@GetMapping("/getAll")
	public List<Manager> GetAllManagers() {
		return managerService.getAllManagers();
	}
}
