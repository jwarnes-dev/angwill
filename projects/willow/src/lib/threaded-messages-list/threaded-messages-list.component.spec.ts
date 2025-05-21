import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadedMessagesListComponent } from './threaded-messages-list.component';

describe('ThreadedMessagesListComponent', () => {
  let component: ThreadedMessagesListComponent;
  let fixture: ComponentFixture<ThreadedMessagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadedMessagesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreadedMessagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
