import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../shared/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('usernameInput', {static: false}) usernameInputRef: ElementRef;
  @ViewChild('passwordInput', {static: false}) passwordInputRef: ElementRef;
  currentUser: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
    this.authService.userSignedIn.subscribe(
      (currentUser: User) => {
        this.currentUser = currentUser;
      }
    );
  }

  onSignInFormSubmit() {
    const username = this.usernameInputRef.nativeElement.value;
    const password = this.passwordInputRef.nativeElement.value;
    const user = new User(username, password);
    this.authService.onSignIn(user);
  }

}
