package com.cloudshelf.ApiResponse;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ApiResponse {
    int code;
    String message;
}
