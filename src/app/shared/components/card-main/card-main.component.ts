import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.css']
})
export class CardMainComponent implements OnInit {
  @Input() weathers:any;

  constructor() { }

  ngOnInit(): void {
    console.log('weathers -> child', this.weathers);
  }

}
