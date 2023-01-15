import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { NavbarChannelsComponent } from './navbar/navbar-channels/navbar-channels.component';
import { NavbarMessagesComponent } from './navbar//navbar-messages/navbar-messages.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NavbarChannelsAddDialogComponent } from './navbar/navbar-channels-add-dialog/navbar-channels-add-dialog.component';
import { AuthService } from './shared/services/auth.service';
import { ForgotPasswordComponent } from './login-register/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './login-register/verify-email/verify-email.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NavbarMessagesAddDialogComponent } from './navbar/navbar-messages-add-dialog/navbar-messages-add-dialog.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditProfileDialogComponent } from './user-edit-profile-dialog/user-edit-profile-dialog.component';
import { DashboardProfileComponent } from './dashboard/dashboard-profile/dashboard-profile.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';


@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent,
    NavbarChannelsComponent,
    NavbarMessagesComponent,
    LoginComponent,
    RegisterComponent,
    NavbarChannelsAddDialogComponent,
    NavbarMessagesAddDialogComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    DashboardProfileComponent,
    UserDetailComponent,
    UserEditProfileDialogComponent,
    DashboardMainComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTooltipModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatCardModule,
    MatTreeModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule   

  ],

  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
