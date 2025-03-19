import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { Iprofile } from '../../core/interfaces/iprofile';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profiledata !: Iprofile;
  private readonly _AuthService = inject(AuthService)
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit(): void {
    this._AuthService.getuserdata(sessionStorage.getItem('Accesstoken')!).subscribe({
      next : (res)=>{
        console.log(res.data)
        this.profiledata = res.data
        console.log(this.profiledata)
      }
    })
  }


  gotogithubaccount(){
    window.open(`https://github.com/${this.profiledata.userName}`)

  }

}
