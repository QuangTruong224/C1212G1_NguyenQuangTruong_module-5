import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ContractService} from '../contract.service';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {
  contractForm: FormGroup;
  contractId: string;

  constructor(private contractService: ContractService,
              private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.contractId = paramMap.get('contractId');
      const contract = this.getContract(this.contractId);
      this.contractForm = new FormGroup({
        contractId: new FormControl(contract.contractId, [Validators.required]),
        customerName: new FormControl(contract.contractName, [Validators.required]),
        serviceName: new FormControl(contract.serviceName, [Validators.required]),
        startDay: new FormControl(contract.startDay, [Validators.required]),
        endDay: new FormControl(contract.endDay, [Validators.required]),
        deposit: new FormControl(contract.deposit, [Validators.required, Validators.min(4)]),
        total: new FormControl(contract.total, [Validators.required])
      });
    });

  }

  ngOnInit(): void {
  }

  getContract(contractId: string) {
    return this.contractService.findById(contractId);
  }

  updateContract(contractId: string) {
    const contract = this.contractForm.value;
    console.log(contract);
    this.contractService.updateContract(contractId, contract);
    this.route.navigate(['/contract/list']);
    // alert('Cập nhật thành công');
  }
}
