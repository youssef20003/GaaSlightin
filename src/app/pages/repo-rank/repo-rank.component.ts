import { RepoRankService } from './../../core/services/repo_rank/repo-rank.service';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Irank } from '../../core/interfaces/irank';
import { SortPipe } from '../../shared/pipe/sort/sort.pipe';

@Component({
  selector: 'app-repo-rank',
  imports: [ SortPipe],
  templateUrl: './repo-rank.component.html',
  styleUrl: './repo-rank.component.css'
})
export class RepoRankComponent implements OnInit {
  // Assuming you have an items array
  // items = [
  //   { name: 'Grpc in GO', stars: 12, forks: 4 /* other properties */ },
  //   { name: 'Distributed System', stars: 12, forks: 4 /* other properties */ },
  //   { name: 'Encryption Tool in Rust', stars: 12, forks: 4 /* other properties */ },
  //   { name: 'Compiler', stars: 12, forks: 4 /* other properties */ }
  //   // ... more items
  // ];

  reporank !: Irank[];


  private readonly _RepoRankService = inject(RepoRankService);

  //rankedColors = ["linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)", "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)", "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)"]

  // Define background classes for top 3

  ngOnInit(): void {
    this._RepoRankService.getreposranke().subscribe({
      next : (res)=>{
        console.log(res)
        this.reporank= res.message
      }
    })
  }

  getreporank():void{
    this._RepoRankService.getreposranke().subscribe({
      next : (res)=>{
        console.log(res)
        this.reporank= res.message
      }
    })
  }


  rank(reponame : string ):void{
    this._RepoRankService.rankrepo(reponame).subscribe({
      next:(res)=>{
        console.log(res)
        this.getreporank()

      }
    })
  }

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
