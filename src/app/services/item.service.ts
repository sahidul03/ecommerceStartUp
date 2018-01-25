import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  constructor(private http: Http) { }

  getAllItems() {
    return new Promise((resolve, reject) => {
      this.http.get('/items')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showItem(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/items/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveItem(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/items', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateItem(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/items/' + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteItem(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/items/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
