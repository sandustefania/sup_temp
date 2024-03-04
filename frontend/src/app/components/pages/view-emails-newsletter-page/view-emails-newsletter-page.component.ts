import { Component } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { IEmail } from '../../../shared/interfaces/IEmail';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../partials/title/title.component';

@Component({
  selector: 'app-view-emails-newsletter-page',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './view-emails-newsletter-page.component.html',
  styleUrl: './view-emails-newsletter-page.component.scss',
})
export class ViewEmailsNewsletterPageComponent {
  emails: IEmail[] = [];
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService
      .getEmailNewsletter()
      .subscribe((serverEmails) => (this.emails = serverEmails));
  }
}
