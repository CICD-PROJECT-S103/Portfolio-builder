package com.klu.backend.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.backend.repository.PersonalInfoRepository;
import com.klu.backend.repository.WorkExpRepository;
import com.klu.backend.model.WorkExperince;

@Service
public class WorkExpManager {
	@Autowired
	WorkExpRepository we;
	@Autowired
    PersonalInfoRepository pr;
	public String addWE(WorkExperince w) 
	{
		String email=w.getPersonalInfo().getEmail();

        PersonalInfo person=pr.findById(email).orElse(null);
        if(person==null) {
            return "401::Email ID not found in Personal Info. Please add Personal Info first.";
        }

        w.setPersonalInfo(person);

        we.save(w);
        return "200::Work Experience added successfully.";
	}
}
