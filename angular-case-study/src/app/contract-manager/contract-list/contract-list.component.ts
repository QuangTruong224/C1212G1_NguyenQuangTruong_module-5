import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../contract.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract [] = [];
  idDelete: string;
  nameDelete: string;

  constructor(private contractService: ContractService, private route: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contracts = this.contractService.getAll();
  }

  deleteModal(contractId: string, contractName: string) {
    this.idDelete = contractId;
    this.nameDelete = contractName;
  }

  deleteContract(contractId: string) {
    this.contractService.deleteContract(contractId);
    this.route.navigate(['/contract/list']);
  }
}
