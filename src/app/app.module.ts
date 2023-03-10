import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module'; 
import { TextareaComponent} from './componentes/textarea/textarea.component';
import { FileInputComponent } from './componentes/file-input/file-input.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ShowtextareaComponent } from './show/showtextarea/showtextarea.component';
import { ShowfileComponent } from './show/showfile/showfile.component';
import { CalendarAnualComponent } from './componentes/calendar-anual/calendar-anual.component';
import { ShowcalendarComponent } from './show/showcalendar/showcalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    FileInputComponent,
    SidenavComponent,
    ShowtextareaComponent,
    ShowfileComponent,
    CalendarAnualComponent,
    ShowcalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    TextareaComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TextareaComponent]
})
export class AppModule { }
