package com.klu.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "personalinfo")
public class PersonalInfo {
	@Id
    @Column(name = "email", nullable = false)
    private String email;
    
    @Column(name = "fullname", nullable = false)
    private String fullname;
    
    @Column(name = "professionaltitle", nullable = false)
    private String professionalTitle;
    
    @Column(name = "phonenumber")
    private String phoneNumber;
    
    @Column(name = "location")
    private String location;
    
    @Column(name = "personalwebsite")
    private String personalWebsite;
    
    @Column(name = "professionalbio", length = 2000)
    private String professionalBio;
    
    @Column(name = "githubprofile")
    private String githubProfile;
    
    @Column(name = "linkedinprofile")
    private String linkedinProfile;

    // Getters and Setters
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getFullname() {
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getProfessionalTitle() {
        return professionalTitle;
    }
    public void setProfessionalTitle(String professionalTitle) {
        this.professionalTitle = professionalTitle;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }

    public String getPersonalWebsite() {
        return personalWebsite;
    }
    public void setPersonalWebsite(String personalWebsite) {
        this.personalWebsite = personalWebsite;
    }

    public String getProfessionalBio() {
        return professionalBio;
    }
    public void setProfessionalBio(String professionalBio) {
        this.professionalBio = professionalBio;
    }

    public String getGithubProfile() {
        return githubProfile;
    }
    public void setGithubProfile(String githubProfile) {
        this.githubProfile = githubProfile;
    }

    public String getLinkedinProfile() {
        return linkedinProfile;
    }
    public void setLinkedinProfile(String linkedinProfile) {
        this.linkedinProfile = linkedinProfile;
    }

    @Override
    public String toString() {
        return "PersonalInfo [fullname=" + fullname + ", professionalTitle=" + professionalTitle +
               ", email=" + email + ", phoneNumber=" + phoneNumber + ", location=" + location +
               ", personalWebsite=" + personalWebsite + ", professionalBio=" + professionalBio +
               ", githubProfile=" + githubProfile + ", linkedinProfile=" + linkedinProfile + "]";
    }
}
