import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PROJECTS } from '../projects/projects.data';
import { Projects } from '../projects/projects';
import { NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'ngx-carousel-ease';
import { FormComponent } from '../main/form/form.component';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgOptimizedImage, CarouselModule, FormComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectComponent implements OnInit {
  id: number;
  projects: Projects[];
  private routeSub: Subscription;
  project: Projects;
  size: number;

  constructor(private route: ActivatedRoute) {
    this.id = 0;
    this.routeSub = this.route.params.subscribe();
    this.projects = PROJECTS;
    this.project = PROJECTS[0];
    this.size = getWindow().innerWidth;
   }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.project = this.projects[this.id] || this.projects[0];
  }

}
