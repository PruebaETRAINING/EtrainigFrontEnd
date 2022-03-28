import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { Cursos } from '../models/curso.model';
import {CursoService} from '../services/curso.service'

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  newCurso: Cursos;
  constructor(private CursoService: CursoService) { 
    this.newCurso = environment.Cursos;
  }

  ngOnInit(): void {
  }

  editarCurso() {
    this.CursoService.updateCurso(this.newCurso);
 }

}
