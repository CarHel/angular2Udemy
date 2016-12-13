import { AuthGuard } from './shared/auth.guard';
import { Authservice } from './shared/auth.service';
import { routing } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { SigninComponent } from "./unprotected/signin.component";
import { SignupComponent } from "./unprotected/signup.component";
import { ProtectedComponent } from "./protected/protected.component";

@NgModule({
  declarations: [
    AppComponent,
	        HeaderComponent,
        SigninComponent,
        SignupComponent,
        ProtectedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Authservice,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
