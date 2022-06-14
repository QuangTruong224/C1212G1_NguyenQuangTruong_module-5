import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [
    {
      customerId: 'KH-001', customerName: 'Nguyễn Quang Trường',
      gender: 'Nam', dateOfBirth: '2000/04/22', identify: '123456789',
      address: '02 Sơn Thủy 8', phone: '0905386737',
      email: 'changtraitre2000@gmail.com', customerType: 'Diamond'
    },

    {
      customerId: 'KH-002', customerName: 'Nguyễn Thị Hào',
      gender: 'Nữ', dateOfBirth: '1970-11-07', identify: '643431213', address: '23 Nguyễn Hoàng, Đà Nẵng', phone: '0945423362',
      email: 'thihao07@gmail.com', customerType: 'Gold'
    },

    {
      customerId: 'KH-003', customerName: 'Phạm Xuân Diệu',
      gender: 'Nữ', dateOfBirth: '1992-08-08', identify: '865342123', address: 'K77/22 Thái Phiên, Quảng Trị', phone: '0954333333',
      email: 'xuandieu92@gmail.com', customerType: 'Diamond'
    }

  ];

  constructor() {
  }

  getAll() {
    return this.customers;
  }

  saveCustomer(customer) {
    this.customers.push(customer);
  }

  findById(customerId: string) {
    return this.customers.find(customer => customer.customerId === customerId);
  }

  updateCustomer(customerId: string, customer: Customer) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerId === customerId) {
        this.customers[i] = customer;
      }
    }
  }

  deleteCustomer(customerId: string) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerId === customerId) {
        this.customers.splice(i, 1);
      }
    }
  }
}
