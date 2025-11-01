package com.klu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klu.backend.model.ProjectInfo;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectInfo,String>{

}
