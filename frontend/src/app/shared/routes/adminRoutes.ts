import { Route } from '@angular/router';
import { AdminPageComponent } from '../../components/pages/admin-page/admin-page.component';
import { ViewMessagesPageComponent } from '../../components/pages/view-messages-page/view-messages-page.component';
import { ViewReviewsPageComponent } from '../../components/pages/view-reviews-page/view-reviews-page.component';

export const ADMIN_ROUTES: Route[] = [
  { path: '', component: AdminPageComponent },
  // {path:'/add-food-item',component:},
  { path: 'view-reviews', component: ViewReviewsPageComponent },
  { path: 'view-messages', component: ViewMessagesPageComponent },
];
