import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'

const listEnsaio = [

  {
    "id": 1,
    "tipo": "Gestacional",
    "urlImg": "https://alfred.alboompro.com/resize/width/1200/height/1200/url/storage.alboompro.com/sites/4745/media/_gestante_-_sturion_fotografias_284b79670f25.jpg?t=1586005920"
  },

  {
    "id": 2,
    "tipo": "Casamento",
    "urlImg": "https://lapisdenoiva.com/wp-content/uploads/2019/05/ensaio-pos-casamento-14.jpg"
  },

  {
    "id": 4,
    "tipo": "Familiar",
    "urlImg": "https://fotografiamais.com.br/wp-content/uploads/2018/08/ensaio-fotografico-familia-local-ideal.jpg"
  },

  {
    "id": 5,
    "tipo": "Aniversário Infantil",
    "urlImg": "https://storage.alboom.ninja/sites/559/albuns/843699/193922157_182603760537172_3384976975638493490_n.jpg?t=1623181301"
  },

  {
    "id": 6,
    "tipo": "Acompanhamento Mensal",
    "urlImg": "https://storage.alboom.ninja/sites/4445/media/af0a2622_1954dacf19a4.jpg?t=1585512342"
  },

  {
    "id": 7,
    "tipo": "Batizado",
    "urlImg": "https://huainenunes.com/wp-content/uploads/2019/10/HUA_5485.jpg"
  }

]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photo: string = 'https://cdn.leroymerlin.com.br/products/papel_de_parede_paisagem_lago_natureza_sala_painel_052pcp_1567477748_af15_600x600.jpg'

  tiposEnsaios = listEnsaio;

  ngOnInit():void {
    AOS.init()
  }

}
