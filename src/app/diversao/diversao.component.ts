import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services'
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  public ofertas : Array<Oferta>

  constructor(private ofertaService : OfertasService) { }

  ngOnInit() {
      this.ofertaService.getOfertasPorCategoria('diversao')
      .then( (ofertas : Array<Oferta>) => {
        this.ofertas = ofertas
      })
  }
}
