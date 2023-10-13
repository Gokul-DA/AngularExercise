import { Address } from './address';
import { Jobdetails } from './jobdetails';

export class Jobseeker {
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  jobDetails: Jobdetails;
  uploadCV: string;

  constructor(
    firstName: string = '',
    lastName: string = '',
    email: string = '',
    address: Address = new Address(),
    jobDetails: Jobdetails = new Jobdetails(),
    uploadCV: string = ''
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.jobDetails = jobDetails;
    this.uploadCV = uploadCV;
  }
}
