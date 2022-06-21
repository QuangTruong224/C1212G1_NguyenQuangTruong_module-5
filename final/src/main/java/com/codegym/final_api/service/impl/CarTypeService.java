package com.codegym.final_api.service.impl;

import com.codegym.final_api.model.CarType;
import com.codegym.final_api.repository.ICarTypeRepository;
import com.codegym.final_api.service.ICarTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarTypeService implements ICarTypeService {
    @Autowired
    private ICarTypeRepository iCarTypeRepository;

    @Override
    public List<CarType> findAll() {
        return this.iCarTypeRepository.findAll();
    }
}
