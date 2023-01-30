import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigateTopService } from './services/navigate-top.service';
import { fader } from './route-animations'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fader
  ]
})
export class AppComponent {
  @ViewChild('mobileMenu') mobileMenu: ElementRef<HTMLDivElement>


  constructor(
    public navigate: NavigateTopService
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

  public openMenu(): void {
    this.mobileMenu.nativeElement.style.left = '0%'
  }

  public closeMenu(): void {
    this.mobileMenu.nativeElement.style.left = '100%'
  }

  @HostListener('window:scroll') darken(): void {
    const nav: any = document.querySelector('.navwrap')
    if (window.pageYOffset > 80) {
      nav.style.backgroundColor = '#00000060'
    } else {
      nav.style.backgroundColor = '#00000000'
    }
  }
}
