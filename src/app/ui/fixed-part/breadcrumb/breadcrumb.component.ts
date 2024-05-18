import { Component } from '@angular/core';
import { Ng7DynamicBreadcrumbModule } from 'ng7-dynamic-breadcrumb';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [Ng7DynamicBreadcrumbModule,FontAwesomeModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadcrumbConfig: object = {
    bgColor: '#transparent',
    fontSize: '12px',
    fontColor: 'red',
    lastLinkColor: 'blue',
    symbol: "/"
  };
  faHouse=faHouse
}
