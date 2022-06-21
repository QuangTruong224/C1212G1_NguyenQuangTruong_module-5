import {Customer} from './customer';
import {Facility} from './facility';

export interface Contract {
  id: string;
  customerName: Customer;
  serviceName: Facility;
  startDay: string;
  endDay: string;
  deposit: string;
  total: string;
}
