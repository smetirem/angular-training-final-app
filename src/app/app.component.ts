import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bug Reporting System';
  role = '';

  constructor() { }

  ngOnInit(): void {
  }

  logIn(userRole: string): void {
    this.role = userRole;
  }

}
