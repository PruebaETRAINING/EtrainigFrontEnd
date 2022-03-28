import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Cursos } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiLink: string;
  constructor(private http:HttpClient) {
    this.apiLink = environment.apiUrl;
   }

   createCurso(newCurso: Cursos) {
    environment.Cursos = newCurso;
    this.http.post(`${this.apiLink}cursos`, newCurso).subscribe(curso => console.log(curso));
   }

  getAllCurso (): Observable<Cursos[]> {
    return this.http.get <Cursos[]>(`${environment.apiUrl}cursos`);
  }

  deleteCurso (id: String) {
    this.http.delete(`${this.apiLink}cursos/${id}`).subscribe(curso => console.log(curso));
  }

  updateCurso (curso: Cursos) {
    this.http.put(`${environment.apiUrl}cursos/${curso.id}`, curso).subscribe(curso => console.log(curso));
  }
}
