import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning-center';
  options = [
    { path: '/home', title: 'Home'},
    { path: '/learning/students', title: 'Students'},
    { path: '/about', title: 'About'}
  ]
}
