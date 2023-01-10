import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigateTopService } from './services/navigate-top.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // @ViewChild('burger') burger: ElementRef<HTMLSpanElement>
  // @ViewChild('close') close: ElementRef<HTMLSpanElement>
  @ViewChild('mobileMenu') mobileMenu: ElementRef<HTMLDivElement>


  constructor(
    public navigate: NavigateTopService
  ) {}

  public openMenu(): void {
    this.mobileMenu.nativeElement.style.left = '0%'
  }

  public closeMenu(): void {
    this.mobileMenu.nativeElement.style.left = '100%'
  }

  @HostListener('window:scroll') darken(): void {
    const nav = document.querySelector('nav')
    if (window.pageYOffset > 80) {
      nav.style.backgroundColor = '#00000060'
    } else {
      nav.style.backgroundColor = '#00000000'
    }
  }
}
