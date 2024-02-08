import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {

  @Output() usernameEntered = new EventEmitter<string>();
  githubUsername: string = '';

  onSearch(): void {
    if (this.githubUsername.trim() !== '') {
      this.usernameEntered.emit(this.githubUsername);
    }
  }

}
