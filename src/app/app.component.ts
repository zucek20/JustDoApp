import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  @HostListener('window:scroll') darken(): void {
    const nav = document.querySelector('nav')
    if (window.pageYOffset > 80) {
      nav.style.backgroundColor = '#00000060'
    } else {
      nav.style.backgroundColor = '#00000000'
    }
  }

  // instantly scroll to top after navigating
  navigateTop() {
    window.scrollTo({top: 0})
  }
}
