import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import projectsData from '../data/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  getProjects(): Project[] {
    return projectsData as Project[];
  }

  getProjectById(id: string): Project | undefined {
    return (projectsData as Project[]).find(project => project.id === id);
  }
}
