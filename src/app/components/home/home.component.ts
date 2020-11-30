import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>Hola mundo desde home.component</p>
    <hr>
    <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <hr>
    <app-clases></app-clases>
    <hr>
    <pre appResaltado class="mt-4 p-2 border rounded text-primary border-primary">
    Estilos con directivas | appResaltado | Color default amarillo</pre>
    <pre [appResaltado]="'#cbcbcb'" class="mt-4 p-2 border rounded text-primary border-primary">
    Estilos con directivas | [appResaltado]="'#cbcbcb'"</pre>
    <hr>
    <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
