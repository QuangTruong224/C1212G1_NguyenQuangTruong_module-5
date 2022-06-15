import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityService} from '../facility.service';

@Component({
  selector: 'app-service-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  facilityId: string;

  constructor(private route: Router, private facilityService: FacilityService,
              private activceRoute: ActivatedRoute) {
    this.activceRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.facilityId = paramMap.get('facilityId');
      const facility = this.getFacility(this.facilityId);
      this.facilityForm = new FormGroup({
        facilityId: new FormControl(facility.facilityId, [Validators.required]),
        facilityName: new FormControl(facility.facilityName, [Validators.required, Validators.pattern('[A-Za-z]{4,50}')]),
        area: new FormControl(facility.area, [Validators.required]),
        cost: new FormControl(facility.cost, [Validators.required]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required]),
        type: new FormControl(facility.type, [Validators.required]),
        standard: new FormControl(facility.standard, [Validators.required]),
        other: new FormControl(facility.other, [Validators.required]),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.pattern('^[1-9]+$')]),
        floor: new FormControl(facility.floor, [Validators.required, Validators.pattern('^[1-9]+$')]),
        url: new FormControl(facility.url)
      });
    });
  }

  ngOnInit(): void {
  }

  getFacility(facilityId: string) {
    return this.facilityService.findById(facilityId);
  }

  updateFacility(facilityId: string) {
    const facility = this.facilityForm.value;
    console.log(facility);
    this.facilityService.updateFacility(facilityId, facility);
    this.route.navigate(['/facility/list']);
    // alert('Cập nhật thành công');
  }
}
