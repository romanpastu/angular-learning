import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() oddEmiter = new EventEmitter<number>();
  @Output() evenEmitter = new EventEmitter<number>();
  counter: number = 0;
  interVal;
  constructor() { }

  ngOnInit() {
  }



  onGameTrigger(stop: string) {

    if (stop == "start") {
      this.interVal = setInterval(() => {
        this.counter = this.counter + 1;

        if (this.counter % 2 != 0) {
          this.oddEmiter.emit(this.counter);
        } else if (this.counter % 2 == 0) {
          this.evenEmitter.emit(this.counter);
        }
        console.log(this.oddEmiter);
        console.log(this.evenEmitter);
        console.log(this.counter);
      }, 1000);

    }


    if (stop == "stop") {
      clearInterval(this.interVal);
    }
  }



}
