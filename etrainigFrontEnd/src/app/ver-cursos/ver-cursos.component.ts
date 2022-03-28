import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../environment/environment';
import { Cursos } from '../models/curso.model';
import {CursoService} from '../services/curso.service'

@Component({
  selector: 'app-ver-cursos',
  templateUrl: './ver-cursos.component.html',
  styleUrls: ['./ver-cursos.component.css']
})
export class VerCursosComponent implements OnInit {

  cursos: Array<Cursos>;
  displayedColumns = ['id','nombre', "fechaInicioCurso",'fechaFinCurso'];
  dataSource!: MatTableDataSource <any>;
  

  
  constructor(private CursoService:CursoService) { 
    this.cursos= new Array <Cursos> ();
  }


  ngOnInit(): void {
  }

  cargar () {
     this.CursoService.getAllCurso().subscribe((curso)=> {
      console.log(curso);
      this.cursos = curso});   
      this.dataSource = new MatTableDataSource (this.cursos);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
 
  }

  getCurso(index: number) {
    environment.Cursos = this.cursos[index];
    console.log(this.cursos[index]);
  }

  eliminarCurso() {
    this.CursoService.deleteCurso(environment.Cursos.id);
    this.cargar();
  }

}
