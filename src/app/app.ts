import {Component, WritableSignal} from '@angular/core';
import { Injectable, signal } from '@angular/core';
import { Project } from './models/project';
import { ProjectService } from './services/project.service';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import {ProjectCard} from './project-card/project-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    Header,
    ProjectCard,
    Footer
  ],
  styleUrls: ['./app.css']
})
export class App {
  projects: WritableSignal<Project[]>;
  //projects: Project[] = [];

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }
}
