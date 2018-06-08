import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase:';
  public resposta = '';

  public rodada = 0;
  public rodadaFrase: Frase;

  public progresso = 0;

  public tentativas = 3;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    // console.log(this.resposta);
  }

  public verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr === this.resposta) {

      // Troca pergrunta da rodada
      this.rodada++;

      // progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      // Notifica o sucesso
      if (this.rodada === 4) {
        alert('Concluiu as traduções com sucesso!');
      }

      // Atualiza o objeto rodadaFrase
      this.atualizaRodada();

    } else {

      // Decrementa a quantidade de tentativas
      this.tentativas--;

      if (this.tentativas === -1) {
        alert('Você perdeu todas as tentativas');
      }
    }
  }

  public atualizaRodada(): void {
    // Define a frase da rodada baseada em alguma lógica
    this.rodadaFrase = this.frases[this.rodada];

    // Limpa a resposta
    this.resposta = '';
  }

}
