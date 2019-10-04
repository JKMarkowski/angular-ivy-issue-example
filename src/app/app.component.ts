import { Component } from '@angular/core';
import { TimeObject } from '@fundamental-ngx/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  time: TimeObject = { hour: 0, minute: 0, second: 0 };
}
