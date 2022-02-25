import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { SwapiRequestComponent } from './swapi-request/swapi-request.component';
import { ReactivoComponent } from './reactivo/reactivo.component';

const routes: Routes = [
  {path: 'template', component: TemplateComponent},
  {path: 'swapi', component: SwapiRequestComponent},
  {path: 'reactivo', component: ReactivoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
