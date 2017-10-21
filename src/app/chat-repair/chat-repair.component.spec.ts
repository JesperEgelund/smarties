import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRepairComponent } from './chat-repair.component';

describe('ChatRepairComponent', () => {
  let component: ChatRepairComponent;
  let fixture: ComponentFixture<ChatRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
