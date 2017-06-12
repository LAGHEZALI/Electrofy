import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignService } from './../../services/sign.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public signService: SignService, private router: Router) { }

  ngOnInit() {
  }

  retour() {
    this.router.navigate(['/']);
  }
}
