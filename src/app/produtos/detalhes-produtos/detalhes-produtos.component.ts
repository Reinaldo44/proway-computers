import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.component.html',
  styleUrls: ['./detalhes-produtos.component.css']
})
export class DetalhesProdutosComponent implements OnInit {


  produtos: IProduto | undefined;

  quantidade: number = 1;

  constructor(

    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService:NotificacaoService,
    private carrinhoService: CarrinhoService

  ) 

  { 
    
  }

  ngOnInit(): void {

    this.produtos = this.produtosService.getOne(this.retornarRouteId());

  }

  retornarRouteId(){

    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));

    return produtoId;

  }

  adicionarAoCarrinho(){
     this.notificacaoService.notificar("Produto adicionado com sucesso");
     
     const produto: IProdutoCarrinho = {
         ...this.produtos!,
         quantidade: this.quantidade
     }   
     this.carrinhoService.adicionarAoCarrinho(produto);    
  }

}
