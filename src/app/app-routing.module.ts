import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { HereComponent } from './here/here.component';
import { LoginComponent } from './login/login.component';
import { LoginheaderComponent } from './loginheader/loginheader.component';

import { authGuard } from './guards/auth.guard';
import { SectionComponent } from './section/section.component';
import { DyamicformComponent } from './dyamicform/dyamicform.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormdataComponent } from './formdata/formdata.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { UserComponent } from './user/user.component';
import { RegchildComponent } from './regchild/regchild.component';
import { ContactchildComponent } from './contactchild/contactchild.component';




const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
   {path:'main',component:MainComponent},
   {path:'header',component:HeaderComponent},
{path:'here',component:HereComponent,canActivate:[authGuard] },
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'contactus',component:ContactusComponent}, 
   {path: 'signup', component: RegistrationComponent},
{path:'login',component:LoginComponent},
  {path:'product-list',component:ProductListComponent},
  {path:'loginheader',component:LoginheaderComponent},
  {path:'section',component:SectionComponent},
  {path:'dynamic-form',component:DyamicformComponent},
  {path:'employee', component:EmployeeComponent}, 
  {path:'formdata',component:FormdataComponent},
  {path:'parent',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'user', component:UserComponent},
  {path:'reg',component:RegchildComponent},
  {path:'cchild',component:ContactchildComponent},
  {path:'new',loadChildren:()=>import('./new/new.module').then(m=>m.NewModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
// 