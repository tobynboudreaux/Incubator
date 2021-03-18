import { EventEmitter, Injectable } from "@angular/core";
import { User } from "../shared/user.model";

@Injectable() //needed in the latest version of angular¯\_(ツ)_/¯
export class AuthService {
    userSignedIn = new EventEmitter<User>()
    currentUser: User = null;

    onSignIn(user: User) {
        console.log("signedIn!");
        console.log(user.username, user.password);

        
        fetch("http://localhost:6969/users/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(resp=>{
            console.log(resp);
            resp.json().then(data=>{
                console.log(data);
            })
        })
        .catch(error=>console.log(error));
        
        
        fetch("http://localhost:6969/users/test")
        .then(resp=>{
            console.log(resp);
            resp.json().then(data=>console.log(data));
        });
        

        this.setCurrentUser(user);
        console.log(user);
    }

    onSignUp(user: User) {
        console.log("signedUp!");

        fetch("http://localhost:6969/users/new",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data);
        })
        .catch(error=>console.log(error));

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