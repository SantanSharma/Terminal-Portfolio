import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { ProjectsComponent } from '../projects/projects';
import { AboutComponent } from '../about/about';
import { ContactComponent } from '../contact/contact';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProjectsComponent, AboutComponent, ContactComponent, FooterComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

}
