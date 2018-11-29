import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private firebase: AngularFireDatabase) { }
  orderList: AngularFireList<any>;

  form = new FormGroup({
    $key : new FormControl('null'),
    fullName : new FormControl('', Validators.required),
    email : new FormControl('' , Validators.email),
    mobile : new FormControl('' , [Validators.required , Validators.minLength(8)]),
    comment : new FormControl(''),
    cityInput : new FormControl('')
  });

  getOrders(){
    this.orderList = this.firebase.list('orders');
    return this.orderList.snapshotChanges();
  }

  insertOrder(orders){
    debugger
    this.orderList.push({
      fullName: orders.fullName,
      email: orders.email,
      mobile: orders.mobile,
      comment: orders.comment,
      cityInput: orders.cityInput

    });
  }

  updateOrder(orders){
      this.orderList.update(orders.$key , {
        fullName: orders.fullName,
        email: orders.email,
        mobile: orders.mobile,
        comment: orders.comment,
        cityInput: orders.cityInput
      });
  }

  populateForm(order){
    this.form.setValue(order);
  }


  deleteOrder($key: string){
    this.orderList.remove($key);
  }

}
