import { Component, OnInit } from '@angular/core';

import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  cities = [
    {city: 'karachi'},
    {city: 'Lahore'},
    {city: 'Islamabad'}
  ]
  constructor(private orderService: OrderService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.orderService.form.controls;

  ngOnInit() {
  }

  onSubmit(){
    debugger
    this.submitted =true;
    if(this.orderService.form.valid){
    if(this.orderService.form.get('$key').value == null)
       this.orderService.insertOrder(this.orderService.form.value);
    else
      this.orderService.updateOrder(this.orderService.form.value);
        //success message appear when form submitted
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false,2000)
       //after create or update reset submitted 
    this.submitted = false;
    this.orderService.form.reset();
    // this.orderService.form.setValue({
    //   $key: null,
    //   fullName: '',
    //   email: '',
    //   mobile: '',
    //   comment: '',
    //   cityInput: ''
    // });
   }
  }

}
