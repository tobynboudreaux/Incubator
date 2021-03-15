import { EventEmitter } from "@angular/core";
import { User } from "../shared/user.model";

export class AuthService {
    userSignedIn = new EventEmitter<User>()
    currentUser: User;

    onSignIn(user: User) {
        console.log("signedIn!");
        console.log(user.username, user.password);
        this.userSignedIn.emit(this.currentUser = user);
    }

    onSignUp() {
        console.log("signedUp!");
    }
}