import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CommonService } from '../../../services/common.service';
import { AlertifyService, MessageTypes } from '../../../services/alertify.service';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [MatPaginator,MatMenuModule,MatTableModule,MatSpinner],
  templateUrl: './series.component.html',
  styleUrl: './series.component.scss'
})
export class SeriesComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name',"operation"];
  dataSource:any;
  i:number = 0
  total!: number;
  pageSize: number = 10;
  currentPage: number = 0;
  showSpinner = true;
  constructor(private commonService:CommonService,public alertifyService:AlertifyService,
  ){}
  ngOnInit(): void {
    // this.getSeries();
    // this.alertifyService.message("Hi",MessageTypes.Error)
  }

  getSeries(){
    this.showSpinner = true
    this.commonService.getSeries().subscribe(res=>{this.dataSource=res,this,this.showSpinner=false})
  }
}
