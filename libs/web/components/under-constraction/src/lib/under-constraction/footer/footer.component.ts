import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { SocialMediaComponent } from './socila-media/social-media.component';

@Component({
  standalone: true,
  imports: [CommonModule, SocialMediaComponent],
  selector: 'church-of-man-footer',
  templateUrl: './footer.component.html',
  styleUrl: '../under-constraction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {}
