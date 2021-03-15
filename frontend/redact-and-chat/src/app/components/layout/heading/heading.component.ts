import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  collapsed = true;
  collapsedDrop = true;
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

  onSignOutBtnClick() {
    this.authService.onSignOut();
  }

}
