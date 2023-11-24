import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactchildComponent } from './contactchild.component';

describe('ContactchildComponent', () => {
  let component: ContactchildComponent;
  let fixture: ComponentFixture<ContactchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactchildComponent]
    });
    fixture = TestBed.createComponent(ContactchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
