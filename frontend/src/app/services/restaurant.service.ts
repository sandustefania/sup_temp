import { Injectable } from '@angular/core';
import { IContactUs } from '../shared/interfaces/IContactUs';
import { HttpClient } from '@angular/common/http';
import { CONTACT_US_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  contactUs(contactUsForm: IContactUs) {
    console.log(contactUsForm);
    return this.http.post<IContactUs>(CONTACT_US_URL, contactUsForm);
  }
}
