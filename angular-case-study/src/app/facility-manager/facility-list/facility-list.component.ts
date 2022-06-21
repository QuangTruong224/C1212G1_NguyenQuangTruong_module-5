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
  p: number;

  constructor(private facilityService: FacilityService, private route: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  deleteModal(id: string, facilityName: string) {
    this.idDelete = id;
    this.nameDelete = facilityName;
  }

  deleteFacility(id: string) {
    this.facilityService.deleteFacility(id).subscribe(() => {
      // alert('Successful');
      this.ngOnInit();
    }, error => {

    }, () => {
      this.route.navigate(['/facility/list']);
    });
  }

  // deleteFacility(facilityId: string) {
  //   this.facilityService.deleteFacility(facilityId);
  //   this.route.navigate(['/facility/list']);
  // }
}
