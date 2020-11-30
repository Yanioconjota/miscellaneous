import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <h1>
      👾
    </h1>
  `,
  styles: [
  ]
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe(parametros => {
      console.log(`Ruta hija usuario editar: ${parametros.id}`);
    })
  }

  ngOnInit(): void {
  }

}
