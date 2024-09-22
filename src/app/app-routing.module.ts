import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TiempoComponent } from './components/tiempo/tiempo.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CalendarioComponent } from './components/calendario/calendario.component';

const routes: Routes = [
  { path: 'main', component: MainComponent},
  { path: 'tiempo', component: TiempoComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'calendario', component: CalendarioComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
