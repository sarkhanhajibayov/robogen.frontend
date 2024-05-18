import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialog } from '../admin/dialogs/messageDialog/message-dialog';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  myAppUrl:string = "https://localhost:7209/api/";

  constructor(private http:HttpClient,private dialog: MatDialog
  ) { }

  getProducts():Observable<any>{
    let url = this.myAppUrl + "Products/get-all";
    return this.http.get(url).pipe(
      map(
        res => res
      )
    )
  }

  deleteProduct(id:number):Observable<any>{
    let url = this.myAppUrl + "Products/delete-product/" + id;
    return this.http.delete(url).pipe(
      map(
        res => res
      )
    )
  }

  addProduct(model: any): Observable<any> {
    let url = this.myAppUrl + "Products/add-product";
    return this.http.post<any>(url, model);
  }

  getSeries():Observable<any>{
    let url = this.myAppUrl + "Serie/get-all";
    return this.http.get(url).pipe(
      map(
        res => res
      )
    )
  }

  getThemes():Observable<any>{
    let url = this.myAppUrl + "Theme/get-all";
    return this.http.get(url).pipe(
      map(
        res => res
      )
    )
  }

  getGenders():Observable<any>{
    let url = this.myAppUrl + "Gender/get-all";
    return this.http.get(url).pipe(
      map(
        res => res
      )
    )
  }

  getAgeGroups():Observable<any>{
    let url = this.myAppUrl + "AgeGroup/get-all";
    return this.http.get(url).pipe(
      map(
        res => res
      )
    )
  }
  public messageDialog(text: string, isRefresh: boolean) {
    this.dialog.open(MessageDialog, {
      width: '500px',
      position: {
        top: '10px',
      },
      data: { Text: `${text}`, isRefresh: isRefresh },
      autoFocus: false,
    });
  }
}
