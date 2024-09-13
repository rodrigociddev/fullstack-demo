package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SquareRootController {

    @GetMapping("/sqrt")
    public double calculateSquareRoot(@RequestParam double number) {
        return Math.sqrt(number);
    }
}
