import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(
    private matSnackBar:MatSnackBar
  ) { }

  notificar(mensagem:string){
       this.matSnackBar.open(mensagem, "OK",{
         duration :2000,
         verticalPosition: "top",
         horizontalPosition:"center"
       })
  }
}
