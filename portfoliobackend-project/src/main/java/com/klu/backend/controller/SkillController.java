package com.klu.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klu.backend.model.TechincalSkills;
import com.klu.backend.model.TechnicalManager;

@RestController
@RequestMapping("/skills")
@CrossOrigin(origins = "*") 
public class SkillController {

    @Autowired
    private TechnicalManager technicalSkillManager;

    @PostMapping("/add")
    public ResponseEntity<String> addSkill(@RequestBody TechincalSkills skill) {
        String response = technicalSkillManager.addSkill(skill);

        if (response.startsWith("401")) {
            return ResponseEntity.status(401).body(response);
        }
        return ResponseEntity.ok(response);
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteSkill(@PathVariable Long id) {
        String response = technicalSkillManager.deleteSkill(id);

        if (response.startsWith("404")) {
            return ResponseEntity.status(404).body(response);
        }
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/list")
    public ResponseEntity<?> getSkills(@RequestParam String email) {
        try {
            List<TechincalSkills> skills = technicalSkillManager.getSkillsByEmail(email);
            return ResponseEntity.ok(skills);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("500::Error retrieving skills - " + e.getMessage());
        }
    }
}
