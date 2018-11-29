import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {

  routes = [
    { linkName: 'Home' , url: 'home'},
    { linkName: ' Order' , url: 'orders'},
    { linkName: 'Book Order' , url: 'bookOrder'},
    { linkName: 'Edit Order' , url: 'editOrder'}
  ]
  // routes = [
  //   { linkName: 'Book Order' , url: 'bookOrder'},
  //   { linkName: 'Edit Order' , url: 'editOrder'}
  // ]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
