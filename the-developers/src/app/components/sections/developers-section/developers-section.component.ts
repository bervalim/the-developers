import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DevelopersCardComponent } from './developers-card/developers-card.component';

@Component({
  selector: 'app-developers-section',
  standalone: true,
  imports: [CommonModule, DevelopersCardComponent],
  templateUrl: './developers-section.component.html',
  styleUrl: './developers-section.component.scss',
})
export class DevelopersSectionComponent {
  developersList = [
    {
      image: 'assets/Developer1.jpg',
      name: 'Josefine',
      description: 'Lorem ipsum dolor sit amett',
    },
    {
      image: 'assets/Developer2.jpg',
      name: 'Rudolf',
      description: 'Lorem ipsum dolor sit amett',
    },
    {
      image: 'assets/Developer3.jpg',
      name: 'Lucy',
      description: 'Lorem ipsum dolor sit amett',
    },
    {
      image: 'assets/Developer4.jpg',
      name: 'Robert',
      description: 'Lorem ipsum dolor sit amett',
    },
  ];
}
