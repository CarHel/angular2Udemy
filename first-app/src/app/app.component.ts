import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `
<h1>Root component</h1>
<app-lifecycle *ngIf="!delete" [bindable]="boundValue">
<p>{{test}}</p>
</app-lifecycle>
<button (click)="delete = true">delete</button>
<button (click)="test  = 'changed value'">click to change</button>
<button (click)="boundValue  = 2000">click to change binding</button>
`
})
export class AppComponent {
  delete= false;
  title = 'I changed it!';
  test= 'starting value';
  boundValue= 1000;
}
