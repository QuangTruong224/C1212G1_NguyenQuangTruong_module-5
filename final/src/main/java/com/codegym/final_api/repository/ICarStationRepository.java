package com.codegym.final_api.repository;

import com.codegym.final_api.model.CarStation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarStationRepository extends JpaRepository<CarStation,Integer> {
}
