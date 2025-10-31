package com.klu.backend.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.backend.repository.CustomerRepository;

@Service
public class CustomerManager {
	@Autowired
	CustomerRepository UR;
	@Autowired
	TokenHandle jwt;
	public String addUSer(Customer U) 
	{
		if(UR.validateEmail(U.getEmail())>0)
			return "401::email id exist";
		
		UR.save(U);
		return "200::Registration done successfully";
	}
	
	public String CheckCredentials(String email,String password) 
	{
		if(UR.CheckCredentials(email, password)>0) 
		{
			String token=jwt.createToken(email);
			return "200::"+token;
		}
		return "401:: invalid credentials";
	}
}
