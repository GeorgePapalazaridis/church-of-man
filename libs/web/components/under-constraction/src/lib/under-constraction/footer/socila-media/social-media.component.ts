import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'church-of-man-social-media',
  templateUrl: './social-media.component.html',
  styleUrl: '../../under-constraction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SocialMediaComponent {}
