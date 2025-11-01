package com.klu.backend.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.backend.repository.PersonalInfoRepository;
import com.klu.backend.repository.ProjectRepository;

@Service
public class ProjectManager {

    @Autowired
    ProjectRepository pror;

    @Autowired
    PersonalInfoRepository pr;

    public String addProject(ProjectInfo p) {
        String email = p.getPersonalInfo().getEmail();

        PersonalInfo person = pr.findById(email).orElse(null);
        if (person == null) {
            return "401::Email ID not found in Personal Info. Please add Personal Info first.";
        }

        p.setPersonalInfo(person);

        pror.save(p);
        return "200::Project added successfully.";
    }
}
