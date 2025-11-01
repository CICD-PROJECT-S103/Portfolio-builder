package com.klu.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klu.backend.model.TechincalSkills;

public interface SkillsRepository extends JpaRepository<TechincalSkills,Long> {
	List<TechincalSkills> findByPersonalInfoEmail(String email);
}
