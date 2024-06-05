import { Component } from '@angular/core';
import { IRentSup } from '../../../shared/interfaces/IRentSup';
import { RestaurantService } from '../../../services/restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-rent-sup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-rent-sup.component.html',
  styleUrl: './view-rent-sup.component.scss',
})
export class ViewRentSupComponent {
  rentSups: IRentSup[] = [];
  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getRentSup().subscribe((serverRentSups) => {
      this.rentSups = serverRentSups;
    });
  }
}
