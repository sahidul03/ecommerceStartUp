import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  item = {};
  categories: any;

  constructor(private itemService: ItemService, private categoryService: CategoryService, private router: Router) { }

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

  saveItem() {
    this.itemService.saveItem(this.item).then((result) => {
      this.router.navigate(['/items']);
    }, (err) => {
      console.log(err);
    });
  }

}
