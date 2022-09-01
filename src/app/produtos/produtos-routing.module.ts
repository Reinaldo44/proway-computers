import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesProdutosComponent } from './detalhes-produtos/detalhes-produtos.component';
import { ProdutosComponent } from './produtos.component';

const route: Routes = [
  { path: '', component: ProdutosComponent },
  { path: ':id', component: DetalhesProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})

export class ProdutosRoutingModule { }
