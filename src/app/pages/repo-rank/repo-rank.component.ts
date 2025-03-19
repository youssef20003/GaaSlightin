import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-repo-rank',
  imports: [],
  templateUrl: './repo-rank.component.html',
  styleUrl: './repo-rank.component.css'
})
export class RepoRankComponent {
  // Assuming you have an items array
  items = [
    { name: 'Grpc in GO', stars: 12, forks: 4 /* other properties */ },
    { name: 'Distributed System', stars: 12, forks: 4 /* other properties */ },
    { name: 'Encryption Tool in Rust', stars: 12, forks: 4 /* other properties */ },
    { name: 'Compiler', stars: 12, forks: 4 /* other properties */ }
    // ... more items
  ];

  //rankedColors = ["linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)", "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)", "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"]

  // Define background classes for top 3
  getBackgroundClass(index: number): string {
    switch (index) {
      case 0:
        return 'bg-gold';    // First place
      case 1:
        return 'bg-silver';  // Second place
      case 2:
        return 'bg-bronze';  // Third place
      default:
        return 'bg-white';   // Default for others
    }
  }

  getTextClass(index: number): string {
    switch (index) {
      case 0:
        return 'text-gold';    // First place
      case 1:
        return 'text-silver';  // Second place
      case 2:
        return 'text-bronze';  // Third place
      default:
        return 'text-white';   // Default for others
    }
  }
}
