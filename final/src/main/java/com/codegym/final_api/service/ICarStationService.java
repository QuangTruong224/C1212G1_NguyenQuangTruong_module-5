package com.codegym.final_api.service;

import com.codegym.final_api.model.CarStation;

import java.util.List;

public interface ICarStationService {
    List<CarStation> findAll();
}
