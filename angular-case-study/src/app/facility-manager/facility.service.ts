import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilities: Facility[] = [];

  constructor(private http: HttpClient) {
  }

  // getAll() {
  //   return this.facilities;
  // }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facilities');
  }

  // saveFacility(facility) {
  //   this.facilities.push(facility);
  // }
  saveFacility(facility): Observable<Facility> {
    return this.http.post<Facility>(API_URL + '/facilities', facility);
  }


  public findById(id: string): Observable<Facility> {
    return this.http.get<Facility>(`${API_URL}/facilities/${id}`);
  }


  updateFacility(id: string, facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${API_URL}/facilities/${id}`, facility);
  }

  deleteFacility(id: string): Observable<Facility> {
    return this.http.delete<Facility>(`${API_URL}/facilities/${id}`);
  }

  // deleteFacility(facilityId: string) {
  //   for (let i = 0; i < this.facilities.length; i++) {
  //     if (this.facilities[i].id === facilityId) {
  //       this.facilities.splice(i, 1);
  //     }
  //   }
  // }
}
