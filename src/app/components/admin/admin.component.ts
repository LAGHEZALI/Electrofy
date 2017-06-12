import { Component, OnInit } from '@angular/core';
import { SignService } from './../../services/sign.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private signService: SignService) { }

  ngOnInit() {
  }

  retour() {
    const temp = document.getElementById('racine');
    temp.click();

  }
}
