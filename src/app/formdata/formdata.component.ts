import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormdataComponent {
  localStorageData: any;
  constructor(private productService:ProductService){}
//   ngAfterViewInit() {
   
//   // this.localStorageData = JSON.parse(localStorage.getItem('TodoList') || '{}');
// this.getValues();
// this.productService.getDataObservable().subscribe((data) => {
//   this.localStorageData = data;
//   });
// }



// getValues(){
//   // this.localStorageData = JSON.parse(localStorage.getItem('TodoList') || '{}');
//   this.localStorageData = this.productService.getData();


// }
ngOnInit(){
  this.productService.jobList$.subscribe((list) => {
        this.localStorageData = list;
        console.log("==========",this.localStorageData)
      });

      
  }
}