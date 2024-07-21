export class Person {
    firstName : string;
    middlename : string;
    lastName : string;
    dob : string;
    address : string;
  
    constructor(_firstName : string, _middlename : string,_lastName : string,_dob : string,_address : string) {
        this.firstName = _firstName;
        this.middlename = _middlename;
        this.lastName = _lastName;
        this.dob = _dob; 
        this.address = _address;
    }

    toDetails(){
        return 'Hi my name is ' + this.firstName + ' ' + this.middlename + ' ' + this.lastName + '. Im resident of ' + this.address + '. Im born on ' + this.dob + '.';
    }
  }