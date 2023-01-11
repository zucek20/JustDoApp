import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component'
import { StartComponent } from './start/start.component'
import { ListComponent } from './list/list.component'

const routes: Routes = [
  { path: '', component: StartComponent, data: { animation: '0'}},
  { path: 'generator', component: GeneratorComponent, data: { animation: '1'}},
  { path: 'list', component: ListComponent, data: { animation:'2'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
