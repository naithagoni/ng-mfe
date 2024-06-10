import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '@ng-mfe/data-access-user';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'ng-mfe-login-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class RemoteEntryComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService) {}

  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
