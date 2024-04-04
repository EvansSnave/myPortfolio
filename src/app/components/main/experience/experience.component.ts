import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
