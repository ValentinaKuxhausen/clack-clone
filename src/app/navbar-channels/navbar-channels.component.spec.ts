import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarChannelsComponent } from './navbar-channels.component';

describe('NavbarChannelsComponent', () => {
  let component: NavbarChannelsComponent;
  let fixture: ComponentFixture<NavbarChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarChannelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
