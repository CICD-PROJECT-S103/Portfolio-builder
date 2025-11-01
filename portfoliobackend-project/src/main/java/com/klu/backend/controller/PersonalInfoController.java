package com.klu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    
    @GetMapping("/get")
    public ResponseEntity<?> getPersonalInfo(@RequestParam String email) {
        try {
            PersonalInfo personalInfo = PM.getByEmail(email);
            if (personalInfo == null) {
                return ResponseEntity.status(404).body("404::Personal info not found for email: " + email);
            }
            return ResponseEntity.ok(personalInfo);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("500::Error retrieving personal info - " + e.getMessage());
        }
    }
}
