import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators ,FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dyamicform',
  templateUrl: './dyamicform.component.html',
  styleUrls: ['./dyamicform.component.css']
})
export class DyamicformComponent implements OnInit {
  myForm: FormGroup;
  submitted = false ;

  constructor(private formBuilder: FormBuilder,private router: Router,private productservice:ProductService) {
    this.myForm = this.formBuilder.group({
      firstname :['',[Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      lastname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(25),Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email :['',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      pincode:['',[Validators.required,Validators.maxLength(6),Validators.minLength(6),Validators.pattern(/^[1-9][0-9]{5}$/)]],
      Description:['',[Validators.required]],
      entries: this.formBuilder.array([])
    });
}
  ngOnInit() {
    // const storedData = localStorage.getItem('storedFormData');
    // if (storedData) {
    //   this.productservice.setFormData(JSON.parse(storedData));
    // }
  }
get formEntries() {
  return (this.myForm.get('entries') as FormArray).controls;
}
// For Adding functinallity
addEntry() {
  const newEntry = this.formBuilder.group({
    fname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
    email :['',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    pincode:['',[Validators.required,Validators.maxLength(6),Validators.minLength(6),Validators.pattern(/^[1-9][0-9]{5}$/)]],
    Description:['',[Validators.required]],

  
  });
  (this.myForm.get('entries') as FormArray).push(newEntry);

}
//For Removing Functinality
removeEntry(index: number) {
  const entries = this.myForm.get('entries') as FormArray;
  if (index >= 0 && index < entries.length) {
    entries.removeAt(index);
  }
}
// for submitting form
onSubmit(){
  this.submitted = true;
    if (this.myForm.valid) {
      alert('form submitted successfully');
    
      console.table(this.myForm.value);
    console.table(this.myForm.get('entries')?.value);
    localStorage.setItem('formData', JSON.stringify(this.myForm.value));
    const formData = this.myForm.value;  // Main form data
    const entriesData = this.myForm.get('entries')?.value;  // Form array data
    const combinedData = {
      formData:formData,
      entriesData:entriesData,
    };
    localStorage.setItem('formData',JSON.stringify(combinedData));
        this.productservice.setFormData(combinedData);

     this.myForm.reset();
     this.router.navigate(['/section']);
    }
   else {

     console.log('ffsdfsdgfdgfd')

     this.myForm.markAllAsTouched();

   }
   
  }
  get myFormControl() { 
    return this.myForm.controls;
  }
}







