import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignOutBtnClick() {
    this.authService.onSignOut();
  }

}
