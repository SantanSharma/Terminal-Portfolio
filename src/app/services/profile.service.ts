import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';
import profileData from '../data/profile.json';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getProfile(): Profile {
    return profileData as Profile;
  }
}
