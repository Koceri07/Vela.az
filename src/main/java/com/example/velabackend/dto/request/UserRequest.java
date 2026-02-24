package com.example.velabackend.dto.request;

import com.example.velabackend.enums.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRequest {
    private String username;
    private String password;
    private String email;
    private Role role;
}
