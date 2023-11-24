import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { HomeCarouselComponent } from './home/home-carousel/home-carousel.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HereComponent } from './here/here.component';
import { LoginComponent } from './login/login.component';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { ClickOutsideDirectiveDirective } from './click-outside-directive.directive';
import { DyamicformComponent } from './dyamicform/dyamicform.component';
import { SectionComponent } from './section/section.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormdataComponent } from './formdata/formdata.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';
import { RegchildComponent } from './regchild/regchild.component';
import { ContactchildComponent } from './contactchild/contactchild.component';
import { NewModule } from './new/new.module';

@NgModule({
  declarations: [   
    AppComponent,
    MainComponent,
    RegistrationComponent,
    FooterComponent,
    HomeComponent,
    HomeCarouselComponent,
    ProductsComponent,
    ContactusComponent,
    AboutusComponent,
    ClickOutsideDirectiveDirective,
    ProductListComponent,
    HeaderComponent,
    HereComponent,
    LoginComponent,
    LoginheaderComponent,
    DyamicformComponent,
    SectionComponent,
    EmployeeComponent,
    FormdataComponent,
    ParentComponent,
    ChildComponent,
    UserComponent,
    RegchildComponent,
    ContactchildComponent,
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,ReactiveFormsModule,
    MatIconModule,
    NgbCarouselModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NewModule,
    MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
