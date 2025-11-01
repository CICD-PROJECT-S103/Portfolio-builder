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
@Table(name = "projects")
public class ProjectInfo {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "email", referencedColumnName = "email", nullable = false)
    private PersonalInfo personalInfo;

    @Column(nullable = false)
    private String title;  // Project Title

    @Column(nullable = false, length = 2000)
    private String description;  // Description

    @Column(name = "live_url")
    private String liveUrl;  // Live URL

    @Column(name = "github_url")
    private String githubUrl;  // GitHub URL

    @Column(length = 1000)
    private String technologies;  // Comma-separated tech stack

    // ---------- Constructors ----------
    public void Project() {
    }

    public void Project(PersonalInfo personalInfo, String title, String description, String liveUrl, String githubUrl, String technologies) {
        this.personalInfo = personalInfo;
        this.title = title;
        this.description = description;
        this.liveUrl = liveUrl;
        this.githubUrl = githubUrl;
        this.technologies = technologies;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLiveUrl() {
        return liveUrl;
    }

    public void setLiveUrl(String liveUrl) {
        this.liveUrl = liveUrl;
    }

    public String getGithubUrl() {
        return githubUrl;
    }

    public void setGithubUrl(String githubUrl) {
        this.githubUrl = githubUrl;
    }

    public String getTechnologies() {
        return technologies;
    }

    public void setTechnologies(String technologies) {
        this.technologies = technologies;
    }

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", personalInfoEmail=" + (personalInfo != null ? personalInfo.getEmail() : null) +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", liveUrl='" + liveUrl + '\'' +
                ", githubUrl='" + githubUrl + '\'' +
                ", technologies='" + technologies + '\'' +
                '}';
    }
}
