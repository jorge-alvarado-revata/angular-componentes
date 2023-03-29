import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowtextareaComponent } from './show/showtextarea/showtextarea.component';
import { ShowfileComponent } from './show/showfile/showfile.component';
import { ShowcalendarComponent } from './show/showcalendar/showcalendar.component';
import { ShowselectComponent } from './show/showselect/showselect.component';
import { ShowTableComponent } from './show/show-table/show-table.component';
import { ShowInputChipComponent } from './show/show-input-chip/show-input-chip.component';
const routes: Routes = [

  {path:'textarea', component: ShowtextareaComponent},
  {path:'fileinput', component: ShowfileComponent},
  {path:'calendar', component: ShowcalendarComponent},
  {path:'select', component: ShowselectComponent},
  {path:'table', component: ShowTableComponent},
  {path:'listchip', component: ShowInputChipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
