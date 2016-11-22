import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>    
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}
    `
})
export class UserComponent implements OnDestroy {
  id:string;
  private subscription:Subscription;
  constructor(private router: Router,private activatedRoute:ActivatedRoute) { 
    this.subscription=activatedRoute.params.subscribe(t=>this.id=t['id']);    
  }

  onNavigate() {
    this.router.navigate(['/'],{queryParams: {analytics:100},fragment:'id'});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
