import { Component, OnInit } from '@angular/core';
import { PanierService } from './../../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private panierService: PanierService ) {

  }

  panierClose() {
    this.panierService.closePanier();
  }

  ngOnInit() {}


}
