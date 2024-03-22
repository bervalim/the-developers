import { Component } from '@angular/core';
import { ContactSectionComponent } from '../../components/sections/contact-section/contact-section.component';
import { ContactInformationComponent } from '../../components/sections/contact-information/contact-information.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactSectionComponent, ContactInformationComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {}
