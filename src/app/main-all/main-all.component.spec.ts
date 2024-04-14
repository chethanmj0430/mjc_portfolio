import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAllComponent } from './main-all.component';

describe('MainAllComponent', () => {
  let component: MainAllComponent;
  let fixture: ComponentFixture<MainAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
