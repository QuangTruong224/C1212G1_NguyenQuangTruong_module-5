package com.codegym.final_api.controller;

import com.codegym.final_api.model.CarStation;
import com.codegym.final_api.service.ICarStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("/carStation")
@RestController
public class CarStationController {
    @Autowired
    private ICarStationService iCarStationService;

    @GetMapping("/list")
    public ResponseEntity<List<CarStation>> getCarStation() {
        List<CarStation> carStations = this.iCarStationService.findAll();
        if (carStations == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(carStations, HttpStatus.OK);
    }

}
