import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantService } from '../../../services/restaurant.service';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, HttpClientModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {
  constructor(private restaurantService: RestaurantService) {}
  display: google.maps.LatLngLiteral = {
    lat: 47.1682853512441,
    lng: 27.615145896301517,
  };
  center: google.maps.LatLngLiteral = {
    lat: 47.1682853512441,
    lng: 27.615145896301517,
  };
  zoom = 15;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  weatherData: any;

  getWeather() {
    this.restaurantService.loadCurrentWeather().subscribe((res) => {
      this.weatherData = res;
      console.log(res);
    });
  }
  getWeatherIconUrl(iconCode: string): string {
    return `http://openweathermap.org/img/wn/${iconCode}.png`;
  }

  ngOnInit() {
    this.getWeather();
  }
}
