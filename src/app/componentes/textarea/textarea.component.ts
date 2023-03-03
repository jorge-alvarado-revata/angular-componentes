import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, AbstractControl, ValidationErrors, Validators, FormControl } from '@angular/forms';
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
  @Input() minRow = 5;
  @Input() maxRow = 5;
  @Input() disabled: boolean = false;
  @Input() maxlength = 250;
 
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




