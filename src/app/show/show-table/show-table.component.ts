import { Component, OnInit, ViewChild } from '@angular/core';
import { ITableColumn } from '../../componentes/model/ITableColumn';
import { getValueField } from  '../../componentes/const/ColumnDef';
import { TableComponent } from 'src/app/componentes/table/table.component';
@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit{
  columnsMatriz: ITableColumn[]=[];
  dataMatriz:any[]=[];
  @ViewChild('tableUser') tableUser!: TableComponent;

  ngOnInit(){
    this.initColumn();
    this.initData();
  }

  initColumn(){
    //Add column accion to view icons of actions
    //columnDef is the name variable of type record to table.
    this.columnsMatriz = [
      {
        columnDef: 'id',
        header: 'ID',
        cell: getValueField
      },
      {
        columnDef: 'nombre',
        header: 'NOMBRE\nCOMPLETO',
        cell: getValueField
      },
      {
        columnDef: 'accion',
        header: 'ACCIÓN',
        cell: getValueField
      }
    ];
  }

  initData(){
    //only for demo. data will load from backend
    let newElement = {id:'1', nombre: 'JUAN PEREZ'};
    this.dataMatriz.push(newElement);
    if (this.tableUser!=undefined){
      this.tableUser.ngOnInit();
    }
    
  }

  addElemento(evento:any){
    //open dialog or route to open new link.
  }

  editElemento(evento:any){
    //open dialog or route to open new link.
  }

  deleteElemento(evento:any){
    //open dialog or route to open new link.
  }
}
