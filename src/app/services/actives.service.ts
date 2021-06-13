import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivesService implements CanActivate {
  data:any;
  datas:any;
  
  
  constructor() {
    this.data = localStorage.getItem('Users');
        this.datas = JSON.parse(this.data);
  }

  canActivate():boolean{ 
      if(!this.data){
        window.location.href="login"
        return false
      }
      return true
  }
}