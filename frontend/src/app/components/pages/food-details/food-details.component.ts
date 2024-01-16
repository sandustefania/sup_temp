import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [StarRatingModule, CommonModule, RouterLink],
  templateUrl: './food-details.component.html',
  styleUrl: './food-details.component.scss',
  providers: [StarRatingConfigService],
})
export class FoodDetailsComponent {
  foodDetails!: Food;

  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) this.foodDetails = foodService.getFoodById(params.id);
    });
  }
}
