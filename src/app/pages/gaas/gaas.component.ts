import { Router, RouterLink } from '@angular/router';
import { IRepo } from '../../core/interfaces/iRepo';
import { GaasService } from './../../core/services/gaas/gaas.service';
import { Component, inject, OnInit } from '@angular/core';
import { Ipost } from '../../core/interfaces/ipost';

@Component({
  selector: 'app-gaas',
  imports: [RouterLink],
  templateUrl: './gaas.component.html',
  styleUrl: './gaas.component.css'
})
export class GaasComponent implements OnInit {
  private readonly _GaasService = inject(GaasService)
  constructor(private _Router : Router){}

  loadingflag : boolean = false;
  token = sessionStorage.getItem('Accesstoken');

  repos !: IRepo[];
  posts !: Ipost[]

  ngOnInit(): void {
    this._GaasService.getallrepos().subscribe({
      next: (res) => {
        console.log(res.data)
        this.repos = res.data
      }
    })


    this._GaasService.getallpost().subscribe({
      next :(res)=>{
        console.log(res)
        this.posts= res
      }
    })
  }

  
  makepost(repo_name: string): void {
    this.loadingflag = true
    this._GaasService.makepost(this.token!, repo_name).subscribe({
      next: (res) => {
        console.log(res._id)
        this.loadingflag = false
        this._Router.navigate([ '/post' , res._id])
      }
    })
  }



}
