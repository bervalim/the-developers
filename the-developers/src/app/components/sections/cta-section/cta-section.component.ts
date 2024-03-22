import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss',
})
export class CtaSectionComponent {}
