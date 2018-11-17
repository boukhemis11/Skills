import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})
export class MyskillsComponent implements OnInit {


  public shares: Observable<any[]>;
  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.shares = this.getShares('/myskills');
  }
  getShares(path) {
    return this.shareservice.getShares(path);
  }

}
