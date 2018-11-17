import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private basePath = 'skills';
  constructor(private db: AngularFireDatabase) { }

  insertSkill(data) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(data);
  }

  getSkills(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }
  onEdit(data) {
    console.log(data);
  }
  onDelete($key) {
console.log($key);
  }

}
