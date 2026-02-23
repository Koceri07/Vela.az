package com.vale.vale.service.impl;

import com.vale.vale.exception.NotFoundException;
import com.vale.vale.mapper.UserMapper;
import com.vale.vale.model.request.UserRequest;
import com.vale.vale.model.response.ApiResponse;
import com.vale.vale.repository.UserRepository;
import com.vale.vale.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;


    @Override
    public ApiResponse create(UserRequest request) {
        log.info("Action.create.start for id {}", request.getId());
        var entity = UserMapper.INStANCE.toEntity(request);
        var saved = userRepository.save(entity);
        ApiResponse apiResponse = new ApiResponse(saved);
        log.info("Action.create.end for id {}", request.getId());
        return apiResponse;
    }

    @Override
    public ApiResponse getById(Long id) {
        log.info("Action.getById.start for id {}", id);
        var entity = userRepository.findById(id)
                        .orElseThrow(() -> new NotFoundException("Id Not Found"));
        var response = UserMapper.INStANCE.toResponse(entity);
        ApiResponse apiResponse = new ApiResponse(response);
        log.info("Action.getById.end for id {}", id);
        return apiResponse;
    }

    @Override
    public ApiResponse getAll() {
        log.info("Action.getAll.start");
        var responses = userRepository.findAll()
                        .stream()
                                .map(UserMapper.INStANCE::toResponse)
                                        .toList();
        ApiResponse apiResponse = new ApiResponse(responses);
        log.info("Action.getAll.end");
        return apiResponse;
    }

    @Override
    public ApiResponse softDeleteById(Long id) {
        log.info("Action.softDeleteById.start for id {}", id);

        log.info("Action.softDeleteById.end for id {}", id);
        return null;
    }

    @Override
    public ApiResponse hardDeleteById(Long id) {
        return null;
    }
}
