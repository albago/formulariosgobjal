import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    sexo: 'Hombre',
    acepta: false,
    archivo: ''
  }

  paises = [{
      codigo: 'MX',
      nombre: 'México'
    },
    {
      codigo: 'USA',
      nombre: 'Estados Unidos'
    },
    {
      codigo: 'BRA',
      nombre: 'Brasil'
    }
  ]

  sexos = ['Hombre', 'Mujer']

  archivo!: File;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma: NgForm) {
    //console.log(forma.controls);
    console.log(this.usuario);
  }

  cambiarNombre() {
    this.usuario.nombre = 'Pedro';
  }

  seleccionarArchivo(event: any) {
    console.log(event.target.files[0]);
    this.archivo = event.target.files[0];
  }

}
