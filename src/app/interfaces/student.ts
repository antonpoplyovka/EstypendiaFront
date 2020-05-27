export class Student {
    id?: number;
    name?: string;
    surname?: string;
    fatherName?: string;
    email?: string;
    placeOfBirth?: string;
    countryOfBirth?: string;
    nationality?: string;
    nationalityOfBirth?: string;
    addressOfResidence?: number;
    actualAddress?: number;
    addressType?: number;
    typeOfStudent?: number;


  // tslint:disable-next-line:max-line-length
  constructor(name: string, surname: string, fatherName: string, email: string, placeOfBirth: string, countryOfBirth: string, nationality: string, nationalityOfBirth: string, addressOfResidence: number, actualAddress: number, addressType: number, typeOfStudent: number) {
    this.name = name;
    this.surname = surname;
    this.fatherName = fatherName;
    this.email = email;
    this.placeOfBirth = placeOfBirth;
    this.countryOfBirth = countryOfBirth;
    this.nationality = nationality;
    this.nationalityOfBirth = nationalityOfBirth;
    this.addressOfResidence = addressOfResidence;
    this.actualAddress = actualAddress;
    this.addressType = addressType;
    this.typeOfStudent = typeOfStudent;
  }

}
