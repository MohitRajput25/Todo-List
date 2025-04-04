import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskButtonsComponent } from './task-buttons.component';

describe('TaskButtonsComponent', () => {
  let component: TaskButtonsComponent;
  let fixture: ComponentFixture<TaskButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
