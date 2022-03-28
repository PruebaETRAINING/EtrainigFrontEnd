import { Component, OnInit } from '@angular/core';
import { Cursos } from '../models/curso.model';
import {CursoService} from '../services/curso.service'

@Component({
  selector: 'app-crear-cursos',
  templateUrl: './crear-cursos.component.html',
  styleUrls: ['./crear-cursos.component.css']
})
export class CrearCursosComponent implements OnInit {

  newCurso: Cursos;
  
  constructor(private CursoService: CursoService) {
    this.newCurso = new Cursos ();
   }

  ngOnInit(): void {
  }


  public crearCurso() {
    this.CursoService.createCurso(this.newCurso);
  }

}
