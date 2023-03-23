import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  public form: FormGroup = new FormGroup({
});

submit(){
  this.form.markAllAsTouched();
}

}
