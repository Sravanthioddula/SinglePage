import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { CreaturesComponent } from './creatures/creatures.component';

const routes: Routes = [
  {path:'allusers',component:AllusersComponent},
  {path:'',component:CreaturesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRoutingModule { }
