import { Component } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent {
  images = ['/assets/kpt1.png','/assets/kpt2.png','/assets/kpt3.png','/assets/kpt4.png'];
}
