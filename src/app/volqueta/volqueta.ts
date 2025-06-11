import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-volqueta',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './volqueta.html',
  styleUrl: './volqueta.css'
})
export class VolquetaComponent {

}
