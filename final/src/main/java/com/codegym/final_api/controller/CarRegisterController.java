package com.codegym.final_api.controller;

import com.codegym.final_api.dto.CarRegisterDto;
import com.codegym.final_api.model.CarRegister;
import com.codegym.final_api.model.CarStation;
import com.codegym.final_api.service.ICarRegisterService;
import org.apache.tomcat.util.http.parser.HttpParser;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin
@RequestMapping("/carRegister")
@RestController
public class CarRegisterController {
    @Autowired
    private ICarRegisterService iCarRegisterService;

    @GetMapping("/list")
    public ResponseEntity<Page<CarRegister>> getCarList(Model model, @PageableDefault(value = 10) Pageable pageable,
                                                        @RequestParam Optional<String> carType, @RequestParam Optional<String> email) {
//        String carTypeVal = carType.orElse("");
//        String emailVal = email.orElse("");
//        Page<CarRegister> carRegisters = this.iCarRegisterService.findAll1(carTypeVal, emailVal, pageable);
//        if (carTypeVal.equals("")) {
//            carRegisters = this.iCarRegisterService.findAll1(carTypeVal, emailVal, pageable);
        Page<CarRegister> carRegisters = this.iCarRegisterService.findAll(pageable);
        if (!carRegisters.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(carRegisters, HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<List<FieldError>> create(@Validated @RequestBody CarRegisterDto carRegisterDto,
                                                   BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }
        CarRegister carRegister = new CarRegister();
//        CarStation carStation=new CarStation();
        BeanUtils.copyProperties(carRegisterDto, carRegister);
        this.iCarRegisterService.save(carRegister);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value = "/findById")
    public ResponseEntity<CarRegister> findById(@RequestParam int id) {
        CarRegister carRegister = iCarRegisterService.findById(id);
        if (carRegister == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(carRegister, HttpStatus.OK);
    }

    @PutMapping(value = "/edit/{id}")
    public ResponseEntity<List<FieldError>> update(@PathVariable int id, @Validated @RequestBody CarRegisterDto carRegisterDto,
                                                   BindingResult bindingResult) {
        if (bindingResult.hasFieldErrors()) {
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }
        Optional<CarRegister> optionalCarRegister = Optional.ofNullable(iCarRegisterService.findById(id));
        if (!optionalCarRegister.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        carRegisterDto.setId(optionalCarRegister.get().getId());
        CarRegister carRegister = new CarRegister();
        BeanUtils.copyProperties(carRegisterDto, carRegister);
        this.iCarRegisterService.save(carRegister);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<CarRegister> delete(@PathVariable int id) {
        Optional<CarRegister> optionalCarRegister = Optional.ofNullable(this.iCarRegisterService.findById(id));
        if (!optionalCarRegister.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        this.iCarRegisterService.deleteById(id);
        return new ResponseEntity<>(optionalCarRegister.get(), HttpStatus.OK);
    }

}
