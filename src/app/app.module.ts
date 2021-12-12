import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { FeedbackComponent } from './feedback/feedback.component';
import { MatSliderModule } from '@angular/material/slider';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CinemaComponent } from './cinema/cinema.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { NewsFilterPipe } from './pipes/news-filter.pipe';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { LoginComponent } from './login/login.component';
//import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthenticationServiceService } from "./services/authentication-service.service";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    FeedbackComponent,
    ToolbarComponent,
    FormComponent,
    ReactiveFormComponent,
    CinemaComponent,
    NewsFilterPipe,
    MaintenanceComponent,
    LoginComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    MatDialogModule,
    //AngularFireAuthModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
