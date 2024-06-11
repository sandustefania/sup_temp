import { Component } from '@angular/core';
import { SupService } from '../../../services/sup.service';
import { CommonModule } from '@angular/common';
import { IContactUs } from '../../../shared/interfaces/IContactUs';
import { TitleComponent } from '../../partials/title/title.component';

@Component({
  selector: 'app-view-messages-page',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './view-messages-page.component.html',
  styleUrl: './view-messages-page.component.scss',
})
export class ViewMessagesPageComponent {
  messages: IContactUs[] = [];

  constructor(private supService: SupService) {}

  ngOnInit() {
    this.supService
      .getMessages()
      .subscribe((serverMessages) => (this.messages = serverMessages));
  }
}
