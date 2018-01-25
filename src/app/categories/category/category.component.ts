import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService.getAllCategories().then((res) => {
      this.categories = res;
    }, (err) => {
      console.log(err);
    });
  }

  deleteCategory(category) {
    this.categoryService.deleteCategory(category._id).then((result) => {
      this.categories.splice(this.categories.indexOf(category), 1);
    }, (err) => {
      console.log(err);
    });
  }

}


