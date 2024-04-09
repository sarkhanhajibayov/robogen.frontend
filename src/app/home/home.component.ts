import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './fixed-part/header/header.component';
import { HeaderMenuComponent } from './fixed-part/header-menu/header-menu.component';
import { FooterComponent } from './fixed-part/footer/footer.component';
import { SubscribeComponent } from './fixed-part/subscribe/subscribe.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
    SubscribeComponent,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
