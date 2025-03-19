import { Component, Inject, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AuthService } from '../../core/services/auth/auth.service';
@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  private readonly _AuthService = inject(AuthService)

  authwithgithub():void{
    this._AuthService.authwithgithub();
  }








}
