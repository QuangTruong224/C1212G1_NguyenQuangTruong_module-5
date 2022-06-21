import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {Contract} from '../model/contract';
import {CustomerService} from '../customer-manager/customer.service';
import {FacilityService} from '../facility-manager/facility.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  contracts: Contract[] = [];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contracts');
  }

  saveContract(contract): Observable<Contract> {
    return this.http.post<Contract>(API_URL + '/contracts', contract);
  }

  deleteContract(id: string): Observable<Contract> {
    return this.http.delete<Contract>(`${API_URL}/contracts/${id}`);
  }
}
