import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegchildComponent } from './regchild.component';

describe('RegchildComponent', () => {
  let component: RegchildComponent;
  let fixture: ComponentFixture<RegchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegchildComponent]
    });
    fixture = TestBed.createComponent(RegchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
