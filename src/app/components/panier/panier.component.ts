import { Component, OnInit } from '@angular/core';
import { PanierService } from './../../services/panier.service';
import { SignService } from './../../services/sign.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {


  constructor(  private panierService: PanierService,
                private signService: SignService
             ) { }

  panierClose() {
    this.panierService.closePanier();
  }

  removeItem(index) {
    this.panierService.items.splice(index, 1);
    if (this.panierService.items.length === 0) {
      this.panierClose();
    }
  }

  passerPaiement() {
    if (this.signService.isConneted === false) {
      this.showSnackPanier('Connectez-Vous pour faire des achats !');
    }
  }

  showSnackPanier(msg) {
    const x = document.getElementById('snackbarPanier');
    x.innerHTML = msg;
    x.className = 'show';

    setTimeout(function(){
      x.className = x.className.replace('show', 'hide');
    }, 2000);
  }

  ngOnInit() {  }

}
