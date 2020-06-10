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
  searchText = '';
  showingAddressList: Address[] = [];
  addressList: Address[];
  studentList: Student[];
  edit = false;
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
  editAddress(){
    this.httpService.editAddress(this.address).subscribe(
      data => {
      },
      error => {
        this.error = error;
      });
  }
  getStudentTypeList(){
    this.httpService.getStudentTypes().subscribe(data => {
      this.studentTypeList = data;
      this.showingAddressList = this.addressList;
    });
  }
  prepareEditAddress(address: Address){
    this.address = address;
    this.edit = true;
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
  searchAddress() {
    if (this.searchText.length.valueOf() !== 0) {
      this.showingAddressList = [];
      this.addressList.map(address => {
        if (address.code.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || address.street.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || address.district.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || address.voivodeship.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || address.city.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || address.country.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || address.houseNumber.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
          || address.phone.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1
        ) {
          this.showingAddressList.push(address);
        }
      });
    } else {
      this.showingAddressList = this.addressList;
    }
  }
  printAddress(){
  }
}
