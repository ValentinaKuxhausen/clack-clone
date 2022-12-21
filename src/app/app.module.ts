import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarChannelsComponent } from './navbar-channels/navbar-channels.component';
import { NavbarMessagesComponent } from './navbar-messages/navbar-messages.component';
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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTreeModule} from '@angular/material/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import { NavbarChannelsAddDialogComponent } from './navbar-channels-add-dialog/navbar-channels-add-dialog.component';
import { NavbarMessagesAddDialogComponent } from './navbar-messages-add-dialog/navbar-messages-add-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarChannelsComponent,
    NavbarMessagesComponent,
    LoginComponent,
    RegisterComponent,
    NavbarChannelsAddDialogComponent,
    NavbarMessagesAddDialogComponent
  ],
  imports: [
    AppRoutingModule,    
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
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
    ReactiveFormsModule,
    NgbModule,
     
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
