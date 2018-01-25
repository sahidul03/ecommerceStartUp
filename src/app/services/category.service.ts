import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }

  getAllCategories() {
    return new Promise((resolve, reject) => {
      this.http.get('/categories')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showCategory(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/categories/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveCategory(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/categories', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateCategory(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/categories/' + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteCategory(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/categories/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
