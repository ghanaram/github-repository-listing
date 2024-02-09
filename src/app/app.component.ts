import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(

  ) {}

  selectedUsername: string = '';

  onUsernameEntered(username: string): void {
    this.selectedUsername = username;
  }

}
