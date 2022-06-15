import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  customerId: string;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.customerId = paramMap.get('customerId');
      const customer = this.getCustomer(this.customerId);
      this.customerForm = new FormGroup({
        customerId: new FormControl(customer.customerId, [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
        customerName: new FormControl(customer.customerName, [Validators.required]),
        gender: new FormControl(customer.gender),
        dateOfBirth: new FormControl(customer.dateOfBirth),
        identify: new FormControl(customer.identify, [Validators.required, Validators.pattern('^\\d{9}$')]),
        address: new FormControl(customer.address),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^\\d{9}$')]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        customerType: new FormControl(customer.customerType)
      });
    });

  }

  ngOnInit(): void {
  }

  getCustomer(customerId: string) {
    return this.customerService.findById(customerId);
  }

  updateCustomer(customerId: string) {
    const customer = this.customerForm.value;
    console.log(customer);
    this.customerService.updateCustomer(customerId, customer);
    this.route.navigate(['/customer/list']);
    // alert('Cập nhật thành công');
  }
}
