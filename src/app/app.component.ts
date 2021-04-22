import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EX01-TC2';

  show: boolean = false;

  showWally() {
    this.show = !this.show;
  }
}
