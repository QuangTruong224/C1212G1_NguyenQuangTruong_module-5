import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import {CarStation} from '../model/car-station';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CarStationService {


  constructor(private http: HttpClient) {
  }

  findAllCarStation(): Observable<CarStation[] | any> {
    return this.http.get(API_URL + `/carStation/list`);
  }

}
