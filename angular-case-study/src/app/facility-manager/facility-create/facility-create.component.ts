import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Facility} from '../../model/facility';
import {Router} from '@angular/router';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm: FormGroup;
  facility: Facility[] = [];

  // private url: string | ArrayBuffer;

  constructor(private route: Router, private facilityService: FacilityService) {
    this.facilityForm = new FormGroup({
      facilityId: new FormControl('', [Validators.required]),
      facilityName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{4,50}')]),
      area: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      standard: new FormControl('', [Validators.required]),
      other: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+$')]),
      floor: new FormControl('', [Validators.required, Validators.pattern('^[1-9]+$')]),
      url: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  createFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    this.facilityForm.reset();
    this.route.navigate(['/facility/list']);
  }


  // onSelectFile(event) { // called each time file input changes
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //
  //     // tslint:disable-next-line:no-shadowed-variable
  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target.result;
  //     };
  //   }
  // }
}
