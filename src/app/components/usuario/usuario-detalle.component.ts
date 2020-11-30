import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <h1>
      💀
    </h1>
  `,
  styles: [
  ]
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe(parametros => {
      console.log(`Ruta hija usuario detalle: ${parametros.id}`);
    })
  }

  ngOnInit(): void {
  }

}
