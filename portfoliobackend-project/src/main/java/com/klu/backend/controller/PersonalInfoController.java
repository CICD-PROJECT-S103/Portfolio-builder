package com.klu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.klu.backend.model.PersonalInfo;
import com.klu.backend.model.PersonalInfoManager;

@RestController
@RequestMapping("/personalinfo")
@CrossOrigin(origins = "*")
public class PersonalInfoController {
	@Autowired
    PersonalInfoManager PM;

    @PostMapping("/addinfo")
    public String signup(@RequestBody PersonalInfo p) {
        return PM.adddetail(p);
    }
}
