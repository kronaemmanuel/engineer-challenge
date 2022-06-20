import {Status} from "./badge.interface";

interface customer {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface policy {
  id: string;
  provider: string;
  insuranceType: string;
  status: Status;
  startDate: string;
  endDate: string | null;
  customer: customer;
}

