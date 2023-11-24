import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  @Output() userSubmitted = new EventEmitter<any>();
   
  regForm!: FormGroup; 
  submitted = false;
  submittedData: any[]=[]
  receivedData: any;
  childData: any;
 
  constructor(private fb:FormBuilder,private router: Router,private hero:HeroService){
    
    this.regForm=this.fb.group({
      fname : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      lname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      Email : ['',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      uname : ['', [Validators.required, Validators.minLength(3),Validators.maxLength(25)]],
    pwd :['',[Validators.required, Validators.minLength(3)]],
      pwd2 : ['', [Validators.required, Validators.minLength(3)]],
      mobilenumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      city:['',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
  check:['',[Validators.required]]
  
    });
    

   }
 
  ngOnInit(){
    // this.receivedData = this.hero.getData();
    this.hero.compCData$.subscribe((data) => {      
      // Handle data received from CompC     
      this.childData = data;
      this.displayValuesinForm();
  }  )
}
  get regFormControl() {
    return this.regForm.controls;
  }

  onSubmit() {
    console.log(this.regForm)
    this.submitted = true;
    if (this.regForm.valid) {
     
      const formValues = this.regForm.value;
      // console.table(formValues); // Log the form values
    
      this.userSubmitted.emit(formValues);

      // this.submittedData.push(formValues)
   
      console.table(formValues); // Log the form values
      // this.submittedData.push(formValues);
      //  console.table(this.regForm.value);
     
     this.regForm.reset();
    }
   else {

     console.log('ffsdfsdgfdgfd')

     this.regForm.markAllAsTouched();

   }
  }
  displayValuesinForm(){
    if (this.childData) {
   this.regForm.patchValue({
    fname: this.childData.fname,
    lname:this.childData.lname,
    Email: this.childData.Email,
    uname:this.childData.uname,
    pwd:this.childData.pwd,
    pwd2:this.childData.pwd2,
    mobilenumber: this.childData.mobilenumber,
    city:this.childData.city

   })
  }}
  }


