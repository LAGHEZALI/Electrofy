import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-produits',
  templateUrl: './nos-produits.component.html',
  styleUrls: ['./nos-produits.component.css']
})
export class NosProduitsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    filtreOpen() {
        document.getElementById('filtreNav').style.width = '100%';
    }

    filtreClose() {
        document.getElementById('filtreNav').style.width = '0%';
        console.log("ffezfze");
    }
}
