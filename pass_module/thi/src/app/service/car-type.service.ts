import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarType} from '../model/car-type';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {

  constructor(private http: HttpClient) {
  }

  findAllCarType(): Observable<CarType[] | any> {
    return this.http.get(API_URL + `/carTypes/list`);
  }
}
