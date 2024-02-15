import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';
import { QuoteMessageComponent } from './quote-message/quote-message.component';

@Component({
  standalone: true,
  imports: [CommonModule, QuoteMessageComponent],
  selector: 'church-of-man-header',
  templateUrl: './header.component.html',
  styleUrls: ['../under-constraction.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  dynamicStyle: { [key: string]: string } = {};
  dynamiTextStyles: { [key: string]: string } = {};

  constructor() {
    this.setStyle(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    this.setStyle((event.target as Window).innerWidth);
  }

  setStyle(screenWidth: number) {
    this.dynamicStyle =
      screenWidth < 768
        ? { 'clip-path': 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' }
        : { 'clip-path': 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' };

    this.dynamiTextStyles = screenWidth < 768 ? { 'text-align': 'center' } : {};
  }
}
