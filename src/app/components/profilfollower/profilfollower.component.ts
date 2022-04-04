import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profilfollower',
  templateUrl: './profilfollower.component.html',
  styleUrls: ['./profilfollower.component.css']
})
export class ProfilfollowerComponent implements OnInit {
  
  id:number;
  type:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params=>{
      console.log(params.get('id'))
      this.id = +params.get('id');
    })
    this.id = +this.route.snapshot.paramMap.get('id');

    this.route.queryParamMap.subscribe(queryparams=>
      console.log(queryparams))

      this.type = this.route.snapshot.queryParamMap.get('type');
  }

}
