import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileInputComponent } from './file-input/file-input.component';
import { TextareaComponent } from './textarea/textarea.component';

const routes: Routes = [

  {path:'textarea', component: TextareaComponent},
  {path:'fileinput', component: FileInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
