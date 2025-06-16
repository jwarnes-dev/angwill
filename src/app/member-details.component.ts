import { Component } from '@angular/core';

@Component({
  selector: 'member-details-card',
  standalone: true,
  templateUrl: './member-details.component.html',
  styleUrl: './member-details.component.scss'
})
export class MemberDetailsComponent {
  // Placeholder member details; in real usage bind via @Input()
  member = {
    name: 'John Doe',
    // TODO: Add member details
  };
} 