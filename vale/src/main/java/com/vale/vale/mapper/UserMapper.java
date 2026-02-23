package com.vale.vale.mapper;

import com.vale.vale.entity.UserEntity;
import com.vale.vale.model.request.UserRequest;
import com.vale.vale.model.response.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface UserMapper {

    UserMapper INStANCE = Mappers.getMapper(UserMapper.class);

    UserEntity toEntity(UserRequest request);

    UserResponse toResponse(UserEntity entity);

}
