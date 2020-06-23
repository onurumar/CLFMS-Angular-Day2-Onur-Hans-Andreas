import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  
 
  
  clickCounter: number = 0;
  countClick(){
    this.clickCounter += 10;
    
  }
  
  
  

  constructor() { }
  
  
    

  ngOnInit(): void {
  }

}
