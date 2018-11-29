import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule ,MatInputModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { OrdersComponent } from './orders/orders.component';
import { BookOrderComponent } from './book-order/book-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';

import { RouterModule , Routes, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrackOrderComponent } from './track-order/track-order.component';

import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { OrderService } from './shared/order.service'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Route[] = [
  { path: '', redirectTo: '/home' , pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'orders' , 
    component: OrdersComponent, 
    // children: [
    //   { path: '', redirectTo: 'orders' , pathMatch: 'full' },
    //   { path: 'bookOrder', component: BookOrderComponent },
    //   { path: 'editOrder', component: EditOrderComponent },
    // ]
  },
  { path: 'bookOrder', component: BookOrderComponent },
  { path: 'editOrder', component: EditOrderComponent },
  { path: 'trackOrder', component: TrackOrderComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    OrdersComponent,
    BookOrderComponent,
    EditOrderComponent,
    HomeComponent,
    TrackOrderComponent,
    OrderListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
