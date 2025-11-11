package com.klu.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "skills")
public class TechincalSkills {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "email", referencedColumnName = "email", nullable = false)
    private PersonalInfo personalInfo;

    @Column(nullable = false)
    private String skillName; // e.g., "React", "Java", "UI/UX"

    public void Skill() {
    }

    public void Skill(PersonalInfo personalInfo, String skillName, String proficiencyLevel) {
        this.personalInfo = personalInfo;
        this.skillName = skillName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public PersonalInfo getPersonalInfo() {
        return personalInfo;
    }

    public void setPersonalInfo(PersonalInfo personalInfo) {
        this.personalInfo = personalInfo;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    // ---------- toString ----------
    @Override
    public String toString() {
        return "Skill{" +
                "id=" + id +
                ", personalInfoEmail=" + (personalInfo != null ? personalInfo.getEmail() : null) +
                ", skillName='" + skillName + '\'' +
                '}';
    }
}
