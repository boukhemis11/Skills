import { Component, OnInit, Input } from '@angular/core';
import { SIGKILL } from 'constants';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  name:String 
  phone:String
  skill:String
  adress:String
  salaire:String
  remarque:String

  constructor() { }

  ngOnInit() {
  }

}
