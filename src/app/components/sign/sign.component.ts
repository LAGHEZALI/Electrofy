import { Component, OnInit } from '@angular/core';
import { SignService } from './../../services/sign.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  cnxForm: FormGroup;
  inscrForm: FormGroup;

  constructor(  private signService: SignService,
                private fb: FormBuilder,
                private router: Router,
             ) {

    this.cnxForm = this.fb.group({
      'email' : [ '', Validators.email],
      'mdp'   : [ '', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
    });

    this.inscrForm = this.fb.group({
      'nom'     : [ '', Validators.required],
      'prenom'  : [ '', Validators.required],
      'cin'     : [ '', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{2}[0-9]{5}')])],
      'rue'     : [ '', Validators.required],
      'ville'   : [ '', Validators.required],
      'email' : [ '', Validators.email],
      'mdp'   : [ '', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
    });
  }

  cnxSubmit() {
    if (!this.cnxForm.get('email').valid) {
      this.showSnack('Email Vide ou non Valide !', 'cnx1');

    } else if (!this.cnxForm.get('mdp').valid) {
      this.showSnack('Mot de passe Vide ou non Valide !', 'cnx2');

    } else {
      //  TRAITEMENT VOICI LES PARAMETRE
      const email = this.cnxForm.get('email').value;
      const mdp = this.cnxForm.get('mdp').value;

      const x = '0' , y = '0';

      //  Verification des logs
      if ( email === 'admin@electrofy.com' && mdp === 'admin123') {

        this.signClose();
        this.signService.connexionAdmin();
        this.router.navigate(['/admin']);

      } else if (x === y) { // si email et mdp correspondent a un compte

        this.signService.connexion();
        this.signClose();

      } else {  // si email et mdp corresponde a un compte sont incorrect mais valide

        this.showSnack('Email ou Mot de passe Incorrect veuillez ressayer !', '');
      }
    }
  }

  inscrSubmit() {
    if (!this.inscrForm.get('nom').valid) {
      this.showSnack('Nom Vide !', 'inscr1');

    } else if (!this.inscrForm.get('prenom').valid) {
      this.showSnack('Prénom Vide !', 'inscr2');

    } else if (!this.inscrForm.get('cin').valid) {
      this.showSnack('CIN Vide ou non Valide !', 'inscr3');

    } else if (!this.inscrForm.get('rue').valid) {
      this.showSnack('Rue Vide !', '');

    } else if (this.inscrForm.get('ville').value === 'Toucher pour Choisir Ville') {
      this.showSnack('Ville Vide !', '');

    } else if (!this.inscrForm.get('email').valid) {
      this.showSnack('Email Vide ou non Valide !', 'inscr7');

    } else if (!this.inscrForm.get('mdp').valid) {
      this.showSnack('Mot de passe Vide ou non Valide ! (8 à 20 caractères)', 'inscr8');

    } else {
      //  TRAITEMENT VOICI LES PARAMETRE
      this.inscrForm.get('nom').value;
      this.inscrForm.get('prenom').value;
      this.inscrForm.get('cin').value;
      this.inscrForm.get('rue').value;
      this.inscrForm.get('ville').value;
      this.inscrForm.get('email').value;
      this.inscrForm.get('mdp').value;
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

  signClose() {
    this.signService.closeSign();
  }

  ngOnInit() {
    this.inscrForm.get('ville').setValue('Toucher pour Choisir Ville');
  }

}
