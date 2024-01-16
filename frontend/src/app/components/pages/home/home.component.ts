import { Component, NgModule } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../partials/search-bar/search-bar.component';
import { TagsComponent } from '../../partials/tags/tags.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    StarRatingModule,
    FormsModule,
    SearchBarComponent,
    TagsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [StarRatingConfigService],
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      //tags
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else this.foods = foodService.getAll();
    });
  }

  ngOnInit() {}
}
