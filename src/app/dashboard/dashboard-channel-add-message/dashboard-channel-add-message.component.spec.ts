import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChannelAddMessageComponent } from './dashboard-channel-add-message.component';

describe('DashboardChannelAddMessageComponent', () => {
  let component: DashboardChannelAddMessageComponent;
  let fixture: ComponentFixture<DashboardChannelAddMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardChannelAddMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardChannelAddMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
