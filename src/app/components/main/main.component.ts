import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormComponent } from './form/form.component';
import { TechnicalComponent } from './technical/technical.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    WelcomeComponent, 
    AboutComponent, 
    ExperienceComponent,
    FormComponent,
    TechnicalComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
