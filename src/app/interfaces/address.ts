export class Address {
    id?: number;
    code?: string;
    street?: string;
    district?: string;
    voivodeship?: string;
    city?: string;
    country?: string;
    phone?: string;
    houseNumber?: string;
    flatNumber?: string;

 // tslint:disable-next-line:max-line-length
    constructor(id: number, code: string, street: string, district: string, voivodeship: string, city: string, country: string, phone: string, houseNumber: string, flatNumber: string) {
        this.id = id;
        this.code = code;
        this.street = street;
        this.district = district;
        this.voivodeship = voivodeship;
        this.city = city;
        this.country = country;
        this.phone = phone;
        this.houseNumber = houseNumber;
        this.flatNumber = flatNumber;
    }
}
