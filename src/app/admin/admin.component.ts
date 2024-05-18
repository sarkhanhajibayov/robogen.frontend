import { Component } from '@angular/core';
import { SidebarComponent } from './fixed-part/sidebar/sidebar.component';
import { FooterComponent } from './fixed-part/footer/footer.component';
import { HeaderComponent } from './fixed-part/header/header.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './fixed-part/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [BreadcrumbComponent,SidebarComponent,FooterComponent,HeaderComponent,RouterOutlet,MatSidenavModule,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
