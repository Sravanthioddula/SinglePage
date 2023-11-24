import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-contactchild',
  templateUrl: './contactchild.component.html',
  styleUrls: ['./contactchild.component.css']
})
export class ContactchildComponent {
  // @Input() parentData: any;
 @Input() jobs:any[]=[];
 isEdit= false;
  originalData: any[]=[];
  currentlyEditingIndex: number| null=null;
 
 get hasUsers(): boolean {
  return this.jobs.length > 0;
}
constructor(private hero:HeroService){}

onEdit(item:any){
  
if (this.currentlyEditingIndex !== null) {
      this.jobs[this.currentlyEditingIndex].isEdit = false;
      console.log('not working')
    }
    this.currentlyEditingIndex = this.jobs.indexOf(item);
item.isEdit=true;
this.originalData[item.id] = { ...item };


}
onCancel(item:any){

  if (this.originalData[item.id]) {
    Object.assign(item, this.originalData[item.id]);
    item.isEdit=false;
  }
}

onSave(item:any){
  item.isEdit=false;
  this.hero.updateData(item);
  // delete this.originalData[item.id]; // Remove original data once saved

}

}
