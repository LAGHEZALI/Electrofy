import { Component, OnInit } from '@angular/core';
import { PanierService } from './../../services/panier.service';

@Component({
  selector: 'app-nos-produits',
  templateUrl: './nos-produits.component.html',
  styleUrls: ['./nos-produits.component.css']
})
export class NosProduitsComponent implements OnInit {

    items = [
        // tslint:disable-next-line:max-line-length
        { 'img': 'assets/img/cat1.png', 'title': 'Unbranded Fresh Chips', 'prix': 12.23, 'desc': 'BLA BLA BLA.' },
        { 'img': 'assets/img/cat2.png', 'title': 'Licensed Wooden Bacon', 'prix': 2112.00, 'desc': 'BLA BLA BLA..' },
        { 'img': 'assets/img/cat3.png', 'title': 'lorem', 'prix': 3853.65, 'desc': 'BLA BLA BLA..' },
        { 'img': 'assets/img/cat4.png', 'title': 'fugiat ea autem', 'prix': 512, 'desc': 'BLA BLA BLA..' },
        { 'img': 'assets/img/cat5.png', 'title': 'vsg sdgsdgs ', 'prix': 5412, 'desc': 'BLA BLA BLA..' },
        { 'img': 'assets/img/cat6.png', 'title': 'gsdgs sgsg', 'prix': 513, 'desc': 'BLA BLA BLA..' },
        { 'img': 'assets/img/cat7.png', 'title': 'gsgs sdgsdgs', 'prix': 9814, 'desc': 'BLA BLA BLA..' },
        { 'img': 'assets/img/cat8.png', 'title': 'gsdgsdg sfdsf 54', 'prix': 2144, 'desc': 'BLA BLA BLA..' },
    ];

    currDetail;
    valTot;
    quantitePanier = 1;

    constructor( private panierService: PanierService ) { }

    ngOnInit() {
    }

    //  filtre
    filtreOpen() {
        document.getElementById('filtreNav').style.width = '100%';
    }

    filtreClose() {
        document.getElementById('filtreNav').style.width = '0%';
    }

    filtreCloseDetail() {
        document.getElementById('filtreNavDetail').style.height = '0%';
    }


    //  detail
    filtreOpenDetail(ind) {

        document.getElementById('London').style.display = 'block';
        document.getElementById('Tokyo').style.display = 'none';
        document.getElementById('Paris').style.display = 'none';

        this.currDetail = this.items[ind];
        this.valTot = this.currDetail.prix * 1;
        this.quantitePanier = 1;

        document.getElementById('filtreNavDetail').style.height = '100%';
    }

    openCity(cityName) {

        let i, x;

        x = document.getElementsByClassName('city');

        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }

        document.getElementById(cityName).style.display = 'block';
    }

    incQuant() {
        this.quantitePanier++;
        this.valTot = this.currDetail.prix * this.quantitePanier;
    }
    decQuant() {
        if (this.quantitePanier > 1) {
            this.quantitePanier--;
            this.valTot = this.currDetail.prix * this.quantitePanier;
        }
    }

    //  ajouter panier

    ajouterPanier() {

        const it = {    'img': this.currDetail.img      ,
                        'title': this.currDetail.title  ,
                        'quant': this.quantitePanier    ,
                        'total': this.valTot };

        this.panierService.items.push(it);

        this.filtreCloseDetail();
    }
}
