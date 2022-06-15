import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Contract} from '../../model/contract';

import {Router} from '@angular/router';
import {ContractService} from '../contract.service';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm: FormGroup;
  contract: Contract[] = [];

  constructor(private route: Router, private contractService: ContractService) {
    this.contractForm = new FormGroup({
      contractId: new FormControl('', [Validators.required]),
      customerName: new FormControl('', [Validators.required]),
      serviceName: new FormControl('', [Validators.required]),
      startDay: new FormControl('', [Validators.required]),
      endDay: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required, Validators.min(4)]),
      total: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  createContract() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract);
    this.contractForm.reset();
    this.route.navigate(['/contract/list']);
  }
}
