import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, FormGroupDirective, FormBuilder, Validators, Form } from '@angular/forms';

const CODE = `<app-textarea
formControlName="mytextArea"
[minRow] = 5
[maxlength] = 250
>
</app-textarea>`;


@Component({
  selector: 'app-showtextarea',
  templateUrl: './showtextarea.component.html',
  styleUrls: ['./showtextarea.component.css'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ],
  providers: [FormGroupDirective]
})
export class ShowtextareaComponent implements OnInit {


  form!: FormGroup;
  code: string = '';

  constructor(
    private parent: FormGroupDirective,
    private fb: FormBuilder
  ){
    
  }

  ngOnInit(): void {

    this.code = CODE;

  }


  
}
