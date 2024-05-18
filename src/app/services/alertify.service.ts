import { Injectable } from '@angular/core';
import * as alertifyjs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  message(text:string,messageType:MessageTypes,position : Position = Position.BottomCenter,delay:number = 3){
    alertifyjs.set('notifier','delay', delay);
    alertifyjs.set('notifier','position', position);
    alertifyjs[messageType](text);
  }
}

export enum MessageTypes{
  Error = "error",
  Message = "message",
  Success = "success",
  Warning = "warning",
  Notify = "notify"
}
export enum Position {
  TopRight = 'top-right',
  TopCenter = 'top-center',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left'
}
