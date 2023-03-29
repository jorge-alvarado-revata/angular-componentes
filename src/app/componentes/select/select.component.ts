import { Component, OnInit, Input, Output, ViewChild, EventEmitter, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange, MatSelect } from '@angular/material/select';
import { IDataSelect } from '../model/IDataSelect';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting:SelectComponent
    }
  ]
})


export class SelectComponent {
  @Input() placeHolder: string = '';
  @Input() data: IDataSelect[] = [];
  @Input() name: string = '';
  @Input() textError: string = '';
  @Input() disableControl: boolean = false;

  @ViewChild('matSelect', {static: false}) matSelect!: MatSelect;
  @Output() selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() openChange: EventEmitter<any> = new EventEmitter<any>();

  onChange: any = () => { };
  onTouched: any = () => { };

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) { 
    this.onTouched = fn;
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 && c1 == c2;
  }

  writeValue(_value: any) {
    if (this.matSelect != undefined){
      if (_value != null || _value != ''){
        let newElement: IDataSelect = { id: _value.id, nombre: _value.nombre};
        if (!this.data.find(ele=>ele.id === _value.id)){
          this.data.push(newElement);
        }
      }  
    }
  }

  setDisabledState(isDisabled: boolean) {
    //
    if (isDisabled != undefined && this.matSelect != undefined){
      this.matSelect.setDisabledState(isDisabled);
    }
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes !=undefined) {
      let change = changes['disableControl'];
      if (change != undefined){
        if (!change.firstChange){
          this.setDisabledState(change.currentValue);
        }
      }
    }

  }

  fcheckError(){
    const control = this.matSelect.ngControl.control;
    let value = control?.hasError('required') || control?.touched;
    return value;
  }


  selectionChanged(event: MatSelectChange) {
    this.selectionChange.emit(new MatSelectChange(this.matSelect, event.value));
    this.valueChange.emit(event.value);
    this.onChange(event.value);
    this.onTouched();
  }
  
  openChanged(opened: boolean){
    const control = this.matSelect.ngControl.control;
    control?.markAsTouched();
    let value = this.fcheckError();
    if (opened){
      this.openChange.emit(opened);
    }

  }

}
