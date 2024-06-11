import { Routes } from '@angular/router';
import { EventDetailsComponent } from './components/pages/event-details/event-details.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { authGuard } from './auth/guards/auth.guard';
import { ContactUsPageComponent } from './components/pages/contact-us-page/contact-us-page.component';
import { isAdminGuard } from './auth/guards/isAdmin.guard';
import { ReviewsPageComponent } from './components/pages/review-page/reviews-page.component';
import { RentSupComponent } from './components/pages/rent-sup/rent-sup.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { DespreNoiComponent } from './components/pages/despre-noi/despre-noi.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EventsComponent } from './components/pages/events-page/events.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'event/:id', component: EventDetailsComponent },
  { path: 'cart-page', component: CartComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact-us', component: ContactUsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'reviews', component: ReviewsPageComponent },
  { path: 'rent-sup', component: RentSupComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'despre-noi', component: DespreNoiComponent },

  {
    path: 'admin-page',
    loadChildren: () =>
      import('./shared/routes/adminRoutes').then((r) => r.ADMIN_ROUTES),
  },
];
