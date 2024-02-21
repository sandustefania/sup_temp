import { Component } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { CommonModule } from '@angular/common';
import { IContactUs } from '../../../shared/interfaces/IContactUs';

@Component({
  selector: 'app-view-messages-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-messages-page.component.html',
  styleUrl: './view-messages-page.component.scss',
})
export class ViewMessagesPageComponent {
  messages: IContactUs[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService
      .getMessages()
      .subscribe((serverMessages) => (this.messages = serverMessages));
  }
}
