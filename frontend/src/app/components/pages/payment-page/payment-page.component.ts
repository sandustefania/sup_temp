import { Component } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../shared/models/Order';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TitleComponent } from '../../partials/title/title.component';
import { MapComponent } from '../../partials/map/map.component';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { PaypalButtonComponent } from '../../partials/paypal-button/paypal-button.component';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    MapComponent,
    OrderItemsListComponent,
    PaypalButtonComponent,
  ],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss',
})
export class PaymentPageComponent {
  newOrder: Order = new Order();
  constructor(private orderService: OrderService, router: Router) {
    this.orderService.getNewOrderForCurrentUser().subscribe({
      next: (newOrder) => (this.newOrder = newOrder),
      error: () => router.navigateByUrl('/checkout'),
    });
  }
}
