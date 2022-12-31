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
    if (window.pageYOffset > 100) {
      nav.style.backgroundColor = '#00000060'
    } else {
      nav.style.backgroundColor = '#00000000'
    }
  }
}
