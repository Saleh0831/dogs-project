import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thems',
  templateUrl: './thems.component.html',
  styleUrls: ['./thems.component.scss']
})
export class ThemsComponent {
  @Input() image!:string;
}
