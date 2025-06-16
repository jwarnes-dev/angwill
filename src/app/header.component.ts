import { Component } from '@angular/core';
import { WillowLogoComponent } from './willow-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [WillowLogoComponent]
})
export class HeaderComponent { } 