import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) ViewChild!: ChildComponent;
  response : string ="";

  name = "";
  parentObj = { "firstName": "" , "lastName" : ""};
  pName : any;
  constructor() { }

  ngOnInit(): void {
  }

  reactiveForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
  })
 
  onSubmit() {
    console.log(this.ViewChild.listarray);
    this.pName = this.reactiveForm.value;
    this.ViewChild.listarray.push(this.pName);
    this.response = "Total "+this.ViewChild.listarray.length +" " + "record is added"
  }

  onClickTransferNameToChild(){
    this.name = this.reactiveForm.get('firstName')?.value +" "+ this.reactiveForm.get('lastName')?.value;
  }
  
}
