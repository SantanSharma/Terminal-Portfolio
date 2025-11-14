import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit {
  profile = signal<Profile | null>(null);
  displayedText = signal('');
  private fullText = '';
  private currentIndex = 0;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile.set(this.profileService.getProfile());
    this.fullText = this.profile()?.tagline || '';
    this.typeText();
  }

  private typeText() {
    if (this.currentIndex < this.fullText.length) {
      this.displayedText.update(text => text + this.fullText.charAt(this.currentIndex));
      this.currentIndex++;
      setTimeout(() => this.typeText(), 50);
    }
  }

  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
