import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlooterComponent } from './flooter/flooter.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import { PesquisaProdutosComponent } from './pesquisa-produtos/pesquisa-produtos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlooterComponent,
    NaoEncontradaComponent,
    PesquisaProdutosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
