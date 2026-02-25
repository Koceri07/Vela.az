package com.example.velabackend.service;

import com.example.velabackend.dto.request.UserRequest;
import com.example.velabackend.dto.response.UserResponse;
import com.example.velabackend.entity.UserEntity;
import com.example.velabackend.mapper.UserMapper;
import com.example.velabackend.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @Transactional
    public UserResponse createUser(UserRequest userRequest) {
        log.info("Creating new user with email: {}", userRequest.getEmail());

        if (userRepository.existsByEmail(userRequest.getEmail())) {
            log.warn("User creation failed, email already exists: {}", userRequest.getEmail());
            throw new RuntimeException("Error: This email is already registered");
        }

        UserEntity userEntity = userMapper.toEntity(userRequest);
        userEntity.setCreatedAt(LocalDateTime.now());
        userEntity.setActive(true);

        UserEntity savedUser = userRepository.save(userEntity);
        log.info("User created successfully with ID: {}", savedUser.getId());

        return userMapper.ToResponse(savedUser);
    }

    @Transactional
    public UserResponse updateUser(Long id, UserRequest updateUserRequest) {
        log.info("Updating user details for ID: {}", id);

        UserEntity existingUser = userRepository.findById(id)
                .orElseThrow(() -> {
                    log.error("Update failed, user not found with ID: {}", id);
                    return new RuntimeException("User not found");
                });

        if (!existingUser.getEmail().equals(updateUserRequest.getEmail()) &&
                userRepository.existsByEmail(updateUserRequest.getEmail())) {
            log.warn("Email update failed, email already in use by another account: {}", updateUserRequest.getEmail());
            throw new RuntimeException("Error: This email is already used by another user");
        }

        existingUser.setUsername(updateUserRequest.getUsername());
        existingUser.setEmail(updateUserRequest.getEmail());
        existingUser.setRole(updateUserRequest.getRole());

        UserEntity updatedUser = userRepository.save(existingUser);
        log.info("User with ID: {} updated successfully", id);

        return userMapper.ToResponse(updatedUser);
    }

    @Transactional
    public UserResponse updateUsername(Long id, String username) {
        log.info("Updating username for user ID: {} to: {}", id, username);

        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        user.setUsername(username);
        UserEntity updatedUser = userRepository.save(user);

        return userMapper.ToResponse(updatedUser);
    }

    @Transactional
    public void changePassword(Long id, String oldPassword, String newPassword) {
        log.info("Password change request for user ID: {}", id);

        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(oldPassword)) {
            log.warn("Incorrect old password provided for user ID: {}", id);
            throw new RuntimeException("Incorrect old password");
        }

        if (user.getPassword().equals(newPassword)) {
            throw new RuntimeException("New password cannot be the same as the old password");
        }

        user.setPassword(newPassword);
        userRepository.save(user);
        log.info("Password changed successfully for user ID: {}", id);
    }

    @Transactional
    public void softDeleteUser(Long id) {
        log.info("Soft-deleting user with ID: {}", id);

        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> {
                    log.error("Delete failed, user not found with ID: {}", id);
                    return new RuntimeException("User to be deleted was not found");
                });

        user.setActive(false);
        userRepository.save(user);
        log.info("User account deactivated successfully, ID: {}", id);
    }

    public UserResponse getUserById(Long id) {
        log.info("Fetching user details for ID: {}", id);

        UserEntity user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + id));

        if (!user.isActive()) {
            log.warn("Attempt to access deactivated account, ID: {}", id);
            throw new RuntimeException("This user account has been deleted");
        }

        return userMapper.ToResponse(user);
    }

    public Page<UserResponse> getAllUsers(String searchTerm, Pageable pageable) {
        log.info("Fetching user list. Search: '{}', Page: {}", searchTerm, pageable.getPageNumber());

        Page<UserEntity> userPage;
        if (searchTerm != null && !searchTerm.isEmpty()) {
            userPage = userRepository.findByUsernameContainingIgnoreCaseAndActiveTrue(searchTerm, pageable);
        } else {
            userPage = userRepository.findAllByActiveTrue(pageable);
        }

        return userPage.map(userMapper::ToResponse);
    }
}