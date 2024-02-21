import { Component } from '@angular/core';
import { TitleComponent } from '../../partials/title/title.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RestaurantService } from '../../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ViewReviewsPageComponent } from '../view-reviews-page/view-reviews-page.component';

@Component({
  selector: 'app-reviews-page',
  standalone: true,
  imports: [
    TitleComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ViewReviewsPageComponent,
  ],
  templateUrl: './reviews-page.component.html',
  styleUrl: './reviews-page.component.scss',
})
export class ReviewsPageComponent {
  reviewForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  ngOnInit() {
    this.reviewForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      review: ['', Validators.required],
      rating: [10, Validators.required],
    });
  }

  get fc() {
    return this.reviewForm.controls;
  }

  submit() {
    this.restaurantService
      .addReview({
        name: this.fc.name.value,
        email: this.fc.email.value,
        review: this.fc.review.value,
        rating: this.fc.rating.value,
      })
      .subscribe(() => {
        this.toastrService.success('Review SENT!');
        this.router.navigateByUrl('/');
      });
  }
}
