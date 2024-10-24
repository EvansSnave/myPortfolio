import { Component, OnInit } from '@angular/core';
import { Projects } from './projects';
import { PROJECTS } from './projects.data';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Projects[];

  constructor(private router: Router) { 
    this.projects = PROJECTS;
  }

  ngOnInit() {
  }

  toProject(id: number): void {
    this.router.navigate([`/project/${id}`]);
  }

}
