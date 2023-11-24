import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from '../product.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  // isAuthenticated: boolean = false;
  // users: any[] = [];

  // onUserSubmitted(userData: any) {
  //   this.users.push(userData);
  // }
  users: any[] = [];
  jobs: any[]=[];

  onUserSubmitted(userData: any) {
    this.users.push(userData);
  }
  onFormSubmitted(userData:any){
    this.jobs.push(userData)
  }
  title = 'Project';
  isCollapsed: boolean = true;
 


constructor(private el: ElementRef, private renderer: Renderer2) {

}
clickOutside() {

const dropdown = this.el.nativeElement.querySelector('#navbarNavDropdown');
if (dropdown.classList.contains('show')) {

dropdown.classList.remove('show')

 } else {

   console.log("Element doesn't have class");

    
   }
  }
  
 
}



