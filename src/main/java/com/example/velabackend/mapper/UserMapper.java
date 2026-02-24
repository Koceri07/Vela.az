package com.example.velabackend.mapper;

import com.example.velabackend.dto.request.UserRequest;
import com.example.velabackend.dto.response.UserResponse;
import com.example.velabackend.entity.UserEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserEntity toEntity(UserRequest userRequest);

    UserResponse ToResponse(UserEntity userEntity);
}
