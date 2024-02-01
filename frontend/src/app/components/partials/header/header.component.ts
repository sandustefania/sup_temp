import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  cartQuantity = 0;
  user!: User;
  constructor(cartService: CartService, private userService: UserService) {
    cartService
      .getCartObservable()
      .subscribe((newCart) => (this.cartQuantity = newCart.totalCount));
    userService.userObservable.subscribe((user) => (this.user = user));
  }

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    // const token = localStorage.getItem('accessToken');
    return this.user.id;
  }
}
