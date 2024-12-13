import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
})
export class PrimaryButtonComponent {
  label = input('');

  btnClicked = output();
}
