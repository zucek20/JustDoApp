import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigateTopService {

  constructor() { }

  public  navigateTop() {
      window.scrollTo({top: 0})
    }
}
