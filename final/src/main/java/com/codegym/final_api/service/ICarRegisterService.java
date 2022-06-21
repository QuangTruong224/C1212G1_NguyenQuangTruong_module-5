package com.codegym.final_api.service;

import com.codegym.final_api.model.CarRegister;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface ICarRegisterService {
    Page<CarRegister> findAll(Pageable pageable);

    Page<CarRegister> findAll1(String carType, String email, Pageable pageable);

    CarRegister save(CarRegister carRegister);

    CarRegister findById(int id);


    void deleteById(int id);


}
