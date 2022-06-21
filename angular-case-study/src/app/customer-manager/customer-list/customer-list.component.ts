import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @ViewChild('keySearch1') keySearch1: ElementRef;
  @ViewChild('keySearch2') keySearch2: ElementRef;
  @ViewChild('keySearch3') keySearch3: ElementRef;

  customers: Customer[] = [];
  idDelete: string;
  nameDelete: string;
  p: number;

  constructor(private customerService: CustomerService, private route: Router) {
  }

  ngOnInit(): void {
    this.customerService.search('',
      '',
      '').subscribe(customers => this.customers = customers,
      () => {
      });
    console.log(this.customers);
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteModal(id: string, customerName: string) {
    this.idDelete = id;
    this.nameDelete = customerName;
  }

  deleteProduct(customerId: string) {
    this.customerService.deleteCustomer(customerId).subscribe(() => {
      // alert('Successful');
      this.ngOnInit();
    }, error => {

    }, () => {
      this.route.navigate(['/customer/list']);
    });
  }

  // deleteProduct(customerId: string) {
  //   this.customerService.deleteCustomer(customerId);
  //   this.route.navigate(['/customer/list']);
  // }

  search() {
    console.log(this.keySearch1.nativeElement.value);
    console.log(this.keySearch2.nativeElement.value);
    console.log(this.keySearch3.nativeElement.value);
    this.customerService.search(this.keySearch1.nativeElement.value,
      this.keySearch2.nativeElement.value,
      this.keySearch3.nativeElement.value).subscribe(customers => this.customers = customers,
      () => {
      });
    console.log(this.customers);
  }
}
