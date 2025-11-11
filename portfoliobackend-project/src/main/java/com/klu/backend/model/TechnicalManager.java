package com.klu.backend.model;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.backend.repository.PersonalInfoRepository;
import com.klu.backend.repository.SkillsRepository;

@Service
public class TechnicalManager {

    @Autowired
    private SkillsRepository tsr;

    @Autowired
    private PersonalInfoRepository pr;

    public String addSkill(TechincalSkills skill) {
        String email = skill.getPersonalInfo().getEmail();

        PersonalInfo person = pr.findById(email).orElse(null);
        if (person == null) {
            return "401::Email ID not found in Personal Info. Please add Personal Info first.";
        }

        skill.setPersonalInfo(person);

        tsr.save(skill);

        return "200::Technical Skill added successfully.";
    }
    
    public String deleteSkill(Long id) {
        Optional<TechincalSkills> existingSkill = tsr.findById(id);
        if (existingSkill.isEmpty()) {
            return "404::Skill not found with ID: " + id;
        }

        tsr.deleteById(id);
        return "200::Skill deleted successfully.";
    }
    
    public List<TechincalSkills> getSkillsByEmail(String email) {
        return tsr.findByPersonalInfoEmail(email);
    }
}
