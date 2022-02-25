import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styles: [
  ]
})
export class ReactivoComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    sexo: 'Hombre',
    acepta: false,
    archivo: ''
  };

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
  ];

  sexos = ['Hombre', 'Mujer'];

  
  formCliente!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCliente = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['',Validators.required],
      correo: ['', Validators.required],
      pais: ['', Validators.required],
      sexo: ['', Validators.required],
      acepta: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  guardar() {
    this.usuario.nombre = this.formCliente.get('nombre')?.value;
    this.usuario.apellido = this.formCliente.get('apellido')?.value;
    this.usuario.correo = this.formCliente.get('correo')?.value;
    this.usuario.pais = this.formCliente.get('pais')?.value;
    this.usuario.nombre = this.formCliente.get('nombre')?.value;
    
    console.log(this.usuario);
    console.log(this.formCliente.value);
  }

  quitarValNombre(){
    this.formCliente.get('nombre')?.clearValidators();
    this.formCliente.get('nombre')?.updateValueAndValidity();
  }

}
