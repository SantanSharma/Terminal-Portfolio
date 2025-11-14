import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent implements OnInit {
  profile = signal<Profile | null>(null);
  currentYear = new Date().getFullYear();

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile.set(this.profileService.getProfile());
  }
}
