import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{
  contactForm!: FormGroup; 
  submitted = false;
  // submitData: any[]=[];
 @Output() formSubmitted = new EventEmitter<any>();
  newData: any;
 
  constructor(private fb:FormBuilder,private hero:HeroService){
    this.contactForm=this.fb.group({
      fname : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      Email:['',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
       textarea :['',[Validators.required]]
    });

      }
  ngOnInit(){
    this.hero.joblist$.subscribe((data) => {      
      // Handle data received from CompC     
      this.newData = data;
      this.displayValuesInForm();
  }  )
}
  //it will return total reactive form fields
get regFormControl() {
  return this.contactForm.controls;
}
onSubmit() {
  this.submitted = true;
  if (this.contactForm.valid) {
    console.table(this.contactForm.value);
    const formValues=this.contactForm.value;
    this.formSubmitted.emit(formValues)
    // this.submitData.push(formValues)

    this.contactForm.reset();
  } 
 else {

   console.log('ffsdfsdgfdgfd')

   this.contactForm.markAllAsTouched();

 }
}
displayValuesInForm() {
  if (this.newData) {
  this.contactForm.patchValue({
    fname: this.newData.fname,
    Email: this.newData.Email,
    textarea: this.newData.textarea
  });
  }
}}
