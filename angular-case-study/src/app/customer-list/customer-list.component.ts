import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  constructor() {

    this.customers.push({customerId: 'KH-001', customerName: 'Nguyễn Quang Trường',
      gender: 'Nam', dateOfBirth: '2000/04/22', identify: '123456789', address: '02 Sơn Thủy 8', phone: '0905386737',
      email: 'changtraitre2000@gmail.com', type: 'Diamond'});

    this.customers.push({customerId: 'KH-002', customerName: 'Nguyễn Thị Hào',
      gender: 'Nữ', dateOfBirth: '1970-11-07', identify: '643431213', address: '23 Nguyễn Hoàng, Đà Nẵng', phone: '0945423362',
      email: 'thihao07@gmail.com', type: 'Gold'});

    this.customers.push({customerId: 'KH-003', customerName: 'Phạm Xuân Diệu',
      gender: 'Nữ', dateOfBirth: '1992-08-08', identify: '865342123', address: 'K77/22 Thái Phiên, Quảng Trị', phone: '0954333333',
      email: 'xuandieu92@gmail.com', type: 'Diamond'});

    this.customers.push({customerId: 'KH-004', customerName: 'Trương Đình Nghệ',
      gender: 'Nam', dateOfBirth: '1990-02-27', identify: '488645199', address: 'nghenhan2702@gmail.com', phone: '0373213122',
      email: 'nghenhan2702@gmail.com', type: 'Member'});

    this.customers.push({customerId: 'KH-005', customerName: 'Nguyễn Tâm Đắc',
      gender: 'Nam', dateOfBirth: '1989-07-01', identify: '344343432', address: '22 Ngô Quyền, Đà Nẵng', phone: '0987654321',
      email: 'dactam@gmail.com', type: 'Platinum'});

    this.customers.push({customerId: 'KH-006', customerName: 'Nguyễn Thị Hào',
      gender: 'Nữ', dateOfBirth: '1999-04-08', identify: '965656433', address: '55 Nguyễn Văn Linh, Kon Tum', phone: '0763212345',
      email: 'haohao99@gmail.com', type: 'Platinum'});

  }

  ngOnInit(): void {
  }

}
