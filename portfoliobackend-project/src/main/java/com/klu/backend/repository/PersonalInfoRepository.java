package com.klu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.klu.backend.model.PersonalInfo;
@Repository
public interface PersonalInfoRepository extends JpaRepository<PersonalInfo,String> {
	@Query("select count(p) from PersonalInfo p where p.email=:email") 
	 public int validateEmail(@Param("email") String email);
}
