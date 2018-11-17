import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ShareService } from '../share.service';

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

  constructor(public shareservice: ShareService , public router: Router) {

   }

  ngOnInit() {
  }

  insertSkill() {
   this.shareservice.insertSkill(this.data);
   this.router.navigate(['/myskills']);
 }

  inssertSkill() {
    this.itemList.push(this.data);
    this.router.navigate(['/myskills']);
  }

}
