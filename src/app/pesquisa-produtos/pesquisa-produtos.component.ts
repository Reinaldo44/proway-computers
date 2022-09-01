import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa-produtos',
  templateUrl: './pesquisa-produtos.component.html',
  styleUrls: ['./pesquisa-produtos.component.css']
})
export class PesquisaProdutosComponent implements OnInit {

  descricao = "";

  constructor(

    private router: Router
    
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){

    if(this.descricao){

      this.router.navigate(["produtos"] , { queryParams :  { descricao : this.descricao }});
      return;

    }

    this.router.navigate(["produtos"]);

  }

}
