import { Component } from '@angular/core'; //Import the component annotation

//Define the component and its properties
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

//Create the component controller, with a single property
export class AppComponent {
  title = 'app works';
}
