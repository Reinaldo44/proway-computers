import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RetornaRotaIdService {

  constructor(

    private route: ActivatedRoute
    
  ) { }

  retornarRouteId(){

    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));

    return produtoId;

  }

}
