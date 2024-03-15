import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { QuoteComponent } from './quote/quote.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BandMemberComponent } from '../band-member/band-member.component';

@Component({
  selector: 'church-of-man-under-constraction',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule,
    RippleModule,
    QuoteComponent,
    FooterComponent,
    HeaderComponent,
    BandMemberComponent
  ],
  templateUrl: './under-constraction.component.html',
  styleUrl: './under-constraction.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderConstractionComponent {}
