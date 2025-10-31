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
		if(pr.validateEmail(p.getEmail())>0)
			return "401::email id exist";
		
		pr.save(p);
		return "200::Information added successfully";
	}
}
