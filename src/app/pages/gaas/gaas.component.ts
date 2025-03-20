import { IRepo } from '../../core/interfaces/iRepo';
import { GaasService } from './../../core/services/gaas/gaas.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-gaas',
  imports: [],
  templateUrl: './gaas.component.html',
  styleUrl: './gaas.component.css'
})
export class GaasComponent implements OnInit {
  private readonly _GaasService = inject(GaasService)

  token = sessionStorage.getItem('Accesstoken');

  repos !: IRepo[];

  ngOnInit(): void {
    this._GaasService.getallrepos().subscribe({
      next: (res) => {
        console.log(res.data)
        this.repos = res.data
      }
    })
  }

  
  makepost(repo_name: string): void {
    this._GaasService.makepost(this.token!, repo_name).subscribe({
      next: (res) => {
        console.log(res)
      }
    })
  }



}
