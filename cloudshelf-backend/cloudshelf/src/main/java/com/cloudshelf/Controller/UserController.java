package com.cloudshelf.Controller;

import com.cloudshelf.Entity.User;
import com.cloudshelf.Exception.UserNotFoundException;
import com.cloudshelf.Services.UserServices;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/cloudshelf/api")
public class UserController {
    @Autowired
    private UserServices userServices;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("email") String email,
                                             @RequestParam("file") MultipartFile file){
        try{
            userServices.uploadUserFile(email,file);
            return ResponseEntity.ok("File upload successfully");
        } catch (Exception e) {
            throw new RuntimeException("File not uploaded"+e );
        }
    }

    @GetMapping("/userdata")
    public ResponseEntity<List<String>> getUserFile(@RequestParam("email") String email){
        try{
            List<String> imageUrls = userServices.getAllFiles(email);
            return ResponseEntity.ok(imageUrls);
        } catch (Exception e) {
            throw new RuntimeException("File not uploaded"+e );
        }
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        try{
            List<User>users = userServices.getAllUsers();
            return ResponseEntity.ok(users);
        } catch (Exception e) {
            throw new RuntimeException("File not uploaded"+e );
        }
    }

    @DeleteMapping("/delete-image")
    public ResponseEntity<String>deleteImage(@RequestParam String email,
                                             @RequestParam String imageUrl){
        try{
            userServices.deleteUserImage(email , imageUrl);
            return ResponseEntity.ok("Deleted image successfully");
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting the image");
        }
    }

    @GetMapping("/getUsername")
    public ResponseEntity<String> getUsername(@RequestParam(required = false) String email) {
        if (email == null || email.isEmpty()) {
            return ResponseEntity.badRequest().body("Email parameter is missing");
        }
        try {
            String username = userServices.getUsername(email);
            return ResponseEntity.ok(username);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An unexpected error occurred: " + e.getMessage());
        }
    }

}
