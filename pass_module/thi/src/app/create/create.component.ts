import {Component, OnInit} from '@angular/core';
import {CarRegister} from '../model/car-register';
import {CarType} from '../model/car-type';
import {CarStation} from '../model/car-station';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarRegisterService} from '../service/car-register.service';
import {CarTypeService} from '../service/car-type.service';
import {CarStationService} from '../service/car-station.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id: number;
  carTypeList: CarType[];
  carStationList: CarStation[];

  createForm: FormGroup;

  constructor(private carRegisterService: CarRegisterService,
              private carTypeService: CarTypeService,
              private carStationService: CarStationService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.getCarStation();
    this.getCarType();
    this.createForm = new FormGroup({
      id: new FormControl(''),
      carNumber: new FormControl('', [Validators.required]),
      carType: new FormControl('', [Validators.required]),
      carStation: new FormControl('', [Validators.required]),
      departure: new FormControl('', [Validators.required]),
      arrive: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      departureHour: new FormControl('', [Validators.required]),
      arriveHour: new FormControl('', [Validators.required])
    });
  }

  getCarType() {
    return this.carTypeService.findAllCarType().subscribe(list => {
      this.carTypeList = list;
    });
  }

  getCarStation() {
    return this.carStationService.findAllCarStation().subscribe(list => {
      this.carStationList = list;
    });
  }

  create() {
    const carRegister = this.createForm.value;
    console.log(this.createForm.value);
    // this.customerService.saveCustomer(customer);
    // this.customerForm.reset();

    this.carRegisterService.create(carRegister).subscribe(() => {
      }, error => {

      },
      () => {
        this.router.navigateByUrl('carRegister-list');
      });
  }

}
