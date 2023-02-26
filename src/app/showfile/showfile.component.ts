import { Component } from '@angular/core';

@Component({
  selector: 'app-showfile',
  templateUrl: './showfile.component.html',
  styleUrls: ['./showfile.component.css']
})
export class ShowfileComponent {
  data: any;
  title = 'componentes';
  loadFile(file:any){
    this.data = file;
  }
}
