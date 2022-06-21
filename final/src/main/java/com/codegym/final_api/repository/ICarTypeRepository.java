package com.codegym.final_api.repository;

import com.codegym.final_api.model.CarType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarTypeRepository extends JpaRepository<CarType, Integer> {
}
