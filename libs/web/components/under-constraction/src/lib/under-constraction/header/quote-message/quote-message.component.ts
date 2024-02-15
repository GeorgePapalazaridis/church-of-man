import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'church-of-man-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class QuoteMessageComponent {}
