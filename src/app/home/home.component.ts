import { Component } from '@angular/core';
import { HeaderComponent } from './fixed-part/header/header.component';
import { HeaderMenuComponent } from './fixed-part/header-menu/header-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeaderMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
