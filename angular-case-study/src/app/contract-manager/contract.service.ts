import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts: Contract[] = [
    {
      contractId: 'HD-001', contractName: 'Nguyễn Quang Trường', serviceName: 'Phòng suite hướng biển', startDay: '2022-03-14',
      endDay: '2022-04-22', deposit: '5000000', total: '10000000'
    },

    {
      contractId: 'HD-002', contractName: 'Nguyễn Thị Hào', serviceName: 'Phòng superior hướng hồ', startDay: '2022-04-14',
      endDay: '2022-04-22', deposit: '3000000', total: '17000000'
    },
    {
      contractId: 'HD-003', contractName: 'Trần Tâm Đắc', serviceName: 'Phòng Deluxe hướng biển', startDay: '2022-06-24',
      endDay: '2022-07-22', deposit: '7000000', total: '14000000'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.contracts;
  }

  saveContract(contract) {
    this.contracts.push(contract);
  }

  findById(contractId: string) {
    return this.contracts.find(contract => contract.contractId === contractId);
  }

  deleteContract(contractId: string) {
    for (let i = 0; i < this.contracts.length; i++) {
      if (this.contracts[i].contractId === contractId) {
        this.contracts.splice(i, 1);
      }
    }
  }
}
