import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierService } from './../../services/panier.service';
import { SignService } from './../../services/sign.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(
        private panierService: PanierService,
        private signService: SignService,
        private router: Router
        ) {}

    panierOpen() {
        this.panierService.openPanier();
    }

    signOpen() {
        this.signService.openSign();
    }

    accountOpen() {

        const x = document.getElementById('demo');
        if (x.className.indexOf('w3-show') === -1) {
            x.className += ' w3-show';
        } else {
            x.className = x.className.replace(' w3-show', '');
        }

        console.log('wiiiiii3');
    }

    menuMobile() {
        const x = document.getElementById('demo');
        if (x.className.indexOf('w3-show') === -1) {
            x.className += ' w3-show';
        } else {
            x.className = x.className.replace(' w3-show', '');
        }
    }

    openSearch() {
        document.getElementById('searchNav').style.height = '100%';
    }

    closeSearch() {
        document.getElementById('searchNav').style.height = '0%';
    }

    ngOnInit() { }

}
