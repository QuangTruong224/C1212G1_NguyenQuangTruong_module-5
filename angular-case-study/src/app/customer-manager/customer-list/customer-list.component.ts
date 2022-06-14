import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  idDelete: string;
  nameDelete: string;

  constructor(private customerService: CustomerService, private route: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customers = this.customerService.getAll();
  }

  deleteModal(customerId: string, customerName: string) {
    this.idDelete = customerId;
    this.nameDelete = customerName;
  }

  deleteProduct(customerId: string) {
    this.customerService.deleteCustomer(customerId);
    this.route.navigate(['/customer-list']);
  }
}
