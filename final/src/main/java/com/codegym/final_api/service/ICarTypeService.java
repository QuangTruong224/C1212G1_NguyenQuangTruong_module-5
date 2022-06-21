package com.codegym.final_api.service;

import com.codegym.final_api.model.CarType;

import java.util.List;

public interface ICarTypeService {
    List<CarType> findAll();
}
