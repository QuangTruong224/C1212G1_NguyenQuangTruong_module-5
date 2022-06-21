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
  id: string;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute, private route: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getCustomer(this.id);
      // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      //   this.id = paramMap.get('id');
      //   this.customerService.findById(this.id).subscribe(customer => {
      //     this.customerForm = new FormGroup({

    });
    this.customerForm = new FormGroup({
      id: new FormControl(''),
      customerName: new FormControl(''),
      gender: new FormControl(''),
      dateOfBirth: new FormControl(''),
      identify: new FormControl('', [Validators.pattern('^\\d{9}$')]),
      address: new FormControl(''),
      phone: new FormControl('', [Validators.pattern('^(84|0[3|5|7|8|9])+([0-9]{8})$')]),
      email: new FormControl('', [Validators.email]),
      customerType: new FormControl('')
    });

  }

  ngOnInit(): void {
  }

  getCustomer(id: string) {
    return this.customerService.findById(id).subscribe(customer => {
      this.customerForm.patchValue(customer);
    });
  }

  updateCustomer(id: string) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      // alert('successful');
    }, e => {
      console.log(e);
    }, () => {
      this.route.navigate(['customer/list']);
    });
  }
}

//
//     updateCustomer(id: string) {
//     const customer = this.customerForm.value;
//     console.log(customer);
//     this.customerService.updateCustomer(id, customer);
//     this.route.navigate(['/customer/list']);
//     // alert('Cập nhật thành công');
//   }
// }
