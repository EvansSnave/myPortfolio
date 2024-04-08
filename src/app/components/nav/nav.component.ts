import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, Renderer2, ElementRef} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(private render: Renderer2, private el: ElementRef) {
  }

  ngOnInit():void {
    const nav = this.el.nativeElement.querySelector('nav');
    this.render.setStyle(nav, 'left', '-30vw');
  }

  toggleNav(burger: HTMLButtonElement, nav: HTMLElement, overlay: HTMLDivElement): void {
    const isNavOpen = nav.style.left !== '-30vw';

    this.render.setStyle(burger, 'display', isNavOpen ? 'block' : 'none');
    this.render.setStyle(nav, 'left', isNavOpen ? '-30vw' : '0');
    this.render.setStyle(overlay, 'display', isNavOpen ? 'none' : 'block');
    this.render.setStyle(document.body, 'overflow', isNavOpen ? 'scroll' : 'hidden');
  }

}
