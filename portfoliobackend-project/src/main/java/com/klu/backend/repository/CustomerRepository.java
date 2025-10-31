package com.klu.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.klu.backend.model.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer,String> {
	@Query("select count(c) from Customer c where c.email=:email") 
	 public int validateEmail(@Param("email") String email);
	@Query("select count(c) from Customer c where c.email=:email AND c.password=:password")
	 public int CheckCredentials(@Param("email") String email,@Param("password") String password);
}
