import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { LandingComponent } from './components/layout/landing/landing.component';
import { HeadingComponent } from './components/layout/heading/heading.component';
import { AuthService } from './components/authentication/auth.service';
import { SignOutComponent } from './components/authentication/sign-out/sign-out.component';
import { appDropDownDirective } from './components/shared/dropDown.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    LandingComponent,
    HeadingComponent,
    SignOutComponent,
    appDropDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
