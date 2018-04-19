import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-suit-tab',
  templateUrl: './suit-tab.component.html',
  styleUrls: ['./suit-tab.component.css']
})
export class SuitTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

}
