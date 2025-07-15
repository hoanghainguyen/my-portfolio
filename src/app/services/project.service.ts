import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects = signal<Project[]>([
    {
      name: 'Belgian Cities',
      description: 'Show images of Belgian Cities',
      techStack: ['Angular', 'TypeScript', ],
      liveUrl: 'https://belgian-city.vercel.app/'
    },
    {
      name: 'Treasure Hunt',
      description: 'Hunt  treasures',
      techStack: ['Angular', 'Node.js'],
      liveUrl: 'https://treasure-hunt-three-bay.vercel.app/'
    },
    {
      name: 'Name Game',
      description: 'Name animal and fruit game ',
      techStack: ['Angular', 'Node.js', ],
      liveUrl: 'https://name-game-eta.vercel.app/'
    },
    {
      name: 'Health Tracker Dashboard',
      description: 'This web is to track your daily health activities including exercise, meditation, and sleep',
      techStack: ['Python', 'Flask',"Javascript","Posgresql"],
      liveUrl: 'https://health-tracker-dashboard-rho.vercel.app/'
    }

  ]);
    // Add more projects here


  getProjects = () => this.projects;

}
