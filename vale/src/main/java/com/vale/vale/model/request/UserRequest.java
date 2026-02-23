package com.vale.vale.model.request;

import com.vale.vale.model.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRequest {

    private Long id;

    private String userName;

    private String email;

    private String password;

    private Role role;

}
