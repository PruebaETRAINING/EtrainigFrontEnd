
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCursosComponent } from './crear-cursos/crear-cursos.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';
import { VerCursosComponent } from './ver-cursos/ver-cursos.component';

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: VerCursosComponent},
  {path: 'crearCurso', component: CrearCursosComponent},
  {path: 'editarCurso', component: EditarCursoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
