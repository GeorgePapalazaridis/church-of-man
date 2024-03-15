import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'church-of-man-band-member',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, RippleModule],
  templateUrl: './band-member.component.html',
  styleUrl: './band-member.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BandMemberComponent {}
