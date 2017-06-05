import { Component, OnInit } from '@angular/core';
import { PanierService } from './../../services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private panierService: PanierService ) {}

    panierOpen() {
        this.panierService.openPanier();
    }

    openConnexionModal() {
        document.getElementById('id01').style.display = 'block';
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

    ngOnInit() {}

}
