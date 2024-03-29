import { Component, OnInit } from '@angular/core';
import { Name } from '../name';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  model = new Name();
  company : string;
  show() {
    this.model.fullName = this.model.firstName + " " +
    this.model.lastName;
  }
  constructor() {
    this.company=localStorage.getItem("company");
   }

  ngOnInit() {
  }

}
