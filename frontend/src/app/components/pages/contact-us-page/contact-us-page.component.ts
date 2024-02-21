import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RestaurantService } from '../../../services/restaurant.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TitleComponent } from '../../partials/title/title.component';

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    TitleComponent,
  ],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.scss',
})
export class ContactUsPageComponent {
  contactUs!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  //daca este deja autentificat sau nu, autocompletam nume+email!!!

  ngOnInit() {
    this.contactUs = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get fc() {
    return this.contactUs.controls;
  }

  submit() {
    this.restaurantService
      .contactUs({
        name: this.fc.name.value,
        email: this.fc.email.value,
        message: this.fc.message.value,
      })
      .subscribe(() => {
        this.toastrService.success('Message SENT!');
        this.router.navigateByUrl('/');
      });
  }
}
