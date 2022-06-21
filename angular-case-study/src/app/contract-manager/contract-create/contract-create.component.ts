import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contract} from '../../model/contract';

import {Router} from '@angular/router';
import {ContractService} from '../contract.service';
import {Facility} from '../../model/facility';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../customer-manager/customer.service';
import {FacilityService} from '../../facility-manager/facility.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;
  // contract: Contract[] = [];
  facilities: Facility[] = [];
  customers: Customer[] = [];

  constructor(private route: Router, private contractService: ContractService,
              private customerService: CustomerService, private facilityService: FacilityService) {
    this.contractForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required]),
      serviceName: new FormControl('', [Validators.required]),
      startDay: new FormControl('', [Validators.required]),
      endDay: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.min(4)]),
      total: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllFacility();
  }

  createContract() {
    const contract = this.contractForm.value;
    console.log(this.contractForm.value);
    // this.customerService.saveCustomer(customer);
    // this.customerForm.reset();

    this.contractService.saveContract(contract).subscribe(() => {
      }, error => {

      },
      () => {
        this.route.navigateByUrl('/contract/list');
      });
    // this.route.navigate(['/customer/list']);
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }

  getAllFacility() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }
}
