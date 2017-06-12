import { Injectable } from '@angular/core';

@Injectable()
export class PanierService {

  items = [];

  constructor() { }

  openPanier() {
    document.getElementById('panierNav').style.width = '100%';
  }

  closePanier() {
    document.getElementById('panierNav').style.width = '0%';
  }

  addItem() {
    document.getElementById('panierNav').style.width = '0%';
  }

}
