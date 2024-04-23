import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-rent-sup',
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatCardModule],
  templateUrl: './rent-sup.component.html',
  styleUrl: './rent-sup.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class RentSupComponent {
  minDate: Date;
  constructor(private userService: UserService) {
    this.minDate = new Date();
    this.minDate.setHours(0, 0, 0, 0);
  }
  ngOnInit() {}
  numberSupsAvailable: number = 10;
  selectedDate: Date | null = new Date();
  datePipe = new DatePipe('en-US');

  select(e: any) {
    const date = this.datePipe.transform(e, 'dd/MM/yyyy');
  }
}
