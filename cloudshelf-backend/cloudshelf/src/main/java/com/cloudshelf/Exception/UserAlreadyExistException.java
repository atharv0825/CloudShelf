package com.cloudshelf.Exception;

public class UserAlreadyExistException extends  RuntimeException{
    public UserAlreadyExistException(String message) {
        super(message);
    }
}
