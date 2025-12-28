import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { Design } from './models/design.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PortfolioCardComponent, NgOptimizedImage],
})
export class AppComponent {
  designs = signal<Design[]>([
    {
      id: 1,
      imageUrl: 'https://picsum.photos/seed/fashion1/600/900',
      title: 'Avant-Garde Silhouette',
      collection: 'Metamorphosis',
      year: 2024,
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/seed/fashion2/600/900',
      title: 'Urban Explorer',
      collection: 'Concrete Jungle',
      year: 2024,
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/seed/fashion3/600/900',
      title: 'Ethereal Bloom',
      collection: 'Secret Garden',
      year: 2023,
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/seed/fashion4/600/900',
      title: 'Midnight Velvet',
      collection: 'Nocturne',
      year: 2023,
    },
    {
      id: 5,
      imageUrl: 'https://picsum.photos/seed/fashion5/600/900',
      title: 'Desert Mirage',
      collection: 'Golden Sands',
      year: 2022,
    },
    {
      id: 6,
      imageUrl: 'https://picsum.photos/seed/fashion6/600/900',
      title: 'Coastal Serenity',
      collection: 'Oceanic Whispers',
      year: 2022,
    },
  ]);
}
