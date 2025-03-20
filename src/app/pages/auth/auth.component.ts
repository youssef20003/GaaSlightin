import { routes } from './../../app.routes';
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit  {
  code: string | null = null;
  isLoading: boolean = false;
  constructor(private routes: ActivatedRoute,@Inject(PLATFORM_ID) private platformId: Object , private _Router : Router){}
  readonly _AuthService = inject(AuthService)
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      this.code = this.routes.snapshot.queryParamMap.get('code');
      console.log('[Browser] Code from URL:', this.code);
      if (this.code) {
        this._AuthService.getaccesstoken(this.code).subscribe({
          next: (res) => {
            console.log('[Browser] Access token response:', res.accessToken);
            sessionStorage.setItem('Accesstoken' , res.accessToken);
            this._Router.navigate(['/profile'])

          },
          error: (err) => {
            console.error('[Browser] Error fetching access token:', err);
          },
          
        });
      } else {
        console.warn('[Browser] No code found in URL');
      }
    }

}
}
