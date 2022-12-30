import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component'
import { StartComponent } from './start/start.component'
import { ListComponent } from './list/list.component'

const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'generator', component: GeneratorComponent},
  { path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
