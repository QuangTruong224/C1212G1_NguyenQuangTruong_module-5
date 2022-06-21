import {Component, OnInit} from '@angular/core';
import {CarRegister} from '../model/car-register';
import {Router} from '@angular/router';
import {CarRegisterService} from '../service/car-register.service';
import {CarStationService} from '../service/car-station.service';
import {CarTypeService} from '../service/car-type.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  carRegisters: CarRegister[];
  idDelete: number;
  nameDelete: number;
  p: number;

  constructor(private carTypeService: CarTypeService,
              private carStationService: CarStationService,
              private carRegisterService: CarRegisterService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.carRegisterService.getAll().subscribe(carRegister => {
      // @ts-ignore
      this.carRegisters = carRegister.content;
    });
  }

  deleteModal(id: number, carNumber: number) {
    this.idDelete = id;
    this.nameDelete = carNumber;
  }

  deleteCargister(id: number) {
    this.carRegisterService.delete(id).subscribe(() => {
      // alert('Successful');
      this.ngOnInit();
    }, error => {

    }, () => {
      this.router.navigate(['carRegister-list']);
    });
  }
}
