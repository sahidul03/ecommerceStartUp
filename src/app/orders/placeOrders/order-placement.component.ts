import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css']
})
export class OrderPlacementComponent implements OnInit {

  items: any;
  selectedItem = {
    item: null,
    quantity: 0
  };
  orderedItems = [];

  constructor(private itemService: ItemService, private router: Router) {
  }

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

  addItemToOrderList() {
    if (this.selectedItem.item && this.selectedItem.quantity) {
      const alreadyOrderedThisItem = this.orderedItems.find(item => {
        return item.item._id === this.selectedItem.item._id;
      });
      if (alreadyOrderedThisItem) {
        const orderIndex = this.orderedItems.indexOf(alreadyOrderedThisItem);
        if (orderIndex !== -1) {
          this.orderedItems[orderIndex].quantity = this.orderedItems[orderIndex].quantity + this.selectedItem.quantity;
        }
      } else {
        this.orderedItems.push(this.selectedItem);
      }
      this.selectedItem = {
        item: null,
        quantity: 0
      };
    }
  }

  totalCost() {
    if (this.orderedItems.length > 0) {
      let totalPrice = 0;
      this.orderedItems.map(item => {
        totalPrice += item.quantity * item.item.price;
      });
      return totalPrice;
    } else {
      return 0;
    }
  }

  removeFromOrderedItem(orItem: any) {
    const alreadyOrderedThisItem = this.orderedItems.find(item => {
      return item.item._id === orItem.item._id;
    });
    if (alreadyOrderedThisItem) {
      const orderIndex = this.orderedItems.indexOf(alreadyOrderedThisItem);
      if (orderIndex !== -1) {
        this.orderedItems.splice(orderIndex, 1);
      }
    }
  }

}


