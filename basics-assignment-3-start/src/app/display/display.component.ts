import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styles: [`
  .plus5 {
      color: white;
  }
`]
})
export class DisplayComponent implements OnInit {
  passCreated = false;
  nOfDisplays = 0;
  constructor() { }
  displays :number[] = [];
  ngOnInit() {
  }

  onShowDisplay(){
    this.nOfDisplays++;
    this.displays.push(+ new Date());
    if(this.passCreated == true){
      this.passCreated = false;
    }else{
      this.passCreated = true;
    }
    
  }

 
  

}
