import { Injectable } from '@angular/core';
import { Event } from '../shared/models/Event';
import { sample_events, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  EVENTS_BY_ID_URL,
  EVENTS_BY_SEARCH_URL,
  EVENTS_BY_TAG_URL,
  EVENTS_TAGS_URL,
  EVENTS_URL,
} from '../shared/constants/urls';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(EVENTS_URL);
  }

  getEventById(eventId: string): Observable<Event> {
    return this.http.get<Event>(EVENTS_BY_ID_URL + eventId);
  }
}
