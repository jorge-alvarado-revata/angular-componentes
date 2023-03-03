import { Component, ViewChild, EventEmitter, Output, Input,  ElementRef } from '@angular/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { NG_VALUE_ACCESSOR, FormGroup, FormControl} from '@angular/forms';

import {MatDatepicker} from '@angular/material/datepicker';

export const YEAR_FORMATS =  {
  parse: {
    dateInput: 'YYYY'
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    montYearAllyLabel: 'YYYY',
  }
}

@Component({
  selector: 'app-calendar-anual',
  templateUrl: './calendar-anual.component.html',
  styleUrls: ['./calendar-anual.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-PE'},
    { 
      provide: DateAdapter, 
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS, useValue: YEAR_FORMATS
    },
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: CalendarAnualComponent
    }]

})
export class CalendarAnualComponent {
  @Input() minDate: number =0;
  @Input() maxDate: number =0;
  @Input() textoHint: string = '';
  minDateY: Date | undefined;
  maxDateY: Date | undefined;
  @ViewChild('picker', { static: false}) private picker!: MatDatepicker<Date>;
  @ViewChild('inputdate') inputdate!: ElementRef;

  @Output() anioSeleccionado = new EventEmitter<number>();

  selectYear: Date = new Date();
  today: Date = new Date();
  fullyGeneral!: number;
  date!: any;
  form!: FormGroup;

  onChange = (aniosel:string) =>{

  };

  onTouched = () =>{};

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(disabled: boolean): void {
  }

  writeValue(elemento: any): void {
    if  (elemento!=undefined){
      this.form?.get('dateControl')?.setValue(elemento);
    }
    
  }

  constructor() {
   }

  ngOnInit(): void {
    this.initialCalendar();
  }

  initialCalendar(){
    const currentYear = new Date().getFullYear();
    this.minDateY = new Date(currentYear - this.minDate, 0, 1);
    this.maxDateY = new Date(currentYear + this.maxDate, 11, 31);
    this.today = new Date(currentYear,0,1);
    this.date = new FormControl(new Date());
    this.form = new FormGroup({
      dateControl: new FormControl({value: this.date.value})
    });
    
    
  }

  anioSel(ev: any, picker: any){
    let { _d } = ev;
    this.selectYear = _d;
    //obtener anio de datetime pasarselo como valor al control
    let fullY = this.selectYear.getFullYear();
    this.fullyGeneral = fullY;
    picker.close();
    this.inputdate.nativeElement.value = fullY;
    this.anioSeleccionado.emit(fullY);
  }
}
