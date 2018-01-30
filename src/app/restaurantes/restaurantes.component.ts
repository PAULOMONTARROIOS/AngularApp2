import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.services'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertaService : OfertasService) { }

  public ofertas : Array<Oferta>
  public dataTeste : any = new Date(2017,8,30)

  ngOnInit() {

    this.ofertaService.getOfertasPorCategoria('restaurante')
    .then( (ofertas : Oferta[]) => {
      this.ofertas = ofertas;
    })
  }
}
