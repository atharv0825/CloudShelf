package com.cloudshelf.Controller;

import com.cloudshelf.ApiResponse.ApiResponse;
import com.cloudshelf.DTO.LoginRequest;
import com.cloudshelf.Entity.User;
import com.cloudshelf.Exception.EmailAlreadyExistException;
import com.cloudshelf.Exception.UserAlreadyExistException;
import com.cloudshelf.Security.JwtUtil;
import com.cloudshelf.Services.UserServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/cloudshelf/api")
public class UserHandlingController {
    @Autowired
    private UserServices userServices;


    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;


    @PostMapping("/register")
    public ResponseEntity<ApiResponse> registerUser(@RequestBody @Valid User user) {
        try {
            userServices.registerUser(user);
            return ResponseEntity.ok(new ApiResponse(2000,"User registered successfully!"));
        } catch (UserAlreadyExistException e) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(new ApiResponse(1001,e.getMessage()));
        }
        catch (EmailAlreadyExistException e) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(new ApiResponse(1002, e.getMessage()));  // Email conflict
        } catch (Exception e) {
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse(9999, "Registration failed: " + e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> loginUser(@RequestBody LoginRequest loginRequest) {
        try {
            // Authenticate user
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword())
            );

            // Set authentication in security context
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Generate JWT token
            String token = jwtUtil.generateToken(loginRequest.getEmail());

            Map<String, String> response = new HashMap<>();
            response.put("email", loginRequest.getEmail());
            response.put("token", "Bearer " + token);  // <-- JSON key "token"

            return ResponseEntity.ok(response);  // <-- JSON response
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Authentication failed: " + e.getMessage());
            return ResponseEntity.status(401).body(errorResponse);
        }
    }


}
