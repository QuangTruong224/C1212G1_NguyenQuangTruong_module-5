import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarRegister} from '../model/car-register';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CarRegisterService {

  constructor(private  http: HttpClient) {
  }

  getAll(): Observable<CarRegister[]> {
    return this.http.get<CarRegister[]>(API_URL + '/carRegister/list');
  }

  findById(id: number): Observable<CarRegister | any> {
    return this.http.get(`${API_URL}/carRegister/findById?id=${id}`);
  }

  update(id: number, carRegister: CarRegister): Observable<CarRegister | any> {
    return this.http.put(`${API_URL}/carRegister/edit/${id}`, carRegister);
  }

  delete(id: number): Observable<CarRegister | any> {
    return this.http.delete(`${API_URL}/carRegister/delete/${id}`);
  }

  create(newCar: CarRegister): Observable<CarRegister | any> {
    return this.http.post(API_URL + '/carRegister/create', newCar);
  }
}
