import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { AllusersComponent } from './allusers/allusers.component';
import { CreaturesComponent } from './creatures/creatures.component';


@NgModule({
  declarations: [
    AllusersComponent,
    CreaturesComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModule { }
