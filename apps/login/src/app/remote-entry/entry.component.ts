import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ng-mfe-login-entry',
  template: `<ng-mfe-nx-welcome></ng-mfe-nx-welcome>`,
})
export class RemoteEntryComponent {}
