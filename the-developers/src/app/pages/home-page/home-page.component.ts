import { Component } from '@angular/core';
import { BannerSectionComponent } from '../../components/sections/banner-section/banner-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BannerSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
