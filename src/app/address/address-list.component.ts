import { Component, OnInit } from '@angular/core';
import { Address } from '../interfaces/address';
import { Student } from '../interfaces/student';
import {StudentType} from '../interfaces/student-type';
import {HttpService} from '../services/http.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addressList: Address[];
  studentList: Student[];
  address = new Address( 0 ,  '' , '' , '' , '' , '' , '' , '', '', '');
  error: string;
  studentTypeList: StudentType[];

  constructor(private httpService: HttpService,  private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initEmptyAddress();
    this.getAddressReport();
    this.getStudentTypeList();
  }

  getAddressReport() {
    this.httpService.getAllAddresses().subscribe(addressController => {
      this.addressList = addressController;
      console.log(this.addressList);
    });
  }
  createNewAddress(){
    this.httpService.createNewAddress(this.address).subscribe(
      data => {
      },
      error => {
        this.error = error;
      });
  }

  getStudentTypeList(){
    this.httpService.getStudentTypes().subscribe(data => {
      this.studentTypeList = data;
      console.log(data);
    });
  }


   addressEntityReadyToSend(){
   return   this.address.code.length > 0
     && this.address.street.length > 0 && this.address.district.length > 0 && this.address.voivodeship.length > 0
     && this.address.city.length > 0 && this.address.country.length > 0 && this.address.phone.length > 0
     && this.address.houseNumber.length > 0;
   }

  initEmptyAddress(){

    this.address.id = 0;
    this.address.code = '';
    this.address.street = '';
    this.address.district = '';
    this.address.voivodeship = '';
    this.address.city = '';
    this.address.country = '';
    this.address.phone = '';
    this.address.houseNumber = '';
    this.address.flatNumber = '';
  }

  printAddress(){
    console.log(this.address);
  }
}
