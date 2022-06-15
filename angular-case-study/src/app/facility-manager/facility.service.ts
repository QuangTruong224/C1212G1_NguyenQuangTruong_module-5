import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilities: Facility[] = [
    {
      facilityId: 'DV-001',
      facilityName: 'Phòng Suite hướng biển',
      area: '85m',
      cost: '500$',
      maxPeople: '10',
      type: 'Room',
      standard: 'year',
      other: 'Có hồ bơi',
      poolArea: '500',
      floor: '10',
      // tslint:disable-next-line:max-line-length
      url: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/722773/722773/160407105.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75'
    },
    {
      facilityId: 'DV-002',
      facilityName: 'Phòng Superior hướng hồ',
      area: '47.1m',
      cost: '700$',
      maxPeople: '10',
      type: 'Room',
      standard: 'month',
      other: 'Có hồ bơi',
      poolArea: '500',
      floor: '10',
      // tslint:disable-next-line:max-line-length
      url: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/724017/724017/Bedroom.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75'
    },
    {
      facilityId: 'DV-003',
      facilityName: 'Phòng Deluxe hướng biển',
      area: '50.1m',
      cost: '520$',
      maxPeople: '10',
      type: 'Room',
      // tslint:disable-next-line:max-line-length
      standard: 'day',
      other: 'Có hồ bơi',
      poolArea: '500',
      floor: '10',
      // tslint:disable-next-line:max-line-length
      url: 'https://tbb-prod-apac.imgix.net/attachments/room_type_photos/images/722779/722779/63984540_XL.jpg?auto=format,compress&fit=crop&crop=entropy&w=1536&q=75'
    }

  ];

  constructor() {
  }

  getAll() {
    return this.facilities;
  }

  saveFacility(facility) {
    this.facilities.push(facility);
  }

  findById(facilityId: string) {
    return this.facilities.find(facility => facility.facilityId === facilityId);
  }

  updateFacility(facilityId: string, facility: Facility) {
    for (let i = 0; i < this.facilities.length; i++) {
      if (this.facilities[i].facilityId === facilityId) {
        this.facilities[i] = facility;
      }
    }
  }

  deleteFacility(facilityId: string) {
    for (let i = 0; i < this.facilities.length; i++) {
      if (this.facilities[i].facilityId === facilityId) {
        this.facilities.splice(i, 1);
      }
    }
  }
}
