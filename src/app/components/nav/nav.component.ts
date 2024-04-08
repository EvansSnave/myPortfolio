import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, Renderer2, HostListener, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('nav') nav: ElementRef<HTMLElement>;
  @ViewChild('overlay') overlay: ElementRef<HTMLDivElement>;
  @ViewChild('burger') burger: ElementRef<HTMLButtonElement>

  constructor(private render: Renderer2, private el: ElementRef) {
    this.nav = this.el.nativeElement;
    this.overlay = this.el.nativeElement;
    this.burger = this.el.nativeElement;
  }

  ngOnInit():void {
  }

  toggleNav(burger: HTMLButtonElement, nav: HTMLElement, overlay: HTMLDivElement): void {
    const isNavOpen = nav.style.left === '0px';

    this.render.setStyle(burger, 'display', isNavOpen ? 'block' : 'none');
    this.render.setStyle(nav, 'left', isNavOpen ? '-30vw' : '0px');
    this.render.setStyle(overlay, 'display', isNavOpen ? 'none' : 'block');
    this.render.setStyle(document.body, 'overflow', isNavOpen ? 'scroll' : 'hidden');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    let width = (event.target as Window).innerWidth;
    this.render.setStyle(document.body, 'overflow', 'scroll');
    if (width > 1024) {
      this.render.setStyle(this.nav.nativeElement, 'left', '0px');
      this.render.setStyle(this.burger.nativeElement, 'display', 'none');
    } else {
      this.render.setStyle(this.nav.nativeElement, 'left', '-30vw');
      this.render.setStyle(this.overlay.nativeElement, 'display', 'none');
      this.render.setStyle(this.burger.nativeElement, 'display', 'block');
    }
  }

}
