import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
<button (click)="onClick()">clik me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked= new EventEmitter<string>();


  public onClick() {
    this.clicked.emit('it works');
  }
}
