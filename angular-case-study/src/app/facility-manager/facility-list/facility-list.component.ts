import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility [] = [];
  idDelete: string;
  nameDelete: string;

  constructor(private facilityService: FacilityService, private route: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilities = this.facilityService.getAll();
  }

  deleteModal(facilityId: string, facilityName: string) {
    this.idDelete = facilityId;
    this.nameDelete = facilityName;
  }

  deleteFacility(facilityId: string) {
    this.facilityService.deleteFacility(facilityId);
    this.route.navigate(['/facility/list']);
  }
}
