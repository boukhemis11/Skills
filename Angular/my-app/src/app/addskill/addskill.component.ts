import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {


  data = {
    name: '',
    phone: '',
    skill: '',
    adress: '',
    salaire: '',
    remarque: ''
};

itemList: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.itemList = db.list('skills');
   }

  ngOnInit() {
  }

  insertSkill() {
    this.itemList.push(this.data);
  }

}
