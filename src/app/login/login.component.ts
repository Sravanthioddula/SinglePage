import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup; 
  submitted = false;
  Email="";
  pwd="";
 
constructor(private fb:FormBuilder,private router: Router, private heroes: HeroService){
    this.loginForm=this.fb.group({
    Email :['',[Validators.required,Validators.email,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    pwd :['',[Validators.required, Validators.minLength(3)]],
  
    });
    
}
ngOnInit(){}  
  
  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      let res = this.heroes.login(this.Email, this.pwd);
      if (res === 200) {
        this.router.navigate(['here']);
        localStorage.setItem("email",this.loginForm.value.Email);
        localStorage.setItem("password",this.loginForm.value.pwd);

       
        this.loginForm.reset();

     
    //  this.loginForm.reset();
    }
 else if (res === 403) {
    alert('Authentication failed');
 
    this.router.navigate(['/login']);


  }
}
   else {

     console.log('ffsdfsdgfdgfd')

     this.loginForm.markAllAsTouched();

   }
  }
}


