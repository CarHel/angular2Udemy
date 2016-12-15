import { Observable } from 'rxjs/Rx';
import { ComponentCanDeactivate } from './user-edit.guard';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-user-edit',
    template: `
        <h3>User Edit</h3>
        <button [routerLink]="['../detail']">Done</button>
        <button class="btn btn-alert" (click)="onNavigate()">Go Home</button>
    `
})
export class UserEditComponent implements ComponentCanDeactivate {
    done:boolean=false;
    constructor(private router: Router, private activatedRouter:ActivatedRoute){}
      onNavigate() {
    this.router.navigate(['../detail'],{relativeTo:this.activatedRouter});
  }

  canDeactivate():Observable<boolean> | boolean{
      if(!this.done)
      {
          return confirm('Do you want to leave?');
      }
      return true;
  }
}
