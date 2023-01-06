import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMessagesAddDialogComponent } from './navbar-messages-add-dialog.component';

describe('NavbarMessagesAddDialogComponent', () => {
  let component: NavbarMessagesAddDialogComponent;
  let fixture: ComponentFixture<NavbarMessagesAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMessagesAddDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMessagesAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
