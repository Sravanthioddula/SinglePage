import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {

  storedFormData: any;
  constructor(private productservice: ProductService) {}
  ngOnInit() {
 
    this.storedFormData = this.productservice.getFormData();
    // console.log('Stored Form Data:', this.storedFormData);
  //   if (!this.storedFormData) {
  //     // Retrieve stored form data from local storage
  //     const storedData = localStorage.getItem('storedFormData');
  //     if (storedData) {
  //       this.storedFormData = JSON.parse(storedData);
  //       this.productservice.setFormData(this.storedFormData);
  //     }
  // }

  // }
  }
}
