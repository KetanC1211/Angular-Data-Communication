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
    console.log(this.reactiveForm.value);
    this.pName = this.reactiveForm.value;
    this.ViewChild.listarray.push(this.pName);
  }

  onClickTransferNameToChild(){
    this.name = this.reactiveForm.get('firstName')?.value +" "+ this.reactiveForm.get('lastName')?.value;
  }
  
}
