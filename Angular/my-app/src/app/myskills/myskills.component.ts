import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})
export class MyskillsComponent implements OnInit {


  public skills: Observable<any[]>;
  constructor(private shareservice: ShareService) {

   }

  ngOnInit() {
    this.skills = this.getSkills('skills');
    console.log(this.skills);
  }

  getSkills(path) {
    return this.shareservice.getSkills(path);
  }
  onEdit(data) {
    return this.shareservice.onEdit(data);
  }
  onDelete($key) {
    return this.shareservice.onDelete($key);
  }

}
