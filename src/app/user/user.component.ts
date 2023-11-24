import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

 
  todos: any;
  userForm: any;
  submitted= false;
  selectedId: number|undefined;
  singleEntry:any;
 
  constructor(private crud:CrudService, private route:Router,private fb:FormBuilder){

  this.userForm=this.fb.group({
    userId:['',[Validators.required]],
      id :['',Validators.required],
    title :['',[Validators.required]],
    completed:['',[Validators.required]]
  })

  
}
  ngOnInit():void{

  this.getallUsers();


  }
  //getting the data from API
  getallUsers(){
    this.crud.getUser().subscribe(data=>{
      this.todos=data;//insted of tod's i can give it anything
      console.log("====",this.todos);
    })
    // this.todos.sort((a: any, b:any) => (a.id > b.id) ? 1 : -1);

  }
  onSubmit() {
     this.submitted = true;
      if (this.userForm.valid) {
       this.adddata();
        }
    
     else {
      console.log('ffsdfsdgfdgfd')  
       this.userForm.markAllAsTouched();
     }
 }
//posting the data
    adddata() {
      const postData = this.userForm.value;
      this.crud.postUser(postData).subscribe((data:any) => {
        console.log(data,'data3333');
       
        this.getallUsers();
      });
    }
   //updating the data
      updatingData(){
        
        const newData=this.userForm.value;
        this.crud.updateData(newData).subscribe((data:any)=>{
          console.log('update data:', data);
          this.getallUsers()
        })
       
      }
      //deleting the data
      deletingData(id: number){
        // const newDel=this.userForm.value;
        console.log(id)
        this.crud.delete(id).subscribe((data:any)=>{

          console.log('delete data:', data)

          this.getallUsers()
        })
      }
      //this is for viewing the data;parent to child
      onViewClick(userinfo: any){
        console.log(userinfo)
        this.singleEntry = userinfo;
   
    }
     
    onUser(){
      this.submitted =true;
      if(this.userForm.valid){
        this.updatingData();
      }
      else{
        console.log('enter the values in form');
      }
    }
      }
    
    

   

    

