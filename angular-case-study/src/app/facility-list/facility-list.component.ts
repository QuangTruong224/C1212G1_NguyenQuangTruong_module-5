import { Component, OnInit } from '@angular/core';
import {Facility} from '../model/facility';

@Component({
  selector: 'app-service-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility [] = [];
  constructor() {
    // tslint:disable-next-line:max-line-length
    this.facilities.push({facilityId: 'DV-001', facilityName: 'Phòng suite hướng biển', area: '85m', cost: '500$', maxPeople: '10', type: 'Room',
    standard: 'vip', other: 'Có hồ bơi', poolArea: '500', floor: '10'});
    // tslint:disable-next-line:max-line-length
    this.facilities.push({facilityId: 'DV-002', facilityName: 'Phòng superior hướng hồ', area: '47.1m', cost: '700$', maxPeople: '10', type: 'Room',
      standard: 'vip', other: 'Có hồ bơi', poolArea: '500', floor: '10'});
    // tslint:disable-next-line:max-line-length
    this.facilities.push({facilityId: 'DV-003', facilityName: 'Phòng Deluxe hướng biển', area: '50.1m', cost: '520$', maxPeople: '10', type: 'Room',
      standard: 'Normal', other: 'Có hồ bơi', poolArea: '500', floor: '10'});

  }

  ngOnInit(): void {
  }

}
