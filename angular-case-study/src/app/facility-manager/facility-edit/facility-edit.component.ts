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
  id: string;

  constructor(private route: Router, private facilityService: FacilityService,
              private activceRoute: ActivatedRoute) {
    activceRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getFacility(this.id);
    });
    this.facilityForm = new FormGroup({
      id: new FormControl(''),
      facilityName: new FormControl('', [Validators.required]),
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

  getFacility(id: string) {
    return this.facilityService.findById(id).subscribe(facility => {
      this.facilityForm.patchValue(facility);
    });
  }

  updateFacility(id: string) {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility).subscribe(() => {
      // alert('successful');
    }, e => {
      // console.log(e);
    }, () => {
      this.route.navigate(['facility/list']);
    });
  }
}
