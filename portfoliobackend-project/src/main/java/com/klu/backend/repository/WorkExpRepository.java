package com.klu.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klu.backend.model.WorkExperince;

@Repository
public interface WorkExpRepository extends JpaRepository<WorkExperince, Long>{
	List<WorkExperince> findByPersonalInfoEmail(String email);
}
