import { ChangeDetectionStrategy, Component, Input, AfterViewInit, HostListener, ViewChild, ElementRef, } from '@angular/core';
import { quoteList } from '../../assets/quoteList';
import { quote } from 'src/models/Quote';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneratorComponent implements AfterViewInit {
  @Input() keyword: string;
  @ViewChild('img') img: ElementRef<HTMLDivElement>
  @ViewChild('notFound') notFound: ElementRef<HTMLParagraphElement>
  private quoteList: quote[]
  // initial quote values
  public currentQuote: quote = {
    quote: '',
    author: ''
  }

  ngAfterViewInit(): void {
    this.quoteList = quoteList;
  }

  // generate random number in range 0 - quoteList.length
  private randomizeQuote(): number {
    return Math.floor(Math.random() * quoteList.length)
  }

  public onPreventSpace(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault()
    }
  }

  private randomizeBackground() {
    this.img.nativeElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(../../assets/images/${Math.ceil(Math.random() * 10)}.jpg)`
  }

  public generate() {
    if (this.keyword != undefined) {
      let filteredQuotes = this.quoteList.filter(quote => quote.quote.includes(this.keyword))
      if (filteredQuotes.length == 0) {
        this.notFound.nativeElement.style.display = 'block'
      } else {
        this.notFound.nativeElement.style.display = 'none'
        this.currentQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)]
        this.randomizeBackground()
      }
    } else {
      this.randomizeBackground()
      this.currentQuote = this.quoteList[this.randomizeQuote()]
    }
  }

}
