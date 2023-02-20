import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

export const FileTypePermitido = ['image/png', 'application/pdf', 'image/jpg', 'image/jpeg'];

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent {
  @Input() requiredFileType: string='';
  @Output() fileEvent = new EventEmitter<any>();

  constructor(private _snackBar: MatSnackBar){

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  preview(event: any){
    const file: File=event.target.files[0];
    if (file) {
        let size = file.size;
        let extension = file.type;
        if (!FileTypePermitido.includes(extension)){
          this.openSnackBar('Archivo no permitido', 'Elegir otro tipo de archivo.');
        }
        else if (size > 2097152) {
          this.openSnackBar('Tamanio no permitido', 'Elegir otro tamanio.');
        }
        else {
          let reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onload = ( _event)=>{
              let imageData = reader.result;
              this.fileEvent.emit(imageData);
          }
        }
    }
  }
}
