import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RestaurantService } from '../../../services/restaurant.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-rent-sup',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './rent-sup.component.html',
  styleUrl: './rent-sup.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class RentSupComponent {
  rentSupsForm!: FormGroup;
  currentUser!: User;
  minDate: Date;
  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private toastrService: ToastrService,
    private userService: UserService
  ) {
    this.minDate = new Date();
    this.minDate.setHours(0, 0, 0, 0);
  }

  ngOnInit() {
    this.rentSupsForm = this.formBuilder.group({
      numberSups: ['1', [Validators.required]],
      selectedDate: [this.minDate, [Validators.required]],
    });
  }
  get fc() {
    return this.rentSupsForm.controls;
  }

  numberSupsAvailable: number = 10;

  datePipe = new DatePipe('en-US');

  select(e: any) {
    const date = this.datePipe.transform(e, 'dd/MM/yyyy');
  }

  submit() {
    let { name, email, phone } = this.userService.currentUser;
    console.log(this.rentSupsForm.value);
    this.restaurantService
      .addRentSups({
        numberSups: this.fc.numberSups.value,
        selectedDate: this.fc.selectedDate.value,
        userName: name,
        userEmail: email,
        userPhone: phone,
      })
      .subscribe({
        next: () => {},
        error: (error) => {
          console.log('SUP FAILED', error);
          this.toastrService.error('SUP FAILED:', error);
        },
      });
  }
}
