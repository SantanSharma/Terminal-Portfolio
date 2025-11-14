import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit {
  profile = signal<Profile | null>(null);

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile.set(this.profileService.getProfile());
  }
}
