package com.klu.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klu.backend.model.ProjectInfo;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectInfo,Long>{
	List<ProjectInfo> findByPersonalInfoEmail(String email);
}
