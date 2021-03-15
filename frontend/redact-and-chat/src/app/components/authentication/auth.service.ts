import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../shared/user.model";

@Injectable() //needed in the latest version of angular¯\_(ツ)_/¯
export class AuthService {
    userSignedIn = new EventEmitter<User>()
    currentUser: User = null;

    onSignIn(user: User) {
        console.log("signedIn!");
        console.log(user.username, user.password);

        //fetch call hereeee

        this.setCurrentUser(user);
        console.log(user);
    }

    onSignUp(user: User) {
        console.log("signedUp!");

        //fetch call here

        this.setCurrentUser(user);
    }

    onSignOut()
    {
        console.log("signedOut!");
        this.setCurrentUser(null);
        console.log(this.currentUser);
    }

    setCurrentUser(user: User)
    {
        this.userSignedIn.emit(this.currentUser = user);
    }
}