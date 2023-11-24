import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyamicformComponent } from './dyamicform.component';

describe('DyamicformComponent', () => {
  let component: DyamicformComponent;
  let fixture: ComponentFixture<DyamicformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyamicformComponent]
    });
    fixture = TestBed.createComponent(DyamicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
