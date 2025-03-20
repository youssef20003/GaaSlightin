import { GaasService } from './../../core/services/gaas/gaas.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ipost } from '../../core/interfaces/ipost';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  postid !: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,) { }
    private readonly _GaasService = inject(GaasService);
    postdata !: Ipost;
  ngOnInit(): void {
    this.postid = this.route.snapshot.paramMap.get('id') || '';
    console.log(this.postid)
    this._GaasService.getapost(this.postid).subscribe({
      next : (res)=>{
        
        this.postdata = res
        console.log(this.postdata)
      }
    })

  }

}
