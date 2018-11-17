import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private basePath = 'skills';
  constructor(private db: AngularFireDatabase, public router: Router) { }

  insertSkill(data) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
    console.log(data);
  }

  getShares(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }
}
