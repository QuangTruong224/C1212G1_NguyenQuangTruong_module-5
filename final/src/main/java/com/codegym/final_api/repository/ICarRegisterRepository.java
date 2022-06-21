package com.codegym.final_api.repository;

import com.codegym.final_api.model.CarRegister;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarRegisterRepository extends JpaRepository<CarRegister, Integer> {
    Page<CarRegister> findAllByCarTypeContainingAndEmailContaining(String carType, String email, Pageable pageable);
}
