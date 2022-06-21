package com.codegym.final_api.controller;

import com.codegym.final_api.model.CarStation;
import com.codegym.final_api.model.CarType;
import com.codegym.final_api.service.ICarTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RequestMapping("/carTypes")
@RestController
public class CarTypeController {
    @Autowired
    private ICarTypeService iCarTypeService;

    @GetMapping("/list")
    public ResponseEntity<List<CarType>> getCarType() {
        List<CarType> carTypes = this.iCarTypeService.findAll();
        if (carTypes == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(carTypes, HttpStatus.OK);
    }
}
