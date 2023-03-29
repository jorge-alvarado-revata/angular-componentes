import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ITableColumn } from '../model/ITableColumn';
import { IEventoDocTable } from '../model/IEventoDocTable';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() dataSource: any[]=[];
  @Input() columns: ITableColumn[]=[];
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() nameTable: string = '';
  displayedColumns:string[]=[];
  @Output() addRow = new EventEmitter<string>();
  @Output() editRow = new EventEmitter<IEventoDocTable>();
  @Output() deleteRow = new EventEmitter<IEventoDocTable>();
  @ViewChild(MatTable) myTable!: MatTable<any>;
  

  constructor(){

  }

  ngOnInit(): void {
    if (this.columns != undefined) {
      this.displayedColumns = this.columns.map(c=>c.columnDef);
    }
    if (this.dataSource != undefined){
      if (this.myTable != undefined){
        this.myTable.renderRows();
      }
      
    }
  }

  ngAfterViewInit(){
    if (this.dataSource != undefined){
      if (this.myTable != undefined){
        this.myTable.renderRows();
      }
    }
  }
  deleteRegistro(row: any){
    if (row!= undefined){
      let evento: IEventoDocTable = {} as IEventoDocTable;
      evento.idRow = Number(row['id']);
      evento.nombre = this.nameTable;
      this.deleteRow.emit(evento);
      this.myTable.renderRows();
    }
  }

  editRegistro(row: any){
    if (this.nameTable!= undefined){
      let evento: IEventoDocTable = {} as IEventoDocTable;
      evento.idRow = Number(row['id']);
      evento.nombre = this.nameTable;
      this.editRow.emit(evento);
    }
  
  }

  addRegistro(){
    if (this.nameTable!= undefined){
      this.addRow.emit(this.nameTable);
    }
  }
}

