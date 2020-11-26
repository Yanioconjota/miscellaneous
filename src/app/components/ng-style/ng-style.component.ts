import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Esto es un párrafo
    </p>

    <div class="btn-group">
      <button
      type="button"
      class="btn btn-danger"
      (click)="tamano = tamano - 5"><i class="fa fa-minus" aria-hidden="true"></i></button>
  
      <button
      type="button"
      class="btn btn-primary"
      (click)="tamano = tamano + 5"><i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tamano: number = 20;

}
