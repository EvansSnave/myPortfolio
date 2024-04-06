import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PROJECTS } from '../projects/projects.data';
import { Projects } from '../projects/projects';
import { NgOptimizedImage } from '@angular/common';
import { CarouselModule } from 'ngx-carousel-ease';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgOptimizedImage, CarouselModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @ViewChildren('slide') slides: QueryList<ElementRef<HTMLLIElement>>;
  @ViewChild('slider') slider: ElementRef<HTMLUListElement>;
  @ViewChild('prev') prevBtn: ElementRef<HTMLButtonElement>;
  @ViewChild('next') nextBtn: ElementRef<HTMLButtonElement>;
  id: number;
  projects: Projects[];
  private routeSub: Subscription;
  project: Projects;

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private ref: ElementRef) {
    this.id = 0;
    this.routeSub = this.route.params.subscribe();
    this.projects = PROJECTS;
    this.project = PROJECTS[0];
    this.slides = this.ref.nativeElement;
    this.slider = this.ref.nativeElement;
    this.prevBtn = this.ref.nativeElement;
    this.nextBtn = this.ref.nativeElement;
   }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.project = this.projects.find((pro) => pro.id == this.id) || this.projects[0];
  }

}
