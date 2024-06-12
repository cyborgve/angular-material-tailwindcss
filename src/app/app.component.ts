import { Component } from '@angular/core';
import packageJson from '../../package.json';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet],
})
export class AppComponent {
  title = 'angular-material-tailwindcss';
  version = packageJson.version;
}
