import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-regchild',
  templateUrl: './regchild.component.html',
  styleUrls: ['./regchild.component.css']
})
export class RegchildComponent {
  // @Input() childData: any;
  usersArray!: any;

  @Input() users: any[] = [];
//  @Output() updatedvalues=new EventEmitter<any>();
  originalData: any[]=[];
  currentlyEditingIndex: number | null =null;
  

  get hasUsers(): boolean {
    return this.users.length > 0;
  }
  constructor(private hero:HeroService){}
  onEdit(item:any){
  
    if (this.currentlyEditingIndex !== null) {
          this.users[this.currentlyEditingIndex].isEdit = false;
          console.log('not working')
        }
        this.currentlyEditingIndex = this.users.indexOf(item);
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
 this.hero.updateCompCData(item);
    }
}
