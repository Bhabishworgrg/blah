import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Design } from '../../models/design.model';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class PortfolioCardComponent {
  design = input.required<Design>();
}
