import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, AbstractControl, ValidationErrors, Validators, FormControl } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

@Component({
  standalone: true,
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextareaComponent
    }
  ],
  imports:[AngularMaterialModule]
})

export class TextareaComponent implements OnInit, ControlValueAccessor {

  @Input() required: boolean=false;
  @Input() maxLen = 200;
  @Input() maxRow = 5;
  @Input() disabled: boolean = false;
  form: FormGroup;

  constructor(){
    this.form = new FormGroup(
      {textarea: new FormControl(
        {
          value: '', disabled: this.disabled
        }
      )}
    )
  }

  ngOnInit(): void {

  }
  writeValue(texto: any): void {
    if (texto != undefined) {
      this.form?.get('textarea')?.setValue(texto);
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.required ? Validators.required(control): null;
  }
  
  onChange = (texto:string) =>{
    this.form?.get('textarea')?.setValue(texto);
  }

  onTouched =()=>{}

}




