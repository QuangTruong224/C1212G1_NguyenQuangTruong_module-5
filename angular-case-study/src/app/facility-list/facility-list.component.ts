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
    this.facilities.push({facilityId: 'DV-001', facilityName: 'Phòng Suite hướng biển', area: '85m', cost: '500$', maxPeople: '10', type: 'Room',
      // tslint:disable-next-line:max-line-length
    standard: 'vip', other: 'Có hồ bơi', poolArea: '500', floor: '10', url: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/722773/722773/160407105.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75'});
    // tslint:disable-next-line:max-line-length
    this.facilities.push({facilityId: 'DV-002', facilityName: 'Phòng Superior hướng hồ', area: '47.1m', cost: '700$', maxPeople: '10', type: 'Room',
      // tslint:disable-next-line:max-line-length
      standard: 'vip', other: 'Có hồ bơi', poolArea: '500', floor: '10', url: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/724017/724017/Bedroom.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75'});
    // tslint:disable-next-line:max-line-length
    this.facilities.push({facilityId: 'DV-003', facilityName: 'Phòng Deluxe hướng biển', area: '50.1m', cost: '520$', maxPeople: '10', type: 'Room',
      // tslint:disable-next-line:max-line-length
      standard: 'Normal', other: 'Có hồ bơi', poolArea: '500', floor: '10', url: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/722779/722779/63984540_XL.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75'});
    // tslint:disable-next-line:max-line-length
    this.facilities.push({facilityId: 'DV-003', facilityName: 'Phòng gác mái', area: '41m', cost: '450$', maxPeople: '10', type: 'Room',
      // tslint:disable-next-line:max-line-length
      standard: 'Normal', other: 'Có hồ bơi', poolArea: '500', floor: '10', url: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/723983/723983/FV_Bedroom3_Three_Bedroom_Villa.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75'});
    this.facilities.push({facilityId: 'DV-003', facilityName: 'Phòng Superior', area: '62.5m', cost: '1200$', maxPeople: '10', type: 'Room',
      // tslint:disable-next-line:max-line-length
      standard: 'Normal', other: 'Có hồ bơi', poolArea: '500', floor: '10', url: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/724017/724017/Bedroom.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75'});
    this.facilities.push({facilityId: 'DV-003', facilityName: 'Phòng Family', area: '75.5m', cost: '2250$', maxPeople: '10', type: 'Room',
      // tslint:disable-next-line:max-line-length
      standard: 'Normal', other: 'Có hồ bơi', poolArea: '500', floor: '10', url: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/722800/722800/128145956.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75'});
  }

  ngOnInit(): void {
  }

}
