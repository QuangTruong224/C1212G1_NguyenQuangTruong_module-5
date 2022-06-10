import { Component, OnInit } from '@angular/core';
import {Contract} from '../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract [] = [];
  constructor() {
    // tslint:disable-next-line:max-line-length
    this.contracts.push({contractId: 'HD-001', customerName: 'Nguyễn Quang Trường', serviceName: 'Phòng suite hướng biển', startDay: '2022-03-14',
      endDay: '2022-04-22', deposit: '5000000', total: '10000000'});
    // tslint:disable-next-line:max-line-length
    this.contracts.push({contractId: 'HD-002', customerName: 'Nguyễn Thị Hào', serviceName: 'Phòng superior hướng hồ', startDay: '2022-04-14',
      endDay: '2022-04-22', deposit: '3000000', total: '17000000'});
    this.contracts.push({contractId: 'HD-003', customerName: 'Trần Tâm Đắc', serviceName: 'Phòng Deluxe hướng biển', startDay: '2022-06-24',
      endDay: '2022-07-22', deposit: '7000000', total: '14000000'});

  }

  ngOnInit(): void {
  }

}
