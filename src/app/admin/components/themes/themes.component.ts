import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CommonService } from '../../../services/common.service';
import { subscribe } from 'diagnostics_channel';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [MatPaginator,MatMenuModule,MatTableModule,MatSpinner],
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss'
})
export class ThemesComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name',"operation"];
  dataSource:any
  total!: number;
  pageSize: number = 10;
  currentPage: number = 0;
  showSpinner = true;
  constructor(public commonService:CommonService){

  }
  ngOnInit(): void {
    this.getThemes();
  }

  getThemes(){
    this.showSpinner = true
    this.commonService.getThemes().subscribe(res=>{this.dataSource=res,this.showSpinner = false;});
  }
  
}
