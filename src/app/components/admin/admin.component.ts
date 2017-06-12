import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from './../../services/sign.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  ajouterProdForm: FormGroup;

  constructor(public signService: SignService,
              public router: Router,
              public fb: FormBuilder
              )
  {
    this.ajouterProdForm = this.fb.group({
      'lib'   : [ '', Validators.required],
      'cat'   : [ '', Validators.required],
      'img'   : [ '', Validators.required],
      'desc'  : [ '', Validators.required],
      'prixA' : [ '', Validators.required],
      'prixV' : [ '', Validators.required]
    });

  }

  ajouterProdSubmit() {
    if (!this.ajouterProdForm.get('lib').valid) {
      this.showSnack('Libelée Vide !', 'prod1');

    } else if (this.ajouterProdForm.get('cat').value === 'Toucher pour Choisir Une Catégorie') {
      this.showSnack('Vous n\'avez pas choisi de Catégorie !', 'prod2');

    } else if (!this.ajouterProdForm.get('img').valid) {
      this.showSnack('Vous n\'avez pas choisi d\'image !', 'prod3');

    } else if (!this.ajouterProdForm.get('desc').valid) {
      this.showSnack('Description Vide !', 'prod4');

    } else if (!this.ajouterProdForm.get('prixA').valid) {
      this.showSnack('Prix Achats Vide !', 'prod5');

    } else if (!this.ajouterProdForm.get('prixV').valid) {
      this.showSnack('Prix Vente Vide !', 'prod6');

    } else {
      //  TRAITEMENT VOICI LES PARAMETRE
      const lib = this.ajouterProdForm.get('lib').value;
      const cat = this.ajouterProdForm.get('cat').value;
      const img = this.ajouterProdForm.get('img').value;
      const desc = this.ajouterProdForm.get('desc').value;
      const prixA = this.ajouterProdForm.get('prixA').value;
      const prixV = this.ajouterProdForm.get('prixV').value;

    }
  }

  showSnack(msg, id) {
    const x = document.getElementById('snackbar');
    x.innerHTML = msg;
    x.className = 'show';

    const y = document.getElementById(id);
    y.className = 'input-error-bg';

    setTimeout(function(){
      x.className = x.className.replace('show', 'hide');
      y.className = y.className.replace('input-error-bg', 'input-no-error-bg');
    }, 2000);
  }

  ngOnInit() {
    this.ajouterProdForm.get('cat').setValue('Toucher pour Choisir Une Catégorie');
  }

  onChange(event) {
    const files = event.srcElement.files;
    const file = files[0];
    this.ajouterProdForm.get('img').setValue(file.name);
  }


  retour() {
    this.router.navigate(['/']);
  }

  openSidePop1() {
        document.getElementById('sidePop1').style.width = '100%';
    }

  closeSidePop1() {
      document.getElementById('sidePop1').style.width = '0%';
  }
}
