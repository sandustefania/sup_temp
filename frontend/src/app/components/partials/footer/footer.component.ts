import { Component } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { IEmail } from '../../../shared/interfaces/IEmail';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  constructor(
    private restaurantService: RestaurantService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  addEmailNewsletter(email: string) {
    this.restaurantService.addEmailNewsletter({ email }).subscribe(() => {
      this.toastrService.success('Review SENT!');
      this.router.navigateByUrl('/');
    });
  }
}
