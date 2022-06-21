package com.codegym.final_api.dto;

import com.codegym.final_api.model.CarStation;
import com.codegym.final_api.model.CarType;
import javax.validation.constraints.Email;

public class CarRegisterDto {
    private Integer id;
    private Integer carNumber;
    private String departure;
    private String arrive;
    private String phone;
    @Email
    private String email;
    private String departureHour;
    private String arriveHour;
    private CarStation carStation;
    private CarType carType;

    public CarRegisterDto() {
    }

    public CarRegisterDto(Integer id, Integer carNumber, String departure, String arrive, String phone, String email, String departureHour, String arriveHour, CarStation carStation, CarType carType) {
        this.id = id;
        this.carNumber = carNumber;
        this.departure = departure;
        this.arrive = arrive;
        this.phone = phone;
        this.email = email;
        this.departureHour = departureHour;
        this.arriveHour = arriveHour;
        this.carStation = carStation;
        this.carType = carType;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCarNumber() {
        return carNumber;
    }

    public void setCarNumber(Integer carNumber) {
        this.carNumber = carNumber;
    }

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getArrive() {
        return arrive;
    }

    public void setArrive(String arrive) {
        this.arrive = arrive;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartureHour() {
        return departureHour;
    }

    public void setDepartureHour(String departureHour) {
        this.departureHour = departureHour;
    }

    public String getArriveHour() {
        return arriveHour;
    }

    public void setArriveHour(String arriveHour) {
        this.arriveHour = arriveHour;
    }

    public CarStation getCarStation() {
        return carStation;
    }

    public void setCarStation(CarStation carStation) {
        this.carStation = carStation;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }
}
