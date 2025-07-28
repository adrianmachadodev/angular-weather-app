import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  listSocial: social[] = [
    {
      name:'LinkedIn',
      url:'https://www.linkedin.com/in/machadoadrian/',
      icon:'uil-linkedin-alt'
    },
    {
      name:'GitHub',
      url:'https://github.com/adrianmachadodev',
      icon:'uil-github'
    },
  ];

  constructor() {}
  
  ngOnInit(): void {}
}

class social{
  name!:string;
  url!:string;
  icon!:string;
}

