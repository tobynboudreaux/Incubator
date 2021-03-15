import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from '../../shared/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild("username", {static: false}) usernameRef: ElementRef;
  @ViewChild("pass1", {static: false}) password1Ref: ElementRef;
  @ViewChild("pass2", {static: false}) password2Ref: ElementRef;
  @ViewChild("fName", {static: false}) firstNameRef: ElementRef;
  @ViewChild("lName", {static: false}) lastNameRef: ElementRef;
  currentUser: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
    this.authService.userSignedIn.subscribe(
      (currentUser: User) => {
        this.currentUser = currentUser;
      }
    );
  }

  onSignUpFormSubmit() {
    console.log("ayyyyyyy");
    const username = this.usernameRef.nativeElement.value;
    const pass1 = this.password1Ref.nativeElement.value;
    const pass2 = this.password2Ref.nativeElement.value;
    const firstName = this.firstNameRef.nativeElement.value;
    const lastName = this.lastNameRef.nativeElement.value;

    if(pass1 === pass2 && pass1 !== "" && pass2 !== "")
    {
      const user = new User(username, pass1, firstName, lastName);
      this.authService.onSignUp(user);
    }
  }
}
