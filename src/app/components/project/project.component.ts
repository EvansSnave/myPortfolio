import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PROJECTS } from '../projects/projects.data';
import { Projects } from '../projects/projects';

@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id: number;
  projects: Projects[];
  private routeSub: Subscription;
  project: Projects;

  constructor(private route: ActivatedRoute) {
    this.id = 0;
    this.routeSub = this.route.params.subscribe();
    this.projects = PROJECTS;
    this.project = PROJECTS[0];
   }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.project = this.projects.find((pro) => pro.id == this.id) || this.projects[0];
  }

}
