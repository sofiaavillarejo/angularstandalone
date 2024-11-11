import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.persona';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personasstandalone',
  templateUrl: './personasstandalone.component.html',
  styleUrl: './personasstandalone.component.css',
  standalone: true,
  //! IMPORTAMOS EL SERVICIO
  providers: [ServicePersonas]
})
export class PersonasstandaloneComponent {
  public personas!: Array<Persona>;
  constructor(private _service: ServicePersonas){}

  ngOnInit(): void {
    //todo: forma 2: devolviendo los datos directamente
    // this._service.getPersonas().subscribe(response => {
    //   console.log(response);
    //   this.personas = response;
    // })

    //todo: forma 1: devolver los datos con promesa
    this._service.getPersonasPromesa().then(response => {
      this.personas = response;
    })
  }
}
