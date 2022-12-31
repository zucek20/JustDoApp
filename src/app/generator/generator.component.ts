import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
