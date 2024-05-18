import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {
  series:any
  themes:any
  ageGroups:any
  genders:any
  constructor(    public commonService:CommonService,
  ){

  }
  ngOnInit(): void {
    this.getSeries();
    this.getThemes()
    this.getGenders()
    this.getAgeGroups()

  }
  getSeries(){
    this.commonService.getSeries().subscribe(res=>this.series=res)
  }

  getThemes(){
    this.commonService.getThemes().subscribe(res=>this.themes=res);
  }

  getGenders(){
    this.commonService.getGenders().subscribe(res=>this.genders=res);
  }

  getAgeGroups(){
    this.commonService.getAgeGroups().subscribe(res=>this.ageGroups=res);
  }
}
