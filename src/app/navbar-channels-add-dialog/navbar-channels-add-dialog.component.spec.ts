import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarChannelsAddDialogComponent } from './navbar-channels-add-dialog.component';

describe('NavbarChannelsAddDialogComponent', () => {
  let component: NavbarChannelsAddDialogComponent;
  let fixture: ComponentFixture<NavbarChannelsAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarChannelsAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarChannelsAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
