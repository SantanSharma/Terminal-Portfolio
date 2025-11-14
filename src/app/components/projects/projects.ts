import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements OnInit {
  projects = signal<Project[]>([]);

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects.set(this.projectService.getProjects());
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Live':
        return 'text-terminal-green';
      case 'In progress':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  }
}
