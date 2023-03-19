import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  listarray: any[] = [];
  

  constructor() { }

  ngOnInit(): void {
    
  }

  @Input() name : any;

  @Input() cName :any;

  


}
