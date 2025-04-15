package com.cloudshelf.Services;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.cloudshelf.Entity.User;
import com.cloudshelf.Exception.UserNotFoundException;
import com.cloudshelf.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    @Value("${app.s3.bucket}")
    private String bucketName;

    @Autowired
    private AmazonS3 s3Client;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public void registerUser(User user) {
        // 1. Initialize empty image list
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("user");
        user.setImageUrls(new ArrayList<>());
        userRepository.save(user);

        // 2. Create folder in S3 using user's name
        String folderName = user.getUserName() + "/";

        ObjectMetadata metadata = new ObjectMetadata();
        InputStream emptyBucket = new ByteArrayInputStream(new byte[0]);

        PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, folderName, emptyBucket, metadata);
        s3Client.putObject(putObjectRequest);

        System.out.println("User registered & S3 folder created: " + folderName);
    }

    public void uploadUserFile(String email, MultipartFile file) throws IOException {
        // 1. Fetch user by email using Optional
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found with email: " + email));  // <-- Fixed Null Check

        // 2. Generate S3 key for file
        String key = user.getUserName() + "/" + file.getOriginalFilename();

        // 3. Prepare metadata
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(file.getSize());
        metadata.setContentType(file.getContentType());

        // 4. Upload file to S3
        s3Client.putObject(new PutObjectRequest(bucketName, key, file.getInputStream(), metadata));

        // 5. Get URL of uploaded file
        String fileUrl = s3Client.getUrl(bucketName, key).toString();

        // 6. Update user's image URL list
        List<String> imageUrls = user.getImageUrls();
        imageUrls.add(fileUrl);
        user.setImageUrls(imageUrls);

        userRepository.save(user);

        System.out.println("File uploaded & URL saved: " + fileUrl);
    }

    public List<String> getAllFiles(String email) {
        // Fetch user by email using Optional
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found with email: " + email));  // <-- Fixed Null Check
        return user.getImageUrls();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
