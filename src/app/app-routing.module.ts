import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-register/login/login.component';
import { NavbarChannelsComponent } from './navbar/navbar-channels/navbar-channels.component';
import { NavbarMessagesComponent } from './navbar/navbar-messages/navbar-messages.component';
import { RegisterComponent } from './login-register/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login-register/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './login-register/verify-email/verify-email.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'varify-email', component: VerifyEmailComponent },
  { path: 'channels', component: NavbarChannelsComponent },
  { path: 'messages', component: NavbarMessagesComponent },
  { path: 'user-detail', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
