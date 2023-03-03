import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileInputComponent } from './componentes/file-input/file-input.component';
import { TextareaComponent } from './componentes/textarea/textarea.component';
import { CalendarAnualComponent } from './componentes/calendar-anual/calendar-anual.component';
const routes: Routes = [

  {path:'textarea', component: TextareaComponent},
  {path:'fileinput', component: FileInputComponent},
  {path:'calendar', component: CalendarAnualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
