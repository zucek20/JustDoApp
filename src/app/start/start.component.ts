import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigateTopService } from '../services/navigate-top.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class StartComponent implements OnInit {

  constructor(
    public navigate: NavigateTopService
  ) { }

  ngOnInit(): void {
  }

}
