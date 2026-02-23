package com.vale.vale.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiResponse {

    private String code;

    private String message;

    private Object data;


    public ApiResponse(Object data){
        this.code = "200";
        this.message = "successfully";
        this.data = data;
    }

    public void badRequest(Object data){
        this.code = "500";
        this.message = "Bad Request";
        this.data = data;
    }

}
