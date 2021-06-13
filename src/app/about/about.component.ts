import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  image: any =  "../../assets/images/about.jpg" ;
  h1 : any = 'our mision';
  ngOnInit(): void {
  }


  mission(){
    this.image =  "../../assets/images/about.jpg"  ;
    this.h1 = 'our mission'
  }
  vision(){
    this.image = "../../assets/images/vision.jpg" ;
    this.h1 = 'our vision';

  }
  sponsors(){
    this.image = "../../assets/images/sponser (2).jpg" ;
    this.h1 = 'our sponsors';

  }

}
