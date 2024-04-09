import { Component } from '@angular/core';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgDynamicBreadcrumbModule,FontAwesomeModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  breadcrumbConfig: object = {
    bgColor: '#eee',
    fontSize: '18px',
    fontColor: '#0275d8',
    lastLinkColor: '#000',
    symbol: ' / ',
  };
  faHouse=faHouse
}
