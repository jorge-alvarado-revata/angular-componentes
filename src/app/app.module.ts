import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module'; 
import { TextareaComponent} from './textarea/textarea.component';
import { FileInputComponent } from './file-input/file-input.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ShowtextareaComponent } from './showtextarea/showtextarea.component';
import { ShowfileComponent } from './showfile/showfile.component';

@NgModule({
  declarations: [
    AppComponent,
    FileInputComponent,
    SidenavComponent,
    ShowtextareaComponent,
    ShowfileComponent,
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
