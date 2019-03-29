import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  even = [];
  odd = [];

  sendOdd(num : number){
    this.odd.push(num);
  }

  sendEven(num : number){
    this.even.push(num);
  }



}
