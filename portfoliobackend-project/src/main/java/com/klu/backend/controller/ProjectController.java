package com.klu.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.backend.model.ProjectInfo;
import com.klu.backend.model.ProjectManager;

@RestController
@RequestMapping("/Projects")
@CrossOrigin(origins = "*")
public class ProjectController {
	@Autowired
	 ProjectManager PM;
	@PostMapping("/add")
	public ResponseEntity<String> addProject(@RequestBody ProjectInfo p) {
        try {
            String response = PM.addProject(p);

            if (response.startsWith("401")) {
                return ResponseEntity.status(401).body(response);
            }
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            return ResponseEntity.status(500).body("500::Internal Server Error - " + e.getMessage());
        }
    }
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteProject(@PathVariable Long id) {
	    String response = PM.deleteProject(id);
	    if (response.startsWith("404")) {
	        return ResponseEntity.status(404).body(response);
	    }
	    return ResponseEntity.ok(response);
	}

}
