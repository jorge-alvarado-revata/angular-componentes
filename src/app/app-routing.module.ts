import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowtextareaComponent } from './show/showtextarea/showtextarea.component';
import { ShowfileComponent } from './show/showfile/showfile.component';
import { ShowcalendarComponent } from './show/showcalendar/showcalendar.component';
const routes: Routes = [

  {path:'textarea', component: ShowtextareaComponent},
  {path:'fileinput', component: ShowfileComponent},
  {path:'calendar', component: ShowcalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
