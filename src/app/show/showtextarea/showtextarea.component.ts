import { Component } from '@angular/core';

@Component({
  selector: 'app-showtextarea',
  templateUrl: './showtextarea.component.html',
  styleUrls: ['./showtextarea.component.css']
})
export class ShowtextareaComponent {
  code = `<app-textarea
  formControlName="mytextArea"
  [minRow] = 5
  [maxlength] = 250
  >
</app-textarea>`;

}
