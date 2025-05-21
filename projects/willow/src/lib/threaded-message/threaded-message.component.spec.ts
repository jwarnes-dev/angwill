import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadedMessageComponent } from './threaded-message.component';

describe('ThreadedMessageComponent', () => {
  let component: ThreadedMessageComponent;
  let fixture: ComponentFixture<ThreadedMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadedMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadedMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
