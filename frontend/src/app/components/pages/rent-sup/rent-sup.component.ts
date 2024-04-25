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

  minDate: Date;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.minDate = new Date();
    this.minDate.setHours(0, 0, 0, 0);
  }

  ngOnInit() {
    this.rentSupsForm = this.formBuilder.group({
      numberSups: ['', [Validators.required]],
      selectedDate: ['', [Validators.required]],
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
    console.log(this.rentSupsForm.value);
  }
}
