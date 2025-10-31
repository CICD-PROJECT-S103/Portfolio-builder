package com.klu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.backend.model.Customer;
import com.klu.backend.model.CustomerManager;




@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "*")
public class CustomerController {
	@Autowired
    CustomerManager UM;

    @PostMapping("/signup")
    public String signup(@RequestBody Customer U) {
        return UM.addUSer(U);
    }
    @PostMapping("/signin")
	public String signin(@RequestBody Customer U) 
	{
		return UM.CheckCredentials(U.getEmail(), U.getPassword());
		
	}
}
