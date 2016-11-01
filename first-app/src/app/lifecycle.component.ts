import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewChecked, OnDestroy, Input, ViewChild, AfterViewInit
} from '@angular/core';


@Component({
  selector: 'app-lifecycle',
  template: `
<ng-content></ng-content>
<p #boundParagraph>{{bindable}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, AfterViewInit {

  @Input() bindable = 1000;

  @ViewChild('boundParagraph') boundParagraph: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck() {
    this.log('ngDoCheck');

  }
  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }
  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }
  ngOnChanges() {
    this.log('ngOnChanges');
  }

  private log(hook: string) {
    console.log(hook)
  }

}
