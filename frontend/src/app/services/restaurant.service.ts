import { Injectable } from '@angular/core';
import { IContactUs } from '../shared/interfaces/IContactUs';
import { HttpClient } from '@angular/common/http';
import {
  ADD_MESSAGE_URL,
  ADD_REVIEW_URL,
  GET_MESSAGES_URL,
  GET_REVIEWS_URL,
} from '../shared/constants/urls';
import { Observable } from 'rxjs';
import { IReview } from '../shared/interfaces/IReview';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private http: HttpClient) {}

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
}
