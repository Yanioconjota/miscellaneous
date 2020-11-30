import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <h1>
      👽
    </h1>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe(parametros => {
      console.log(`Ruta hija usuario nuevo: ${parametros.id}`);
    })
  }

  ngOnInit(): void {
  }

}
