import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  todos:any;
  
  constructor(private productService: ProductService,private router: Router) { }
  ngOnInit(): void {
    this.productService.getProduct().subscribe(data=>{
      this.todos=data;
      console.log("====",this.todos)
      // const todosString = JSON.stringify(this.todos);
      // localStorage.setItem("TodoList", todosString);
      
    });
 
  
  }
  
  
}
