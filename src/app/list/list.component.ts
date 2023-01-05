import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { quoteList } from 'src/assets/quoteList';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ListComponent implements OnInit {
  quotes = quoteList

  constructor() { }

  ngOnInit(): void {
  }

}
