import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { StarRating, StarRatingModule } from 'angular-star-rating';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), importProvidersFrom()],
});
