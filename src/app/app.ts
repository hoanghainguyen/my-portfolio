import {Component, WritableSignal, ChangeDetectionStrategy} from '@angular/core';
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

  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.css']
})
export class App {
  projects: WritableSignal<Project[]>;
  //projects: Project[] = [];
  activeLang = signal<'en' | 'fr' | 'nl'>('en');
  languages = [
    { code: 'en' as const, label: 'EN' },
    { code: 'fr' as const, label: 'FR' },
    { code: 'nl' as const, label: 'NL' },
  ];

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }
}
