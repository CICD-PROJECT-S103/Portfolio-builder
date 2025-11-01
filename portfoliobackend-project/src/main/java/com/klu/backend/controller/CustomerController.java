package com.klu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.backend.model.Customer;
import com.klu.backend.model.CustomerManager;
import com.klu.backend.model.TokenHandle;




@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "*")
public class CustomerController {
	@Autowired
    CustomerManager UM;
	@Autowired
    TokenHandle jwt;
	
    @PostMapping("/signup")
    public String signup(@RequestBody Customer U) {
        return UM.addUSer(U);
    }
    @PostMapping("/signin")
	public String signin(@RequestBody Customer U) 
	{
		return UM.CheckCredentials(U.getEmail(), U.getPassword());
		
	}
    @PostMapping("/logout")
    public String logout(@RequestHeader("Authorization") String token) {
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
        return jwt.logoutToken(token);
    }
}
