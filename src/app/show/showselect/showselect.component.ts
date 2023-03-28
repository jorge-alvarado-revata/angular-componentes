import { Component, ViewChild } from '@angular/core';
import { IDataSelect } from 'src/app/componentes/model/IDataSelect';
import { IUsuario } from 'src/app/componentes/model/IUsuario';
import { SelectComponent } from 'src/app/componentes/select/select.component';

@Component({
  selector: 'app-showselect',
  templateUrl: './showselect.component.html',
  styleUrls: ['./showselect.component.css']
})
export class ShowselectComponent {
  myData: IDataSelect[] = [];
  usuario: IUsuario = {} as IUsuario;
  @ViewChild('mySelect', {static: false}) mySelect!: SelectComponent;
  submitted = false;

  onSubmit() { 
    let elemento: IUsuario = {} as IUsuario;
    elemento.id = this.usuario.id;
    elemento.nombre = this.usuario.nombre;
    this.mySelect.writeValue(elemento);
    this.submitted = true; 
  }

  selChange(event: any){
    console.log(event);
  }

  valChange(event: any){
    console.log(event);
  }

  opChange(event: any){
    console.log(event);
  }

  add(event:any){

  }
}
