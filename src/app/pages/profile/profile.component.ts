import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, OnInit, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { Iprofile } from '../../core/interfaces/iprofile';
import { IRepo } from '../../core/interfaces/iRepo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  reposData :any = [];
  profiledata !: Iprofile;
  private readonly _AuthService = inject(AuthService)
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit(): void {
    this._AuthService.getuserdata(sessionStorage.getItem('Accesstoken')!).subscribe({
      next : (res)=>{
        this.profiledata = res.data
        console.log(this.profiledata)

        
        // this.getReposDetails();
      }
    })
  }


  gotogithubaccount(){
    window.open(`https://github.com/${this.profiledata.userName}`)

  }

  // async getReposDetails() {
  //   for (let repo of this.profiledata.repositories) {
  //     const urlRepoData = `https://api.github.com/repos/${this.profiledata.userName}/${repo}`;
  //     const urlRepoTopics = `https://api.github.com/repos/${this.profiledata.userName}/${repo}/topics`;

  //     try {
  //       // Fetch repo data
  //       const resRepoData = await fetch(urlRepoData, {
  //         headers: {
  //           Accept: 'application/vnd.github+json' // GitHub API requirement
  //         }
  //       });
  //       const repoData = await resRepoData.json();

  //       if (!resRepoData.ok) {
  //         throw new Error(`GitHub API error: ${repoData.message}`);
  //       }

  //       // Fetch repo topics
  //       const resRepoTopics = await fetch(urlRepoTopics, {
  //         headers: {
  //           Accept: 'application/vnd.github+json'
  //         }
  //       });
  //       const repoTopics = await resRepoTopics.json();

  //       // Extract required details
  //       const repoDetails = {
  //         name: repo,
  //         about: repoData.description || 'No description provided',
  //         stars: repoData.stargazers_count,
  //         forks: repoData.forks_count,
  //         topics: repoTopics.names // Array of topics
  //       };

  //       this.reposData.push(repoDetails);
  //     } catch (error) {
  //       console.error(`Error fetching repository details for ${repo}:`, error);
  //     }
  //   }

  //   console.log('Final reposData:', this.reposData);
  // }

}
