export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  status: 'Live' | 'In progress' | 'Completed';
}
