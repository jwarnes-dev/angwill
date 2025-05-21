import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWillowComponent } from './angular-willow.component';

describe('AngularWillowComponent', () => {
  let component: AngularWillowComponent;
  let fixture: ComponentFixture<AngularWillowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularWillowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularWillowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
