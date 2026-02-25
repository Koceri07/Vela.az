package com.example.velabackend.repository;

import com.example.velabackend.entity.UserEntity;
import org.apache.catalina.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByEmail(String email);

    Boolean existsByEmail(String email);

    Page<UserEntity> findByUsernameContainingIgnoreCaseAndActiveTrue(String username, Pageable pageable);

    Page<UserEntity> findAllByActiveTrue(Pageable pageable);
}
