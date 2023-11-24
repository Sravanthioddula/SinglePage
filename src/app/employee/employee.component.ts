import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  empForm!: FormGroup;
  submitted =false;
  todos: any;
  constructor(private fb:FormBuilder,private router: Router, private productService:ProductService){
    this.empForm=this.fb.group({
    userId:['',[Validators.required]],
    id :[],
    title :['',[Validators.required]],
    completed:['',[Validators.required]]
  
    });
    
  }
  ngOnInit(){}  
  
  // get loginFormControl() {
  //   return this.empForm.controls;
  // }
  getData(): any[] {
    const data = localStorage.getItem("TodoList");
    return data ? JSON.parse(data) : [];
  }

  onSubmit() {
    this.submitted = true;
    if (this.empForm.valid) {
      // console.table(this.empForm.value);
      const postData =this.empForm.value;
      this.productService.updateJobList(postData);
      
        alert('successfullyt submitted')
      this.empForm.reset()

    }
   else {
    console.log('ffsdfsdgfdgfd')
     this.empForm.markAllAsTouched();
   }


  }

}
// this.productService.postProduct(postData).subscribe(data=>{
      //   console.log('POST response:', data);
      //   localStorage.setItem('postData', JSON.stringify(this.empForm.value));
      //   this.todos=data;
      //    this.router.navigate(['/here']);
      //   })
        // this.productService.addData(postData);
        // this.loadData();
      
        // const data:any = this.getData();
        // data.push(this.empForm.value);
        // const todosString = JSON.stringify(data);
        // localStorage.setItem("TodoList", todosString);     
     