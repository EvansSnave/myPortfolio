import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technical',
  standalone: true,
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.scss']
})
export class TechnicalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toProject():void {
    this.router.navigate(['/project/0']);
  }

  scrollToFooter():void {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
