import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {Customer} from '../../model/customer';
import {Route, Router, Routes} from '@angular/router';
import {CustomerService} from '../customer.service';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm: FormGroup;
  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private route: Router) {
    this.customerForm = new FormGroup({
      customerName: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
      dateOfBirth: new FormControl(''),
      identify: new FormControl('', [Validators.required, Validators.pattern('^\\d{9}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(''),
      gender: new FormControl(''),
      customerType: new FormControl('')
    });
  }

  ngOnInit(): void {
  }


  createCustomer() {
    const customer = this.customerForm.value;
    console.log(this.customerForm.value);
    // this.customerService.saveCustomer(customer);
    // this.customerForm.reset();

    this.customerService.saveCustomer(customer).subscribe(() => {
      }, error => {

      },
      () => {
        this.route.navigateByUrl('/customer/list');
      });
    // this.route.navigate(['/customer/list']);
  }
}
