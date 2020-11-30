import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styles: [
  ]
})
export class LifecycleComponent implements OnInit {
  Constructor = false;
  OnInit = false;
  OnChanges = false;
  DoCheck = false;
  AfterContentInit = false;
  AfterContentChecked = false;
  AfterViewInit = false;
  AfterViewChecked = false;
  OnDestroy = false;

  constructor() {
    console.log('constructor');
    this.Constructor = true;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.OnInit = true;
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
    this.OnChanges = true;
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
    this.DoCheck = true;
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    this.AfterContentInit = true;
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    this.AfterContentChecked = true;
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.AfterViewInit = true;
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    this.AfterViewChecked = true;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.OnDestroy = true;
  }

}
