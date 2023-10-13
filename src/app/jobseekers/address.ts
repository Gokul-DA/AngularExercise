export class Address {
  line1: string;
  line2: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
  stateOfResident: string;
  phoneNumber: number;
  alternateNumber: number;

  constructor(
    line1: string = '',
    line2: string = '',
    city: string = '',
    zipCode: string = '',
    state: string = '',
    country: string = '',
    stateOfResident: string = '',
    phoneNumber: number = 0,
    alternateNumber: number = 0
  ) {
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.zipCode = zipCode;
    this.state = state;
    this.country = country;
    this.stateOfResident = stateOfResident;
    this.phoneNumber = phoneNumber;
    this.alternateNumber = alternateNumber;
  }
}
