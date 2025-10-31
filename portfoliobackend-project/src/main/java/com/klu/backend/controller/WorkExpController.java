package com.klu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.backend.model.WorkExpManager;
import com.klu.backend.model.WorkExperince;

@RestController
@RequestMapping("/WorkExperince")
@CrossOrigin(origins = "*")
public class WorkExpController {
	 @Autowired
	 WorkExpManager WM;
	 
	@PostMapping("/add")
	public ResponseEntity<String> addWorkExperience(@RequestBody WorkExperince WE) {
        try {
            String response = WM.addWE(WE);

            if (response.startsWith("401")) {
                return ResponseEntity.status(401).body(response);
            }
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("500::Internal Server Error - " + e.getMessage());
        }
    }
}
