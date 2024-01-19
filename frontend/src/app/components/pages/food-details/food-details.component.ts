import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [StarRatingModule, CommonModule, RouterLink, NotFoundComponent],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss',
  providers: [StarRatingConfigService],
})
export class FoodDetailsComponent {
  foodDetails!: Food;

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.foodDetails = foodService.getFoodById(params.id);
    });
  }

  addToCart() {
    this.cartService.addToCart(this.foodDetails);
    this.router.navigateByUrl('/cart-page');
  }
}
