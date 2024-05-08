import { Injectable } from '@angular/core';
import { IContactUs } from '../shared/interfaces/IContactUs';
import { HttpClient } from '@angular/common/http';
import {
  ADD_EMAIL_NEWSLETTER_URL,
  ADD_FOOD_ITEM_URL,
  ADD_MESSAGE_URL,
  ADD_RENT_SUPS_URL,
  ADD_REVIEW_URL,
  DELETE_FOOD_ITEM_URL,
  GET_EMAIL_NEWSLETTER_URL,
  GET_MESSAGES_URL,
  GET_REVIEWS_URL,
  WEATHER_URL,
} from '../shared/constants/urls';
import { Observable } from 'rxjs';
import { IReview } from '../shared/interfaces/IReview';
import { IEmail } from '../shared/interfaces/IEmail';
import { IRentSup } from '../shared/interfaces/IRentSup';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

  addFoodItem(foodItem: any) {
    return this.http.post(ADD_FOOD_ITEM_URL, foodItem);
  }

  deleteFoodItem(foodId: any): Observable<any> {
    return this.http.delete(DELETE_FOOD_ITEM_URL + foodId);
  }

  addMessage(contactUsForm: IContactUs) {
    return this.http.post<IContactUs>(ADD_MESSAGE_URL, contactUsForm);
  }

  getMessages(): Observable<IContactUs[]> {
    return this.http.get<IContactUs[]>(GET_MESSAGES_URL);
  }

  addReview(reviewForm: IReview) {
    return this.http.post<IReview>(ADD_REVIEW_URL, reviewForm);
  }

  getReviews(): Observable<IReview[]> {
    return this.http.get<IReview[]>(GET_REVIEWS_URL);
  }

  addEmailNewsletter(email: IEmail) {
    return this.http.post<IEmail>(ADD_EMAIL_NEWSLETTER_URL, email);
  }

  getEmailNewsletter(): Observable<IEmail[]> {
    return this.http.get<IEmail[]>(GET_EMAIL_NEWSLETTER_URL);
  }

  loadCurrentWeather(): Observable<any> {
    return this.http.get(WEATHER_URL);
  }

  addRentSups(rentSupForm: IRentSup): Observable<any> {
    return this.http.post<any>(ADD_RENT_SUPS_URL, rentSupForm);
  }
}
