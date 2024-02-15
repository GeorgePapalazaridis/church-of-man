import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'church-of-man-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteComponent {}
