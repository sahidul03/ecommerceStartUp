import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category = {};

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
  }

  saveCategory() {
    this.categoryService.saveCategory(this.category).then((result) => {
      this.router.navigate(['/categories']);
    }, (err) => {
      console.log(err);
    });
  }

}
