import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'username-update',
  templateUrl: './username-update.component.html',
  styleUrls: ['./username-update.component.css']
})
export class UsernameUpdateComponent implements OnInit {
  allowReset = false;
  username = "";
  constructor() {
    
  }

  ngOnInit() {
  }

  onResetUsername(){
    this.username = "";
  }
  

}
