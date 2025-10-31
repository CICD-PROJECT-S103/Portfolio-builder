package com.klu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klu.backend.model.WorkExperince;

@Repository
public interface WorkExpRepository extends JpaRepository<WorkExperince, Long>{
	
}
