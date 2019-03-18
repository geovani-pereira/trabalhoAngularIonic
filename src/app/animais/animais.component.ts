import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.css']
})
export class AnimaisComponent implements OnInit {

  ani = new Array(
    ["Cavalo","O cavalo um mamífero herbívoro da ordem dos ungulados, uma das três subespécies modernas da espécie Equus ferus. A denominação para as fêmeas é égua, para os machos não castrados é garanhão, para os machos castrados é capão, e para os filhotes é potro. Esse grande ungulado é membro da mesma família dos asnos e das zebras, a dos equídeos. e"],
    ["Cachorro","O cão é um mamífero com dentes afiados, excelente faro e boa audição. ... Paralelamente a essas características comuns, os cães têm diferentes tamanhos, formas e cores. Os cães que têm tamanho, aparência e comportamento parecidos fazem parte de um grupo chamado raça. Existem mais de quatrocentas raças de cães.!"],
    ["Papagaio", "O papagaio se tornou muito famoso pela sua capacidade de aprender a falar como os homens. A ave silvestre é o único animal domesticado capaz de reproduzir palavras, frases e até músicas na língua humana. Por esse motivo, quem tem um exemplar da ave, considerada um animal exótico, em casa adora ensinar algumas palavras e brincadeiras que divertem qualquer pessoa pelo fato da espontaneidade."],
    ["Gato", "O gato, também conhecido como gato caseiro, gato urbano ou gato doméstico, é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetosl"],
    ["Elefante", "O efante é o termo genérico e popular pelo qual são denominados os membros da família Elephantidae, um grupo de mamíferos proboscídeos elefantídeos, de grande porte, do qual há três espécies no mundo atual, duas africanas e uma asiática. Há ainda os mamutes, hoje extintos"],
    ["Peixe","Os peixes são animais vertebrados, aquáticos, tipicamente ectotérmicos, que possuem o corpo fusiforme, os membros transformados em barbatanas ou nadadeiras (ausentes em alguns grupos) sustentadas por raios ósseos ou cartilaginosos, guelras ou brânquias com que respiram o oxigénio dissolvido na água (embora os dipnóicos usem pulmões) e, na sua maior parte, o corpo coberto de escamas"]
    );

  animal = new Array( "Peixe","Os peixes são animais vertebrados, aquáticos, tipicamente ectotérmicos, que possuem o corpo fusiforme, os membros transformados em barbatanas ou nadadeiras (ausentes em alguns grupos) sustentadas por raios ósseos ou cartilaginosos, guelras ou brânquias com que respiram o oxigénio dissolvido na água (embora os dipnóicos usem pulmões) e, na sua maior parte, o corpo coberto de escamas "
  );

  constructor() { }

  ngOnInit() {
  }

  nomeAnimal(valor){
    this.animal=valor;
  }

}
