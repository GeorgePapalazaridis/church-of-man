import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '@church-of-man/shared';
import { Inject } from '@angular/core';

@Component({
  selector: 'church-of-man-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor(@Inject(LayoutService) public layoutService: LayoutService) {}
}
