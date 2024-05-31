import { Component, NgModule } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { StarRatingConfigService, StarRatingModule } from 'angular-star-rating';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../partials/search-bar/search-bar.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';
import { RestaurantService } from '../../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

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
    NotFoundComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [StarRatingConfigService],
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(
    public userService: UserService,
    private foodService: FoodService,
    private restaurantService: RestaurantService,
    private toastrService: ToastrService,
    activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    let foodsObservable: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      //tags
      else if (params.tag)
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
      else foodsObservable = foodService.getAll();

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }

  ngOnInit() {}

  deleteItem(foodId: any) {
    this.restaurantService.deleteFoodItem(foodId).subscribe({
      next: () => {
        this.toastrService.success('Item deleted');
        this.foodService.getAll().subscribe((serverFoods) => {
          this.foods = serverFoods;
        });
      },
      error: (error) => {
        this.toastrService.error(error.error, 'Cart');
      },
    });
  }
}
