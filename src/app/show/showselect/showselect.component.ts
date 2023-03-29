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
  mySelectedData: string[]=[];
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
    if (event!=undefined){
      if(event.value != ''){
        let element: IDataSelect | undefined = this.myData.find(ele=>ele.id === event.value);
        if (element != undefined){
          let valueChip = `${element.id}-${element.nombre}`;
          this.mySelectedData.push(valueChip);
        }
      }
    }
  }

  valChange(event: any){
    console.log(event);
  }

  opChange(event: any){
    console.log(event);
  }

}
