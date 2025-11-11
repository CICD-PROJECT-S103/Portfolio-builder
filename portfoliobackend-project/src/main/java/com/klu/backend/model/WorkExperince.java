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
@Table(name = "WorkExperince")
public class WorkExperince {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Establish foreign key relationship with PersonalInfo
    @ManyToOne
    @JoinColumn(name = "email", referencedColumnName = "email", nullable = false)
    private PersonalInfo personalInfo;

    @Column(name = "company", nullable = false)
    private String company;

    @Column(name = "position", nullable = false)
    private String position;

    @Column(name = "duration", nullable = false)
    private String duration;

    @Column(name = "description", length = 2000)
    private String description;

    // Constructors
    public void WorkExperience() {}

    public void WorkExperience(PersonalInfo personalInfo, String company, String position, String duration, String description) {
        this.personalInfo = personalInfo;
        this.company = company;
        this.position = position;
        this.duration = duration;
        this.description = description;
    }

    // Getters and Setters
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

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    // toString
    @Override
    public String toString() {
        return "WorkExperience{" +
                "id=" + id +
                ", personalInfoEmail=" + (personalInfo != null ? personalInfo.getEmail() : null) +
                ", company='" + company + '\'' +
                ", position='" + position + '\'' +
                ", duration='" + duration + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
