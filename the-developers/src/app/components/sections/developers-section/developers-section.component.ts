import { Component } from '@angular/core';

@Component({
  selector: 'app-developers-section',
  standalone: true,
  imports: [],
  templateUrl: './developers-section.component.html',
  styleUrl: './developers-section.component.scss',
})
export class DevelopersSectionComponent {
  developersList = [{}];
}
