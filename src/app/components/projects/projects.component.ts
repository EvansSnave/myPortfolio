import { Component, OnInit, ElementRef, ViewChildren, Renderer2 } from '@angular/core';
import { Projects } from './projects';
import { PROJECTS } from './projects.data';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[];

  constructor(private renderer: Renderer2, private ref: ElementRef, private router: Router) { 
    this.projects = PROJECTS;
  }

  ngOnInit() {
  }

  toProject(id: number): void {
    this.router.navigate([`/project/${id}`]);
  }

}
