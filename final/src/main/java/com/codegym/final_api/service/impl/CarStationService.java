package com.codegym.final_api.service.impl;

import com.codegym.final_api.model.CarStation;
import com.codegym.final_api.repository.ICarStationRepository;
import com.codegym.final_api.service.ICarStationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarStationService implements ICarStationService {
    @Autowired
    private ICarStationRepository iCarStationRepository;

    @Override
    public List<CarStation> findAll() {
        return this.iCarStationRepository.findAll();
    }
}
