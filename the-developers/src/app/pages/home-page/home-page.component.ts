import { Component } from '@angular/core';
import { BannerSectionComponent } from '../../components/sections/banner-section/banner-section.component';
import { DevelopersSectionComponent } from '../../components/sections/developers-section/developers-section.component';
import { CtaSectionComponent } from '../../components/sections/cta-section/cta-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    BannerSectionComponent,
    DevelopersSectionComponent,
    CtaSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
