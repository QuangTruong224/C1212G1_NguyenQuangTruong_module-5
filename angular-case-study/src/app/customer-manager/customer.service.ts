import {Injectable} from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }

  saveCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customers', customer);
  }

  // findById(id: string) {
  //   return this.customers.find(customer => customer.id === id);
  // }
  public findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customers/${id}`, customer);
  }

  // updateCustomer(customerId: string, customer: Customer) {
  //   for (let i = 0; i < this.customers.length; i++) {
  //     if (this.customers[i].id === customerId) {
  //       this.customers[i] = customer;
  //     }
  //   }
  // }

  // deleteCustomer(customerId: string) {
  //   for (let i = 0; i < this.customers.length; i++) {
  //     if (this.customers[i].id === customerId) {
  //       this.customers.splice(i, 1);
  //     }
  //   }
  // }
  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  }

  search(value: any, value2: any, value3: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/customers?customerName_like=${value}&phone_like=${value2}&customerType_like=${value3}`);
  }
}
