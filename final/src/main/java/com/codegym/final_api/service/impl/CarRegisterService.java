package com.codegym.final_api.service.impl;

import com.codegym.final_api.model.CarRegister;
import com.codegym.final_api.repository.ICarRegisterRepository;
import com.codegym.final_api.service.ICarRegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CarRegisterService implements ICarRegisterService {
    @Autowired
    private ICarRegisterRepository iCarRegisterRepository;

    @Override
    public CarRegister findById(int id) {
        return this.iCarRegisterRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(int id) {
        this.iCarRegisterRepository.deleteById(id);
    }

    @Override
    public Page<CarRegister> findAll1(String carType, String email, Pageable pageable) {
        return this.iCarRegisterRepository.findAllByCarTypeContainingAndEmailContaining(carType, email, pageable);
    }

    @Override
    public CarRegister save(CarRegister carRegister) {
        return this.iCarRegisterRepository.save(carRegister);
    }

    @Override
    public Page<CarRegister> findAll(Pageable pageable) {
        return this.iCarRegisterRepository.findAll(pageable);
    }

}
