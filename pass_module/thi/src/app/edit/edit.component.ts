import {Component, OnInit} from '@angular/core';
import {CarRegister} from '../model/car-register';
import {CarType} from '../model/car-type';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarRegisterService} from '../service/car-register.service';
import {CarTypeService} from '../service/car-type.service';
import {CarStationService} from '../service/car-station.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CarStation} from '../model/car-station';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  carRegister: CarRegister;
  carTypeList: CarType[];
  carStationList: CarStation[];
  id: number;

  carRegisterForm = new FormGroup({
    id: new FormControl(''),
    carNumber: new FormControl('', [Validators.required]),
    carType: new FormControl('', [Validators.required]),
    carStation: new FormControl('', [Validators.required]),
    departure: new FormControl('', [Validators.required]),
    arrive: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    departureHour: new FormControl('', [Validators.required]),
    arriveHour: new FormControl('', [Validators.required])
  });

  constructor(private carRegisterService: CarRegisterService,
              private carTypeService: CarTypeService,
              private carStationService: CarStationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.carRegisterService.findById(this.id).subscribe(
        d => console.log(d)
      ));
    });
  }


  getCarRegister(index: number) {
    return this.carRegisterService.findById(index).subscribe(item => {
      this.carRegister = item;
      this.carRegisterForm.setValue(item);
      // this.carRegisterForm.patchValue(item);
      console.log(this.carRegisterForm.value);
    });
  }

  update(index: number) {
    const value = this.carRegisterForm.value;
    this.carRegisterService.update(index, value).subscribe(() => {
      this.router.navigateByUrl('carRegister-list');
    });
  }

  getList() {
    this.carStationService.findAllCarStation().subscribe(list => {
      this.carStationList = list;
      console.log(this.carStationList);
    });
    this.carTypeService.findAllCarType().subscribe(list => {
      this.carTypeList = list;
      console.log(this.carTypeList);
    });
    this.getCarRegister(this.id);
  }

  ngOnInit(): void {
    this.getList();
  }
}
