import { Injectable } from '@angular/core';

@Injectable()
export class SignService {

  isConneted = false;
  isAdmin = false;

  constructor() { }

  connexion() {
    this.isConneted = true;
  }

  deconnexion() {
    this.isConneted = false;
  }

  connexionAdmin() {
    this.isAdmin = true;
  }

  deconnexionAdmin() {
    this.isAdmin = false;
  }

  openSign() {
    document.getElementById('signNav').style.height = '100%';
  }

  closeSign() {
    document.getElementById('signNav').style.height = '0%';
  }

}
