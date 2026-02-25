package com.example.velabackend.mapper;

import com.example.velabackend.dto.request.UserRequest;
import com.example.velabackend.dto.response.UserResponse;
import com.example.velabackend.entity.UserEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-02-25T14:44:22+0400",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-9.3.1.jar, environment: Java 17.0.17 (Eclipse Adoptium)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserEntity toEntity(UserRequest userRequest) {
        if ( userRequest == null ) {
            return null;
        }

        UserEntity userEntity = new UserEntity();

        userEntity.setUsername( userRequest.getUsername() );
        userEntity.setPassword( userRequest.getPassword() );
        userEntity.setEmail( userRequest.getEmail() );
        userEntity.setRole( userRequest.getRole() );

        return userEntity;
    }

    @Override
    public UserResponse ToResponse(UserEntity userEntity) {
        if ( userEntity == null ) {
            return null;
        }

        UserResponse.UserResponseBuilder userResponse = UserResponse.builder();

        userResponse.id( userEntity.getId() );
        userResponse.username( userEntity.getUsername() );
        userResponse.email( userEntity.getEmail() );
        userResponse.role( userEntity.getRole() );
        userResponse.createdAt( userEntity.getCreatedAt() );

        return userResponse.build();
    }
}
