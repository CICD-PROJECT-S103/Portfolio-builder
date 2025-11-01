package com.klu.backend.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.backend.model.PersonalInfo;
import com.klu.backend.repository.PersonalInfoRepository;
@Service
public class PersonalInfoManager {
	@Autowired
	PersonalInfoRepository pr;
	public String adddetail(PersonalInfo p) 
	{
		// Remove validation - allow updating existing personal info
		// This enables users to edit their portfolio
		pr.save(p); // save() will update if email exists, insert if new
		return "200::Information added successfully";
	}
	
	public PersonalInfo getByEmail(String email) {
		return pr.findById(email).orElse(null);
	}
}
