import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titleName = 'Benjamin Tikki';
  age = 25;
  qualities = ['Navn er Benjamin', 'Der er Benjamin i navnet', 'Gud til HTML', 'God til SQL']
}
