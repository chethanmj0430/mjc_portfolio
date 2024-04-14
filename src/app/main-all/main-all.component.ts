import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-all',
  templateUrl: './main-all.component.html',
  styleUrl: './main-all.component.scss'
})
export class MainAllComponent {
  @Input() activeTab: string = '';
 
  
}
