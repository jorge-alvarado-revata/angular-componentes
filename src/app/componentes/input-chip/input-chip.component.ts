import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-input-chip',
  templateUrl: './input-chip.component.html',
  styleUrls: ['./input-chip.component.css']
})
export class InputChipComponent {

  @Input() titulo: string= '';
  @Input() titulotext: string = '';
  @Input() placeholder: string = '';
  @ViewChild('inputValor') inputValor!: ElementRef;
  nombre: string = '';
  ListaElementos: string[]=[];

  setValor(){
if (this.nombre != ''){
  if (!this.ListaElementos.includes(this.nombre)){
    this.ListaElementos.push(this.nombre);
    this.nombre = '';
  }
}
  }

  removeElemento(elemento: string){
    const index = this.ListaElementos.indexOf(elemento);
    if (index>=0){
      this.ListaElementos.splice(index,1);
    }
  }
}
