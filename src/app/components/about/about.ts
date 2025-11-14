import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements OnInit {
  profile = signal<Profile | null>(null);

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile.set(this.profileService.getProfile());
  }

  getSkillCategories() {
    if (!this.profile()) return [];
    const skills = this.profile()!.skills;
    return [
      { name: 'Languages', items: skills.languages },
      { name: 'Frameworks', items: skills.frameworks },
      { name: 'Databases', items: skills.databases },
      { name: 'Tools', items: skills.tools },
      { name: 'Other', items: skills.other }
    ];
  }
}
