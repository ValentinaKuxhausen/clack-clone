import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarChannelsComponent } from './navbar-channels/navbar-channels.component';
import { NavbarMessagesComponent } from './navbar-messages/navbar-messages.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'channels', component: NavbarChannelsComponent},
  {path: 'messages', component: NavbarMessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
