export class Person {
    name : string;
    dob : string;
    address : string;
  
    constructor(_name : string, _dob : string,_address : string) {
        this.name = _name;
        this.dob = _dob; 
        this.address = _address;
    }

    toDetails(){
        return 'Hi my name is ' + this.name + '. I\'m resident of ' + this.address + '. I\'m born on ' + this.dob + '.';
    }
  }