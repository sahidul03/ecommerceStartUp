import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: any;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
    this.getItemList();
  }

  getItemList() {
    this.itemService.getAllItems().then((res) => {
      this.items = res;
    }, (err) => {
      console.log(err);
    });
  }

  deleteItem(item) {
    this.itemService.deleteItem(item._id).then((result) => {
      this.items.splice(this.items.indexOf(item), 1);
    }, (err) => {
      console.log(err);
    });
  }

}


