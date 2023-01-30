import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEditChannelComponent } from './dashboard-edit-channel.component';

describe('DashboardEditChannelComponent', () => {
  let component: DashboardEditChannelComponent;
  let fixture: ComponentFixture<DashboardEditChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEditChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardEditChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
