import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input() project!: Project;

}
