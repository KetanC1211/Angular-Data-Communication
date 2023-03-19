import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

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
  }

  onClickTransferNameToChild(){
    this.name = this.reactiveForm.get('firstName')?.value +" "+ this.reactiveForm.get('lastName')?.value;
  }
  
}
