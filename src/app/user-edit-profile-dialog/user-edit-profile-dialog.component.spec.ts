import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditProfileDialogComponent } from './user-edit-profile-dialog.component';

describe('UserEditProfileDialogComponent', () => {
  let component: UserEditProfileDialogComponent;
  let fixture: ComponentFixture<UserEditProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEditProfileDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEditProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
