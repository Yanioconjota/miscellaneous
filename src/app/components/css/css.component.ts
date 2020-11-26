import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      CSS desde scope de componente
    </p>
  `,
  styles: [
    `
    p {
      color: red;
      font-size: 20px;
    }
    `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
