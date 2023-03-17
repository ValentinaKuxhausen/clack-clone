import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChannelMessagesComponent } from './dashboard-channel-messages.component';

describe('DashboardChannelMessagesComponent', () => {
  let component: DashboardChannelMessagesComponent;
  let fixture: ComponentFixture<DashboardChannelMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChannelMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChannelMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
