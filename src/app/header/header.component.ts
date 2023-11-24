import { Component, ElementRef, Renderer2 } from '@angular/core';
import { HeroService } from '../hero.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
