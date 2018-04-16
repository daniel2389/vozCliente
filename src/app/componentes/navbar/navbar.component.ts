import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.button-collapse2').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin


    });
  }

}
