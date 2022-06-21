package com.codegym.final_api.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class CarType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @JsonBackReference
    @OneToMany(mappedBy = "carType")
    private List<CarRegister> carRegisterList;

    public CarType() {
    }

    public CarType(Integer id, String name, List<CarRegister> carRegisterList) {
        this.id = id;
        this.name = name;
        this.carRegisterList = carRegisterList;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<CarRegister> getCarRegisterList() {
        return carRegisterList;
    }

    public void setCarRegisterList(List<CarRegister> carRegisterList) {
        this.carRegisterList = carRegisterList;
    }
}
