import { Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit, OnChanges {

  //looks inside of html file for the ref name and assigns it
  @ViewChild("name", {static: false}) nameRef: ElementRef;
  @ViewChild("pass", {static: false}) passRef: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    // console.log("init: " + this.nameRef, this.passRef);
  }

  ngOnChanges(simpleWimple:SimpleChanges): void {
    // console.log("changes: " + this.nameRef, this.passRef);
    // console.log(simpleWimple);
  }

  onSubmit() {
    
    const username = this.nameRef.nativeElement.value;
    const password = this.passRef.nativeElement.value;

    console.log(username + " " + password);
    // const username = event.currentTarget["name"].value;
    // const password = event.currentTarget["pass"].value;

    console.log(username);
    
    fetch("http://localhost:6969/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          "username": username, 
          "password": password
        })
    })
    .then(response => {
      console.log(response.json());
    })
    .then(data => {
      console.log("Success", data);
    })
    .catch(error=> {
      console.error("Error: Ya fucked up brah. This is your fault. Not mine. Alright maybe I had a part in this. Maybe. A small one tho. Mostly you. Come on now.");
    });

  }
  

}
