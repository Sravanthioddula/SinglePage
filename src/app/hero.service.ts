import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  static login: any;
 
  private isLoggedIn = new BehaviorSubject("false");
  getMessage = this.isLoggedIn.asObservable();

   constructor() { }
 login(Email: string, pwd: string) {
    if(Email === 'sravanthi21@gmail.com' && pwd === '12345'){
      console.log("ydtr trdr")
      return 200;

    }
    else{
      return 403;
    }
  }
  
  private compCDataSubject = new BehaviorSubject<any>(null);   
  compCData$ = this.compCDataSubject.asObservable();  
   updateCompCData(data: any) {    
   this.compCDataSubject.next(data); 
   }
   private parentData = new BehaviorSubject<any>(null);   
  joblist$ = this.parentData.asObservable();  
   updateData(data: any) {    
   this.parentData.next(data); 
   }
}