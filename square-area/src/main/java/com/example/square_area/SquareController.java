package com.example.square_area;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://area-of-square.vercel.app") 
public class SquareController {

    @GetMapping("/area")
    public double calculateArea(@RequestParam double side) {
        return side * side;
    }
}