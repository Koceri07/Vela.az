package com.vale.vale.service;

import com.vale.vale.model.request.UserRequest;
import com.vale.vale.model.response.ApiResponse;
import org.springframework.stereotype.Service;

public interface UserService {

    ApiResponse create(UserRequest request);

    ApiResponse getById(Long id);

    ApiResponse getAll();

    ApiResponse softDeleteById(Long id);

    ApiResponse hardDeleteById(Long id);

}
