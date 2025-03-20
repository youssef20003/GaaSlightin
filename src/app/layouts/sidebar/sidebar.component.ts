import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { Iprofile } from '../../core/interfaces/iprofile';

@Component({
  selector: 'app-sidebar',
  imports: [ RouterLink , RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private _Router : Router){}

  private readonly _AuthService = inject(AuthService)
  profiledata !: Iprofile;

  ngOnInit(): void {
    this._AuthService.getuserdata(sessionStorage.getItem('Accesstoken')!).subscribe({
      next : (res)=>{
        this.profiledata = res.data
        console.log(this.profiledata)
      }
    })
  }

  logout():void{
    sessionStorage.removeItem('Accesstoken');
    this._Router.navigate(['/home'])

  }
}
