import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(public AuthService: AuthService) {}

  // loginForm = new FormGroup({
  //   username : new FormControl('', Validators.required),
  //   password : new FormControl('', Validators.required)
  // }
    

}
