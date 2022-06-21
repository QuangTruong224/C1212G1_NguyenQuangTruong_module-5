import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../contract.service';
import {Router} from '@angular/router';
import {Facility} from '../../model/facility';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../customer-manager/customer.service';
import {FacilityService} from '../../facility-manager/facility.service';


@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract [] = [];
  facilities: Facility[] = [];
  customers: Customer[] = [];
  idDelete: string;
  nameDelete: string;
  p: number;

  constructor(private contractService: ContractService, private route: Router,
              private customerService: CustomerService, private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCustomer();
    this.getAllFacility();
  }

  getAll() {
    this.contractService.getAll().subscribe(contracts => {
      this.contracts = contracts;
    });
  }

  deleteModal(id: string, contractName: string) {
    this.idDelete = id;
    this.nameDelete = contractName;
  }

  deleteContract(id: string) {
    this.contractService.deleteContract(id).subscribe(() => {
      // alert('Successful');
      this.ngOnInit();
    }, error => {

    }, () => {
      this.route.navigate(['/contract/list']);
    });
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
