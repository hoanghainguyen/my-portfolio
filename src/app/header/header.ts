import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
//  imports: [Component],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.css'
})
export class Header {

}
