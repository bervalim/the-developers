import { Component, Input } from '@angular/core';

interface Ideveloper {
  image: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-developers-card',
  standalone: true,
  imports: [],
  templateUrl: './developers-card.component.html',
  styleUrl: './developers-card.component.scss',
})
export class DevelopersCardComponent {
  @Input() developer!: Ideveloper;
}
