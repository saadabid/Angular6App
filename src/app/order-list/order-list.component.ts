import { Component, OnInit } from '@angular/core';

import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private orderService: OrderService) { }
  orderArray = [];
  showDeleteMessage: boolean;
  searchText: string = '';

  ngOnInit() {
    this.orderService.getOrders().subscribe(
      list => {
        this.orderArray = list.map(item => {
          return{
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) {
    if (confirm('Are you sure you want delete ?')) {
      this.orderService.deleteOrder($key);
      this.showDeleteMessage = true;
      setTimeout(() => this.showDeleteMessage = false , 2000);
    }
  }

  filterCondition(order) {
    return order.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
  }
}
